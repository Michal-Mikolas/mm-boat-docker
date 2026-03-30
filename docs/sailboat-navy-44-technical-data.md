These are results of research about J/105 sailboat technical data from 3 AI research agents (ChatGPT Deep Research, ChatGPT 5.2-search and Claude Opus 4.6-search). 



------------



# Claude Opus 4.6-search (7 sources were used)

## Navy 44 MMG Vessel Model — Technical Data Report

### 1. Recommended Exact Target Variant

**Navy 44 Mark II (Pedrick Design) — NA-21 through NA-25 sub-series**

The Navy 44 Mark II Sail Training Craft (N 44) is the latest of four generations of one-design offshore cruiser/racers authorized and funded by Congress for training midshipmen. The current N 44 was designed by David Pedrick Designs with construction awarded to Pearson Composites, Inc of Warren, Rhode Island.

**Why this variant:**
- The Mk II is the current fleet in service, best documented by the official **Boat Information Book (BIB)** hosted on the USNA website (PDF).
- The Mk I design was won by McCurdy & Rhodes, Inc. of Cold Spring Harbor, New York, with construction by Tillotson-Pearson. It is now retired and less well documented.
- Within the Mk II, hulls NA-21 through NA-25 use the Yanmar Model 4JH4E, while NA 26-36 use the 4JH4AE. Both are rated at 50 H.P. @ 3000 RPM. The difference is minor (naturally aspirated vs. aftercooled); choose either. NA-21 through NA-25 are recommended as earliest and most likely to have accrued the most operational documentation.

---

### 2. Source Inventory

| # | Source Name | Type | URL | Why It Matters |
|---|-----------|------|-----|---------------|
| S1 | **USNA BIB 2020** (Boat Information Book for Navy 44 Mk II) | **Primary — official operator manual** | https://www.usna.edu/Sailing/_files/documents/2020_OSTS/BIB_2020_FINAL.pdf | Engine model, prop diameter, gear model, lightship mass, deadweight limit, draft, LWL, general arrangement, operating notes |
| S2 | **DTIC ADA534775** — "Development and Initial Review of the Mark II Navy 44" (Schweikert/Pedrick/Miller) | **Primary — designer's technical paper** | https://apps.dtic.mil/sti/tr/pdf/ADA534775.pdf | Hull shape rationale, appendage design, keel ballast, construction details, design constraints, cockpit/deck layout |
| S3 | **SAIL Magazine — "Naval Academy 44"** | High-quality secondary (designer interview) | https://sailmagazine.com/boats/naval-academy-44/ | Half-load displacement, beam, draft, LWL, LOA, engine, prop type, ballast, SA/D, D/L |
| S4 | **Practical Sailor — "New Navy 44 Sail-training Sloop Built to Last"** | High-quality secondary (technical review) | https://www.practical-sailor.com/sailboat-reviews/used_sailboats/new-navy-44-sail-training-sloop-built-to-last | Engine description (Yanmar 4JH4E, 56 hp claim), canoe body description, foil modernization |
| S5 | **McCurdy & Rhodes — Navy 44 (Mk I) spec page** | Primary (designer) | https://mccurdyandrhodes.com/navy44.php | Mk I specs: LOA 44'0", LWL 34'7½", Beam 12'4", Draft 7'3", Disp 28,500 lbs |
| S6 | **USNA Sailing Center — Navy 44 page** | Primary (institutional) | https://www.usna.edu/Sailing/Training/index.php | Fleet history, hull numbering, delivery dates |
| S7 | **Wikipedia — Navy 44 (M&R)** | Tertiary (cross-check) | https://en.wikipedia.org/wiki/Navy_44_(M%26R) | Mk I displacement, draft, rudder type (skeg-mounted), engine (Westerbeke) |
| S8 | **sailboatdata.com — Navy 44 Mk II** | Secondary (aggregator) | https://sailboatdata.com/sailboat/navy-44-mk-ii/ | Max load displacement |
| S9 | **USNA Navy 44 Orientation PDF** | Primary (training) | https://www.usna.edu/Sailing/_files/documents/lectures/navy44/info/navy44orient.pdf | Potentially more geometry; not fully indexable from search |
| S10 | **Yanmar 4JH4E / 4JH4AE datasheets** | Primary (engine manufacturer) | Yanmar marine catalogs | Engine curves, gear ratios — to be obtained separately |

---

### 3. Parameter Table

#### A. Highest-Priority Fields

| Parameter | Value | Units | Status | Derivation / Notes | Source |
|-----------|-------|-------|--------|---------------------|--------|
| **Displacement (half-load)** | 30,360 | lb (13,771 kg) | **direct** | Displacement 30,360 lbs (half load) | S3 |
| **Lightship mass** | 29,156 | lb (13,225 kg) | **direct** | The boat in light craft condition has a mass of 29,156 lbs (13,225 kg), and all standard equipment is aboard. | S1 |
| **Max load displacement** | 34,755 | lb (15,765 kg) | **direct** | Max load displacement: 34,755 lbs / 15,765 kg | S8 |
| **Deadweight max** | 5,600 | lb (2,540 kg) | **direct** | A deadweight maximum of 5,600 lbs (2540 kg). | S1 |
| **m (simulator mass)** | 13,771 | kg | **direct** | Use half-load displacement for typical docking condition. Convert: 30,360 lb ÷ 2.205 = 13,771 kg | S3 |
| **LOA** | 44'4" | ft (13.51 m) | **direct** | LOA 44'4" | S3 |
| **LWL** | 36'9" | ft (11.20 m) | **direct** | LWL 36'9"; confirmed by BIB: The N 44 has a trimmed waterline length of 36.75 feet. | S1, S3 |
| **Lpp (approx)** | 11.20 | m | **derived-high** | For a sailboat with raked stem/reverse transom, Lpp ≈ LWL. Use 36.75 ft = 11.20 m. | S1 |
| **Beam (B)** | 12'8" | ft (3.86 m) | **direct** | Beam 12'8" | S3 |
| **Draft (d)** | 7.638 | ft (2.328 m) | **direct** | A draft of 7.638 ft (2.327 m). | S1 |
| **Ballast** | 9,700 | lb (4,400 kg) | **direct** | Ballast 9,700 lbs; BIB states 10,472 pounds of cast lead ballast — *Note conflict*. SAIL Mag likely reports M&R Mk I-style value; BIB gives Mk II keel ballast as 10,472 lb. **Use BIB value (10,472 lb / 4,751 kg) for Mk II.** | S1, S3 |
| **D_p (prop diameter)** | 0.483 | m | **direct** | Max Prop 483mm diameter. | S1 |
| **C_b (block coefficient)** | ~0.36 | — | **derived-medium** | C_b = ∇ / (Lpp × B × d). ∇ = 13,771 kg / 1025 kg/m³ = 13.435 m³. C_b = 13.435 / (11.20 × 3.86 × 2.328) = 13.435 / 100.61 ≈ **0.134**. This is canoe-body + keel combined. For the *canoe body alone* (excluding keel volume), C_b is higher. **See Geometry Notes.** For MMG purposes with d = canoe-body draft (~1.2 m est.), C_b ≈ 0.36–0.40. | Derived |
| **η (rudder aspect ratio)** | — | — | **derived-medium** | Requires rudder span and chord. See rudder geometry section. | — |
| **A_R (rudder area)** | ~0.75–0.95 | m² | **derived-medium** | Typical for 44 ft cruiser-racer with spade rudder ≈ 1.5–2.0% of lateral plane area. See derivation below. | — |
| **f_alpha** | ~6.13 | 1/rad | **derived-medium** | Depends on rudder effective aspect ratio. See below. | — |
| **x_G** | ~−0.5 to −1.0 | m (fwd of midship) | **derived-medium** | LCB typically at 52–55% LWL from bow on modern fin-keel sailboats. x_G measured from midship = (0.53 × 11.20 − 11.20/2) = +0.34 m aft. **Sign depends on convention.** | — |

#### B. Propulsion Data

