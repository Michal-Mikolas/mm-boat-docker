import { Vessel } from '../lib/jsmaneuvering/src/vessel.js';
import { VTYPE } from '../lib/jsmaneuvering/src/index.js';

const KNOTS_PER_MPS = 1.94384;
const DEG_TO_RAD = Math.PI / 180;

const vesselMap = {
  kvlcc2: VTYPE.KVLCC2_L64,
};

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (!arg.startsWith('--')) {
      continue;
    }

    const key = arg.slice(2);
    const next = argv[i + 1];

    if (!next || next.startsWith('--')) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    i += 1;
  }

  return args;
}

function parseNumber(value, fallback) {
  if (value === undefined) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toSignedHeading(psi) {
  return psi > Math.PI ? psi - 2 * Math.PI : psi;
}

function formatNumber(value, digits = 3) {
  return Number.isFinite(value) ? value.toFixed(digits) : 'n/a';
}

function simulateTurningCircle(vessel, options) {
  let X = [options.initialU, 0.0, 0.0];
  let pos = [0.0, 0.0];
  let psi = 0.0;
  let delta = 0.0;

  const targetDelta = options.targetDeltaDeg * DEG_TO_RAD;
  const deltaRate = options.deltaRateDegPerSec * DEG_TO_RAD;
  const nps = options.nps ?? vessel.nps_from_u(options.initialU);

  let advance = null;
  let tactical = null;
  let reached90At = null;
  let reached180At = null;

  for (let t = 0; t < options.maxTime; t += options.dT) {
    delta = Math.min(targetDelta, delta + deltaRate * options.dT);

    const [newX, newEta] = vessel.pstep({
      X,
      pos,
      dT: options.dT,
      nps,
      delta,
      psi,
      water_depth: options.waterDepth,
    });

    X = newX;
    pos = [newEta[0], newEta[1]];
    psi = newEta[2];

    if (advance === null && psi >= Math.PI / 2) {
      advance = pos[0];
      reached90At = t + options.dT;
    }

    if (tactical === null && psi >= Math.PI) {
      tactical = Math.abs(pos[1]);
      reached180At = t + options.dT;
      break;
    }
  }

  return {
    nps,
    finalUvr: X,
    finalPos: pos,
    finalPsi: psi,
    signedPsi: toSignedHeading(psi),
    advance,
    tactical,
    advanceOverLpp: advance / vessel.vessel.Lpp,
    tacticalOverLpp: tactical / vessel.vessel.Lpp,
    reached90At,
    reached180At,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const vesselKey = String(args.vessel ?? 'kvlcc2').toLowerCase();
  const vesselType = vesselMap[vesselKey];

  if (!vesselType) {
    const supported = Object.keys(vesselMap).join(', ');
    throw new Error(`Unsupported vessel "${vesselKey}". Supported values: ${supported}`);
  }

  const vessel = new Vessel({ new_from: vesselType });
  const serviceSpeed = 0.142 * Math.sqrt(9.81 * vessel.vessel.Lpp);

  const options = {
    initialU: parseNumber(args['speed-ms'], serviceSpeed),
    nps: args.nps !== undefined ? parseNumber(args.nps, undefined) : undefined,
    targetDeltaDeg: parseNumber(args['delta-deg'], 35),
    deltaRateDegPerSec: parseNumber(args['delta-rate-deg-per-sec'], 3.94),
    dT: parseNumber(args.dt, 0.1),
    maxTime: parseNumber(args['max-time'], 1000),
    waterDepth: parseNumber(args['water-depth'], 15.0),
  };

  const result = simulateTurningCircle(vessel, options);

  console.log(`Turning circle report for ${vesselKey}`);
  console.log(`Lpp: ${formatNumber(vessel.vessel.Lpp, 1)} m`);
  console.log(`Initial speed: ${formatNumber(options.initialU, 3)} m/s (${formatNumber(options.initialU * KNOTS_PER_MPS, 3)} kn)`);
  console.log(`Propeller rate: ${formatNumber(result.nps, 4)} 1/s`);
  console.log(`Rudder angle: ${formatNumber(options.targetDeltaDeg, 2)} deg`);
  console.log(`Rudder rate: ${formatNumber(options.deltaRateDegPerSec, 2)} deg/s`);
  console.log(`Advance: ${formatNumber(result.advance, 3)} m (A/Lpp = ${formatNumber(result.advanceOverLpp, 3)})`);
  console.log(`Tactical diameter: ${formatNumber(result.tactical, 3)} m (TD/Lpp = ${formatNumber(result.tacticalOverLpp, 3)})`);
  console.log(`Time to 90 deg heading change: ${formatNumber(result.reached90At, 2)} s`);
  console.log(`Time to 180 deg heading change: ${formatNumber(result.reached180At, 2)} s`);
  console.log(`Final state at 180 deg crossing: u=${formatNumber(result.finalUvr[0], 3)} m/s, v=${formatNumber(result.finalUvr[1], 3)} m/s, r=${formatNumber(result.finalUvr[2], 5)} rad/s`);
}

main();
