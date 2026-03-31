import { BoatController } from '../lib/boat-controller.js';
import { j105 } from '../src/vessels/j105.js';
import { kvlcc2FullScale } from '../src/vessels/kvlcc2-full-scale.js';
import { kvlcc2L64 } from '../src/vessels/kvlcc2-l64.js';
import { navy44 } from '../src/vessels/navy-44.js';

describe('BoatController', () => {
  it('accurately wraps the physics engine and maps coordinates using the Tanker profile', () => {
    const controller = new BoatController(kvlcc2L64);

    // Initial state: X = [2.0, 0.1, 0.05], pos = [0, 0], psi = 0
    (controller as any).uvr = [2.0, 0.1, 0.05];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    // Inputs to get max nps for tanker:
    // maxEngineRPM = 300, reductionGearRatio = 1.0 -> maxPropellerNPS = 5.0
    // We set throttle to 1.0 to get nps = 5.0
    // maxRudderAngleRads = 35 deg -> steering 10/35 to get 10 deg
    const throttle = 1.0; 
    const steering = 10 / 35;

    controller.setControls(throttle, steering);
    controller.update(1.0); // dt = 1.0

    const [north, east] = (controller as any).pos;
    const psi = (controller as any).psi;

    // Mapping:
    // x = eta[1] (Easting)
    // z = -eta[0] (-Northing)
    // rotationY = -eta[2] (-Heading)
    expect(controller.position.x).toBeCloseTo(east, 8);
    expect(controller.position.z).toBeCloseTo(-north, 8);
    expect(controller.rotationY).toBeCloseTo(-psi, 8);
    expect(controller.position.y).toBe(0);
    
    // Check RPM: throttle (1.0) * maxEngineRPM (300) = 300
    expect(controller.currentEngineRPM).toBe(300);
  });

  it('clamps control inputs between -1.0 and 1.0', () => {
    const controller = new BoatController(kvlcc2L64);
    controller.setControls(2.0, -5.0);
    
    // Internal throttle and steering should be clamped
    expect((controller as any).throttle).toBe(1.0);
    expect((controller as any).steering).toBe(-1.0);
  });

  it('uses steering input to change heading over time', () => {
    const controller = new BoatController(kvlcc2L64);

    (controller as any).uvr = [2.0, 0.0, 0.0];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    controller.setControls(1.0, 0.5);
    controller.update(1.0);

    expect(controller.rotationY).not.toBeCloseTo(0, 5);
    expect(controller.position.x).not.toBeCloseTo(0, 5);
  });

  it('maps the physics engine pivot point into render coordinates', () => {
    const controller = new BoatController(kvlcc2L64);

    (controller as any).uvr = [2.0, 0.1, 0.05];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    controller.setControls(1.0, 10 / 35);
    controller.update(1.0);

    const [u, v, r] = (controller as any).uvr;
    const [north, east] = (controller as any).pos;
    const psi = (controller as any).psi;
    const longitudinalOffset = -v / r;
    const expectedNorth = north + Math.cos(psi) * longitudinalOffset;
    const expectedEast = east + Math.sin(psi) * longitudinalOffset;

    expect(u).toBeGreaterThan(0);
    expect(controller.pivotPoint).not.toBeNull();
    expect(controller.pivotPoint?.x).toBeCloseTo(expectedEast, 5);
    expect(controller.pivotPoint?.z).toBeCloseTo(-expectedNorth, 5);
    expect(controller.pivotPoint?.y).toBe(0);
  });

  it('hides the pivot point when the yaw rate is effectively zero', () => {
    const controller = new BoatController(kvlcc2L64);

    (controller as any).uvr = [2.0, 0.0, 0.0];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    controller.setControls(1.0, 0.0);
    controller.update(1.0);

    expect(controller.pivotPoint).toBeNull();
  });

  it('applies tanker prop-walk overrides during astern motion', () => {
    const controller = new BoatController(kvlcc2L64);

    controller.setControls(-1.0, 0.0);
    controller.update(1.0);

    expect(controller.position.x).toBeLessThan(0);
    expect(controller.rotationY).toBeLessThan(0);
  });

  it('supports fully custom MMG vessel data for the J/105 profile', () => {
    const controller = new BoatController(j105);

    controller.setControls(0.8, 0.35);
    controller.update(0.5);

    expect(Number.isFinite(controller.position.x)).toBe(true);
    expect(Number.isFinite(controller.position.z)).toBe(true);
    expect(Number.isFinite(controller.rotationY)).toBe(true);
    expect(Number.isFinite(controller.currentSpeed)).toBe(true);
    expect(controller.currentEngineRPM).toBeCloseTo(2880, 5);
  });

  it('supports the Navy 44 custom profile and preserves RH astern prop walk', () => {
    const ahead = new BoatController(navy44);
    const astern = new BoatController(navy44);

    ahead.setControls(0.8, 0.2);
    ahead.update(0.5);

    astern.setControls(-1.0, 0.0);
    astern.update(1.0);

    expect(Number.isFinite(ahead.position.x)).toBe(true);
    expect(Number.isFinite(ahead.position.z)).toBe(true);
    expect(Number.isFinite(ahead.rotationY)).toBe(true);
    expect(Number.isFinite(ahead.currentSpeed)).toBe(true);
    expect(ahead.currentEngineRPM).toBeCloseTo(2400, 5);

    expect(astern.currentEngineRPM).toBe(-3000);
    expect(astern.currentSpeed).toBeLessThan(0);
    expect(astern.position.x).toBeLessThan(0);
    expect(astern.rotationY).toBeLessThan(0);
  });

  it('supports the full-scale KVLCC2 profile in deep water', () => {
    const controller = new BoatController(kvlcc2FullScale);

    controller.setControls(1.0, 0.0);
    controller.update(0.5);

    expect(Number.isFinite(controller.position.x)).toBe(true);
    expect(Number.isFinite(controller.position.z)).toBe(true);
    expect(Number.isFinite(controller.rotationY)).toBe(true);
    expect(Number.isFinite(controller.currentSpeed)).toBe(true);
    expect(controller.currentEngineRPM).toBe(110);
    expect(controller.currentSpeed).toBeGreaterThan(0);
  });

  it('uses the astern gearbox ratio for reverse thrust on J/105', () => {
    const controller = new BoatController(j105);

    (controller as any).uvr = [0.0, 0.0, 0.0];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    controller.setControls(-1.0, 0.0);
    controller.update(0.1);

    const appliedNps = (controller as any).vessel.model.dynamics({
      X: [0.0, 0.0, 0.0],
      psi: 0.0,
      delta: 0.0,
      nps: -((j105.engine.maxEngineRPM / (j105.engine.reductionGearRatioAstern ?? j105.engine.reductionGearRatio)) / 60.0),
    });

    expect(controller.currentEngineRPM).toBe(-3600);
    expect(Math.abs((j105.engine.maxEngineRPM / (j105.engine.reductionGearRatioAstern ?? j105.engine.reductionGearRatio)) / 60.0))
      .toBeLessThan(Math.abs((j105.engine.maxEngineRPM / j105.engine.reductionGearRatio) / 60.0));
    expect(appliedNps[0]).toBeLessThan(0);
  });

  it('gives the J/105 weaker astern acceleration than ahead from rest', () => {
    const ahead = new BoatController(j105);
    const astern = new BoatController(j105);

    ahead.setControls(1.0, 0.0);
    astern.setControls(-1.0, 0.0);

    for (let i = 0; i < 20; i += 1) {
      ahead.update(0.1);
      astern.update(0.1);
    }

    expect(ahead.currentSpeed).toBeGreaterThan(0);
    expect(astern.currentSpeed).toBeLessThan(0);
    expect(ahead.currentSpeed).toBeGreaterThan(Math.abs(astern.currentSpeed));
  });
});
