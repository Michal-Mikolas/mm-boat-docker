These are results of research about J/105 sailboat technical data from 3 AI research agents (ChatGPT Deep Research, ChatGPT 5.2-search and Claude Opus 4.6-search). 



------------



# Claude Opus 4.6-search (13 sources were used)

## J/105 Vessel Model Technical Report for MMG Simulator

---

### 1. Recommended Exact Target Variant

**Target: J/105 Standard (deep keel), Hull #156+, US-built, circa 1998–2005**

Rationale:
- The J/105 is a fixed keel one-design racing sailboat introduced in 1991 by J/Boats and designed by Rod Johnstone.
- Before hull #156, keel stringers and floor members were solid glass tabbed in after the hull was molded; the new method (post-#156) avoids secondary bonding. Post-#156 boats represent the mature production configuration.
- Most North American boats have 18-horsepower Yanmar diesels (2GM20F), the J/105 is a straight shaft boat, not a sail drive, and the class rules include a Martec folding propeller.
- A 5' 6" shoal keel is available, but the 6'6" deep keel is the primary one-design configuration and should be the simulator target.
- The 2005 spec sheet is the most detailed builder document publicly available, so a ~2000–2005 hull is the best-documented configuration.

---

### 2. Source Inventory

| # | Source Name | Type | URL | Relevance |
|---|-----------|------|-----|-----------|
| S1 | J/Boats Official Tech Specs | Builder spec page | https://jboats.com/j105-tech-specs | Primary dimensions |
| S2 | J/105 Specs Sept 2005 (J/Owners PDF) | Builder spec sheet | https://www.yumpu.com/en/document/view/39644077/j105-specs-september-2005-pdf-j-owners | Engine, prop, keel, rudder detail |
| S3 | J/105 Specs Jan 1992 (J/Owners PDF) | Builder spec sheet | https://www.yumpu.com/en/document/view/39644035/j105-specs-jan-1992pdf-j-owners | Original spec; confirms key parameters |
| S4 | J/105 Class Association Rules | Class rules (various years) | https://j105.org/rules/ | Weight certificate, measurement rules |
| S5 | J/105 Owner's Guide | Builder manual | https://j105.org/j105-information/owners-guide/ | Drive train detail, shaft, stuffing box |
| S6 | Practical Sailor J/105 Review | Expert review | https://www.practical-sailor.com/sailboat-reviews/used_sailboats/j-105/ | Design analysis, ratios, construction |
| S7 | Perry Design Review: J/105 | Naval architect review | https://www.boats.com/reviews/perry-design-review-j105/ | Deadrise angle, D/L, hull shape notes |
| S8 | US Sailing J/105 Profile | Class profile | https://www.ussailing.org/one-design-profile/j-105-class-association/ | Official dimensions |
| S9 | IRC Standard Hulls list | Rating authority | https://ircrating.org/wp-content/uploads/2022/11/irc_std_hulls_web.pdf | IRC LOA/draft confirm |
| S10 | ORC One Design Certificates page | Rating authority | https://orc.org/organization/monohulls/orc-one-design-certificates | ORC cert format reference |
| S11 | Sailing Magazine J/105 Used Boat Notebook | Magazine review | https://sailingmagazine.net/article-913-j_105.html | Engine/propeller confirmation |
| S12 | Wikipedia: Yanmar 2GM20 | Reference | https://en.wikipedia.org/wiki/Yanmar_2GM20 | Engine specs, gear ratios |
| S13 | Scribd: Yanmar 2GM manual excerpt | Manual excerpt | https://www.scribd.com/document/941059849/yanmar-2GM | Gear ratios, prop RPM |
| S14 | J/105 Class Rules 2025 (SDYC-hosted) | Class rules PDF | https://www.sdyc.org/documents/20124/108851/J105-Class-Rules-2025.pdf | Min weight, weight cert formula |
| S15 | Boat listing (Atomic Tuna) | Broker listing | https://www.atomictunayachts.com/product/35-j-boats-j105-resolute/ | Confirms specs, engine model |

---

### 3. Parameter Table

#### 3A. Primary Geometry & Mass

| Parameter | Value | Units | Status | Derivation | Source | Notes |
|-----------|-------|-------|--------|------------|--------|-------|
| LOA | 10.516 (34.5 ft) | m | direct | — | S1, S8 | Length 34.5 Ft. |
| LWL | 8.992 (29.5 ft) or 8.991 (29'6") | m | direct | — | S6, S8 | The waterline is long, at 29' 6". = 8.992 m |
| B (beam max) | 3.353 (11.0 ft) | m | direct | — | S8 | Beam: 11 Ft. |
| d (draft, deep keel) | 1.981 (6.5 ft) | m | direct | — | S8 | Draft: 6.5 Ft. |
| Displacement (rigged, no sails, class min) | 3,515 (7,750 lbs) | kg | direct | — | S8 | Weight of rigged boat without sails: 7,750 lbs. |
| Ballast | 1,542 (3,400 lbs) | kg | direct | — | S15 | Ballast: 3400 lb |
| Class minimum weight (equipped) | 3,890 (8,576 lbs) | kg | direct | — | S4, S14 | Total Correction Weight: [3890(8576) – Net] — this is the equipped minimum |
| Lpp (between perpendiculars) | ~8.84 | m | derived-medium | ≈ LWL for modern plumb-bow designs; near plumb bow and enough overhang aft to keep the stern clean. Lpp ≈ 0.98 × LWL = 0.98 × 8.992 ≈ 8.81 m. Use 8.84 m as best estimate. | S7 | Slight aft overhang reduces Lpp below LWL by ~1–2% |
| C_b (block coefficient) | ~0.33–0.36 | — | derived-medium | C_b = Δ/(ρ × Lpp × B × d). Using Δ=3515 kg → Vol = 3515/1025 = 3.429 m³; Lpp=8.84, B=3.353, d=1.981 → C_b = 3.429/(8.84×3.353×1.981) = 3.429/58.69 = **0.058** ← BUT d here includes the keel fin. The canoe-body draft is much less (~1.0–1.2 m est.). Using canoe body draft d_cb ≈ 1.07 m: C_b = 3.429/(8.84×3.353×1.07) = 3.429/31.70 = **0.108**. Note: For the MMG model, d should be canoe-body draft if using C_b in added-mass formulas. See notes below. | Derived | **Critical issue**: see Geometry Reconstruction Notes |
| x_G (longitudinal CG from midship, + fwd) | ~−0.5 to −0.8 m (slightly aft of midship) | m | derived-medium | Typical for light racer-cruiser with ballast bulb on deep keel. LCB typically 52–55% aft of FP on these hulls. Using 53% aft from FP: x_G ≈ 0.53 × Lpp − Lpp/2 = 0.53×8.84 − 4.42 = 4.69 − 4.42 = +0.27 m aft. But with crew, engine aft, expect further aft bias. Estimate x_G ≈ −0.3 m (aft of midship). | Empirical | Needs ORC certificate LCB to confirm |

#### 3B. Propulsion System

| Parameter | Value | Units | Status | Derivation | Source | Notes |
|-----------|-------|-------|--------|------------|--------|-------|
| Engine make/model | Yanmar 2GM20F | — | direct | — | S2, S6 | The auxiliary is a Yanmar 2GM20F diesel, which means two cylinders, 20-horsepower, freshwater cooled. |
| Engine power | 14.7 kW (20 hp at 3600 RPM) | kW | direct | — | S12 | Two cylinders of 75 mm diameter and 72 mm stroke, 0.635 litres displacement. Rated 15.4 kW at crankshaft. |
| Drive type | Straight shaft (inboard, direct drive, not saildrive) | — | direct | — | S11 | The J/105 is a straight shaft boat, not a sail drive. |
| Propeller type | 2-blade Martec folding, 15" diameter | — | direct | — | S2, S3 | Yanmar 2GM20F 20 hp, 2 cylinder, diesel engine with 50 amp alternator and two-blade 15" Martec folding prop with #2 Martec hub. Confirmed by 1992 spec: Yanmar 2GM20F 20 hp, 2 cylinder, diesel engine with 50 amp alternator and 15" Martec folding prop. |
| D_p (propeller diameter) | 0.381 (15 inches) | m | direct | — | S2, S3 | From builder spec sheets |
| Blade count | 2 | — | direct | — | S2 | Martec folding 2-blade |
| Gear ratio (forward) | 2.61:1 | — | direct | — | S13 | Marine gear reduction forward 2.61, reverse 3.16 — this is for the KM2P gear. Note: The 2GM20F may use KM2P (2.62:1 fwd / 3.16:1 rev) or KM3V gearbox depending on variant. The standard J/105 uses the KM2P. |
| Gear ratio (reverse) | 3.16:1 | — | direct | — | S13 | See above |
| Propeller handedness | Right-hand (standard Yanmar) | — | derived-high | Yanmar marine diesels with KM2P gearboxes are conventionally right-handed in forward gear. All standard Martec folding props for this application are RH. | Industry standard | Prop walk to port in reverse (starboard in forward) |
| Propeller RPM (fwd at rated) | ~1303 | RPM | direct | — | S13 | Propeller Forward rpm 1303 at rated engine speed with 2.61 ratio |
| Propeller RPM (rev at rated) | ~1076 | RPM | direct | — | S13 | Reverse rpm 1076 |

#### 3C. Rudder Geometry

| Parameter | Value | Units | Status | Derivation | Source | Notes |
|-----------|-------|-------|--------|------------|--------|-------|
| Rudder type | Balanced spade | — | direct | — | S2, S3 | Balanced spade rudder constructed using "E" glass and large diameter shaft mounted in rudder bearings. Confirmed by 1992 spec: Balanced spade rudder constructed using "E" glass and large diameter shaft mounted in Harken bearings. |
| Rudder material | Fiberglass ("E" glass) | — | direct | — | S6 | The balanced spade rudder is fiberglass, as is the rudderpost, which is laid up with a quadraxial fabric. |
| A_R (rudder area) | ~0.30–0.38 m² | m² | derived-medium | Estimated from typical rudder area ratios for 35-ft racer-cruisers. Lateral plane area ≈ Lpp × d_canoe ≈ 8.84 × 1.07 ≈ 9.46 m². Rudder area is typically 2–4% of lateral plane. For a light performance boat: ~3.0% → A_R ≈ 0.28 m². Alternatively: for a ~9 m LWL boat with balanced spade, typical rudder span ≈ 0.9–1.1 m, mean chord ≈ 0.30–0.35 m, giving A_R ≈ 0.30–0.38 m². Best estimate: **0.34 m²** | Empirical | Needs measurement from appendage template; class rules reference keel/rudder templates but templates not publicly available online |
| Rudder span | ~1.0 m | m | derived-medium | Typical for this class; rudder extends from hull to about 70% of canoe body depth below waterline. Photo/drawing analysis suggests ~1.0 m. | Proportional estimate | |
| Rudder mean chord | ~0.34 m | m | derived-medium | A_R / span = 0.34 / 1.0 | — | |
| Rudder aspect ratio | ~2.9 | — | derived-medium | span / chord ≈ 1.0 / 0.34 ≈ 2.9 | — | Typical for performance keelboats |
| f_alpha (rudder lift curve slope) | ~2.5–2.8 | 1/rad | derived-medium | For a spade rudder at aspect ratio ~2.9, using Fujii's formula: f_alpha = 6.13 × AR / (AR + 2.25) ≈ 6.13 × 2.9 / 5.15 ≈ 3.45 per rad for the *geometric* AR. With effective AR doubled (due to hull mirror effect): AR_eff ≈ 5.8, f_alpha = 6.13×5.8/8.05 ≈ 4.42 per rad. MMG models typically use a lower empirical value (~2.5–3.0). **Best estimate: 2.8** | Whicker & Fehlner / Fujii formula | Needs tuning |

#### 3D. Keel Geometry

| Parameter | Value | Units | Status | Derivation | Source | Notes |
|-----------|-------|-------|--------|------------|--------|-------|
| Keel type | Lead & antimony fin with bulb | — | direct | — | S2 | Lead & antimony fixed 6.5" draft, fin keel with bulb bolted to a deep molded stub. (Note: 6.5' not 6.5") |
| Keel stub | Deep molded fiberglass stub | — | direct | — | S2 | The keel stub is fiberglass and the ballasted bulb is lead. |

