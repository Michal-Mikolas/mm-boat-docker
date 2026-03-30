These are results of research about sailboat models with data about the vessel's physics from 3 AI research agents (ChatGPT Deep Research, ChatGPT 5.2-search and Claude Opus 4.6-search). 



------------



# Claude Opus 4.6-search (15 sources were used)

I'll conduct a systematic search to identify sailboats with sufficient published technical data for MMG-style maneuvering modeling. Let me search across academic, technical, and class-association sources.# Sailboat Candidates for MMG-Style Maneuvering Simulation

## 1. Methodology

My approach combined several search strategies:

1. **Academic maneuvering literature**: Searched for sailing yachts with published MMG-style or Abkowitz-style hydrodynamic derivatives, captive model tests, or CFD maneuvering studies.
2. **Systematic hull series data**: Identified the Delft Systematic Yacht Hull Series (DSYHS) as a major open-data resource with hull geometries, hydrostatics, and resistance coefficients for systematic sailing yacht hull variants.
3. **ORC/IMS certificate ecosystem**: ORC certificates contain hull data, propeller data (installation type, diameter), displacement, draft, beam, and appendage measurements. Freely available ORC certificate data can be browsed online.
4. **MMG estimation feasibility**: The mmgdynamics library's `MinimalVessel` requires only displacement (m), beam (B), Lpp, block coefficient (Cb), propeller diameter (D_p), propeller-to-rudder span ratio (eta), and rudder lift gradient coefficient (f_alpha). This defines our minimum viable parameter set.
5. **Empirical estimation formulas**: New empirical formulas can estimate hydrodynamic parameters for a wide range of ship types from principal particulars such as Lpp, B, d, Cb, and rudder/propeller geometry, meaning if we have the geometric core data, we can derive MMG coefficients even without captive model tests.
6. **Keuning et al. maneuvering model for yachts**: A generic model by Keuning et al. is based on the extensive results from the Delft Systematic Yacht Hull Series to generate generally applicable approximations for the coefficients in the equations of motion.

**Key insight**: No production sailboat has full MMG captive-model test data published. The viable strategy is to find boats where (a) hull geometry + hydrostatics are well-documented, (b) auxiliary engine/propeller/rudder data is known, and (c) we can apply either the Keuning et al. sailing yacht maneuvering model or the Yoshimura/Yasukawa empirical estimation formulas to derive MMG-compatible coefficients from principal particulars.

---

## 2. Ranked Candidate Table

| Rank | Model | Type | Confidence (1–5) | Recommendation |
|------|-------|------|:-:|----------------|
| 1 | **DSYHS Sysser 1 (Standfast 43 parent)** | Research/systematic hull | 5 | **Strong candidate** |
| 2 | **DSYHS Sysser 25 ("Sailing Yacht 33" parent)** | Research/systematic hull | 4 | **Strong candidate** |
| 3 | **KORDY30 (KRISO 30-ft sloop)** | Research sailing yacht | 4 | **Strong candidate** |
| 4 | **Bavarian 33 Cruiser (ORC-measured)** | Production cruiser | 3 | Partial-data candidate |
| 5 | **J/105 (ORC One-Design)** | Production racer-cruiser | 3 | Partial-data candidate |
| 6 | **Beneteau First 36.7 (ORC-measured)** | Production racer-cruiser | 3 | Partial-data candidate |
| 7 | **IACC yacht (Miyata et al. CFD studies)** | Research / America's Cup class | 3 | Partial-data candidate |
| 8 | **Contessa 32** | Classic production cruiser | 2 | Partial-data candidate |
| 9 | **Dehler 34 (ORC-measured)** | Production racer-cruiser | 3 | Partial-data candidate |
| 10 | **Angelou & Spyrou NTUA yacht** | Academic model | 3 | Partial-data candidate |
| 11 | **"FanHai T1" unmanned sailboat** | Research USV | 2 | Partial-data candidate |
| 12 | **Hallberg-Rassy 40 (ORC-measured)** | Production cruiser | 2 | Partial-data candidate |

---

## 3. Detailed Notes Per Candidate

---

### Rank 1: DSYHS Sysser 1 (Standfast 43 parent form)
**Type**: Research systematic yacht hull (monohull)

**Why promising**:
The first model tested in the DSYHS (Sysser 1) was the Standfast 43, designed by Frans Maas in 1973, which was also the base model for Series 1 (Sysser 1–22); Sysser 2 through 22 were geometric variations on Sysser 1. This means Sysser 1 has the deepest data trail of any sailing yacht hull in the academic literature.

**Directly available parameters**:
- All DSYHS hull geometries are available in 3D IGES format, though presented without keel and rudder.
- Hydrostatics files contain bare hull hydrostatics of all DSYHS models at full scale (Lwl=10m) and model scale, with Lwl, Bwl etc. at 0, 10, 20, and 30 degrees of heel.
- LWL, BWL, draft, displacement, prismatic coefficient, LCB position — all published in the original Gerritsma et al. papers and the 4TU datasets.
- Resistance and stability in upright and heeled position has been determined for all 22 hull forms, with results usable for velocity prediction.
- Fin keel and rudder arrangement documented; turbulence stimulator on hull, keel, and rudder described.

**Derivable parameters**:
- **Cb**: Derivable from displacement, LWL, BWL, and draft (all published).
- **Rudder area (A_R)**: The DSYHS tested with standardized keel/rudder; geometry is documented in figures and appendage descriptions. Area can be digitized from published plans.
- **Propeller diameter**: NOT in the DSYHS data (hull-only series), but the Standfast 43 is a known production boat; engine/prop specs can be sourced from builder data or owner communities. Typical auxiliary for a ~43 ft cruiser yacht → 30–40 HP diesel, ~15–17" folding prop.
- **x_G**: LCB is published, close proxy for x_G in sailing condition.

**Still missing**:
- No MMG-specific captive maneuvering tests (DSYHS tested resistance/seakeeping, not maneuvering).
- No published propeller data in the systematic series itself.
- Actual auxiliary engine specs require cross-referencing the Standfast 43 production data.

**Source links**:
- Hull geometries: https://doi.org/10.4121/21501330.v1
- Hydrostatics: https://doi.org/10.4121/21501375.v1
- RAW coefficients: https://doi.org/10.4121/21501402.v1
- Manual: http://dsyhs.tudelft.nl/Manual%20DSYHS.pdf
- Original paper: Gerritsma, Onnink, Versluis — available via NTIS (PB82260522)

**Confidence**: 5/5 — Hull geometry fully open, hydrostatics comprehensive, Cb and all hull params directly available or trivially computed. Auxiliary data requires assumptions but is bounded.

**Recommendation**: **Strong candidate** — Best first implementation target. Use DSYHS hull data + empirical MMG estimation formulas + assumed auxiliary propulsion for a credible MinimalVessel.

---

