import { Vessel } from '../lib/jsmaneuvering/src/vessel.js';
import { VTYPE } from '../lib/jsmaneuvering/src/index.js';

const vessel = new Vessel({ new_from: VTYPE.KVLCC2_L64 });

const X = [2.0, 0.1, 0.05];
const pos = [0.0, 0.0];
const psi = 0.0;
const delta = 10 * (Math.PI / 180);
const nps = 2.0; // Max for tanker (120 RPM / 60)
const dT = 1.0;

const [actualUvr, actualEta] = vessel.pstep({ X, pos, dT, nps, delta, psi, water_depth: 15.0 });

console.log('actualUvr:', JSON.stringify(actualUvr));
console.log('actualEta:', JSON.stringify(actualEta));
