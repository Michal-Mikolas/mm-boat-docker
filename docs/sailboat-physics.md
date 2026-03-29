# Sailboat physics research

These are results of research about physics of sailing yachts maneuvering under power (no sails) from 3 AI research agents (Grok and ChatGPT and Google Deep Research). 



------------ 



# Grok (10 sources were used)

**1. Inertial Forces & Added Mass (3DOF Rigid Body Equations of Motion)**

The 3DOF (surge-sway-yaw) rigid-body equations for a surface vessel in the horizontal plane, expressed in body-fixed coordinates (origin at the center of gravity, x forward, y starboard), follow the standard MMG or Fossen formulation. The general matrix form is:

\[
\mathbf{M} \dot{\boldsymbol{\nu}} + \mathbf{C}(\boldsymbol{\nu}) \boldsymbol{\nu} = \boldsymbol{\tau}
\]

where \(\boldsymbol{\nu} = [u, v, r]^T\) (surge velocity \(u\), sway velocity \(v\), yaw rate \(r\)); \(\boldsymbol{\tau} = [X, Y, N]^T\) (total surge force, sway force, yaw moment from hull, propeller, rudder); \(\mathbf{M} = \mathbf{M}_{RB} + \mathbf{M}_A\) is the total inertia matrix (rigid-body + added mass); and \(\mathbf{C}(\boldsymbol{\nu})\) contains Coriolis/centripetal terms.

**Rigid-body inertia matrix** (assuming CG at \(x_G\), often set to 0 for simplicity):

\[
\mathbf{M}_{RB} = \begin{bmatrix}
m & 0 & m x_G \\
0 & m & 0 \\
m x_G & 0 & I_{zz}
\end{bmatrix}
\]

**Added-mass matrix** (hydrodynamic contributions; symmetric, positive-definite):

\[
\mathbf{M}_A = \begin{bmatrix}
-X_{\dot{u}} & 0 & 0 \\
0 & -Y_{\dot{v}} & -Y_{\dot{r}} \\
0 & -N_{\dot{v}} & -N_{\dot{r}}
\end{bmatrix}
\]

(For port-starboard symmetry, cross terms like \(X_{\dot{v}}\) are negligible.)

**Coriolis/centripetal terms** (from rigid-body + added mass):

\[
\mathbf{C}(\boldsymbol{\nu}) = \begin{bmatrix}
0 & 0 & -m v - Y_{\dot{v}} v - Y_{\dot{r}} r \\
0 & 0 & m u + X_{\dot{u}} u \\
m v + Y_{\dot{v}} v + Y_{\dot{r}} r & -m u - X_{\dot{u}} u & 0
\end{bmatrix}
\]

(Full expansion yields the explicit MMG equations shown in the arXiv reference below.)

**Typical hydrodynamic added-mass coefficients** (for a 35–40 ft displacement monohull with deep fin keel; approximate ranges from potential-flow approximations, ellipsoid modeling of hull+keel, and maneuvering literature for similar vessels; non-dimensionalized where noted):

- Surge: \(X_{\dot{u}} \approx 0.02\)–\(0.10 \times m\) (small due to slender form; keel adds little in surge).
- Sway: \(Y_{\dot{v}} \approx 0.4\)–\(0.8 \times m\) (higher with deep keel; fin keel increases lateral “mass” significantly).
- Yaw: \(N_{\dot{r}} \approx 0.1\)–\(0.3 \times I_{zz}\) (or \(\approx 0.2\)–\(0.4 \times m L_{pp}^2 / 12\) nondim).
- Cross terms: \(Y_{\dot{r}} \approx N_{\dot{v}} \approx 0\)–\(0.05 \times m L_{pp}\) (small for symmetric fin-keel hull).

These are obtained via strip theory, ellipsoid approximation (hull + keel + rudder as separate ellipsoids with interference correction), or CFD. For low-speed docking (0–5 kn), added-mass effects dominate inertia during accelerations.

**2. Propulsion & Right-Hand Prop Walk**

**Propeller thrust** (axial, fixed-pitch, right-hand propeller):

\[
T = \rho n^2 D_p^4 K_T(J), \quad J = \frac{u_a}{n D_p}
\]

- \(\rho\): water density (≈1025 kg/m³ seawater)
- \(n\): propeller revolutions per second (positive ahead)
- \(D_p\): propeller diameter
- \(K_T(J)\): thrust coefficient (lookup table or polynomial from open-water tests; typically 0.2–0.5 at design J)
- \(J\): advance ratio
- \(u_a = (1 - w_p) u\): advance speed at propeller; \(w_p\): wake fraction (0.1–0.3 at low speed for displacement hull)

Thrust acts along the shaft (surge force contribution: \(X_P = (1 - t_p) T\), where \(t_p\): thrust deduction factor ≈0.05–0.15).

**Prop walk (asymmetric blade thrust / transverse thrust)**: Caused by shaft angle (typically 8–14° downward) and uneven blade inflow (upward blade travels farther in reverse). For **right-hand (RH) fixed-pitch propeller** (clockwise when viewed from astern):

