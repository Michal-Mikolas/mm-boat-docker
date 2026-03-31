These are results of research about KVLCC2 tanker benchmark regarding the vessel's acceleration and speed bugs in the simulator. The research was done by 2 AI research agents (ChatGPT Deep Research, Claude Opus 4.6-search). 



************



# Claude Opus 4.6-search (16 sources were used)

## KVLCC2 Technical Brief for Maneuvering Simulator Validation

---

### 1. Executive Summary

KVLCC2 is the second variant of the MOERI tanker with more U-shaped stern frame-lines. It is a benchmark hull model of a Very Large Crude Carrier developed by Maritime and Ocean Engineering Research Institute (MOERI). It is a blind study — the KVLCC2 has never been built and hence there is no ship-scale data available. This is the single most important fact for your debugging effort: **there are no full-scale sea trials for KVLCC2**. All "full-scale" data is extrapolated or simulated.

The 24th ITTC Manoeuvring Committee recommended to adopt a new set of benchmark data, where four different ship hulls were selected: two versions of a full-form tanker named KVLCC1 and KVLCC2, a container ship named KCS and a naval combatant named 5415. Though none of these ships exist in full-scale, they all represent modern hull forms of the respective types and full geometrical data for hull, propeller, rudder and other appendages is publicly available.

KVLCC2 tanker is selected as a sample ship and the captive mode test results are presented with a process of the data analysis. Using the hydrodynamic force coefficients presented, maneuvering simulations are carried out for KVLCC2 model and the fullscale ship for validation of the method.

The definitive source is **Yasukawa & Yoshimura (2015)**, "Introduction of MMG standard method for ship maneuvering predictions," *Journal of Marine Science and Technology*, 20(1):37–52.

---

### 2. Scale Clarification

#### 2.1 Full-Scale Principal Particulars

From Yasukawa (2017), which uses identical KVLCC2 geometry:

L (m) 320.0 · Lwl (m) 325.5 · B (m) 58.0 · D (m) 30.0 · d (m) 20.80 · ∇ (m³) 312,622 · S (m²) 27,467 · xG (m) 11.2 · Cb 0.81

| Parameter | Full-scale value | Unit |
|---|---|---|
| Lpp | 320.0 | m |
| Lwl | 325.5 | m |
| Beam (B) | 58.0 | m |
| Depth (D) | 30.0 | m |
| Draft (d) | 20.80 | m |
| Displacement volume (∇) | 312,622 | m³ |
| Wetted surface (S) | 27,467 | m² |
| xG (fwd of midship) | 11.2 | m |
| Block coefficient (Cb) | 0.81 | — |

#### 2.2 Propeller — Full Scale

The tanker is equipped with a fixed-pitch four-bladed propeller of 9.86-m full-scale diameter and a pitch ratio of P/D₀.₇ = 0.721.

| Parameter | Full-scale value | Unit |
|---|---|---|
| Propeller diameter (Dp) | 9.86 | m |
| Number of blades (Z) | 4 | — |
| Pitch ratio (P/D at 0.7R) | 0.721 | — |
| Propeller type | FPP (fixed-pitch), KP458 series | — |
| Number of propellers | 1 | — |

#### 2.3 Rudder — Full Scale

The KVLCC2 design features a horn rudder of 273.3 m² rudder area and a lateral area of 136.7 m².

| Parameter | Full-scale value | Unit |
|---|---|---|
| Rudder type | Horn (semi-balanced / Mariner type) | — |
| Total rudder area (AR) | 273.3 | m² |
| Lateral area | 136.7 | m² |
| Number of rudders | 1 | — |
| Max rudder angle (δ_max) | ±35° | deg |

#### 2.4 Design Speed and Froude Number

The wave conditions are the regular head waves of λ/LPP = 0.6 and 1.0 with three wave steepness ratios at three ship speeds of 13.5, 14.5 and 15.5 knots (design speed).

The approach speed U₀ corresponded to 15.5 knots.

| Parameter | Value | Unit | Notes |
|---|---|---|---|
| **Design speed** | **15.5 knots** | kn | Most frequently cited |
| Design speed | ≈ 7.974 | m/s | = 15.5 × 0.5144 |
| Froude number (Fn) at design speed | **0.142** | — | Fn = U / √(g·Lpp) |
| Service speeds tested | 13.5, 14.5, 15.5 | kn | Per Seo et al. (2020) |

#### 2.5 Common Model Scales Used in Literature

Multiple laboratories have built KVLCC2 models at different scales:

| Scale ratio (λ) | Model Lpp (m) | Source / Lab |
|---|---|---|
| **1:45.714** | ~7.0 | The model was manufactured of wood to a linear scale ratio of 1:45.714. (MARIN, SIMMAN 2008) |
| **1:46.426** | ~6.89 | The document presents results from an open water test of a KVLCC2 ship model with a scale ratio of 46.426. (HMRI) |
| **1:5** (L64) | 64.0 | Numerical simulations were performed using the scaled model of the KRISO Very Large Crude Carrier 2 (KVLCC2-L64, scale ratio 1:5) as the reference vessel. |
| ~1:58 | ~5.52 | INSEAN (rudder drawing scale from SIMMAN 2014 page) |

#### ⚠️ CRITICAL: The "64 m KVLCC2" (KVLCC2-L64)

The KVLCC2-L64 is a **scale ratio of 1:5** (Lpp = 64 m out of 320 m full-scale). The ship hydrodynamics were modeled using the Maneuvering Modeling Group (MMG) formulation, and the corresponding coefficients were validated against the benchmark data published through the SIMMAN 2008 Workshop.

This 64 m model is a **large outdoor free-running model** — not a full-size ship. All of its physical parameters (mass, propeller diameter, RPM, speed) must follow Froude scaling laws from the 320 m full-scale definition.

---

### 3. Acceleration and Speed Findings

#### 3.1 Steady-State Speed at Design Condition

| Condition | Speed | Fn | RPM context |
|---|---|---|---|
| Full-scale design | 15.5 kn (7.97 m/s) | 0.142 | Full-scale propeller rps at self-propulsion point |
| Model at λ=46.4 | ~1.17 m/s | 0.142 | The model's self-propulsion point was at 9.9 revolutions per second (rps) which would equate to a full-scale ship speed of 15.5 knots. |