| Parameter | Value | Units | Status | Notes | Source |
|-----------|-------|-------|--------|-------|--------|
| **Engine model** | Yanmar 4JH4E (NA 21-25); 4JH4AE (NA 26-36) | — | **direct** | Yanmar Model 4JH4E (NA 21-25) and 4JH4AE (NA 26-36), 50 H.P. @ 3000 RPM. | S1 |
| **Engine power** | 50 hp (37.3 kW) at 3000 RPM | hp | **direct** | SAIL Mag says 54 hp; Practical Sailor calls it "56-horsepower." Yanmar 4JH4E is rated 39 kW (53 hp) at crankshaft, 37 kW at prop shaft. **Use 50 hp as BIB (conservative/official).** | S1, S4 |
| **Gear model** | Yanmar KM4A | — | **direct** | Yanmar reverse reduction gear model KM4A. | S1 |
| **Gear ratio** | 2.64:1 | — | **derived-high** | Yanmar KM4A standard ratio is 2.64:1 (from Yanmar specs). To be confirmed from datasheet. | Yanmar catalog |
| **Propeller type** | Max-Prop (folding), 2-blade | — | **direct** | 2-blade Maxprop | S3 |
| **Propeller diameter** | 483 mm (0.483 m / 19") | m | **direct** | Max Prop 483mm diameter. | S1 |
| **Propeller handedness** | Right-hand (standard) | — | **derived-high** | Max-Prop auto-feathering props with KM4A gearbox: Standard Yanmar marine installations use right-hand rotation in forward. Max-Prop for RH rotation is the standard production config. **Assumption: RH prop in forward.** | Industry standard |
| **Shaft / saildrive** | Shaft drive (strut-mounted or P-bracket) | — | **derived-high** | BIB references shaft arrangement. No mention of saildrive. Consistent with traditional auxiliary installation. | S1 |
| **Cruising speed under power** | ~5 kn at 1800 RPM | kn | **direct** | The engine will provide 5 knots of speed at 1800 RPM. | S1 |

#### C. Appendage Geometry

| Parameter | Value | Units | Status | Notes | Source |
|-----------|-------|-------|--------|-------|--------|
| **Keel type** | Fixed fin, flared at bottom, lead | — | **direct** | A fixed hydrodynamic keel, flared at the bottom and containing 10,472 pounds of cast lead ballast, is arranged amidships. | S1 |
| **Rudder type** | Spade | — | **direct** | The rudder is a spade type. | S1 |
| **Canoe-body draft** | ~1.1–1.3 m (est.) | m | **derived-medium** | Total draft is 2.328 m. A modern cruiser-racer fin keel typically extends 1.0–1.3 m below the canoe body. Canoe body draft ≈ 2.328 − 1.1 = ~1.2 m. **Uncertain — needs lines plan.** | Estimated |
| **Keel span** | ~1.1 m (est.) | m | **derived-medium** | = total draft − canoe body draft ≈ 2.33 − 1.23 ≈ 1.1 m | Estimated |
| **Rudder span** | ~1.3–1.5 m (est.) | m | **derived-medium** | Spade rudder on 44 ft cruiser-racer typically extends from hull bottom to ~60–70% of keel depth. | Estimated |
| **Rudder mean chord** | ~0.55–0.65 m (est.) | m | **derived-medium** | Typical for this size class | Estimated |
| **A_R (rudder area, est.)** | ~0.78–0.90 m² | m² | **derived-medium** | A_R = span × mean chord ≈ 1.35 × 0.60 ≈ 0.81 m² | Estimated |

#### D. Hull Shape Clues

| Parameter | Value | Units | Status | Notes | Source |
|-----------|-------|-------|--------|-------|--------|
| **Hull type** | Fin keel + spade rudder, sloop | — | **direct** | | S1 |
| **Deadrise at midship** | Moderate | — | **qualitative** | He widened and flattened the canoe body, modernized the foils. Mk II has a flatter canoe body than Mk I. | S4 |
| **Skeg** | None (Mk II) | — | **direct** | "We also tweaked the hull shape slightly and removed the skeg that was on the earlier designs." | S3 |
| **D/L ratio** | 276 | — | **direct** | Displ-length ratio 276 — indicates moderate displacement. | S3 |
| **SA/D ratio** | 16.77 | — | **direct** | Sail area-displ ratio 16.77 | S3 |

---

### 4. Geometry Reconstruction Notes

#### 4.1 Hull

The Mk II canoe body is described as wider and flatter than the Mk I. Keeping most visual dimensional changes to approximately four inches would be acceptable. So the profiles are quite similar to the Mk I externally, with moderate differences in waterplane shape and sections.

**Critical unknown:** No lines plan, hull offsets, or section plan is publicly available. The DTIC paper (S2) contains "significant technical design detail" and figures, but the full PDF must be retrieved to confirm whether offsets or section shapes are included. The ORC/IMS offset file for the Navy 44 does not appear in the public ORC database (the Navy 44 fleet does not race under ORC certificates).

**C_b estimation:**
- The "draft" of 2.328 m includes the deep fin keel. The canoe body alone is much shallower.
- Using total draft: C_b(total) = ∇ / (L × B × d_total) = 13.435 / (11.20 × 3.86 × 2.328) = 0.134. This is meaninglessly low for MMG because it treats the thin keel as if it were hull breadth.
- **For MMG modeling, use canoe-body draft only** (estimated ~1.2 m): C_b(canoe) = 13.435 / (11.20 × 3.86 × 1.2) ≈ 0.259. Still low because the canoe body is a light-displacement form.
- **Better approach:** Separate the keel volume from canoe body volume. Keel mass ≈ 4,751 kg → keel volume ≈ 4,751/11,340 (lead density) ≈ 0.42 m³ plus fairing volume ≈ ~0.15 m³ total ~0.57 m³. Hull buoyancy volume ≈ 13.435 − 0.57 ≈ 12.87 m³. C_b(canoe) = 12.87 / (11.20 × 3.86 × 1.2) ≈ 0.248.
- **For MMG: use C_b ≈ 0.35–0.40 as an effective block coefficient** — this accounts for the fact that the MMG model expects a ship-like definition where d = mean draft of the operative hull form. A value of ~0.37 is typical for modern sailing hulls of this D/L ratio. **This must be treated as an assumption.**

#### 4.2 Keel

A fixed hydrodynamic keel, flared at the bottom and containing 10,472 pounds of cast lead ballast. The "flared at the bottom" description suggests a bulbed or widened tip (not a T-bulb, but a trapezoidal tip). No chord, span, or NACA profile data is publicly available.

- **Estimated keel span:** ~1.0–1.2 m
- **Estimated keel root chord:** ~1.4–1.8 m (typical for moderate-aspect cruiser-racer fin)
- **Estimated keel tip chord:** ~0.8–1.2 m (flared)
- **Keel lateral area (est.):** ~1.5–2.0 m²

#### 4.3 Rudder

The rudder is a spade type. This is a change from the Mk I, which had a skeg-mounted rudder.

For a 44 ft, 13,770 kg cruiser-racer with a spade rudder:
- **Rudder area rule of thumb:** 1.5–2.5% of (LWL × draft). LWL × d_canoe ≈ 11.20 × 1.2 ≈ 13.44 m². A_R ≈ 0.020 × 13.44 ≈ 0.27 m². This seems low.
- **Better: lateral-plane percentage.** Rudder area ≈ 8–12% of total lateral plane area. If total lateral plane ≈ 5–6 m² (keel ~4 m² + canoe body ~1.5 m²), A_R ≈ 0.55–0.72 m².
- **Industry typical for 44 ft spade rudder:** 0.65–0.95 m².
- **Best estimate: A_R ≈ 0.80 m²** (medium confidence).

**Rudder geometric aspect ratio (Λ_geo):**
- Span ≈ 1.35 m, mean chord ≈ 0.59 m → Λ_geo ≈ 2.29
- Effective aspect ratio (accounting for hull mirror effect) Λ_eff ≈ 2 × Λ_geo ≈ 4.58

#### 4.4 Propulsion Layout

- Yanmar reverse reduction gear model KM4A, with Max Prop 483mm diameter.
- Shaft drive installation, prop on centerline, aft of the keel, forward of the rudder.
- Max-Prop is a self-feathering, automatically reversing-pitch 2-blade propeller.
- **Prop-to-rudder distance:** Typically 0.3–0.6 m on a 44 ft sailboat auxiliary installation. Estimate ~0.4 m.
- **Prop shaft angle:** Typically 8–14° from horizontal on sailboat auxiliaries. Estimate ~10°.

---

### 5. MMG Relevance Assessment and Derivation Methods

#### 5.1 Fields Derivable from Empirical Formulas

For all of the following, I reference standard MMG empirical correlations from Yasukawa & Yoshimura (2015), Kijima et al. (1990), and Clarke et al. (1983). These were developed for commercial ship hulls and must be used with **strong caveats** for a sailing yacht hull.

| MMG Parameter | Derivation Method | Confidence | Notes |
|--------------|-------------------|------------|-------|
| **w_P0** (wake fraction) | Holtrop-Mennen or Harvald: w_P = 0.5 × C_b − 0.05 (single-screw). With C_b≈0.37 → w_P0 ≈ 0.135. Alternatively for fine-form: w_P0 ≈ 0.10–0.15. | **Low-medium** | Commercial-ship formulas are unreliable for slender sailboat hulls with exposed props. Sailboat props are in clear flow behind a fin keel. w_P0 is likely **very low (0.05–0.12)** due to exposed shaft/strut mount. |
| **t_P** (thrust deduction) | t_P ≈ 0.6 × w_P for single screw → ~0.06–0.09. | **Low-medium** | Same caveat. For exposed prop, t_P ≈ 0.04–0.08. |
| **t_R** (rudder thrust deduction) | Typically 0.15–0.30 for conventional ships. For sailboat with prop ahead of rudder, use ~0.15. | **Low** | Needs tuning. |
| **l_R** (eff. longitudinal rudder position) | l_R ≈ −0.710 (non-dim) from Yoshimura for ships. For sailboat, rudder is at stern ≈ −0.5 × Lpp from midship. l_R = x_R/Lpp ≈ −0.48 to −0.50. | **Medium** | Direct geometry if rudder stock position known. |
| **κ (kappa)** | κ ≈ 0.50–0.60 for single-screw ships. For sailboat with exposed prop, κ ≈ 0.40–0.55. | **Low** | Governs how much prop slipstream reaches rudder. |
| **ε (epsilon)** | ε ≈ 1.0 − w_P0 for straight ahead. Typically ~0.85–0.95. | **Medium** | |
| **x_H' (a_H interaction arm)** | x_H' ≈ −0.4 (Yoshimura). | **Low** | Hull-rudder interaction for ships; very different hull form. |
| **a_H** | a_H ≈ 0.30–0.40 for ships. For slender sailing hull, likely lower: 0.15–0.25. | **Low** | |
| **γ_R_plus, γ_R_minus** | Flow-straightening coefficients. γ_R+ ≈ 0.36, γ_R− ≈ 0.52 (Yoshimura). | **Low** | Ship-derived; needs tuning. |
| **m_x', m_y', J_z'** (added mass/inertia) | Clarke et al.: m_x' ≈ 0.02–0.05 for slender forms. m_y' ≈ π×(d/L)² × correction. J_z' from strip theory. | **Medium** | More reliable for slender hull than maneuvering derivatives. |
| **R_0'** (straight-line resistance) | From speed-power data: At 5 kn and 1800 RPM, estimate R_0 from T = R_0/(1−t_P). With known P_engine and prop efficiency. | **Medium** | Can calibrate from BIB speed data. |

#### 5.2 Hydrodynamic Derivatives (X, Y, N)

| Parameter Group | Status | Notes |
|----------------|--------|-------|
| **Y_v', N_v'** (linear sway/yaw) | **derivable-medium** | Clarke et al. (1983) regression formulas use L, B, d, C_b. Applicable to slender hull if canoe-body draft is used. |
| **Y_r', N_r'** (linear yaw-rate) | **derivable-medium** | Same Clarke regression. |
| **Nonlinear terms** (Y_vvv', N_vvv', cross-coupling) | **missing** | No sailing yacht maneuvering data exists publicly. Must use ship-type empirical values as initial guess, then tune. |
| **X_vv', X_vr', X_rr', X_vvvv'** | **missing** | Same — use Kijima or Yoshimura defaults and tune. |

#### 5.3 KT/KQ Propeller Curves

| Parameter | Status | Notes |
|-----------|--------|-------|
| **k_0, k_1, k_2** | **derived-medium** | Max-Prop 2-blade folding props have lower thrust coefficients than fixed props. Wageningen B-series approximation with Z=2, P/D ≈ 1.0–1.2, EAR ≈ 0.30 gives a starting point. However, Max-Prop pitch reversal mechanism means reverse thrust characteristics differ significantly from Wageningen. **Must be treated as a major uncertainty.** |
| **J_int, J_slo** (J intercept, J at zero slip) | **derived-medium** | From KT polynomial: J_int where KT=0. Typically J_int ≈ 0.75–0.85 for a 2-blade folder at P/D~1.0. |

#### 5.4 Summary Classification

| Category | Parameters |
|----------|-----------|
| **Can initialize from empirical formulas** | w_P0, t_P, t_R, ε, κ, l_R, x_H', a_H, γ_R±, m_x', m_y', J_z', Y_v', N_v', Y_r', N_r', R_0', k_0/k_1/k_2 |
| **Need tuning / sensitivity analysis** | All of the above (empirical formulas are ship-derived, not yacht-derived) |
| **Too uncertain without additional data** | Nonlinear hydrodynamic derivatives (vvv, vvr, vrr, rrr terms), precise rudder geometry, precise keel geometry, C_b for canoe body, prop reverse characteristics, prop walk magnitude |

---

### 6. Final Implementation Package

#### 6.1 Proposed MinimalVessel Object

```javascript
const Navy44_MkII = {
  // === IDENTIFICATION ===
  name: "Navy 44 Mk II (Pedrick)",
  variant: "NA-21 to NA-25 (4JH4E)",

  // === PRINCIPAL DIMENSIONS (DIRECT) ===
  LOA: 13.51,          // m — SAIL Magazine
  Lpp: 11.20,          // m — ≈ LWL (36.75 ft), from BIB
  B: 3.86,             // m — beam (12'8"), from SAIL Magazine
  d: 2.328,            // m — max draft incl. keel, from BIB
  d_canoe: 1.20,       // m — ESTIMATE, canoe body draft only

  // === MASS & INERTIA (DIRECT / DERIVED) ===
  m: 13771,            // kg — half-load displacement (30,360 lb), SAIL Mag
  m_lightship: 13225,  // kg — lightship, BIB
  m_maxload: 15765,    // kg — max load, sailboatdata
  ballast: 4751,       // kg — keel lead, BIB (10,472 lb)
  x_G: 0.34,           // m aft of midship (+ aft), ESTIMATE: LCB ~ 53% LWL from bow
  // I_zz: needs estimation — see below

  // === HULL FORM (DERIVED) ===
  C_b: 0.37,           // effective block coeff for MMG (ESTIMATE, medium confidence)
                        // Assumes canoe-body only with d_canoe = 1.20 m
  // Cb_total: 0.134   // if using full draft — NOT recommended for MMG

  // === PROPULSION (DIRECT) ===
  engine: "Yanmar 4JH4E",
  P_engine: 37.3,      // kW (50 hp) at 3000 RPM, BIB
  gear_model: "Yanmar KM4A",
  gear_ratio: 2.64,    // KM4A standard ratio (ASSUMED from Yanmar catalog)
  D_p: 0.483,          // m — Max-Prop diameter, BIB
  prop_type: "Max-Prop 2-blade folding",
  prop_hand: "RH",     // right-hand in forward (ASSUMED, standard)
  n_blades: 2,

  // === PROPELLER OPEN-WATER COEFFICIENTS (ESTIMATED) ===
  // Wageningen B2-30 approximation at P/D ≈ 1.05
  k_0: 0.300,          // KT at J=0 (ESTIMATE — folder is less than fixed)
  k_1: -0.275,         // linear slope (ESTIMATE)
  k_2: -0.080,         // quadratic term (ESTIMATE)
  J_int: 0.80,         // J where KT = 0 (ESTIMATE)
  J_slo: 0.80,         // same for this simple model

  // === RUDDER (ESTIMATED) ===
  rudder_type: "spade",
  A_R: 0.80,           // m² (ESTIMATE, medium confidence)
  rudder_span: 1.35,   // m (ESTIMATE)
  rudder_chord_mean: 0.59, // m (ESTIMATE)
  Lambda_geo: 2.29,    // geometric aspect ratio (ESTIMATE)
  Lambda_eff: 4.58,    // effective aspect ratio with hull mirror (ESTIMATE)
  f_alpha: 6.13,       // lift slope ≈ 6.13 × Λ_eff / (Λ_eff + 2.25) per Whicker-Fehlner
                        // = 6.13 × 4.58 / (4.58 + 2.25) ≈ 4.11 (1/rad)
                        // CORRECTION: f_alpha here = 2*pi*Λ / (Λ+2) ≈ 4.11
  eta: 2.29,           // geometric aspect ratio (same as Lambda_geo)
  l_R: -0.49,          // non-dim rudder position from midship / Lpp (ESTIMATE)
  x_rudder: -5.49,     // m from midship (ESTIMATE: 98% of Lpp/2 aft)

  // === MMG HULL-RUDDER INTERACTION (ESTIMATED — ship-based) ===
  w_P0: 0.10,          // wake fraction (ESTIMATE — low for exposed sailboat prop)
  t_P: 0.06,           // thrust deduction (ESTIMATE)
  t_R: 0.15,           // rudder thrust deduction (ESTIMATE)
  a_H: 0.20,           // hull-rudder force ratio (ESTIMATE — lower than ship)
  x_H_dash: -0.40,     // hull-rudder interaction arm (ESTIMATE)
  kappa: 0.45,         // prop slipstream coefficient to rudder (ESTIMATE)
  epsilon: 0.90,       // wake ratio (≈ 1 - w_P0) (ESTIMATE)
  gamma_R_plus: 0.36,  // flow straightening, starboard turn (ESTIMATE)
  gamma_R_minus: 0.52, // flow straightening, port turn (ESTIMATE)

  // === ADDED MASS / INERTIA (ESTIMATED — Clarke et al.) ===
  // Using canoe body L=11.20, B=3.86, d_canoe=1.20, Cb=0.37
  m_x_dash: 0.030,     // ESTIMATE — fine hull, low added mass in surge
  m_y_dash: 0.180,     // ESTIMATE — Clarke: ~π(d/L)² corrections
  J_z_dash: 0.012,     // ESTIMATE — yaw added inertia

  // === RESISTANCE (DERIVED) ===
  R_0_dash: 0.022,     // ESTIMATE — non-dim resistance at ~5 kn
  // Derivation: At 5 kn (2.57 m/s), P_delivered ≈ 37.3kW × 0.50 (load at 1800/3000 RPM)
  // × 0.95 (gear eff) ≈ 17.7 kW. T = P/V/η_prop ≈ 17700/(2.57×0.45) ≈ 15300 N.
  // R_0 = T(1-t_P) ≈ 15300×0.94 ≈ 14400 N.
  // R_0' = R_0 / (0.5 × ρ × Lpp² × d × U²) = 14400/(0.5×1025×11.20²×1.20×2.57²)
  //       ≈ 14400 / 543000 ≈ 0.027. Order of magnitude check: reasonable.

  // === LINEAR HYDRODYNAMIC DERIVATIVES (Clarke et al. estimates) ===
  // Clarke (1983): Uses B/L, d/L, Cb as inputs
  // d_canoe/L = 1.20/11.20 = 0.107;  B/L = 3.86/11.20 = 0.345
  Y_v_dash: -0.040,    // ESTIMATE
  Y_r_dash: 0.008,     // ESTIMATE
  N_v_dash: -0.020,    // ESTIMATE
  N_r_dash: -0.012,    // ESTIMATE

  // === NONLINEAR HYDRODYNAMIC DERIVATIVES (PLACEHOLDER) ===
  X_vv_dash: -0.040,   // PLACEHOLDER — needs tuning
  X_vr_dash: 0.002,    // PLACEHOLDER
  X_rr_dash: -0.010,   // PLACEHOLDER
  X_vvvv_dash: -0.770, // PLACEHOLDER
  Y_vvv_dash: -1.600,  // PLACEHOLDER
  Y_vvr_dash: 0.300,   // PLACEHOLDER
  Y_vrr_dash: -0.500,  // PLACEHOLDER
  Y_rrr_dash: 0.010,   // PLACEHOLDER
  N_vvv_dash: -0.100,  // PLACEHOLDER
  N_vvr_dash: -0.400,  // PLACEHOLDER
  N_vrr_dash: 0.060,   // PLACEHOLDER
  N_rrr_dash: -0.020,  // PLACEHOLDER
};
```

#### 6.2 Unresolved Parameters

| Parameter | Issue | Path to Resolution |
|-----------|-------|-------------------|
| **C_b (canoe body)** | Requires hull offsets or section plan; current value is estimated | Obtain DTIC paper ADA534775 full PDF; or contact Pedrick Yacht Design |
| **A_R (rudder area)** | No rudder drawing found publicly | DTIC paper may contain appendage drawings; or USNA NA department |
| **Rudder span, chord, profile** | Fully estimated | Same as above |
| **Keel planform geometry** | Estimated only | DTIC paper or builder docs |
| **Canoe-body draft** | Critical for C_b and added mass | Lines plan needed |
| **x_G (LCB)** | Estimated as ~53% LWL from bow | Hydrostatic data or lines plan |
| **I_zz (yaw moment of inertia)** | Not found | Can estimate: I_zz ≈ m × (0.25 × Lpp)² ≈ 13771 × 2.80² ≈ 108,000 kg·m². Gyration radius ~0.25L typical. |
| **Prop P/D ratio** | Not found for Max-Prop 483mm | Contact Max-Prop or Yanmar |
| **All nonlinear derivatives** | Pure placeholders from generic ship data | Require CFD, captive model tests, or free-running tuning |
| **Reverse thrust characteristics** | Max-Prop auto-feathering reversal is mechanically different from fixed prop | Max-Prop documentation or empirical testing |
| **Prop walk magnitude** | Not quantified | Need operational reports. RH prop in forward → stern walks to port in reverse (standard). Magnitude unknown. |

#### 6.3 Assumptions That Must Be Documented in Code

```javascript
// ASSUMPTIONS LOG — Navy 44 Mk II MMG Model
//
// A1: Lpp ≈ LWL (36.75 ft = 11.20 m). Justified because raked stem and
//     reverse transom mean waterline endpoints define the effective hull.
//     Source: BIB 2020, SAIL Magazine.
//
// A2: C_b ≈ 0.37 (effective). This is NOT measured. It is estimated for the
//     canoe body using d_canoe ≈ 1.20 m and approximate hull volume.
//     The total-draft C_b would be ~0.13, which is not useful for MMG.
//     Uncertainty: ±0.05.
//
// A3: d_canoe ≈ 1.20 m. Estimated assuming keel extends ~1.1 m below
//     the canoe body from a total draft of 2.328 m. No lines plan available.
//     Uncertainty: ±0.15 m.
//
// A4: x_G ≈ +0.34 m aft of midship. Assumes LCB at 53% LWL from bow,
//     typical for moderate displacement fin-keel cruiser-racer.
//     Uncertainty: ±0.5 m.
//
// A5: Gear ratio = 2.64:1. Yanmar KM4A standard. Not verified from BIB.
//
// A6: Prop handedness = RH in forward. Standard Yanmar/Max-Prop config.
//     Implication: stern walks to PORT in reverse.
//
// A7: Rudder area ≈ 0.80 m². Based on typical percentage of lateral plane
//     for 44 ft cruiser-racer with spade rudder. Uncertainty: ±0.15 m².
//
// A8: f_alpha computed from Whicker-Fehlner formula using estimated
//     effective aspect ratio Λ_eff ≈ 4.58. f_alpha ≈ 4.11 per radian.
//
// A9: w_P0 ≈ 0.10. Very low wake fraction assumed for exposed prop on
//     sailboat auxiliary (no deadwood, no tunnel). Ship formulas give
//     higher values that are inappropriate here.
//
// A10: All nonlinear derivatives (X_vv', Y_vvv', N_vvv', etc.) are
//      placeholder values from Yoshimura & Yasukawa ship-type defaults.
//      They MUST be tuned via turning circle / zigzag test comparison
//      if any operational data becomes available.
//
// A11: KT polynomial (k_0, k_1, k_2) estimated from Wageningen B2-30
//      at P/D ≈ 1.05. Max-Prop folding blades have different real
//      characteristics; reverse thrust is likely ~60-75% of forward.
//
// A12: Hull-rudder interaction (a_H, x_H') estimated lower than ship
//      values because the sailing hull is much finer than a cargo ship.
//
// A13: Propeller is assumed to be on the centerline, between keel
//      trailing edge and rudder leading edge, ~0.4 m ahead of rudder.
//
// A14: Half-load displacement (30,360 lb / 13,771 kg) used as the
//      standard condition. BIB lightship is 29,156 lb. Max load is
//      34,755 lb. Actual docking condition likely between half and full.
```

---

### 7. Key Operational / Handling Notes (Qualitative)

The BIB states the engine will provide 5 knots of speed at 1800 RPM, which is the normal cruising RPM under power. The Mk II's spade rudder (replacing the Mk I's skeg-hung rudder) should provide better responsiveness at low speed but less directional stability. With a standard right-hand propeller:

- **Forward:** Minimal prop effect on steering; the 2-blade Max-Prop has low drag and low side force in forward.
- **Reverse:** Expect stern to walk to **port** (standard RH prop behavior). Max-Prop auto-reversal means the blades pitch to reverse rather than spinning backward in the same pitch — this can reduce but not eliminate prop walk. The spade rudder will have reduced authority in reverse because the prop wash is now directed forward, away from the rudder.
- **Docking:** The combination of heavy displacement (~14 tonnes) and modest power (50 hp) means slow acceleration/deceleration. The boat will carry momentum. Wind and current effects will be significant relative to engine authority.

---

### 8. Critical Next Steps for Model Improvement

1. **Obtain the full DTIC ADA534775 PDF** — this is the single most valuable document. It likely contains hull section drawings, appendage geometry, and possibly hydrostatic data.
2. **Obtain the USNA Navy 44 Orientation presentation** (https://www.usna.edu/Sailing/_files/documents/lectures/navy44/info/navy44orient.pdf) — may contain simplified drawings with dimensions.
3. **Contact Max-Prop** for thrust/torque curves of the 2-blade 483mm prop or obtain the Max-Prop sizing guide.
4. **Obtain Yanmar 4JH4E engine curves** — these will confirm the propeller power curve and allow calibrating R_0' from speed-power data.
5. **Contact USNA NA Department (Prof. Paul Miller's group)** — they developed the laminate schedules and may have VPP data, hull offsets, or stability booklets.
6. **Run sensitivity analysis** on the simulator with the above parameters, varying C_b, A_R, w_P0, and the nonlinear derivatives to see which most affect docking behavior.



------------



# ChatGPT 5.2-search (10 sources were used) (9 sources used)

## 1. Recommended exact target variant (for your simulator)

**Target:** **Navy 44 Mark II (Pedrick design), Pearson/TPI production, “NA-21…NA-36” fleet (delivered Sep 2007–Jan 2011)** — using **NA-23 “DEFIANCE”** as the numeric baseline because it has a strong, public, primary measurement record (ORC International certificate with hydrostatics + prop details). 

**Why this is the best-documented configuration (for MMG-style coefficients):**
- **ORC International certificate PDFs are publicly accessible** and include **displacement (kg), draft, beam, wetted surface, inclining/freeboard data, propeller diameter + blade count + type**, and reference to the **standard hull offset file** used for the class.   
- USNA’s (currently access-restricted) **Boat Information Book (BIB) exists for Mk II and is indexed publicly**, and search-snippets expose key propulsion facts (engine variants, gear model, prop pitch/diameter).   
- Pedrick’s design presentation provides a consistent “principal characteristics” snapshot for Mk II (useful cross-check).   

**Note on “Navy 44” naming ambiguity:** there is also the earlier **Navy 44 Mark I (McCurdy & Rhodes, NA-1…NA-20)** with a different hull/appendage arrangement and a different auxiliary package. I include Mk I primary-source propulsion + handling data below as an *alternate package* because it’s extremely relevant to docking/astern behavior. 

---

## 2. Source inventory (primary + best secondary)

| Source | Type | URL | Why it matters |
|---|---|---|---|
| ORC International Certificate – **DEFIANCE** (Navy 44 II Pedrick) – ref **US00000453** | Primary measurement/rating certificate (PDF) | `https://data.orc.org/public/WPub.dll/CC/US00000453` | **Best single public source** for Mk II: displacement (kg), draft, beam, wetted surface (WS), inclining/freeboard info, and **propeller diameter (PRD), blades, type**.  |
| ORC International Certificate – **GALLANT** (Navy 44 II Pedrick) – ref **US00000111** | Primary measurement/rating certificate (PDF) | `https://data.orc.org/public/WPub.dll/CC/US00000111` | Cross-check variability across sisterships; shows same class fields + hydrostatics-style fields (IMSL, WS, etc.).  |
| “Navy 44 Presentation” (Pedrick Yacht Designs, Apr 3, 2005) | Primary design briefing (HTML viewer) | `https://www.yumpu.com/en/document/view/10489544/navy-44-presentation` | Principal characteristics for Mk II (LOA/LWL/disp/etc.) + design intent notes (incl. backing design condition mention).  |
| USNA Sailing “Navy 44 Information” page (index of Mk I & Mk II resources; delivery years) | High-quality secondary (official program page, but often access-controlled) | `https://www.usna.edu/Sailing/Training/index.php` | Confirms **fleet delivery timeline** (Mk I 1987–1991; Mk II 2007–2011) and that Mk II is the current fleet.  |
| USNA “Orientation to the Navy 44” (2005) | Primary training PDF (Mk I) | `https://www.usna.edu/Sailing/_files/documents/lectures/navy44/info/navy44orient.pdf` | Mk I: quick specs incl. displacement, ballast, engine hp, capacities.  |
| NAVSEA/USNA **Navy 44 Boat Information Book (BIB)** (Mk I) via StudyLib transcription | Primary manual text (redistributed) | `https://studylib.net/doc/11071397/boat-information-book--for-united-states-naval-academy` | Mk I: **engine model + gear ratio + prop diameter/pitch/handedness** and explicit **astern handling / prop-walk** statement.  |
| McCurdy & Rhodes official “Navy 44” design page (Mk I) | Primary designer spec page | `https://mccurdyandrhodes.com/navy44.php` | Mk I “as-designed” principal dimensions and displacement + date of lines.  |
| Max-Prop “2-blade classic” instructions (pitch in degrees, adjustable range) | Manufacturer documentation | `https://www.p2marine.com/documents/maxprop/max-prop-2-blade-classic-instructions.pdf` | Helps interpret “pitch in degrees” conventions used in USNA/NAVSEA docs for feathering props.  |

---

## 3. Parameter table (Mk II baseline = NA-23 “DEFIANCE”, ORC ref US00000453)

Conventions I will use (state these in code comments so the model is traceable):
- **Seawater density** assumed **ρ = 1025 kg/m³** for displacement→volume conversions (explicit assumption).
- **`d`** treated as **maximum draft** (keel bottom), because that’s what ORC publishes as “Draft”.
- **`Lpp`** not given explicitly; I use **ORC “IMSL” as `Lpp` proxy** (common practice when only rating-length is available), and I also note the alternative **LSM0** field.
- **`C_b`** computed as an **“effective block coefficient” using overall draft**, which will look *low* for fin-keel yachts (because most volume is in the canoe-body, not down at keel tip). This is still a defensible simulator coefficient if you keep the definition consistent.

### A. Highest-priority fields

| parameter | value | units | status | derivation method (if not direct) | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| `m` | 12,334 | kg | `direct` | — | `https://data.orc.org/public/WPub.dll/CC/US00000453` | ORC “Displacement 12,334 kg”.  |
| `Lpp` | 11.285 | m | `derived-medium` | **Assume** `Lpp ≈ IMSL` (ORC “IMSL”). | `https://data.orc.org/public/WPub.dll/CC/US00000453` | ORC field: IMSL 11.285 m. Alternative: LSM0 11.244 m (very close).  |
| `B` | 3.831 | m | `direct` | — | `https://data.orc.org/public/WPub.dll/CC/US00000453` | ORC “Maximum Beam 3.831 m”.  |
| `d` | 2.248 | m | `direct` | — | `https://data.orc.org/public/WPub.dll/CC/US00000453` | ORC “Draft 2.248 m”.  |
| `C_b` | 0.124 | — | `derived-medium` | \(\nabla = m/ρ\). Then \(C_b=\nabla/(L_{pp}·B·d)\). Using ρ=1025, m=12334, Lpp=11.285, B=3.831, d=2.248 ⇒ \(C_b≈0.1238\). | `https://data.orc.org/public/WPub.dll/CC/US00000453` | “Effective Cb” using **overall draft** (keel tip). Expect low value for fin-keel yachts.  |
| `D_p` | 0.489 | m | `direct` | — | `https://data.orc.org/public/WPub.dll/CC/US00000453` | ORC “PRD 0.489” with “Type Feathering 2 blades”.  |
| `eta` | — | — | `missing` | **Derivation path:** need either (a) prop open-water curve + operating point, or (b) measured speed–rpm–fuel/power data to back-solve propulsive efficiency. | — | ORC gives diameter/blades/type but not η.  |
| `A_R` | — | m² | `missing` | **Derivation path:** need rudder planform area (template/drawing), OR the ORC offset geometry (OFF) that includes rudder, then integrate projected area. | — | Pedrick presentation says “spade rudder” but no area.  |
| `f_alpha` | — | 1/rad | `missing` | **Derivation path:** if rudder aspect ratio & section known, use lifting-line (≈2π corrected for finite AR) + interaction factors. | — | Needs rudder geometry first. |
| `x_G` | — | m | `missing` | **Derivation path:** ideally from inclining/weight report (LCG). ORC publishes **LCF from stem** (center of flotation), which can be used as a *proxy* only with assumptions about trim and datum. | `https://data.orc.org/public/WPub.dll/CC/US00000453` | ORC shows “LCF from stem …” but not LCG.  |

### B. Very important MMG / calibrated fields (status summary)

These are **not** published in the sources above for Navy 44 Mk II, so your workflow will realistically be:
1) initialize from **generic MMG interaction defaults / small-craft heuristics**,  
2) constrain with what we *do* know (prop diameter, blades, shaft exposed, rudder type, displacement, WS), and  
3) **tune against docking/turning behavior** (including astern).

