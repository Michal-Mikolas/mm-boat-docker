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
    // maxEngineRPM = 450, reductionGearRatio = 1.0 -> maxPropellerNPS = 7.5
    // We set throttle to 1.0 to get nps = 7.5
    // maxRudderAngleRads = 35 deg -> steering 10/35 to get 10 deg
    const throttle = 1.0; 
    const steering = 10 / 35;

    controller.setControls(throttle, steering);
    controller.update(1.0); // dt = 1.0

    // Expected values calculated via current controller wiring for nps=7.5, delta=10deg:
    // expectedEta = [2.0382018089294434, 0.07921896874904633, 0.04744698852300644]
    // Mapping:
    // x = eta[1] (Easting)
    // z = -eta[0] (-Northing)
    // rotationY = -eta[2] (-Heading)

    expect(controller.position.x).toBeCloseTo(0.07921896874904633, 5);
    expect(controller.position.z).toBeCloseTo(-2.0382018089294434, 5);
    expect(controller.rotationY).toBeCloseTo(-0.04744698852300644, 5);
    expect(controller.position.y).toBe(0);
    
    // Check RPM: throttle (1.0) * maxEngineRPM (450) = 450
    expect(controller.currentEngineRPM).toBe(450);
  });

  it('clamps control inputs between -1.0 and 1.0', () => {
    const controller = new BoatController(tanker);
    controller.setControls(2.0, -5.0);
    
    // Internal throttle and steering should be clamped
    expect((controller as any).throttle).toBe(1.0);
    expect((controller as any).steering).toBe(-1.0);
  });

  it('uses steering input to change heading over time', () => {
    const controller = new BoatController(tanker);

    (controller as any).uvr = [2.0, 0.0, 0.0];
    (controller as any).pos = [0.0, 0.0];
    (controller as any).psi = 0.0;

    controller.setControls(1.0, 0.5);
    controller.update(1.0);

    expect(controller.rotationY).not.toBeCloseTo(0, 5);
    expect(controller.position.x).not.toBeCloseTo(0, 5);
  });
});