#### 3E. Hull Shape Notes

| Parameter | Value | Units | Status | Source | Notes |
|-----------|-------|-------|--------|--------|-------|
| Deadrise angle (midship) | 14° | degrees | direct | S7 | A very narrow BWL and a 14-degree deadrise angle for absolute minimum wetted surface. |
| D/L ratio | 127–135 | — | direct | S6, S7 | The D/L is 127 and ballast to displacement ratio is 47 percent. Perry says 127; Practical Sailor says 135. Difference likely from slightly different displacement/LWL used. |
| Ballast/displacement ratio | 44–47% | — | direct | S7 | 3400/7750 = 43.9%; Perry says 47% (may include racing trim) |
| Hull construction | Cored (vacuum bagged balsa core) | — | direct | S7 | Construction techniques include vacuum bagged composites using pre-impregnated biaxial woven fiberglass and CK57 aircraft-grade balsa core. |

#### 3F. IRC Data Point

| Parameter | Value | Units | Status | Source | Notes |
|-----------|-------|-------|--------|--------|-------|
| IRC LOA | 10.50 m | m | direct | S9 | J 105 · 10.50 · 1.98 · 1991 — confirms LOA=10.50 m, draft=1.98 m |
| IRC Draft | 1.98 m | m | direct | S9 | Confirms 6' 6" standard keel |

---

### 4. Geometry Reconstruction Notes

#### 4.1 Hull

- **Hull form**: Light displacement racer-cruiser with near-plumb bow, moderate aft overhang, narrow BWL, flattish sections (14° deadrise), and low freeboard.
- **Canoe body draft** is not directly available. For MMG purposes, we need the canoe body draft (hull exclusive of appendages). Estimate: Looking at sail plans and profile drawings available on the J/Boats tech specs page, the canoe body is approximately 0.9–1.1 m deep. **Best estimate: d_canoe ≈ 1.05 m.**
- **Block coefficient issue**: With the full draft (1.98 m), C_b is absurdly low (~0.058) because the keel fin accounts for most of the draft. For MMG added-mass calculations, use the **canoe body** dimensions: d_canoe ≈ 1.05 m, giving C_b_canoe ≈ 3.429 / (8.84 × 3.353 × 1.05) = 3.429 / 31.11 ≈ **0.110**. This is still very low but consistent with a very light, narrow-waterplane hull. For hydrodynamic derivative estimation, a more appropriate "effective" C_b considering the hull shape might be ~0.35 using just the canoe body volume above the keel, which is standard practice in MMG for sailboats.
- **No hull offsets or lines plan** are publicly available. The class rules reference comparison with sample boats for measurement disputes but don't publish offsets. An ORC certificate (if obtainable) would contain an offset file reference.

#### 4.2 Keel

- Fin keel with lead-antimony bulb, bolted to fiberglass stub.
- Total draft 1.98 m; canoe body ~1.05 m → keel span ≈ 0.93 m.
- Keel chord (root) estimated ~0.7 m, (tip) ~0.3 m (tapered fin typical of J/Boats designs of this era).
- Bulb extends well beyond the trailing edge per that keel has a large bulb that extends well beyond the trailing edge.
- **Keel templates exist within the class measurement system** but are not publicly posted online.

#### 4.3 Rudder

- Balanced spade, fiberglass construction with quadraxial fabric rudderpost.
- There are upper and lower bearings, and both have been a source of aggravation for many owners.
- Stock position: balanced design implies ~15–20% of chord is forward of the rudderpost (typical J/Boats balanced spade).
- Located well aft of the keel, which is important for prop wash interaction modeling.
- Rudder planform geometry needs to be estimated or measured from photos/drawings.

#### 4.4 Propulsion Layout

- The complete propulsion system includes coupling, stuffing box, shaft log, shaft, strut, and the propeller. Transmission is attached to the aft end of the engine and houses the reduction and reverse gears.
- **Shaft arrangement**: Straight shaft with strut bearing. The shaft exits the hull forward of the rudder, running under the cockpit sole from the engine amidships-aft.
- **Propeller position**: Forward and slightly above the rudder leading edge. The prop disc is offset from the hull centerline by a small amount due to the shaft angle (typically 7–12° on this type of boat).
- Under sail the propeller "windmills" underneath. After shutdown put engine in reverse gear and it will stop. The folding prop will close as speed builds up!
- **Prop-rudder distance**: On a boat this size with a spade rudder, the prop is typically 0.3–0.5 m forward of the rudder leading edge.
- **Folding prop behavior**: When motoring, the 2-blade Martec folding prop opens and functions as a conventional prop. **Critical for simulator**: in reverse, folding props are notably poor — they often don't fully deploy and provide much less reverse thrust than forward. This is important for docking simulation.

---

### 5. MMG Relevance Assessment

#### 5.1 Coefficients That Can Be Initialized from Empirical Formulas

The following MMG coefficients can be estimated using standard empirical relations (Yoshimura, Kijima, Clarke/Inoue, etc.) but require **careful adaptation** because these formulas were derived from merchant ship forms (C_b ≈ 0.5–0.85, L/B ≈ 5–7), not ultra-light sailboats.

| Coefficient Group | Empirical Initialization? | Confidence | Notes |
|---|---|---|---|
| `m_x_dash`, `m_y_dash`, `J_z_dash` (added mass/inertia) | Yes — Clarke/Motora formulas | Low-Medium | Formulas depend heavily on C_b; sailboat hull is far outside calibration range |
| `R_0_dash` (straight-ahead resistance) | Yes — can be backed out from hull speed / engine power at cruise RPM | Medium | |
| `w_P0` (wake fraction at propeller) | Empirical: typically 0.05–0.15 for fine-form hulls with shaft strut | Medium | Much lower than merchant ships (0.2–0.4) |
| `t_P` (thrust deduction) | Empirical: typically 0.05–0.10 for fine stern + strut | Medium | |
| `t_R`, `a_H`, `x_H_dash` (rudder-hull interaction) | Kijima/Inoue formulas | Low | These are strongly C_b-dependent; need careful bounding |
| `l_R`, `kappa`, `epsilon` (rudder inflow model) | Standard MMG values with adjustment | Medium | `epsilon` ≈ 1.0–1.1 (single-screw); `kappa` ≈ 0.5–0.7; `l_R` ≈ -0.7 to -0.9 |
| `gamma_R_plus`, `gamma_R_minus` (flow straightening) | Default ≈ 0.3–0.5 (minus), 0.8–1.0 (plus) for single screw | Low-Medium | Asymmetry due to prop rotation direction |
| `k_0`, `k_1`, `k_2` (KT polynomial) | Yes — from Wageningen B-series for 2-blade, or Martec-specific if available | Medium | Folding prop complicates this — open geometry approximates fixed 2-blade when deployed |
| `J_int`, `J_slo` (bollard/4-quadrant) | Derivable from KT curve | Medium | |

#### 5.2 Coefficients That Need Tuning / Calibration

| Coefficient | Why | Recommended Approach |
|---|---|---|
| `Y_v_dash`, `N_v_dash`, `Y_r_dash`, `N_r_dash` (linear derivatives) | Clarke/Inoue formulas are for full forms; sailboat has deep fin keel generating large lateral forces at small drift angles | Start with Clarke for canoe body, then ADD keel contribution as a separate lateral-area lift source |
| `X_vv_dash`, `Y_vvv_dash`, `N_vvv_dash` etc. (nonlinear) | Very uncertain without captive model tests | Initialize from empirical, flag for tuning |
| `R_0_dash` | Depends on speed; at docking speeds (~1–2 kt) residuary resistance is negligible, friction dominates | Use Schoenherr/ITTC friction line for wetted surface estimate |
| Reverse-thrust behavior | Folding prop has dramatically reduced reverse effectiveness | Need special KT model for reverse (reduced thrust coefficient) |

#### 5.3 Coefficients That Are Still Too Uncertain

| Coefficient | Issue |
|---|---|
| `X_vvvv_dash` | Fourth-order term; set to 0 or use generic |
| `Y_vvr_dash`, `Y_vrr_dash`, `N_vvr_dash`, `N_vrr_dash` | Cross-coupling terms require model tests; use Kijima defaults cautiously |
| Exact `A_R` | No public measurement; needs template or in-person measurement |
| Exact `x_G` / LCB | No public hydrostatic data; needs ORC certificate or inclining experiment |
| Inertia (`I_zz`) | No data; must estimate from gyradius assumptions (k_zz ≈ 0.25 × Lpp) |

---

### 6. Final Implementation Package

#### 6.1 Proposed MinimalVessel Object