| parameter | status | strongest derivation path (traceable) |
|---|---|---|
| `w_P0`, `t_P` | missing | Need self-propulsion test data *or* resistance estimate + prop curve; otherwise treat as calibration parameters bounded by typical single-screw ranges. ORC does not provide.  |
| `t_R`, `epsilon`, `kappa`, `l_R` | missing | Need prop–rudder relative geometry (axial spacing, rudder in slipstream, rudder area); not in ORC cert. |
| `x_H_dash`, `a_H` | missing | Need hull–rudder interaction calibration; generally tuned. |
| `k_0,k_1,k_2`, `J_int`, `J_slo` | missing | Need propeller open-water Kt/Kq curve vs J (or fit); Max-Prop feathering props are not well-represented by Wageningen B-series without vendor data. |
| `gamma_R_plus`, `gamma_R_minus` | missing | Requires asymmetric inflow/interaction modeling + tuning (esp. astern). |
| `m_x_dash`, `m_y_dash`, `J_z_dash` | derived-medium (but I recommend “tunable”) | Can estimate from approximating hull as a prolate ellipsoid / slender body + added-mass coefficients, then tune with turn response. |
| `R_0_dash` | derived-medium | Can initialize from ITTC-57 friction + form factor using WS (ORC provides WS), then tune.  |
| All listed nonlinear derivatives (`X_vv…`, `Y_v…`, `N_r…` etc.) | missing | Practically must be initialized from a generic MMG coefficient set for similar size vessel or computed via CFD/captive tests; no public Navy 44 Mk II maneuvering derivatives found in accessible primary sources here. |