#### 3.2 Acceleration from Rest — Available Data

**No published time-series of straight-ahead acceleration from rest to design speed exists for KVLCC2.** The standard SIMMAN / MMG benchmarks focus on turning circles, zig-zag, and crash-stop maneuvers, all of which begin at a steady approach speed.

#### 3.3 Benchmark Maneuvering Conditions

The methodology for improving the simulation model is to use the model to simulate the IMO standard manoeuvres. Turning circles, zig-zag and stopping tests in deep water is simulated.

All standard benchmarks begin at approach speed = 15.5 kn (Fn = 0.142):

| Maneuver | Approach speed | Rudder angle | Notes |
|---|---|---|---|
| Turning circle | 15.5 kn | ±35° | Comparison of the predicted heading angle, rudder angle and trajectory with free running (FR) data in −10/−10 zigzag maneuver (Fr = 0.142). |
| Zig-zag 10°/10° | 15.5 kn | ±10° | Standard IMO |
| Zig-zag 20°/20° | 15.5 kn | ±20° | Standard IMO |
| Crash-stop | 15.5 kn | — | Engine reversal |

#### 3.4 Stopping / Crash-Stop

The simulation model does fulfil all the IMO criteria of turning, initial turning/course-changing, yaw-checking abilities. The model in VeSim fulfil the IMO criteria of stopping ability, while the model in SIMAN does not. Stopping distance is approximately 15 ship-lengths (~4.8 km) for a VLCC from design speed — this is the IMO criterion upper bound. Exact time-to-stop is simulator-dependent but typically 15–20 minutes for a VLCC of this size from 15.5 kn.

#### 3.5 What You Can Infer About Acceleration

For a rough estimate of acceleration, the physics are:

- **Mass**: m = ρ · ∇ ≈ 1025 × 312,622 ≈ 320.4 × 10⁶ kg
- **Added mass in surge**: m_x' ≈ 0.022 (non-dimensional, typical from Yasukawa & Yoshimura) → m_x ≈ 0.022 × ½ρLpp²d ≈ relatively small
- **Total virtual mass**: approximately 325–330 million kg
- **Net thrust at bollard pull**: full propeller thrust minus zero-speed resistance (zero) = T_bollard
- **Initial acceleration**: a ≈ T_net / (m + m_x)

At design speed the thrust and resistance balance. A VLCC with ~15–17 MW delivered power, η ≈ 0.6 overall efficiency, will develop on the order of 1.5–2.0 MN thrust at bollard, yielding initial acceleration of order **0.005 m/s²** — meaning roughly **25+ minutes from dead stop to 15 kn**. VLCCs are extremely sluggish.

---

### 4. RPM / Propulsion Findings

#### 4.1 Model-Scale Self-Propulsion RPM

The model's self-propulsion point was at 9.9 revolutions per second (rps) which would equate to a full-scale ship speed of 15.5 knots. This is from an HMRI test at scale ratio 46.426.

| Quantity | Value | Unit | Scale | Source |
|---|---|---|---|---|
| Model rps at self-propulsion | **9.9** | rev/s | Model (λ=46.4) | HMRI open-water data |
| Model RPM at self-propulsion | **594** | rev/min | Model (λ=46.4) | = 9.9 × 60 |
| Model propeller diameter | ~0.212 | m | Model (λ=46.4) | = 9.86/46.4 |

#### 4.2 Froude Scaling of RPM

Froude scaling for propeller revolutions:

$$n_{full} = n_{model} / \sqrt{\lambda}$$

Where λ is the scale ratio.

For the HMRI model (λ = 46.426):
- n_full = 9.9 / √46.426 = 9.9 / 6.814 = **1.453 rps** = **87.2 RPM** (full-scale propeller RPM at design speed)

For the MARIN model (λ = 45.714):
- n_full = n_model / √45.714 = n_model / 6.761

For the L64 model (λ = 5):
- n_full = n_model / √5 = n_model / 2.236
- At design speed, n_L64 = 1.453 × √5 = **3.25 rps** = **195 RPM**

#### 4.3 Full-Scale Propeller RPM Estimates

| Parameter | Value | Unit | Confidence | Notes |
|---|---|---|---|---|
| **Full-scale propeller rps at design speed** | **~1.45** | rev/s | Medium–High | Froude-scaled from HMRI 9.9 rps model data |
| **Full-scale propeller RPM at design speed** | **~87** | rev/min | Medium–High | = 1.45 × 60 |
| **Typical VLCC main engine RPM range** | 50–110 | rev/min | High (industry) | Slow-speed 2-stroke diesel, direct drive |
| **Gearbox / reduction ratio** | **1:1 (direct drive)** | — | High | VLCCs use direct-coupled slow-speed engines |

**Key point**: On a real VLCC, the propeller is directly coupled to a slow-speed two-stroke diesel engine. There is **no gearbox**. Main engine RPM = propeller shaft RPM = propeller RPM. At design speed, this is typically 75–100 RPM for a 300k-class tanker.

#### 4.4 The "nps = 4 rps" in the GitHub MMG Code

The GitHub `mmgdynamics` repository demonstrates the KVLCC2-L64 model:

The example code uses `nps = 4` (4 revs per second) and initial velocity `uvr = [3.85, 0, 0]` (m/s) for the `kvlcc2_l64` vessel.

For the L64 model (λ = 5):
- Model speed at design: U_L64 = 7.97 / √5 = **3.56 m/s** (the code uses 3.85 m/s, slightly above design)
- Propeller rps at design: n_L64 = 1.45 × √5 ≈ **3.25 rps**
- The code uses 4 rps, which is above the design condition — consistent with a moderate command above self-propulsion point

This means:
- For a 64 m model: **~3.25 rps at design, range 0–5 rps** are reasonable
- For a full-scale ship: **~1.45 rps (87 RPM) at design**
- For a 1:46 towing-tank model: **~9.9 rps at design**

---

### 5. MMG Parameters Useful for Simulator Validation

#### 5.1 Self-Propulsion Factors

From Yasukawa & Yoshimura (2015) and corroborating SIMMAN data. These are non-dimensional and **scale-independent** in the MMG formulation:

| Parameter | Symbol | Typical Value | Notes |
|---|---|---|---|
| Thrust deduction factor | t_P | 0.220 | At design condition |
| Wake fraction (model-scale) | w_P0 | 0.40 (model) | An input value of 0.150 for the wake fraction of the hull has been observed to be too low compared to literature and other wake fractions used in SIMMAN 2008. Values of 0.35–0.40 at model scale are common. Full-scale is lower (~0.25–0.35). |
| Relative rotative efficiency | η_R | ~1.02 | Slightly above 1 |

#### 5.2 Non-dimensional Hull Derivatives (Yasukawa & Yoshimura 2015 Reference Set)

These are the standard MMG derivatives from Yasukawa & Yoshimura (2015), all non-dimensionalized using ½ρLppd U² for forces and ½ρLpp²d U² for moments. They are nominally **scale-independent** (same for model and full-scale in the MMG non-dimensional system):

| Derivative | Symbol | Value (non-dim) | Confidence |
|---|---|---|---|
| Added mass (surge) | m'_x | 0.022 | High |
| Added mass (sway) | m'_y | 0.223 | High |
| Added moment of inertia | J'_zz | 0.011 | High |
| Surge resistance coeff | R'_0 | (varies with U) | From resistance curve |
| Linear sway velocity deriv. | Y'_v | (from CMT) | Accurate estimation in sway-related linear hydrodynamic coefficient Y'v, hull-rudder interaction coefficient aH and flow-straitening coefficient γR are the key for the present manoeuvring predictions. |
| Linear yaw moment deriv. | N'_v | (from CMT) | The linear damping coefficients proved to be of high importance in the sensitivity analysis, especially Nv and Nr. |
| Linear yaw rate deriv. | N'_r | (from CMT) | See above |

The full parameter sets are published in Yasukawa & Yoshimura (2015) Tables 3–7. I cannot reproduce the entire tables, but the paper is the definitive reference. The approximate values commonly used in open-source implementations (from published literature) are:

**Hull linear derivatives (non-dimensional × 10⁻³):**
- Y'_v ≈ -0.315 (varies by source: -0.28 to -0.35)
- N'_v ≈ -0.137
- Y'_r ≈ +0.083 (approx.)
- N'_r ≈ -0.049

**Hull nonlinear derivatives (non-dimensional):**
- Y'_vvv, N'_vvv, Y'_vvr, N'_vvr, etc. — see Yasukawa & Yoshimura (2015) Table 5

#### 5.3 Propeller Polynomial Coefficients

In the MMG standard method, the propeller thrust is modeled as:

$$K_T = k_0 + k_1 J_P + k_2 J_P^2$$

where J_P = U(1 - w_P) / (n · D_P) is the advance coefficient.

Typical values for the KP458 propeller (KVLCC2):
- k₀ ≈ 0.2931
- k₁ ≈ -0.2753
- k₂ ≈ -0.1385

(These are from the 2nd-order polynomial fit of the KT-J curve from open-water data)

#### 5.4 Rudder Force Coefficients

Key hull-rudder interaction parameters:
| Parameter | Symbol | Typical Value |
|---|---|---|
| Rudder inflow speed ratio | ε | ~1.09 |
| Flow straightening coefficient | γ_R | ~0.40 |
| Hull-rudder interaction (sway) | a_H | ~0.312 |
| Longitudinal coord of add. lateral force | x'_H | ~-0.464 |
| Rudder force increase factor | (1 + a_H) | ~1.312 |

---

### 6. Suspicious Mismatches That Could Explain an Unrealistically Slow Simulation

#### 6.1 ⚠️ MOST LIKELY BUG: Mixing Model-Scale RPM with Full-Scale Mass/Dimensions

If your simulator has:
- **Hull dimensions of 64 m** (L64 model) or 320 m (full-scale)
- But uses **propeller RPM of ~9.9 rps** (which is the towing-tank model value at λ≈46)

…then the propeller advance coefficient J will be far too small, the propeller will produce thrust as if barely moving, and the ship will be absurdly slow or fast depending on which direction the mismatch goes.

**Check this table:**

| If your Lpp is... | Your propeller D_p should be... | Design rps should be... | Design RPM should be... |
|---|---|---|---|
| 320.0 m (full-scale) | 9.86 m | **~1.45 rps** | **~87 RPM** |
| 64.0 m (1:5 scale) | 1.972 m | **~3.25 rps** | **~195 RPM** |
| ~7.0 m (1:46 scale) | ~0.212 m | **~9.9 rps** | **~594 RPM** |

#### 6.2 ⚠️ Using "50 RPM" for a 64 m Model

If your simulator has a 64 m KVLCC2 model and you are commanding **50 RPM = 0.833 rps**, this is **roughly 25% of the design rps (3.25 rps)**. At such low propeller speed:

- The advance ratio J will be very large (or the ship will be nearly stationary)
- The propeller may be in a low-thrust or even windmilling regime
- Expected steady-state speed would be **very low** — possibly 1–2 knots equivalent (well under 1 m/s at model scale)

If instead you mean 50 RPM for a **full-scale 320 m ship**: 50 RPM = 0.833 rps, which is about **57% of design propeller rps**. Expected steady speed would be roughly proportional (very roughly): ~9 kn (since resistance ∝ V² and thrust ∝ n², but the relationship is nonlinear). But the ship would still move at a reasonable speed.

**50 RPM is therefore plausible for a full-scale VLCC (producing ~50–60% of design speed), but absurdly low for a 1:5 scale model where design is ~195 RPM.**

#### 6.3 ⚠️ Wake Fraction Mismatch

An input value of 0.150 for the wake fraction of the hull has been observed to be too low compared to literature and other wake fractions used in SIMMAN 2008. If wake fraction is wrong, the effective inflow velocity to the propeller will be wrong, dramatically affecting thrust output.

#### 6.4 ⚠️ Resistance Curve at Wrong Scale

If the resistance polynomial was fitted to model-scale non-dimensional coefficients but is being applied to a different-scale geometry without proper re-dimensionalization, the drag could be orders of magnitude off.

#### 6.5 ⚠️ Mass and Added Mass

For the 64 m model at λ = 5:
- Displacement: Δ_L64 = Δ_full / λ³ = 312,622 / 125 = **2,501 m³** → mass ≈ **2,563 tonnes**
- NOT 312,622 m³ (that would be full-scale)

