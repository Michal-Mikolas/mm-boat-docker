export type CameraLookAheadMode = 'world-motion' | 'follow-rotation';

export interface PlanarVector {
  x: number;
  z: number;
}

export interface CameraLookAheadState {
  offset: PlanarVector;
  lastPosition: PlanarVector | null;
  lastWorldMotionDirection: PlanarVector | null;
}

export interface CameraLookAheadUpdateInput {
  dtSeconds: number;
  enabled: boolean;
  frustumSize: number;
  mode: CameraLookAheadMode;
  multiplier: number;
  position: PlanarVector;
  speedMps: number;
}

const METERS_PER_SECOND_TO_KNOTS = 1.94384;
const LOOK_AHEAD_DISTANCE_PER_EFFECTIVE_STRENGTH = 0.1;
const LOOK_AHEAD_MAX_FRACTION_OF_FRUSTUM = 0.18;
const LOOK_AHEAD_SMOOTH_TIME_SECONDS = 0.2;
const MIN_WORLD_MOTION_DELTA = 1e-4;

const ZERO_VECTOR: PlanarVector = { x: 0, z: 0 };

export function createInitialCameraLookAheadState(): CameraLookAheadState {
  return {
    offset: { ...ZERO_VECTOR },
    lastPosition: null,
    lastWorldMotionDirection: null,
  };
}

export function getEffectiveLookAheadStrength(speedMps: number, multiplier: number): number {
  const safeMultiplier = Number.isFinite(multiplier) ? Math.max(0, multiplier) : 0;
  const safeSpeedMps = Number.isFinite(speedMps) ? speedMps : 0;
  return Math.abs(safeSpeedMps) * METERS_PER_SECOND_TO_KNOTS * safeMultiplier;
}

export function getLookAheadDistance(
  frustumSize: number,
  effectiveStrength: number
): number {
  if (!Number.isFinite(frustumSize) || frustumSize <= 0) {
    return 0;
  }

  const safeEffectiveStrength = Number.isFinite(effectiveStrength)
    ? Math.max(0, effectiveStrength)
    : 0;
  const distanceFraction = Math.min(
    safeEffectiveStrength * LOOK_AHEAD_DISTANCE_PER_EFFECTIVE_STRENGTH,
    LOOK_AHEAD_MAX_FRACTION_OF_FRUSTUM
  );

  return frustumSize * distanceFraction;
}

export function getFollowRotationLookAheadTarget(
  speedMps: number,
  distance: number
): PlanarVector {
  if (!Number.isFinite(speedMps) || !Number.isFinite(distance) || distance <= 0) {
    return { ...ZERO_VECTOR };
  }

  const directionSign = Math.sign(speedMps);
  if (directionSign === 0) {
    return { ...ZERO_VECTOR };
  }

  // The sprite's forward axis points toward negative Z on screen, so positive
  // surge moves the camera center forward along -Z and places the ship slightly
  // lower on screen.
  return {
    x: 0,
    z: -directionSign * distance,
  };
}

export function getWorldMotionLookAheadTarget(
  direction: PlanarVector | null,
  distance: number
): PlanarVector {
  if (!direction || !Number.isFinite(distance) || distance <= 0) {
    return { ...ZERO_VECTOR };
  }

  return {
    x: direction.x * distance,
    z: direction.z * distance,
  };
}

export function updateCameraLookAheadState(
  state: CameraLookAheadState,
  input: CameraLookAheadUpdateInput
): CameraLookAheadState {
  const position = sanitizeVector(input.position);
  const motionDirection = resolveWorldMotionDirection(
    state.lastPosition,
    position,
    state.lastWorldMotionDirection
  );
  const effectiveStrength = getEffectiveLookAheadStrength(input.speedMps, input.multiplier);
  const distance = input.enabled
    ? getLookAheadDistance(input.frustumSize, effectiveStrength)
    : 0;
  const targetOffset = input.enabled
    ? input.mode === 'follow-rotation'
      ? getFollowRotationLookAheadTarget(input.speedMps, distance)
      : getWorldMotionLookAheadTarget(motionDirection, distance)
    : ZERO_VECTOR;

  return {
    offset: dampPlanarVector(state.offset, targetOffset, input.dtSeconds),
    lastPosition: position,
    lastWorldMotionDirection: motionDirection,
  };
}

function sanitizeVector(vector: PlanarVector): PlanarVector {
  return {
    x: Number.isFinite(vector.x) ? vector.x : 0,
    z: Number.isFinite(vector.z) ? vector.z : 0,
  };
}

function resolveWorldMotionDirection(
  previousPosition: PlanarVector | null,
  currentPosition: PlanarVector,
  fallbackDirection: PlanarVector | null
): PlanarVector | null {
  if (!previousPosition) {
    return fallbackDirection;
  }

  const deltaX = currentPosition.x - previousPosition.x;
  const deltaZ = currentPosition.z - previousPosition.z;
  const deltaMagnitude = Math.hypot(deltaX, deltaZ);

  if (deltaMagnitude < MIN_WORLD_MOTION_DELTA) {
    return fallbackDirection;
  }

  return {
    x: deltaX / deltaMagnitude,
    z: deltaZ / deltaMagnitude,
  };
}

function dampPlanarVector(
  current: PlanarVector,
  target: PlanarVector,
  dtSeconds: number
): PlanarVector {
  if (!Number.isFinite(dtSeconds) || dtSeconds <= 0) {
    return sanitizeVector(current);
  }

  const alpha = 1 - Math.exp(-dtSeconds / LOOK_AHEAD_SMOOTH_TIME_SECONDS);

  return {
    x: lerp(current.x, target.x, alpha),
    z: lerp(current.z, target.z, alpha),
  };
}

function lerp(start: number, end: number, alpha: number): number {
  return start + (end - start) * alpha;
}
