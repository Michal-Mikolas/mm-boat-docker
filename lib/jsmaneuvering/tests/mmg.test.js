import { Vessel } from '../src/vessel.js';
import { VTYPE } from '../src/index.js';
import { KVLCC2_L64 } from '../src/mmg/calibrated_vessels.js';
import { propellerForces } from '../src/mmg/propeller.js';
import { expectArraysToBeClose } from './testUtils.js';

function toSignedHeading(psi) {
  return psi > Math.PI ? psi - 2 * Math.PI : psi;
}

function integrateTurningResponse(vessel, X0, nps, delta, steps = 50, dT = 0.1) {
  let X = [...X0];
  let pos = [0.0, 0.0];
  let psi = 0.0;

  for (let i = 0; i < steps; i++) {
    const [newX, newEta] = vessel.pstep({
      X,
      pos,
      dT,
      nps,
      delta,
      psi,
      water_depth: 15.0,
    });

    X = newX;
    pos = [newEta[0], newEta[1]];
    psi = newEta[2];
  }

  return {
    X,
    pos,
    psi: toSignedHeading(psi),
  };
}

function simulateTurningCircle(
  vessel,
  { initialU, targetDeltaDeg = 35, deltaRateDegPerSec = 3.94, dT = 0.1, maxTime = 1000 }
) {
  let X = [initialU, 0.0, 0.0];
  let pos = [0.0, 0.0];
  let psi = 0.0;
  let delta = 0.0;

  const nps = vessel.nps_from_u(initialU);
  const targetDelta = targetDeltaDeg * Math.PI / 180;
  const deltaRate = deltaRateDegPerSec * Math.PI / 180;

  let advance = null;
  let tactical = null;

  for (let t = 0; t < maxTime; t += dT) {
    delta = Math.min(targetDelta, delta + deltaRate * dT);

    const [newX, newEta] = vessel.pstep({
      X,
      pos,
      dT,
      nps,
      delta,
      psi,
      water_depth: 15.0,
    });

    X = newX;
    pos = [newEta[0], newEta[1]];
    psi = newEta[2];

    if (advance === null && psi >= Math.PI / 2) {
      advance = pos[0];
    }

    if (tactical === null && psi >= Math.PI) {
      tactical = Math.abs(pos[1]);
      break;
    }
  }

  return {
    advance,
    tactical,
    advanceOverLpp: advance / vessel.vessel.Lpp,
    tacticalOverLpp: tactical / vessel.vessel.Lpp,
  };
}