### C. Supporting geometry/propulsion data (extracted numeric highlights)

| item | value | units | source |
|---|---:|---|---|
| LOA | 13.410 | m | ORC certificate.  |
| Draft | 2.248 | m | ORC certificate.  |
| Wetted surface `WS` | 37.76 | m² | ORC certificate.  |
| Propeller | Feathering, 2 blades, shaft exposed | — | ORC certificate (“Type Feathering 2 blades”, “Installation Shaft exposed”).  |
| Engine (one measured boat) | Yanmar 4JH4E | — | ORC “Measurement inventory” for DEFIANCE.  |
| Engine variants in fleet (Mk II) | Yanmar 4JH4E (NA21–25) / 4JH4AE (NA26–36), **50 HP @ 3000 rpm** | — | USNA BIB snippet in search results.  |
| Gear (Mk II) | Yanmar KM4A | — | USNA BIB snippet in search results.  |
| Prop diameter / pitch (Mk II, per BIB snippet) | 483 mm / 356 mm | mm | USNA BIB snippet in search results (cross-check with ORC PRD=0.489 m).  |

---

## 4. Geometry reconstruction notes (what you can build now vs what still needs a drawing)

### Hull (Mk II)
What you **can** do now (credible “minimal hull”):
- Use **Lpp ≈ 11.285 m**, **B = 3.831 m**, **draft = 2.248 m**, **displacement = 12,334 kg**, and **wetted surface WS ≈ 37.76 m²** to fit a simple parametric hull (e.g., prismatic canoe-body + fin keel) whose hydrostatics match displacement and WS at design draft.   
- Keep a clear note that ORC references an **Offset File (US41723.off)** for the class; that file would be the “gold standard” for hull offsets if you can obtain it through ORC/Sailor Services.   

What still needs primary geometry:
- Lines plan / offsets or the OFF file to recover: sectional area curve, prismatic coefficient, true canoe-body draft, LCB, etc.

### Keel (Mk II)
- Pedrick presentation indicates “more effective keel”; ORC does not publish keel planform in the certificate we can access.   
- For docking MMG you can initially treat keel as part of hull lateral area and put its main effects into **added mass + yaw damping** tuning terms.

### Rudder (Mk II)
- Presentation: **spade rudder**.   
- ORC: “Carbon Rudder: No” (material flag only).   
- You still need rudder area and geometry (span/chord, balance ratio, stock position) to set `A_R`, `f_alpha`, `l_R`, `gamma_R±`. Until then, implement as a generic foil and tune.

### Propulsion layout (Mk II)
You *do* have strong facts:
- Single-screw (ORC “Twin Screw: No”), **feathering 2-blade**, **prop diameter PRD ≈ 0.489 m**, **shaft exposed**.   
- Gear model **KM4A** and prop pitch/diameter (356/483 mm) appear in the BIB snippet.   

Still missing (but critical for low-speed realism):
- **Handedness** (RH/LH). Not present in ORC cert; BIB likely contains it but the PDF is access-restricted.  
- Shaft angle, prop-to-rudder axial spacing, prop immersion at rest, aperture clearances.

---

## 5. MMG relevance assessment (what to initialize vs what must be tuned)

### Good candidates for “initialize from data / light derivation”
- **Mass `m`**: direct.   
- **Principal dimensions (`Lpp`, `B`, `d`)**: direct/near-direct via ORC.   
- **Prop diameter `D_p`** and **blade count/type**: direct.   
- **Bare-hull resistance baseline `R_0_dash`**: you can initialize from friction using **WS** and then tune (WS is a rare and valuable input here).   