- **Forward gear** (positive \(n\), ahead): Slight transverse force pushes **stern to starboard** (positive \(Y_P\) in body frame, small yaw moment \(N_P\)).
- **Reverse gear** (negative effective thrust): Heavy transverse force pulls **stern to port** (negative \(Y_P\), large \(N_P\)).

Empirical/MM G-style model for lateral force and yaw moment (especially pronounced in reverse):

\[
Y_P = C_{Y_P} \cdot |T| \cdot f(\text{sign}(n), J_s), \quad N_P = (x_P) \cdot Y_P
\]

where \(C_{Y_P} \approx 0.05\)–\(0.25\) (empirical; higher in reverse, ≈0.1–0.3 × T), \(J_s\) is a side-slip advance ratio, and \(x_P\) is propeller longitudinal position aft of CG. In full MMG:

\[
Y_P, N_P \text{ use quadratic polynomials in } J_s = \frac{v_m + x'_p r'}{n_p P} \text{ (P = pitch)} \text{ for reversal cases.}
\]

Vector logic: Add \(Y_P\) directly to sway; \(N_P = Y_P \cdot (x_{prop} - x_G)\) (lever arm). Prop walk is strongest at low/zero forward speed and high RPM.

**3. Steering & Direct Prop Wash**

**Rudder lift/drag** (single rudder aft of propeller, rudder angle \(\delta > 0\) to starboard):

Normal force on rudder (dominant term; lift ≈ normal for small \(\alpha\)):

\[
F_N = \frac{1}{2} \rho A_R U_R^2 f_\alpha \sin \alpha_R \quad (\text{or } C_L(\alpha_R) \text{ form})
\]

- \(A_R\): rudder area
- \(U_R = \sqrt{u_R^2 + v_R^2}\): effective inflow velocity
- \(\alpha_R = \delta - \atan2(v_R, u_R)\): effective angle of attack
- \(f_\alpha \approx 2.5\)–\(4.0\) (lift slope factor for aspect-ratio rudder; or full \(C_L = 2\pi \sin\alpha\) thin-foil approx.)
- Then: \(X_R = -(1 - t_R) F_N \sin\delta\), \(Y_R = (1 - a_H) F_N \cos\delta\), \(N_R = -(x_R + a_H x_H) F_N \cos\delta\) (with rudder efficiency factors \(t_R, a_H \approx 0.1\)–\(0.4\)).

**Prop-wash velocity** (critical for inboard single-rudder config; momentum/actuator-disk theory):

Longitudinal inflow to rudder \(u_R\) (blended ambient + accelerated flow; forward gear dominant):

\[
u_R \approx u(1 - w_p) + \sqrt{ \frac{2(1 - t_p)T}{\rho A_p} \cdot k_{wake} } \quad \text{(momentum-theory accelerated component)}
\]

or practical blending (common in simulators):

\[
u_R = u(1 - w_p) + \eta \sqrt{ \frac{8 T}{\rho \pi D_p^2 (1 + a)} } \quad (\eta \approx 0.5\text{–}1.0 \text{ for rudder coverage})
\]

- \(A_p = \pi D_p^2 / 4\): propeller disk area
- \(a\): axial induction factor (≈0.1–0.3 from open-water tests)
- \(k_{wake}\): empirical wake scaling (0.5–1.0; rudder sees ~60–80% of slipstream)
- In reverse: \(u_R \approx u(1 - w_p)\) (no acceleration; rudder less effective)
- Lateral \(v_R\) includes hull drift + flow-straightening \(\gamma \approx 0.5\)–\(0.8\): \(v_R = \gamma (v + l_R r)\).

When engine is ahead, prop wash dramatically increases \(U_R\) (and thus rudder force) even at zero boat speed.

**4. Hydrodynamic Hull Damping (Water Resistance)**

Hull forces (\(X_H, Y_H, N_H\)) combine linear damping, quadratic cross-flow drag, and resistance:

**Surge**:

\[
X_H = X_{uu} |u| u + X_u u + \dots \quad (\text{or MMG resistance polynomials})
\]

**Sway & yaw** (cross-coupled dominant at low speed):

\[
Y_H = Y_v v |u| + Y_{vv} v |v| + Y_r r |u| + Y_{rr} r |r| + \text{cross-flow integrals}
\]

\[
N_H = N_v v |u| + N_{vv} v |v| + N_r r |u| + N_{rr} r |r| + \text{cross-flow integrals}
\]

Full MMG cross-flow drag (quadratic in local transverse velocity):

\[
Y_{cross} = -\frac{1}{2} \rho \int_{-L/2}^{L/2} C_D |v(x) + C_{rY} r x| (v(x) + C_{rY} r x) \, dx
\]

(with \(C_D \approx 0.8\)–\(1.2\) for hull+keel projected area; similar for \(N\)).

**Estimated low-speed maneuvering derivatives** (nondimensional or absolute; for generic 35 ft monohull ≈10–12 m Lpp, m≈7–9 tonnes, deep fin keel; low-speed regime 0–5 kn; values are approximate/typical from displacement-hull literature, scaled for yacht; actual values require model tests/CFD):