### Rank 2: DSYHS Sysser 25 (later series, ~33 ft parent)
**Type**: Research systematic yacht hull (monohull)

**Why promising**: The later DSYHS series (Series 3+) use a different, more modern parent form closer to contemporary 30–35 ft cruiser/racers. Same comprehensive data ecosystem as Sysser 1 but for a smaller, more common boat size.

**Directly available parameters**: Same as Sysser 1 — full 3D IGES geometry, hydrostatics at multiple heel angles, LWL/BWL/draft/displacement/LCB/Cp.

**Derivable**: Cb, rudder area from plans, x_G from LCB.

**Still missing**: Same as Sysser 1 — no captive maneuvering tests, no propeller data in series.

**Source links**: Same 4TU repository datasets.

**Confidence**: 4/5

**Recommendation**: **Strong candidate** — Excellent second implementation, represents a different hull form family and more common mid-size cruiser geometry.

---

### Rank 3: KORDY30 (KRISO 30-ft sloop)
**Type**: Research sailing yacht (monohull)

**Why promising**:
A 30-foot sloop yacht developed by Korea Research Institute of Ship and Ocean (KRISO), termed KORDY30, was used for CFD-based velocity and attitude prediction. Model tests were carried out to verify hydrodynamic performances of this 30-foot class sailing yacht, with VPP-estimated performance and running attitude including hull form, sail plan, and appendages. A captive model device was used, and test results showed minimum resistance at 20 degrees of heeling.

**Directly available parameters**:
- Hull geometry documented for CFD validation (towing tank model exists).
- Hydrodynamic resistance at various heel angles.
- Keel and rudder geometry (used in CFD and VPP).
- Wind tunnel data for sails.
- LWL, BWL, draft, displacement published in the Kim et al. (2010) papers.

**Derivable parameters**: Cb from published dimensions; rudder and keel geometry from CFD mesh descriptions.

**Still missing**: Auxiliary engine/propeller specs (research boat, may not have standard auxiliary). No MMG-specific maneuvering derivatives published.

**Source links**:
- Kim et al., "Hydro- and aerodynamic analysis for the design of a sailing yacht" (J. Marine Science and Technology, 2010): https://www.researchgate.net/publication/225461900
- Related KRISO CFD publications on this hull.

**Confidence**: 4/5

**Recommendation**: **Strong candidate** — Has both towing-tank and CFD validation data for the hull, plus appendage geometry. MMG coefficients would be derived via empirical formulas.

---

### Rank 4: Bavaria 33 Cruiser (ORC-measured examples)
**Type**: Production sailing cruiser (monohull)

**Why promising**:
The Bavaria Cruiser 33 (and similar Bavaria models) is one of the most commonly ORC-rated production boats in Europe. ORC hull data includes primary characteristics in measurement trim: Length overall, Maximum Beam, Draft, and Displacement in lightship and sailing trim. ORC propeller data includes propeller installation type and propeller diameter, along with Propeller Installation Projected Area (PIPA).

**Directly available parameters**:
- LOA, LWL, Beam, Draft, Displacement from builder brochure AND ORC certificate.
- Propeller diameter and installation type from ORC certificate.
- Rudder type from certificate (appendage measurements on page 3).
- Keel type and draft.
- Sail plan dimensions.
- Builder specs: Yanmar auxiliary engine (typically 21 HP for 33 ft), saildrive.

**Derivable**: Cb estimable from displacement/LWL/B/draft; rudder area from ORC appendage data or class rules; x_G estimable from LCB (available on ORC certificates with hull offsets).

**Still missing**: No maneuvering tests. No published CFD studies. Block coefficient requires estimation (typical Cb for modern cruiser ~0.35–0.42). Rudder area not always explicitly on the certificate (may require measurement form access).

**Source links**:
- ORC database: https://jieter.github.io/orc-data/site/ (search Bavaria 33)
- ORC certificate structure: https://orc.org/organization/monohulls/orc-international-certificate-2
- Bavaria builder specs: https://www.bavariayachts.com (brochure data)

**Confidence**: 3/5

**Recommendation**: **Partial-data candidate** — Real-world production boat with engine + propeller data known; good for demonstrating the simulator on a recognizable boat. But requires more estimation steps than DSYHS hulls.

---

### Rank 5: J/105 (ORC One-Design)
**Type**: Production racer-cruiser (monohull, one-design class)

**Why promising**:
The J/105 is a widely raced one-design with standardized ORC One-Design certificates where all data affecting a boat's rating are standardized based on class rules or past measurements. This means hull geometry and appendage data are tightly controlled and well-documented through class rules.

**Directly available parameters**:
- LOA (34.5 ft), LWL (29.0 ft), Beam (11.0 ft), Draft (6.5 ft), Displacement (~7750 lbs) — from class rules.
- Yanmar 2GM20 auxiliary engine (18 HP), 2-blade folding prop — from owner's manual.
- Rudder: balanced spade rudder, geometry defined by class rules.
- Keel: fin keel with bulb, precise geometry in class measurement rules.
- Hull offsets exist in the ORC system.

**Derivable**: Cb, rudder area from class measurement data, propeller D_p from engine installation specs.

**Still missing**: No maneuvering studies. No CFD or captive model data specific to J/105.

**Source links**:
- J/Boats official specs: https://www.jboats.com/j105
- J/105 class association rules (contain appendage geometry specs)
- ORC One-Design data for J/105

**Confidence**: 3/5

**Recommendation**: **Partial-data candidate** — Excellent auxiliary engine documentation and class-rule-controlled geometry. A recognizable, desirable target for simulator users.

---

### Rank 6: Beneteau First 36.7 (ORC-measured)
**Type**: Production racer-cruiser (monohull)

**Why promising**: One of the most commonly ORC-certificated boats worldwide. Extensive measurement database. Builder publishes detailed technical specs including engine, propeller, and appendage information.

**Directly available**: LOA, LWL, Beam, Draft, Displacement, engine (Yanmar 3YM30, ~29 HP), folding propeller, keel/rudder type.

**Derivable**: Same approach as Bavaria 33.

**Still missing**: Same as Bavaria 33 — no maneuvering tests or CFD studies.

**Source links**: ORC database, Beneteau technical documentation.

**Confidence**: 3/5

**Recommendation**: **Partial-data candidate**

---

### Rank 7: IACC-Class Yacht (Miyata et al. CFD maneuvering studies)
**Type**: Research / America's Cup class yacht (monohull)

**Why promising**:
CFD simulation methods were developed to predict hydrodynamic performances of a prototype sailing boat, including calculations for steady advancing, rolling and maneuvering motions. Akimoto & Miyata (2002) published detailed CFD maneuvering simulations of an IACC-class hull.

The maneuvering simulation of a sailing boat uses the finite volume method and the equation of motion of the ship, treating it as an extreme condition where the boat experiences rapid and large amplitude changes in roll and heading.