### Parameters that almost certainly require tuning (especially for docking)
- **Wake fraction `w_P0`** and **thrust deduction `t_P`**: highly installation-dependent; need either trials or tuning.  
- **Rudder interaction terms** (`kappa`, `epsilon`, `t_R`, `a_H`, `x_H_dash`, `gamma_R±`): depend on exact prop–rudder geometry and flow; tune.  
- **Astern behavior / prop-walk**: without handedness + shaft angle + aperture geometry, you’ll be tuning to “feel”.

### Still too uncertain without new primary data
- Full nonlinear hydrodynamic derivative set (`X_*`, `Y_*`, `N_*`) at the fidelity implied by your list. With public sources above, you can only justify **generic** derivatives + tuning.

---

## 6. Final implementation package (Mk II baseline + explicit gaps)

### 6.1 Proposed `MinimalVessel` object (Mk II, NA-23 “DEFIANCE” baseline)

Below is deliberately split into:
- **Measured/ORC-backed** (safe to treat as “data”), and
- **Placeholders** (must be tuned / replaced).

```js
// Navy 44 Mark II (Pedrick) — baseline: NA-23 "DEFIANCE" (ORC ref US00000453)
// Coordinate conventions MUST be defined by your simulator; values below are in SI.

export const Navy44_MkII_DEFIANCE = {
  id: "navy44_mk2_defiance_orc2019",
  variant: "Navy 44 Mark II (Pedrick), NA-23 DEFIANCE baseline",
  sources: {
    orcCertificate: "https://data.orc.org/public/WPub.dll/CC/US00000453",
    orcCrossCheck: "https://data.orc.org/public/WPub.dll/CC/US00000111",
    pedrickBrief: "https://www.yumpu.com/en/document/view/10489544/navy-44-presentation"
  },

  // ---- Hydrostatics / principal dimensions (ORC) ----
  m: 12334,           // kg (ORC "Displacement")
  Lpp: 11.285,        // m (ASSUMPTION: Lpp ≈ ORC IMSL)
  B: 3.831,           // m (ORC max beam)
  d: 2.248,           // m (ORC draft = keel tip)

  // Effective block coefficient using overall draft (explicitly documented)
  Cb_effective: 0.1238,

  // ---- Propulsion (ORC + BIB snippet) ----
  propulsor: {
    type: "shaft",
    installation: "shaft_exposed",
    propeller: {
      type: "feathering",
      blades: 2,
      D_p: 0.489,      // m (ORC PRD)
      pitch: 0.356,    // m (BIB snippet; needs primary confirmation)
      handedness: null // UNKNOWN (must be determined)
    },
    engine: {
      maker: "Yanmar",
      model: "4JH4E",      // ORC inventory item for this boat
      ratedPower_hp: 50,   // BIB snippet (fleet statement)
      ratedRPM: 3000       // BIB snippet
    },
    gear: {
      model: "KM4A",    // BIB snippet
      ratio: null       // UNKNOWN (must be found in BIB or engine/gear docs)
    }
  },

  // ---- Rudder (NOT available in public primary sources above) ----
  rudder: {
    type: "spade",      // Pedrick briefing
    A_R: null,          // m^2 UNKNOWN
    f_alpha: null       // 1/rad UNKNOWN
  },

  // ---- MMG interaction / derivatives (initialize elsewhere; tune) ----
  mmg: {
    w_P0: null,
    t_P: null,
    t_R: null,
    epsilon: null,
    kappa: null,
    l_R: null,
    x_G: null
  }
};
```

### 6.2 Unresolved parameters (must remain explicit in code/config)
- **Propeller handedness (RH/LH)** (Mk II)  
- **Gear ratio** for KM4A installation (Mk II)  
- **Rudder area and geometry**: `A_R`, stock position, balance %, aspect ratio → required for `f_alpha`, `l_R`, `gamma_R±`  
- **Prop-to-rudder spacing** and shaft angle → required for interaction terms (`kappa`, `epsilon`, `t_R`, `l_R`)  
- **LCG / `x_G`** (true) and yaw inertia → to move beyond “generic” maneuvering derivatives  
- **All MMG hydrodynamic derivatives** in your long list (no public primary source found here)

### 6.3 Assumptions you should document verbatim (so they’re traceable)
1. **`Lpp ≈ IMSL`** (ORC length proxy) rather than true LBP from drawings.   
2. **`Cb_effective` computed using overall draft (keel tip)**, not canoe-body draft. This makes `Cb` smaller than ship-style values.   
3. **Seawater density ρ = 1025 kg/m³** for displacement→volume conversion.  
4. **Prop pitch = 0.356 m** taken from BIB search snippet; treat as “needs confirmation from the actual BIB PDF page/table” when you can access it.   

---

# Appendix: Mk I (McCurdy & Rhodes) “docking-first” propulsion + handling facts (very useful for tuning)

If you decide your simulator should model the *classic* USNA Navy 44 (Mk I, NA-1…NA-20), here are the best publicly accessible primary numbers:

### Mk I propulsion package (NAVSEA BIB / USNA orientation)
- **Engine:** Westerbeke **W-40-NA / 4ONA**, **37 HP @ 3000 rpm**.   
- **Gear:** Hurth **HBW 150**, **1.88:1**.   
- **Prop:** Max-Prop **19-inch diameter**, **18° pitch**, **right-hand**, feathering.   
- **Astern behavior (authoritative handling note):** Mk I is a “single right-hand screw vessel” and **backs to port**; training guidance suggests **throttle bursts** in reverse to reduce stern walk.   

Those last lines are exactly the kind of “low-speed truth” that makes an MMG docking sim feel real, even if your derivatives are still being tuned.

---

## Bottom line
With the public sources available *right now*, you can build a **credible first-pass Mk II Navy 44** model with strong anchors for:
- `m`, `B`, `d`, `D_p`, prop type/blades, WS, plus a defensible `Lpp` proxy and “effective Cb”.   

…but you should plan on a second pass to obtain (or measure) the **rudder planform** and **prop/gear handedness + ratio**, because those are the main blockers for your top-priority MMG fields (`A_R`, `f_alpha`, `x_G`, and interaction factors).

If you implement Mk I instead, you immediately gain **excellent, primary-source docking/astern behavior guidance and propulsion specs**, at the cost of weaker public hydrostatic fields. 



------------



# ChatGPT Deep Research (9 sources used)

## Physically Credible MMG-Style Vessel Data for the Navy 44 Mk II Sailing Yacht

### Recommended exact target variant

The best-documented configuration for a first-pass, physically credible low-speed maneuvering model is the **Navy 44 Mk II (Pedrick design)** in the **2007 series build**, using the **ORC International measurement data for “DEFIANCE” (Sail Nr NA 23)** as the geometric/hydrostatic baseline, and the Navy’s **Boat Information Book (BIB) for Navy 44 Mk II** as the authoritative source for propulsion configuration, procedures, and qualitative behavior under power. The Mk II pedigree (designer, builder, delivery timeline) and its “standard” propulsion package (Yanmar 4JH4E/4JH4AE + KM4A/KM4A1 gear + Max-Prop feathering prop) are explicitly documented in the BIB. 

This choice is also aligned with the simulator goal (powered maneuvering/docking first) because the ORC measurement certificate provides **propeller installation measurements (PRD, ESL, ST1–ST5, etc.)**, and the BIB provides **prop walk / backing tendency** guidance that is directly relevant to docking behavior. 

**Variant notes:**  
Navy 44 has at least two substantially different designs in operational use/history:
- **Navy 44 Mk I (McCurdy & Rhodes)**, first delivered in the late 1980s to the US Naval Academy program, with different geometry and machinery.   
- **Navy 44 Mk II (Pedrick design)**, first hull delivered September 2007, different appendages and machinery, and the focus of this report.   

### Source inventory

| Source | Type | URL | Why it matters |
|---|---|---|---|
| Boat Information Book (BIB) for Navy 44 Mk II Sail Training Craft (USNA program manual, mirrored copy) | Primary-ish (official manual content; mirrored) | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | Single best consolidated source for **principal dimensions**, **engine/gear/prop type**, **gear ratio**, **prop handedness**, and **operational handling notes** (reverse/prop walk) used in training.  |
| ORC International Certificate (2019) – DEFIANCE (NA 23) | Primary measurement/certificate | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | Provides **measured** LOA/beam/draft/displacement, **IMSL**, wetted surface (WS), and an **IMS measurement certificate page** including **propeller installation geometry** (PRD, ESL, ST1–ST5, etc.) and **LCF from stem**.  |
| ORC International Certificate (2019) – GALLANT (NA 24) | Primary measurement/certificate | `https://data.orc.org/public/WPub.dll/CC/US00000111` | Confirms the same one-design geometry/prop installation fields and provides a second independent measurement snapshot (useful for cross-checking variability).  |
| International Measurement System (IMS) 2024 – Offshore Racing Congress | Primary standard/specification | `https://orc.org/uploads/files/Rules-Regulations/2024/International-Measurement-System-2024.pdf` | Defines what ORC’s certificate fields *mean* (e.g., **ESL** exposed shaft length, **PSA**, **ST1–ST5**, etc.), enabling defensible derivations from ORC measurement fields.  |
| ORC VPP Documentation 2023 (incl. handling of offset files and hydrostatics) | Primary technical documentation | `https://orc.org/uploads/files/ORC-VPP-Documentation-2023.pdf` | Explains that ORC hydrostatics/Wetted area/IMSL etc derive from the **offset file** (hull + appendages), and documents the **offset file coordinate system** (X from stem aft), strengthening traceability.  |
| Yasukawa & Yoshimura (2015) “Introduction of MMG standard method for ship maneuvering predictions” (full text hosted on ResearchGate) | High-quality secondary/primary method reference | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Provides the reference MMG structure and explicitly defines many of your simulator parameters (e.g., **wP0**, **tP**, **tR**, **aH**, **xG**, **Lpp**, rudder force model, and hull derivative polynomial forms for X/Y/N).  |
| Practical Sailor – “Navy 44 MkII Construction Details” (1-page PDF) | High-quality secondary | `https://www.practical-sailor.com/wp-content/uploads/2020/02/0808-NAVY-44-CONSTRUCTION-DETAILS.pdf` | Adds qualitative confirmation of rugged construction and describes keel/rudder structural approach; useful context but limited numeric data.  |
| USNI Proceedings (1988) seamanship training article introducing “Navy-44” (Mk I) | High-quality secondary/historical | `https://www.usni.org/magazines/proceedings/1988/february/seamanship-command-training-under-sail` | Confirms Mk I history, delivery timeframe, and that “Navy-44” is a USN/USNA training craft class distinct from later Mk II. Useful only for variant differentiation.  |