| Derivative          | Typical Value (nondim where noted) | Notes / Units (if absolute) |
|---------------------|------------------------------------|-----------------------------|
| \(X_u\) (linear surge) | –0.05 to –0.15 × m | Linear viscous |
| \(X_{uu}\) (quad surge) | –0.5 to –1.5 (nondim) | Dominant resistance |
| \(Y_v\)             | –0.3 to –0.8 × m / U | Linear sway damping |
| \(Y_{vv}\)          | –1.0 to –2.0 (nondim) | Quadratic cross-flow |
| \(N_r\)             | –0.1 to –0.3 × Izz / U | Linear yaw damping |
| \(N_{rr}\)          | –0.05 to –0.15 (nondim) | Quadratic yaw |
| Cross (e.g., \(Y_r, N_v\)) | Small (0.01–0.05 × m L) | Yaw-rate induced sway |

(Non-dimensionalized per MMG: primes denote division by \(\frac{1}{2}\rho L^2 d U\), etc.) Cross-coupled drag (yaw affecting sway) is captured in the integral terms above.

**5. Kinematics / Pivot Point Shift**

The **Center of Lateral Resistance (CLR)** is the longitudinal point where net lateral hydrodynamic force acts (integral of pressure/drag over underwater profile). For a fin-keel monohull at **zero speed**, CLR ≈ geometric centroid of keel + rudder + hull profile (typically 40–50% LWL aft of bow).

With **forward velocity** (\(u > 0\)), the effective hydrodynamic center (instantaneous **pivot point**) shifts **aft** due to increased dynamic lift on the keel/rudder (higher local velocities forward generate more damping forward). Mathematically, in steady turning:

\[
x_{pivot} \approx x_{CG} - \frac{N_r + \text{cross terms}}{Y_v} \cdot \frac{1}{u}
\]

( pivot moves aft with increasing \(u\) because yaw damping \(N_r\) grows with speed). In **reverse** (\(u < 0\)), pivot shifts **forward** (prop walk + rudder ineffectiveness make turning center near stern). For fin-keel yachts this shift is pronounced (keel acts like a high-aspect wing at speed). The boat rotates about this moving pivot during maneuvers.

**6. Prior Art & References**

**Scientific papers**:
- Yasukawa, H. & Yoshimura, Y. (2015). “Introduction of MMG standard method for ship maneuvering predictions.” *Journal of Marine Science and Technology*. (Core 3DOF MMG model used worldwide.)
- Mitsuyuki et al. (2024). “MMG 3DOF model identification…” (modern extensions with uncertainty for maneuvering coeffs).
- Generic sailing-yacht maneuvering/tacking models (extensions of MMG for yachts; see e.g., “A Generic Mathematical Model for the Maneuvering and Tacking of a Sailing Yacht”).

**Open-source GitHub repositories**:
- https://github.com/cybergalactic/MSS – Marine Systems Simulator (Matlab/Octave + Simulink) by T.I. Fossen; full 3DOF/6DOF marine craft models, added mass, damping, propulsion/rudder (perfect starting point).
- https://github.com/nikpau/mmgdynamics – Direct C++/Python implementation of MMG standard model (includes propeller-rudder interaction).

These provide ready-to-use C++/Python/Unity-compatible code for your 3DOF yacht simulator. All formulas above are directly implementable; calibrate coefficients via captive-model tests, CFD, or system identification for your exact 35–40 ft hull.



------------



# Google Deep Research (46 sources were used)

## Mathematical Specification for the Hydrodynamic Modeling of a 40ft Monohull Sailing Yacht in Low-Speed Maneuvering

The simulation of marine vessels at low speeds, particularly within the constrained environment of a marina, necessitates a sophisticated mathematical framework that accounts for the non-linearities of fluid interaction and the complex coupling between propulsion and steering systems.[1, 2] For a monohull sailing yacht of approximately 35 to 40 feet in length, characterized by a displacement hull and a deep fin keel, the 3-Degree-of-Freedom (3DOF) equations of motion must encapsulate surge, sway, and yaw dynamics while strictly adhering to the physics of low-speed hydrodynamics.[3, 1] This specification details the inertial, propulsive, and resistive forces required to construct a high-fidelity physics engine, focusing on the interactions between a right-hand (RH) fixed-pitch propeller, a single rudder, and the unique lateral resistance properties of a fin-keel vessel.

### Theoretical Framework of Marine Craft Dynamics

The mathematical modeling of marine craft relies on the separation of kinematic and kinetic equations. In a 3DOF horizontal plane simulation, the vessel's state is described by its position and orientation in an Earth-fixed inertial frame, typically the North-East-Down (NED) frame, and its velocities in a body-fixed frame centered at the vessel's midship section.[4, 5, 6, 1] The generalized coordinate vector $\eta = [x, y, \psi]^\top$ represents the position and heading, while the velocity vector $\nu = [u, v, r]^\top$ represents surge velocity, sway velocity, and yaw rate respectively.[4, 5]

The kinematic relationship is defined by the transformation matrix $J(\psi)$, which maps velocities from the local body-fixed frame to the global coordinate system [4, 5, 1]:

$$\dot{\eta} = \begin{bmatrix} \cos(\psi) & -\sin(\psi) & 0 \\ \sin(\psi) & \cos(\psi) & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} u \\ v \\ r \end{bmatrix}$$

This transformation is essential for the path-tracking and trajectory plotting required in a docking simulator.[5, 1] The kinetics of the vessel are governed by Fossen’s unified state-space model, which expresses the conservation of momentum in a matrix-vector format [4, 5, 1]:

$$M \dot{\nu} + C(\nu)\nu + D(\nu)\nu = \tau$$

where $M$ is the system inertia matrix, $C(\nu)$ is the Coriolis and centripetal matrix, $D(\nu)$ is the damping matrix, and $\tau$ is the vector of external forces and moments.[4, 5, 3, 1] This structure ensures that the simulation maintains physical properties such as symmetry and positive definiteness of the mass and damping matrices.[4, 1]

### Inertial Forces and the Added Mass Matrix

In marine hydrodynamics, a body accelerating through a fluid is subject to an additional inertial force known as added mass. This phenomenon occurs because the acceleration of the vessel requires the simultaneous acceleration of a surrounding volume of water.[7, 8] For a sailing yacht, the added mass is highly directional; the streamlined bow profile results in minimal added mass in surge, whereas the significant lateral area of the hull and deep fin keel generates substantial added mass in sway and a large added moment of inertia in yaw.[7, 9]

#### Construction of the System Inertia Matrix

The total inertia matrix $M$ is the sum of the rigid-body mass matrix $M_{RB}$ and the hydrodynamic added mass matrix $M_A$ [4, 5, 1]:

$$M = M_{RB} + M_A$$

For a 3DOF system, $M_{RB}$ is defined by the mass $m$ of the yacht, the longitudinal position of the center of gravity $x_G$ relative to the midship origin, and the rigid-body moment of inertia $I_z$ about the vertical axis [4, 5, 1, 10]:

$$M_{RB} = \begin{bmatrix} m & 0 & 0 \\ 0 & m & m x_G \\ 0 & m x_G & I_z \end{bmatrix}$$

The added mass matrix $M_A$ is expressed using hydrodynamic derivatives, which represent the force or moment generated per unit of acceleration [4, 5, 1]:

$$M_A = \begin{bmatrix} -X_{\dot{u}} & 0 & 0 \\ 0 & -Y_{\dot{v}} & -Y_{\dot{r}} \\ 0 & -N_{\dot{v}} & -N_{\dot{r}} \end{bmatrix}$$

In low-speed maneuvering, it is common to assume that these coefficients are frequency-independent.[1, 2, 11] For a vessel with port-starboard symmetry, cross-coupling terms like $X_{\dot{v}}$ and $X_{\dot{r}}$ are zero.[3, 7]

#### Empirical Coefficients for a Fin-Keel Monohull

The added mass coefficients are sensitive to the draft and the aspect ratio of the keel. For a 35-40ft monohull, the following estimated values, expressed as non-dimensional ratios of the vessel's displacement mass $m$, are typical in contemporary literature.[7, 12, 13]

| Derivative | Parameter | Estimated Value (Non-dimensional) | Physical Implication |
| :--- | :--- | :--- | :--- |
| $X_{\dot{u}}$ | Added mass in surge | $0.05 m$ to $0.08 m$ | Minimal resistance to longitudinal acceleration [7, 12] |
| $Y_{\dot{v}}$ | Added mass in sway | $0.75 m$ to $1.10 m$ | Massive entrained water due to keel area [7, 12] |
| $N_{\dot{r}}$ | Added moment of inertia | $0.60 I_z$ to $0.90 I_z$ | Resistance to rotation by hull/keel length [7, 12] |
| $Y_{\dot{r}}$ | Sway-yaw coupling | $-0.10 m L$ to $0.10 m L$ | Often approximated as zero for midship origin [4, 1] |

The total mass matrix $M$ must be positive definite to ensure that a positive force results in acceleration in the same direction.[4, 5, 1]

### Coriolis and Centripetal Effects

The Coriolis and centripetal matrix $C(\nu)$ includes terms from both the rigid-body mass and the added mass. These forces arise from the rotation of the body-fixed frame relative to the inertial frame and are crucial for capturing the coupling between translation and rotation [4, 5, 1]:

$$C(\nu) = C_{RB}(\nu) + C_A(\nu)$$

For the rigid body:
$$C_{RB}(\nu) = \begin{bmatrix} 0 & 0 & -m(x_G r + v) \\ 0 & 0 & m u \\ m(x_G r + v) & -m u & 0 \end{bmatrix}$$

For the added mass, assuming $Y_{\dot{r}} = N_{\dot{v}} = 0$:
$$C_A(\nu) = \begin{bmatrix} 0 & 0 & Y_{\dot{v}} v \\ 0 & 0 & -X_{\dot{u}} u \\ -Y_{\dot{v}} v & X_{\dot{u}} u & 0 \end{bmatrix}$$