**Directly available**: Hull geometry used in CFD (sectional data), appendage geometry, yaw/roll responses from CFD simulations.

**Derivable**: Hydrodynamic force coefficients from published CFD lateral force and yaw moment data.

**Still missing**: IACC boats have no auxiliary engines (pure racing). No propeller or engine data. This limits the powered-maneuvering aspect significantly.

**Source links**:
- Akimoto & Miyata, J. Marine Science and Technology (2002)
- IEEE: https://ieeexplore.ieee.org/document/6263628/

**Confidence**: 3/5 (high for sail maneuvering, low for powered docking)

**Recommendation**: **Partial-data candidate** — Valuable for understanding hull hydrodynamics in maneuvering, but no auxiliary engine makes it unsuitable as a first implementation target for *powered* maneuvering.

---

### Rank 8: Contessa 32
**Type**: Classic production cruiser (monohull)

**Why promising**: The Contessa 32 has a large owner community and extensive documentation. Multiple university projects have used this hull. Long keel variant is well-understood hydrodynamically.

**Directly available**: LOA, LWL, Beam, Draft, Displacement from builder. Engine: Volvo MD2B or Yanmar 2GM (common). Prop: typically 13–14" fixed 2-blade.

**Derivable**: Cb (traditional long-keel form, Cb likely ~0.35–0.38), rudder area from published drawings.

**Still missing**: No academic papers with hydrodynamic coefficients. No CFD studies found. Documentation is community-level, not peer-reviewed.

**Confidence**: 2/5

**Recommendation**: **Partial-data candidate** — Charming target for simulator users but less technical evidence than top candidates.

---

### Rank 9: Dehler 34 (ORC-measured)
**Type**: Production racer-cruiser (monohull)

**Why promising**: Dehler publishes more technical detail than most builders. Commonly ORC-rated. Known for performance-oriented designs with well-documented appendages.

**Directly available**: Full spec sheet with LOA/LWL/B/d/displacement, Yanmar engine, saildrive with folding prop.

**Derivable**: Same as other ORC boats.

**Still missing**: No maneuvering studies.

**Confidence**: 3/5

**Recommendation**: **Partial-data candidate**

---

### Rank 10: Angelou & Spyrou NTUA Yacht Model
**Type**: Academic research model (monohull)

**Why promising**:
The Angelou & Spyrou (2017) paper from NTUA published maneuvering coefficients derived from sectional data, including cross-flow drag coefficients and sectional sway added mass calculations for a sailing yacht. The hydrodynamic part includes sub-models for hull reaction, hydrostatic and wave forces, with a potential flow boundary element method for calculating side forces and added masses of the hull and appendages.

**Directly available**: Hull sections (published in paper), appendage coefficients, maneuvering derivatives framework, sail force modeling.

**Derivable**: Many MMG-compatible coefficients from the published formulation.

**Still missing**: The specific yacht hull used appears to be a representative/generic form, not a named production boat. Auxiliary engine data not discussed.

**Source links**:
- Angelou & Spyrou (2017), Journal of Sailing Technology: https://higherlogicdownload.s3.amazonaws.com/SNAME/1516f098-2760-4bff-86fa-9ca63a85f102/UploadedImages/2017-06__Angelou_and_Spyrou__A_New_Mathematical_Model_for_Investigating_Course_Stability_and_Maneuvering_Motions_of_Sailing_Yachts.pdf

**Confidence**: 3/5

**Recommendation**: **Partial-data candidate** — Most directly useful for understanding how to map sailing yacht hydrodynamics into a maneuvering coefficient framework. Excellent reference paper for the implementation methodology.

---

### Rank 11: "FanHai T1" Unmanned Sailboat
**Type**: Research unmanned sailing vessel

**Why promising**:
The "FanHai T1" unmanned sailboat was independently assembled and tested in a towing tank, with twelve test cases across two wind speeds and six apparent wind angles, resulting in an average relative error of 7.86% between predicted and measured sailing speeds. The dynamics model uses the MMG model proposed by the JTTC, described as a well-established model of sailboat dynamics built according to physical sense.

**Directly available**: MMG-modeled dynamics with published validation data. Towing tank results.

**Still missing**: Very small vessel (USV scale), not representative of a yacht. Specific geometric parameters may be in Chinese-language publications.

**Confidence**: 2/5

**Recommendation**: **Partial-data candidate** — Important as a proof-of-concept that MMG works for sailboats, but not a yacht-scale vessel for the simulator.

---

### Rank 12: Hallberg-Rassy 40 (ORC-measured)
**Type**: Production cruiser (monohull)

**Why promising**: Well-known blue-water cruiser with detailed builder specs. Many ORC certificates exist. Heavy displacement, long keel option — closer to traditional ship forms that MMG empirical formulas handle well.

**Directly available**: LOA, LWL, B, d, displacement, Volvo Penta D2-55 engine (55 HP), saildrive, folding prop.

**Still missing**: No academic studies. Higher Cb than typical racers may actually make empirical MMG formulas more applicable.

**Confidence**: 2/5

**Recommendation**: **Partial-data candidate**

---

## 4. Catamaran Note

No catamarans are included in this shortlist. The MMG model treats the hydrodynamics of the hull, the propeller and the rudder in separate modules. The single-hull assumption is deeply embedded in the empirical coefficient formulas. Catamarans would require fundamentally different hull interaction terms, twin-engine modeling, and different added mass assumptions. A catamaran MMG variant is a separate research project.

---

## 5. Final Recommendation

### Top 3 Best Candidates to Implement First

| Priority | Model | Key Advantage |
|----------|-------|---------------|
| 🥇 | **DSYHS Sysser 1 (Standfast 43)** | Fully open hull geometry + hydrostatics + academic lineage |
| 🥈 | **J/105** | Complete class-rule geometry + known engine/prop + wide recognition |
| 🥉 | **KORDY30** | CFD-validated hull + towing tank data + appendage geometry |

### Why These Three

1. **DSYHS Sysser 1**: All DSYHS hull geometries are available in 3D IGES format, and hydrostatics data shows the full range of hull shape parameters tested. With LWL, BWL, draft, displacement, prismatic coefficient, and LCB all published, every parameter needed for the `MinimalVessel` calibration can be computed directly. The remaining unknowns (propeller diameter, rudder area) are bounded by the known Standfast 43 production boat specifications and the keel/rudder arrangement documented in the series. Empirical formulas based on the MMG model can estimate hydrodynamic parameters when ship principal particulars are given. This is the strongest data foundation of any sailing yacht.

2. **J/105**: The one-design class rules lock down every dimension including appendage geometry. The Yanmar 2GM20 auxiliary with its known prop diameter provides the propulsion data. This is the most recognizable production boat with the tightest parameter control.

3. **KORDY30**: It has actual towing tank validation and published CFD work. The academic pedigree means that if you need to cross-validate derived coefficients, published resistance curves and heeled-hull data exist.

