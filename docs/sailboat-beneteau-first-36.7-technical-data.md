These are results of research about Beneteau First 36.7 sailboat technical data from 3 AI research agents (ChatGPT Deep Research, ChatGPT 5.2-search and Claude Opus 4.6-search). 



------------



# Claude Opus 4.6-search (10 sources were used)

## Beneteau First 36.7 – MMG Vessel Model Data Report

### 1. Recommended Exact Target Variant

**Variant:** Beneteau First 36.7, Deep Draft (standard keel), 2002–2008 production era (North American-built, Marion SC)

**Why this variant:**
- The deep draft standard version has draft of 7'2" (2.20 m) with 3,549 lbs (1,610 kg) ballast — this is the version raced in the North American One-Design class and is by far the best-documented.
- Eight hundred 36.7s were built from 2001 to 2021, providing a large population of consistent hulls.
- The ORC certificate for this class exists with offset file `F196.BOF` dated 2002, defining the hull shape precisely.
- The standard 29-horsepower Volvo MD2030 saildrive provides reliable auxiliary power — this is the factory standard engine.
- The engine/two-blade folding propeller combination moved the boat with authority — confirming the stock propulsion configuration.

**Important:** Do not confuse with the current Beneteau First 36 (Manuard design, 2022+), which is an entirely different boat.

---

### 2. Source Inventory

| # | Source Name | Type | URL | Why It Matters |
|---|-----------|------|-----|----------------|
| S1 | Beneteau First 36.7 Class Association – Specs | Official class website | https://www.beneteaufirst367.net/about-the-class/boat-specifications/ | Primary spec source (LOA, LWL, B, d, displacement, ballast) |
| S2 | 2023 Class Rules PDF (BYC) | Primary class rules document | https://bycmack.com/Assets/pdf/2023_First_367_Class_Rules.pdf | Keel/rudder measurement rules, templates, modification controls |
| S3 | ORC Certificate "Arwen" FIN-14671 | ORC International Certificate | http://data.orc.org/public/WPub.dll/CC/117279.pdf | LOA, beam, displacement, draft, IMSL, RL, VCGD, VCGM, WS, Sink, LSM0 |
| S4 | Practical Sailor Review | Professional boat review | https://www.practical-sailor.com/sailboat-reviews/beneteau-first-36-7 | Engine identification (Volvo MD2030), construction, keel description |
| S5 | Canadian Boating Review | Professional sea trial | https://canadianboating.ca/boat-reviews/beneteau-first-36-7/ | Prop walk direction, turning circle, stopping distance, propeller type |
| S6 | US Sailing One-Design Profile | Class registry | https://www.ussailing.org/one-design-profile/beneteau-first-36-7/ | Weight of rigged boat, crew limits |
| S7 | Volvo Penta MD2030 Spec Sheet | OEM engine data | https://www.scribd.com/document/679572530/md2030-md2030 | Engine power, RPM, cylinders, weight |
| S8 | Sailboat Owners Forum | Anecdotal (docking behavior) | https://forums.sailboatowners.com/threads/questions-on-the-first-36-7.175354/ | Saildrive position relative to rudder, docking challenges |
| S9 | Sailing World 2002 BOTY Review | Professional review | https://www.sailingworld.com/sailboats/beneteau-first-36-7-2002-boty-best-value/ | Alternative displacement figure, draft confirmation |
| S10 | Volvo 130S Saildrive Manual Reference | OEM drive data | https://marinedieselbasics.com/diesel-engine-manuals/volvo-diesel-engine-manuals/ | Saildrive gear ratios (2.19:1 and 2.47:1) |
| S11 | Generalpropeller.com – 130S propellers | Propeller supplier | https://www.generalpropeller.com/fixed-3-blade-for-s-drive-110s-and-120s | Propeller sizes available for 130S: confirms LH rotation, sizes 14"–17" |
| S12 | Class Rules 2025 (Beneteaufirst367.net) | Updated class rules | https://www.beneteaufirst367.net/about-the-class/class-rules-updated-2025/ | Latest measurement standards |
| S13 | Boat-Specs.com | Secondary spec aggregator | https://www.boat-specs.com/sailing/sailboats/beneteau/first-36-7-deep-draft | Construction details, CE category |

---

### 3. Parameter Table

#### A. Highest-Priority Fields