If mass is entered at full-scale but dimensions at model-scale, acceleration will be ~125× too slow.

#### 6.6 ⚠️ Time Scaling

Froude time scaling: t_model = t_full / √λ

For λ = 5: events at model-scale happen √5 ≈ 2.24× faster. If the simulator doesn't account for this, all transients will appear slower.

---

### 7. Final Debugging-Oriented Reference Table

#### Full-Scale (Lpp = 320 m)

| Parameter | Value | Unit | Source | Confidence | Simulator Notes |
|---|---|---|---|---|---|
| Lpp | 320.0 | m | SIMMAN 2008 / Yasukawa 2015 | Definitive | — |
| Beam | 58.0 | m | SIMMAN 2008 | Definitive | — |
| Draft | 20.8 | m | SIMMAN 2008 | Definitive | — |
| Displacement (volume) | 312,622 | m³ | Yasukawa 2017 | Definitive | × ρ_sw (1025 kg/m³) for mass |
| Mass | ~320.4 × 10⁶ | kg | Inferred | High | = ρ × ∇ |
| Cb | 0.81 | — | Yasukawa 2017 | Definitive | — |
| xG (fwd of midship) | 11.2 | m | Yasukawa 2017 | Definitive | — |
| Design speed | 15.5 | knots | Seo et al. 2020 | Definitive | = 7.97 m/s |
| Froude number (design) | 0.142 | — | Multiple sources | Definitive | — |
| Propeller diameter | 9.86 | m | SIMMAN | Definitive | — |
| Propeller blades | 4 | — | SIMMAN | Definitive | FPP |
| P/D (at 0.7R) | 0.721 | — | SIMMAN | Definitive | — |
| Propeller rps (design) | ~1.45 | rps (rev/s) | Inferred from HMRI model test Froude-scaled | Medium-High | **This is propeller shaft rps = engine rps (direct drive)** |
| Propeller RPM (design) | ~87 | RPM | Inferred | Medium-High | = 1.45 × 60 |
| Engine type (representative) | Slow-speed 2-stroke | — | Industry standard | High | Direct-coupled, no gearbox |
| Reduction ratio | 1:1 | — | Industry standard for VLCCs | High | — |
| Rudder area | 273.3 | m² | SHOPERA/SIMMAN | High | Horn rudder |
| Rudder max angle | ±35 | deg | SIMMAN benchmark | Definitive | — |
| Thrust deduction (tP) | ~0.220 | — | Yasukawa 2015 | High | — |
| Wake fraction (wP) model | ~0.40 | — | Literature range | Medium | Full-scale is lower, ~0.30 |
| m'_x (added mass surge) | 0.022 | non-dim | Yasukawa 2015 | High | — |
| m'_y (added mass sway) | 0.223 | non-dim | Yasukawa 2015 | High | — |
| KT polynomial: k0 | ~0.2931 | — | KP458 open-water fit | Medium | KT = k0 + k1·J + k2·J² |
| KT polynomial: k1 | ~-0.2753 | — | KP458 open-water fit | Medium | — |
| KT polynomial: k2 | ~-0.1385 | — | KP458 open-water fit | Medium | — |
| Water depth (deep water) | Infinite (>4×draft) | m | SIMMAN standard | — | h > 80 m |

#### L64 Model (Lpp = 64 m, λ = 5)

| Parameter | Value | Unit | How derived | Simulator Notes |
|---|---|---|---|---|
| Lpp | 64.0 | m | 320/5 | — |
| Beam | 11.6 | m | 58/5 | — |
| Draft | 4.16 | m | 20.8/5 | — |
| Displacement (vol) | 2,501 | m³ | 312622/125 | — |
| Mass | ~2,563,500 | kg | × 1025 | **NOT 320 million kg** |
| Propeller diameter | 1.972 | m | 9.86/5 | — |
| Design speed | 3.56 | m/s | 7.97/√5 | = ~6.9 kn |
| Propeller rps (design) | ~3.25 | rps | 1.45×√5 | **~195 RPM** |
| Rudder area | 10.93 | m² | 273.3/25 | — |

#### Towing-Tank Model (Lpp ≈ 7 m, λ ≈ 46)

| Parameter | Value | Unit | How derived |
|---|---|---|---|
| Lpp | ~6.9–7.0 | m | 320/46 |
| Propeller diameter | ~0.212 | m | 9.86/46 |
| Design speed | ~1.17 | m/s | 7.97/√46 |
| Propeller rps (design) | **9.9** | rps | Direct measurement (HMRI) |
| Propeller RPM (design) | **594** | RPM | — |

---

### 8. Source List with Links

| # | Source | Link |
|---|---|---|
| 1 | Yasukawa, H. & Yoshimura, Y. (2015). "Introduction of MMG standard method for ship maneuvering predictions." *J. Mar. Sci. Technol.* 20(1):37–52. | https://link.springer.com/article/10.1007/s00773-014-0293-y |
| 2 | SIMMAN 2008 – KVLCC2 Geometry & Conditions | http://www.simman2008.dk/kvlcc/kvlcc2/kvlcc2_geometry.html |
| 3 | SIMMAN 2014 – KVLCC2 Geometry & Conditions | https://simman2014.dk/ship-data/moeri-kvlcc2-tanker/geometry-and-conditions-moeri-kvlcc2-tanker/ |
| 4 | KVLCC2 Propeller Open-Water Data (HMRI) | https://www.scribd.com/document/597201086/KVLCC2-Propeller-Openwater-Data-HMRI |
| 5 | Yasukawa, H. et al. (2017). "Effect of Engine Output on Maneuverability of a VLCC." *J. Mar. Sci. Technol.* | https://link.springer.com/article/10.1007/s00773-017-0435-0 |
| 6 | ITTC 7.5-02-06-06 Benchmark Data for Validation | https://www.ittc.info/media/9691/75-02-06-06.pdf |
| 7 | Seo et al. (2020). "Power increase and propulsive characteristics in regular head waves of KVLCC2 using model tests." *Ocean Eng.* | https://www.sciencedirect.com/science/article/pii/S0029801820310003 |
| 8 | Sakamoto et al. (2019). "Identification of KVLCC2 manoeuvring parameters for a modular-type mathematical model by RaNS method." *Ocean Eng.* | https://www.sciencedirect.com/science/article/abs/pii/S0029801819304342 |
| 9 | NTNU Thesis: "Revised simulation model for a VLCC (KVLCC2)" | https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/238905 |
| 10 | Andersson et al. "Ship-scale CFD benchmark study of a pre-swirl duct on KVLCC2" | https://research.chalmers.se/publication/529379/file/529379_Fulltext.pdf |
| 11 | `mmgdynamics` Python package (KVLCC2-L64 implementation) | https://github.com/nikpau/mmgdynamics |
| 12 | MANSIM: Theoretical Background and Application | https://mansim.org/include/downloads/paper_2.pdf |
| 13 | Sprenger et al. (SHOPERA project) — KVLCC2 experimental data | Referenced via ResearchGate figure DOIs above |