### Safest First Implementation Target

**DSYHS Sysser 1 (Standfast 43 parent form)** is the safest first implementation because:

1. **No paywall on geometry**: The 3D hull is freely downloadable from 4TU.ResearchData.
2. **Complete hydrostatics are published**: You can compute Cb, Cp, LCB, and sectional area curves directly.
3. **Known academic methodology**: The Keuning et al. maneuvering model was explicitly built on DSYHS data, meaning the coefficient approximations are designed for this hull family.
4. **Fallback strategy**: Even if auxiliary engine assumptions are imperfect, the hull behavior will be physically correct, and you can swap propulsion parameters later.
5. **Extensibility**: Once Sysser 1 works, you have 50+ other hull variants in the same dataset for instant expansion.

**Implementation recipe**:
- Download Sysser 1 IGES + hydrostatics from 4TU
- Extract Lpp (≈ LWL), B, d, displacement, compute Cb
- Assume Standfast 43 auxiliary: ~30 HP diesel, ~16" folding prop → D_p ≈ 0.41 m
- Estimate rudder area from published keel/rudder arrangement figure (~0.5–0.7 m²)
- Compute η (D_p / rudder span) and f_alpha from rudder aspect ratio
- Feed into `MinimalVessel` → `calibrate()` → run MMG simulation
- Validate qualitatively: does turning circle diameter / steady-state yaw rate look reasonable for a 13m sailing yacht at 5 knots under power?



------------



# ChatGPT 5.2-search (14 sources were used)

## Methodology (what I did and why)
- **Prioritized “measurement-style” documents over marketing specs**—specifically **VPRS rating certificates** (which publish hull/appendage/prop data with per-parameter provenance codes), **ORC certificates** (which add hydrostatics-ish items like waterplane area and LCF), plus **one-design class rules/measurement forms** where they directly constrain appendages/prop/engine.   
- **Filtered for powered-maneuvering usefulness**: prop diameter/type, rudder geometry, keel/appendage geometry, displacement/mass, and enough principal dimensions to build an MMG-like low-speed model (even if some coefficients must be derived/assumed).  
- **Rejected (or downgraded) boats** where only LOA/LWL/beam/displacement are public and **rudder/prop/appendage geometry is missing**.

---

## Ranked shortlist (8 exact sailboat models)

### Monohulls (MMG-like powered docking most compatible)
| Rank | Exact model | Type / config notes | Why promising (powered maneuvering) | Key technical sources found | Confidence (1–5) | Recommendation |
|---:|---|---|---|---|---:|---|
| 1 | **Beneteau First 40.7 (deep draft)** | Monohull, single rudder, folding prop | VPRS certificate gives **rudder + keel chord/depth + prop dia**; ORC adds LCF and more measurement context | VPRS cert (First 40.7) ; ORC Intl cert (First 40.7)  | 5 | **Strong candidate** |
| 2 | **Beneteau First 36.7 (deep draft)** | Monohull, single rudder, folding prop | Very complete public paper trail (VPRS + ORC + class keel measurement constraints) | VPRS cert (First 36.7) ; ORC Intl cert (First 36.7) ; class rules keel chord/depth constraints  | 5 | **Strong candidate** |
| 3 | **Hallberg-Rassy 412** | Monohull cruiser, single rudder, 3-blade folding prop | VPRS certificate includes **prop dia (0.51 m)** and rudder/keel geometry; a good “heavy cruiser” handling target | VPRS cert (HR 412)  | 4 | **Strong candidate** |
| 4 | **Farr 40 One Design** | Monohull OD racer, saildrive + folding prop | Class docs directly constrain **engine model**, **prop diameter**, and key rudder measurements (good for docking model fidelity) | Farr 40 class rules (engine/prop/rudder constraints) ; Farr 40 measurement certificate (prop dia, rudder depth)  | 3 | Partial-data candidate |
| 5 | **X-35 One Design** | Monohull OD racer, folding prop | ORC OD cert publishes **displ/beam/draft/prop dia** with consistent OD baseline (good “standardized” sim boat) | ORC OD certificate (X-35 OD)  | 3 | Partial-data candidate |

### Monohulls but *twin-rudder* (still modelable, but you’ll need an assumption/adapter)
| Rank | Exact model | Type / config notes | Why promising | Key technical sources found | Confidence | Recommendation |
|---:|---|---|---|---|---:|---|
| 6 | **Jeanneau Sun Odyssey 349** | **Twin spade rudders**, folding prop | VPRS cert gives **twin-rudder flag + rudder chord/depth + prop dia** (rarely public for cruisers) | VPRS cert (SO 349)  | 4 | Strong candidate (with twin-rudder handling adaptation) |
| 7 | **Jeanneau Sun Fast 3200** | **Twin spade rudders**, folding prop | Same: VPRS provides rudder geometry + prop dia; good “sporty” handling contrast vs cruisers | VPRS cert (Sun Fast 3200)  | 4 | Strong candidate (with twin-rudder handling adaptation) |

### Training / research context (included per your requirement, but data completeness is weaker)
| Rank | Exact model | Context | Why it *might* be useful | Key public sources found | Confidence | Recommendation |
|---:|---|---|---|---|---:|---|
| 8 | **Navy 44 (M&R)** | **US Navy / USNA sail training** | Training context suggests there *may* be good docs, but I could only verify general specs + engine make from open sources | Navy 44 overview (engine make; training purpose) ; SailboatGuide summary page  | 2 | **Reject for now** (insufficient appendage/prop detail located) |

---

## Detailed notes per candidate (what you can model, what you must derive, what’s missing)

### 1) Beneteau First 40.7 (deep draft) — **Strong candidate**
**Why promising for your simulator**
- The **VPRS certificate** is unusually complete for a production racer/cruiser: it includes **keel chord/depth, rudder chord/depth, propeller type/blade count/diameter**, plus principal dimensions and weights—exactly what you need to build an MMG-like low-speed powered model.   
- The **ORC International certificate** adds additional measured context (e.g., ORC displacement/draft/beam/LOA, and it publishes **LCF-from-stem**, which is a practical clue for longitudinal mass/hydrostatic distribution when you don’t have xG).   

**Required parameters**
- **Directly available**
  - Dimensions: **LH/LOA, LWL, beam, draft**   
  - **Displacement / mass**: VPRS “Empty weight (EW)” and ORC “Displacement”   
  - **Rudder geometry**: **rudder depth (RD)**, **rudder chord (RC)**   
  - **Appendage geometry**: **keel depth (KD)**, **keel chord (KC)**   
  - **Propulsion**: folding prop, **PRD (prop diameter)**, blade count   
  - Longitudinal hydrostatics clue: **LCF from stem** (ORC)   