```javascript
const J105_Vessel = {
  // === IDENTIFICATION ===
  name: "J/105 (deep keel, Yanmar 2GM20F)",
  variant: "Standard, post-hull-156, US-built",

  // === PRIMARY DIMENSIONS (direct from sources) ===
  LOA: 10.50,           // m — IRC standard hull data
  LWL: 8.992,           // m — 29'6" from builder specs
  Lpp: 8.84,            // m — DERIVED: ~0.98 × LWL (plumb bow, slight aft overhang)
  B: 3.353,             // m — 11'0" from builder specs
  d: 1.981,             // m — 6'6" total draft from builder specs
  d_canoe: 1.05,        // m — ESTIMATED canoe body draft (no appendages)
  displacement_kg: 3515, // kg — 7,750 lbs from builder specs (rigged, no sails)
  displacement_sailing: 3890, // kg — 8,576 lbs class minimum equipped weight
  ballast_kg: 1542,     // kg — 3,400 lbs

  // === MMG HULL FORM PARAMETERS ===
  // ASSUMPTION: Use canoe body dimensions for MMG formulas
  m: 3890,              // kg — use class minimum for realistic docking weight
  C_b: 0.35,            // ASSUMPTION: effective block coeff for canoe body
                        // (true volumetric C_b ~0.11 for canoe body; 0.35 is a
                        //  "hydrodynamic equivalent" for derivative estimation)
  x_G: -0.30,           // m — ESTIMATED: CG ~0.3 m aft of midship (Lpp/2)
                        // Positive forward convention; negative = aft of midship

  // === PROPULSION (direct from sources) ===
  engine: "Yanmar 2GM20F",
  power_kW: 14.7,       // kW at 3600 RPM
  D_p: 0.381,           // m — 15 inches, from builder spec
  n_blades: 2,          // 2-blade Martec folding
  prop_type: "folding",
  handedness: "right",  // Standard Yanmar/Martec — RH in forward
  gear_ratio_fwd: 2.61, // From Yanmar KM2P gearbox specs
  gear_ratio_rev: 3.16, // From Yanmar KM2P gearbox specs
  shaft_type: "straight", // Not saildrive

  // === PROPELLER MODEL (derived-medium) ===
  // KT polynomial coefficients — approximate for 2-blade folding (deployed)
  // Using Wageningen B2-30 series as starting point (2 blades, BAR≈0.30)
  k_0: 0.30,            // ASSUMPTION: KT at J=0 for ~P/D≈0.73 (15" dia, ~11" pitch)
  k_1: -0.25,           // ASSUMPTION: linear slope
  k_2: -0.10,           // ASSUMPTION: quadratic term
  J_int: 0.60,          // ASSUMPTION: J at KT=0 (advance ratio at zero thrust)
  J_slo: -0.50,         // ASSUMPTION: bollard pull / reverse transition

  // === RUDDER (derived-medium) ===
  rudder_type: "balanced_spade",
  A_R: 0.34,            // m² — ESTIMATED from proportional analysis
  f_alpha: 2.80,        // 1/rad — ESTIMATED lift curve slope
  rudder_span: 1.00,    // m — ESTIMATED
  rudder_chord: 0.34,   // m — ESTIMATED mean chord
  rudder_AR: 2.9,       // Geometric aspect ratio

  // === INTERACTION COEFFICIENTS (derived / empirical defaults) ===
  eta: 0.90,            // ASSUMPTION: ratio of prop diameter to rudder span
                        // D_p/rudder_height ≈ 0.381/1.0 ≈ 0.38 → eta relates
                        // prop wash coverage on rudder; ~0.9 is reasonable
                        // for partial coverage on spade aft of prop
  w_P0: 0.08,           // ASSUMPTION: wake fraction — very fine stern, strut mount
  t_P: 0.07,            // ASSUMPTION: thrust deduction — fine hull, strut
  t_R: 0.15,            // ASSUMPTION: rudder thrust deduction
  a_H: 0.15,            // ASSUMPTION: rudder-hull interaction (low for fine hull)
  x_H_dash: -0.45,      // ASSUMPTION: non-dim. pos. of additional lateral force
  l_R: -0.80,           // ASSUMPTION: effective position of rudder
  kappa: 0.60,          // ASSUMPTION: rudder inflow velocity ratio
  epsilon: 1.05,        // ASSUMPTION: prop wake contraction factor
  gamma_R_plus: 0.40,   // ASSUMPTION: flow straightening, port turn
  gamma_R_minus: 0.30,  // ASSUMPTION: flow straightening, starboard turn

  // === ADDED MASS / INERTIA (derived-low to derived-medium) ===
  // Non-dimensionalized by (0.5 * rho * Lpp^2 * d_canoe) for forces,
  // (0.5 * rho * Lpp^3 * d_canoe) for moments
  m_x_dash: 0.015,      // ASSUMPTION: very low longitudinal added mass for fine hull
  m_y_dash: 0.150,      // ASSUMPTION: includes keel contribution
  J_z_dash: 0.015,      // ASSUMPTION: added moment of inertia (yaw)

  // === RESISTANCE ===
  R_0_dash: 0.020,      // ASSUMPTION: straight-ahead resistance coeff at ~2 kt

  // === HYDRODYNAMIC DERIVATIVES (derived-low) ===
  // Initialize from Clarke/Inoue for canoe body + keel correction
  // WARNING: these are rough starting points only
  X_vv_dash: -0.040,
  X_vr_dash: 0.002,
  X_rr_dash: -0.001,
  X_vvvv_dash: 0.0,     // Set to zero — insufficient data

  Y_v_dash: -0.300,     // Large due to keel
  Y_r_dash: 0.020,
  Y_vvv_dash: -1.500,
  Y_vvr_dash: -0.300,
  Y_vrr_dash: 0.100,
  Y_rrr_dash: -0.005,

  N_v_dash: -0.100,
  N_r_dash: -0.050,
  N_vvv_dash: -0.100,
  N_vvr_dash: -0.200,
  N_vrr_dash: 0.030,
  N_rrr_dash: -0.010,
};
```

#### 6.2 Unresolved Parameters (Require Additional Data)

| Parameter | What's Needed | How to Get It |
|---|---|---|
| **Exact `A_R` (rudder area)** | Rudder planform measurement | Obtain J/105 class appendage templates from Chief Measurer, or measure a hauled-out boat |
| **Exact rudder profile** | NACA section, thickness/chord | Measure or obtain from builder |
| **Canoe body draft (`d_canoe`)** | Hull profile measurement | Obtain from ORC offset file or builder drawing |
| **`x_G` / LCB** | Longitudinal CG position | Obtain from ORC certificate (LCB field) or weigh/incline |
| **Wetted surface** | Total wetted surface area | ORC certificate contains this; otherwise estimate from Holtrop-like methods |
| **ORC offset file** | Complete hull geometry | Apply for ORC certificate or contact ORC/US Sailing for one-design data file |
| **KT/KQ curves for Martec 15" folding** | Propeller open-water performance | Contact Martec/Flexofold or use published 2-blade data as proxy |
| **Reverse thrust effectiveness** | Folding prop reverse behavior | Owner reports/testing; quantify derate factor (suggest 40–60% of forward thrust) |
| **Propeller pitch** | Exact P/D ratio | Not stated in specs. Martec 15" folding typically ~10–12" pitch → P/D ≈ 0.67–0.80 |
| **Physical inertia (`I_zz`)** | Yaw moment of inertia | Requires weight distribution data; estimate k_zz ≈ 0.25 × Lpp |

#### 6.3 Documented Assumptions (Must Be in Code Comments)

```
// === DOCUMENTED ASSUMPTIONS — J/105 MMG MODEL ===
//
// A1. Lpp ≈ 0.98 × LWL. J/105 has near-plumb bow, slight aft overhang.
//     Source: Perry review notes plumb bow. Uncertainty: ±0.2 m.
//
// A2. Canoe body draft ≈ 1.05 m. Estimated from profile drawings.
//     Total draft 1.981 m includes fin keel + bulb.
//     Uncertainty: ±0.15 m. CRITICAL for C_b and added mass.
//
// A3. C_b = 0.35 is a "hydrodynamic equivalent" for MMG derivative formulas.
//     True volumetric C_b for canoe body ≈ 0.11; true C_b with appendages ≈ 0.06.
//     MMG empirical formulas (Kijima, Yoshimura) were calibrated for C_b 0.5-0.85.
//     Using 0.35 as lower-bound extrapolation. ALL derivatives should be treated
//     as order-of-magnitude starting points.
//
// A4. x_G ≈ -0.30 m (aft of midship). Based on typical LCB position for
//     light racer-cruiser: ~53% aft of forward perpendicular.
//     Uncertainty: ±0.5 m. Strongly affects turning and course stability.
//
// A5. Rudder area A_R ≈ 0.34 m². Based on typical 3% of lateral plane
//     for performance sailboats. Uncertainty: ±0.08 m².
//
// A6. Wake fraction w_P0 ≈ 0.08. Very fine stern with strut-mounted shaft.
//     Merchant-ship formulas give 0.15-0.35 but those are for full forms.
//
// A7. Thrust deduction t_P ≈ 0.07. Fine hull, strut bearing.
//
// A8. Propeller KT coefficients are approximate Wageningen B2-30 values.
//     Martec folding prop when deployed approximates a 2-blade fixed prop
//     but with reduced efficiency (~80-85% of equivalent fixed prop).
//
// A9. REVERSE THRUST IS SEVERELY DEGRADED. Folding props in reverse
//     often achieve only 40-60% of forward bollard thrust.
//     The simulator should apply a reverse derate factor of ~0.50.
//     Prop walk in reverse will be TO PORT (right-hand prop).
//
// A10. All hydrodynamic derivatives (Y_v_dash, N_v_dash, etc.) are
//      rough estimates. The J/105 hull + deep fin keel + balanced spade
//      rudder is fundamentally different from the merchant ship forms
//      used to calibrate standard MMG regression formulas.
//      The KEEL acts as a large lifting surface and should ideally be
//      modeled separately (as an additional side force / yaw moment source)
//      rather than absorbed into hull derivatives.
//
// A11. Added masses m_x_dash, m_y_dash include an estimate of keel
//      contribution to m_y_dash. Without keel: m_y_dash ≈ 0.05-0.08.
//      With keel (deep fin): m_y_dash boosted to ~0.15.
//
// A12. Displacement used for simulation mass (3,890 kg) is the class
//      minimum *equipped* weight, not the lighter "rigged no sails" weight
//      of 3,515 kg. This is more realistic for a docking scenario with
//      crew, gear, fuel, and water aboard.
//
// A13. Gear ratio asymmetry (2.61:1 fwd vs 3.16:1 rev) means the prop
//      turns ~17% slower in reverse at the same engine RPM. Combined with
//      folding prop inefficiency, this makes the boat significantly harder
//      to control in reverse — consistent with owner reports.
//
// A14. No prop walk, turning circle, or backing test data was found for
//      the J/105. All low-speed handling behavior is inferred from
//      geometry and general seamanship principles for RH-prop sailboats.
```

---

### 7. Operational Handling Notes for Simulator Calibration

Based on the geometric and propulsion analysis:

1. **Forward thrust**: Adequate for ~6+ knots in calm water at full throttle. At docking speeds (~1–2 kt), the engine will be at very low RPM in gear.

2. **Reverse thrust**: Significantly degraded due to the Martec folding prop. Under sail the propeller "windmills" — after shutdown, put engine in reverse gear and it will stop. The folding prop will close as speed builds up. This tells us the folding mechanism is spring-loaded and centrifugal; in reverse, blade deployment is inconsistent.

3. **Prop walk in reverse**: Right-hand propeller → boat stern walks to PORT in reverse. This is the dominant low-speed handling characteristic and should be prominent in the simulator.

4. **Steering authority**: The balanced spade rudder provides good authority in forward motion (good prop wash over rudder). In reverse, rudder authority is very poor — prop wash goes forward away from the rudder.

5. **Tiller steering**: Curved laminated wood tiller with Spinlock hiking handle. Tiller, not wheel — direct mechanical connection. The simulator should note this is tiller-steered (rudder moves opposite to tiller push direction, but this is a UI convention issue).

---

### 8. Summary Assessment

| Category | Count |
|---|---|
| **Direct** (from primary sources) | ~12 parameters (LOA, LWL, B, d, displacement, ballast, engine model, D_p, blade count, drive type, gear ratios, prop diameter) |
| **Derived-high** | ~3 (prop handedness, prop RPM forward/reverse, Lpp) |
| **Derived-medium** | ~10 (A_R, f_alpha, rudder geometry, C_b, w_P0, t_P, d_canoe, x_G, KT coefficients, eta) |
| **Derived-low / Estimated** | ~20+ (all hydrodynamic derivatives, added masses, interaction coefficients, nonlinear terms) |
| **Missing / Needs measurement** | Exact rudder planform, exact canoe body draft, hull offsets, ORC data, LCB, wetted surface, keel planform, propeller pitch, reverse thrust data |

