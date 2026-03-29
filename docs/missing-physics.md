I read [README.md](README.md) and [docs/sailboat-physics.md](docs/sailboat-physics.md). I also inspected the MMG physics code in [dynamics.js#L57](lib/jsmaneuvering/src/mmg/dynamics.js#L57), [hull.js#L14](lib/jsmaneuvering/src/mmg/hull.js#L14), [propeller.js#L11](lib/jsmaneuvering/src/mmg/propeller.js#L11), and [rudder.js#L18](lib/jsmaneuvering/src/mmg/rudder.js#L18). No code changes made.

**Scope**
For this simulator, the right scope is powered low-speed monohull maneuvering in 3DOF, not full offshore seakeeping. `jsmaneuvering` explicitly models only surge, sway, and yaw in [README.md#L8](lib/jsmaneuvering/README.md#L8).

**Note**
Any ~~crossed out text~~ below marks a feature that was previously missing when this report was written, but has since been implemented and is no longer missing.

**What a realistic powered-monohull engine should support**
- 3DOF rigid-body inertia, added mass, and Coriolis/coupling terms.
- Nonlinear hull damping and maneuvering derivatives in surge, sway, and yaw, including the keel/underbody’s lateral-resistance effect for sailboats under power.
- Propeller thrust ahead and astern, with wake fraction and thrust deduction.
- Rudder lift/drag with prop-wash interaction and reduced astern effectiveness.
- Prop-walk / transverse prop thrust for single-screw boats, with handedness and reverse asymmetry. Your sailboat notes call this out directly in [sailboat-physics.md#L83](docs/sailboat-physics.md#L83) and [sailboat-physics.md#L91](docs/sailboat-physics.md#L91).
- Environmental loads: current, wind, shallow water. For higher fidelity, also squat and bank/shore effects.
- Pivot point as an emergent or derived consequence of the motion state, not a substitute for missing forces.
- For beyond-top-down realism: roll/heel/pitch/heave, waves, engine/shaft lag, thrusters, tug/fender/contact effects.

**What `jsmaneuvering` has**
- Implemented: core 3DOF MMG force balance, mass matrix, and earth-fixed kinematics in [dynamics.js#L114](lib/jsmaneuvering/src/mmg/dynamics.js#L114) and [dynamics.js#L295](lib/jsmaneuvering/src/mmg/dynamics.js#L295).
- Implemented: hull maneuvering derivatives in [hull.js#L24](lib/jsmaneuvering/src/mmg/hull.js#L24).
- Implemented: axial propeller thrust, wake fraction, and thrust deduction in [propeller.js#L12](lib/jsmaneuvering/src/mmg/propeller.js#L12) and [propeller.js#L41](lib/jsmaneuvering/src/mmg/propeller.js#L41).
- Implemented: rudder force with prop-wash-aided ahead steering in [rudder.js#L35](lib/jsmaneuvering/src/mmg/rudder.js#L35).
- Implemented: current, wind, and shallow-water corrections in [dynamics.js#L73](lib/jsmaneuvering/src/mmg/dynamics.js#L73), [dynamics.js#L100](lib/jsmaneuvering/src/mmg/dynamics.js#L100), and [dynamics.js#L184](lib/jsmaneuvering/src/mmg/dynamics.js#L184).
- Implemented as a helper: pivot point output computed from `-v/r` in [dynamics.js#L342](lib/jsmaneuvering/src/mmg/dynamics.js#L342).

**What is missing or only partial**
- ~~Missing: prop-walk. `propellerForces()` returns only `X_P` in [propeller.js#L41](lib/jsmaneuvering/src/mmg/propeller.js#L41), and the main solver sums no propeller-side `Y_P` or `N_P` term in [dynamics.js#L137](lib/jsmaneuvering/src/mmg/dynamics.js#L137). This is the main real-world gap.~~
- ~~Confirmed missing by tests: straight astern with zero rudder is expected to have zero sway/yaw in [mmg.test.js#L247](lib/jsmaneuvering/tests/mmg.test.js#L247), [mmg.test.js#L255](lib/jsmaneuvering/tests/mmg.test.js#L255), and [mmg.test.js#L332](lib/jsmaneuvering/tests/mmg.test.js#L332). A real single-screw RH boat would usually show some stern kick in reverse.~~
- Partial: propeller model supports signed ahead/astern thrust, but not a full four-quadrant open-water model; it reuses one `K_T(J)` polynomial in [propeller.js#L33](lib/jsmaneuvering/src/mmg/propeller.js#L33).
- Partial: reverse rudder behavior is simplified. The code explicitly disables reverse prop wash over the rudder in [rudder.js#L37](lib/jsmaneuvering/src/mmg/rudder.js#L37), so reverse helical-slipstream asymmetry is not modeled.
- Partial: added-mass cross-coupling terms are absent. The schema only carries `m_x_dash`, `m_y_dash`, and `J_z_dash` in [common.py#L96](lib/pymaneuvering/src/pymaneuvering/utils/common.py#L96), and the JS mass matrix is diagonal in sway/yaw added mass in [dynamics.js#L126](lib/jsmaneuvering/src/mmg/dynamics.js#L126).
- Partial: sailboat keel / CLR behavior is only implicit through lumped hull derivatives. There is no separate keel/fin lateral-force model; the pivot output is just derived after the fact in [dynamics.js#L335](lib/jsmaneuvering/src/mmg/dynamics.js#L335).
- Missing by design: roll/heel/pitch/heave, waves, squat, bank effect, ship-ship interaction, and engine/transmission transients.

One important conclusion: this is not just a JS-port gap. The Python reference also only computes axial propeller thrust `X_P` and no `Y_P/N_P` prop-walk terms in [dynamics.py#L187](lib/pymaneuvering/src/pymaneuvering/mmg/dynamics.py#L187) and [dynamics.py#L259](lib/pymaneuvering/src/pymaneuvering/mmg/dynamics.py#L259).

The short answer is: `jsmaneuvering` covers the core MMG-style 3DOF model reasonably well for generic low-speed ship motion, but it does not implement all the properties needed for truly realistic monohull behavior. ~~The standout missing feature is prop-walk, and~~ the next biggest gaps are reverse-slipstream asymmetry, full four-quadrant propeller behavior, added-mass cross terms, and broader close-quarters/sea-state effects.

------ 

Below is a docking-focused prioritization of what is still missing or only partially modeled in `jsmaneuvering`, based on the current MMG code in [propeller.js](lib/jsmaneuvering/src/mmg/propeller.js), [rudder.js](lib/jsmaneuvering/src/mmg/rudder.js), [dynamics.js](lib/jsmaneuvering/src/mmg/dynamics.js), and the reverse-motion tests in [mmg.test.js](lib/jsmaneuvering/tests/mmg.test.js).

| Description of the feature | Importance | Implementation dificulty |
|---|---|---|
| ~~Prop-walk / transverse prop thrust for single-screw boats, especially in reverse. Currently missing entirely: propeller contributes only surge force, not sway force or yaw moment.~~ | ~~Very high~~ | ~~Medium to high~~ |
| Reverse helical prop-wash and asymmetric astern rudder behavior. Current reverse handling is intentionally simplified and suppresses the messy stern-kick behavior skippers expect. | Very high | High |
| Full four-quadrant propeller model for ahead/astern/off-design behavior. Current thrust model is usable, but still simplified for real docking transitions. | High | High |
| Shaft-angle / handedness / propeller-geometry effects. Important for reproducing the “personality” of a real monohull under power. | High | Medium to high |
| Sailboat keel and underbody lateral-resistance behavior as a first-class effect. Right now it is only buried inside generic hull derivatives, not modeled explicitly for fin-keel yachts. | High for sailboats, medium for tankers | High |
| Vessel-specific hydrodynamic calibration for very different monohulls. The engine can take coefficients, but the current built-in model is tanker-centric, so a yacht skipper would notice the mismatch quickly. | Very high | High to very high |
| Added-mass cross-coupling terms such as sway-yaw inertial coupling beyond the simplified diagonal form. This affects subtle low-speed feel more than headline behavior. | Medium | Medium to high |
| Bank suction / bank cushion / quay-wall interaction. Not part of the current model, but very noticeable in close-quarters work near walls, fairways, and locks. | High in docking scenarios near structures | Very high |
| Engine / gearbox / propeller response lag instead of instant commanded `nps`. Experienced skippers notice throttle response timing during docking. | Medium to high | Medium |
| Roll / heel / pitch / heave / wave response. Missing by design because the engine is 3DOF only. Important for overall realism, but less critical than prop effects for pure low-speed docking. | Low to medium for docking | Very high |
| Auxiliary maneuvering devices where fitted, such as bow/stern thrusters. Not a universal monohull property, but essential for many larger vessels if those vessels are in scope. | High when simulating thruster-equipped vessels, otherwise none | Medium |

The top three to prioritize for “an experienced skipper should not notice” docking feel are:
1. ~~Prop-walk~~
2. Reverse prop-wash / astern asymmetry
3. Hull-specific calibration for the actual boat type, especially sailboats vs tankers

~~One especially clear sign of the current gap: the reverse tests explicitly expect zero sway and zero yaw when backing straight with zero rudder in [mmg.test.js#L247](lib/jsmaneuvering/tests/mmg.test.js#L247). That is stable, but it is not how many real single-screw monohulls behave.~~
