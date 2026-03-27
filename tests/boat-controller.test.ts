import { BoatController } from '../lib/boat-controller.js';
import { tanker } from '../src/vessels/tanker.js';

describe('BoatController', () => {
  it('accurately wraps the physics engine and maps coordinates using the Tanker profile', () => {
    const controller = new BoatController(tanker);

    // Initial state: X = [2.0, 0.1, 0.05], pos = [0, 0], psi = 0
    (controller as any).uvr = [2.0, 0.1, 0.05];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    // Inputs to get max nps for tanker:
    // maxEngineRPM = 120, reductionGearRatio = 1.0 -> maxPropellerNPS = 2.0
    // We set throttle to 1.0 to get nps = 2.0
    // maxRudderAngleRads = 35 deg -> steering 10/35 to get 10 deg
    const throttle = 1.0; 
    const steering = 10 / 35;

    controller.setControls(throttle, steering);
    controller.update(1.0); // dt = 1.0

    // Expected values calculated via scratch script for nps=2.0, delta=10deg:
    // expectedEta = [2.0084550380706787, 0.08028249442577362, 0.04732070118188858]
    // Mapping:
    // x = eta[1] (Easting)
    // z = -eta[0] (-Northing)
    // rotationY = -eta[2] (-Heading)

    expect(controller.position.x).toBeCloseTo(0.08028249442577362, 5);
    expect(controller.position.z).toBeCloseTo(-2.0084550380706787, 5);
    expect(controller.rotationY).toBeCloseTo(-0.04732070118188858, 5);
    expect(controller.position.y).toBe(0);
    
    // Check RPM: throttle (1.0) * maxEngineRPM (120) = 120
    expect(controller.currentEngineRPM).toBe(120);
  });

  it('clamps control inputs between -1.0 and 1.0', () => {
    const controller = new BoatController(tanker);
    controller.setControls(2.0, -5.0);
    
    // Internal throttle and steering should be clamped
    expect((controller as any).throttle).toBe(1.0);
    expect((controller as any).steering).toBe(-1.0);
  });
});
