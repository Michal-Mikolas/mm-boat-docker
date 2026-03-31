import {
  createInitialCameraLookAheadState,
  getEffectiveLookAheadStrength,
  getFollowRotationLookAheadTarget,
  getLookAheadDistance,
  updateCameraLookAheadState,
} from '../src/camera-look-ahead.js';

describe('camera look-ahead helper', () => {
  it('uses absolute speed in knots when computing effective strength', () => {
    const aheadStrength = getEffectiveLookAheadStrength(5 / 1.94384, 0.2);
    const asternStrength = getEffectiveLookAheadStrength(-5 / 1.94384, 0.2);

    expect(aheadStrength).toBeCloseTo(1.0, 6);
    expect(asternStrength).toBeCloseTo(1.0, 6);
  });

  it('uses actual render-space movement direction in world-motion mode', () => {
    let state = createInitialCameraLookAheadState();

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.1,
      enabled: true,
      frustumAspect: 16 / 9,
      frustumSize: 120,
      mode: 'world-motion',
      multiplier: 0.2,
      position: { x: 0, z: 0 },
      speedMps: 5 / 1.94384,
    });

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.5,
      enabled: true,
      frustumAspect: 16 / 9,
      frustumSize: 120,
      mode: 'world-motion',
      multiplier: 0.2,
      position: { x: 10, z: 0 },
      speedMps: 5 / 1.94384,
    });

    const fullDistance = getLookAheadDistance(120, 16 / 9, 1.0);

    expect(state.offset.x).toBeGreaterThan(0);
    expect(state.offset.z).toBeCloseTo(0, 6);
    expect(state.offset.x).toBeLessThan(fullDistance);
    expect(state.offset.x).toBeGreaterThan(fullDistance * 0.9);
  });

  it('preserves the last world-motion direction when movement delta is tiny', () => {
    let state = createInitialCameraLookAheadState();

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.1,
      enabled: true,
      frustumAspect: 16 / 9,
      frustumSize: 100,
      mode: 'world-motion',
      multiplier: 0.2,
      position: { x: 0, z: 0 },
      speedMps: 5 / 1.94384,
    });

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.5,
      enabled: true,
      frustumAspect: 16 / 9,
      frustumSize: 100,
      mode: 'world-motion',
      multiplier: 0.2,
      position: { x: 0, z: -5 },
      speedMps: 5 / 1.94384,
    });

    const offsetAfterMeaningfulMove = state.offset.z;

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.5,
      enabled: true,
      frustumAspect: 16 / 9,
      frustumSize: 100,
      mode: 'world-motion',
      multiplier: 0.2,
      position: { x: 0, z: -5.000001 },
      speedMps: 5 / 1.94384,
    });

    expect(state.offset.x).toBeCloseTo(0, 6);
    expect(state.offset.z).toBeLessThan(0);
    expect(state.offset.z).toBeLessThan(offsetAfterMeaningfulMove);
  });

  it('keeps follow-rotation look-ahead on the screen forward and astern axis only', () => {
    const distance = getLookAheadDistance(120, 16 / 9, 1.0);

    expect(getFollowRotationLookAheadTarget(5 / 1.94384, distance)).toEqual({
      x: 0,
      z: -distance,
    });
    expect(getFollowRotationLookAheadTarget(-5 / 1.94384, distance)).toEqual({
      x: 0,
      z: distance,
    });
  });

  it('smoothly damps the offset back toward zero when disabled', () => {
    let state = createInitialCameraLookAheadState();

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.1,
      enabled: true,
      frustumAspect: 16 / 9,
      frustumSize: 120,
      mode: 'follow-rotation',
      multiplier: 0.2,
      position: { x: 0, z: 0 },
      speedMps: 5 / 1.94384,
    });

    const engagedOffset = state.offset.z;
    expect(engagedOffset).toBeLessThan(0);

    state = updateCameraLookAheadState(state, {
      dtSeconds: 0.1,
      enabled: false,
      frustumAspect: 16 / 9,
      frustumSize: 120,
      mode: 'follow-rotation',
      multiplier: 0.2,
      position: { x: 0, z: 0 },
      speedMps: 5 / 1.94384,
    });

    expect(state.offset.z).toBeGreaterThan(engagedOffset);
    expect(state.offset.z).toBeLessThan(0);
  });

  it('caps the look-ahead by the visible viewport extent instead of a small fixed fraction', () => {
    expect(getLookAheadDistance(120, 16 / 9, 10)).toBeCloseTo(57, 6);
    expect(getLookAheadDistance(120, 0.5, 10)).toBeCloseTo(28.5, 6);
  });
});