- **Partially available but derivable**
  - **Lpp**: not stated as Lpp, but you can choose an approximation using **LWL** (common for yachts in simplified maneuvering models).   
  - **Rudder area (A_R)**: not printed explicitly, but can be approximated from RD×RC with a planform factor (you’ll still want a better planform estimate if you can find a rudder drawing).   
- **Still missing / would need assumptions**
  - **Cb**: canoe-body draft is not provided (overall draft includes keel), so any Cb will be an estimate unless you obtain a lines plan / offsets / hydrostatics.   
  - **x_G / LCG**: not directly published; ORC’s LCF helps but is not xG.   
  - **Engine model/power, gear ratio, rpm limits**: not on these certificates.   

**Confidence (modelable in jsmaneuvering): 5/5**

---

### 2) Beneteau First 36.7 (deep draft) — **Strong candidate**
**Why promising**
- Same “VPRS certificate advantage” as the First 40.7, plus you also have **ORC displacement/draft/beam/LOA** and **prop diameter**, which strengthens cross-checking.   
- The **class rules** publish keel measurement constraints (keel depth + chord limits), which is useful to bound appendage geometry when you’re deriving hydrodynamic coefficients.   

**Required parameters**
- **Directly available**
  - Principal dimensions: **LH, LWL, beam, draft**   
  - **Displacement/mass**: VPRS empty weight + ORC displacement   
  - **Rudder depth/chord** (RD/RC)   
  - **Keel depth/chord** (KD/KC)   
  - **Prop diameter** (PRD) and type/blades   
  - ORC also includes **LCF-from-stem** for this boat’s measurement set.   
- **Partially available but derivable**
  - **A_R**: can approximate from RD×RC; refine later with a planform.   
  - **Keel planform area**: chord/depth constraints from class rules help bound this (still not a full planform).   
- **Still missing**
  - **Cb**, **x_G/LCG**, detailed hull sections/lines.   
  - **Engine specs** (model, max rpm, reduction) not on the certificates/rules excerpts we have.   

**Bonus data found**
- Class rules appendix provides a consolidated specs sheet (LOA/LWL/beam/draft/displacement) that you can use as a “canonical” class baseline alongside the rating certificates.   

**Confidence: 5/5**

---

### 3) Hallberg-Rassy 412 — **Strong candidate**
**Why promising**
- Gives you a well-documented **heavier displacement cruiser** case (different inertia, low-speed response) with explicit **rudder/keel/prop** geometry on a public certificate.   

**Required parameters**
- **Directly available (VPRS)**
  - LH, LWL, beam, draft   
  - Empty weight (EW), ballast weight (KW)   
  - Keel depth/chord (KD/KC)   
  - Rudder depth/chord (RD/RC)   
  - Prop: folding, blades, **PRD = 0.51 m**   
- **Derivable**
  - Lpp approximation from LWL; rudder area approximation from RD×RC.   
- **Missing**
  - Cb, xG/LCG, propulsion power/gear ratio, detailed underwater body geometry.   

**Confidence: 4/5** (good, but you’ll do more “derived estimates” than with a vessel that has published lines/hydrostatics)

---

### 4) Farr 40 One Design — **Partial-data candidate**
**Why promising**
- OD class documents pin down the **engine model**, **prop diameter bounds**, and a set of **rudder and keel measurement constraints**—excellent for “don’t let users cheat geometry” fidelity in a simulator.   

**Required parameters**
- **Directly available**
  - Engine specification (class rules specify standard Yanmar model; equivalency guidance)   
  - **Propeller diameter** constraints (min/max)   
  - Rudder depth (hull surface to lower tip) and thickness constraint   
  - Some keel chord measurements at defined upper/lower positions (class rules)   
- **Partially available / derivable**
  - Rudder area is not directly given in the excerpts; you’d need a planform (template/drawing) to compute A_R reliably.   
- **Missing**
  - Publicly-citable principal dimensions + displacement from a *technical* source in the material I collected (you likely can find them elsewhere, but I’m not going to “fill from memory”).  

**Confidence: 3/5**

---

### 5) X-35 One Design — **Partial-data candidate**
**Why promising**
- ORC publishes an **OD certificate** with consistent baseline measurement including **displacement, LOA, beam, draft**, and **prop diameter/type**—good for a standardized sim boat whose parameters won’t vary wildly between hulls.   

**Required parameters**
- **Directly available**
  - Displacement, LOA, beam, draft   
  - Propeller type + **PRD (0.420 m)**   
- **Derivable**
  - Lpp approximation from LWL/IMSL-style lengths (but this OD cert excerpt doesn’t give LWL; it gives IMSL/RL).   
- **Missing**
  - Rudder geometry (RD/RC or area), keel chord/depth (beyond draft), engine details.   

**Confidence: 3/5**

---

### 6) Jeanneau Sun Odyssey 349 — **Strong candidate, but twin-rudder**
**Why promising**
- It’s a mainstream modern cruiser with auxiliary propulsion, and the VPRS certificate explicitly flags **twin spade rudders** and provides rudder chord/depth plus prop diameter—rare in public docs.   

**Required parameters**
- **Directly available**
  - LH, LWL, beam, draft, empty weight   
  - Keel depth/chord, rudder depth/chord   
  - Prop: folding, blades, diameter   
- **Derivable**
  - A_R as “two rudders”: you can either (a) model each rudder explicitly (best), or (b) collapse to an equivalent single rudder area and adjust lever arm assumptions for low-speed.   
- **Missing**
  - Engine/gearbox/rpm, detailed hull form/hydrostatics, xG.   

**Confidence: 4/5** (high-quality public inputs; the main risk is twin-rudder representation vs your MMG assumptions)

---

### 7) Jeanneau Sun Fast 3200 — **Strong candidate, but twin-rudder**
**Why promising**
- A well-known offshore-capable performance monohull; VPRS certificate provides **keel + twin rudders + prop diameter**, so you can build a credible powered low-speed model (and then later layer sails).   

**Required parameters**
- **Directly available**
  - LH, LWL, beam, draft, empty weight, ballast   
  - Keel depth/chord, rudder depth/chord (twin spade)   
  - Prop: folding, **PRD = 0.38 m**   
- **Missing**
  - Engine/gearbox/rpm, xG, Cb/lines/hydrostatics.   

**Confidence: 4/5**

---

### 8) Navy 44 (M&R) — **Reject for now (training context, but incomplete public geometry)**
**Why I included it**
- It is explicitly a **US Navy / US Naval Academy sail training design**, so it’s exactly the kind of platform that *often* has manuals and measured data.   

**What’s available vs missing**
- **Available (from open sources I found):** training purpose + engine make (Westerbeke diesel), general configuration notes.   
- **Missing for your MMG-like build:** publicly verifiable prop diameter, rudder area/geometry, keel planform geometry, and any maneuvering trials/turning data.

**Confidence: 2/5** → **Recommend: Reject (until better primary technical docs are located)**

---

## Final recommendation (what to implement first)