---

### 9. Key Takeaways for Debugging

1. **If your model is 64 m long but uses RPM values appropriate for a 320 m ship (e.g., 87 RPM), it will be ~2.2× too slow at the propeller.** Design rps for L64 should be ~3.25 rps (195 RPM), not ~1.45 rps (87 RPM).

2. **If your model is 64 m long but uses the mass of the full-scale ship (320 million kg instead of ~2.5 million kg), everything will accelerate 125× too slowly.**

3. **"50 RPM" for a 64 m model** means 0.833 rps, which is only **~26% of the design propeller speed (3.25 rps)** — the ship would barely move (equivalent to a full-scale ship at ~22 RPM, well below maneuvering speed).

4. **"50 RPM" for a full-scale ship** means 0.833 rps, which is ~57% of design propeller speed — the ship would move at roughly 8–10 kn after a very long acceleration period (15+ minutes).

5. The MMG non-dimensional coefficients are scale-independent, but **every dimensional input (mass, length, speed, rps, propeller diameter) must be self-consistent at one scale.** Mixing scales is the #1 source of pathological simulator behavior.



************



# ChatGPT Deep Research ( sources were used)

## KVLCC2 Tanker Benchmark: Source-Backed Technical Brief for Maneuvering Simulator Validation

### Executive summary

“KVLCC2” in the maneuvering literature is a **standardized benchmark hull form** for a **very large crude carrier (VLCC)** used in community validation efforts (notably ITTC benchmark activities and SIMMAN datasets). It is treated as a *notional* “full-scale/prototype” ship (e.g., **Lpp ≈ 320 m**) together with multiple **geometrically-related physical model scales** and experiment/simulation datasets. 

The most likely reason a KVLCC2 maneuvering simulator “feels far too slow” is **a scale/units mismatch in propulsion and inertia**, especially one of these patterns:

- **Propeller rate error from scale mixing:** applying a “full-scale” propeller rpm (e.g., ~50–100 rpm) to a **model-scale ship** (or scaled-down “64 m” surrogate) without the required √λ scaling can reduce thrust roughly with **n²**, yielding dramatically slow acceleration. This is consistent with how KVLCC2 benchmark model tests set propeller rates at the model self-propulsion point and how ITTC discusses the importance of the self-propulsion point and scale effects.   
- **rpm vs rps vs rad/s confusion:** several KVLCC2 sources report **propeller revolutions per second (rps)** (e.g., 9.9 rps, 17.2 rps), which equals **594 rpm** and **1032 rpm** respectively—orders of magnitude different from “50 rpm”.   
- **Mass/inertia not scaled consistently with geometry:** using a scaled-down geometry (e.g., a 64 m “KVLCC2-L64” surrogate) while keeping full-scale displacement/mass will also produce unrealistically slow acceleration because surge dynamics depend on mass and added mass. 

A robust “sanity anchor” for propulsion at the **design/service speed (15.5 kn)** is the free-running benchmark setup: at **scale 1:45.714**, a **model-scale propeller rate of 620 rev/min (propeller rpm)** is reported to yield a **model speed ≈ 1.18 m/s** (Froude-scaled to 15.5 kn full scale). Converting by Froude similarity gives a **full-scale-equivalent propeller rate ≈ 92 rpm**. 

### Scale clarification

#### What “full-scale” means for KVLCC2

Many papers and benchmark sites list “full-scale” particulars (e.g., Lpp = 320 m) for KVLCC2, but this should be understood as the **prototype/reference ship used for scaling**, not necessarily a specific IMO-numbered vessel with sea-trial logs. In practice, KVLCC2 is used as a **public benchmark geometry + benchmark hydrodynamic datasets**, with “full-scale” values acting as the reference for Froude scaling of model tests and simulations. 

#### Canonical geometry and appendages

A consistent reference set of “prototype” values used across multiple benchmark sources is:

- **Lpp = 320.0 m**, **B ≈ 58.0 m**, **T = 20.8 m**, **Cb ≈ 0.810**, **propeller diameter Dp = 9.86 m**, **single screw + single rudder**. 

Caution: some benchmark datasets use **model propellers that deviate from strict geometric scaling** of the prototype (e.g., a BSHC model propeller at 1/45.714 with D = 0.204 m and altered P/D), meaning you cannot assume that “Dp scales exactly” in every dataset. 

#### Froude scaling rules you should enforce in a simulator

Let **λ = Lprototype / Lmodel** (length scale ratio).

Under Froude similarity (the standard assumption for maneuvering benchmarks):

- **Speed:** \( V_{model} = V_{full}/\sqrt{\lambda} \) and \( V_{full} = V_{model}\sqrt{\lambda} \).   
- **Time:** \( t_{model} = t_{full}/\sqrt{\lambda} \) and \( t_{full} = t_{model}\sqrt{\lambda} \). (This is explicitly used in benchmark discussions where a model-time interval is mapped to a longer full-scale time via √λ.)   
- **Yaw-rate / steering-rate (rates scale like V/L):** rates scale with √λ (model rates are faster). ITTC notes rudder turning rate should be scaled according to Froude’s model law.   
- **Propeller rotational speed (to preserve advance ratio J = V/(nD) when geometry is similar):**  
  \( n_{model} \approx n_{full}\sqrt{\lambda} \) and \( n_{full} \approx n_{model}/\sqrt{\lambda} \).  
  This is the single most common place simulators “mix scale”: e.g., using a full-scale n on a reduced-length ship makes thrust far too small. 