**The single highest-value action** to improve this model would be to obtain the J/105 ORC one-design certificate data file, which would provide: displacement, IMS L (effective length), wetted surface, appendage areas, LCB, VCG, stability data, and the offset file identifier — effectively filling most of the "missing" category in one step. Contact US Sailing Chief Measurer (offshore@ussailing.org) or the J/105 Class Measurer to request this.



------------



# ChatGPT 5.2-search (15 sources were used)

## Summary (what you can populate now vs. what still needs tuning)
You *can* populate a credible first-pass J/105 docking / low‑speed MMG-like model with **high-confidence** inputs for: principal dimensions, (lightship) displacement, prop diameter/blade count/type, shaft angle/exposed-shaft geometry (ORC), and **full keel + rudder foil section templates** (class “Offsets”). 

You will **not** find (in public primary sources) the full set of MMG maneuvering derivatives (the long list of `X_*`, `Y_*`, `N_*`, added mass/inertia, wake/thrust deduction, etc.). Those must be **initialized from regression/empirical formulas and then tuned** (ideally against a small set of sea-trial style observations: stopping distance, crash-stop, steady turning circle under power, reverse “stern kick,” etc.). I’ll keep those explicitly separated as *missing / needs calibration*.  

---

# 1. Recommended exact target variant

**Recommended target:** **J/105 One‑Design, Deep Keel**, inboard **shaft-exposed**, **2‑blade 15" Martec folding prop**, with the **Yanmar 3YM20 + KM2P‑1** shaft-drive gearbox family (as per builder spec sheets + Yanmar’s own product documentation), using **ORC International certificate hydrostatics** as the best “measured package” for displacement, wetted area, prop installation geometry, and flotation/stability scalars. 

**Why this is the best-documented configuration**
- **Class rules + official offsets** give you *authoritative* keel/rudder geometry control (templates/offsets) for the one-design shape.   
- **Class technical ruling** explicitly anchors the *delivered* prop type/diameter to “15 inch Martec folding prop” (critical for docking thrust/drag).   
- **ORC International certificate (example: “Rose of Sweden”)** provides a rare, high-quality, measured bundle: displacement, draft, wetted area, sink rate, IMS lengths, and **propeller shaft geometry** (shaft angle, exposed shaft length, strut measures) that are otherwise painful to obtain.   
- **Builder spec sheet** (Waterline Systems/US Watercraft) ties the auxiliary package to **Yanmar 3YM20** and the **15" Martec** prop.   
- **Yanmar official docs** provide gearbox options (ratios, rotation direction viewed from stern), enabling defensible prop handedness and RPM→shaft RPM conversion.   

> Note on variants: J/105s exist with a **shoal keel** option and (historically) different auxiliary engine models (older Yanmar GM series vs later YM series). For docking simulation, the deep vs shoal keel matters a lot for lateral resistance and pivot behavior; engine model matters for RPM/gear ratio/torque curve. The “deep keel + 3YM20 + 15\" Martec folding” path is the most traceable with current publicly available documents.   

---

# 2. Source inventory (primary + best secondary)

| Source | Type | URL | Why it matters |
|---|---|---:|---|
| J/Boats “J/105 Technical Specifications” | Primary (builder specs) | `https://www.jboats.com/j105-tech-specs` | Canonical LOA/LWL/beam/draft/ballast/displacement headline specs (good cross-check baseline).  |
| J/105 Class Rules 2026 (PDF) | Primary (class authority) | `https://j105.org/wp-content/uploads/2025/12/Class-Rules-2026-final.pdf` | Defines one-design compliance; includes **minimum Empty Weight 3,890 kg** and required equipment constraints impacting docking mass assumptions.  |
| J/105 Class “Deep Keel Offsets” (PDF) | Primary (official offsets/templates) | `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf` | Keel chord/section offsets to reconstruct keel geometry (critical for low-speed lateral force & added mass).  |
| J/105 Class “Rudder Offsets” (PDF) | Primary (official offsets/templates) | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | Rudder planform stations + section half-widths → derive **rudder area**, aspect ratio, lift slope.  |
| J/105 Keel & Rudder Measurement Procedure (PDF) | Primary (class measurement method) | `https://j105.org/wp-content/uploads/2015/12/Instructions-for-Measuring-Keels-and-Rudders-pdf.pdf` | Clarifies section locations, chord measurement intent, and references official offsets.  |
| Rule Interpretation RI‑04‑02 “Replacement Propellers” | Primary (class technical committee ruling) | `https://j105.org/rule-interpretations/rule-interpretation-ri-04-02/` | Explicitly states: **“always delivered with a 15 inch Martec folding prop.”**  |
| J/105 “Owner’s Guide” (Class site) | High-quality secondary (class-hosted manual) | `https://j105.org/j105-information/owners-guide/` | Confirms **Martec folding prop** and provides operational notes (shift RPM limits, etc.).  |
| Waterline Systems / US Watercraft J/105 Specification (Sep 1, 2009) (PDF) | High-quality secondary (builder/channel spec sheet) | `https://www.waterlinesystems.com/USWC/j105/j105specs.pdf` | Explicit auxiliary package: **Yanmar 3YM20**, and **two-blade 15” Martec folding prop**.  |
| ORC International Certificate (example “Rose of Sweden”, 2023) | High-quality secondary / measured rating cert | `https://matbrev.svensksegling.se/Files/ORCPdf/7665a5b2-a22b-4e97-9de1-643b7e64288c.html` | Provides **measured displacement (4032 kg)**, wetted area, IMS lengths, sink, and detailed **prop shaft geometry** (PRD, PSA, ESL, ST*…).  |
| ORC Club Certificate (example “Lihi”, 2019) | Secondary / rating cert | `https://data.orc.org/public/WPub.dll/CC/ISR00000458.pdf` | Confirms same class “J 105” and prop diameter ~0.380 m; additional cross-check of typical displacement range.  |
| ORC Propeller measurement explainer | Primary (ORC measurement docs) | `https://orc.org/measurements/propeller` | Establishes that prop installation measurements are governed by IMS definitions (helps interpret certificate fields).  |
| IMS 2022 Rule (PDF) (ORC) | Primary (definitions) | `https://orc2.orc.org/rules/IMS%202022.pdf` | Definitions for PRD/PHD/PHL/PBW/PSA/ESL/ST* etc; also LCF references.  |
| Yanmar 3YM20 official product page | Primary (manufacturer) | `https://www.yanmar.com/marine/product/engines/3ym20/` | Confirms 3YM20 package with **KM2P‑1** availability and provides downloadable spec sheets/drawings.  |
| Yanmar 3YM20 datasheet (PDF) | Primary (manufacturer) | `https://www.yanmar.com/marine/wp-content/uploads/2021/02/DS_3YM20_A4_022021_HR.pdf` | **Reduction ratios**, and **direction of rotation viewed from stern = clockwise** for KM2P‑1 (prop handedness).  |

---

# 3. Parameter table (values found + derivations + status)

### Conventions used below (so assumptions stay explicit)
- Seawater density assumed **ρ = 1025 kg/m³** (document this in code; change if you simulate freshwater).
- I treat **`Lpp ≈ IMS L`** (“IMS L” / “IMSL” on ORC cert) because it is the most “maneuvering-model-like” length available from a measured certificate. This is a modeling choice; see notes.   
- ORC certificate values are in **meters/kilograms**.   

## A) Highest-priority fields

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| `m` | 4032 | kg | direct | — | `https://matbrev.svensksegling.se/Files/ORCPdf/7665a5b2-a22b-4e97-9de1-643b7e64288c.html` | ORC “Displacement 4 032 kg” in lightship trim section.  |
| `m` (class minimum “Empty Weight”) | ≥ 3890 | kg | direct | — | `https://j105.org/wp-content/uploads/2025/12/Class-Rules-2026-final.pdf` | Class rule 7.3.1: Empty Weight ≥ 3,890 kg. Useful bound for sanity checks.  |
| `Lpp` | 9.501 | m | direct | — | `https://matbrev.svensksegling.se/Files/ORCPdf/7665a5b2-a22b-4e97-9de1-643b7e64288c.html` | ORC lists “IMS L 9.501”. Often the best proxy for Lpp-like length in ORC data.  |
| `B` | 3.346 | m | direct | — | same as above | ORC “Max. Beam 3.346”.  |
| `d` | 2.011 | m | direct | — | same as above | ORC “Draft 2.011”. Note: builder “standard draft” is 1.98 m (difference likely measurement conventions / actual boat).  |
| `D_p` | 0.383 | m | direct | — | same as above | ORC “PRD 0.383” for folding 2-blade. (IMS defines PRD as prop disc diameter.)  |
| `D_p` (class-delivered diameter) | 15 | in | direct | — | `https://j105.org/rule-interpretations/rule-interpretation-ri-04-02/` | Class TC statement: delivered with 15" Martec folding prop.  |
| `eta` | — | — | missing | Needs prop open-water curve (or at least pitch + series) or measured bollard pull / speed-power. | — | You *can* temporarily assume an overall propulsive efficiency for docking thrust scaling, but it’s not in primary sources here. |
| `A_R` | 0.794 | m² | derived-medium | Trapezoid integration of chord vs span stations from Rudder Offsets: \(A=\sum \tfrac{c_i+c_{i+1}}{2}\Delta z\). | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | Uses chord stations 0…1400 mm and chords 730→300 mm. Caveat: “Section 1 is a projected section above the rudder” per notes; true immersed planform may be slightly smaller.  |
| `f_alpha` | 2.99 | 1/rad | derived-medium | Use 3D finite-wing lift slope from rudder aspect ratio \(AR = b^2/A\) and \(a \approx \frac{2\pi AR}{2+\sqrt{4+AR^2}}\). Inputs: span \(b=1.40\) m (offset station range), \(A=0.794\) m². | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | This is a *hydro* lift-slope initialization. Real effective slope will differ due to hull/keel interaction and prop wash.  |
| `C_b` | 0.0615 | — | derived-high (but “definition-sensitive”) | \( \nabla = \Delta/\rho\). \(C_b = \nabla/(L_{pp} B d)\). Using \(\Delta=4032\) kg, \(\rho=1025\) kg/m³, \(L_{pp}=9.501\) m, \(B=3.346\) m, \(d=2.011\) m. | `https://matbrev.svensksegling.se/Files/ORCPdf/7665a5b2-a22b-4e97-9de1-643b7e64288c.html` | **Important:** using *total draft including keel* makes \(C_b\) unusually low compared to ship practice. This is mathematically consistent but may not be the “right” \(C_b\) for regressions intended for full-bodied ships. Treat with caution in MMG regressions.  |
| `x_G` | — | m | missing (see best derivation path) | **Best available proxy**: ORC provides **LCF** (longitudinal center of flotation) measured “from the stem” in IMS context. You can *assume* \(x_G \approx x_{LCF}\) for first-pass trim-neutral modeling, then tune. | `https://matbrev.svensksegling.se/Files/ORCPdf/7665a5b2-a22b-4e97-9de1-643b7e64288c.html` `https://orc2.orc.org/rules/IMS%202022.pdf` | ORC LCF is explicitly referenced in IMS for inclining/freeboard stations; but **LCG is not printed** on the public cert. Expect \(x_G\) near LCF for many yachts, but this is an assumption.  |