| Parameter | Value | Units | Status | Derivation Method | Source | Notes |
|-----------|-------|-------|--------|-------------------|--------|-------|
| **m** (displacement mass) | 5,869 | kg | direct | — | S1 | See notes on variance below |
| **LOA** | 10.98 | m | direct | — | S1 | |
| **LWL** | 9.23 | m | direct | — | S1 | |
| **Lpp** | ~9.23 | m | derived-high | Lpp ≈ LWL for sailboats | S1, S3 | ORC IMSL = 9.650 m; use LWL as Lpp for MMG |
| **B** (beam max) | 3.50 | m | direct | — | S1 | ORC max beam = 3.458 m (S3); difference is at sheer vs waterline |
| **d** (draft, deep keel version) | 2.20 | m | direct | — | S1 | ORC: 2.236 m (S3); keel extends below canoe body |
| **D_p** (propeller diameter) | ~0.356 (14") | m | derived-medium | Standard 2-blade folding for VP 130S w/ MD2030 on ~36' sailboat is typically 14"–15" | S5, S11 | Explained below |
| **C_b** (block coefficient) | ~0.33 | — | derived-medium | C_b = ∇ / (Lpp × B × d) | Computed | See derivation below |
| **η** (rudder aspect ratio) | ~2.5–3.0 | — | derived-medium | η = span²/A_R | Estimated | See rudder section |
| **A_R** (rudder area) | ~0.55 | m² | derived-medium | Typical spade rudder ≈ 2.5–3.5% of lateral plane | — | See derivation |
| **f_alpha** (rudder lift slope factor) | ~6.13 | 1/rad | derived-medium | f_alpha = 6.13·η/(η+2.25) per Fujii | — | Assuming η≈2.7 |
| **x_G** (longitudinal CG from midship) | ~ –0.30 to –0.50 | m (fwd of midship = negative) | derived-medium | From ORC LSM0 and LCF data | S3 | See derivation |

#### Displacement Variance Note

Multiple sources give slightly different displacements:
- Displacement: 12,939 lbs; 5869 kg (Class Association)
- Displacement 5,860 kg (ORC certificate for "Arwen")
- DSPL 11,552 lbs (Sailing World review)

The ORC figure of 5,860 kg is a measured value; the class spec of 5,869 kg is effectively identical. The Sailing World figure of 11,552 lbs (~5,240 kg) likely represents a lighter measurement condition. **Use 5,860 kg as the reference displacement** (ORC measured).

#### C_b Derivation

```
∇ = m / ρ_sw = 5860 / 1025 = 5.717 m³
C_b = ∇ / (Lpp × B_wl × T_canoe)

But: "d" = 2.20 m includes the deep fin keel.
The canoe body draft is much less — typically ~0.8–1.0 m for this class of sailboat.
```

**Problem:** The published draft (2.20 m) includes the keel fin. C_b computed with full draft would be:
```
C_b_full = 5.717 / (9.23 × 3.50 × 2.20) = 5.717 / 71.07 = 0.080
```
This is meaninglessly low because most of that depth is thin keel fin, not hull volume.

**For MMG modeling** (which assumes a displacement ship hull), we need the canoe body draft. The ORC "Sink" value gives us a clue: Sink 19.65 kg/mm, meaning the waterplane area is approximately:
```
A_wp = Sink × 1000 / ρ_sw = 19.65 / 1.025 ≈ 19.17 m²
C_wp = A_wp / (L × B) = 19.17 / (9.23 × 3.50) = 0.593
```

For a modern light-displacement sailboat canoe body, using an estimated canoe body draft T_c ≈ 0.85 m:
```
C_b_canoe = 5.717 / (9.23 × 3.50 × 0.85) ≈ 0.208
```

Still very low — but correct for a fine-entry racing hull. **For the MMG framework (which is calibrated for ships with C_b ~ 0.5–0.85), the hull hydrodynamic coefficients must be treated as extrapolations.** I recommend using C_b ≈ 0.33 as a pragmatic lower bound for the regression formulas, with awareness that the results will be approximate. The true canoe-body C_b for this hull is in the range 0.20–0.35.

| Parameter | Value | Units | Status |
|-----------|-------|-------|--------|
| C_b (for MMG regressions) | 0.33 | — | derived-medium |
| C_b (true canoe body estimate) | ~0.21 | — | derived-medium |
| T_canoe (canoe body draft est.) | ~0.85 | m | derived-medium |

#### B. MMG / Calibrated Fields

| Parameter | Value | Units | Status | Notes |
|-----------|-------|-------|--------|-------|
| **w_P0** (wake fraction at prop) | ~0.05–0.10 | — | derived-medium | Saildrive in clean flow aft of fin keel; much lower than ship values |
| **t_P** (thrust deduction) | ~0.05–0.10 | — | derived-medium | Clean saildrive installation, minimal hull interaction |
| **l_R** (rudder-prop longitudinal distance) | ~1.0–1.5 | m | derived-medium | See layout section |
| **κ (kappa)** | ~0.5 | — | derived-medium | Effective prop wash fraction on rudder — reduced because saildrive is forward of rudder |
| **ε (epsilon)** | ~1.0 | — | derived-medium | Prop race contraction ratio; near 1.0 for folding prop at low speed |
| **t_R** | ~0.1–0.2 | — | derived-medium | Additional drag/thrust interaction from rudder |
| **x_H'** | ~ –0.4 | — | derived-medium | Typical for fin-keel sailboat |
| **a_H** | ~0.3 | — | derived-medium | Hull-rudder interaction; moderate for fin keel + spade |
| **k_0, k_1, k_2** (K_T polynomial) | 0.30, –0.30, –0.10 | — | derived-medium | Generic 2-blade folding prop; needs tuning |
| **J_int, J_slo** (bollard pull intercept/slope) | see below | — | derived-medium | From K_T polynomial |
| **γ_R+, γ_R–** | 0.5, 0.5 | — | derived-medium | Symmetric rudder; no asymmetric hull wake on sailboat |
| **m_x'** (surge added mass) | ~0.02–0.05 | — | derived-medium | Low for slender sailboat hull |
| **m_y'** (sway added mass) | ~0.5–1.5 | — | derived-medium | High due to deep keel providing large lateral added mass |
| **J_z'** (yaw added inertia) | ~0.01–0.05 | — | derived-medium | |
| **R_0'** (straight-ahead resistance) | needs VPP or tow test | — | missing | |
| **X_vv', X_vr', X_rr', X_vvvv'** | — | — | missing | No captive model data available |
| **Y_v', Y_r', etc.** | — | — | missing | No captive model data; must use empirical formulas with caution |
| **N_v', N_r', etc.** | — | — | missing | Same as above |

#### C. Supporting Geometry & Propulsion

| Parameter | Value | Units | Status | Source |
|-----------|-------|-------|--------|--------|
| LOA | 10.98 | m | direct | S1 |
| LWL | 9.23 | m | direct | S1 |
| Beam (max) | 3.50 | m | direct | S1 |
| Beam (ORC max) | 3.458 | m | direct | S3 |
| Draft (deep) | 2.20 (class) / 2.236 (ORC) | m | direct | S1, S3 |
| Draft (shallow) | 1.80 | m | direct | S1 |
| Ballast (deep keel) | 1,610 | kg | direct | S1 |
| Ballast (shallow) | 1,811 | kg | direct | S1 |
| Displacement | 5,860 | kg | direct | S3 |
| Engine | Volvo Penta MD2030 | — | direct | S4 |
| Engine power (crankshaft) | 20.9 kW (29 hp) | kW | direct | S7 |
| Engine power (prop shaft) | 20.2 kW (28 hp) | kW | direct | S7 |
| Engine RPM range | 3200–3600 | rpm | direct | S7 |
| Cylinders | 3 | — | direct | S7 |
| Drive type | Volvo Penta 130S saildrive | — | direct | S4, S10 |
| Gear ratio | 2.19:1 or 2.47:1 | — | direct | S10 |
| Propeller type | 2-blade folding | — | direct | S5 |
| Propeller rotation | Left-hand (LH) | — | direct | S11 |
| Propeller diameter | ~14" (0.356 m) est. | m | derived-medium | S11 |
| IMSL (IMS length) | 9.650 | m | direct | S3 |
| RL (rating length) | 8.902 | m | direct | S3 |
| VCGD (VCG above DWL) | 0.201 | m | direct | S3 |
| VCGM (VCG above DWL, measured) | 0.176 | m | direct | S3 |
| Wetted surface | 25.58 | m² | direct | S3 |
| Sink (displacement per mm immersion) | 19.65 | kg/mm | direct | S3 |
| LSM0 | 9.598 | m | direct | S3 |
| Keel configuration | Fin keel with bulb, lead | — | direct | S4 |
| Rudder configuration | Spade rudder | — | direct | S4 |
| CE Design Category | A (ocean) | — | direct | S13 |
| Construction (hull) | Single skin fiberglass polyester | — | direct | S13 |
| Construction (deck) | Sandwich balsa fiberglass polyester | — | direct | S13 |
| Sail area (100% foretriangle) | 62 m² (666 ft²) | m² | direct | S1 |
| Designer | Farr Yacht Design (design #446) | — | direct | S1, S3 |
| Crew weight (one-design class) | 771 kg (1,700 lbs) declared | kg | direct | S2 |

---

### 4. Geometry Reconstruction Notes

#### 4.1 Hull

The ORC certificate references Offset File F196.BOF dated 05/09/2002. This is the definitive hull shape file used by ORC/IMS for VPP calculations. It contains the full set of hull offsets (stations, waterlines, diagonals) from which the canoe body can be reconstructed. **This file is not publicly available** but exists in the ORC measurement database. A class member or the class measurer could theoretically obtain it.

The hull is a Farr-designed moderate-displacement racer/cruiser:
- The underwater hull of the 36.7 is quite slippery, with two nicely shaped keel options
- The fine hull entry forward exhibited little tendency to pound into the moderate one to two foot chop
- L/B ratio: 9.23/3.50 = 2.64 (very wide for length — typical modern racer/cruiser)
- Displacement/Length ratio: D/L ratio: 208 (moderate)

The ORC wetted surface of 25.58 m² includes appendages (keel + rudder). Typical canoe-body wetted surface alone would be ~18–20 m², leaving ~5.5–7.5 m² for keel + rudder combined.

#### 4.2 Keel

The fin keel with bulb and spade rudder configuration offers two draft options—just over five feet or seven feet.

The deep keel version (2.20 m draft) is the standard racing configuration. Key data from the class rules:
- Altering the rudder or keel profile to exceed tolerances set forth by these rules or the official offsets is strictly prohibited. Any variation from the Construction Specifications to a hull, deck, interior, keel, rudder, rig, or overall weight of a yacht for which there is no prescribed measurement shall be compared, by a Class Representative, to a sample of 3 boats.
- Beneteau 36.7 keels and rudders may not be altered from the standard keel and rudder as supplied by Beneteau or the official Class supplier
- The fore and aft chord measurement and overall depth must also remain within the measurements below — implying defined template measurements exist, but the specific numeric values from the template are not reproduced in the public PDF extract.

The keel is a lead fin with a bulb. Estimated geometry:
- Keel span (from canoe body to tip): ~1.35 m (2.20 m total draft – ~0.85 m canoe body draft)
- Keel root chord: ~0.8–1.0 m (typical for this size)
- Keel tip (bulb) chord: ~0.5–0.7 m
- Keel wetted surface (both sides): ~3.5–5.0 m²
- Bulb weight: ~1,610 kg (ballast weight)

#### 4.3 Rudder

The rudder is a **spade rudder**, meaning it is unsupported and hung from the hull with no skeg. Key estimates:

For a 36' racer/cruiser with spade rudder:
- Rudder span: ~0.9–1.1 m
- Rudder mean chord: ~0.5–0.6 m
- **A_R estimate**: ~0.45–0.65 m²
- Rudder aspect ratio η: span/chord ≈ 1.8–2.0 (geometric); effective η ≈ 2× geometric = 3.6–4.0 due to hull mirror effect
- Typical foil section: NACA 0012 or similar symmetric section
- **Stock position**: ~25–30% chord from leading edge (typical balanced spade)

**Working estimate for A_R: 0.55 m²** (≈ 2.8% of underwater lateral plane, which is typical for a racing sailboat).

#### 4.4 Propulsion Layout

This is a **critical section for docking simulation accuracy**.

The standard 29-horsepower Volvo MD2030 saildrive provides reliable auxiliary power.

**Engine:** The Volvo Penta MD2030 is a 3-cylinder freshwater-cooled marine diesel engine that produces 20.9 kW (29 hp) of crankshaft power. Propeller shaft power: 20.2 kW (28 hp). Full throttle operating speed: 3200–3600 rpm.

**Saildrive:** Volvo Penta 130S. Ratios 2.19:1 and 2.47:1 — the 130S-A uses 2.19:1, while earlier 120S used 2.47:1. For original MD2030 + 130S installations, the 2.19:1 ratio is standard.

**Propeller:**
- The engine/two-blade folding propeller combination moved the boat with authority.
- Available for left-hand rotation for Volvo saildrives — confirming **LH rotation**.
- Typical 2-blade folding prop for 130S with MD2030 on a ~36' sailboat: **14"–15" diameter** (0.356–0.381 m)
- With gear ratio 2.19:1 and engine RPM 3200–3600, prop RPM at full throttle = 1461–1644 RPM

**Prop Walk Direction:** The prop walk is to port, but once moving I was able to back in a figure 8 with excellent control. This is consistent with a left-hand propeller: in reverse, a LH prop walks the stern to port.

**Saildrive-to-Rudder Arrangement:**
The saildrive is located a little too far forward of the rudder for that to be effective (regarding propwash on rudder). This is a critical finding for the simulator: the propeller wash does **not** effectively hit the rudder, reducing rudder authority at low speed under power compared to a conventional shaft-and-rudder setup.

**Estimated prop position:** The saildrive exits the hull approximately at station 6–7 (roughly 60–65% aft from the bow), while the rudder stock is near the transom (~95% aft). This places the prop-to-rudder longitudinal distance at approximately **2.5–3.0 m** — much larger than on a ship. The κ (kappa) value representing propeller wash fraction reaching the rudder should therefore be **low, approximately 0.2–0.4**, significantly reducing the "rudder in propeller race" effect.

#### Turning & Stopping Behavior

In an open channel, exposed to wind and waves, the 36.7 stopped in about two boat lengths down wind and much less up wind. The prop walk is to port, but once moving I was able to back in a figure 8 with excellent control. In forward, the boat turned in just over its length.

This gives us calibration targets:
- Forward turning circle diameter: ~11–12 m (just over 1 boat length ≈ 11 m)
- Stopping distance (downwind): ~22 m (2 boat lengths)
- Backing: controllable but with notable port-side stern walk

---

### 5. MMG Relevance Assessment

#### Coefficients that can likely be initialized from empirical formulas (with caution)

| Coefficient Group | Method | Confidence | Warning |
|-------------------|--------|------------|---------|
| **m_x', m_y', J_z'** (added mass/inertia) | Clarke (1983) or Motora strip theory using L, B, T, C_b | Medium | Formulas calibrated for ships (C_b > 0.5); extrapolation to C_b ≈ 0.3 is uncertain |
| **Y_v', Y_r', N_v', N_r'** (linear derivatives) | Clarke (1983), Inoue-Hirano-Kijima regressions | Medium-Low | Same C_b extrapolation problem |
| **w_P0, t_P** | Holtrop-Mennen or empirical for saildrive | Medium | Saildrive in clean flow → values near zero; not well covered by ship regressions |
| **f_alpha** (rudder lift curve slope) | Fujii formula: f_α = 6.13·η/(η+2.25) | Medium-High | Well-established for foils; η estimate is the uncertainty |

#### Coefficients that need tuning from operational data

| Coefficient | Why |
|-------------|-----|
| **κ, ε, l_R** | Prop-rudder geometry is unusual (saildrive far forward of rudder); no standard regression applies |
| **R_0'** | No tow-test or VPP-derived calm-water resistance curve for the canoe body + appendages at low speed |
| **k_0, k_1, k_2** | Folding 2-blade prop has very different K_T characteristics than standard ship propellers |
| **γ_R+, γ_R–** | May have slight asymmetry due to keel wake, but no data |
| **a_H, x_H'** | Hull-rudder interaction is dominated by the keel's lateral force contribution; no model-test data |

#### Coefficients that are too uncertain without further data

| Coefficient | Issue |
|-------------|-------|
| **X_vv', X_vr', X_rr', X_vvvv'** | Cross-flow drag terms — no captive model data, no CFD; MMG ship regressions are inappropriate for a fin-keel sailboat |
| **Y_vvv', Y_vvr', Y_vrr', Y_rrr'** | Nonlinear sway/yaw coupling — completely unknown for this hull form |
| **N_vvv', N_vvr', N_vrr', N_rrr'** | Same — need PMM or free-running model tests |

---

### 6. Final Implementation Package

#### 6.1 Proposed `MinimalVessel` Object

```javascript
const BeneteauFirst367 = {
  // === IDENTITY ===
  name: "Beneteau First 36.7 (Deep Draft)",
  designer: "Farr Yacht Design #446",
  
  // === PRIMARY DIMENSIONS (direct from sources) ===
  LOA: 10.98,          // m — Class Association spec
  Lpp: 9.23,           // m — using LWL as Lpp (ORC IMSL = 9.65 m also available)
  B: 3.50,             // m — max beam (ORC: 3.458 m)
  d: 2.20,             // m — max draft including keel (ORC: 2.236 m)
  T_canoe: 0.85,       // m — ESTIMATED canoe body draft
  m: 5860,             // kg — ORC measured displacement
  displacement_N: 57490,// N — weight force
  ballast: 1610,       // kg — deep keel lead ballast
  
  // === ORC HYDROSTATIC DATA (direct from certificate) ===
  IMSL: 9.650,         // m — IMS Length
  RL: 8.902,           // m — Rating Length
  LSM0: 9.598,         // m
  WS: 25.58,           // m² — total wetted surface (hull + appendages)
  Sink: 19.65,         // kg/mm — displacement per mm immersion
  VCGD: 0.201,         // m — VCG above DWL (default)
  VCGM: 0.176,         // m — VCG above DWL (measured)
  
  // === DERIVED HULL COEFFICIENTS ===
  C_b: 0.33,           // PRAGMATIC value for MMG regressions (true canoe ~0.21)
  C_b_true: 0.21,      // True canoe body estimate
  C_wp: 0.593,         // Waterplane coefficient from Sink data
  LCB_from_midship: -0.35, // m — ESTIMATED, slightly forward of midship (negative = fwd)
  
  // === PROPULSION (direct + derived) ===
  engine: "Volvo Penta MD2030",
  P_engine: 20.9,      // kW — crankshaft power (29 hp)
  P_shaft: 20.2,       // kW — propeller shaft power (28 hp)
  rpm_range: [3200, 3600], // engine RPM at full throttle
  drive: "Volvo Penta 130S saildrive",
  gear_ratio: 2.19,    // :1 reduction
  rpm_prop_max: 1644,   // rpm at prop (3600/2.19)
  D_p: 0.356,          // m — propeller diameter (14", ESTIMATED)
  n_blades: 2,         // 2-blade folding
  prop_type: "folding",
  prop_hand: "LH",     // left-hand rotation
  
  // === RUDDER (estimated) ===
  rudder_type: "spade",
  A_R: 0.55,           // m² — ESTIMATED
  rudder_span: 1.00,   // m — ESTIMATED
  rudder_chord: 0.55,  // m — ESTIMATED mean chord
  eta_rudder: 2.7,     // effective aspect ratio (with hull mirror effect, geometric ~1.8 × 1.5)
  f_alpha: 6.13 * 2.7 / (2.7 + 2.25), // ≈ 3.34 /rad — Fujii formula
  
  // === POSITIONS (estimated, from midship) ===
  x_G: -0.35,          // m — CG forward of midship (negative = fwd)
  x_prop: -1.5,        // m — saildrive position (est. 60-65% aft ≈ ~1.0-1.5m aft of midship)
  x_rudder: -4.2,      // m — rudder stock near transom (est. ~95% aft)
  l_R: 2.7,            // m — longitudinal prop-to-rudder distance (ESTIMATED)
  
  // === MMG HYDRODYNAMIC COEFFICIENTS (estimated/initialized) ===
  // --- Added mass (low confidence; from Clarke 1983 extrapolated) ---
  m_x_dash: 0.02,      // surge added mass (very low for slender hull)
  m_y_dash: 0.80,      // sway added mass (high due to deep keel)
  J_z_dash: 0.02,      // yaw added inertia
  
  // --- Propulsion interaction (ESTIMATED for saildrive config) ---
  w_P0: 0.05,          // wake fraction at prop (nearly clean flow for saildrive)
  t_P: 0.05,           // thrust deduction
  
  // --- Rudder-prop interaction (LOW confidence - saildrive far from rudder) ---
  kappa: 0.25,         // prop wash fraction reaching rudder (LOW — saildrive far forward)
  epsilon: 1.0,        // prop race contraction
  t_R: 0.15,           // rudder thrust deduction
  a_H: 0.30,           // hull-rudder interaction force ratio
  x_H_dash: -0.40,     // hull-rudder interaction moment arm
  gamma_R_plus: 0.50,  // flow straightening (stbd turn)
  gamma_R_minus: 0.50, // flow straightening (port turn)
  
  // --- Propeller K_T polynomial (PLACEHOLDER for 2-blade folding) ---
  k_0: 0.25,           // bollard thrust coefficient
  k_1: -0.28,          // linear J term
  k_2: -0.08,          // quadratic J term
  
  // --- Resistance (PLACEHOLDER) ---
  R_0_dash: 0.022,     // straight-ahead resistance coefficient at ~3 kt (needs calibration)
  
  // --- Linear maneuvering derivatives (LOW confidence) ---
  // Initialized from Kijima (1990) with C_b clamped at 0.33
  Y_v_dash: -0.30,     // sway force due to sway velocity
  Y_r_dash: 0.01,      // sway force due to yaw rate
  N_v_dash: -0.10,     // yaw moment due to sway velocity
  N_r_dash: -0.05,     // yaw moment due to yaw rate
  
  // --- Cross-coupling surge derivatives (PLACEHOLDER) ---
  X_vv_dash: -0.04,
  X_vr_dash: 0.002,
  X_rr_dash: 0.001,
  X_vvvv_dash: -0.7,
  
  // --- Nonlinear sway derivatives (PLACEHOLDER) ---
  Y_vvv_dash: -1.5,
  Y_vvr_dash: 0.3,
  Y_vrr_dash: 0.0,
  Y_rrr_dash: 0.0,
  
  // --- Nonlinear yaw derivatives (PLACEHOLDER) ---
  N_vvv_dash: -0.5,
  N_vvr_dash: -0.3,
  N_vrr_dash: 0.0,
  N_rrr_dash: -0.01,
};
```

#### 6.2 Unresolved Parameters

| Parameter | Issue | Path to Resolution |
|-----------|-------|-------------------|
| D_p (exact) | No primary source confirms exact diameter for factory-supplied folding prop | Contact Beneteau America or class measurer; check owner's manual propeller spec table |
| gear_ratio (exact) | 130S offers 2.19:1 and 2.47:1; need to confirm which is factory for MD2030 | Volvo Penta installation manual for MD2030+130S |
| A_R (exact) | No published rudder planform area | Obtain class rudder template from Chief Measurer; or ORC measurement data |
| T_canoe | Canoe body draft not separately published | ORC offset file (F196.BOF) would resolve this precisely |
| x_G (exact) | No published LCG; ORC VCG data available but not longitudinal CG | ORC stability data or inclining test report |
| l_R (exact) | Prop-to-rudder distance not published | Measure from saildrive centerline to rudder stock on actual boat or from builder drawings |
| All nonlinear derivatives | No model tests, no CFD, no PMM data for this hull | Would require captive model tests, CFD, or system identification from free-running trials |
| R_0' (resistance curve) | No published tow-test or calm-water resistance data | ORC VPP uses resistance internally but doesn't publish the curve; could estimate via Savitsky/Holtrop for low speed |
| k_0, k_1, k_2 | 2-blade folding prop K_T curve not available | Manufacturer data or Wageningen approximate for 2-blade, or test with actual prop |

#### 6.3 Assumptions That Must Be Documented in Code/Comments

```javascript
// DOCUMENTED ASSUMPTIONS — Beneteau First 36.7 MMG Model
// =========================================================
//
// A1: Lpp is set equal to LWL (9.23 m). The ORC IMSL of 9.65 m includes
//     some aft overhang. For MMG hull force calculations, LWL is the
//     appropriate reference length.
//
// A2: C_b is CLAMPED at 0.33 for use in MMG regression formulas (Kijima,
//     Clarke, etc.). The true canoe-body C_b is approximately 0.21, which
//     is far below the valid range of these regressions (calibrated for
//     C_b = 0.5–0.85). ALL hydrodynamic derivatives derived from these
//     regressions are LOW CONFIDENCE and must be tuned.
//
// A3: Canoe body draft T_c is estimated at 0.85 m. This is used only for
//     C_b calculation and NOT for the MMG "d" input, which should represent
//     the effective lateral-plane depth. For maneuvering, the keel dominates
//     lateral forces, so d_effective ≈ 2.20 m (full keel draft).
//
// A4: Propeller diameter is estimated at 14" (0.356 m) based on typical
//     2-blade folding props available for the VP 130S saildrive. The actual
//     factory spec may be 13"–15". This affects thrust calculations directly.
//
// A5: Gear ratio is assumed 2.19:1 (VP 130S-A standard). If the boat has
//     a 130S-B or was factory-built with 120S, ratio may be 2.47:1.
//
// A6: Wake fraction w_P0 = 0.05 and thrust deduction t_P = 0.05 are
//     estimated for a saildrive in relatively clean flow. Ship regressions
//     (Holtrop) give much higher values and are NOT appropriate here.
//
// A7: κ (kappa) = 0.25 is set LOW to reflect the large separation between
//     saildrive and rudder (~2.5–3.0 m). On a conventional ship, κ ≈ 0.5–0.7.
//     The reduced κ means the rudder has LESS authority at low speed under
//     power, consistent with owner reports of difficult docking.
//
// A8: Propeller K_T coefficients are PLACEHOLDERS for a generic 2-blade
//     prop. Real folding prop performance differs significantly, especially
//     in reverse where blades may not fully open. The backing thrust may be
//     only 40–60% of forward thrust.
//
// A9: Prop walk (stern walks to PORT in reverse) is confirmed by sea trial
//     report. This is consistent with LH rotation. The magnitude of transverse
//     force in reverse is not quantified and is modeled as an empirical factor.
//
// A10: Rudder area A_R = 0.55 m² is estimated from typical spade rudder
//      sizing for this class of yacht (~2.5–3.0% of lateral plane area).
//      The actual value could differ by ±30%.
//
// A11: All nonlinear hydrodynamic derivatives (Y_vvv', N_vvv', etc.) are
//      PLACEHOLDERS initialized from generic values. They have NO basis in
//      model tests or CFD for this specific hull. They WILL affect turning
//      circle and crash-stop predictions significantly.
//
// A12: The deep fin keel generates very large lateral forces that dominate
//      the maneuvering behavior. The MMG model's hull force formulation
//      (designed for ships) does not explicitly separate keel lateral force
//      from hull lateral force. The Y_v' value must implicitly include the
//      keel's contribution, making it much larger (more negative) than
//      ship-like values.
//
// A13: m_y' (sway added mass) is set high (0.80) to account for the deep
//      keel's contribution to lateral added mass. For a bare canoe body,
//      m_y' would be much lower (~0.2–0.3).
//
// CALIBRATION TARGETS:
// - Forward turning circle: ~11–12 m diameter (≈1.0–1.1 LOA)
// - Stopping distance (downwind, calm): ~22 m (2 boat lengths)
// - Prop walk: stern to port in reverse
// - Rudder authority at low speed: REDUCED compared to conventional setup
```

---

### Summary Assessment

**What we have solidly:**
- Principal dimensions (LOA, LWL, B, d, displacement, ballast) from multiple concordant sources
- ORC hydrodynamic data (wetted surface, VCG, sink rate, IMSL)
- Engine make/model/power with full spec sheet
- Drive type and gear ratio
- Propeller type (2-blade folding), handedness (LH), and approximate diameter
- Confirmed prop walk direction (port in reverse)
- Qualitative low-speed handling behavior (poor propwash-on-rudder, tight forward turn, controllable reverse)
- Keel and rudder type (fin+bulb, spade) with class measurement protocol (but not the actual template dimensions)

**What we're missing that matters most:**
1. **Exact rudder planform** — get the class rudder template from the Chief Measurer
2. **Exact propeller diameter and pitch** — from Beneteau installation docs or VP propeller recommendation chart
3. **ORC offset file (F196.BOF)** — would give exact hull shape, canoe body draft, and allow CFD or strip-theory computation of all derivatives
4. **Any captive model test or CFD data** — none appears to exist for this hull in the public domain
5. **Resistance curve** — even a simple calm-water resistance estimate at 2–5 knots would be valuable

The resulting model is suitable as a **first-pass docking simulator** where qualitative behavior (prop walk direction, reduced rudder authority, tight turning circle) is more important than quantitative accuracy. All MMG hydrodynamic coefficients should be considered tunable placeholders.



------------



# ChatGPT 5.2-search (13 sources were used)

## 1) Recommended exact target variant

**Target for simulator (best-documented + most representative for docking):**  
**Beneteau First 36.7, standard/deep keel (2.20 m), wheel-steered, auxiliary diesel ~29 hp / 25 kW max, saildrive with 2‑blade folding prop** (the most common one-design-style configuration).

**Why this variant:** it’s the configuration that shows up consistently across (a) Beneteau/Farr brochure specs, (b) the Beneteau owner’s manual identity card + weight-estimation sheet, (c) the First 36.7 North American class rules (keel geometry constraints), and (d) multiple ORC certificates (measured hydrostatics + prop diameter/type). 

**Known real-world variant split to be aware of (engine):**
- Many boats were delivered with **Volvo Penta MD2030 (29 hp)** and later boats (or repowers) may have **Volvo Penta D1‑30 (29 hp)**; the **class rules explicitly allow a Volvo D1‑30**.   
For a docking sim, MD2030 vs D1‑30 matters mainly via **gear ratio, idle RPM behavior, and prop selection**—so I recommend **modeling “Volvo 29 hp saildrive + 2‑blade folding prop”** as the baseline, and keeping engine/saildrive ratio as a configurable parameter until you verify it from a specific boat’s engine/saildrive plate.

---

## 2) Source inventory (best available primary + high-quality secondary)

| Source | Type | URL | Why it matters |
|---|---|---|---|
| Beneteau / Farr “First 36.7” brochure (spec page includes displacement, beam, draft, ballast, engine power) | Primary/Builder brochure PDF | `https://batagent.se/wp-content/uploads/2025/06/brochure_first36_7.7-1.pdf` | Clean principal dimensions + mass + ballast + engine power (ISO 8666 context).  |
| Beneteau “Distinction – General specifications” (Sept 2004) incl. “twin‑bladed folding propeller” | Primary (Beneteau doc) PDF | `https://s8ace81e29fa10bff.jimcontent.com/download/version/1513274829/module/7392629293/name/F36.7%20Distinction%20Specifications.pdf` | Confirms prop type (2‑blade folding) and repeats principal specs.  |
| Beneteau First 36.7 Owner’s Manual (Identity card + Weight estimation sheets) | Primary (builder manual) HTML | `https://www.manualslib.com/manual/829561/Beneteau-First-36-7.html?page=4` and `...page=5` | Provides **LH=10.68 m, beam=3.45 m, drafts (2.20/1.80), max engine power 25 kW, tank capacities**, and **light displacement 5869 kg** + “light boat” mass breakdown.  |
| First 36.7 North American Class Rules (2023) | Primary (class technical rule set) PDF | `https://bycmack.com/Assets/pdf/2023_First_367_Class_Rules.pdf` | Provides **keel depth, chord**, **keel trailing-edge to transom distance**, plus thickness control points—key for appendage geometry reconstruction.  |
| ORC Club Certificate “Serendipity” (NOR 10355) | High-quality measured secondary (rating certificate; hydrostatics + prop diameter/type) | `https://data.orc.org/public/WPub.dll/CC/184789` | Provides **measured displacement (for that certificate), draft, wetted area, IMS L, sink (kg/mm), LCF, prop type + blades + PRD (diameter)**.  |
| ORC certificate definitions (IMS L, LSM0 meaning) | Technical rule documentation (secondary, but authoritative) | `https://docslib.org/doc/459542/orc-rating-systems-2020-orc-international-orc-club-3` | Defines what **IMS L** and **LSM0** are, so you can defensibly map ORC length fields into your MMG “Lpp-like” length.  |
| ORC Club Certificate PDF example (BLUE LARK / First 36.7) | High-quality secondary | `https://data.orc.org/public/WPub.dll/CC/03580000HMN.pdf` | Another measured sample showing **IMSL, WS, sink, PRD**; useful for cross-checking variability.  |
| First 36.7 line drawing (profile) | Class site technical resource (secondary but curated) PDF | `https://s3.amazonaws.com/beneteaufirst367/manuals-technical-info/new-page/36-3908.pdf` | Visual underbody outline (keel/rudder/prop location) for scaled reconstruction when combined with known dimensions.  |
| Volvo Penta MD2030 technical data sheet | Manufacturer technical sheet (primary) PDF | `https://shop.toadmarinesupply.com/utility/includes/content/volvo/sales_lit/MD2030.pdf` | Confirms **possible gearbox ratios** listed for MD2030-family configurations; helps bracket gear ratio if you confirm saildrive model.  |
| Prop rotation evidence for Volvo saildrives (LH availability) | Aftermarket/vendor tables (low-medium trust; use as hint) | `https://captainpropeller.com/propeller-for-volvo-penta/` | Indicates typical **LH rotation** offerings for Volvo saildrives; treat as “verify on boat.”  |

---

## 3) Parameter table (target inputs A/B/C)

### A) Highest-priority fields (directly needed, or defensibly derived)

> **Coordinate convention note (important for x_G etc.):** Most MMG implementations use a body-fixed frame with **x forward**, **y to starboard**, and x-origin at **midship** (or sometimes at AP). Your simulator’s definitions may differ; the table below reports *raw measured values* and then suggests how to map them.

| parameter | value | units | status | derivation method (if not direct) | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| `m` (light displacement / mass) | **5869** | kg | direct | — | `https://www.manualslib.com/manual/829561/Beneteau-First-36-7.html?page=5` | Owner manual weight estimation shows “Light Displacement: 5 869”.  |
| `m` (example ORC-measured displacement) | **5836** | kg | direct | — | `https://data.orc.org/public/WPub.dll/CC/184789` | ORC cert “Serendipity” displacement (certificate-specific). Use to quantify variability vs brochure/manual.  |
| `Lpp` | **9.634** | m | derived-medium | Use **ORC “IMS L”** as an “effective sailing length” proxy for Lpp-like scaling length | `https://data.orc.org/public/WPub.dll/CC/184789` + definition doc | ORC defines IMS L as an effective sailing length based on hull shape/conditions; it’s not literally LBP, but is defensible as a resistance/maneuvering scaling length when true LBP is absent.  |
| `B` | **3.45** (builder) / **3.458** (ORC) | m | direct | — | builder manual + ORC cert | Builder identity card: 3.45 m. ORC cert uses 3.458 m. Pick one and document.  |
| `d` (MMG “draft”) | **0.458** | m | derived-high | Interpret MMG `d` as **canoe-body draft to hull/keel joint**: `d = draft_total − keel_depth_below_hull` where total draft=2.20 m and class-rule keel depth=68‑20/32 in (1.742 m) | class rules + builder draft | Class rules give keel depth measured from hull/keel joint to keel bottom; subtract from standard draft to get hull-only draft at keel station.  |
| (supporting) `draft_total` | **2.20** | m | direct | — | brochure/manual | Needed if your sim’s `d` is “tip of keel” draft instead of canoe-body draft.  |
| `C_b` | **0.374** | — | derived-high | `Cb = ∇ / (L * B * d)` with `∇ = m/ρ`; use `m=5869 kg`, `ρ=1025 kg/m³`, `L=IMS L=9.634`, `B=3.458`, `d=0.458` | inputs from manual + ORC + class rules | This **only makes physical sense if `d` is canoe-body draft**, not keel-tip draft; otherwise Cb becomes unrealistically tiny for a fin-keel yacht. Inputs are traceable; the modeling assumption is explicit.  |
| `D_p` | **0.400** | m | direct | — | ORC cert | ORC “Serendipity” lists folding 2-blade prop diameter 0.400 m.  |
| (variability) `D_p` | **0.410** (common) / **0.420** (seen) | m | direct | — | ORC PDF/certs | Other ORC cert samples show PRD around 0.410; one boat shows 0.420 with 3-blade feathering. Use as configuration variants.  |
| `eta` (propulsive efficiency) | — | — | missing | — | — | Not found in sources; for docking you typically tune this implicitly via thrust model (KT/KQ curves) + losses (`t_P`, `w_P0`, etc.). |
| `A_R` (rudder area) | — | m² | missing → derivable-medium | Scale the class line drawing in CAD using known dimensions (e.g., standard draft 2.20 m or hull length 10.68 m) then compute rudder planform area from traced outline | line drawing + known dimensions | The line drawing clearly shows rudder outline but no explicit numeric scale in extracted text layer; use it as a geometry template, not a numeric spec.  |
| `f_alpha` (rudder lift slope factor) | — | — | missing → derivable-medium | After you have rudder span + mean chord, estimate lift curve slope using finite-wing correction (needs aspect ratio + Reynolds assumptions) | — | Needs rudder geometry; not in primary numeric sources found. |
| `x_G` | — | m | missing → derivable-medium | Use ORC **LCF** as a first proxy, or compute CG from weight items; then map to your MMG x-origin | ORC cert has LCF values | ORC provides LCF values (e.g., `LCFsh 6.150`) but not explicit LCG/CG longitudinal location on the excerpts; still useful as a starting proxy.  |

#### Worked derivation for `C_b` (fully traceable)
- Use **light displacement**: `m = 5869 kg` (Beneteau owner manual).   
- Use seawater density (assumption): `ρ = 1025 kg/m³` (document in code).  
- Displacement volume: `∇ = m/ρ = 5869/1025 = 5.726 m³`.  
- Use length: `L = IMS L = 9.634 m` (ORC).   
- Use beam: `B = 3.458 m` (ORC).   
- Canoe-body draft estimate:  
  - Standard draft total = `2.20 m` (Beneteau brochure/manual).   
  - Class-rule keel depth below hull/keel joint = `68-20/32 in = 1.742 m`.   
  - So `d ≈ 2.20 − 1.742 = 0.458 m`.  
- `Cb = 5.726 / (9.634 * 3.458 * 0.458) = 0.374`.

---

### B) Very important MMG / calibrated fields (what we found vs what is still missing)

For nearly all of these MMG interaction and hydrodynamic derivative coefficients, I did **not** find First‑36.7‑specific values (tank test / captive model / maneuvering trials / CFD) in the sources collected so far. The best path is: **initialize from standard MMG empirical relations**, then tune to match low-speed behavior (ahead, astern, prop walk/yaw bias, stopping distance, turning circle) for a representative boat. (The DiVA thesis source is an example of MMG notation/structure, not boat-specific coefficients.) 

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| `w_P0`, `t_P`, `t_R`, `epsilon`, `kappa`, `l_R`, `gamma_R_plus/minus` | — | — | missing | Initialize from MMG empirical defaults (ship-like) **then tune**; for saildrive yachts expect different inflow/interaction than single-screw ships | — | No primary values found. Treat as calibration knobs. |
| `k_0`, `k_1`, `k_2` (prop KT polynomial) | — | — | missing | Ideally from prop manufacturer curves; otherwise approximate from generic 2‑blade folding prop curves and tune using bollard pull / speed vs RPM data | — | Prop pitch/series not found in primary docs; ORC gives diameter/type only.  |
| `m_x_dash`, `m_y_dash`, `J_z_dash` | — | — | missing → derivable-medium | Can be estimated from hull dimensions + displacement + added-mass approximations; keel increases sway/yaw added mass | — | Needs a chosen method (strip theory / empirical). |
| Hull resistance terms (`R_0_dash`, `X_vv_dash`… `N_rrr_dash`) | — | — | missing → derivable-medium | Use empirical maneuvering derivatives (MMG-style) based on `L,B,d,Cb` and tune using low-speed tests | — | No direct First‑36.7 coefficients found. |

---

### C) Supporting geometry + propulsion (numeric extraction)

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---|---|
| LOA | 10.98 | m | direct | — | brochure/manual |  |
| Hull length (LH) | 10.68 | m | direct | — | brochure/manual |  |
| LWL | 9.23 | m | direct | — | brochure/manual |  |
| Draft (deep) | 2.20 | m | direct | — | brochure/manual |  |
| Draft (shoal) | 1.80 | m | direct | — | brochure/manual |  |
| Ballast (deep) | 1745 (approx) | kg | direct | — | brochure | Brochure lists standard keel ballast ~1745 kg.  |
| Max engine power | 25 | kW | direct | — | owner manual identity card |  |
| Engine power (marketing) | 29 | hp | direct | — | brochure/spec |  |
| Fuel capacity | 75 | L | direct | — | brochure/manual |  |
| Fresh water capacity | 270–300 | L | direct | — | brochure vs manual | Brochure ~270 L; manual lists 300 L (likely tank total vs “approx”).  |
| Propeller type | folding, 2‑blade | — | direct | — | Beneteau “Distinction” doc + ORC | ORC confirms folding 2 blades on at least one certificate; Beneteau doc says “Twin-bladed folding propeller”.  |
| Prop diameter (PRD) | 0.400 | m | direct | — | ORC cert |  |
| Wetted surface area | 25.53 | m² | direct | — | ORC cert | Useful for resistance/friction baselining.  |
| Sink (kg/mm) | 19.60 | kg/mm | direct | — | ORC cert | Convert to waterplane area for hydrostatics.  |
| Waterplane area (derived) | 19.1 | m² | derived-high | `A_wp = (sink*1000)/(ρ)` with ρ=1025 | ORC sink | `19.60 kg/mm → 19600 kg/m → /1025 ≈ 19.1 m²`. Traceable; density assumption explicit.  |
| Keel depth below hull joint | 68‑20/32 in (=1.742 m) | m | direct | — | class rules |  |
| Keel chord limit | 33‑16/32 in (=0.851 m) | m | direct | — | class rules |  |
| Keel trailing edge to transom (lower edge) | 208 in (=5.283 m) | m | direct | — | class rules | Extremely valuable for longitudinal placement of keel in your geometry model.  |
| Keel thickness control points F1…F8 | various (in) | direct | — | class rules | Useful to reconstruct foil thickness distribution envelope.  |
| Engine model | Volvo Penta MD2030 (example listing) | — | not-primary (hint) | Verify on actual boat / engine plate | yacht.de listing | Treat this as a **lead** only; do not treat as definitive for all boats/years.  |
| Gear ratio | 2.35:1 or 2.72:1 (MD2030 data sheet options) | — | not-specific | Must match the exact gearbox/saildrive variant | Volvo MD2030 tech data | This is **not confirmed as the First‑36.7 installed ratio**; use it to bound possibilities until you read your engine/saildrive plate.  |
| Prop handedness | LH (typical for many Volvo saildrive props) | — | not-found (verify) | Read stamping on prop / saildrive documentation | vendor table | I did not find a Beneteau/Farr primary statement “LH vs RH” for the First 36.7. Treat LH as a hypothesis to verify.  |

---

## 4) Geometry reconstruction notes (practical, simulator-oriented)

### Hull (low-speed / docking focus)
- You have credible overall dimensions (LOA/LH/LWL/B) and light displacement from Beneteau docs.   
- ORC certificates add **wetted surface area** and **sink rate**, letting you derive **waterplane area**—very useful for “slow maneuvering realism” (heave stiffness proxy, mass/loading sensitivity).   
- **Key modeling choice:** For MMG-style hull coefficients, treat `d` as **canoe-body draft** (≈0.46 m) and model keel separately as an appendage (lift + added mass + damping), otherwise block coefficient and many nondimensional scalings become nonsensical for a fin-keel yacht. 

### Keel
What you can reconstruct **numerically and traceably right now**:
- **Keel span below hull/keel joint:** 1.742 m (class-rule max).   
- **Keel chord (fore-aft):** 0.851 m (class-rule max).   
- **Keel longitudinal placement:** trailing edge is ~5.283 m forward of transom (class-rule constraint).   

**How to turn that into an MMG-friendly appendage model:**
1. Define a hull reference line (e.g., x=0 at transom or midship).  
2. Place keel trailing edge at x = 5.283 m forward of transom.   
3. Place keel leading edge at x = trailing + chord ≈ 6.134 m forward of transom (using chord 0.851 m).   
4. Use the keel depth to set keel tip z relative to hull/keel joint; then set total draft = 2.20 m for deep keel configuration check.   

This yields a **defensible first-pass keel geometry** even without the original Farr templates.

### Rudder
- The Beneteau line drawing clearly includes the rudder outline.   
- **Best available method (derivable-medium):**
  1. Import the PDF into CAD (or trace from screenshot) and scale to **known draft (2.20 m)** or **hull length (10.68 m)**.   
  2. Trace rudder planform → compute **area**, **span**, **mean chord**, and (if visible) stock position.  
  3. Compute aspect ratio `AR = span²/area` and then your rudder lift slope / `f_alpha`.

### Propulsion layout
- Beneteau documentation indicates a **twin-bladed folding prop** (good confirmation of “prop drag minimized under sail,” but for docking it just means lower reverse bite and different astern characteristics than a fixed 3‑blade).   
- ORC certificate gives **prop diameter** and confirms folding 2‑blade on at least one boat: **PRD=0.400 m**.   
- **Saildrive vs shaft:** Class rules discuss **saildrive fairing plate** tolerances, indicating saildrive is the “standard” arrangement for the class baseline.   
- **Handedness + gear ratio:** not found in Beneteau primary docs collected; you should treat these as configuration parameters and verify from the specific engine/saildrive data plate. (Volvo MD2030 technical data provides ratio options but not “this boat uses X.”)   

---

## 5) MMG relevance assessment (what you can initialize vs what you must tune)

### Coefficients you can initialize credibly *now*
- Mass/displacement (`m`) and principal dimensions (`L`, `B`) from builder + ORC.   
- Canoe-body draft proxy (`d`) from **standard draft – class-rule keel depth**.   
- Block coefficient proxy (`C_b`) using the above.  
- Wetted surface `S` (from ORC) for friction/resistance baseline.   
- Prop diameter `D_p`, blades, and prop type (folding/feathering) from ORC.   

### Coefficients that almost certainly need tuning for docking realism
- `w_P0`, `t_P` (wake + thrust deduction): saildrive + fin keel interaction differs from typical merchant-ship MMG baselines.  
- Rudder inflow multipliers (`kappa`, `epsilon`, `gamma_R±`) and rudder drag increment `t_R`: strongly depends on prop type (folding) and rudder/prop separation.  
- Low-speed yaw bias / prop walk surrogate: often needs an explicit “transverse thrust” term or asymmetry handling (especially in reverse).

### Coefficients still too uncertain from public data
- Full set of hull maneuvering derivatives (`Y_v'`, `N_r'`, higher-order terms) and added mass/inertia terms (`m_y'`, `J_z'`)—without published captive tests/CFD or a detailed hull offset file you can export, you’ll be guessing.  
- Rudder area and geometry: **derivable**, but you must do the scaling/tracing step described above.

---

## 6) Final implementation package

### 6.1 Proposed `MinimalVessel` object (best-estimate + traceable)

Below is a first-pass object that (a) uses only **direct** values or **explicitly-derived** values and (b) leaves the truly uncertain MMG coefficients as `null` / “tune later”.

```json
{
  "name": "Beneteau First 36.7 (deep keel, saildrive, 2-blade folding prop)",
  "variantNotes": [
    "Standard/deep keel 2.20 m",
    "Use canoe-body draft d≈0.458 m for MMG scalings; model keel separately",
    "Prop diameter per ORC example: 0.400 m folding 2-blade"
  ],

  "m": 5869,
  "rho": 1025,

  "Lpp": 9.634,
  "LWL": 9.23,
  "LOA": 10.98,
  "B": 3.458,

  "d": 0.458,
  "draft_total": 2.20,

  "Cb": 0.374,

  "x_G": null,

  "propeller": {
    "type": "folding",
    "blades": 2,
    "D_p": 0.400,
    "handedness": null,
    "pitch": null,
    "gearRatio": null
  },

  "keel": {
    "span_below_hull_joint": 1.742,
    "chord": 0.851,
    "trailingEdge_to_transom": 5.283
  },

  "hydrostatics": {
    "wettedArea": 25.53,
    "sink_kg_per_mm": 19.60,
    "waterplaneArea_est": 19.1
  },

  "rudder": {
    "area": null,
    "span": null,
    "meanChord": null,
    "aspectRatio": null,
    "f_alpha": null
  },

  "mmg": {
    "w_P0": null,
    "t_P": null,
    "t_R": null,
    "epsilon": null,
    "kappa": null,
    "l_R": null,
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

**Traceability for the populated fields:**
- `m=5869 kg`: Beneteau owner manual weight estimation.   
- `LWL=9.23`, `LOA=10.98`, `LH=10.68`, `draft_total=2.20`: Beneteau brochure/manual.   
- `Lpp=IMS L=9.634`: ORC certificate “Serendipity” and IMS L definition.   
- `B=3.458`, `wettedArea=25.53`, `sink=19.60`, `D_p=0.400 folding 2-blade`: ORC certificate.   
- `keel span/chord/trailing-edge station`: class rules.   
- `d=0.458`, `Cb=0.374`: derived from `draft_total` + class-rule keel depth + ORC beam/length + manual displacement (see derivation earlier).   

### 6.2 Unresolved parameters list (what you still need to finish a credible MMG docking model)

**Propulsion / drivetrain (high impact for docking):**
- Prop handedness (LH/RH) **for your exact prop** (often stamped on hub or documentation).  
- Prop pitch, blade area ratio, and any vendor performance curves (KT/KQ vs J).  
- Saildrive model (120S/130S/etc) and gear ratio (read from plate/manual for that exact unit).   

**Rudder geometry:**
- Rudder area, span, chord distribution, stock position → derive from scaled line drawing or measured template.   

**MMG coefficients:**
- All interaction + maneuvering derivatives in your list (Section B). These will need initialization + tuning.

### 6.3 Assumptions that must be documented in code/comments
1. **Using ORC “IMS L” as `Lpp` proxy** for nondimensionalization (because true LBP not found in builder docs).   
2. **Using canoe-body draft (`d≈0.458 m`)** derived from keel depth constraint and standard total draft, because MMG `d` otherwise breaks `Cb` and other scalings for a fin-keel yacht.   
3. **Sea-water density `ρ=1025 kg/m³`** for displacement-volume conversion (explicit constant).  
4. ORC certificate values represent a **specific measured boat/configuration/date** and will vary between boats (paint, gear, prop choice).   

---

## 7) Handling / docking operational evidence (prop walk, reverse behavior)

With the remaining sources gathered here, I did **not** find an authoritative, primary, First‑36.7‑specific statement on:
- prop walk direction/magnitude,
- reversing “kick” tendency,
- measured turning circles or stopping distances under engine.

So for simulator credibility, you should plan on either:
- collecting owner trial data (simple GPS + rudder angle + RPM logging), or
- calibrating from generic saildrive + 2‑blade folding behavior (and **explicitly** labeling it as such until verified).

(If you want, the best next research step would be to target **Beneteau installation docs**, **Volvo saildrive manuals specific to the installed unit**, and any **race prep/tech notes** that mention backing behavior—but I can’t run more web queries in this session.)

---

### Bottom line: what you can implement *today*
You can build a defensible “MinimalVessel” now with:
- mass, principal dimensions, draft split (hull vs keel), Cb (with explicit assumptions),
- keel placement constraints (rare and very valuable),
- ORC wetted area + sink (for hydrostatics),
- prop diameter + type.

And you should treat the rest (rudder planform + MMG derivatives + prop curves + gear ratio + handedness) as a **calibration tranche** to complete once you’ve traced the rudder from the line drawing and verified drivetrain details from a real boat.



------------



# ChatGPT Deep Research (14 sources were used)

## Physically Credible MMG-Style Vessel Model Data for the First 36.7

### Recommended target variant

**Target configuration (recommended for the simulator’s first-pass baseline):**  
First 36.7, **standard deep keel (2.20 m)**, **standard one-design appendages**, **saildrive**, **2‑blade folding propeller**; **use the “light displacement ~5.87 t” condition** as the reference mass state and then add load cases (fuel, water, crew) explicitly. This matches the best-documented “no major modifications” configuration across builder brochures/specs, class materials, and multiple entity["organization","Offshore Racing Congress","rating authority"] (ORC) certificates. 

**Why this is the best-documented/defensible choice for low-speed docking simulation:**
The deep-keel configuration is consistently documented by builder specs and class documents (and dominates the racing fleet), while ORC measurement certificates provide high-value hydrostatics/propeller-measurement fields (e.g., wetted surface, LCF, propeller diameter). 

**Engine variant recommendation (two credible branches, pick one and stay consistent):**
- **Branch A (North America / early boats):** owner manual documents **entity["company","Volvo Penta","marine engine maker"] MD2030 with saildrive** (29 hp class). Volvo documentation provides gear ratio data for MD2030 saildrive packages, and the saildrive workshop manual documents forward gear orientation for a **left-hand rotating propeller**.   
- **Branch B (later builder spec sheets):** builder “General specifications” explicitly list **entity["company","Yanmar","marine diesel maker"] saildrive, 29 hp**, consistent with several ORC certificates listing Yanmar 3YM–class engines.   

For **docking-first simulation**, Branch A often yields a more tightly constrained propulsion chain (engine + saildrive family documentation). If your project already has a generic diesel+saildrive propulsion module, Branch B is equally defensible.

### Source inventory

| Source | Type | URL | Why it matters |
|---|---|---:|---|
| BENETEAU First 36.7 brochure (08/2005) | Primary (builder brochure) | `https://pro.beneteau.fr/documents/bateau/471/B_first36.7_fr_ang_092005.pdf` | Core principal particulars: light displacement (~5870 kg), standard draft 2.20 m, engine power 29 hp, capacities.  |
| First 36.7 General Specifications (28 Mar 2008) | High-quality secondary (builder spec sheet; Beneteau-coded) | `https://ajolayachts.fi/wp-content/uploads/2024/11/Tekniset-tiedot-General_specs_F36.7_GB.pdf` | Adds *waterline length 9.23 m*, states **“29 HP Yanmar Sail Drive engine”**, describes folding prop + rudder/steering system.  |
| First 36.7 Distinction Specifications (Sep 2004) | High-quality secondary (builder-coded) | `https://s8ace81e29fa10bff.jimcontent.com/download/version/1524088708/module/7392629293/name/F36.7%20Distinction%20Specifications.pdf` | Confirms LWL 9.23 m and explicitly notes **twin‑bladed folding prop** + “under-hung rudder”.  |
| First 36.7 owner’s manual (June 2002) | Primary (owner documentation) | `https://sbo.sailboatowners.com/downloads/Beneteau__55167391.pdf` | Documents installed-engine family for early boats (Volvo MD2030 saildrive noted in the manual text extracts), plus tank capacities and rig numbers.  |
| First 36.7 class rules compilation (includes appendices/diagrams) | Primary (class technical rules) | `https://assets.nautical-cloud.com/customerspublic/Chicago%20Yacht%20Club_ceb5d425-3af3-4438-8a0f-efd8b9113f57/races/raceid_21070561-ca88-429f-91ab-2ae5829ba454/documents/All%20Class%20Rules.pdf` | Appendix D provides keel depth/thickness measurement framework; Appendix H lists principal particulars (LOA/LWL/beam/draft/displacement).  |
| First 36.7 line drawing (profile) | Primary-ish (class-hosted drawing) | `https://s3.amazonaws.com/beneteaufirst367/manuals-technical-info/first-36-7-line-drawing/36-01B5.pdf` | Used for defensible geometric digitization (rudder span/area, relative prop–rudder placement).  |
| ORC International certificate example (Arwen) | Primary (measurement certificate) | `https://data.orc.org/public/WPub.dll/CC/117279.pdf` | High-value numeric fields: displacement, IMSL/LSM0, **wetted surface (WS)**, **LCF from stem**, propeller diameter (PRD), strut-drive measurement fields.  |
| ORC Rating Systems 2024 | Primary (rules/definitions) | `https://orc.org/uploads/files/rules_regulations/2024/ORC_Rating_Systems_2024.pdf` | Defines “rated length (RL)” vs physical length measures; helps interpret ORC certificate fields.  |
| ORC International Measurement System 2024 | Primary (rules/definitions) | `https://orc.org/uploads/files/Rules-Regulations/2024/International-Measurement-System-2024.pdf` | Definitions for propeller diameter PRD, EDL, ST1–ST5, etc., to interpret certificate propulsion installation geometry fields.  |
| Volvo Penta MD2030 specification bulletin (© 2002) | Primary (manufacturer technical) | `https://sr amoteur.com/en/documentation-volvo-penta-md2030-en/` | Confirms MD2030 power class and provides saildrive ratio data for MD2030 packages (MS25S/MS25SR noted).  |
| Volvo saildrive MS25S/MS25SR workshop manual (64 pp) | High-quality technical (workshop manual) | `https://www.uisge-beatha.eu/uploads/Documenten/Motor/www.chmarine.com.au_pdfs_Volvo_SD_MS25s-sR.pdf` | States forward gear reference with **left-hand rotating propeller** and lists lower-gear ratios (2.19:1, 2.47:1).  |
| MANSIM theoretical background (MMG + embedded empirical formulas) | High-quality secondary (engineering method + equations) | `https://mansim.org/articles/Theoretical%20background%20and%20application%20of%20MANSIM%20for%20ship%20maneuvering%20simulations.pdf` | Provides explicit MMG-style formulations and **empirical formulas** for added masses and hull derivatives; gives rudder lift-gradient formula \(f_\alpha = 6.13\lambda/(\lambda+2.25)\).  |
| MMG “standard method” overview paper | High-quality secondary (peer-reviewed) | `https://link.springer.com/content/pdf/10.1007/s00773-014-0293-y.pdf` | Defines/links key MMG interaction coefficients (e.g., \(t_R, a_H, x'_H\), wake fractions) and how they’re obtained from tests.  |

### Parameter table

**Conventions used for derived values (explicit assumptions):**
- **Seawater density** \( \rho = 1025 \,\mathrm{kg/m^3}\). (Assumption for volume conversions)
- **“Canoe-body draft”** \(d_\text{canoe} = T_\text{total} - h_\text{keel}\), where \(T_\text{total}=2.20\) m (deep keel draft) and keel depth \(h_\text{keel}\) is taken from class keel-depth measurement.   
- **Rudder area and span** are digitized from the class-hosted profile drawing, scaled by the documented total draft. (Medium confidence; see Geometry notes.)   
- **MMG “dash” coefficients** are initialized using the empirical formula set presented in MANSIM (originally for ships; therefore medium confidence when applied to a fin-keel yacht).   

| parameter | value | units | status | derivation method if not direct | source URL(s) | notes |
|---|---:|---|---|---|---:|---|
| m | 5870 | kg | direct | — | `https://pro.beneteau.fr/documents/bateau/471/B_first36.7_fr_ang_092005.pdf` | Builder “light displacement … 5870 kg approx.”  |
| C_b | 0.341 | – | derived-high | \(C_b=\nabla/(L\,B\,d_\text{canoe})\), \(\nabla=m/\rho\). Use \(L=10.64\) m (ORC LOA), \(B=3.45\) m (builder), \(d_\text{canoe}=2.20-1.743\) m, \(m=5870\) kg | `https://pro.beneteau.fr/...092005.pdf` | Keel depth from class keel measurement gives \(d_\text{canoe}\approx0.457\) m; **main uncertainty:** keel root elevation vs WL (small).  |
| Lpp | 10.64 | m | derived-high | Use ORC “Length Overall 10.640 m” as Lpp surrogate for MMG scaling (consistent with ORC LCF-from-stem and line-drawing scaling) | `https://data.orc.org/public/WPub.dll/CC/117279.pdf` | If your simulator strictly expects LWL-like length, also keep \(LWL=9.23\) m as supporting geometry.  |
| B | 3.45 | m | direct | — | `https://pro.beneteau.fr/documents/bateau/471/B_first36.7_fr_ang_092005.pdf` | Builder hull beam (3.45 m). ORC max beam is slightly higher (3.458 m).  |
| d | 0.457 | m | derived-high | \(d=d_\text{canoe}=T_\text{total}-h_\text{keel}\) | `https://assets.nautical-cloud.com/.../All%20Class%20Rules.pdf` | Draft total 2.20 m (builder); keel depth 68‑20/32 in (class measurement) ⇒ \(d\approx0.457\) m.  |
| D_p | 0.410 | m | direct | — | `https://data.orc.org/public/WPub.dll/CC/117279.pdf` | ORC certificate propeller disc diameter PRD 0.410. Other First 36.7 certificates show nearby diameters (0.400–0.415 m); treat as configuration-sensitive.  |
| eta | 0.292 | – | derived-medium | In MANSIM/MMG rudder inflow model, \(\eta = D_p/H\) (prop diameter / rudder span). Compute with digitized rudder span \(H\approx1.406\) m and \(D_p=0.410\) m | `https://mansim.org/articles/...simulations.pdf` | This “η” is **not** a propulsive efficiency; it is explicitly described as the ratio of prop diameter to rudder span.  |
| A_R | 0.629 | m² | derived-medium | Digitize rudder planform area below WL from profile drawing; scale by draft 2.20 m | `https://s3.amazonaws.com/beneteaufirst367/.../36-01B5.pdf` | Represents “movable part of rudder” area in the MMG rudder normal force formula; accuracy limited by drawing fidelity and WL reference.  |
| f_alpha | 3.57 | – | derived-medium | MANSIM Table 4: \(f_\alpha = 6.13\lambda/(\lambda+2.25)\), \(\lambda=H^2/A_R\). Use digitized \(H\approx1.406\) m and \(A_R\approx0.629\) m² ⇒ \(\lambda\approx3.14\) | `https://mansim.org/articles/...simulations.pdf` | This is the **rudder lift gradient coefficient** used in \(F_N=\tfrac12\rho A_R U_R^2 f_\alpha \sin\alpha_R\).  |
| x_G | +0.593 | m (aft of midship) | derived-medium | Assume longitudinal CG ≈ LCF for the reference lightship trimming condition; \(x_G = LCF - L/2\). ORC: LCF from stem 5.913 m; \(L=10.64\) m ⇒ \(x_G=+0.593\) m | `https://data.orc.org/public/WPub.dll/CC/117279.pdf` | **Key assumption:** static trim implies LCG near LCF. Treat as tunable with time history or turning circle calibration.  |
| w_P0 | 0.121 | – | derived-medium | MANSIM Table 9 (Kijima): \(w_{P0}=0.5C_b-0.05\), using derived \(C_b\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence: formula is for ship forms; yacht stern+saildrive wake may differ.  |
| l_R | 4.21 | m | derived-medium | \(l_R = x_R - x_G\). Estimate \(x_R\) as rudder centroid position from stem (digitized from line drawing scaled to ORC LOA); \(x_G\) from LCF | `https://data.orc.org/public/WPub.dll/CC/117279.pdf` | Used in \(\beta_R=\beta-l'_R r'\) style models. Geometry uncertainty: rudder “effective” point should ideally be stock axis or center of effort, not centroid.  |
| kappa | — | – | missing | Needs calibration in MMG rudder inflow model (prop slipstream amplification term) | `https://mansim.org/articles/...simulations.pdf` | MANSIM explicitly treats \(\kappa\) as an unknown rudder parameter to be estimated.  |
| epsilon | — | – | missing | MMG/standard method uses \(\epsilon\) relating wake fractions at rudder vs prop (example form: \( \epsilon=(1-w_R)/(1-w_P)\) in standard-method literature) | `https://link.springer.com/content/pdf/10.1007/s00773-014-0293-y.pdf` | For a saildrive yacht, \(w_R\) is not directly available; calibrate using turning/zigzag response under power.  |
| t_R | — | – | missing | Hull–rudder interaction coefficient; typically derived from rudder force tests (straight/oblique) | `https://link.springer.com/content/pdf/10.1007/s00773-014-0293-y.pdf` | Not published for this yacht; must be tuned or inferred from sea trials / captive data.  |
| t_P | — | – | missing | No credible yacht-specific value found. MANSIM lists ship-oriented empirical options (e.g., constant \(t_P=-0.27\) from one reference), but applicability is doubtful | `https://mansim.org/articles/...simulations.pdf` | Strongly recommend identifying \(t_P\) from propulsion calibration (speed–rpm–thrust) rather than importing ship constants.  |
| x_H_dash | — | – | missing | Needs rudder force test or system identification; in MMG it is the acting point of “additional lateral force” \(x'_H\) | `https://mansim.org/articles/...simulations.pdf` | MANSIM/Yasukawa-style rudder models use \(x'_H\) and \(a_H\) as calibration coefficients.  |
| a_H | — | – | missing | Needs rudder force test/system identification | `https://link.springer.com/content/pdf/10.1007/s00773-014-0293-y.pdf` | Highly geometry-sensitive (stern shape, keel, saildrive leg).  |
| k_0, k_1, k_2 | — | – | missing | Require propeller open-water curve fit \(K_T=k_0+k_1J+k_2J^2\) for the installed folding prop | `https://mansim.org/articles/...simulations.pdf` | ORC supplies diameter and blade width PBW, but not sufficient for \(K_T(J)\).  |
| J_int, J_slo | — | – | missing | Simulator-specific prop/engine transition parameters (no primary yacht data found) | — | Must be defined by your propulsion model design (e.g., clutch engagement, astern response). |
| gamma_R_plus | — | – | missing | Effective flow-straightening coefficient at rudder (direction-dependent) | `https://mansim.org/articles/...simulations.pdf` | MANSIM treats \(\gamma_R\) as an unknown to estimate.  |
| gamma_R_minus | — | – | missing | Same as above for opposite turning/reverse | `https://mansim.org/articles/...simulations.pdf` | Needs tuning against reverse/astern maneuvers.  |
| m_x_dash | 0.0111 | – | derived-medium | MANSIM Table 5: \(m_x=0.05m\), then non-dimensionalize by \(0.5\rho L^2 d\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence: formulas are ship-oriented; still useful as a stable starting magnitude.  |
| m_y_dash | 0.0840 | – | derived-medium | MANSIM Table 5 (Zhou et al.) formula for \(m_y\), then non-dimensionalize by \(0.5\rho L^2 d\) | `https://mansim.org/articles/...simulations.pdf` | Sensitive to which “draft” is used; here \(d=d_\text{canoe}\).  |
| J_z_dash | 0.0108 | – | derived-medium | Interpret MANSIM Table 5 equation as yaw gyration ratio \(k'/L\), set \(J_z=m(k' L)^2\), then non-dimensionalize by \(0.5\rho L^4 d\) | `https://mansim.org/articles/...simulations.pdf` | The table’s \(J_z\) presentation is ambiguous; treat as a **starting point** and tune via turning/zigzag timing.  |
| R_0_dash | — | – | missing | Would require resistance model (e.g., ITTC friction + form factor + appendage drag) or identification from calm-water speed–rpm | `https://data.orc.org/public/WPub.dll/CC/117279.pdf` | ORC provides **wetted surface WS 25.58 m²**, useful if you implement friction-based resistance.  |
| X_vv_dash | −0.0527 | – | derived-medium | MANSIM Table 6 (Yoshimura & Masumoto): \(X_{vv}=1.15C_b(B/L)-0.18\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence for yachts.  |
| X_vr_dash | −0.0475 | – | derived-medium | MANSIM Table 6: \(X_{vr}=m_y' - 1.91C_b(B/L)+0.08\) | `https://mansim.org/articles/...simulations.pdf` | Uses derived \(m_y'\).  |
| X_rr_dash | −0.00609 | – | derived-medium | MANSIM Table 6: \(X_{rr}=-0.085C_b(B/L)+0.008-x_G' m_y'\) | `https://mansim.org/articles/...simulations.pdf` | Depends on assumed \(x_G'\) and \(m_y'\).  |
| X_vvvv_dash | +0.360 | – | derived-medium | MANSIM Table 6: \(X_{vvvv}=-6.68C_b(B/L)+1.1\) | `https://mansim.org/articles/...simulations.pdf` | Useful to stabilize high-drift behavior in low-speed docking.  |
| Y_v_dash | −0.290 | – | derived-medium | MANSIM Table 7: \(Y_v=-(\pi d/L + 1.4C_b(B/L))\) | `https://mansim.org/articles/...simulations.pdf` | Draft choice dominates.  |
| Y_r_dash | +0.0664 | – | derived-medium | MANSIM Table 7: \(Y_r=m_x'+0.5C_b(B/L)\) | `https://mansim.org/articles/...simulations.pdf` | Sign conventions must match your simulator.  |
| Y_vvv_dash | −0.0906 | – | derived-medium | MANSIM Table 7: \(Y_{vvv}=-0.185(L/B)+0.48\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| Y_vvr_dash | −0.75 | – | derived-medium | MANSIM Table 7 (Yoshimura & Masumoto): constant −0.75 | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| Y_vrr_dash | −0.638 | – | derived-medium | MANSIM Table 7: \(Y_{vrr}=-(0.26(1-C_b)(L/B)+0.11)\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| Y_rrr_dash | −0.051 | – | derived-medium | MANSIM Table 7: constant −0.051 | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| N_v_dash | −0.0859 | – | derived-medium | MANSIM Table 8: \(N_v=-2d/L\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| N_r_dash | −0.0390 | – | derived-medium | MANSIM Table 8: \(N_r=-0.54(2d/L)+(2d/L)^2\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| N_vvv_dash | +0.424 | – | derived-medium | MANSIM Table 8: \(N_{vvv}=-0.69C_b+0.66\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| N_vvr_dash | −0.588 | – | derived-medium | MANSIM Table 8: \(N_{vvr}=1.55C_b(B/L)-0.76\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| N_vrr_dash | −0.250 | – | derived-medium | MANSIM Table 8: \(N_{vrr}=-0.075(1-C_b)(L/B)-0.098\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |
| N_rrr_dash | −0.0283 | – | derived-medium | MANSIM Table 8: \(N_{rrr}=0.25C_b(B/L)-0.056\) | `https://mansim.org/articles/...simulations.pdf` | Medium confidence.  |

### Geometry reconstruction notes

The simulator goal is **slow-speed powered maneuvering and docking**, so the most important geometry items are: (i) effective hull length/beam/draft for scaling; (ii) keel and rudder planform; (iii) prop diameter/type and its relation to rudder; (iv) mass state and CG.

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["Beneteau First 36.7 underbody keel rudder","First 36.7 saildrive folding propeller","First 36.7 profile line drawing"],"num_per_query":1}

#### Hull

Builder and class documentation provide consistent baseline dimensions, with small but explainable differences (measurement standards, “overall” vs “max”):  
- LOA reported as ~10.9 m in BENETEAU brochure; hull length 10.68 m; beam 3.45 m; deep draft 2.20 m; light displacement ~5870 kg.   
- Spec sheets explicitly list waterline length 9.23 m and confirm the same deep draft and displacement class.   
- ORC certificates typically list LOA 10.640 m, max beam 3.458 m, and displacements around 5.5–5.9 t depending on boat condition and declarations.   

For docking simulation, I recommend keeping **both**:
- **LWL (9.23 m)** for hydrodynamic intuition (low-speed damping scaling), and  
- **LOA/ORC LOA (10.64 m)** as the MMG length scale if you will use ORC “LCF from stem” and digitized line drawing geometry consistently.   

#### Keel

The deep keel is documented as lead with “deep draught” 2.20 m in builder specs.   
The one-design class rules provide a *measurement framework* for keel depth/thickness and reference points (Appendix D), which is valuable for building a “legal” keel section profile even when you lack full CAD offsets.   

A defensible first-pass approach for MMG-style modeling is:
- Treat the keel as an appendage contributing strongly to lateral force and yaw damping.  
- Use \(T_\text{total}=2.20\) m with the class keel-depth measurement to estimate canoe-body draft \(d_\text{canoe}\approx0.457\) m for hull coefficients, and then let keel area/lever-arms dominate turning balance (to be tuned).   

#### Rudder

Builder specification text describes an **underhung rudder** on self-aligning bearings and a mechanical rod transmission.   
The class-hosted profile drawing provides enough geometry to digitize:
- rudder span below WL (here ~1.41 m),  
- rudder planform area below WL (here ~0.63 m²), and  
- a rough longitudinal placement relative to LOA for initial \(l_R\) and interaction distances.   

In the MMG rudder force model used by MANSIM, the parameter named \(A_R\) is explicitly the *profile area of the movable part of the rudder* and \(f_\alpha\) is computed from aspect ratio via Fujii/Tsuda-type relation.   

#### Propulsion layout

**Prop type and diameter:**
- Builder specs: twin‑blade folding prop is explicitly mentioned.   
- ORC certificates: propeller diameter (PRD) commonly ~0.410 m for boats with folding 2‑blade configurations (but varies by installation).   

**Propeller installation geometry fields in ORC:**
ORC’s IMS defines how “Strut Drive” installations are measured (PRD, EDL, ST1–ST5), and what EDL means (distance along the shaft line from prop center to the aft edge of another strut/fin forward of the prop, excluding rudder).   
This can help constrain the prop’s proximity to the keel’s trailing edge if you elect to model the keel as the “fin forward of prop” in interaction logic.

**Engine family evidence (choose one branch):**
- Owner manual indicates Volvo MD2030 saildrive on early boats.   
- Beneteau-coded spec sheets list 29 HP Yanmar saildrive on later sheets.   
- For Volvo MD2030, manufacturer documentation gives the power class and identifies saildrive ratio information; the saildrive workshop manual gives gear ratio options and indicates forward gear reference for left-hand rotation.   

### MMG relevance assessment

#### Coefficients you can initialize credibly from published equations (then tune)

The MANSIM document is valuable because it consolidates MMG-style formulations and offers empirical formulas for initial estimates of:
- **Added masses** \(m_x, m_y\) and (an initial) yaw inertia scaling.   
- **Hull hydrodynamic derivatives** in the exact “dash” coefficient style your simulator lists (e.g., \(Y_v, N_r, X_{vvvv}\)), via Kijima/Lee/Yoshimura/Masumoto formula sets.   
- **Rudder normal-force formulation** and **rudder lift gradient** \(f_\alpha\) from aspect ratio.   

For a fin-keel yacht, these should be treated as **order-of-magnitude initializations**: the regression bases are largely merchant-ship forms, and the First 36.7 has strong appendage effects (keel + spade rudder + saildrive leg).   

#### Coefficients that almost certainly need tuning for a First 36.7 docking simulator

Even with good geometry, the following are usually **calibration parameters** (they are interaction terms, not purely geometric constants):
- **Propeller–hull**: \(t_P\) (thrust deduction), any 4‑quadrant handling parameters, and the propeller open-water curve coefficients \(k_0,k_1,k_2\). ORC certificates provide diameter but not enough to recover \(K_T(J)\) for a specific folding prop.   
- **Propeller–rudder / hull–rudder**: \(t_R\), \(a_H\), \(x'_H\), \(\epsilon\), \(\kappa\), \(\gamma_R^\pm\). The standard-method literature explicitly frames these as determined from captive or dedicated rudder-force tests; neither BENETEAU nor class documents publish them for the First 36.7.   
- **Resistance baseline \(R_0'\)**: you can build it from ITTC friction + wetted surface + appendage drag, but it will be speed-dependent; ORC wetted surface (WS) helps, yet you still need a form factor and appendage increments.   

### Final implementation package

#### Proposed `MinimalVessel` object with best-estimate values

The following object is intentionally **minimal** and separates:
- “direct” values from builder/class/ORC documents, and  
- “derived” values computed from those using explicit formulas (mostly from MANSIM).

```js
const first367_MinimalVessel = {
  name: "First 36.7 (deep keel, saildrive, 2-blade folding prop) - baseline",

  // Primary dimensions (choose one consistent length scale; here: ORC LOA as Lpp surrogate)
  Lpp: 10.64,          // m  (ORC LOA used as length scale)
  B: 3.45,             // m  (builder beam)
  d: 0.456925,         // m  (canoe-body draft estimate = 2.20 - 1.743075)

  // Mass properties
  m: 5870,             // kg (builder light displacement)
  x_G: 0.593,          // m aft of midship (assumed LCG≈LCF; see report)
  C_b: 0.341435,       // (-) derived from m, rho, Lpp, B, d

  // Propeller
  D_p: 0.410,          // m (ORC PRD example)
  // NOTE: k0/k1/k2 and t_P are unresolved; see below.

  // Rudder (digitized from class profile drawing + MANSIM rudder equations)
  A_R: 0.629332,       // m^2 (submerged planform area estimate)
  eta: 0.291539,       // (-) = D_p / H_R (ratio of prop diameter to rudder span)
  f_alpha: 3.572346,   // (-) = 6.13*lambda/(lambda+2.25), lambda = H^2/A_R

  // Wake fraction (initial empirical estimate)
  w_P0: 0.120718,      // (-) = 0.5*C_b - 0.05  (Kijima; ship-based)

  // Added masses / inertia (non-dimensional, initial estimates)
  m_x_dash: 0.011071,
  m_y_dash: 0.083982,
  J_z_dash: 0.010802,

  // Hull hydrodynamic derivatives (non-dimensional, initial estimates; Yoshimura/Masumoto set via MANSIM)
  X_vv_dash: -0.052684,
  X_vr_dash: -0.047474,
  X_rr_dash: -0.006091,
  X_vvvv_dash: 0.360459,

  Y_v_dash: -0.289907,
  Y_r_dash: 0.066426,
  Y_vvv_dash: -0.090551,
  Y_vvr_dash: -0.75,
  Y_vrr_dash: -0.638073,
  Y_rrr_dash: -0.051,

  N_v_dash: -0.085888,
  N_r_dash: -0.039003,
  N_vvv_dash: 0.424410,
  N_vvr_dash: -0.588400,
  N_vrr_dash: -0.250329,
  N_rrr_dash: -0.028323
};
```

#### Unresolved parameters list

These require either (a) an installed-propeller datasheet, (b) an onboard propulsion calibration (speed–rpm in ahead/astern), or (c) explicit tuning against maneuvering behavior:

- Propulsion: `k_0`, `k_1`, `k_2`, `t_P`, `J_int`, `J_slo`  
- Rudder/interaction: `kappa`, `epsilon`, `t_R`, `x_H_dash`, `a_H`, `gamma_R_plus`, `gamma_R_minus`  
- Resistance baseline: `R_0_dash` (or your simulator’s equivalent calm-water surge resistance model)

#### Assumptions that must be documented in code/comments

1. **Length scale choice:** Treating ORC LOA as `Lpp` for MMG non-dimensionalization to keep consistency with ORC’s “LCF from stem” and the profile drawing’s overall length scaling. (If you instead choose LWL or IMSL, recompute `x_G`, `l_R`, and non-dimensional derivatives consistently.)   
2. **Canoe-body draft estimate:** `d = 2.20 m − keel-depth`, where keel-depth is taken from class keel measurement. This assumes the keel root is approximately at the canoe-body underside near the waterline reference used for “draft”.   
3. **Rudder digitization:** `A_R` and rudder span are digitized from the profile drawing and are therefore medium confidence; they should be validated against any future class measurement templates or actual rudder drawings if obtained.   
4. **x_G initialization:** Using LCF as a proxy for LCG for the baseline mass condition. This should be refined if you later model realistic loading (fuel/water/crew) and trim.   
5. **Empirical ship-based derivatives:** The hull derivative set is initialized from ship-oriented empirical regression formulas (via MANSIM). The keel + saildrive leg + spade rudder are expected to shift low-speed maneuvering behavior substantially; therefore these derivatives are “starting values,” not validated predictions. 