The resulting vector $C(\nu)\nu$ ensures that the simulation accounts for the centrifugal forces that push the yacht outward during a turn.[4, 5, 1]

## Propulsion Dynamics and Propeller Walk

The propulsion system typically consists of an inboard engine coupled to a fixed-pitch propeller. In the low-speed regime (0-5 knots), the propeller operates across all four quadrants (forward/reverse rotation, forward/reverse vessel speed).[14, 15]

#### Mathematical Model for Propeller Thrust

Propeller thrust $T$ is modeled based on the rotational speed $n$ (rev/s) and the propeller diameter $D$ using the thrust coefficient $K_T$ [14, 15, 16]:

$$T = \rho n^2 D^4 K_T(J)$$

The thrust coefficient $K_T$ is a function of the advance ratio $J$, which characterizes the inflow velocity to the propeller [14, 15, 16]:

$$J = \frac{u(1-w)}{n D}$$

where $w$ is the wake fraction. In docking, $J$ frequently approaches zero, representing the "bollard pull" condition where thrust is maximized for a given RPM.[14, 15, 16]

#### Physics of Right-Hand Propeller Walk

Propeller walk is a lateral force $Y_{prop}$ and an associated yawing moment $N_{prop}$ that arises from the asymmetry of the propeller's pressure field and its interaction with the hull.[17, 18] For a Right-Hand (RH) propeller:

**1. P-Factor (Inclined Shaft Effect):** 
With an inclined shaft, the descending blade (starboard side for RH) moves slightly forward into the flow in forward gear, increasing its effective angle of attack compared to the ascending blade. This shifts the center of pressure to starboard.[19, 20]

**2. Helical Slipstream Interaction:**
In reverse gear, the rotating slipstream moves forward and strikes the port side of the hull more forcefully than the starboard side for a RH prop, generating a strong lateral force that pulls the stern to port.[17, 18, 21]

The mathematical representation is often modeled semi-empirically [14, 15, 18]:

$$Y_{prop} = C_{walk}(n, J) \cdot T$$
$$N_{prop} = Y_{prop} \cdot L_{prop}$$

| Operational State | RPM ($n$) | Thrust ($T$) | Stern Lateral Force ($Y_{prop}$) | Yaw Direction ($N_{prop}$) |
| :--- | :--- | :--- | :--- | :--- |
| Forward Gear | $n > 0$ | $T > 0$ | Stern to Starboard ($+$) | Bow to Port ($-$) [17] |
| Reverse Gear | $n < 0$ | $T < 0$ | Stern to Port ($-$) | Bow to Starboard ($+$) [17, 18, 21] |

### Steering Hydrodynamics and Propeller Wash Interaction

When the engine is in forward gear, the rudder is bathed in accelerated water (prop wash), allowing for steering control even at zero boat speed.[22, 23, 24]

#### Propeller Wash Velocity Calculation

Using axial momentum theory, the velocity of the water at the propeller disk $u_p$ is higher than the speed of advance $u_a$ [25, 26, 27]:

$$u_p = u_a (1 + a)$$

The effective axial velocity $u_R$ at the rudder is calculated by blending the slipstream velocity with the ambient hull-wake velocity [14, 15]:

$$u_R = u(1-w_R) \sqrt{\eta \left( 1 + \kappa \left( \sqrt{1 + \frac{8 K_T}{\pi J^2}} - 1 \right) \right)^2 + (1-\eta)}$$

where $\eta$ is the ratio of the rudder height to the propeller diameter and $\kappa$ represents the longitudinal distance between the propeller and rudder.[14, 15]

#### Rudder Lift and Drag Formulas

The lift $L_R$ and drag $D_R$ are determined by the effective velocity $V_R$ and the angle of attack $\alpha_R$ [14, 15, 16]:

$$L_R = \frac{1}{2} \rho A_R V_R^2 C_L(\alpha_R)$$
$$D_R = \frac{1}{2} \rho A_R V_R^2 C_D(\alpha_R)$$

The effective velocity $V_R = \sqrt{u_R^2 + v_R^2}$ includes a cross-flow component $v_R$ which accounts for the yacht's lateral motion and rotation [14, 15]:

$$v_R = k_{HPR} (v + x_R r)$$

where $k_{HPR}$ is a flow-straightening coefficient.[14, 15]

### Hydrodynamic Hull Damping and Resistance

Hull resistance at low speeds is characterized by viscous effects. The damping matrix $D(\nu)$ is non-linear and includes both linear skin friction and quadratic pressure drag.[4, 5, 1]

#### Linear and Quadratic Damping Components

Surge resistance $X_H$ is typically modeled as a second-order polynomial [5, 1]:

$$X_H = X_u u + X_{uu} |u|u$$

The lateral (sway) force $Y_H$ and yawing moment $N_H$ are dominated by the "Cross-Flow Drag Principle" [4, 5, 28]:

$$Y_H = Y_v v + Y_{vv} |v|v + Y_{vr} |v|r + Y_{rv} |r|v$$
$$N_H = N_r r + N_{rr} |r|r + N_{rv} |r|v + N_{vr} |v|r$$