### Top 3 best candidates to implement first
1) **Beneteau First 40.7 (deep draft)** — best balance of “real production auxiliary yacht” + unusually complete public measurement data (rudder/keel/prop + ORC context/LCF).   
2) **Beneteau First 36.7 (deep draft)** — similarly complete, plus class measurement constraints that help keep derived geometry honest.   
3) **Hallberg-Rassy 412** — gives you a heavier, cruiser-style handling target with explicit rudder/keel/prop data (useful to validate that your coefficient-derivation path doesn’t only work for racer/cruisers).   

### Safest first implementation target
**Beneteau First 40.7** is the safest because it’s **single-rudder** (no twin-rudder adapter work), and you can cross-check key inputs between **VPRS** and **ORC** documents (dimensions, displacement, prop diameter/type, plus LCF clue).   

---

### Practical “MMG-like” build note (to help your derivation workflow)
The VPRS certificates also encode **per-parameter provenance** (Authenticated / Published / Database-derived / Estimated, etc.), which is a big deal when you’re deciding what to trust vs what to treat as a tunable parameter. 



------------



# ChatGPT Deep Research (25 sources were used)

## Real Sailboats with Sufficient Public Data for MMG-like Powered Maneuvering Models

### Methodology and screening logic

This research focused on *real, identifiable* sailboat/yacht models where enough publicly available technical information exists to support a **physically credible low‑speed powered maneuvering / docking model** in an MMG-like framework, rather than only sail performance polars. The most useful public-source pattern, repeatedly, is:

1) a measurement/rating document (especially an entity["organization","Offshore Racing Congress","handicap rating body"] certificate) that locks down principal dimensions, displacement/lightship, and propeller diameter/type;   
2) a one-design “fairness” or class documentation set (offsets/templates/measurement procedures) that provides **keel/rudder geometry** beyond marketing specs.   
3) an owner/operator technical document that reveals *actual powered-handling specifics* (e.g., propeller handedness, backing tendency) and/or propulsion installation details.   

Each candidate below is evaluated against your “strong minimum dataset” and is explicitly split into:

- **Directly available** (explicitly stated in sources)  
- **Derivable** (not stated, but can be computed credibly from stated measurements, templates, and standard naval-architecture relationships)  
- **Still missing / high-risk** (would require guesses that materially affect harbor maneuvering realism)

Confidence score (1–5) means: **likelihood the boat can be modeled credibly in jsmaneuvering** as a powered low-speed maneuvering craft (not just under sail). A score of 5 assumes a realistic path to hull + rudder + prop + mass properties sufficient for MMG-like coefficients, even if you still need empirical/CFD tuning.

### Ranked candidate shortlist for monohulls

| Rank | Exact model | Type/class | Why it’s promising for powered maneuvering | Required parameters: what’s clearly public | Main gaps that remain | Confidence (1–5) | Recommendation |
|---:|---|---|---|---|---|---:|---|
| 1 | J/105 | Production one-design keelboat (aux engine) | Combines an ORC certificate (dims + prop diameter/type) with detailed keel/rudder measurement procedures/templates → unusually strong path to credible rudder/keel geometry for MMG-like derivatives.  | LOA, B, draft, displacement, prop diameter/type from ORC.  Keel/rudder measurement procedure + templates enabling foil reconstruction.  | x_G and radii of gyration not directly published; engine model/power not in ORC cert; prop pitch/thrust curves not public.  | 5 | Strong candidate |
| 2 | Navy 44 (Mk I, McCurdy & Rhodes / Tillotson‑Pearson era) | Training / offshore auxiliary keelboat | Training docs include principal dimensions + displacement + engine power and operational docking behavior (right‑hand prop, backs to port), plus evidence of a specific feathering prop size.  | LOA, LWL, beam, draft, displacement, engine power stated.  Backing tendency + prop handedness stated (directly relevant to harbor maneuvering).  Prop diameter (19 in) and type indicated in training/BIB-derived material.  | Rudder area/planform not explicitly given in accessible sources; Mk II technical reports exist but were not reliably retrievable from primary hosting during this session, so Mk I is safer.  | 4 | Strong candidate |
| 3 | Beneteau First 36.7 | Production one-design racer/cruiser (aux engine) | ORC certificate provides a dense hull+appendage measurement set including prop diameter/type and wetted surface; class rules emphasize keel measurement certification, enabling tighter keel geometry control than typical production boats.  | LOA, B, draft, displacement, prop diameter/type and “HULL AND APPENDAGES” fields (incl. wetted area, IMS L).  | Rudder planform/area not directly published in the sources found; engine model/power likely in manuals but not extracted here at template level.  | 4 | Strong candidate |
| 4 | X‑35 One Design | Production one-design racer/cruiser (aux engine) | ORC one-design certificate fixes principal dims and hydrostatic-related fields (wetted surface, sink, VCG); separate ORC cert evidence gives prop diameter/type. Class rules indicate keel/rudder template control (though construction manual access is the critical question).  | LOA, B, draft, displacement, wetted surface, sink, VCG fields from ORC one-design cert.  Prop diameter/type from ORC cert page excerpt.  | The *actual* keel/rudder templates are referenced via class documentation systems; if the construction manual/templates aren’t fully public, rudder area becomes an estimate problem.  | 3 | Partial-data candidate |
| 5 | Bavaria 34 | Production cruising yacht (aux engine) | ORC certificate provides hull principal dimensions + displacement + prop diameter/type. Owner-manual/plan references suggest dedicated rudder and engine installation drawings exist (potentially enough to reconstruct appendages if accessible in full).  | LOA, B, draft, displacement, prop diameter/type.  | Rudder/keel planform detail not confirmed as fully public (manual indicates drawings exist, but not extracted as measured geometry here).  | 3 | Partial-data candidate |
| 6 | Beneteau First 40.7 | Production racer/cruiser (aux engine) | ORC certificate provides principal dims + displacement + prop diameter/type; additional official/accident-investigation documentation exists around the model’s keel structure (helpful for keel geometry/structure credibility, though not hydrodynamic coefficients by itself).  | LOA, B, draft, displacement, prop diameter/type.  | Rudder area/planform not found as a directly published numeric dataset; engine/prop specifics beyond diameter missing; many additional pages are marketing-oriented unless you locate class/measurement offsets.  | 3 | Partial-data candidate |
| 7 | Colgate 26 (aka “Navy 26” training fleet) | Training keelboat (typically outboard auxiliary) | Official specs page gives principal dimensions and displacement; it is explicitly positioned as a training platform used by the US naval training ecosystem, implying higher likelihood of operational procedures and consistent configurations.  | LOA, LWL, beam, draft, displacement/ballast from official specs.  Training SOP exists (tow/handling language).  | Outboard propulsion details (prop diameter, thrust curve) are not standardized in public docs; rudder geometry is described qualitatively as “extra large” in an article, but not as a measured planform dataset.  | 3 | Partial-data candidate |
| 8 | Archambault A35 | Production racer/cruiser (aux engine) | ORC certificate provides the hard numeric basics (dims, displacement, prop diameter/type) typical of the “minimum viable” powered maneuvering model; however, publicly accessible foil geometry is weaker than the top candidates.  | LOA, B, draft, displacement, prop diameter/type.  | Rudder/keel templates not found in authoritative public form here; engine details beyond what ORC implies are missing.  | 2 | Partial-data candidate |
| 9 | Bavaria 42 Match | Production cruiser/racer (aux engine) | A very complete ORC certificate example (including detailed “HULL AND APPENDAGES” fields and propulsion geometry terms like PRD, plus VCG input method), enabling a robust “MinimalVessel + derived estimates” start.  | LOA, beam, draft, displacement, wetted area, IMS L/LSM0, VCG values, prop diameter/type.  | Rudder planform/area still not directly provided; engine specifics still absent; appendage geometry would remain approximate without drawings/templates.  | 2 | Partial-data candidate |

