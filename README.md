# Browser Vessel Maneuvering Simulator

This repository is a browser-based powered-vessel maneuvering simulator built around a local JavaScript port of `pymaneuvering`.

The README is primarily an orientation document for AI coding agents. Agents should read this file first to understand the current project shape before making changes.

If you are an AI agent and you make an important architectural or simulator-behavior change that future agents should know about, update this README in the same task. Do not try to document every small tweak here; keep it focused on project purpose, architecture, major runtime behavior, and important constraints.

## Core Intent

The long-term goal is a realistic low-speed and docking simulator.

Today, the app already includes:

- A top-down Three.js simulator view
- Throttle and steering controls
- Keyboard control support for both axes
- Touchscreen-friendly slider layout and pinch zoom
- Multiple vessel profiles with live vessel switching
- Vessel-specific profile data beyond a simple physics model enum
- Pivot-point visualization and follow-ship view options

## Architecture At A Glance

Think of the repository as three layers:

1. `lib/pymaneuvering`
   Python reference implementation. Treat this as the golden standard.
2. `lib/jsmaneuvering`
   Browser-usable JavaScript port of the reference library.
3. `src/` plus `lib/boat-controller.ts`
   The actual simulator app: UI, controls, rendering, vessel profiles, and integration glue.

Most product work should happen in the app layer, not in the core physics port.

## Critical Directives For AI Agents

1. Protect forward-motion physics. Forward maneuvering behavior in `pymaneuvering` and `jsmaneuvering` is treated as correct unless the user explicitly asks for a well-justified change.
2. Astern behavior is a safer place for investigation. Reverse-motion fixes are acceptable when backed by evidence and tests.
3. Do not introduce `mathjs` or allocation-heavy math in the physics loop. The project uses `gl-matrix` conventions to avoid GC pressure and keep runtime smooth.
4. Use approximate assertions for physics tests. JS and Python floating-point results will not always match exactly.
5. When the simulator behaves strangely, suspect control scaling, units, sign conventions, coordinate mapping, or rendering integration before changing core physics.

## Current Runtime Flow

1. `index.html` defines the canvas mount plus HUD panels for throttle, steering, stats, and settings.
2. `src/main.ts` creates:
   - `RenderingEngine`
   - `BoatController`
   - two `KeyboardAxisController` instances for steering and throttle
3. A selected `VesselProfile` is loaded from `src/vessels/`.
4. UI sliders and keyboard controllers both feed normalized control values in `[-1, 1]`.
5. `BoatController` converts normalized controls into physics inputs:
   - throttle to `nps`
   - steering to `delta`
6. `BoatController.update(dt)` calls `vessel.pstep(...)`, updates world state, and exposes render-space position, heading, speed, RPM, and pivot point.
7. `RenderingEngine` visualizes the active vessel, environment, zoom state, and optional ship-follow/pivot-point overlays.

## Controls And Interaction

Currently implemented controls: 

- Throttle slider: vertical range input
- Steering slider: horizontal range input
- Keyboard steering:
  - `A` / `D` hold to move the helm
  - `W` or `S` centers steering
- Keyboard throttle:
  - `Numpad8` / `Numpad2` hold to change throttle
  - double-tap `Numpad8` or `Numpad2` snaps toward full ahead / full astern
  - `Numpad5` centers throttle
- Double-clicking either slider also recenters that axis through the same motion logic
- Mouse wheel zoom is supported
- Two-finger pinch zoom is supported
- Mobile/coarse-pointer layouts use tighter HUD spacing and a more zoomed-out default framing

## Vessel Profiles

Vessel profiles are no longer just a lightweight wrapper around a physics model constant.

The current `VesselProfile` contract in `src/vessels/types.ts` includes:

- Identity:
  - `id`, `name`
- Camera defaults:
  - `defaultZoom`, `defaultZoomMobile`
- Physics source:
  - `physicsModel` for predefined calibrated vessels
  - `physicsVesselData` for fully custom vessel definitions
  - `physicsOverrides` for patching calibrated defaults
- Dimensions:
  - `dimensions.length`, `dimensions.beam`
- Engine:
  - `engine.maxEngineRPM`
  - `engine.reductionGearRatio`
  - `engine.reductionGearRatioAstern`
- Environment:
  - `environment.waterDepth`
- Steering:
  - `steering.maxRudderAngleRads`
- Assets:
  - `assets.model3DPath`
  - `assets.sprite2DPath`

Current simulator vessels:

- `src/vessels/kvlcc2-full-scale.ts`
  - KVLCC2 full-scale benchmark/prototype using full-scale geometry with the benchmark MMG coefficient set
- `src/vessels/kvlcc2-l64.ts`
  - KVLCC2-L64 1:5 benchmark tanker using calibrated MMG data plus project-specific overrides
- `src/vessels/j105.ts`
  - J/105 sailboat using fully custom MMG vessel data