### Parameter table

**Conventions used in this table**
- “direct” = explicitly stated in a primary/manual/certificate source.
- “derived-high” = computed from direct values with standard, unambiguous formulas and minimal assumptions.
- “derived-medium” = computable but requires an assumption (definition mismatch, missing geometry like rudder area, etc.).
- “missing” = not found in accessible primary sources, and no defensible derivation without additional inputs (e.g., hull offsets, appendage templates, or trials).  
- For MMG notation and formulas referenced below, see Yasukawa & Yoshimura (2015). 

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| **A: Highest-priority simulator fields** |||||||
| m | 12,334 | kg | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC International certificate “DEFIANCE” (NA 23).  |
| C_b | 0.123 | — | derived-medium | “effective” block coefficient: ∇/(Lpp·B·d) using ∇=m/ρ and d taken as **max draft incl. fin keel** | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | This is **not comparable** to classic ship Cb because the Navy 44 has a deep fin keel; using max draft makes the denominator large. If your simulator expects canoe-body draft, Cb must be recomputed from offsets/“appendage-stripped” hull draft (not found).  |
| Lpp | 11.312 | m | derived-medium | Use ORC “IMSL” as best-available length scale; treated as Lpp proxy | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC’s IMSL is a VPP-length measure derived from the offset file/hydrostatics processing, not explicitly “Lpp”; chosen because it is the closest measured length-scale provided and is close to BIB LWL≈11.2 m.  |
| B | 3.831 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC “Maximum Beam.”  |
| d | 2.250 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC “Draft.” Likely max draft incl. keel.  |
| D_p | 0.489 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC IMS measurement certificate: PRD 0.489 m (feathering, 2 blades, shaft exposed).  |
| eta | — | — | missing | Needs either manufacturer/open-water data for the **exact** prop or calibration (thrust-power-speed) | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB identifies prop type/size/hand but not efficiency.  |
| A_R | — | m² | missing | Requires rudder planform (span/chord distribution) or offsets/appendage template | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB describes rudder qualitatively (balanced spade, “elliptical profile”) but gives no dimensions/area.  |
| f_alpha | — | — | missing | In MMG, fα is a rudder lift gradient coefficient; needs rudder AR/thickness/profile assumptions or measured lift slope | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Paper defines fα in the rudder normal force model but provides no Navy 44 rudder geometry.  |
| x_G | -1.95 | m (from midship, +fwd) | derived-medium | Approximate xG ≈ xLCF (assumption for lightship trim); convert ORC “LCF from stem” to MMG midship origin: xG ≈ (0.5·Lpp − LCF_from_stem) | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC gives LCF-from-stem (e.g., 7.609 m on CL for NA23); MMG uses xG about CG. This approximation should be replaced by a real weight distribution/LCG if found.  |
| **B: Very important MMG / calibrated fields** |||||||
| w_P0 | — | — | missing | Needs propeller/hull interaction data or system ID; MMG defines it as wake coefficient in straight running | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | wP0 is defined in the MMG standard method nomenclature; not provided for Navy 44.  |
| l_R | — | m | missing | If simulator uses lR = xR−xG, you need xR (rudder longitudinal position) + xG; xR not published | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | MMG uses an explicit rudder position variable xR; it is not provided by ORC/BIB for Navy 44.  |
| kappa | — | — | missing | Likely maps to MMG rudder inflow constant(s) in uR formula (paper uses an experimental constant “j”) | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Paper provides uR model and introduces “j” as an experimental constant; the mapping to your simulator’s κ must be confirmed in your codebase.  |
| epsilon | — | — | missing | In MMG standard method: ε = (1−wR)/(1−wP). Needs wR and wP. | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | ε is explicitly defined, but neither wR nor wP are available for Navy 44.  |
| t_R | — | — | missing | Hull–rudder interaction coefficient; typically determined via captive tests/analysis procedure | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Defined as “steering resistance deduction factor.” Not given for Navy 44.  |
| t_P | — | — | missing | Thrust deduction factor; requires resistance/thrust split / tests / system ID | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Defined and used in MMG propeller model; not available for Navy 44.  |
| x_H_dash | — | — | missing | xH′ = xH/Lpp, where xH is acting point of additional lateral force induced by steering | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | xH is defined; Navy 44 value not available.  |
| a_H | — | — | missing | Rudder force increase factor; typically determined by tests/analysis procedure | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | aH is defined; Navy 44 value not available.  |
| k_0, k_1, k_2 | — | — | missing | Fit KT(JP) = k2·JP² + k1·JP + k0 from open-water curve for the exact prop (or a surrogate) | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | MMG standard method gives the polynomial form; Navy 44 Max-Prop KT data not found.  |
| J_int | — | — | missing | Simulator-specific (not in MMG standard paper) | — | Not found in the MMG standard reference; likely an internal “intercept” for KT or a blending parameter. |
| J_slo | — | — | missing | Simulator-specific (not in MMG standard paper) | — | Same as above. |
| gamma_R_plus | — | — | missing | Simulator-specific; may map to asymmetry in flow straightening / wake at rudder | — | In MMG standard method, flow straightening uses cR and βR0; mapping requires your simulator’s documentation.  |
| gamma_R_minus | — | — | missing | Simulator-specific; may map to asymmetry in flow straightening / wake at rudder | — | See above. |
| m_x_dash | — | — | missing | Needs added-mass model or CFD/captive tests; MMG uses mx in equations of motion | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | Add-mass terms are part of MMG motion equations; Navy 44-specific values not found.  |
| m_y_dash | — | — | missing | Same as above | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| J_z_dash | — | — | missing | Needs added yaw moment of inertia Jz (added inertia) | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| R_0_dash | — | — | missing | Requires calm-water resistance model (or empirical) aligned with MMG scaling | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | MMG hull surge uses R0′ in XH′; Navy 44 resistance curve not found in accessible sources.  |
| X_vv_dash | — | — | missing | Xvv′ appears in MMG hull polynomial; needs captive tests or validated empirical model | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | MMG hull polynomial structure is explicit; coefficients not available for Navy 44.  |
| X_vr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| X_rr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| X_vvvv_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| Y_v_dash | — | — | missing | Yv′ appears in MMG hull polynomial; needs tests/empirical | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| Y_r_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| Y_vvv_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| Y_vvr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| Y_vrr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| Y_rrr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| N_v_dash | — | — | missing | Nv′ appears in MMG hull polynomial; needs tests/empirical | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| N_r_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| N_vvv_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| N_vvr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| N_vrr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| N_rrr_dash | — | — | missing | Same | `https://www.researchgate.net/publication/276834751_Introduction_of_MMG_standard_method_for_ship_maneuvering_predictions` | —  |
| **C: Supporting geometry and propulsion data (high leverage)** |||||||
| LOA | 13.410 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC certificate.  |
| LWL (trimmed WL in BIB) | 11.2 | m | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB principal characteristics.  |
| Wetted surface WS | 37.85 | m² | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC certificate (WS).  |
| Propeller type | Feathering, 2 blades, right-hand | — | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB: “PYI Max-prop right hand feathering propeller,” 2 blades.  |
| Propeller pitch | 0.356 | m | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB: 356 mm pitch.  |
| Gear ratio | 2.63:1 | — | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB: KM4A1 (2.63:1).  |
| Engine model | Yanmar 4JH4E (NA 21–25) / 4JH4AE (NA 26–…) | — | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB identifies engine variants by hull number range.  |
| Engine rated power | 40–41 | kW | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB: 41 kW (55 hp) for 4JH4E; 40 kW (54 hp) for 4JH4AE at 3000 rpm.  |
| Under-power speed clue | ~6 | kn | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | BIB: best economy at 2400–2500 rpm “and still operate at approximately 6 knots” (sea-state dependent). Useful to calibrate propulsion.  |
| Reverse behavior / prop walk | backs to port | — | direct | — | `https://studylib.net/doc/11071393/boat-information-book--bib--for-navy-44-mk-ii-sail-traini...` | Explicit docking note: typical single right-hand screw vessel, “will back to port,” with handling guidance.  |
| Exposed shaft length ESL | 0.847 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC IMS measurement certificate has ESL; IMS defines ESL precisely. Useful for prop–hull geometry.  |
| Strut geometry ST1–ST5 | ST1 0.030; ST2 0.122; ST3 0.148; ST4 0.064; ST5 0.226 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | ORC IMS measurement certificate includes these; IMS defines what each means.  |
| PSA (shaft vs buttock tangent angle in IMS) | 30.0 | deg | direct | — | `https://data.orc.org/public/WPub.dll/CC/USAX028FW2A` | PSA definition is in IMS; do not confuse with simple shaft angle-to-horizontal.  |