For a 40ft yacht, the deep keel acts as a high-aspect-ratio wing, generating significant lateral force even at low speeds.[12, 9, 29]

#### Estimated Maneuvering Derivatives

Typical non-dimensional values for a 35-40ft monohull sailboat are provided below.[1, 12, 30]

| Derivative | Force/Moment | Low-Speed Estimate | Context |
| :--- | :--- | :--- | :--- |
| $X_u$ | Linear Surge | $-0.002$ | Minimal at low speeds [1, 30] |
| $X_{uu}$ | Quadratic Surge | $-0.015$ | Dominant resistance term [12, 30] |
| $Y_v$ | Linear Sway | $-0.150$ | Lift from keel/hull [12, 29] |
| $Y_{vv}$ | Quadratic Sway | $-1.800$ | Cross-flow drag [5, 1] |
| $N_r$ | Linear Yaw | $-0.040$ | Rotational damping [2, 30] |
| $N_{rr}$ | Quadratic Yaw | $-0.750$ | Moment of lateral area [12, 30] |

### Kinematics and the Longitudinal Shift of the Pivot Point

The pivot point is the longitudinal location on the ship's centerline where the local transverse velocity is zero during a turn.[31, 32, 33]

#### Mathematical Explanation of the Pivot Point

The pivot point location $x_p$ is defined where the sway velocity and yaw rate cancel out: $x_p = -v/r$.[32] In a steady turn, this point shifts longitudinally based on the direction of motion.[31, 34, 33, 35]

1. **Stopped**: Pivot point coincides with the Center of Lateral Resistance (CLR) / Center of Gravity (COG), approximately amidships ($0.50 L$).[31, 32, 33, 35]
2. **Making Headway**: Pivot point shifts forward, stabilizing at approximately $1/4$ to $1/3$ of the vessel's length from the bow ($0.25 L$ to $0.33 L$).[36, 31, 32, 34, 33, 35]
3. **Making Sternway**: Pivot point moves aft, establishing itself at approximately $1/4$ of the length from the stern ($0.75 L$ from the bow).[31, 32, 33, 35]

### Prior Art and Implementation Resources

#### Scientific Papers and Core Research

*   **Yasukawa and Yoshimura (2015)**: Foundational text for the MMG standard modeling approach.[37, 10, 2, 14]
*   **Thor I. Fossen (2011/2021)**: Handbook for marine craft hydrodynamics and matrix-vector dynamics.[4, 5, 3, 1, 38]
*   **Sileo and Rizzuto (2011)**: Mathematical insights into asymmetric forces during reversing maneuvers.[18]

#### Open-Source GitHub Repositories

*   **PythonVehicleSimulator (cybergalactic/PythonVehicleSimulator)**: Models for AUVs, USVs, and ships with pre-built GNC methods.[39]
*   **pymaneuvering (nikpau/pymaneuvering)**: Implementation of MMG and Abkowitz models for ship maneuvering.[1]
*   **SailBoatSim (psiphi75/SailBoatSim)**: JavaScript-based simulator for sailboat and rudder interaction physics.[40]
*   **Python-VPP (marinlauber/Python-VPP)**: 3-DOF Velocity Prediction Program based on ORC aerodynamic and hydrodynamic models.[13, 41]



------------



# ChatGPT (9 sources were used)

## 3DOF model manévrování plachetnice

### Setrvačné síly a přidaná hmotnost  
Rovnice pohybu 3DOF pro předozadní (surge) rychlost *u*, příčnou rychlost *v* a úhlovou rychlost *r* lze psát maticově jako 
\[
M\dot{\nu} + C(\nu)\nu + D(\nu)\nu = \tau,
\]
kde \(\nu=[u,v,r]^\top\) je rychlost ve smyslu člunu a \(\tau=[X,Y,N]^\top\) součet působících sil (tah, boční síla, krouticí moment)【8†L396-L404】. Celková matice setrvačnosti je součtem skutečné hmotnosti a přidané hmotnosti, \(M=M_{RB}+M_A\). Pro symetrický monotrup Fossen uvádí tyto matice【8†L405-L413】:
\[
M_{RB}=\begin{bmatrix} 
m & 0 & 0\\ 
0 & m & m x_G\\ 
0 & m x_G & I_z 
\end{bmatrix}, 
\quad 
M_A=\begin{bmatrix} 
-\,X_{\dot u} & 0 & 0\\ 
0 & -\,Y_{\dot v} & -\,Y_{\dot r}\\ 
0 & -\,N_{\dot v} & -\,N_{\dot r}
\end{bmatrix}.
\]
Zde \(m\) je hmotnost plavidla, \(I_z\) moment setrvačnosti kolem svislé osy a \(x_G\) vzdálenost těžiště od referenční roviny. Koeficienty \(X_{\dot u},Y_{\dot v},Y_{\dot r},N_{\dot v},N_{\dot r}\) jsou přidané hmotnosti – virtuální síly úměrné zrychlení. Typicky pro plachetnici s hlubokou kýlovou plochou bývá příčná přidaná hmotnost (sway) výrazně větší než podélná. Empiricky se udává například (zátěž modelu): \(m_{x} = m\,(1+(L^3/\nabla)^{1/4})\)【21†L10137-L10144】. Okuda et al. (2023) udávají pro velké nákladní lodě poměrnou přidanou hmotnost \(X_{\dot u}/m\approx0{,}01,\ Y_{\dot v}/m\approx0{,}168\)【30†L840-L849】, což naznačuje, že „sway“ a moment hodnoty jsou řády větší než „surge“. 