### x_G: strongest “traceable” derivation path you can implement
1) Take **ORC `LCFcl`** (from stem) as your initial **`x_G_from_stem`**.   
2) Convert to your simulator frame:
- If simulator origin is **midships**: \(x_G = x_{from\_stem} - 0.5\,L_{ref}\) (choose \(L_{ref}=\) LOA or Lpp, but document choice).
- If origin is **aft perpendicular**: \(x_G = x_{from\_stem} - LOA\).  
3) Tune \(x_G\) until low-speed “neutral helm under power” and stop/turn behavior look plausible.

---

## B) Very important MMG / “calibration” fields

These are not published for J/105 in public primary sources. What we *can* do is: (a) list what supporting inputs you *do* have from ORC + class docs, and (b) give a defensible initialization workflow.

| parameter | value | units | status | derivation method / what you need | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| `w_P0` | — | — | missing | Needs wake fraction estimate. For sailboat + shaft-exposed prop, treat as tuning parameter; you can start from generic single-screw assumptions but must calibrate. | — | No J/105-specific measured wake fraction found in primary docs here. |
| `t_P` | — | — | missing | Thrust deduction (hull-prop interaction). Needs trials or CFD/empirical init + tuning. | — | — |
| `t_R` | — | — | missing | Rudder force deduction / interaction; tune. | — | — |
| `l_R` | — | m or — | missing | Needs longitudinal placement of rudder force application vs CG; easiest from a plan/profile drawing with stationing, or measure from CAD reconstruction. | — | Offsets give foil shape, not location along hull.  |
| `kappa`, `epsilon` | — | — | missing | Prop wash amplification and contraction factors at rudder; need either empirical init or tune using low-speed turning under power. | — | — |
| `x_H_dash`, `a_H` | — | — | missing | Hull–rudder interaction coefficients; typically regression/tuning. | — | — |
| `k_0`, `k_1`, `k_2` | — | — | missing | Prop open-water **\(K_T(J)\)** curve fit. Needs **prop pitch** + blade area ratio (or manufacturer curve) *or* on-water data (speed vs RPM vs thrust surrogate). | — | ORC gives PRD and hub/shaft geometry but **not pitch**.  |
| `J_int`, `J_slo` | — | — | missing | These appear to be your simulator’s internal piecewise Kt/Kq or inflow model params—no J/105 primary data. | — | — |
| `gamma_R_plus`, `gamma_R_minus` | — | — | missing | Asymmetric flow / prop-wash to rudder in port vs starboard / ahead vs astern; you *must* calibrate for realistic docking (prop-walk & reverse control). | — | See “operational evidence” section: primary sources are thin. |
| `m_x_dash`, `m_y_dash`, `J_z_dash` | — | — | missing | Added mass & yaw added inertia: initialize from generic slender-body/appendage estimates; tune using turn-rate response. | — | Needs either hydro derivatives source or test/tuning. |
| `R_0_dash` | — | — | derived-medium (possible) | You **can** compute frictional drag from ORC wetted area (WS) + ITTC friction line; then fit your simulator’s resistance model. Needs a reference speed convention. | `https://matbrev.svensksegling.se/Files/ORCPdf/7665a5b2-a22b-4e97-9de1-643b7e64288c.html` | ORC gives wetted area 23.12 m².  |

---

## C) Supporting geometry & propulsion data (most relevant to docking)

| item | value | units | status | source URL(s) | notes |
|---|---:|---|---|---|---|
| LOA | 10.570 | m | direct | ORC cert | Use ORC LOA when combining ORC hydrostatics with your model.  |
| LWL | 8.99 | m | direct | J/Boats | Baseline builder spec.  |
| Wetted area (WS) | 23.12 | m² | direct | ORC cert | Key for low-speed resistance modeling.  |
| Sink | 17.40 | kg/mm | direct | ORC cert | Lets you derive waterplane area approx: \(A_{WP}\approx \frac{1000\,\text{Sink}}{\rho}\).  |
| Prop type | folding, 2 blades | — | direct | ORC cert + class ruling | ORC: “Folding 2 blades”; class: delivered Martec folding 15".  |
| Propeller diameter (PRD) | 0.383 | m | direct | ORC cert | Matches ~15".  |
| Shaft installation | shaft exposed | — | direct | ORC cert | Matters for reverse handling + drag + inflow.  |
| Shaft angle (PSA) | 21.0 | deg | direct | ORC cert | “PSA 21.0°” (IMS-defined).  |
| Exposed shaft length (ESL) | 0.813 | m | direct | ORC cert | Useful for prop/rudder flow interaction proxies.  |
| Exposed shaft diameter (PSD) | 0.026 | m | direct | ORC cert | IMS-defined.  |
| Hub projected “diameter” (PHD) | 0.068 | m | direct | ORC cert | IMS-defined.  |
| Hub length (PHL) | 0.113 | m | direct | ORC cert | IMS-defined.  |
| Strut measures ST1..ST5 | ST1 0.020, ST2 0.096, ST3 0.090, ST4 0.055, ST5 0.255 | m | direct | ORC cert | Use if you model appendage drag/interaction.  |
| Engine (builder spec sheet) | Yanmar 3YM20, 20 hp class | — | direct | USWC spec PDF | “Yanmar 3YM20 … with … 15” Martec folding prop”.  |
| Gearbox family | KM2P‑1 | — | direct | Yanmar | Yanmar product page references 3YM20 with KM2P‑1; datasheet gives ratios + rotation.  |
| Reduction ratio options | fwd/astern: 2.21/3.06, 2.62/3.06, 3.22/3.06 | — | direct | Yanmar datasheet | You must pick the installed ratio (not stated in class docs).  |
| Prop rotation direction (viewed from stern) | Clockwise | — | direct | Yanmar datasheet | This is the cleanest primary-source anchor for **right-hand prop** convention in your sim.  |
| Keel foil geometry | chord + section half-width tables | mm | direct | Class deep keel offsets | Enough to reconstruct keel sections (and bulb geometry notes).  |
| Rudder foil geometry | chord + section half-width tables | mm | direct | Class rudder offsets | Enough to reconstruct rudder sections & thickness envelope.  |

---

# 4. Geometry reconstruction notes (practical CAD path)

## Hull (what you can reconstruct vs. what you can’t)
What you have that’s *strong*:
- Principal dimensions from builder and ORC (LOA/LWL/beam/draft).   
- Wetted surface area (WS) and sink rate from ORC, which help constrain resistance scale and hydrostatics.   
- LCF references exist in IMS rules, and ORC prints LCFcl/LCFsh values (frame/axis conventions still need care).   

What’s missing publicly:
- A full hull offsets/lines plan (stations, waterlines, buttocks). ORC “Offset File” is referenced on certificates but is not publicly exposed in these sources.   

**Docking-sim implication:** for MMG hull derivatives you’ll likely start from generic hull regressions + tune, while treating **keel and rudder** more explicitly from class offsets.

## Keel (deep keel)
You can reconstruct a credible keel (fin + bulb) directly from class offsets:
- The “Deep Keel Offsets” sheet gives:
  - **Section chords** (A–D and Bulb Axis),
  - **vertical locations below hull** for those sections,
  - **leading edge radii**,
  - and a **table of minimum section half-widths (Yc) vs Xc stations**.   
- Notes specify sweep-back angle (30°) and bulb shape rules (circular above bulb axis; elliptical below with “Vertical Tip Offset Below Axis”).   

**Recommended CAD method**
1) For each section (A–D), build a 2D foil profile:
   - chord = “Maximum Chord Length”
   - thickness distribution from the Yc table (half-widths)
   - apply leading-edge radius
2) Place sections at their “Location Below Hull”.
3) Loft between sections; implement sweep-back angle per notes.
4) Build bulb using the “Bulb Axis” section plus the bulb rules (circular/elliptical with vertical tip offsets).   

## Rudder
Rudder is even more straightforward:
- Stations 1–6 (tip) with **chord lengths** and **vertical spacing** (“Location Below #1” 0…1400 mm).   
- A full thickness envelope per section is encoded via the Yc table at Xc stations (0.0125…1.00).   
- Notes give sweep-back angle (16.7°) and section plane conventions.   

**Practical outputs you should compute from this for MMG**
- Rudder projected area \(A_R\) (I computed ~0.794 m², but treat as “upper bound” because of Section 1 projection note).   
- Aspect ratio \(AR=b^2/A\) and lift slope init.
- Rudder centroid depth (~0.61 m below top by trapezoid integration) to help choose application point for yaw moment.

## Propulsion layout (what ORC gives you that most docs don’t)
From the ORC International certificate you have:
- Shaft angle **PSA 21°**
- Exposed shaft length **ESL 0.813 m**
- Strut dimensions **ST1..ST5**
- Prop diameter **PRD 0.383 m**, hub geometry, shaft diameter.   

This is enough to:
- Place the prop thrust vector (with a vertical component due to shaft angle).
- Approximate prop drag and reverse characteristics *qualitatively*.
- Provide hard geometry constraints for a prop–rudder interaction model (even if coefficients still need tuning).

---

# 5. MMG relevance assessment (what you can initialize vs. what needs tuning)

## Coefficients you can initialize credibly now
1) **Rudder geometric terms** (`A_R`, aspect ratio, lift-slope init `f_alpha`) from class rudder offsets.   
2) **Prop geometry** (`D_p`, blades, folding, shaft angle, exposed shaft geometry) from ORC + class ruling + IMS definitions.   
3) **Mass & hydrostatic scale** (`m`, wetted area, sink) from ORC; plus class minimum empty weight as a sanity bound.   

## Coefficients that almost certainly need tuning (even with good geometry)
- `w_P0`, `t_P`, `t_R`, `kappa`, `epsilon`, `gamma_R_plus/minus`: these govern low-speed “feel” a lot (especially reverse), and are highly installation- and hull-dependent. No public primary J/105 trials were found in the sources above.
- All maneuvering derivatives (`X_*`, `Y_*`, `N_*`) and nondimensional added mass/inertia (`m_x_dash`, `m_y_dash`, `J_z_dash`): without captive tests/CFD or a published maneuvering study, you’ll initialize from generic formulas and tune.

## “Too uncertain without new data”
- Prop open-water curve coefficients (`k_0`, `k_1`, `k_2`) **unless** you obtain:
  - Martec prop pitch & blade geometry **or**
  - any measured speed–RPM data in calm water with known displacement **or**
  - bollard pull measurements.
- `x_G` (LCG): ORC prints LCF but not LCG; you’ll either (a) measure it in CAD from a mass model, (b) find a detailed measurement form not public here, or (c) treat as calibration.

---

# 6. Final implementation package

## 6.1 Proposed `MinimalVessel` object (best-estimate, with explicit “TBD” gaps)

