import './style.css';
import { tanker } from './vessels/tanker';
import { RenderingEngine } from './rendering-engine';
import { BoatController } from '../lib/boat-controller';

const container = document.getElementById('app');
const throttleInput = document.getElementById('throttle') as HTMLInputElement;
const steeringInput = document.getElementById('steering') as HTMLInputElement;
const speedVal = document.getElementById('speed-val');
const rpmVal = document.getElementById('rpm-val');

if (!container) {
  throw new Error("Could not find '#app' container in DOM.");
}

const engine = new RenderingEngine(container);
const boat = new BoatController(tanker);

// Ensure throttle starts at 0
if (throttleInput) {
  throttleInput.value = "0";
}

if (steeringInput) {
  steeringInput.value = "0";
}

function applyControls(): void {
  const throttle = throttleInput ? parseFloat(throttleInput.value) : 0;
  const steering = steeringInput ? parseFloat(steeringInput.value) : 0;

  boat.setControls(throttle, steering);
}

// UI Listeners
if (throttleInput) {
  throttleInput.addEventListener('input', applyControls);
}

if (steeringInput) {
  steeringInput.addEventListener('input', applyControls);
}

applyControls();

// Initialize vessel
engine.loadVessel(tanker).then(() => {
  console.log('Tanker loaded successfully (or via fallback).');
});

// Animation loop
let lastTime = performance.now();

function animate() {
  requestAnimationFrame(animate);
  
  const currentTime = performance.now();
  let dt = (currentTime - lastTime) / 1000; // Delta time in seconds
  lastTime = currentTime;

  // Cap delta time to prevent physics explosion (e.g., when switching tabs)
  dt = Math.min(dt, 0.1);

  // Update Physics
  boat.update(dt);

  // Update HUD
  if (rpmVal) rpmVal.textContent = Math.round(boat.currentEngineRPM).toString();
  if (speedVal) {
    const knots = boat.currentSpeed * 1.94384; // 1 m/s ? 1.94 knots
    speedVal.textContent = knots.toFixed(2);
  }

  // Update Visuals
  engine.updateVesselTransform(boat.position, boat.rotationY, boat.pivotPoint);
  
  // Render
  engine.render();
}

animate();