- `src/vessels/navy-44.ts`
  - Navy 44 Mk II sailboat using a conservative custom MMG baseline derived from Navy/ORC technical data plus sailboat coefficient ranges

`src/vessels/index.ts` exposes `availableVessels` and `getVesselById(...)`, and `src/main.ts` wires that into the vessel selector.

## Physics Notes

`lib/jsmaneuvering` supports both MMG and Abkowitz model families, but the simulator app currently uses the MMG path only.

`BoatController` creates the active physics vessel in one of two ways:

- from a predefined `physicsModel`
- from full `physicsVesselData` supplied by the profile

For reverse thrust, `BoatController` uses `engine.reductionGearRatioAstern` when present, so ahead and astern propeller RPM limits can differ by vessel.

`BoatController` also reads `environment.waterDepth` from the active profile when present. This matters for deep-draft vessels because the MMG model rejects water depths shallower than draft and applies shallow-water corrections when a finite depth is supplied.

## Coordinate Systems

This is a common source of bugs.

`jsmaneuvering` uses maritime/world coordinates:

- `x`: north / forward
- `y`: east / starboard
- `psi`: heading

The simulator maps them into the Three.js scene in `lib/boat-controller.ts`:

- render `position.x = east`
- render `position.z = -north`
- render `rotationY = -psi`

If the vessel looks mirrored, rotated incorrectly, or moves in the wrong apparent direction, inspect this mapping before touching physics formulas.

## Rendering Layer

`src/rendering-engine.ts` is responsible only for visualization.

Current rendering behavior:

- orthographic top-down camera
- water plane plus buoy grid reference field
- sprite-based vessel rendering
- adaptive default zoom based on vessel length and viewport type
- smooth zoom transitions when switching vessels
- optional follow-ship rotation mode
- optional pivot-point marker with adjustable opacity
- user-adjustable vessel opacity and UI opacity

Even though `VesselProfile` includes `model3DPath`, the runtime currently loads `sprite2DPath` only. `model3DPath` is reserved for future rendering work.

## Repository Map

- `src/main.ts`
  Main browser entry point and runtime wiring.
- `src/rendering-engine.ts`
  Three.js rendering, camera behavior, zoom, and overlays.
- `src/keyboard-axis-controller.ts`
  Shared keyboard input logic for smooth hold/snap/center axis control.
- `src/zoom.ts`
  Default framing helpers for vessel length and mobile/coarse-pointer viewports.
- `src/vessels/`
  Declarative vessel profiles and vessel registry.
- `lib/boat-controller.ts`
  App-level adapter between UI controls and `jsmaneuvering`.
- `lib/jsmaneuvering`
  JavaScript physics port and tests.
- `lib/pymaneuvering`
  Python reference implementation and tests.
- `tests/`
  Simulator-layer tests.
- `public/assets/vessels/`
  Vessel sprites and related assets served by Vite.

## Tests That Matter

Top-level simulator tests:

- `tests/boat-controller.test.ts`
  Covers controller integration, coordinate mapping, pivot-point mapping, prop-walk-related astern behavior, custom vessel data usage, and astern gearbox handling.
- `tests/keyboard-axis-controller.test.ts`
  Covers hold-to-ramp, double-tap snap, centering, and opposing-key behavior.
- `tests/zoom.test.ts`
  Covers viewport-dependent default zoom behavior.

Physics-port tests:

- `lib/jsmaneuvering/tests/mmg.test.js`
- `lib/jsmaneuvering/tests/abkowitz.test.js`
- `lib/jsmaneuvering/tests/calibration.test.js`

Reference Python tests:

- `lib/pymaneuvering/tests/test_mmg_dynamics.py`
- `lib/pymaneuvering/tests/test_abkowitz_dynamics.py`
- `lib/pymaneuvering/tests/test_calibration.py`
- `lib/pymaneuvering/tests/test_utils.py`

## Safe Vs Risky Change Areas

Generally safe:

- UI and HUD work
- control wiring
- vessel switching
- vessel profile additions and tuning
- rendering and camera behavior
- app-layer tests
- reverse-motion improvements with evidence

High risk:

- `lib/jsmaneuvering/src/mmg/*`
- `lib/pymaneuvering/src/pymaneuvering/mmg/*`
- any change that alters established forward-motion MMG behavior

## Commands

Install dependencies:

```bash
npm install
```

Run the browser app:

```bash
npm run dev
```

Run JS/TS tests:

```bash
npm test
```

Generate a turning-circle report:

```bash
npm run turning-circle
```

## Practical Guidance For Future Agents

When adding or changing a feature:

1. Decide whether it belongs in rendering/UI, control integration, vessel definitions, or physics core.
2. Prefer the app layer unless there is strong evidence of a real physics-port problem.
3. If motion looks wrong, check input scaling, units, sign conventions, and coordinate mapping first.
4. Add or update tests when runtime behavior changes.
5. If your work changes the simulator architecture, feature boundaries, vessel-profile contract, or other context future agents should know, update this README before finishing.