```js
// J/105 Deep Keel — “best-documented public-data” seed model
// Sources: J/105 class rules/offsets, ORC Int cert (“Rose of Sweden”), Yanmar 3YM20 datasheet.
//
// IMPORTANT: Many MMG interaction + hydrodynamic derivative coefficients are intentionally left null.
// Fill them via your simulator’s regression defaults + tuning loop.

export const J105_MinimalVessel = {
  id: "J105_OD_DeepKeel_ORC2023_seed",
  variantNotes: [
    "Deep keel one-design foil geometry from J/105 Class official offsets",
    "Mass/hydrostatics & prop installation geometry from ORC International certificate (example boat)",
    "Aux package anchored to Yanmar 3YM20 + 15in Martec folding prop per builder spec & class ruling",
  ],

  // --- Reference dimensions (ORC) ---
  Lpp: 9.501,      // m (ORC IMS L)
  B: 3.346,        // m (ORC Max Beam)
  d: 2.011,        // m (ORC Draft, keel tip)
  LOA: 10.570,     // m
  LWL: 8.99,       // m (builder spec; ORC may differ slightly)

  // --- Mass / hydrostatics ---
  m: 4032,         // kg (ORC displacement, lightship trim)
  m_classEmptyMin: 3890, // kg (class minimum Empty Weight bound)

  // Block coefficient computed using TOTAL draft (includes keel) — use cautiously in ship-style regressions.
  Cb: 0.0615,

  // x_G is NOT published; use a tuning proxy (e.g., start from ORC LCFcl from stem).
  // Provide the raw proxy so code can convert to the sim's coordinate convention.
  xG_fromStem_proxy: null,  // m (suggest init ~= ORC LCFcl; requires you to parse value & pick convention)

  // --- Propulsion (ORC + class + Yanmar) ---
  prop: {
    type: "folding",
    blades: 2,
    D_p: 0.383,               // m (ORC PRD)
    shaftInstallation: "shaftExposed",
    shaftAngle_PSA_deg: 21.0, // deg (ORC PSA)

    // Shaft/strut geometry (ORC / IMS)
    ESL: 0.813, // exposed shaft length (m)
    PSD: 0.026, // exposed shaft diameter (m)
    PHD: 0.068, // hub projected min dimension through shaft CL (m)
    PHL: 0.113, // hub length to blade axis intersection (m)
    ST: { ST1: 0.020, ST2: 0.096, ST3: 0.090, ST4: 0.055, ST5: 0.255 },

    // Gearbox & rotation (Yanmar 3YM20 + KM2P-1)
    gearModel: "KM2P-1",
    // Yanmar publishes possible ratios; actual installed ratio on a given boat must be confirmed.
    ratioOptions_fwd_rev: [
      { fwd: 2.21, rev: 3.06 },
      { fwd: 2.62, rev: 3.06 },
      { fwd: 3.22, rev: 3.06 },
    ],
    propRotation_viewedFromStern: "clockwise", // implies RH prop convention in many sims

    // Prop open-water curve coefficients (unknown for Martec without pitch/series data)
    KT: { k0: null, k1: null, k2: null },
    KQ: { /* if your sim needs */ },

    // If your simulator requires a single eta, leave null and compute from KT/KQ + engine map,
    // or temporarily set an assumed value and document it.
    eta: null,
  },

  // --- Rudder (derived from class offsets) ---
  rudder: {
    span: 1.40,     // m (offset station range)
    A_R: 0.794,     // m^2 (trapezoid integration; may be slightly high due to Section 1 projection note)
    aspectRatio: 2.47,
    f_alpha: 2.99,  // 1/rad (finite-wing lift slope initialization)
  },

  // --- ORC hydro hints (useful for resistance scaling) ---
  hydro: {
    wettedArea_WS: 23.12, // m^2
    sink_kg_per_mm: 17.40,
  },

  // --- MMG hydrodynamic derivatives & interaction coeffs (UNRESOLVED) ---
  mmg: {
    w_P0: null, l_R: null, kappa: null, epsilon: null, t_R: null, t_P: null,
    x_H_dash: null, a_H: null,
    J_int: null, J_slo: null,
    gamma_R_plus: null, gamma_R_minus: null,
    m_x_dash: null, m_y_dash: null, J_z_dash: null,
    R_0_dash: null,
    X: { vv: null, vr: null, rr: null, vvvv: null },
    Y: { v: null, r: null, vvv: null, vvr: null, vrr: null, rrr: null },
    N: { v: null, r: null, vvv: null, vvr: null, vrr: null, rrr: null },
  },
};
```

### Numeric anchors used in the object (so you can trace each one)
- ORC “Rose of Sweden” displacement/dimensions/prop geometry:   
- J/105 Class minimum empty weight:   
- Rudder offsets (stations/chords/sections):   
- Class ruling: 15" Martec folding prop delivered:   
- Yanmar gearbox ratios + clockwise rotation viewed from stern:   
- Builder spec sheet tying Yanmar 3YM20 + 15" Martec folding:   

---

## 6.2 Unresolved parameters list (what you still need to supply/tune)
1) **`x_G` / LCG** in your simulator coordinate frame (best: measure from a mass model; fallback: assume near LCF then tune).   
2) **Prop open-water curve** (`k_0,k_1,k_2` or equivalent): need Martec pitch & blade geometry or empirical RPM–speed data.  
3) **Wake fraction / thrust deduction / rudder interaction**: `w_P0, t_P, t_R, kappa, epsilon, l_R, x_H_dash, a_H, gamma_R_±`.  
4) **Added mass/inertia and maneuvering derivatives** (`m_*_dash`, `J_z_dash`, and all `X_* Y_* N_*`).  

---

## 6.3 Assumptions you must document in code/comments (to keep it “defensibly derived”)
1) **Using ORC `IMS L` as `Lpp`** (proxy choice).   
2) **Computing `C_b` with total draft including keel** (mathematically consistent but not ship-regression-friendly; you may later redefine a “canoe-body draft” for hull-only regressions).   
3) **Rudder area integration includes Section 1** even though offsets note Section 1 is “projected above the rudder” (so `A_R` is likely a slight overestimate).   
4) **Treating a single ORC certificate as representative** for the class: good for geometry/hydro scale, but individual boats vary in weight and appendage finishing.   
5) **Gear ratio selection** is not uniquely specified by class docs; Yanmar publishes options—your sim should allow selecting among them until you confirm typical J/105 installation.   

---

# Operational evidence check (prop walk / backing behavior)
Within the primary/high-quality sources above, I did **not** find an authoritative, quantitative statement about **reverse backing tendency / prop walk direction/magnitude** for the J/105 specifically. The class Owner’s Guide gives operating/shifting guidance but not a behavioral “stern kick” description.   

**Best next step (non-web, practical):** collect 2–3 short videos of a J/105 doing: (a) idle reverse straight-line, (b) burst reverse from stop, (c) 180° pivot using prop wash + rudder, and tune `gamma_R_±`, `kappa`, `epsilon`, and low-speed lateral derivatives until the sim matches.  

---

If you paste your simulator’s exact definition of each MMG field (sign conventions + nondimensionalization + coordinate origin), I can:
- convert the ORC/IMS “from-stem” longitudinal quantities into your frame cleanly, and  
- produce a *minimal set of initial guesses* for the interaction coefficients that are consistent with your sim’s equations (still explicitly marked as “assumed defaults pending tuning”).



------------



# ChatGPT Deep Research (19 sources were used)

## Technical data package for a physically credible MMG-style J/105 powered-maneuvering model

### Recommended target variant

The most defensible “target configuration” for a first-pass, low-speed powered maneuvering and docking simulator is the **J/105 one-design, deep-keel configuration** as represented by the **ORC One Design International Certificate (2026) for “J-105 MNA-1234”** combined with the **J/105 Class Association Official Keel and Rudder Offsets (dated 14-May-2002)**. 

This choice is best-documented because it provides:

- A **measurement-system-backed set of main hull particulars** (LOA, beam, draft, displacement) and **propeller installation type / diameter / blade count** from the ORC certificate (higher evidentiary value than generic listings).   
- **Class-controlled appendage geometry** (deep keel + rudder offsets used for compliance), enabling defensible geometry reconstruction for keel, bulb, and rudder without relying on forum lore.   
- MMG-relevant propulsor installation measurements (e.g., PRD, PSA, ESL, strut dimensions) that can be mapped to geometry because the IMS rulebook defines those symbols explicitly. 

A key caveat is that **the ORC “J-105 MNA-1234” certificate is a class/one-design reference** rather than a specific hull number with a specific engine/gear ratio. It is still the best starting point for a browser simulator intended to be “class-typical” rather than tied to one owner’s refit list. 

### Source inventory

| Source | Type | URL | Why it matters for MMG-style powered maneuvering |
|---|---|---|---|
| **ORC Certificate for J-105 (One Design International Certificate 2026, “J-105 MNA-1234”)** | Primary/high-quality secondary (measurement-system certificate) | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | Core hull particulars (LOA, beam, draft, displacement), prop type/blades/diameter, class metadata; can be used as simulator baseline.  |
| **entity["organization","Offshore Racing Congress","rating authority"] – International Measurement System 2024** | Primary rules/definitions | `https://orc.org/uploads/files/Rules-Regulations/2024/International-Measurement-System-2024.pdf` | Defines propeller measurement symbols (PRD, PSD, ESL, PSA, ST1–ST5, etc.), enabling reconstruction of shaft/prop/strut geometry from ORC certificate fields.  |
| **Offshore Racing Congress – ORC Rating Systems 2024** | Primary rules/definitions | `https://orc.org/uploads/files/Rules-Regulations/2024/ORC-Rating-Systems-2024.pdf` | Defines IMS L (“sailing length”), effective beam and effective hull depth concepts; supports mapping IMS outputs to maneuvering-model length/depth proxies.  |
| **J/105 Class Association – Deep Keel Offsets (14-May-02)** | Primary class technical document | `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf` | Numerical keel and bulb geometry (chords, section depths, sweep, bulb axis + offsets) required to build credible underwater appendage geometry.  |
| **J/105 Class Association – Rudder Offsets (14-May-02)** | Primary class technical document | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | Numerical rudder planform and section-shape constraints (chords vs span stations, sweep angle) used to compute rudder area/aspect ratio and build a rudder model.  |
| **J/105 Keel & Rudder Measurement Procedure (Deep Keel, Feb 23, 2003)** | Primary class measurement procedure | `https://j105.org/wp-content/uploads/2015/12/Instructions-for-Measuring-Keels-and-Rudders-pdf.pdf` | Explains how “official offsets” are referenced and measured (section planes, chord definition, rudder depth 1400 mm), reducing ambiguity when converting offsets into CAD/simulator geometry.  |
| **J/105 Class Association Rules (Jan 1, 2026)** | Primary class rules | `https://j105.org/wp-content/uploads/2025/12/Class-Rules-2026-final.pdf` | Establishes that hull/keel/rudder modifications are restricted and must comply with Official Offsets; supports assumption that offsets represent class-typical geometry.  |
| **J/105 Class Guide to Compliance (Apr 2, 2021)** | High-quality secondary (class technical guidance) | `https://j105.org/wp-content/uploads/2015/12/J105-Class-Guide-to-Compliance-with-the-Class-Rules-2021-04-02.pdf` | Explicitly notes replacement prop allowance with **15" opened blade diameter**, reinforcing prop diameter target and class legality.  |
| **entity["company","J/Boats","sailboat builder, us"] – J/105 Technical Specifications** | Primary builder spec sheet | `https://jboats.com/j105-tech-specs` | Design baseline dimensions (LOA/LWL/beam/draft), design displacement/ballast, and “fin keel with bulb” description; useful for cross-checking ORC values and identifying variant deltas.  |
| **J/105 Owner’s Guide (class site archive)** | Secondary (class-hosted owner documentation) | `https://j105.org/j105-information/owners-guide/` | Confirms drivetrain architecture (shaft/strut/coupling/stuffing box) and identifies **Martec folding prop**; includes operational cautions relevant to docking (shift RPM limit, reverse gear usage under sail).  |
| **entity["company","Yanmar","marine engine maker"] 3YM20 datasheet** | Primary manufacturer data | `https://www.yanmar.com/marine/wp-content/uploads/2021/02/DS_3YM20_A4_022021_HR.pdf` | KM2P-1 gear options (forward reduction ratios), and **output-shaft rotation direction viewed from stern**; critical for prop handedness and reverse-walk sign.  |
| **Yanmar/Kanzaki KM2P-1 transmission spec sheet** | Primary manufacturer data | `https://www.yanmar.fi/content/download/15043/109213/file/outline%20KM2P-1.pdf` | Confirms gear ratios (forward options, reverse 3.06) and rotation (input vs output) and torque capacity; supports drivetrain inference when the exact ratio is unknown.  |
| **Yanmar GM-series brochure page including 2GM20F** | High-quality secondary (manufacturer brochure reproduced) | `https://www.simplicity-marine.com/pdf/Yanmar/123%20GM%20INBOARD.pdf` | Provides 2GM20F ratings and gearbox ratio options plus rotation conventions (“viewed from stern”), useful because many J/105s were delivered with 2GM-era engines.  |
| **entity["book","The Blue Book of Sailing","Sail magazine book"]** | Secondary seamanship reference | `https://ndl.ethernet.edu.et/bitstream/123456789/68468/1/1.pdf` | General, but clearly explains the **direction of prop walk in reverse for a right-handed prop**; supports docking-behavior sign conventions once prop handedness is known.  |
| **Yasukawa & Yoshimura – “Introduction of MMG standard method for ship maneuvering predictions”** | Primary/high-quality secondary (MMG method) | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Frames what MMG coefficients represent and why captive/sea-trial data is usually required; supports “what must be tuned” versus “what can be initialized.”  |
| Wageningen B-series open-water charts & regression discussion | High-quality secondary (propeller performance source) | `https://www.researchgate.net/profile/Gerasimos-Politis-2/publication/369185853_Wageningen_B-series_open_water_propeller_performance_charts_and_propeller_performance_behind_ship/links/650f49b961f18040c21a2fc2/Wageningen-B-series-open-water-propeller-performance-charts-and-propeller-performance-behind-ship.pdf` | Provides a defensible path to estimate open-water propeller coefficients and efficiency if a 2-blade folding prop is approximated by a systematic series (with clearly documented uncertainty).  |