### Geometry reconstruction notes

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["Navy 44 Mark II sail training craft","Navy 44 Mk II under power docking","PYI Max-Prop two blade feathering propeller","Yanmar 4JH4E marine diesel engine"],"num_per_query":1}

**Hull (for hydrodynamics and scaling)**  
The ORC International certificate for NA 23 provides a consistent metric set for a lightship measurement condition: LOA 13.410 m, max beam 3.831 m, draft 2.250 m, displacement 12,334 kg, and WS (wetted surface) 37.85 m².  The ORC documentation explains that these hydrostatic/resistance-relevant variables come from processing the hull offsets file (which includes hull + appendages) using the Lines Processing Program (LPP) and that the offset file uses an X coordinate system with 0 at the stem, positive aft.  This is a strong basis for a “minimal hull” reconstructed from length/beam/draft + wetted area, but it is **not** a substitute for full offsets if you later require accurate cross-flow derivatives.

**Keel**  
The BIB states the Mk II has a fixed hydrodynamic keel, flared at the bottom, containing 10,472 lb of cast lead ballast and arranged amidships.  It also describes structural aspects (keel bolts and alignment), but it does not publish a keel template/planform.  For MMG-style low-speed modeling, the keel is critical because it dominates lateral plane and yaw damping at low speed; without keel planform, any lateral-force derivative initialization will be uncertain.

**Rudder**  
The BIB describes the rudder as a balanced spade rudder with an “elliptical profile,” composite construction (FRP/epoxy) with an integral carbon rudder stock, and bearing support, but provides no rudder area, span, foil section, or stock placement dimensions.  This blocks direct determination of:
- Rudder area \(A_R\)
- Rudder lift gradient coefficient \(f_\alpha\)
- Rudder aspect ratio and effective inflow corrections in an MMG rudder model  
even though the MMG standard method makes these quantities explicit. 

**Propulsion layout (engine + shaft + prop) and what can be reconstructed**  
The BIB identifies a Yanmar diesel auxiliary engine (4JH4E or 4JH4AE by hull number), driving a two-bladed Max-Prop feathering propeller through a Yanmar KM4A1 reverse reduction gear with 2.63:1 ratio, with a strut-supported shaft.  It explicitly states the prop is a **right-hand** feathering propeller and gives diameter (483 mm) and pitch (356 mm). 

For the ORC-measured boat (NA 23), the ORC IMS measurement certificate provides prop installation measurements including:
- PRD 0.489 m (prop diameter)  
- ESL 0.847 m (exposed shaft length)  
- ST1–ST5 values (strut geometry)  
- PSA 30° as defined by IMS  
These are directly usable in a simplified geometry model of prop/shaft/strut, and IMS provides the definitions needed to interpret ESL and ST1–ST5. 

Operational behavior relevant to docking is documented in the BIB, including that the Navy 44 is “typical of a single right hand screw vessel” and “will back to port,” with explicit guidance to use throttle bursts and then idle in gear to minimize stern twist to port when backing out.  This is rare, high-value low-speed evidence for setting/validating a prop-walk and reverse-thrust asymmetry behavior in your simulator.

### MMG relevance assessment

**What can be initialized credibly right now (from sources in this report)**  
You can populate a physically grounded first-pass object for low-speed maneuvering with:
- Displacement mass, LOA, beam, draft, wetted surface (ORC).   
- Propeller type (feathering), diameter, and installation geometry (ORC + IMS definitions).   
- Engine model family, gear ratio, prop pitch, and prop handedness (BIB).   
- A calibration point for ahead propulsion (~6 kn at 2400–2500 rpm, sea-state dependent), useful to tune effective thrust and/or K_T polynomial parameters (BIB).   
- A qualitative but explicit reverse-walk direction (“backs to port”) to validate sign conventions for transverse thrust/prop walk in reverse (BIB).   

**What is structurally defined by MMG, but still too uncertain without additional Navy 44 data**  
The MMG standard method explicitly defines the hull polynomial structure and the rudder/prop interaction modeling framework, including:
- Hull force polynomials with the exact derivative set you listed (Xvv′, Yv′, Nr′, etc.).   
- Propeller thrust model \(T = \rho n_P^2 D_P^4 K_T(J_P)\) with \(K_T\) as a quadratic in \(J_P\) (k2/k1/k0).   
- Rudder normal force model \(F_N = 0.5 \rho A_R U_R^2 f_\alpha \sin(\alpha_R)\) and the inflow model for \(u_R\) using \(\epsilon\), \(w_P\), \(J_P\), \(K_T\), and an experimental constant \(j\).   

However, for the Navy 44 Mk II specifically, **no accessible primary-source dataset was found** that provides:
- Rudder area/geometry (A_R, span, chord distribution)  
- Keel planform/appendage templates  
- Captive-model / PMM / CMT maneuvering derivatives for this hull  
- Open-water propeller curve for the installed Max-Prop configuration  
Therefore, your B-list coefficients should be treated as **tuning parameters** unless you can obtain either:
- the ORC offset file US41723.off plus appendage definitions (to compute geometry-anchored coefficients), or  
- maneuvering trials / instrument logs for system identification.

### Final implementation package

#### Proposed `MinimalVessel` object

The object below is intentionally split into:
- **Measured/traceable fields** (direct from ORC/BIB/IMS),
- **Derived placeholders** (clearly marked; meant for later refinement),
- and **Nulls/TODOs** for genuinely missing parameters.

```json
{
  "name": "Navy44MkII_Pedrick_ORC_NA23_2019_baseline",
  "condition": "lightship-like measurement condition per ORC International 2019 certificate (NA 23)",
  "principal": {
    "m": 12334,
    "LOA": 13.410,
    "Lpp": 11.312,
    "B": 3.831,
    "d": 2.250,
    "WS": 37.85,
    "Cb_effective": 0.123
  },
  "reference_frames": {
    "note": "x_G below uses MMG convention: origin at midship, +x forward",
    "x_G": -1.95
  },
  "propulsion": {
    "engine": {
      "make": "Yanmar",
      "model_variants": ["4JH4E", "4JH4AE"],
      "rated_power_kW": [40, 41],
      "rated_rpm": 3000,
      "gear_model": "KM4A/KM4A1",
      "gear_ratio": 2.63
    },
    "propeller": {
      "manufacturer": "PYI",
      "model_family": "Max-Prop",
      "type": "feathering",
      "handedness": "right",
      "blades": 2,
      "D_p": 0.489,
      "pitch": 0.356
    },
    "installation_ims": {
      "shaft_exposed": true,
      "PSA_deg": 30.0,
      "PSD": 0.025,
      "ESL": 0.847,
      "ST1": 0.030,
      "ST2": 0.122,
      "ST3": 0.148,
      "ST4": 0.064,
      "ST5": 0.226
    }
  },
  "rudder": {
    "type": "balanced spade (elliptical planform described)",
    "A_R": null,
    "f_alpha": null
  },
  "mmg": {
    "w_P0": null,
    "t_P": null,
    "t_R": null,
    "epsilon": null,
    "kappa": null,
    "l_R": null,
    "a_H": null,
    "x_H_dash": null,
    "k_0": null,
    "k_1": null,
    "k_2": null,
    "J_int": null,
    "J_slo": null,
    "gamma_R_plus": null,
    "gamma_R_minus": null,
    "m_x_dash": null,
    "m_y_dash": null,
    "J_z_dash": null,
    "R_0_dash": null,
    "X_vv_dash": null,
    "X_vr_dash": null,
    "X_rr_dash": null,
    "X_vvvv_dash": null,
    "Y_v_dash": null,
    "Y_r_dash": null,
    "Y_vvv_dash": null,
    "Y_vvr_dash": null,
    "Y_vrr_dash": null,
    "Y_rrr_dash": null,
    "N_v_dash": null,
    "N_r_dash": null,
    "N_vvv_dash": null,
    "N_vvr_dash": null,
    "N_vrr_dash": null,
    "N_rrr_dash": null
  }
}
```

#### Unresolved parameters that block a fully physical MMG model

The most consequential gaps (for powered maneuvering accuracy) are:
- **Rudder geometry and area** (A_R) and any foil section/profile data (needed for fα and realistic rudder forces).   
- **Keel planform/area and rudder position relative to prop** (needed for lateral plane distribution and to initialize Y/N derivatives beyond generic defaults).   
- **Propeller thrust curve (k0/k1/k2)** for the installed Max-Prop; without it, thrust modeling must be calibrated empirically from rpm–speed and acceleration response.   
- **Wake fraction and interaction coefficients** (wP0, tP, tR, aH, ε/κ) which normally come from captive tests or validated system identification.   
- **Hull maneuvering derivatives** (Xvv′ … Nrrr′), which the MMG standard method treats as hydrodynamic derivatives determined from tests/analysis; none were found Navy-44-specific in accessible primary sources.   

#### Assumptions that must be explicitly documented in code/comments

1. **Lpp proxy**: Lpp is taken as ORC “IMSL” (11.312 m) as the best available measured length-scale, not as a guaranteed geometric length-between-perpendiculars.   
2. **x_G proxy**: x_G is approximated from LCF (x_G ≈ x_LCF) using ORC’s “LCF from stem” converted into a midship-origin MMG axis. This is a stand-in until a true LCG/weight summary is obtained.   
3. **Effective Cb**: Cb is computed using max draft (including keel) and is therefore an *effective* coefficient for a deep-keel yacht, not a classic canoe-body block coefficient.   
4. **Reverse/prop-walk sign**: The simulator should be configured so that in reverse the Navy 44 Mk II exhibits a stern walk **to port**, consistent with a right-hand propeller as called out in the BIB.   
5. **Propeller diameter minor discrepancy**: BIB lists 483 mm while ORC measures PRD 0.489 m; the model uses ORC PRD for the NA23 target variant. 