### Ranked candidate shortlist for catamarans and multihulls

Catamarans can be valuable additions for a simulator, but they often violate the simplest single-screw + single-rudder MMG assumptions (twin screws, twin rudders, large lateral separation, different low-speed yaw moments). These are included as *separate* candidates and are ranked lower unless you are ready to expand the coefficient assumptions.   

| Rank | Exact model | Hull form | Why it’s promising | Required parameters: what’s clearly public | Main gaps that remain | Confidence (1–5) | Recommendation |
|---:|---|---|---|---|---|---:|---|
| 1 | Gunboat 66 | Catamaran (twin-engine cruising performance cat) | ORC Multihull certificate provides a rare combination: principal dims + displacement + prop diameter/type and detailed hull/appendage measurement fields, making it feasible to build a twin-screw low-speed model if your simulator supports it.  | LOA, beam, draft, displacement, wetted area, prop diameter/type present in ORC Multihull cert.  | Rudder and daggerboard planform geometry not present at template level; twin-screw dynamics may exceed current MMG assumptions in your codebase.  | 2 | Partial-data candidate |
| 2 | “Kotuku” 20m High-Performance Cruise Cat (ORC “20m HP Cruise Cat”) | Catamaran (custom) | ORC Multihull certificate contains twin-screw flag + prop diameter and extensive measurement fields; useful as a *data-rich multihull test case* rather than a widely replicated production model.  | LOA, beam, draft, displacement, wetted area; twin screw = Yes; prop diameter/type present.  | Not a standard production model (harder to “recognize” as an exact model family); appendage geometry still not template-level public; multihull assumptions likely require model-family extensions.  | 1 | Reject (for now) |

### Detailed candidate notes for monohulls

**J/105 — one-design keelboat (aux engine) — Strong candidate (Confidence 5/5).**  
Why promising: The ORC certificate provides the “hard” maneuvering-relevant numeric backbone (LOA, beam, draft, displacement and prop diameter/type).  The one-design documentation includes a dedicated keel & rudder measurement procedure with section templates and measurement points, which is unusually close to what you need to reconstruct appendage geometry (and therefore estimate rudder area and lift-curve slopes with defensible assumptions).   
Directly available: LOA 10.570 m, B 3.346 m, draft 2.001 m, displacement 3,893 kg, folding 2‑blade prop with diameter 0.381 m.   
Derivable: Lpp from ORC/IMS length fields (or from LWL/LOA relationships); Cb from displacement volume and an estimated Lpp×B×T; rudder area from the published rudder geometry sections/templates; keel geometry similarly from offsets/templates.   
Still missing: x_G and mass moments of inertia (can be approximated from typical cruiser/racer mass distribution, then tuned); engine torque curve/gear ratio/pitch.   

**Navy 44 (Mk I) — training offshore auxiliary keelboat — Strong candidate (Confidence 4/5).**  
Why promising: This vessel family is explicitly used for seamanship/shiphandling training, and the public training material includes principal dims, displacement, ballast, and engine rating.  Critically for docking simulation realism, the “getting underway / return” procedure states it has a **right-handed prop** and “will back to port,” which is directly actionable at the MMG force-model level (prop walk / asymmetric stern forces).  There is also evidence of a **specific feathering propeller size (19-inch diameter)** used on Navy 44 craft documentation.   
Directly available: LOA 44’0”, LWL 34’7”, beam 12’5”, draft 7’3”, displacement 27,654 lb; engine 37 hp Westerbeke; plus operating/docking procedures.   
Derivable: Lpp ≈ LWL for low-speed modeling; Cb from displacement and principal dims; propeller diameter as 19 in (~0.483 m) where that installation applies; rudder area may be reverse-engineered if you later obtain deck/underbody diagrams referenced on the training page.   
Still missing: Rudder planform (area, aspect ratio) as a directly measured dataset in the sources retrieved here; shaft/rudder offsets and hydro coefficients from trials were not located in fully accessible form during this session.   

**Beneteau First 36.7 — production one-design racer/cruiser — Strong candidate (Confidence 4/5).**  
Why promising: The ORC certificate includes not only the usual LOA/B/draft/displacement and propeller diameter/type, but also the extended “HULL AND APPENDAGES” measurement block (including wetted area and IMS length).  The North American one-design rules document the keel measurement and certification process, which suggests a stable, measurable keel geometry baseline across boats.   
Directly available: LOA 10.667 m, beam 3.458 m, draft 2.220 m, displacement 5,517 kg; folding 2‑blade prop diameter 0.405 m; wetted area 25.02 m²; IMS L 9.560 m.   
Derivable: Lpp from IMS L; Cb from displacement and Lpp×B×T; prop/rudder inflow factors can be initialized from typical racer/cruiser stern geometry, then tuned; some mass distribution clues from ORC flotation/stability fields + typical interior arrangements.   
Still missing: Rudder planform area and section series were not found as one-design public offsets in the sources retrieved here; engine installation and gear ratio remain uncertain unless you mine the full manual/engine documentation set.   

**X‑35 One Design — production one-design racer/cruiser — Partial-data candidate (Confidence 3/5).**  
Why promising: The ORC one-design certificate provides principal dims plus extra hydrostatic-adjacent fields (sink, wetted surface, VCG terms), which is valuable for initial mass/hydrostatics consistency.  A separate ORC certificate excerpt gives propeller type/diameter.   
Directly available: LOA 10.600 m, beam 3.250 m, draft 2.173 m, displacement ~4,487 kg; plus wetted surface and sink.  Prop diameter 0.420 m (folding 2-blade).   
Derivable: Lpp from IMS L; Cb from displacement and principal dims; approximate rudder area from typical X‑35 rudder proportions if you can’t access templates.   
Still missing / high-risk: Class materials reference keel/rudder template compliance, but if the construction manual/templates are not fully public, rudder/keel geometry becomes estimation-heavy, which undermines maneuvering realism (especially reverse/prop-rudder interaction).   