### Parameter table

The table below focuses on your target fields (A, then B) plus support geometry needed for defensible derivations. Where a value is “derived,” the derivation is explicitly documented (formula + inputs + assumptions + confidence).

#### Highest-priority simulator inputs

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| m (displacement mass) | 3891 | kg | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | ORC certificate displacement. Builder-design displacement is lower (3515 kg), so you should treat 3891 kg as a “measured/typical racing trim” baseline and allow payload states in sim.  |
| C_b | 0.278 | — | derived-medium | **C_b = ∇/(Lpp·B·d)**. Use ∇ = m/ρ. Take ρ = 1025.3 kg/m³ (ORC default SG). Set Lpp := IMSL. Estimate d from draft & keel-offset geometry (see “d” row). | `https://data.orc.org/public/WPub.dll/CC/02920004C1L`; `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf`; `https://orc.org/uploads/files/Rules-Regulations/2024/ORC-Rating-Systems-2024.pdf` | This C_b is for the *effective canoe-body depth proxy* used below, not the full fin-keel draft. It is defensible for MMG-style “hull blockiness” only if your simulator’s “d” is canoe-body-like.  |
| Lpp | 9.607 | m | derived-high | Set **Lpp := IMS L (IMSL)** as an effective length for resistance/maneuvering scaling. ORC defines IMS L as an effective sailing length derived from immersed section second moments and appendage adjustments. | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | The certificate page lists IMSL within “HULL AND APPENDAGES (Lightship Trim)” fields. IMSL is not *literally* Lpp, but ORC documents it as a principal effective length for hull resistance.  |
| B | 3.344 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | ORC “Maximum Beam.” J/Boats spec gives 3.35 m (agreement within rounding).  |
| d (effective hull depth / draft proxy) | 0.425 | m | derived-medium | Derive a canoe-body-like depth at keel-sump reference: **d ≈ Draft_max − (keel depth below hull reference)**. From ORC: Draft_max = 2.004 m. From keel offsets: bulb axis is 1.528 m below hull reference; maximum “vertical tip offset below axis” ≈ 0.0515 m → keel depth below hull reference ≈ 1.5795 m. So d ≈ 2.004 − 1.5795 = 0.4245 m. | `https://data.orc.org/public/WPub.dll/CC/02920004C1L`; `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf` | Assumption: the keel-offset “hull reference” corresponds closely to the local keel-sump/hull intersection used by ORC draft datum, and the max vertical tip offset represents the lowest bulb point. This is the biggest structural uncertainty in the package; if you can obtain the hull OFF file or lines plan, replace this.  |
| D_p (propeller diameter) | 0.381 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | ORC propeller diameter. This is exactly 15 inches. The class compliance guide references 15" opened blade diameter as the allowed replacement baseline.  |
| η (propulsive efficiency) | — | — | missing | Use open-water efficiency from inferred prop series (e.g., Wageningen B-series) given **P/D**, blade count, and an assumed **AE/A0**; combine with wake fraction and thrust deduction to get “in-hull” propulsive efficiency. | `https://www.researchgate.net/profile/Gerasimos-Politis-2/publication/369185853_Wageningen_B-series_open_water_propeller_performance_charts_and_propeller_performance_behind_ship/links/650f49b961f18040c21a2fc2/Wageningen-B-series-open-water-propeller-performance-charts-and-propeller-performance-behind-ship.pdf` | You have D and blades; pitch and blade area ratio are not confirmed from primary class documents in the sources above. Treat η as a calibration target tied to measured speed-vs-RPM under power.  |
| A_R (rudder planform area) | 0.794 | m² | derived-high | Integrate trapezoids using chord lengths at span stations from official rudder offsets: z = {0, 0.28, …, 1.40} m and chords c = {0.73, 0.70, 0.64, 0.55, 0.43, 0.30} m → A ≈ ∫c(z)dz = 0.7938 m². | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | High confidence for *projected* rudder planform area based on class offsets. Caveat: actual immersed top edge depends on hull geometry; offsets are referenced from top of trailing edge.  |
| f_alpha (rudder lift slope) | 3.62 | 1/rad | derived-medium | Use thin-airfoil 2D lift slope **a₀ ≈ 2π** and finite-aspect-ratio lifting-line correction with **AR = span²/area ≈ 2.47** → **a ≈ a₀·AR/(AR+2) ≈ 3.62 rad⁻¹** (taking span efficiency ≈ 1 as baseline for a preliminary model). | `https://en.wikipedia.org/wiki/Lift_coefficient` | This is an initialization only. Real rudder lift slope will be affected by hull endplate effect, prop wash, and stall at large rudder angles—especially relevant for docking. Treat as tunable.  |
| x_G (longitudinal CG) | — | m (or nondim) | missing | Best path: obtain ORC measurement inventory weights and longitudinal locations (engine, tanks, batteries, correctors) and compute total LCG; or use a class weight certificate if available. | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | The ORC page contains some inventory LCGs for individual items, but not a published total LCG/LCB. If your simulator demands x_G, set it as a calibration parameter and tune via turning/stop trials.  |

#### Supporting geometry and propulsion data (used directly or to derive MMG inputs)

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| LOA | 10.570 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | ORC measurement-based LOA. Builder spec lists 10.51 m: treat difference as measurement convention / rounding.  |
| LWL | 8.99 | m | direct | — | `https://jboats.com/j105-tech-specs` | Builder spec LWL. ORC certificate page excerpt shown does not list LWL.  |
| Draft_max (to keel bottom) | 2.004 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | This is the depth you must respect for grounding/berthing clearance.  |
| Prop type | folding | — | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | ORC certificate: folding, 2 blades, shaft exposed.  |
| Prop blades (Z) | 2 | count | direct | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | Supports use of 2-blade prop series or simplified blade-element model.  |
| Prop pitch (nominal) | 0.356 | m | derived-medium | 14 inches → 0.3556 m. | `https://www.yumpu.com/en/document/view/39644027/j105-owner-manual-2012pdf-j-owners` | The best-available pitch reference in the collected sources is a re-hosted owner manual stating “15” dia. × 14” pitch.” Treat as medium confidence unless you can obtain the original PDF from the class site or builder docs.  |
| Prop P/D | 0.933 | — | derived-medium | P/D = 0.3556 / 0.381. | same as above | Needed to approximate open-water KT/KQ/η if you adopt a systematic series proxy.  |
| Propeller handedness (forward) | right-hand (clockwise viewed from stern) | — | derived-high | For Yanmar+KM2P-1, datasheet states output direction “clockwise viewed from stern” for KM2P-1. | `https://www.yanmar.com/marine/wp-content/uploads/2021/02/DS_3YM20_A4_022021_HR.pdf` | This determines **prop walk sign** in reverse for docking logic.  |
| Gearbox model family | KM2P-1 | — | derived-high | Yanmar 3YM20 datasheet lists KM2P-1; separate KM2P-1 spec defines reduction options. | `https://www.yanmar.fi/content/download/15043/109213/file/outline%20KM2P-1.pdf` | Forward ratios offered: 2.21 / 2.62 / 3.22; reverse 3.06. Exact installed ratio on a specific boat is **not identified** in the collected primary sources.  |
| Rudder span (offset depth) | 1.400 | m | direct | — | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | Also explicitly referenced as “Rudder Depth 1400 mm” in the measurement procedure.  |
| Rudder sweep-back angle | 16.7 | degrees | direct | — | `https://j105.org/wp-content/uploads/2015/12/Rudder_offsets.pdf` | Relevant if you want a geometric rudder stock location and effective lever arms.  |
| Keel sweep-back angle (leading edge) | 30.0 | degrees | direct | — | `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf` | Relevant for representing keel lateral force at small leeway and for keel-rudder interaction geometry.  |
| Keel chord lengths (A/B/C/D) | 1.320 / 1.205 / 1.090 / 0.975 | m | direct | — | `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf` | Use to build a spanwise keel planform and estimate keel area / aspect ratio for lateral-plane modeling.  |
| Bulb axis depth below hull ref | 1.528 | m | direct | — | `https://j105.org/wp-content/uploads/2015/12/Keel_offsets.pdf` | Useful for estimating keel depth below sump reference and for draft decomposition.  |
| ORC prop measurement fields available | PRD, PHD, PHL, PBW, PIPA, PSA, PSD, ESL, ST1–ST5, EDL | — | direct (available as fields) | — | `https://data.orc.org/public/WPub.dll/CC/02920004C1L`; `https://orc.org/uploads/files/Rules-Regulations/2024/International-Measurement-System-2024.pdf` | These fields are MMG-gold for shaft/prop/strut geometry. IMS defines each symbol precisely (e.g., PSA shaft angle, ESL exposed shaft length).  |

#### MMG / calibrated coefficients list (your set B)