### Pohon a „prop-walk“ (boční síla vrtule)  
Pro tah vrtule se používá standardní vztah z teorie listových vrtulí: 
\[
T = K_T(J)\,\rho\,n^2D^4,
\]
kde \(D\) je průměr vrtule, \(n\) otáčky (rev/s), \(\rho\) hustota vody a \(K_T(J)\) je součinitel tahu závislý na pokročilém poměru \(J=V_A/(nD)\), resp. na profilovém účinníku【44†L45-L52】. Prakticky se též někdy používá „kvadrantová“ křivka pro čtyři kvadranty chodu motoru pro přesnější závislost tahu na otáčkách při různých režimech (viz Fossen at al.). 

**Prop-walk:** To je boční síla a moment způsobené asymetrií toku vrtulí. U pravotočivé (RH) vrtule (s pohonem ze zádi) je známo, že při couvání vrtule „tahá“ záď silně doleva (port), zatímco vpřed mírně doprava (starboard). Modelově lze zavést malý boční tah úměrný hlavnímu tahu: např. 
\[
Y_{\text{prop}} = \eta\cdot T,\qquad N_{\text{prop}} = d\cdot Y_{\text{prop}},
\]
kde \(\eta\) je empirický koeficient asymetrie (záporný v couvání u RH vrtule) a \(d\) vzdálenost mezi osou vrtule a středem rotace. Přesnou analýzu vyžaduje CFD nebo experiment; obecně se uvádí, že právě náklon listů a proudění za trupem generují tuto boční složku. (Konkrétní vzorce se liší zdrojem, viz [30], popisující model vrtule + kormidlo.) 

### Řízení a ploutevní proudění  
**Síly na kormidle:** Reakce kormidla se často modeluje jako hydrofoilu: boční síla a odpor jsou 
\[
Y_R = \tfrac12\rho A_R C_L(\alpha_R)\,V_{\text{eff}}^2,\qquad 
X_R = -\tfrac12\rho A_R C_D(\alpha_R)\,V_{\text{eff}}^2,
\]
kde \(A_R\) je plocha kormidla, \(\alpha_R\) úhel náběhu kormidla, a \(V_{\text{eff}}\) efektivní rychlost vody kormidlem. Pro malé úhly lze \(C_L\approx C_{L\alpha}\alpha_R\) (typicky \(\sim2\pi\) [1/rad]). Odpor \(C_D\) bývá malý nebo kombinován s odporem v 2DOF rovnici. Tyto vztahy vycházejí z klasických aerodynamických/lifting-line modelů. 

**Průtok od vrtule (prop wash):** Při jízdě vpřed vrtule zrychluje vodu do kormidla. Z teorie akčního kotouče (momentové teorie) plyne, že průměrná rychlost v plášti vrtule je 
\[
V_{\text{disk}} = U + w,\quad \text{kde } w = \frac{T}{2\rho A_P U},
\]
kde \(U\) je rychlost plavidla a \(A_P=\pi D^2/4\) plocha propeleru. Výstupní rychlost toku za vrtulí je \(U_{\text{exit}}=U+2w\). Často se tedy pro efektivní rychlost na kormidle uvažuje 
\[
V_{\text{eff}} \approx U + w = U + \frac{T}{2\rho A_P U}.
\]
V praxi se může kombinovat s okolním proudem vodní hladiny, například lineární interpolací dle míry ponoření kormidla do šroubovitého proudu. Tím se zvýrazní síla na kormidle při chodu vpřed. 

### Hydrodynamické tlumení trupu  
Pro plachetnici s ustáleným pohybem i malé rychlosti jsou důležité lineární i kvadratické složky odporu. V matici \(D\) nelineárního odporu se obvykle rozlišují lineární koeficienty (násobící rychlost) a kvadratické (násobící druhou mocninu absolutní rychlosti). Pro symetrický trup Fossen uvádí【8†L414-L421】: 
\[
D = -\begin{bmatrix} 
X_u & 0 & 0\\ 
0 & Y_v & Y_r\\ 
0 & N_v & N_r
\end{bmatrix}, 
\]
\[
D_n(v) = -\begin{bmatrix} 
X_{|u|u}|u| & 0 & 0\\ 
0 & Y_{|v|v}|v|+Y_{|r|v}|r| & Y_{|v|r}|v|+Y_{|r|r}|r|\\ 
0 & N_{|v|v}|v|+N_{|r|v}|r| & N_{|v|r}|v|+N_{|r|r}|r|
\end{bmatrix}.
\]
Zde \(X_u,Y_v,N_r\) atd. jsou lineární tlumící derivace (části odporu úměrné rychlosti), zatímco \(X_{|u|u},Y_{|v|v},N_{|r|r}\) apod. kvadratické (nepřímá závislost na rychlosti): např. odpor v příčné složce obsahuje členy úměrné \(|v|v\) a \(|r|r\). Křížové členy jako \(Y_{|r|v}\) modelují úměrnost boční síly na součin vychýlení a úhlu rotace – tedy jak rychlá rotace (yaw) zvýší příčné brzdění【8†L414-L421】.  