#### Model self-propulsion point versus ship self-propulsion point

A major benchmark nuance is the choice of propeller loading condition:

- **Model self-propulsion point (MSPP):** propeller rate such that the **physical model** achieves the target speed with its model-scale resistance (including scale effects in friction).  
- **Ship self-propulsion point (SSPP):** propeller rate corresponding to the **prototype** self-propulsion condition; achieving this on a model often requires auxiliary towing/thrust adjustment.

The ITTC manoeuvring committee explicitly notes that different institutes set propeller rpm differently at SIMMAN (some at model self-propulsion, some at ship self-propulsion), and that this choice matters for coefficients and predictions. 

SIMMAN 2014 test specifications also make this distinction explicit in a way that is directly relevant for debugging: **“Propeller revolution 1.0 means ship self propulsion point and 1.277 means model self propulsion point.”** That is, MSPP can be ~28% higher in propeller rate than SSPP in that test context—large enough to strongly affect thrust and acceleration. 

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["KVLCC2 lines plan","KVLCC2 model test free running basin","KVLCC2 tanker benchmark SIMMAN"],"num_per_query":1}

### Acceleration and speed findings

#### Straight-ahead acceleration benchmarks are scarce in the public KVLCC2 maneuvering sets

A key limitation for your stated goal (validating **acceleration / speed build-up**) is that widely used KVLCC2 maneuvering benchmarks emphasize:

- steady approach at a target speed (often 15.5 kn full-scale equivalent) followed by turning/zig-zag maneuvers, and  
- captive tests (PMM/CMT) for hydrodynamic derivatives around that operating point,

rather than dedicated “from rest to service speed” acceleration trials.

This limitation is stated plainly in shallow-water maneuvering modeling work based on SIMMAN data: **the SIMMAN benchmark set for KVLCC2 did not contain a test with varying longitudinal acceleration**, forcing an assumption for the surge acceleration term. 

Likewise, free-running maneuvering tests typically start from an established initial condition (steady heading/speed/rpm) and use separate speed runs to determine the rpm corresponding to the desired speed. 

#### Steady “speed ↔ propeller rate” anchors at the 15.5 kn design condition

Even without full acceleration curves, you can validate a simulator’s propulsion/resistance balance with steady anchors:

- In free-running benchmark tests (scale **1:45.714**), a **constant propeller rate 620 rev/min (model-scale propeller rpm)** was determined during a speed run at **1.18 m/s (model-scale ship speed)** at loaded draft.   
  - This model speed corresponds to ~15.5 kn full scale by Froude scaling (√λ ≈ 6.76), providing a strong consistency check for your simulator’s steady-state propulsion. 
- In open-water propeller data for a KVLCC2 model at scale ratio **46.426**, the “model self-propulsion point” is given as **9.9 rps** (i.e., 594 rpm, model-scale propeller speed).   
- In a 1/110-scale NMRI-based context used for self-propulsion/stopping comparisons, a self-propulsion propeller rate of **17.2 r/s** at **0.76 m/s model speed** is cited (again, this is propeller rps, not engine rpm). 

These three “self propulsion” anchors already show why a simulator can look “too slow” if it accidentally uses full-scale rpm values in a model-scale setup: model-scale n values that correspond to the 15.5 kn condition are hundreds of rpm (or ~10–20 rps), not ~50 rpm. 

#### Free-running maneuver benchmarks at 15.5 kn (turning and zig-zag)

For maneuvering simulator validation (even if you cannot validate straight-line acceleration), the highest-quality public benchmark set includes **turning circle** and **zig-zag** outcomes with uncertainty.

In the free-running benchmark dataset (tests performed at entity["organization","Maritime Research Institute Netherlands","towing tank netherlands"] on a 1:45.714 model built by entity["organization","INSEAN","italian model basin"]), the reported results (presented in **full-scale units**) for turning circle at **15.5 kn** and **35° rudder** include, for one direction:

- **Advance (AD) ≈ 982 m**, **Transfer (TR) ≈ 434 m**, **Tactical diameter (TD) ≈ 1049 m**.   
- The same table also reports **steady turning speed Vstc ≈ 5.6 kn** during the steady part of the circle (useful as a “speed drop in turn” check).   

For zig-zag tests at **15.5 kn**, that dataset reports overshoot angles and timing (again in full-scale units). Example values appearing in the benchmark table include:

- **10/10 zig-zag:** 1st overshoot around **7.5°–13.3°**, 2nd overshoot around **14.5°–20.6°**, with overshoot times on the order of **~60–133 s** depending on run/side.   
- **20/20 zig-zag:** 1st overshoot around **~14.7°**, 2nd overshoot around **~12.9°** in the listed entries, with overshoot times on the order of **~60–65 s** for some overshoots.   

These are strong time-domain sanity checks (even if you cannot validate straight-line acceleration), because “too slow” propulsion often also makes yaw response sluggish and changes overshoot timings. 

#### Stopping / crash-stop style reference

Open, benchmark-adjacent stopping references exist, but they are not the same as “from rest” acceleration:

A stopping-maneuver CFD/experiment comparison referencing entity["organization","National Maritime Research Institute","japan maritime institute"] test setups reports:

- model L ≈ 2.909 m and U ≈ 0.4905 m/s at the start of stopping (model scale), then propeller commanded to **−10.36 r/s** (reverse).   
- a self-propulsion point near **17.2 r/s** at **0.76 m/s** model speed for the (forward) self-propulsion condition.   

For simulator debugging, these values help validate:
- sign conventions for propeller reversal,  
- the scale mapping of time (√λ), and  
- whether your simulator’s longitudinal inertia and reverse-thrust handling are in a plausible magnitude range. 

#### Evidence related to “50 rpm” settings

Public KVLCC2 benchmarks rarely state “speed after 5 minutes at 50 rpm” unambiguously.

However, there **is** a defensible steady-state inference if—and only if—your “50 rpm” is **full-scale propeller rpm** and you assume approximately constant advance ratio near the operating point:

- If the design condition is roughly **15.5 kn at ~92 rpm propeller** (full-scale-equivalent inferred from the 620 rpm @ 1:45.714 speed run), then **50 rpm corresponds to ~8.45 kn** by linear scaling of speed with rpm at constant J (inferred, not directly measured).   

This inference is **highly sensitive** to which dataset you adopt: different model propellers/self-propulsion points imply full-scale-equivalent design rpm ranging roughly from the high 60s to near 100 rpm. 

### RPM / propulsion findings

#### What KVLCC2 benchmark sources mean by “RPM-like” quantities

Across the KVLCC2 maneuvering literature and datasets, the RPM-like actuator variable is, overwhelmingly, the **propeller shaft rotational speed** (often assumed **constant rpm** during a maneuver). Several sources also explicitly state that shaft torque dynamics are not modeled when rpm is assumed constant. 

Accordingly, when you see:

- “rpm” or “rev/min” → **propeller rpm** (unless explicitly stated otherwise).   
- “rps” or “r/s” → **propeller revolutions per second** (propeller shaft speed).   

The benchmark sources used here generally **do not provide a main engine rpm range** or gear ratio, because the MMG-style maneuvering formulations treat the propeller rate as the control input and typically hold it fixed. 

#### Prototype propeller and rudder characteristics commonly used

A standard prototype propeller/rudder set (as given in SIMMAN geometry pages) includes:

- **Propeller:** 4 blades, **Dp = 9.86 m**, **P/D ≈ 0.721**, **Ae/A0 ≈ 0.431**, **hub ratio ≈ 0.155**.   
- **Rudder:** mariner/horn-type rudder arrangement; SIMMAN provides multiple rudder geometry fields (including total/lateral area and chord references), and benchmark maneuvers commonly use ±35° for turning circles.   

Caution: other sources define rudder area differently (e.g., movable part excluding horn). For example, the MMG standard-method paper explicitly notes AR is the movable part excluding horn and lists AR = 112.5 m² full scale, while SIMMAN pages list larger “total” areas. Treat these as different geometric definitions, not necessarily conflicts. 

#### Open-water propeller data and coefficients

Two primary benchmark-style ways KVLCC2 propeller performance is specified:

- Tabulated open-water coefficients K_T and K_Q versus advance ratio J for a given model propeller (example HMRI dataset), including both “model” and “real” columns in the same file.   
- A simplified polynomial representation of the thrust coefficient used in MMG simulations, e.g. for KVLCC2:  
  (k0, k1, k2) = (0.2931, −0.2753, −0.1385) for \(K_T(J_P) = k_2 J_P^2 + k_1 J_P + k_0\).   

A critical benchmark warning: for at least one widely used SIMMAN propeller geometry, the open-water curve provided to participants was found (in later analysis) to be **computed from geometry**, not measured experimentally for that exact propeller, and it may differ from other experimentally measured curves. This matters if your simulator is sensitive to K_T/K_Q details. 

#### Wake fraction, thrust deduction, and “constant rpm” assumptions

In the MMG standard-method coefficient set for KVLCC2, representative interaction coefficients include:

- **thrust deduction** \(t_P = 0.220\)  
- **steering resistance deduction** \(t_R = 0.387\)  
- **rudder force increase factor** \(a_H = 0.312\)  
- **additional lateral force lever** \(x'_H = -0.464\)  
- **straight-line effective wake** \(w_{P0}\): assumed **0.40 for a model** and **0.35 for full scale** in that study’s simulations.   

Shallow-water maneuvering modeling papers built on benchmark tests sometimes treat **shaft torque as unmodeled** due to constant rpm, and they derive thrust deduction by matching resistance and thrust at self-propulsion. 

### MMG parameters useful for simulator validation

#### Widely used MMG coefficient set for KVLCC2

The following parameter set is widely reused in “MMG standard method” implementations and is explicitly published for KVLCC2. It is a strong candidate for validating your MMG simulator implementation and unit handling.

From the MMG standard-method paper by entity["people","Hajime Yasukawa","naval architect"] and entity["people","Yasuaki Yoshimura","naval architect"]:

- Principal particulars include **Scale 1/45.7 (L7 model)** and **Scale 1/110 (L3 model)** alongside “fullscale”: Lpp, B, draft, displacement volume, propeller diameter, rudder span, and rudder area.   
- Hydrodynamic force coefficients and interaction parameters used for maneuvering simulations (dimensionless) include:  
  \(X'_{vv}\), \(X'_{vr}\), \(X'_{rr}\), \(X'_{vvvv}\), \(Y'_v\), \(Y'_R\), \(Y'_{vvv}\), \(Y'_{vvr}\), \(Y'_{vrr}\), \(Y'_{rrr}\), \(N'_v\), \(N'_R\), \(N'_{vvv}\), \(N'_{vvr}\), \(N'_{vrr}\), \(N'_{rrr}\), plus added-mass terms and interaction terms \(t_P\), \(t_R\), \(a_H\), \(x'_H\), and rudder inflow/wake model parameters.   

This same publication gives maneuver-validation outcomes (turning indices and zig-zag overshoot angles) for both model and full-scale-equivalent simulations, which you can use to validate your own simulation outputs at a higher level than raw coefficients. 

#### What is *not* well constrained for acceleration validation

For surge acceleration modeling, at least one benchmark-based shallow-water modeling study notes:

- the benchmark set did not include varying longitudinal acceleration tests, so a surge acceleration derivative \(X_{\dot u}\) had to be assumed (taken as 10% of ship mass in that work).   

If your simulator is “too slow” in straight-line acceleration, this is a prime suspect: even with correct propeller thrust, an overly large surge added-mass/acceleration term will slow the speed build-up.

### Suspicious mismatches that could explain an unrealistically slow simulation

#### Propeller rate scaling errors that directly create “too slow” behavior

The benchmark data provide an unusually concrete “tripwire”:

- At **1:45.714 scale**, a speed run at **1.18 m/s** used **620 rev/min (model propeller rpm)** to represent **15.5 kn** full scale.   

If a simulator instead applies (say) **~92 rpm** directly to a **1:45.7 model**, it under-rotates by √λ ≈ 6.76, and thrust scales roughly with n², implying **~45× lower thrust**—exactly the kind of error that produces severe sluggishness. This risk is amplified by the benchmark’s explicit distinctions between MSPP and SSPP. 

The same logic applies to a “64 m KVLCC2” surrogate: if Lpp is reduced from 320 m to 64 m (λ = 5), the propeller rate that is dynamically similar should be about **√5 ≈ 2.236× higher** than the full-scale-equivalent rate (if you are trying to preserve Froude/advance-ratio similarity). 

#### Dataset mixing: different physical models and propellers exist under the label “KVLCC2”

Across benchmark sources you can find multiple “KVLCC2” physical models and test conditions:

- 1:45.714 free-running model with constant rpm determined by speed run (Quadvlieg/Brouwer).   
- 1:110 NMRI-based data used for captive tests and self-propulsion/stopping references (Yasukawa/Yoshimura; NMRI-based stopping setup).   
- 1:58 appended model tests with propeller operating at a stated rps (Turnock et al.).   
- Shallow-water KRISO false-bottom tests at 1:39.44 (HPMM) and 1:83.74 (FRMTs), with results converted between scales.   

If your simulator combines (for example) a λ = 5 “64 m” geometry with λ = 45.7 propeller rates, or uses a propeller open-water curve developed for a different model propeller diameter/P/D, you can easily generate unphysical acceleration.

#### Debugging-oriented parameter table

The table below is designed to be used as a **unit/scale audit checklist** for an MMG-style simulator. Values are cited where directly stated; computed conversions are marked **(inferred)** and show the rule in the Notes.

| Parameter | Value | Units | Scale context | Source | Confidence | Notes for MMG simulator mapping |
|---|---:|---|---|---|---|---|
| Lpp (prototype reference) | 320.0 | m | “Full scale / prototype” |  | High | Use as your reference L for Fn, non-dim time \(tU/L\), etc. |
| Beam B (prototype) | 58.0 | m | Prototype |  | High | Be careful: some web tables show formatting errors; prefer published tables. |
| Draft T (prototype, loaded) | 20.8 | m | Prototype |  | High | Often the benchmark condition. |
| Block coefficient Cb | 0.810 | – | Prototype |  | High | Needed only if you use empirical resistance models. |
| Displacement volume (prototype) | 312,600 | m³ | Prototype |  | Medium | Density not specified here; do not assume tonnes without stating ρ. |
| Propeller diameter Dp (prototype) | 9.86 | m | Prototype |  | High | Some datasets use a model propeller that deviates from exact scaling. |
| Propeller blades | 4 | count | Prototype |  | High | MMG typically assumes single screw, 4-bladed propeller. |
| Propeller P/D (0.7R) | 0.721 | – | Prototype |  | High | Check if your propeller curve matches this geometry. |
| Propeller Ae/A0 | 0.431 | – | Prototype |  | High | Affects open-water curve selection if using prop geometry-based models. |
| Rudder type | mariner / horn | – | Prototype concept |  | Medium | Geometry definitions vary: “movable part” vs “total” area. |
| Rudder movable area AR (excluding horn) | 112.5 | m² | Prototype |  | Medium | Use only if your rudder model uses movable-area definition. |
| Design/service speed | 15.5 | kn | Prototype-equivalent |  | High | Most benchmark maneuvers start at this approach speed. |
| Model scale ratio (free-running benchmark) | 45.714 | – | Physical model |  | High | λ used for speed/time/rpm Froude conversions. |
| Model speed for 15.5 kn (given) | 1.18 | m/s | Model, λ=45.714 |  | High | Consistent with Froude scaling of 15.5 kn. |
| Propeller rate at that speed (given) | 620 | rev/min | **Model propeller rpm** (λ=45.714) |  | High | Treat as propeller *shaft* rpm, constant during FRMT maneuvers. |
| Propeller rate full-scale-equivalent (inferred) | 91.7 | rpm | Full-scale-equivalent |  | Medium | Inferred: \(n_{full}=n_{model}/\sqrt{45.714}\). Use for cross-checks only. |
| HMRI open-water “MSPP” propeller rate | 9.9 | rps | Model propeller rps |  | High | Convert to rpm if needed: 9.9 rps = 594 rpm. |
| HMRI open-water scale ratio | 46.426 | – | Model |  | High | Use √λ for rpm conversions. |
| Propeller KT/KQ table | J vs KT,KQ | – | Model + “Real” columns |  | Medium | File mixes “Model” and “Real” coefficient columns—label carefully. |
| MMG KT polynomial coefficients | (0.2931, −0.2753, −0.1385) | – | Model used in MMG sims |  | High | Applies to \(K_T(J_P)\) polynomial used in simulations. |
| Thrust deduction tP | 0.220 | – | MMG coefficient |  | High | Use in \(X_P=(1-t_P)T\). |
| Steering resistance deduction tR | 0.387 | – | MMG coefficient |  | High | Appears in rudder surge component \(X_R\). |
| Rudder force increase factor aH | 0.312 | – | MMG coefficient |  | High | Applies in \(Y_R=-(1+a_H)F_N\cos\delta\). |
| Additional lateral force lever x’H | −0.464 | – | MMG coefficient |  | High | Non-dimensional lever from midship; check your sign convention. |
| Straight-line wake fraction wP0 (model) | 0.40 | – | MMG assumption (model) |  | Medium | In that study: different wP0 used for model vs full-scale simulation. |
| Straight-line wake fraction wP0 (full scale) | 0.35 | – | MMG assumption (full) |  | Medium | If your sim uses one value for all scales, document it explicitly. |
| Turning circle benchmark (example) AD | 982 | m | Full-scale result |  | High | Use as trajectory-index validation at 15.5 kn, δ=35°. |
| Turning circle benchmark (example) TD | 1049 | m | Full-scale result |  | High | Sensitive to overall hydrodynamic balance; good regression target. |
| Steady turning speed Vstc | 5.6 | kn | Full-scale result |  | Medium | Useful to validate speed drop in turn under constant rpm. |
| MSPP vs SSPP (ratio) | 1.277 vs 1.0 | – | SIMMAN test spec |  | High | If you feed “SSPP rpm” into an “MSPP-calibrated” model, you will slow down. |
| Missing surge-accel calibration | Xu̇ assumed 0.1 m | – | Modeling limitation |  | Medium | If your accel is too slow, inspect your surge added-mass/accel term first. |