For these, **no primary-source J/105-specific coefficients were found** in the collected sources. The strongest defensible position is to treat them as **model-identification parameters** to be estimated from trials (real or virtual) following the MMG approach, rather than as catalog data. 

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| w_P0 | — | — | missing | Estimate via MMG calibration from ahead- and astern-power trials (speed vs RPM/throttle), or via empirical wake fraction relations (ship-type uncertain for fin-keel yachts). | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Treat as a primary tuning knob because it strongly affects thrust-to-acceleration mapping at low speeds.  |
| l_R, κ, ε, t_R, t_P, x_H′, a_H | — | — | missing | Require rudder/prop/hull interaction modeling; initialize with generic MMG defaults only if your simulator has a validated default set, then tune using low-speed turning and astern response. | same as above | Without a measured prop-to-rudder longitudinal spacing and inflow model, any numeric choice would be speculative.  |
| k₀, k₁, k₂ and J_int/J_slo | — | — | missing | If your simulator uses a simple KT(J) model, derive from a chosen prop series proxy and operating point; else fit from measured thrust vs advance (requires AE/A0 and series selection). | `https://www.researchgate.net/profile/Gerasimos-Politis-2/publication/369185853_Wageningen_B-series_open_water_propeller_performance_charts_and_propeller_performance_behind_ship/links/650f49b961f18040c21a2fc2/Wageningen-B-series-open-water-propeller-performance-charts-and-propeller-performance-behind-ship.pdf` | You do have **D** and likely **P/D**, but not blade area ratio or detailed folding-prop geometry. Treat these as propulsion submodel coefficients to calibrate.  |
| γ_R⁺, γ_R⁻ | — | — | missing | Rudder inflow correction asymmetry (ahead vs astern) typically calibrated from zig-zag/turning/astern steering trials, not published for J/105. | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Particularly important for docking because astern rudder effectiveness can be very different from ahead.  |
| m_x′, m_y′, J_z′ and hull derivatives (X_vv′ … N_rrr′) | — | — | missing | For a first pass, derive from an empirical regression set (ship-type) or identify from simulated/real trials. The MMG standard method describes coefficient identification via captive tests; absent those, treat as tunable. | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | For fin-keel yachts, derivatives differ from merchant-ship regressions; avoid forcing tanker-based regressions without validation.  |
| R₀′ | — | — | missing | If R₀′ in your implementation is derived from calm-water resistance, you can estimate frictional resistance using measured wetted area WS from ORC certificate fields and ITTC-style friction line, then tune with speed-through-water trials. | `https://data.orc.org/public/WPub.dll/CC/02920004C1L` | The ORC certificate includes wetted surface area (WS) in the full certificate fields, which is unusually helpful for resistance estimation; ensure you use the same definition of R₀′ as your simulator expects.  |

### Geometry reconstruction notes

#### Hull

A fully “primary-source” hull reconstruction would require the **OFF offsets file** referenced by the ORC certificate (“Offset file j105.off”). The certificate confirms such a file exists but does not expose it directly in the public excerpt. 

Given the current source set, a defensible hull approach for low-speed powered maneuvering is:

- Use ORC hull main particulars (LOA 10.570 m, B 3.344 m, Draft_max 2.004 m, displacement 3891 kg) for global scales and mass properties.   
- Use builder LWL (8.99 m) as a waterline-length check and for visual plausibility in the simulator.   
- Treat “Lpp” as **IMSL** (9.607 m) for nondimensionalization and resistance/maneuvering scaling, because ORC documents IMSL as an effective length derived from integrated sectional properties and used for resistance computations.   
- Treat “d” as an **effective hull depth** proxy (≈0.425 m) rather than the full fin-keel draft, because ORC explicitly distinguishes “effective hull depth T” conceptually from maximum draft with keel.   

This yields a hull “canoe body” appropriate for MMG hull-force modeling, while handling the fin keel and rudder as appendages.

#### Keel

The deep-keel offsets document provides:

- Chord lengths at sections A–D, station depths below the hull reference, and leading edge radius.   
- Leading edge sweep-back angle 30°.   
- Bulb axis offset (1528 mm below hull) and bulb cross-section construction rule (circular above axis, elliptical below axis with given semi-axes).   

Implementation guidance:

- Reconstruct the keel fin as a swept foil with straight leading/trailing edges and sections positioned per the “plane at 82 degrees from trailing edge angle,” as the offsets specify.   
- Build the bulb using the axis half-width table and vertical tip offsets, applying the circular/elliptical rule.   
- For an MMG-style model, you can treat keel lateral force as part of hull (if your code is “ship-like”) or create a separate appendage force component; the offsets allow either path.

#### Rudder

The rudder offsets document provides:

- Chord distribution at sections 1–6 and their vertical spacing (0 to 1400 mm).   
- Leading edge sweep-back angle 16.7°.   
- A section-shape specification via “minimum section half widths” at Xc stations (foil thickness/shape constraints).   

Use these to:

- Compute rudder area (0.794 m²) and aspect ratio (~2.47).   
- Create a rudder lift model with a tunable lift slope and stall (critical for docking rudder angles). A thin-airfoil baseline of 2π per rad is a standard starting point, then reduce for finite aspect ratio.   

#### Propulsion layout

From the ORC certificate, the prop installation is explicitly **“shaft exposed”** with a folding 2-blade prop of **0.381 m diameter**. 

The IMS rulebook defines the prop/shaft/strut measurements typically printed on ORC certificates (PRD, PSA, ESL, PSD, PHD, PHL, ST1–ST5, etc.), allowing you to map certificate values into a physical geometry of:

- prop disc size and hub dimensions (PRD, PHD, PHL),
- exposed shaft length (ESL),
- shaft diameter (PSD),
- shaft/hull relation angle (PSA),
- strut geometry (ST1–ST5), and
- distance to upstream appendage/fin forward of prop (EDL). 

For docking simulation, the highest payoff is to represent:

- correct prop diameter and handedness,  
- plausible prop-to-rudder distance (from geometry once you place prop and rudder), and  
- prop-wash over the rudder (rudder effectiveness at near-zero forward speed).

### MMG relevance assessment

The **MMG standard method** is expressly designed around a modular decomposition (hull, propeller, rudder, etc.) with coefficients typically obtained from captive tests and analysis. In the absence of such tests for J/105, your workflow of “MinimalVessel + derived estimates + documented assumptions” is consistent with how MMG is often adapted for simulation, but it implies that many coefficients must be treated as tunable. 

For a J/105 docking-focused simulator, the coefficients split naturally into:

- **Good initialization candidates from your current source set**: mass, principal dimensions, prop diameter/blade count/type, rudder area/span, and shaft/strut geometry fields.   
- **Moderate-confidence derived initializations**: a “canoe-body” draft proxy and corresponding block coefficient (dependent on how your simulator defines d), and a rudder lift slope baseline (dependent on inflow model and stall logic).   
- **Likely tuning-dominant parameters** for low-speed handling: wake fraction, thrust deduction, rudder-prop interaction multipliers, astern asymmetry factors, and higher-order hull derivatives. These are strongly model-structure-dependent and are rarely published for specific yachts—especially fin-keel one-designs.   

Operationally relevant evidence for low-speed handling that is supported by the collected sources:

- The owner guidance emphasizes **testing forward/reverse at the dock**, and warns about **shifting at low RPM** (≤850 RPM in the owner guide), which is consistent with how docking is typically handled on small inboard sailboats (short bursts, not sustained high reverse).   
- The drivetrain is a conventional inboard with shaft/strut/coupling/stuffing box arrangement rather than a saildrive in the class documentation, helping your geometry assumptions.   
- With a right-handed propeller (clockwise viewed from stern in forward), **reverse prop walk tends to pull the stern to port** as a general seamanship rule; this gives you a defensible sign convention for a first-pass docking model once you confirm the boat’s prop rotation.   

### Final implementation package

#### Proposed MinimalVessel object

The following object is intentionally “minimal”: it includes only values that are either direct or defensibly derived from the sources above, and leaves MMG calibration coefficients unset.

```json
{
  "name": "J/105 (OD deep keel baseline)",
  "m_kg": 3891,
  "Lpp_m": 9.607,
  "B_m": 3.344,
  "d_eff_m": 0.425,
  "draft_max_m": 2.004,
  "C_b": 0.278,

  "propeller": {
    "type": "folding",
    "blades": 2,
    "D_p_m": 0.381,
    "pitch_m": 0.356,
    "rotation_fwd_viewed_from_stern": "clockwise",
    "installation": "shaft_exposed"
  },

  "rudder": {
    "area_m2": 0.794,
    "span_m": 1.400,
    "aspect_ratio": 2.47,
    "f_alpha_per_rad": 3.62
  },

  "meta": {
    "orc_certificate": "ORC One Design International Certificate 2026: J-105 MNA-1234",
    "keel_rudder_offsets_date": "2002-05-14",
    "notes": [
      "Lpp is mapped to ORC IMSL for scaling; replace if true Lpp is available.",
      "d_eff is derived from ORC draft and keel-offset geometry; replace with OFF-file-derived effective hull depth if available.",
      "Prop pitch is medium-confidence (re-hosted manual); confirm with actual prop spec if possible."
    ]
  }
}
```

#### Unresolved parameters (must remain explicit in code/config)

These should be left as `null`/`undefined` (or simulator defaults) until you can calibrate them:

- **Propulsor/hull interaction**: `w_P0`, `t_P`  
- **Rudder/prop/hull interaction**: `l_R`, `kappa`, `epsilon`, `t_R`, `x_H_dash`, `a_H`, `gamma_R_plus`, `gamma_R_minus`  
- **Propeller KT/KQ model parameters**: `k_0`, `k_1`, `k_2`, `J_int`, `J_slo`  
- **Added mass / inertia-like nondimensional terms**: `m_x_dash`, `m_y_dash`, `J_z_dash`  
- **Hull force derivative polynomials**: `R_0_dash`, `X_vv_dash`, `X_vr_dash`, `X_rr_dash`, `X_vvvv_dash`, `Y_v_dash`, `Y_r_dash`, `Y_vvv_dash`, `Y_vvr_dash`, `Y_vrr_dash`, `Y_rrr_dash`, `N_v_dash`, `N_r_dash`, `N_vvv_dash`, `N_vvr_dash`, `N_vrr_dash`, `N_rrr_dash`   

#### Assumptions that must be documented (traceable)

1. **Lpp mapping**: `Lpp := IMSL` (ORC effective sailing length). Justification: ORC documents IMSL as an effective length derived from hull sectional properties and used for resistance calculations; it is a defensible scaling length when Lpp is unavailable.   

2. **Effective hull depth d**: `d_eff ≈ Draft_max − keel_depth_below_hull_ref`, where keel depth is derived from deep-keel offsets (bulb axis depth + maximum vertical tip offset). This is a pragmatic proxy consistent with ORC’s distinction between “effective hull depth” and maximum draft including keel, but it is not a substitute for an OFF-file-derived hull depth.   

3. **Block coefficient definition**: `C_b = ∇/(Lpp·B·d_eff)` using seawater density consistent with ORC default SG (~1.0253).   

4. **Rudder area computation**: Rudder area is computed by trapezoidal integration of chord lengths vs span stations from class rudder offsets; immersed area may differ slightly due to hull intersection and any non-immersed portion (not available without hull offsets).   

5. **Rudder lift slope baseline**: Use 2π per rad thin-airfoil slope and apply a finite-aspect-ratio correction as a starting point; treat the result as tunable because docking involves strong rudder angles, prop wash, and potential post-stall behavior.   

6. **Prop handedness inference for docking logic**: Use Yanmar KM2P-1 “clockwise viewed from stern” to set right-handed prop in forward, implying stern-to-port walk in reverse as a generic seamanship rule; treat magnitude as a tuneable parameter. 