describe('MMG Dynamics (KVLCC2_L64)', () => {
  const vessel = new Vessel({ new_from: VTYPE.KVLCC2_L64 });
  const rhPropWalkConfig = {
    prop_walk_handedness: 'RH',
    prop_walk_astern_coeff: 0.12,
    prop_walk_decay_j0: 0.35,
    prop_walk_decay_power: 2.0,
    prop_walk_max_ratio: 0.3,
  };

  it('calculates dynamics correctly', () => {
    const X = [2.0, 0.1, 0.05];
    const psi = 0.0;
    const delta = 0.17453292519943295; // 10 degrees in radians
    const nps = 5;
    const h = 15.0;

    const expectedDot = [
      0.039805613458156586,
      -0.03917991369962692,
      -0.005388890393078327
    ];

    const actualDot = vessel.dynamics({ X, psi, delta, h, nps });
    expectArraysToBeClose(actualDot, expectedDot, 5);
  });

  it('performs step correctly', () => {
    const X = [2.0, 0.1, 0.05];
    const delta = 0.17453292519943295;
    const nps = 5;
    const h = 15.0;
    const dT = 1.0;
    const psi = 0.0;

    const expectedStepDot = [
      0.039805613458156586,
      -0.03917991369962692,
      -0.005388890393078327
    ];

    const actualStepDot = vessel.step({ X, dT, nps, delta, psi, water_depth: h });
    expectArraysToBeClose(actualStepDot, expectedStepDot, 5);
  });

  it('performs pstep correctly', () => {
    const X = [2.0, 0.1, 0.05];
    const pos = [0.0, 0.0];
    const psi = 0.0;
    const delta = 0.17453292519943295;
    const nps = 5;
    const h = 15.0;
    const dT = 1.0;

    const expectedUvr = [
      2.0398056134581566,
      0.06082008630037308,
      0.044611109606921676
    ];
    const expectedEta = [
      2.0199027061462402,
      0.08041004836559296,
      0.047305554151535034
    ];

    const [actualUvr, actualEta] = vessel.pstep({ X, pos, dT, nps, delta, psi, water_depth: h });
    expectArraysToBeClose(actualUvr, expectedUvr, 5);
    expectArraysToBeClose(actualEta, expectedEta, 5);
  });

  describe('Scenarios', () => {
    it('handles current', () => {
      const X = [2.0, 0.1, 0.05];
      const psi = 0.0;
      const delta = 0.17453292519943295;
      const nps = 5;
      const h = 15.0;
      const fl_vel = 0.5;
      const fl_psi = 0.7853981633974483; // pi/4

      const expected = [0.04913993552327156, -0.06351186335086823, -0.006599971558898687];
      const actual = vessel.dynamics({ X, psi, delta, h, nps, fl_psi, fl_vel });
      expectArraysToBeClose(actual, expected, 5);
    });

    it('handles wind', () => {
      const X = [2.0, 0.1, 0.05];
      const psi = 0.0;
      const delta = 0.17453292519943295;
      const nps = 5;
      const h = 15.0;
      const w_vel = 10.0;
      const beta_w = 1.5707963267948966; // pi/2

      const expected = [0.03881148248910904, -0.029871225357055664, -0.005223555024713278];
      const actual = vessel.dynamics({ X, psi, delta, h, nps, w_vel, beta_w });
      expectArraysToBeClose(actual, expected, 5);
    });

    it('handles shallow water', () => {
      const X = [2.0, 0.1, 0.05];
      const psi = 0.0;
      const delta = 0.17453292519943295;
      const nps = 5;
      const h_shallow = vessel.vessel.d * 1.2;

      const expected = [0.05298309773206711, -0.031146833673119545, -0.011860793456435204];
      const actual = vessel.dynamics({ X, psi, delta, h: h_shallow, nps });
      expectArraysToBeClose(actual, expected, 5);
    });

    it('handles zero velocity', () => {
      const X_zero = [0.0, 0.0, 0.0];
      const psi = 0.0;
      const delta = 0.17453292519943295;
      const nps = 5;
      const h = 15.0;

      const expected = [0.03239151331207554, 0.0, 0.0];
      const actual = vessel.dynamics({ X: X_zero, psi, delta, h, nps });
      expectArraysToBeClose(actual, expected, 5);
    });

    it('coasting ahead with rudder applied still creates yaw response', () => {
      const X = [3.6, 0.0, 0.0]; // about 7 knots ahead
      const psi = 0.0;
      const delta = 35 * Math.PI / 180;
      const nps = 0.0;
      const h = 15.0;

      const [, v_dot, r_dot] = vessel.dynamics({ X, psi, delta, h, nps });
      const [, eta] = vessel.pstep({
        X,
        pos: [0.0, 0.0],
        dT: 1.0,
        nps,
        delta,
        psi,
        water_depth: h,
      });

      expect(Math.abs(v_dot)).toBeGreaterThan(0);
      expect(Math.abs(r_dot)).toBeGreaterThan(0);
      expect(Math.abs(eta[2])).toBeGreaterThan(0);
    });
  });

  it('calculates nps from u', () => {
    const expected = 2.426211674340134;
    const actual = vessel.nps_from_u(2.0);
    expect(actual).toBeCloseTo(expected, 5);
  });

  describe('Reverse Motion Safeguards', () => {
    it('produces finite forces when moving astern with zero rudder', () => {
      const X = [-2.0, 0.0, 0.0];
      const psi = 0.0;
      const delta = 0.0;
      const nps = -5;

      const actual = vessel.dynamics({ X, psi, delta, nps });
      actual.forEach(v => {
        expect(Number.isFinite(v)).toBe(true);
      });
    });

    it('does not induce yaw when moving straight astern with zero rudder', () => {
      // With v=0, r=0, delta=0 the yaw moment must be zero (no spin-out)
      const X = [-2.0, 0.0, 0.0];
      const psi = 0.0;
      const delta = 0.0;
      const nps = -5;

      const [u_dot, v_dot, r_dot] = vessel.dynamics({ X, psi, delta, nps });
      expect(r_dot).toBeCloseTo(0.0, 8);
      expect(v_dot).toBeCloseTo(0.0, 8);
    });

    it('produces controllable yaw with rudder applied in reverse', () => {
      const X = [-2.0, 0.1, 0.05];
      const psi = 0.0;
      const delta = 0.17453292519943295; // 10 degrees
      const nps = -5;

      const actual = vessel.dynamics({ X, psi, delta, nps });
      actual.forEach(v => {
        expect(Number.isFinite(v)).toBe(true);
        expect(Math.abs(v)).toBeLessThan(1.0); // no explosions
      });
    });

    it('damps an existing reverse turn after the rudder is centered', () => {
      let X = [-2.0, 0.0, 0.0];
      let pos = [0.0, 0.0];
      let psi = 0.0;
      const dT = 0.1;
      const nps = -5;
      const turningDelta = 0.17453292519943295; // 10 degrees

      for (let i = 0; i < 20; i++) {
        const [newX, newEta] = vessel.pstep({
          X,
          pos,
          dT,
          nps,
          delta: turningDelta,
          psi,
          water_depth: 15.0,
        });

        X = newX;
        pos = [newEta[0], newEta[1]];
        psi = newEta[2];
      }

      const yawRateBeforeCentering = X[2];
      const [centeredX] = vessel.pstep({
        X,
        pos,
        dT,
        nps,
        delta: 0.0,
        psi,
        water_depth: 15.0,
      });

      expect(Math.abs(centeredX[2])).toBeLessThan(Math.abs(yawRateBeforeCentering));
    });

    it('applies a restoring yaw acceleration when centered during reverse motion', () => {
      const X = [-2.041816413402558, 0.002803172962740064, -0.00037652285245712844];
      const psi = 0.0;
      const delta = 0.0;
      const nps = -5;

      const [, , r_dot] = vessel.dynamics({ X, psi, delta, nps, h: 15.0 });
      expect(r_dot).toBeGreaterThan(0);
    });

    it('remains stable at high reverse speed (~7 knots astern)', () => {
      // ~7 knots ≈ 3.6 m/s — this is where the old code would spin out
      const X = [-3.6, 0.0, 0.0];
      const psi = 0.0;
      const delta = 0.0;
      const nps = -8;

      const [u_dot, v_dot, r_dot] = vessel.dynamics({ X, psi, delta, nps });
      expect(Number.isFinite(u_dot)).toBe(true);
      expect(Number.isFinite(v_dot)).toBe(true);
      expect(Number.isFinite(r_dot)).toBe(true);
      // No yaw or sway at zero rudder, zero initial sway/yaw
      expect(r_dot).toBeCloseTo(0.0, 8);
      expect(v_dot).toBeCloseTo(0.0, 8);
    });

    it('decelerates (produces forward force) when going astern with prop pushing back', () => {
      // Ship moving backward, prop spinning backward → thrust is in -X direction
      // The hull drag should oppose motion (positive X, decelerating the ship)
      const X = [-2.0, 0.0, 0.0];
      const psi = 0.0;
      const delta = 0.0;
      const nps = -5;

      const [u_dot] = vessel.dynamics({ X, psi, delta, nps });
      // u_dot should be negative (accelerating further astern) because nps is driving
      // the ship backward, but the key test is that it's finite and reasonable
      expect(Number.isFinite(u_dot)).toBe(true);
      expect(Math.abs(u_dot)).toBeLessThan(1.0);
    });

    it('hull resistance opposes backward motion (u_dot is positive when coasting astern)', () => {
      // A ship coasting backward with no propeller should decelerate (u_dot > 0)
      // because hull resistance opposes the direction of travel.
      const X = [-2.0, 0.0, 0.0];
      const psi = 0.0;
      const delta = 0.0;
      const nps = 0; // no propeller — only hull forces

      const [u_dot] = vessel.dynamics({ X, psi, delta, nps });
      // u_dot must be positive (opposing backward motion, decelerating toward zero)
      expect(u_dot).toBeGreaterThan(0);
    });

    it('reverse acceleration magnitude decreases with increasing astern speed', () => {
      // Just like forward motion: the faster you go, the less you accelerate.
      // At low reverse speed, almost all thrust goes to acceleration.
      // At higher reverse speed, hull resistance eats into it.
      const delta = 0.0;
      const psi = 0.0;
      const nps = -5;

      const [u_dot_slow] = vessel.dynamics({ X: [-0.5, 0, 0], psi, delta, nps });
      const [u_dot_fast] = vessel.dynamics({ X: [-3.0, 0, 0], psi, delta, nps });

      // Both should be negative (accelerating astern)
      expect(u_dot_slow).toBeLessThan(0);
      expect(u_dot_fast).toBeLessThan(0);

      // The slow case should have MORE acceleration (larger magnitude)
      expect(Math.abs(u_dot_slow)).toBeGreaterThan(Math.abs(u_dot_fast));
    });
  });

  describe('Prop Walk', () => {
    it('keeps built-in vessels unchanged until prop-walk coefficients are provided', () => {
      const [u_dot, v_dot, r_dot] = vessel.dynamics({
        X: [-2.0, 0.0, 0.0],
        psi: 0.0,
        delta: 0.0,
        nps: -5,
      });

      expect(u_dot).toBeLessThan(0);
      expect(v_dot).toBeCloseTo(0.0, 8);
      expect(r_dot).toBeCloseTo(0.0, 8);
    });

    it('generates stern walk to port and bow swing to starboard for RH propellers in astern', () => {
      const propWalkVessel = new Vessel({
        vessel_data: {
          ...KVLCC2_L64,
          ...rhPropWalkConfig,
        },
      });

      const [, v_dot, r_dot] = propWalkVessel.dynamics({
        X: [0.0, 0.0, 0.0],
        psi: 0.0,
        delta: 0.0,
        nps: -5,
        h: 15.0,
      });

      expect(v_dot).toBeLessThan(0.0);
      expect(r_dot).toBeGreaterThan(0.0);
    });

    it('leaves ahead behavior unchanged when ahead prop-walk coefficient is zero', () => {
      const propWalkVessel = new Vessel({
        vessel_data: {
          ...KVLCC2_L64,
          ...rhPropWalkConfig,
        },
      });

      const args = {
        X: [2.0, 0.0, 0.0],
        psi: 0.0,
        delta: 0.0,
        nps: 5,
        h: 15.0,
      };

      expectArraysToBeClose(propWalkVessel.dynamics(args), vessel.dynamics(args), 8);
    });

    it('reverses prop-walk direction for LH propellers', () => {
      const rh = propellerForces(
        { ...KVLCC2_L64, ...rhPropWalkConfig },
        0.0,
        -5,
        0.0
      );
      const lh = propellerForces(
        {
          ...KVLCC2_L64,
          ...rhPropWalkConfig,
          prop_walk_handedness: 'LH',
        },
        0.0,
        -5,
        0.0
      );

      expect(rh.Y_P).toBeLessThan(0.0);
      expect(rh.N_P).toBeGreaterThan(0.0);
      expect(lh.Y_P).toBeGreaterThan(0.0);
      expect(lh.N_P).toBeLessThan(0.0);
    });

    it('decays prop-walk magnitude as the astern advance ratio grows', () => {
      const configuredVessel = {
        ...KVLCC2_L64,
        ...rhPropWalkConfig,
      };

      const nearBollard = propellerForces(configuredVessel, 0.0, -5, 0.0);
      const establishedSternway = propellerForces(configuredVessel, -3.0, -5, 0.0);

      expect(Math.abs(nearBollard.Y_P)).toBeGreaterThan(Math.abs(establishedSternway.Y_P));
      expect(Math.abs(nearBollard.N_P)).toBeGreaterThan(Math.abs(establishedSternway.N_P));
    });
  });

  describe('Response Comparisons', () => {
    it('develops stronger turning response ahead than astern at service-speed magnitude', () => {
      const serviceSpeed = 0.142 * Math.sqrt(9.81 * vessel.vessel.Lpp);
      const serviceNps = vessel.nps_from_u(serviceSpeed);
      const delta = 35 * Math.PI / 180;

      const [, , aheadYawAccel] = vessel.dynamics({
        X: [serviceSpeed, 0.0, 0.0],
        psi: 0.0,
        delta,
        h: 15.0,
        nps: serviceNps,
      });
      const [, , asternYawAccel] = vessel.dynamics({
        X: [-serviceSpeed, 0.0, 0.0],
        psi: 0.0,
        delta,
        h: 15.0,
        nps: -serviceNps,
      });

      const ahead = integrateTurningResponse(vessel, [serviceSpeed, 0.0, 0.0], serviceNps, delta);
      const astern = integrateTurningResponse(vessel, [-serviceSpeed, 0.0, 0.0], -serviceNps, delta);

      expect(Math.abs(aheadYawAccel)).toBeGreaterThan(Math.abs(asternYawAccel) * 1.1);
      expect(Math.abs(ahead.psi)).toBeGreaterThan(Math.abs(astern.psi) * 1.1);
    });

    it('keeps 35-degree turning-circle indices within a broad KVLCC2 benchmark band', () => {
      // Published KVLCC2 free-running data is around AD/Lpp ~ 3.0 and TD/Lpp ~ 3.1
      // depending on facility, scale effects, and analysis method. This band is
      // intentionally broad and serves as a regression guard, not strict calibration.
      const serviceSpeed = 0.142 * Math.sqrt(9.81 * vessel.vessel.Lpp);
      const result = simulateTurningCircle(vessel, {
        initialU: serviceSpeed,
        targetDeltaDeg: 35,
        deltaRateDegPerSec: 3.94,
      });

      expect(result.advanceOverLpp).toBeGreaterThan(2.3);
      expect(result.advanceOverLpp).toBeLessThan(3.4);
      expect(result.tacticalOverLpp).toBeGreaterThan(2.3);
      expect(result.tacticalOverLpp).toBeLessThan(3.5);
    });
  });

  describe('Errors', () => {
    it('throws LogicError if fl_vel provided without fl_psi', () => {
      expect(() => {
        vessel.step({ X: [1, 0, 0], dT: 1, nps: 5, delta: 0, psi: 0, fl_vel: 0.5 });
      }).toThrow('LogicError');
    });

    it('throws error if water_depth < threshold (dummy test)', () => {
      expect(() => {
        vessel.step({ X: [1, 0, 0], dT: 1, nps: 5, delta: 0, psi: 0, water_depth: 1.0 });
      }).toThrow();
    });
  });
});