**Bavaria 34 — production cruising yacht — Partial-data candidate (Confidence 3/5).**  
Why promising: The ORC certificate gives the maneuvering-critical numeric base including prop diameter.  A publicly accessible manual indicates that specific drawings exist for rudder layout and engine installation, which—if you can obtain the drawings—could close the appendage and propulsion-geometry gaps.   
Directly available: LOA 10.800 m, beam 3.480 m, draft 2.030 m, displacement 5,460 kg; prop diameter 0.420 m (folding 2‑blade).   
Derivable: Lpp from ORC/IMS L fields; Cb from displacement; rudder area potentially derivable if the rudder layout drawing is fully viewable/exportable.   
Still missing / high-risk: Rudder planform numbers (area, span, mean chord) are not confirmed as extractable from publicly visible pages; engine model/gear ratio/pitch not present in the ORC certificate.   

**Beneteau First 40.7 — production racer/cruiser — Partial-data candidate (Confidence 3/5).**  
Why promising: ORC certificate fixes a credible baseline for powered maneuvering inputs: LOA/B/draft/displacement plus prop diameter/type.  Separately, there is a formal investigation annex including detailed technical discussion of the model’s keel structure, which can help validate keel configuration assumptions when you are forced to estimate details.   
Directly available: LOA 11.924 m, beam 3.770 m, draft 2.425 m, displacement 7,272 kg; folding 2‑blade prop diameter 0.407 m.   
Derivable: Lpp from IMS L (if extracted from full ORC block); Cb from displacement and principal dims; rudder area via secondary sources if you later find appendage templates/offsets.   
Still missing / high-risk: Rudder planform area/sections and engine/gear details were not found as public authoritative numeric datasets here.   

**Colgate 26 (“Navy 26”) — training keelboat with outboard — Partial-data candidate (Confidence 3/5).**  
Why promising: For a small training yacht, surprisingly good official dimension data is public, and there is an explicit Navy-connected operations/SOP document.  This makes it suitable for a “MinimalVessel + derived estimates” approach, particularly if your simulator benefits from a smaller craft that still behaves like a keelboat under power.   
Directly available: LOA 25’8”, LWL 20’0”, beam 8’6”, draft 4’6”, displacement 2600 lb (standard model).   
Derivable: Cb (small-keelboat typical range) from displacement and dimensions; rudder area guessed more safely if you later obtain drawings; outboard prop diameter can be parameterized by selecting a specific common motor configuration rather than treating it as inherent to the hull.   
Still missing / high-risk: Outboard propulsion is not standardized in the public specs (prop diameter, thrust, mounting offset); rudder is described qualitatively (“extra large”) but not as a measured planform.   

**Archambault A35 — production racer/cruiser — Partial-data candidate (Confidence 2/5).**  
Why promising: Minimal dataset is solid via ORC (principal dims, displacement, prop diameter/type).   
Directly available: LOA 10.617 m, beam 3.594 m, draft 2.165 m, displacement 4,657 kg; folding 2‑blade prop diameter 0.405 m.   
Derivable: Lpp and Cb from ORC length fields; rudder area by analogy with similar racer/cruisers (but this is weaker than template-based derivation).   
Still missing / high-risk: No authoritative public rudder/keel offsets/templates were identified here; engine model/power and stern aperture geometry remain uncertain.   

**Bavaria 42 Match — production cruiser/racer — Partial-data candidate (Confidence 2/5).**  
Why promising: An unusually detailed ORC certificate example contains many of the “bonus” stability/flotation and propeller-geometry terms that can help you build a consistent mass/hydrostatics setup quickly.   
Directly available: LOA 12.460 m, beam 3.760 m, draft 2.170 m, displacement 7,808 kg; wetted area 31.69 m²; VCG values; folding 3‑blade prop diameter 0.450 m.   
Derivable: Lpp (IMS L given), Cb, and a plausible minimal MMG coefficient set initialized from empirical yacht formulas.   
Still missing / high-risk: Rudder planform area and section geometry; engine/gear/pitch; without appendage drawings, reversing and prop‑rudder interaction will be approximate.   

### Detailed candidate notes for catamarans and multihulls

**Gunboat 66 — catamaran — Partial-data candidate (Confidence 2/5).**  
Why promising: The ORC Multihull certificate explicitly includes propeller diameter/type and an unusually rich measurement block (wetted area, lightship displacement, etc.), enabling a physically grounded twin-screw model *if* your simulator can represent twin rudders/screws and large transverse lever arms.   
Directly available: LOA 20.200 m, beam 8.654 m, draft 3.908 m; displacement 18,728 kg; folding 3‑blade prop diameter 0.550 m (in the cited certificate configuration).   
Derivable: Catamaran mass distribution can be approximated from hull/bridge-deck arrangements; yaw moments from twin props can be computed geometrically once engine separation is known (not in ORC).   
Still missing / high-risk: Rudder and daggerboard planform/areas; engine separation and rudder separation; this likely exceeds “single-screw MMG” assumptions unless you extend the model.   

**Kotuku 20m HP Cruise Cat — catamaran — Reject for now (Confidence 1/5).**  
Why it’s not a good first target: Although the ORC Multihull certificate is data-rich (including twin-screw flag and prop diameter), this is not a standardized production model family. That makes it harder to justify as a “real model yacht” for a simulator catalog unless you specifically want this one custom boat.   
Directly available: LOA 20.000 m, beam 9.324 m, draft 3.932 m, displacement 18,720 kg; twin screw = Yes; prop diameter 0.560 m.   
Still missing: Public appendage planforms and geometry; practical docking-specific handling documentation; plus the simulator-modeling value of a one-off is lower than documented one-design monohulls.   

### Final recommendations and safest first implementation target

The top three to implement first, prioritizing credibility of low‑speed powered maneuvering and realistic parameter derivation:

**J/105 (Top pick).** It has the clearest “MMG-like derivation path” because you can pair an ORC certificate (principal dims + prop diameter/type) with a dedicated keel/rudder measurement procedure that supports a defensible rudder/keel geometry reconstruction rather than pure estimation.   

**Navy 44 (Mk I).** It is explicitly a seamanship training craft, and the public training documents include not only principal dimensions and engine rating but also docking-relevant qualitative behavior (right-hand prop, backs to port) that you can encode directly in the low-speed model.   

**Beneteau First 36.7.** It is a common production one-design with a strong ORC measurement footprint and class-driven keel measurement discipline, making it a good “popular mid-size auxiliary yacht” target even if rudder planform remains the main missing piece to chase down.   

**Safest first implementation target:** **J/105.** Among all candidates found, it most directly satisfies your “not just marketing specs” rule while still being a real, recognizable production sailboat with auxiliary propulsion and unusually detailed appendage measurement documentation suitable for deriving MMG-like coefficients. 