**Např. lze uvést odhady:** Pro 10–12 m plachetnici se nízkou rychlostí bývají hodnoty orientačně řádu (převzato z modelů i empirie):  
- Surge odpor: \(X_u\approx-50\) až \(-200\) N/(m/s), \(X_{|u|u}\approx -100\) až \(-500\) N/(m/s)^2.  
- Sway odpor: \(Y_v\approx -200\) až \(-800\) N/(m/s), kvadraticky \(Y_{|v|v}\approx -2000\) až \(-8000\).  
- Yaw odpor: \(N_r\approx -10\) až \(-50\) N·m/(rad/s), kvadraticky \(N_{|r|r}\approx -500\) až \(-3000\) N·m/(rad/s)^2.  
(Jedná se o ilustrativní rozsahy – skutečné hodnoty se liší tvarem trupu a dalšími parametry.)  

### Posun pivotního bodu (CLR)  
Účinný otáčivý bod (center of lateral resistance, pivot) plavidla se mění se rychlostí. Při stání nebo velmi nízké rychlosti leží zhruba u geometrického středu obrysové sily (např. v prostoru kýlu). S rostoucí rychlostí plavby vpřed se efektivní CLR posouvá směrem k zádi (ochrana trupu v proudu a efekt kýlové síly *za* středem). Při couvání naopak CLR zasunujeme dopředu. Prakticky se tento posun modeluje například úměrně rychlosti (čímž se zohlední změna rozložení bočních tlaků). Kvantitativní vyjádření je obtížné – obvykle se volí empiricky, popř. odhadne pomocí panelových metod. Obecně však platí, že *otáčíme-li loď vzad, pivot se posune dopředu, otáčíme-li vpřed, pivot ustupuje dozadu* (aspoň orientačně v řádu desítek procent délky lodě).

### Literatura a zdroje  
- Fossen, T.I.: *Handbook of Marine Craft Hydrodynamics and Motion Control* (2011/2021) – kapitoly o 3DOF modelu【8†L396-L404】【8†L405-L413】.  
- Yasukawa, H. a Yoshimura, Y. (2015): *“Introduction of MMG standard model for ship maneuvering”*, J. Marine Science and Technology 20(1), 37–52 – popis standardního MMG modelu (manévrovací derivace) pro manévry lodí.  
- Fossen, T.I. (1994): *Guidance and Control of Ocean Vehicles* – teorie hydrodynamických sil.  
- Okuda, J. a kol. (2023): *Parametric MMG model tuning based on full-scale data* (příloha v [30]) – příklady hydrodynamických koeficientů a modelů interakcí vrtule–kormidlo【30†L840-L849】【30†L852-L860】.  
- GitHub: *Fossen’s Marine Systems Simulator (MSS)* – doplňující MATLAB model (repositář „cybergalactic/MSS“).  
- Otevřené repozitáře (simulátory): např. **vlytsus/unity-3d-boat** (Unity 3D Yacht Simulator)【68†L248-L257】, **Habrador/Unity-Boat-physics-Tutorial** (Unity boat physics)【69†L247-L254】. Tyto projekty implementují boční a vztažné síly vrtulí, kormidla, odpor trupu apod.  

**Tabulka ukázkových derivací (orientační):**  

| Derivace       | Vzorec (subjektivní), [jednotky]     | Odhad pro 35ft jachtu   |
|----------------|--------------------------------------|-------------------------|
| \(X_u\)        | lineární surge odpor \([N/(m/s)]\)    | –100 … –200            |
| \(X_{|u|u}\)   | kvadr. surge odpor \([N/(m/s)^2]\)   | –500 … –2000           |
| \(Y_v\)        | lineární sway odpor \([N/(m/s)]\)    | –300 … –800           |
| \(Y_{|v|v}\)   | kvadr. sway odpor \([N/(m/s)^2]\)    | –3000 … –10000        |
| \(N_r\)        | lineární yaw odpor \([N·m/(rad/s)]\) | –20 … –100            |
| \(N_{|r|r}\)   | kvadr. yaw odpor \([N·m/(rad/s)^2]\) | –1000 … –4000         |
| \(Y_{r}\)      | lineární coupling (drift síla na otáčení)  | –50 … –200           |
| \(N_{v}\)      | lineární coupling (moment z příčného posuvu)| –10 … –50            |

(Citace a další literaturu viz výše.)  

**Citované zdroje:** Fossen [3,8] pro 3DOF a přidanou hmotnost【8†L396-L404】【8†L405-L413】, Fossen vzorce pro přidanou hmotnost【21†L10137-L10144】, Okuda et al. [30] pro příklad hodnot, a GitHub repozitáře [68][69] pro konkrétní implementace fyziky. 
