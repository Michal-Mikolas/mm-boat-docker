import { VTYPE } from '../../lib/jsmaneuvering/src/index.js';
import { VesselProfile } from './types.js';

export const kvlcc2L64: VesselProfile = {
  id: 'kvlcc2_l64_model',
  name: 'KVLCC2 Tanker (1:5 benchmark model, 64m / 210 ft)',
  defaultZoom: 0.8,
  defaultZoomMobile: 0.8,
  physicsModel: VTYPE.KVLCC2_L64,
  physicsOverrides: {
    // These overrides are limited to prop-walk behavior. Core forward MMG
    // coefficients come from the calibrated KVLCC2_L64 benchmark vessel.
    prop_walk_handedness: 'RH',
    prop_walk_ahead_coeff: 0.0,
    prop_walk_astern_coeff: 0.10,
    prop_walk_decay_j0: 0.30,
    prop_walk_decay_power: 2.0,
    prop_walk_yaw_arm: 0.0,
  },
  dimensions: {
    length: 64.0,
    beam: 11.6,
  },
  engine: {
    // The calibrated MMG preset is a 1:5 KVLCC2-L64 benchmark vessel. Research
    // puts its design condition around 3.25 rps (~195 RPM), so we cap the
    // profile near 5 rps to keep full-ahead within a plausible model-scale range
    // instead of the previous 7.5 rps / 450 RPM hotfix.
    maxEngineRPM: 300,
    reductionGearRatio: 1.0,
  },
  steering: {
    maxRudderAngleRads: 35 * (Math.PI / 180),
  },
  environment: {
    waterDepth: 15.0,
  },
  assets: {
    model3DPath: './assets/vessels/kvlcc2-l64/model.glb',
    sprite2DPath: './assets/vessels/kvlcc2-l64/sprite.png',
  },
};
