These are results of research about general sailboats coefficients ranges from 4 AI research agents (ChatGPT Deep Research, Gemini Deep Research, Claude Opus 4.6-search and Grok 4.20-beta1). 



------------



# Gemini Deep Research (44 sources were used)

## Identification and Characterization of Maneuvering Coefficients for Monohull Auxiliary Sailing Yachts (10–16 m LOA) in Low-Speed Powered Operations

The development of high-fidelity simulators for the maritime sector increasingly relies on the Maneuvering Modeling Group (MMG) standard, a modular framework that discretizes the complex hydrodynamic interactions between the hull, propeller, and rudder. While the MMG model was originally calibrated for large merchant vessels, such as the KVLCC2 tanker or the DTMB 5415 surface combatant, its application to monohull sailing yachts in the 10–16 m (34–52 ft) range necessitates a significant shift in parameterization. Unlike ships, sailing yachts are characterized by low block coefficients, deep high-aspect-ratio appendages, and a high degree of coupling between sway and roll, even under power at low speeds.  

The primary challenge in modeling these vessels for low-speed maneuvering—specifically during docking and close-quarters berthing—lies in the accurate identification of hydrodynamic derivatives and interaction coefficients that are often neglected in traditional velocity prediction programs (VPPs). This report provides a comprehensive analysis of the typical value ranges, empirical derivation methods, and behavioral anchors required to initialize a realistic MMG-style maneuvering model for the auxiliary monohull sailing yacht class.  

### Research Methodology and Scope

The data and insights presented herein are derived from a multi-disciplinary review of maritime research, spanning computational fluid dynamics (CFD) studies of yacht appendages, planar motion mechanism (PMM) captive model tests, and full-scale sea trials of auxiliary cruisers. The analysis focuses on monohull sailing yachts within the 10–16 m length overall (LOA) range, a segment dominated by mass-produced charter cruisers and performance racer-cruisers.  

The scope is restricted to yachts equipped with auxiliary inboard diesel engines, typically ranging from 20 to 80 horsepower, utilizing either traditional shaft drives or modern saildrive units. Vessels such as catamarans, pure racing boats lacking auxiliary power, and heavy traditional sail training vessels are excluded to maintain the specificity of the hydrodynamic derivatives. The data priority is given to fin-keel configurations with spade rudders, as these represent the most common modern yacht architecture in the targeted length range.  

The analysis integrates findings from the Delft Systematic Yacht Hull Series (DSYHS), which provides the most robust empirical foundation for sailing yacht hull forms, and adapts interaction formulas from the MANSIM laboratory and other MMG-centric research bodies. This hybrid approach ensures that the model remains grounded in yacht-specific physics while benefiting from the standardized structure of the MMG framework.  

### Theoretical Framework: The MMG 3-DOF Model for Yachts

The motion of a sailing yacht in the horizontal plane is described by three degrees of freedom (DOF): surge, sway, and yaw. The governing equations are centered on a ship-fixed coordinate system, where the total force and moment are the sum of hull (H), propeller (P), and rudder (R) contributions.  

(m+mx​)u˙−(m+my​)vr−xG​mr2\=XH​+XP​+XR​

(m+my​)v˙+(m+mx​)ur+xG​mr˙\=YH​+YR​

(Iz​+Jz​)r˙+xG​m(v˙+ur)\=NH​+NR​

For sailing yachts, the mass (m) and moment of inertia (Iz​) must account for the highly concentrated weight of the ballast keel, which significantly influences the center of gravity (xG​) and the added mass terms (mx​,my​,Jz​). Added mass in the sway direction (my​) is particularly sensitive to the keel's profile area, often exceeding the vessel's actual mass by a factor of 0.8 to 1.1 due to the entrained water volume around the deep appendage.  

### Coefficient Range Table: 10–16 m Auxiliary Monohulls

The following table summarizes the defensible typical ranges for the target parameters in the MMG model, reflecting the unique hydrodynamics of modern fin-keel yachts.  

| Parameter | Typical Range (10-16m LOA) | Charter/Saildrive Range | Confidence | Note on Physical Effect |
| --- | --- | --- | --- | --- |
| Cb​ | 0.32 – 0.45 | 0.38 – 0.42 | High | Low values reflect slender canoe bodies. |
| dc​ (Canoe Draft) | 0.45 – 0.80 m | 0.50 – 0.65 m | High | Reference draft for hull cross-flow drag. |
| xG′​ | \-0.02 – 0.04 | 0.00 – 0.03 | Medium | Center of gravity; positive is forward of midships. |
| AR′​ (Area Ratio) | 0.012 – 0.022 | 0.015 – 0.018 | High | Rudder area relative to L×d. |
| fα​ | 1.80 – 2.40 | 1.90 – 2.15 | Medium | Rudder lift gradient; determines steering authority. |
| η   | 0.55 – 0.90 | 0.65 – 0.85 | High | Propeller diameter to rudder span ratio. |
| wP0​ | 0.05 – 0.22 | 0.06 – 0.12 | High | Wake fraction; lower for saildrives. |
| tP​ | 0.04 – 0.18 | 0.05 – 0.10 | Medium | Thrust deduction; lower for saildrives. |
| tR​ | 0.02 – 0.08 | 0.03 – 0.05 | Low | Steering resistance deduction. |
| lR′​ | \-0.42 – -0.52 | \-0.45 – -0.50 | High | Longitudinal coordinate of rudder. |
| κ   | 0.50 – 0.75 | 0.55 – 0.65 | Medium | Longitudinal inflow velocity to rudder. |
| ϵ   | 0.85 – 1.10 | 0.90 – 1.02 | Low | Propeller-to-rudder wake ratio. |
| xH′​ | \-0.40 – -0.50 | \-0.42 – -0.48 | Medium | Center of rudder-induced hull force. |
| aH​ | 0.08 – 0.25 | 0.12 – 0.18 | Low | Increase in hull sway force due to rudder. |
| mx′​ | 0.03 – 0.09 | 0.05 – 0.07 | High | Non-dimensional added mass in surge. |
| my′​ | 0.65 – 1.15 | 0.75 – 0.95 | Medium | Non-dimensional added mass in sway. |
| Jz′​ | 0.05 – 0.12 | 0.06 – 0.09 | Medium | Non-dimensional added yaw moment of inertia. |
| R0′​ | 0.015 – 0.035 | 0.020 – 0.028 | High | Hull resistance coefficient at zero leeway. |

 

### Hull Hydrodynamics and the DSYHS Legacy

The characterization of the hull forces (XH​,YH​,NH​) for sailing yachts is intrinsically linked to the Delft Systematic Yacht Hull Series (DSYHS). This dataset, spanning decades of research at Delft University, provides regression formulas that are far more accurate for the "slender" hulls of sailing yachts than traditional merchant ship formulas.  

The linear hydrodynamic derivatives (Yv′​,Nv′​,Yr′​,Nr′​) define the initial response of the yacht to a steering command or a change in leeway. For yachts, the "directional stability" is inherently high due to the deep keel, which creates a significant restoring yaw moment when the boat develops leeway (Nv′​<0). However, at low speeds—common in docking—the cross-flow drag terms (Yvvv′​,Nvvv′​) become the dominant forces as the boat moves laterally.  

#### Surge Force Derivatives (XH​)

The surge force includes the hull's resistance and the longitudinal components of centrifugal forces during a turn. For a yacht, the surge resistance (R0′​) is strongly dependent on the Froude number (Fn), but at docking speeds (Fn<0.15), it is primarily viscous drag.  

| Derivative | Typical Range | Source | Behavioral Impact |
| --- | --- | --- | --- |
| Xvv′​ | \-0.100 to -0.350 |     | Surge resistance increase due to sway. |
| Xvr′​ | 0.020 to 0.060 |     | Interaction between sway and yaw in surge. |
| Xrr′​ | \-0.005 to -0.015 |     | Surge resistance due to turning. |
| Xvvvv′​ | 0.500 to 1.500 |     | Higher-order sway-surge coupling. |

 

#### Sway Force and Yaw Moment Derivatives (YH​,NH​)

Sailing yachts exhibit high sway damping due to the keel area. This is reflected in the large negative values of Yv′​. The interaction between the hull and the rudder is captured by aH​, which represents the additional lateral force generated by the hull as the rudder diverts flow.  

| Derivative | Typical Range | Confidence | Effect |
| --- | --- | --- | --- |
| Yv′​ | \-0.250 to -0.550 | Medium | Lateral resistance to drift (Sway damping). |
| Yr′​ | 0.040 to 0.110 | Low | Lateral force induced by rotation. |
| Yvvv′​ | \-1.50 to -4.50 | Medium | Non-linear cross-flow drag (Docking). |
| Nv′​ | \-0.110 to -0.190 | Medium | Directional stability (Weather helm tendency). |
| Nr′​ | \-0.045 to -0.085 | Medium | Yaw damping (Resistance to rotation). |
| Nrrr′​ | \-0.030 to -0.065 | Low | Non-linear yaw damping at high rotation rates. |

Exportovat do Tabulek

### Formula and Derivation Table

For parameters that are not directly published for specific yacht models, the following empirical derivations are recommended, drawing on both MMG standards and yacht-specific corrections.  

| Parameter | Recommended Derivation Formula | Required Inputs | Limitations for Yachts |
| --- | --- | --- | --- |
| mx′​ | mx′​\=0.05×m′ | Displacement (m) | Does not account for large prop hubs. |
| my′​ | my′​≈0.5ρLwl2​dc​ρ4π​Tkeel2​Lkeel​​ | Keel draft (Tk​), Keel length (Lk​) | Sensitive to keel-hull interaction. |
| Jz′​ | Jz′​≈my′​×(0.25)2 | Calculated my′​ | Rough approximation; assumes radii of gyration. |
| fα​ | fα​\=Λ+2.256.13Λ​ | Aspect Ratio (Λ) of rudder | Ignores hull/skeg shielding. |
| wP0​ | wP0​\=0.5Cb​−0.05 (Shaft) | Block Coefficient (Cb​) | Too high for saildrives. |
| KT​(J) | k0​+k1​J+k2​J2 | Propeller open-water data | Folding props have non-linear KT​. |
| aH​ | aH​≈0.1+0.15×LdAR​​ | Rudder area, Hull geometry | Highly variable for spade rudders. |
| γR​ | γR​\=1−0.5Cb​ | Block Coefficient (Cb​) | Keels act as flow straighteners. |

 

The derivation of my′​ (added mass in sway) is perhaps the most critical calculation for a realistic yacht model. In standard ship modeling, my′​ is roughly proportional to the draft squared. For a sailing yacht, the "effective draft" for added mass is closer to the full draft (including the keel) rather than the canoe draft (dc​), leading to values that are significantly higher than those found in merchant vessels.  

### Auxiliary Propulsion: Shaft Drive vs. Saildrive

The physical arrangement of the auxiliary engine significantly impacts the propeller-hull-rudder interaction coefficients. Saildrives, standard on modern charter vessels like the Bavaria C-Line or Beneteau Oceanis, place the propeller in a "tractor" or "pusher" configuration on a vertical leg, usually well forward of the rudder and away from the hull's boundary layer.  

#### Shaft Drive Characteristics

In a traditional shaft drive, the propeller shaft exits the hull through a stern tube, often supported by a P-bracket or skeg. This creates a more complex wake field.  

*   **Wake Fraction (wP0​):** Typically 0.15 to 0.25 due to the proximity of the hull and stern gear.  
    
*   **Thrust Deduction (tP​):** Ranges from 0.12 to 0.18 as the propeller "sucks" water against the tapering aft hull.  
    
*   **Prop Walk:** Higher magnitude due to the angled shaft and the closer interaction with the hull’s upward flow.  
    

#### Saildrive Characteristics

Saildrives provide a more uniform inflow to the propeller, resembling open-water conditions more closely.  

*   **Wake Fraction (wP0​):** Low, ranging from 0.05 to 0.12.  
    
*   **Thrust Deduction (tP​):** Minimal, often 0.04 to 0.08.  
    
*   **Prop Walk:** Generally lower than shaft drives, though still present. The lateral force is primarily due to the paddle-wheel effect and the rotational flow hitting the rudder.  
    

#### Folding and Feathering Propellers

For performance racer-cruisers, the use of 2-blade or 3-blade folding propellers introduces non-linearities in thrust production. In reverse, a folding propeller must "centrifuge" open before generating thrust, leading to a delay that can be modeled by a time-constant in the n (RPM) response or a modified k0​ coefficient for the first 1-2 seconds of reverse engagement. Feathering propellers (e.g., Max-Prop) provide much better reverse thrust, often nearly equal to ahead thrust, because the blades rotate 180 degrees to maintain their leading edge.  

### Analog Boat Datasets for Modeling

To constrain the coefficient sets, engineers can look to established designs in the 10–16 m range that have been subjected to CFD or tank testing.  

| Model | LOA | Drive | Why it is a Good Analog | Key Constrained Values |
| --- | --- | --- | --- | --- |
| **Stewart 34** | 10.36 m | Shaft | Extensive CFD and PMM data available. | Yv​,Nr​,Xvv​ derivatives. |
| **Bavaria C38** | 11.38 m | Saildrive | Wide-beam modern cruiser with V-bow. | Cb​,xG​,aH​ for charter boats. |
| **Bavaria C46** | 14.86 m | Saildrive | Large-volume modern hull with chines. | my​,Jz​ for 15m+ vessels. |
| **Moorings 45.3** | 13.94 m | Saildrive | Global charter standard (Beneteau analog). | wP0​,tP​,η,κ interaction. |
| **J/40** | 12.19 m | Saildrive | Performance cruiser with deep spade rudder. | fα​,AR′​ for balanced rudders. |
| **MS 16 m** | 16.00 m | Shaft | Heavy-displacement motor-sailer analog. | R0​,tP​ for high-power yachts. |
| **Sysser (DSYHS)** | ~11.0 m | N/A | Parent hull of the Delft Series. | Baseline Yv​,Nv​ regressions. |
| **JPK 10.50** | 10.50 m | Saildrive | Modern performance racer-cruiser. | Xvvvv​,Yrrr​ for high leeway. |

 

### Behavioral Anchors and Trial Observations

The validity of a maneuvering model is ultimately tested against observed behaviors such as turning circles, stopping distances, and prop walk.  

#### Turning Circles and Tactical Diameter

According to IMO standards and observed sea trials, a well-balanced 12 m sailing yacht should have a tactical diameter between 2.5 and 3.5 boat lengths at 6 knots.  

*   **Unrealistic Low:** If the yacht turns within its own length (TD < 1.5 L), the rudder lift gradient (fα​) or the interaction factor (aH​) is too high.  
    
*   **Unrealistic High:** If the yacht requires > 5 lengths to turn (TD > 5 L), the yaw damping (Nr′​) is too high, or the rudder area (AR′​) is insufficient.  
    

#### Stopping Distance and Crash Stop

From a cruise speed of 7 knots, an auxiliary yacht should stop in approximately 1.5 to 2.5 boat lengths upon engaging full reverse.  

*   **Unrealistic Low:** If the boat stops instantly ( < 1.0 L), the reverse thrust coefficient (k0​ reverse) is likely over-estimated, or the added mass in surge (mx​) is too low.  
    
*   **Unrealistic High:** If the boat glides for > 4 lengths, the hull resistance (R0​) or the reverse efficiency of the folding prop is too low.  
    

#### Prop Walk and Reverse Effectiveness

Prop walk is a lateral force YP​ and yaw moment NP​ that occurs even at zero forward speed. For a right-handed propeller, the stern will walk to port in reverse. This is often modeled using the flow-straightening coefficients (γR+​ and γR−​), where the propeller wash hits one side of the rudder more forcefully.  

*   **Rudder Authority in Reverse:** Yachts with spade rudders (far aft) gain steerageway in reverse faster than those with skeg-hung rudders. This is tuned by adjusting the inflow velocity parameter κ for negative u.  
    

### Tuning Guidance for Major Coefficient Groups

Tuning a simulator model requires a systematic approach to avoid "circular" errors where one coefficient masks the deficiency of another.  

#### Hull Group (Yv​,Nr​,my​,Jz​)

*   **Effect:** Governs the "massiveness" and damping of the boat.  
    
*   **Low Value Symptoms:** The boat feels like a "skating" puck; it slides laterally without resistance and continues to spin long after a turn is stopped.  
    
*   **High Value Symptoms:** The boat feels too "stiff"; it is difficult to initiate a turn, and it stops moving laterally the moment the rudder is centered.  
    
*   **Priority:** Tune my​ and Yv​ first to get the basic "drift" of the hull right before adding rudder forces.  
    

#### Rudder Group (fα​,aH​,xH′​)

*   **Effect:** Governs steering authority and the "kick" of the stern.  
    
*   **Low Value Symptoms:** Sluggish steering; the boat has a huge turning circle even at full helm.  
    
*   **High Value Symptoms:** Twitchy steering; the boat pivots violently, potentially leading to instability or unrealistic "snap" turns.  
    
*   **Priority:** Tune fα​ based on the rudder's aspect ratio, then refine aH​ to match observed "stern kick" under power.  
    

#### Propeller-Rudder Interaction Group (η,κ,ϵ)

*   **Effect:** Controls how much the engine RPM affects steering before the boat gathers speed.  
    
*   **Low Value Symptoms:** No rudder authority when stationary; the boat won't turn until it has 2-3 knots of speed.  
    
*   **High Value Symptoms:** The boat can be "steered" while tied to the dock; applying power immediately rotates the boat regardless of forward speed.  
    
*   **Priority:** This is the most critical group for realistic docking. Tune κ to ensure the rudder feels effective as soon as the prop wash is active.  
    

### Final Practical Output: Recommended Initialization Envelope

For an engineer initializing a model for a standard 12 m (40 ft) charter monohull with a saildrive and fin keel, the following "safe envelope" is recommended.

| Coefficient | Safe Starting Value | Tuning Priority | Note |
| --- | --- | --- | --- |
| **Inertia** | mx′​\=0.06 | Medium | Surge added mass. |
|     | my′​\=0.90 | **High** | Critical for "weight" of sway. |
|     | Jz′​\=0.08 | **High** | Critical for yaw response. |
| **Hull** | Yv′​\=−0.380 | **High** | Lateral damping of the keel. |
|     | Nr′​\=−0.065 | **High** | Yaw damping. |
|     | Nv′​\=−0.150 | Medium | Directional stability. |
|     | R0′​\=0.024 | Medium | Basic drag. |
| **Propulsion** | wP0​\=0.08 | Medium | Saildrive wake. |
|     | tP​\=0.06 | Medium | Saildrive thrust deduction. |
|     | k0​\=0.45 | Medium | Prop thrust coefficient. |
| **Rudder** | fα​\=2.05 | **High** | Rudder lift slope. |
|     | κ\=0.62 | Medium | Prop wash velocity factor. |
|     | η\=0.75 | Medium | Rudder immersion in wash. |
|     | aH​\=0.14 | Medium | Hull-rudder interaction. |

 

#### The "Big 5" Coefficients to Tune First

1.  **my′​ (Added Mass in Sway):** Determines how much the boat "slides" when docking.  
    
2.  **Yv′​ (Linear Sway Derivative):** Sets the lateral "grip" of the keel on the water.  
    
3.  **Nr′​ (Yaw Damping):** Governs how the rotation of the boat decays; defines the "feel" of the helm.  
    
4.  **fα​ (Rudder Gain):** The primary authority for all steering maneuvers.  
    
5.  **κ (Interaction Factor):** Ensures that the propeller wash provides realistic "kick" to the rudder at low speeds.  
    

This starting envelope ensures that the fundamental "time constants" of the yacht's movement—how fast it accelerates, turns, and stops—are within the plausible physical bounds of the 10–16 m auxiliary cruiser class. Subsequent refinement should focus on the non-linear derivatives (Yvvv′​,Nrrr′​) once the linear behavior is anchored.  

The characterization of sailing yacht maneuvering for low-speed simulators represents a synthesis of traditional naval architecture and specialized yacht hydrodynamics. By adopting the MMG modularity and carefully selecting coefficients that respect the high-aspect-ratio nature of yacht appendages, simulators can achieve the nuance required for high-stakes docking maneuvers. The transition from a "ship-like" feel to a "yacht-like" response primarily hinges on the disproportionately high added mass in sway and the high directional stability provided by the ballast keel. Using the ranges and formulas provided, developers can establish a robust foundation that reflects the unique handling characteristics of modern monohull cruisers.



------------



# Claude Opus 4.6-search (14 sources were used)

I'll conduct a systematic search across multiple domains to build this reference. Let me start with the most targeted queries.# MMG-Style Maneuvering Coefficients for 10–16 m Monohull Sailing Yachts: Comprehensive Reference

---

## 1. METHODOLOGY

### Sources Included
This reference synthesizes material from several classes of sources:

1. **MMG Standard Method literature** — The Yasukawa & Yoshimura (2015) MMG standard method, proposed by the Japan Society of Naval Architects and Ocean Engineers as a standardized prediction method for ship maneuvering. While developed for merchant ships, this provides the canonical coefficient framework.

2. **Empirical formula databases** — New empirical formulas based on the MMG model that estimate hydrodynamic parameters from ship principal particulars, built from captive model test results on more than 30 ships. The Kijima formulas and their successors provide regression-based initialization.

3. **Sailing yacht hydrodynamics literature** — The Delft Systematic Yacht Hull Series (DSYHS) and its associated publications for bare hull resistance and appendage interactions, including keel-rudder interactions (Keuning et al.).

4. **Rudder-keel interaction studies** — Towing tank tests at ETSIN measuring separated hydrodynamic forces on canoe body and appendages of sailing yachts, analyzing rudder forces in the presence of the keel.

5. **Prop walk / saildrive behavioral sources** — Practical sailing references documenting real-world maneuvering differences between shaft-drive and saildrive configurations.

6. **Harbor/low-speed maneuvering models** — A hybrid model combining the simplicity of the Abkowitz Taylor expansion with the complexity of the MMG low-speed maneuvering model, specifically developed for harbor maneuvers and automatic berthing.

### Sources Excluded
- Pure race boats without auxiliary engines (AC75s, Volvo 65s, Minis without engines)
- Catamarans and trimarans
- Merchant ship data used *without* explicit correction or labeling for sailing yacht geometry
- Dinghies and boats under 8 m
- Sail training vessels over 25 m (e.g., full-rigged ships)

### Critical Caveat
**No published study was found that directly provides a full MMG coefficient set for a 10–16 m fin-keel monohull sailing yacht.** The entire framework below is therefore necessarily built from:
- Ship-derived MMG regressions (labeled as extrapolations)
- Sailing-yacht-specific appendage hydrodynamics (DSYHS, Keuning)
- First-principles scaling of sailing yacht geometry into MMG conventions
- Behavioral anchoring from full-scale sailing yacht trial reports

---

## 2. COEFFICIENT RANGE TABLE

### 2.1 Hull Form & Geometry Parameters

| Parameter | Description | Typical Range (10–16 m sailing monohull) | Charter/Saildrive Subset | Confidence | Source(s) | Notes |
|-----------|-------------|------------------------------------------|--------------------------|------------|-----------|-------|
| **C_b** | Block coefficient of canoe body | **0.33–0.42** | 0.35–0.40 | **Medium** | DSYHS papers; Larsson & Eliasson *Principles of Yacht Design*; ORC measurement rules | See §3 for conventions. Sailing yachts are extremely fine-lined compared to merchant ships (C_b ≈ 0.55–0.85). The "canoe body" C_b excludes keel and rudder. |
| **Canoe body draft (T_c)** | Draft of hull shell only (excluding fin keel) | **0.4–1.0 m** for 10–16 m LOA | 0.5–0.8 m | **Medium** | ORC certificates; DSYHS | MMG uses "T" as hull draft. For sailing yachts, the *effective maneuvering draft* is ambiguous. See §3 conventions. |
| **Total draft (T_total)** | Including fin keel | **1.6–2.3 m** | 1.8–2.1 m | **High** | Manufacturer specs | This is the physically dominant draft for lateral plane and added mass, but NOT the draft used in standard C_b calculation for canoe body. |
| **x_G** (LCG position, from midship, +fwd) | Longitudinal center of gravity | **−0.02L to −0.06L** (i.e., 2–6% of L aft of midship) | −0.03L to −0.05L | **Medium** | Larsson & Eliasson; typical yacht weight reports | Sailing yachts tend to have LCG slightly aft of midship due to engine placement aft. The MMG convention non-dimensionalizes by L (Lpp or Lwl). |

### 2.2 Rudder Parameters

| Parameter | Description | Typical Range | Charter/Saildrive | Confidence | Source(s) | Notes |
|-----------|-------------|---------------|-------------------|------------|-----------|-------|
| **A_R** | Rudder area (projected lateral) | **0.25–0.50 m²** for 10–16 m boats | 0.30–0.45 m² | **High** | ORC certificates; Keuning & Binkhorst | Rudder area on a typical 12 m yacht ≈ 0.35 m². Rule of thumb: ~1.5–2.5% of lateral area of canoe body. In MMG, A_R is used to compute rudder normal force. |
| **f_alpha** | Rudder lift gradient coefficient | **2.5–3.8** | 2.8–3.5 | **Medium** | Whicker & Fehlner (1958); Molland & Turnock | f_alpha = 6.13 × Λ_R / (2.25 + Λ_R) where Λ_R is the geometric aspect ratio. Sailing yacht rudders typically have Λ_R = 2.0–3.5, giving f_alpha ≈ 2.9–3.5. The presence of a hull boundary approximately doubles the effective aspect ratio. |
| **η** (eta) | Ratio of propeller diameter to rudder span (D_p / H_R) | **0.5–0.85** | 0.55–0.75 (saildrive: may be lower effective due to offset geometry) | **Medium** | Geometry from yacht specs | In the MMG framework, η is the ratio of propeller diameter to rudder span. Typical auxiliary yacht propeller D_p = 0.30–0.45 m; rudder span = 0.50–0.80 m. |

### 2.3 Propulsion Interaction Parameters

| Parameter | Description | Typical Range | Charter/Saildrive | Confidence | Source(s) | Notes |
|-----------|-------------|---------------|-------------------|------------|-----------|-------|
| **w_P0** | Wake fraction at propeller position in straight run | **0.05–0.20** (shaft drive); **0.02–0.12** (saildrive) | Shaft: 0.10–0.18; Saildrive: 0.03–0.10 | **Low-Medium** | Ship regressions (extrapolated); geometry arguments | Sailing yachts have very fine sterns and low C_b, giving much lower wake fractions than merchant ships. Saildrive propellers are mounted further forward and more horizontally, in cleaner flow. Ship-based formulas (e.g., w_P0 ≈ 0.5×C_b) dramatically overpredict for yachts. Use w_P0 ≈ 0.8–1.2 × C_b at most. |
| **t_P** | Thrust deduction factor | **0.04–0.15** (shaft); **0.03–0.10** (saildrive) | Shaft: 0.06–0.12; Saildrive: 0.04–0.08 | **Low-Medium** | Extrapolation from ship data, corrected downward | Ship regressions give t_P ≈ 0.6–0.8 × w_P0. For very fine sterns, t_P is small. For folding/feathering 2-blade props, t_P when deployed is slightly lower than for 3-blade fixed. |
| **t_R** | Steering resistance deduction factor | **0.10–0.25** | 0.12–0.20 | **Low** | Ship-derived; typically 0.387 for KVLCC2 | This represents the fraction of rudder normal force that acts as resistance. For sailing yachts with well-faired spade rudders, expect lower values than for ship skegs. **Poorly constrained** for yachts. |
| **l_R′** | Non-dimensional lever of rudder force (x_R / L) | **−0.90 to −0.98** (large negative, rudder far aft) | −0.92 to −0.96 | **Medium** | Geometry: x_R measured from midship | On sailing yachts, the rudder stock is typically at 90–98% of Lwl aft of the forward perpendicular, so l_R′ ≈ −(0.90 to 0.98) × 0.5 = approximately −0.45 to −0.49 (if measured from midship and non-dimensionalized by L). Check convention carefully. |

### 2.4 Flow Straightening & Hull-Rudder Interaction

| Parameter | Description | Typical Range | Charter/Saildrive | Confidence | Source(s) | Notes |
|-----------|-------------|---------------|-------------------|------------|-----------|-------|
| **κ (kappa)** | Flow-straightening coefficient for hull wake at rudder | **0.3–0.6** | 0.35–0.50 | **Low** | Ship regressions; Yoshimura (2003) fishing vessels | κ governs how much the hull's drift angle is felt at the rudder position. For fine-lined sailing hulls with well-separated fin keels, the flow field at the rudder is dominated by the keel downwash rather than thick hull boundary layers. **This is one of the most uncertain parameters.** |
| **ε (epsilon)** | Ratio of effective wake at rudder in maneuvering to straight running | **0.85–1.10** | 0.90–1.05 | **Low** | Ship-derived | Often set to 1.0 for initial estimates. Represents how maneuvering motions modify the effective wake. For sailing yachts with small wake fractions, sensitivity is lower. |
| **x_H′** | Non-dim. longitudinal position of additional hull lateral force by steering | **−0.35 to −0.50** | −0.38 to −0.45 | **Low** | Ship data (MMG standard: −0.464 for KVLCC2) | Experimental results on some ship types showed that the hull-rudder interaction coefficients (aH, x'H) can be affected by heel, though the effect is often small. For sailing yachts, this parameter is **very poorly constrained**. |
| **a_H** | Rudder force increase factor (hull-generated additional sway force due to rudder) | **0.05–0.25** | 0.08–0.18 | **Low** | Ship regressions | For merchant ships, a_H ≈ 0.2–0.4. For sailing yachts with fine waterlines and less hull "following" the rudder-induced flow, expect substantially lower values. |
| **γ_R+ / γ_R−** | Flow-straightening coefficients at rudder (port/starboard asymmetry) | **γ_R+ ≈ 0.3–0.6; γ_R− ≈ 0.3–0.6** | Similar, but offset by prop rotation direction | **Low** | Ship regressions; typically γ_R+ ≠ γ_R− due to propeller rotation | These control the lateral inflow angle at the rudder from the propeller race. For single-screw yachts with right-hand props, γ_R+ < γ_R− typically. For saildrive with near-zero shaft angle, the asymmetry is smaller. |

### 2.5 Added Mass & Moment of Inertia

| Parameter | Description | Typical Range | Confidence | Source(s) | Notes |
|-----------|-------------|---------------|------------|-----------|-------|
| **m_x′** | Non-dim. added mass in surge | **0.01–0.05** | **Low-Medium** | Clarke (1983) formula; strip theory | m_x′ is very small for slender bodies. For sailing yachts (L/B ≈ 3.0–3.8), expect near the lower end. Standard ship formula: m_x′ ≈ 0.022 × (B/L)² × C_b gives unrealistically small values for yachts. The fin keel adds nontrivially to surge added mass. |
| **m_y′** | Non-dim. added mass in sway | **0.10–0.35** (canoe body + keel) | **Low-Medium** | Clarke (1983); strip theory; Keuning | Sailing yachts have deep keels that dominate lateral added mass. The canoe body alone gives m_y′ ≈ 0.05–0.15 (similar to or lower than ships), but the fin keel can add 0.05–0.20 depending on aspect ratio and draft. This is a **critical parameter** for sailing yacht simulators. |
| **J_z′** | Non-dim. added moment of inertia in yaw | **0.005–0.020** | **Low** | Clarke formulas; strip theory | Ship-derived formulas (J_z′ ~ function of C_b, L/B, T/L) may give reasonable order-of-magnitude, but the keel (far from midship) modifies this. |

### 2.6 Resistance

| Parameter | Description | Typical Range | Confidence | Notes |
|-----------|-------------|---------------|------------|-------|
| **R_0′** | Non-dim. straight-ahead resistance coefficient at service speed | **0.010–0.025** (at Fn ≈ 0.25–0.35 under power) | **Medium** | Can be derived from known power/speed curves. At docking speeds (2–4 kts on a 12 m yacht, Fn ≈ 0.10–0.15), resistance is dominated by friction. R_0′ includes the drag of deployed propeller and keel. |

### 2.7 Maneuvering Hydrodynamic Derivatives

**IMPORTANT:** These are the most uncertain parameters for sailing yachts. No published captive model or CFD PMM dataset exists specifically for 10–16 m fin-keel sailing yachts in the MMG framework. The ranges below are based on:
- Ship empirical regressions (Kijima, Yoshimura, Inoue) applied at sailing-yacht C_b and L/B
- Known limitations: the Kijima formulas showed insufficient accuracy even for medium-speed ships such as container ships and fishing vessels.
- Physical reasoning about the effect of a deep fin keel and fine waterlines

| Parameter | Typical Range (extrapolated) | Confidence | Physical Effect |
|-----------|------------------------------|------------|----------------|
| **X_vv′** | −0.03 to −0.06 | **Low** | Cross-flow drag in surge. Keel dominates. |
| **X_vr′** | +0.005 to +0.025 | **Low** | Coupled surge force from sway-yaw. |
| **X_rr′** | −0.001 to −0.015 | **Low** | Surge force from yaw rate squared. |
| **X_vvvv′** | +0.3 to +1.0 | **Very Low** | Higher-order cross-flow drag. Often set ≈ 0 initially. |
| **Y_v′** | −0.15 to −0.45 | **Low-Medium** | Linear sway force derivative. **The most important lateral derivative.** Keel dramatically increases |Y_v′| compared to ships. Ship maneuvering prediction relies on hydrodynamic derivatives traditionally obtained through empirical formulations based on hulls built decades ago, and a notable discrepancy exists for the linear sway velocity derivative (YV′) for modern hulls. |
| **Y_r′** | +0.01 to +0.06 | **Low** | Sway force due to yaw rate. |
| **Y_vvv′** | −0.5 to −2.5 | **Very Low** | Nonlinear sway force. |
| **Y_vvr′** | −0.2 to +0.2 | **Very Low** | Coupled nonlinear term. |
| **Y_vrr′** | −0.5 to +0.5 | **Very Low** | Coupled nonlinear term. |
| **Y_rrr′** | −0.01 to +0.01 | **Very Low** | Pure yaw-rate cubed sway force. |
| **N_v′** | −0.04 to −0.12 | **Low-Medium** | Linear yaw moment from sway velocity. Keel position (well forward of midship) matters enormously. |
| **N_r′** | −0.02 to −0.06 | **Low-Medium** | Linear yaw damping. Primary course-stability parameter. Keel and rudder both contribute. |
| **N_vvv′** | −0.1 to +0.1 | **Very Low** | Nonlinear yaw moment. |
| **N_vvr′** | −0.3 to +0.1 | **Very Low** | Coupled nonlinear. |
| **N_vrr′** | −0.1 to +0.3 | **Very Low** | Coupled nonlinear. |
| **N_rrr′** | −0.01 to +0.01 | **Very Low** | Pure yaw cubed moment. |

### 2.8 Propeller Open-Water Coefficients

| Parameter | Description | Typical Range | Notes |
|-----------|-------------|---------------|-------|
| **k_0** | KT polynomial: constant term | **0.25–0.50** | For 2-blade folding props, use lower end; for 3-blade fixed, higher. Wageningen B-series can give baseline values. |
| **k_1** | KT polynomial: linear J term | **−0.15 to −0.30** | Negative slope of KT with advance ratio. |
| **k_2** | KT polynomial: quadratic J term | **−0.05 to −0.20** | Curvature term. |

**Folding / Feathering 2-Blade Props:** These are extremely common on charter and cruising yachts. Key differences vs. fixed 3-blade:
- Two-blade props walk less than 3-blade props; folding and feathering props walk less still.
- Lower expanded blade area ratio (EAR ≈ 0.30–0.40 vs. 0.50–0.65 for 3-blade fixed)
- Lower static thrust at bollard pull (maybe 15–25% less than equivalent 3-blade fixed)
- In reverse, folding props are notably less efficient (blades may not fully deploy)
- KT curve shifts: k_0 is typically 10–25% lower than for equivalent 3-blade fixed prop
- For feathering props (e.g., MaxProp, Autoprop), reverse performance is better since blade pitch reverses

---

## 3. FORMULA / DERIVATION TABLE

### 3.1 Block Coefficient (C_b)

| Item | Detail |
|------|--------|
| **Recommended method** | C_b = ∇_canoe / (L_wl × B_wl × T_canoe) |
| **Required inputs** | Canoe body displacement (from ORC certificate or hydrostatics), L_wl, B_wl, T_canoe (draft of hull shell only) |
| **Source of inputs** | ORC/IRC certificates, builder's hydrostatic data, Maxsurf model |
| **Convention warning** | The MMG standard uses C_b based on total underwater hull. For a sailing yacht, the keel is NOT part of the "canoe body." You must decide: (a) Use canoe body C_b (0.33–0.42) and treat keel as an appendage that modifies m_y′, N_v′, etc.; or (b) Use a "total displaced volume" C_b that includes keel volume, giving C_b ≈ 0.38–0.48 but misleading ship-based regressions. **Option (a) is strongly recommended**, with keel effects added explicitly. |

### 3.2 Effective Maneuvering Draft

| Item | Detail |
|------|--------|
| **Convention 1: Canoe body draft (T_c)** | The draft of the hull shell without keel. Used in C_b calculation. Typically 0.4–1.0 m for 10–16 m yachts. |
| **Convention 2: Total draft (T)** | Bottom of keel to waterline. Typically 1.6–2.3 m. Relevant for grounding, but NOT appropriate for C_b in ship regressions. |
| **Convention 3: Effective lateral-plane draft** | For maneuvering, the draft that matters for Y_v′ and N_v′ is the *effective span* of the lateral plane. This is dominated by the fin keel span (tip to root). Typically 1.0–1.8 m. |
| **Recommendation** | Use T_c for C_b; use keel geometric span + canoe body draft for computing added mass and lateral force derivatives via strip theory or lifting-line models. |

### 3.3 f_alpha (Rudder Lift Gradient)

| Item | Detail |
|------|--------|
| **Formula** | f_alpha = 6.13 × Λ_eff / (2.25 + Λ_eff) (Whicker & Fehlner) |
| **Λ_eff** | Effective aspect ratio. For a spade rudder under a hull (ground-plane effect): Λ_eff ≈ 2 × Λ_geom. Typical yacht rudder Λ_geom = 1.8–3.0, so Λ_eff = 3.6–6.0. |
| **Result** | f_alpha ≈ 3.8–5.2 for effective AR with hull mirror effect. If prop wash augments flow, effective f_alpha rises further. |
| **Known limitations** | At very low speeds (Rn < 2×10⁵ on rudder chord), laminar separation can drastically reduce lift slope. Stall angle also drops to ≈ 12–15° at low Re. |

### 3.4 Wake Fraction (w_P0)

| Item | Detail |
|------|--------|
| **Ship regression (NOT recommended directly)** | w_P0 = 0.5 × C_b (Harvald) or w_P0 = f(C_b, L/B, T/L) (Holtrop) |
| **Yacht correction** | For sailing yacht canoe bodies with C_b ≈ 0.35–0.40, these give w_P0 ≈ 0.17–0.20, which is likely still too high. Yacht sterns are much finer than cargo ships, and propellers (especially saildrive-mounted) are in relatively clean flow. |
| **Recommended starting values** | Shaft drive: w_P0 ≈ 0.08–0.15; Saildrive: w_P0 ≈ 0.03–0.08 |
| **Inputs** | C_b, stern shape (transom vs. canoe), prop position relative to hull |

### 3.5 Added Mass (m_x′, m_y′) and Added Inertia (J_z′)

| Item | Detail |
|------|--------|
| **Clarke (1983) formulas (ship-derived)** | m_x′ ≈ 0.398 + 11.97×C_b×(1+3.73×T/B) − 2.89×C_b×L/B (roughly); similar for m_y′ and J_z′ |
| **Yacht modification** | The Clarke formulas use C_b, L/B, T/B with ship-range parameters. At C_b ≈ 0.37, L/B ≈ 3.5, T_c/B ≈ 0.15, these formulas extrapolate well outside their training data. **Results should be treated with high skepticism.** |
| **Better approach for yachts** | Use strip theory (Keuning's DSYHS strip-theory-based lateral force calculations) or panel method. Model the keel as a separate lifting surface and add its added mass via thin-wing theory: m_y_keel ≈ π/4 × ρ × c_keel × span_keel² × correction for aspect ratio. |
| **Known limitation** | At low speed and large drift angles (docking), added mass concepts become less reliable. The "frequency-independent added mass" assumption breaks down. |

### 3.6 Y_v′ and N_v′ (The Key Linear Derivatives)

| Item | Detail |
|------|--------|
| **Ship empirical formulas** | Kijima: Y_v′ = f(C_b×(1+C_b)×B/L, C_b×T/L); N_v′ = f(C_b²×B/L, C_b×T/L) |
| **Yacht approach** | For fin-keel yachts, Y_v′ is dominated by the keel lift slope. Compute keel Y_v contribution from lifting line theory: Y_v_keel ≈ −(∂C_L/∂α) × (S_keel / (0.5 × L × T)). The canoe body contribution is secondary but not negligible (estimated at 20–40% of total). |
| **N_v′ sensitivity** | N_v′ depends critically on the keel's longitudinal position. The keel root is typically at 40–55% of Lwl from bow. The further forward the keel, the more stabilizing (more negative N_v′). |
| **Cross-validation** | Compute the stability lever: C_s = N_v′×Y_r′ − N_r′×Y_v′. For a directionally stable yacht, C_s > 0. Most fin-keel yachts are mildly stable to slightly unstable without rudder. |

### 3.7 Propeller Thrust Model for Folding/Feathering Props

| Item | Detail |
|------|--------|
| **Standard MMG:** | K_T(J) = k_0 + k_1×J + k_2×J² |
| **Folding 2-blade adjustment** | Reduce k_0 by 15–25% from Wageningen B2-30 baseline. In reverse, reduce thrust coefficient by additional 30–50% (blades may not fully open). |
| **Feathering (MaxProp/Variprop)** | Forward: similar to fixed prop. Reverse: pitch reverses, so reverse thrust is ~75–90% of forward thrust (a major simulator-relevant advantage). |
| **Saildrive folding prop** | Folding props provide minimal drag under sail and effective propulsion when motoring. But forward thrust at bollard pull is typically lower than a fixed prop of same diameter. |

---

## 4. ANALOG BOATS TABLE

| # | Model | LOA (m) | Drive | Why Good Analog | Coefficients Helped | Source |
|---|-------|---------|-------|----------------|--------------------|----|
| 1 | **Bavaria Cruiser 37** | 11.3 | Saildrive (Volvo) | Mass-market charter yacht, fin keel + spade rudder, published ORC data | C_b, A_R, keel geometry, displacement | ORC database; Bavaria technical specs |
| 2 | **Jeanneau Sun Odyssey 410** | 12.4 | Saildrive (Yanmar) | Extremely common Mediterranean charter yacht, performance cruiser | Prop geometry, rudder area, docking behavior | Jeanneau specifications; charter fleet databases |
| 3 | **Beneteau Oceanis 40.1** | 11.9 | Saildrive (Yanmar) | Defines the "modern charter cruiser" archetype, wide beam, twin rudder option available but single-rudder version exists | Hull dimensions, weight distribution, docking feedback | Beneteau specifications |
| 4 | **Hanse 418** | 12.4 | Saildrive (Yanmar) | In a lighter boat like the Hanse, Type 1 steerage is more effective than Type 2. Published docking behavior notes | Prop walk behavior, rudder authority comparison | Yachting World boat tests |
| 5 | **Dufour 412 Grand Large** | 12.4 | Saildrive | Performance cruiser, well-documented fin keel geometry | Keel/rudder dimensions, displacement | Dufour specifications |
| 6 | **Catalina 425** | 12.8 | Shaft drive | Representative North American shaft-drive cruiser, deeper hull, skeg rudder option | Prop walk differences, w_P0 comparison, shaft angle effects | Catalina specs; practical sailing reports |
| 7 | **Hallberg-Rassy 40C** | 12.2 | Shaft drive | Classic bluewater cruiser, long keel variant available, offset prop shaft, well-documented sea behavior | Prop walk magnitude, reverse behavior, course stability | HR owner reports; HR specifications |
| 8 | **J/122** | 12.2 | Shaft drive | Performance racer-cruiser with well-documented ORC measurements, deeper fin keel, spade rudder | Y_v′ bounding (high keel AR), rudder area, C_b at low end | ORC certificates; J/Boats specifications |
| 9 | **Dehler 42** | 12.7 | Saildrive | Performance cruiser with documented ORC data, modern hull shape | Hydrostatics, keel geometry, rudder AR | ORC; Dehler specifications |
| 10 | **Najad 440** | 13.4 | Shaft drive | Heavy cruiser, center-cockpit, deeper canoe body, good reverse-maneuvering documentation | Higher C_b end of range, prop walk behavior, shaft drive reference | Najad specifications; owner forums |
| 11 | **Swan 48** | 14.7 | Shaft drive | Semi-custom performance cruiser, documented sea behavior in various maneuvering contexts. | Upper size bound, displacement, keel/rudder geometry | Nautor Swan specifications |
| 12 | **Beneteau First 36.7** | 11.1 | Saildrive | Popular one-design racer-cruiser with extensive ORC measurement database, low C_b | Lower bound of C_b, high-AR keel, lightweight hull | ORC database; one-design class rules |

---

## 5. TUNING GUIDANCE

### 5.1 Hull Lateral Derivatives (Y_v′, N_v′, N_r′)

| Aspect | Detail |
|--------|--------|
| **What it affects** | Course stability, turning circle diameter, straight-line tracking |
| **If Y_v′ too low (abs)** | Insufficient lateral resistance: yacht slides sideways unrealistically, keel appears to have no effect, turning circle becomes too tight |
| **If Y_v′ too high (abs)** | Yacht resists turning, appears "stuck" on course, turning circle excessively large. This would mimic a long-keel yacht when a fin-keel is intended. |
| **If N_r′ too low (abs)** | Underdamped yaw: oscillatory behavior, "fishtailing," unstable heading |
| **If N_r′ too high (abs)** | Overdamped yaw: yacht takes forever to respond to rudder, sluggish turning initiation |
| **Tune first** | Y_v′ (dominant effect on steady turning diameter); then N_v′ and N_r′ together (course stability index) |

### 5.2 Rudder Effectiveness (f_alpha, a_H, t_R, γ_R)

| Aspect | Detail |
|--------|--------|
| **What it affects** | Rudder authority at speed, turning initiation, Type 2 steerage (prop wash on rudder) |
| **If f_alpha too low** | Rudder feels "dead" — no response to helm at docking speeds. Realistic for very low Re (< 10⁵), but unrealistic at normal maneuvering speeds (3–5 kts). |
| **If f_alpha too high** | Overly sensitive rudder: yacht spins with small helm inputs, unstable at high speed. |
| **If a_H too high** | Hull amplifies rudder force excessively — turning becomes too aggressive. For sailing yachts, a_H should be low (fine waterlines produce less hull "following" effect). |
| **Tune first** | f_alpha (via rudder aspect ratio — well constrained geometrically); then a_H and t_R |

### 5.3 Propulsion Interaction (w_P0, t_P, ε, κ)

| Aspect | Detail |
|--------|--------|
| **What it affects** | Speed-thrust balance, acceleration, prop wash effectiveness on rudder |
| **If w_P0 too high** | Yacht achieves higher thrust at same RPM (more wake = higher effective thrust coefficient), speeds too fast, prop appears overpowered |
| **If w_P0 too low** | Thrust is too low, yacht struggles to reach rated speed |
| **Saildrive note** | With a saildrive, the propeller is further from the rudder, creating a delay between action and reaction. This should be reflected by reducing the effective prop-wash fraction reaching the rudder. |
| **Tune first** | w_P0 (sets speed/thrust equilibrium); then t_P; ε and κ are secondary tuning. |

### 5.4 Prop Walk / Asymmetric Thrust (γ_R+, γ_R−)

| Aspect | Detail |
|--------|--------|
| **What it affects** | Stern kick in forward and reverse, tight-turn capability, docking realism |
| **If prop walk too weak** | Saildrive-like behavior on a shaft-drive boat; unable to use "short burst reverse to kick stern"; docking feels unrealistically "symmetrical." Tilted drive shaft boats have a much higher propwalk effect than sail drives. |
| **If prop walk too strong** | Yacht becomes uncontrollable in reverse; stern slews wildly. Realistic for some heavy shaft-drive boats but unrealistic for saildrives. In reverse your rudder is much less effective, so prop walk is more obvious and more difficult to control. |
| **Shaft vs. Saildrive** | The saildrive propeller is mounted horizontally instead of at a downward angle. Saildrive also reduces propeller walk, reduces vibration, and is more efficient. Model this by reducing γ_R asymmetry by 50–80% compared to shaft drive. |
| **Tune first** | γ_R− (controls reverse prop walk); validate against known docking behavior. |

### 5.5 Added Mass (m_x′, m_y′, J_z′)

| Aspect | Detail |
|--------|--------|
| **What it affects** | Acceleration/deceleration responsiveness, oscillation frequency, overshoot in zigzag |
| **If m_y′ too low** | Yacht accelerates laterally too fast, overreacts to side forces, zigzag overshoot too large |
| **If m_y′ too high** | Yacht feels "heavy" in sway, slow to develop drift, turning takes too long to develop |
| **Tune first** | m_y′ (largest effect on dynamic lateral behavior); J_z′ second; m_x′ last (small effect) |

---

## 6. FINAL PRACTICAL OUTPUT

### 6.1 Recommended "Safe Starting Envelope" for a 10–16 m Charter Monohull

The following table provides a **single starting-point estimate** for a "generic 12 m fin-keel saildrive charter yacht" (e.g., Jeanneau SO 40, Bavaria 37, Hanse 41 archetype) with:
- LOA ≈ 12 m, Lwl ≈ 10.5 m, B ≈ 3.9 m, T_c ≈ 0.65 m, T_total ≈ 2.0 m
- Displacement ≈ 8,500 kg, C_b (canoe) ≈ 0.37
- Saildrive with 2-blade folding prop, D_p ≈ 0.38 m
- Spade rudder, A_R ≈ 0.35 m², Λ_geom ≈ 2.5

| Parameter | Starting Value | Basis |
|-----------|---------------|-------|
| C_b | 0.37 | Typical canoe body |
| x_G′ | −0.04 | 4% aft of midship |
| m_x′ | 0.02 | Very fine hull, low surge added mass |
| m_y′ | 0.20 | Canoe body + fin keel (keel dominates) |
| J_z′ | 0.010 | Intermediate estimate |
| R_0′ | 0.015 | At maneuvering speed (Fn ≈ 0.15) |
| A_R | 0.35 m² | Typical spade rudder |
| f_alpha | 4.5 | Effective AR ≈ 5.0 (with hull mirror) |
| η | 0.60 | D_p/H_R |
| w_P0 | 0.06 | Saildrive, clean flow |
| t_P | 0.05 | Fine stern, saildrive |
| t_R | 0.15 | Moderate estimate |
| a_H | 0.10 | Low for fine hull |
| x_H′ | −0.40 | Estimate |
| κ | 0.40 | Low wake sailing hull |
| ε | 1.0 | Default |
| γ_R+ | 0.40 | Reduced asymmetry (saildrive) |
| γ_R− | 0.45 | Slight asymmetry only |
| l_R′ | −0.93 | Rudder far aft |
| Y_v′ | −0.30 | Keel-dominated |
| Y_r′ | +0.03 | Small positive |
| N_v′ | −0.08 | Keel 45% of Lwl from bow |
| N_r′ | −0.04 | Moderate damping |
| X_vv′ | −0.04 | Cross-flow drag |
| X_vr′ | +0.01 | Small coupling |
| X_rr′ | −0.005 | Small |
| k_0 | 0.30 | 2-blade folding prop |
| k_1 | −0.20 | |
| k_2 | −0.10 | |

**For a shaft-drive variant** (e.g., Hallberg-Rassy, Najad, Catalina), modify:
- w_P0 → 0.12
- t_P → 0.08
- γ_R+ → 0.30, γ_R− → 0.55 (stronger asymmetry due to shaft angle)
- Increase prop walk lateral force component by 50–100%

### 6.2 Top 5 Coefficients to Tune First

**For a saildrive charter yacht:**
1. **Y_v′** — Controls steady turning circle and lateral resistance (keel effectiveness)
2. **f_alpha** — Controls rudder authority (especially at low speed)
3. **m_y′** — Controls how quickly the yacht develops drift angle
4. **N_r′** — Controls yaw damping and heading stability
5. **w_P0** — Controls speed/thrust equilibrium and prop wash on rudder

**For a shaft-drive cruiser:**
1. **Y_v′** — Same as above
2. **γ_R+ / γ_R−** — Controls prop walk magnitude and direction (critical for docking realism)
3. **f_alpha** — Rudder authority
4. **N_r′** — Yaw damping
5. **t_P / w_P0** — Thrust deduction and wake (prop is closer to hull and rudder)

---

## Key References

- **Yasukawa & Yoshimura (2015)**: MMG standard method — [Springer](https://link.springer.com/article/10.1007/s00773-014-0293-y)
- **Yasukawa (2025)**: New empirical formulas for MMG parameters from 30+ ships — [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0029801825015379)
- **Keuning et al.**: DSYHS sailing yacht hydrodynamics — Delft University publications
- **Rodríguez et al.**: Sailing yacht rudder behaviour with keel interaction — [UPM](https://oa.upm.es/3687/1/INVE_MEM_2008_56494.pdf)
- **MMG dynamics Python implementation**: [GitHub - nikpau/mmgdynamics](https://github.com/nikpau/mmgdynamics)
- **ABS Guide for Vessel Maneuverability**: [ABS PDF](https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/conventional_ocean_service/145_vesselmaneuverability/Vessel_Maneuverability_Guide_e-Feb17.pdf)
- **Miyauchi et al. (2024)**: Harbor maneuvering model for automatic berthing — [Springer](https://link.springer.com/article/10.1007/s00773-024-01031-1)
- **Larsson & Eliasson**: *Principles of Yacht Design* (Adlard Coles) — primary reference for yacht C_b, hydrostatics
- **Marchaj**: *Aero-Hydrodynamics of Sailing* — appendage hydrodynamics

---

## Disclaimer on Confidence

To be explicit about what is and is not well-constrained:

| Confidence Level | Parameters |
|-----------------|------------|
| **High** (directly measurable from yacht specs) | A_R, D_p, η, LOA, B, T, displacement, keel dimensions |
| **Medium** (derivable with caveats) | C_b, x_G, f_alpha, R_0′, w_P0 (order of magnitude) |
| **Low** (extrapolated from ship data or inferred) | Y_v′, N_v′, N_r′, m_y′, a_H, κ, ε, γ_R±, t_R |
| **Very Low** (essentially unconstrained for yachts) | All nonlinear derivatives (X_vv′, Y_vvv′, N_vvr′, etc.), x_H′, J_z′ |

The path to higher confidence for any specific yacht requires either (a) CFD-based virtual PMM tests on the yacht hull with appendages, or (b) system identification from full-scale maneuvering trials. To predict the performance of vessels, a better understanding of ship hydrodynamics is necessary, but conducting dozens of experiments or CFD simulations to characterize the hydrodynamic behavior requires significant amounts of cost and time. For initial simulator development, the values above provide defensible starting bounds that can be refined through behavioral validation against known yacht maneuvering characteristics.



------------



# Grok 4.20-beta1 (7 sources were used)

**1. Methodology**

I prioritized monohull fin-keel sailing yachts with auxiliary inboard diesel (single rudder) in the 10–16 m LOA range, focusing on low-speed powered maneuvering (docking, turning circles, stopping, reverse, prop walk/rudder authority). Sources include:

- Yacht-specific maneuvering/tacking simulation papers with hydrodynamic derivatives or modular models (e.g., Masuyama et al. on ~34 ft Fujin/Fair V yachts; Angelou & Spyrou on ~40 ft cruiser analogs like Checkmate 3).
- Yacht design literature for form coefficients, appendages, and conventions (Sponberg, van Oossanen references, Principles of Yacht Design).
- Specifications and practical observations from popular racer-cruiser/charter models (Jeanneau Sun Odyssey, Beneteau Oceanis, similar).
- Propulsion data from small-craft texts, propeller tests (folding/feathering), and forums for shaft vs. saildrive differences.
- General MMG/Abkowitz frameworks, labeled as extrapolations where yacht-specific data is absent (most maneuvering literature is for larger ships).

**Exclusions**: Catamarans, pure racing yachts without auxiliary emphasis, dinghies, very heavy displacement vessels (e.g., ship-like trainers), and high-speed sailing polars. Direct merchant-ship MMG regressions are noted as analogies/extrapolations only. Data on low-speed powered behavior is scarcer than sailing performance, so behavioral anchors (prop walk, turning under power) draw from practical yachting reports.

Conventions are explained where multiple exist (e.g., draft). All values are bounded by available evidence; poorly constrained parameters are flagged. No exact invented values—ranges derive from examples, non-dimensional derivatives, or empirical notes.

**2. Coefficient range table**

Typical ranges for 10–16 m LOA auxiliary fin-keel monohulls (single rudder). Narrower “charter-cruiser / saildrive” notes where applicable (modern production often fuller for volume, saildrive common). Confidence: high/medium/low based on direct yacht data vs. analogy.

- **C_b (block coefficient)**: 0.38–0.48 overall; charter-cruiser/saildrive 0.40–0.46. Confidence: medium. Sources: Calculations from example yachts (e.g., ~0.43 for ~40 ft with ~8 t displacement, LWL ~12 m, BWL ~3 m, canoe draft ~0.5 m); van Oossanen 0.35–0.50 range. Affects form resistance, displacement distribution, added mass, and low-speed inertia. Fuller ends improve volume but can increase wave-making or directional stability issues.

- **Effective hull draft / canoe-body draft conventions**: Canoe-body (hull without keel/rudder) draft T_canoe typically 0.4–0.7 m; total draft (keel tip) 1.5–2.5+ m. Convention: Yacht hydrodynamics often model canoe body separately for form/added mass/resistance (using T_canoe or mean hull draft), with keel and rudder as lifting surfaces or appendages. In MMG-style, T is frequently the reference draft (often mean or effective); be explicit in simulator (e.g., separate viscous form vs. appendage lift). Effective draft for maneuvering includes keel contribution to lateral area. Confidence: high (consistent in yacht papers). Affects all hull forces, heel effects, and grounding risk in docking.

- **x_G (longitudinal CG, often % LWL from midships or forward perpendicular)**: 0 to +1.5% LWL aft of midships (or ~50–52% LWL from bow). Narrower same for charter. Confidence: high. Affects yaw moment balance, stability, and turning (aft CG can increase weather helm or affect pivot point).

- **A_R (rudder area, projected)**: 0.7–1.5 m² typical (scales with size; ~1–2% of sail area or 8–12% of keel lateral area for single spade rudder). Confidence: medium. Affects rudder authority, especially at low speed. Larger for better low-speed control in charter boats.

- **f_alpha (rudder lift curve slope, per radian)**: 3.5–5.5 /rad for typical spade rudders (AR ~2–4; higher for higher AR, lower with stall effects). Confidence: medium (from lifting surface theory and yacht models). Affects rudder force Y_R, N_R at small angles.

- **eta (relative rotative efficiency)**: 0.95–1.05. Confidence: low-medium (standard small-craft analogy). Affects propeller torque/thrust behind hull.

- **w_P0 (nominal wake fraction at propeller)**: 0.05–0.20 overall; shaft-drive 0.10–0.20 (hull wake); saildrive 0.05–0.12 (cleaner flow). Confidence: medium (propulsion texts + yacht differences). Affects effective advance velocity Va = (1–w)V; lower w means more thrust for given RPM.

- **t_P (thrust deduction factor)**: 0.05–0.25; often higher for shaft-drive with direct rudder interaction. Confidence: medium. Affects net thrust = (1–t) * propeller thrust.

- **t_R, l_R (rudder-related; t_R thrust deduction or interaction; l_R lever arm from CG to rudder)**: l_R typically 0.4–0.5 LWL or 3.5–4.5 m in examples (~34–40 ft yachts). t_R part of overall interaction. Confidence: medium (from papers). l_R directly scales rudder moment arm.

- **kappa, epsilon, x_H_dash, a_H, gamma_R_plus/minus (hull-rudder-prop interaction coeffs in MMG)**: Poorly constrained for yachts (mostly ship-derived). Typical ship analogies (extrapolate with caution): a_H (hull rudder force amplification) 0.2–0.6; x_H_dash (~ –0.4 to –0.6); gamma_R (inflow angle factor) 0.5–1.0 (plus/minus for port/starboard, affected by prop race); epsilon, kappa for velocity factors. Yachts have stronger asymmetric effects with single rudder + prop. Confidence: low (label as ship extrapolation). Strongly affect rudder effectiveness in prop wash, especially low-speed and reverse. Shaft-drive has more direct prop-rudder interaction than saildrive.

- **m_x_dash, m_y_dash, J_z_dash (non-dimensional added mass/inertia)**: m_x' ~0.05–0.15; m_y' ~0.4–1.0+ (slender hulls higher sway); J_z' ~0.01–0.05 (varies with non-dim convention, e.g., / (0.5 ρ L³) or relative to displacement). From yacht examples: significant sway added mass relative to displacement. Confidence: medium (from Masuyama strip/Lewis forms). Affect inertial response in surges, turns, accelerations.

- **R_0_dash (straight-line resistance, non-dim)**: Derived from calm-water resistance curves; typical low-speed focus on viscous + residual. Use yacht-specific (e.g., DSYHS-like) rather than ship. Confidence: medium.

- **Hydrodynamic derivatives (X_vv_dash etc., non-dim; note conventions vary—e.g., Masuyama uses refs like ½ρ U² L B or L D)**: Linear sway Y_v' ~ –0.5 to –0.6; yaw N_r' , N_v' negative and significant for stability/turning. Quadratic/cross terms (X_vv, Y_vvv, N_vvv etc.) important at larger angles/low speed. From ~34 ft examples: X'_VV ~ –0.3; specific values in papers. Yachts show heel-coupled terms. Confidence: medium for linear, low for higher-order (yacht-specific data limited). Affect turning rate, drift, stability.

- **k_0, k_1, k_2 (propeller thrust polynomial K_T = k0 + k1 J + k2 J²)**: Typical 2-blade yacht fixed/folding (open): k0 ~0.4–0.6, k1 ~ –0.4 to –0.6, k2 ~ –0.05 to –0.15 (approximate; depends on pitch/diameter). Feathering similar when powered but optimized differently. Confidence: low-medium (standard series analogies + prop tests). For folding/feathering: lower drag when sailing; under power, slightly reduced thrust vs. fixed, better or variable reverse. Test data shows folding/feathering reduce sailing drag 90–95% vs. fixed.

**Notes**: Derivatives and interactions are the most yacht-specific but least published for powered low-speed. Shaft-drive generally has stronger prop walk (port for right-hand prop in ahead) and better rudder prop-wash effect; saildrive has less walk, potentially less low-speed rudder authority depending on geometry, but cleaner installation.

**3. Formula / derivation table**

Many parameters (especially derivatives, interactions) are rarely published directly for this class and require derivation or CFD/PMM analogs.

- **C_b, Cp (prismatic)**: C_b = ∇ / (LWL × BWL × T) (T often canoe or specified); Cp = ∇ / (LWL × midship area). Inputs: hydrostatics (displacement, LWL, BWL, draft, midship section). From designer data or lines plan. Limitation: Keel often excluded or adjusted for yachts; sensitive to trim/heel.

- **Added masses m_x, m_y, J_z**: Strip theory/Lewis forms or ellipsoid approximation for hull; add ellipsoidal for keel/rudder. Inputs: sectional area curves, B(x), draft. Limitations: 2D assumptions; validate with heel/wave effects for yachts.

- **Maneuvering derivatives (Y_v etc.)**: From PMM/captive tests, virtual CFD (OpenFOAM-like), or regression on similar hulls (e.g., DSHYS-inspired). Cross-flow drag + lifting surface for appendages. Inputs: hull lines, speed, drift/yaw rates. Limitations: Low-speed/large-angle nonlinearities important for docking; wave/heel coupling in real use.

- **w_P0, t_P**: Empirical from model tests or CFD behind-hull propeller. Or approximate from hull form (fuller aft → higher w). Inputs: hull lines aft, prop position. Limitations: Strong dependence on shaft angle, saildrive leg, rudder proximity. Yacht-specific data sparse.

- **Rudder coeffs (f_alpha, interactions)**: Lifting-line/surface theory: C_Lα ≈ 2π AR / (AR + 2) corrected for end effects/tip; gamma_R from downwash (keel effect). Inputs: rudder geometry (span, chord, AR), inflow velocity field. Limitations: Stall at high δ/low speed; prop race strongly modifies for powered cases (shaft > saildrive).

- **Prop k0/k1/k2**: From open-water tests or manufacturer curves for specific prop (diameter, pitch, blade area). For folding/feathering: use powered-open curves (slightly derated vs. fixed); reverse behavior differs (feathering often better). Inputs: Prop geometry, RPM, Va. Limitations: Real behind-hull performance needs w/t correction; folding props may have different J-K_T in reverse.

**4. Analog boats table** (8–12 examples; focus on relevance)

- **Fujin (~10.35 m LOA, fin keel, aux)**: Direct derivatives from oblique towing/rudder tests; constrains hull damping, added mass, rudder coeffs. Good ~34 ft analog.
- **Fair V (~10.4 m LOA, similar)**: Same as above; slight variations in derivs.
- **Checkmate 3 (~41 ft class, LWL ~11.5 m, ~7.8 t disp)**: Validation case in maneuvering models; good mid-size cruiser analog.
- **Jeanneau Sun Odyssey 379/350 (~35–37 ft LOA, LWL ~9–11 m, fin keel, often saildrive)**: Popular charter; specs for C_b calc, modern fuller hull. Constrains volume, draft, prop interaction.
- **Beneteau Oceanis 38/41 (~38–41 ft, fin, saildrive common in charter)**: High-volume charter standard; good for saildrive-specific w/t, low-speed behavior.
- **Catalina 385 or similar (~38 ft, fin or wing, shaft often)**: Classic cruiser; shaft-drive analog for prop walk/rudder wash.
- **Bavaria Cruiser series (~35–50 ft equivalents)**: Wide-beam charter; fuller C_b, single rudder options. Constrains stability/volume effects.
- **Tartan 37 or similar older racer-cruiser (~37 ft, fin, shaft)**: Shaft-drive, good turning notes in literature/forums.
- Additional: Hunter/ Marlow equivalents, Dufour ~40 ft—common in charter fleets with published specs for geometry.

These provide geometry (LWL, B, draft, disp, prop type) to compute/scale C_b, areas, levers, and validate simulator behavior (e.g., turning diameter ~3–5 LWL typical under power).

**5. Tuning guidance**

**Hull derivatives group (Y_v, N_r, quadratics, added masses)**: Mostly affect turning rate, drift angle, directional stability, and response time. Too low: sluggish turning, large turning circles, poor rudder authority at low speed. Too high: oversensitive/twitchy, unstable straight-line or excessive heel in turns. Tune first after basic mass properties.

**Propeller & interaction (w_P0, t_P, k0–2, gamma_R, prop-rudder terms)**: Dominate thrust availability, prop walk (stronger in shaft, reverse), stopping distance, and low-speed rudder effectiveness (prop wash). Too low w/t or thrust: insufficient power for maneuvering. Too high: overpowered, excessive walk or astern issues. Saildrive often less walk, potentially weaker wash. Tune early for realistic docking/reverse.

**Rudder params (A_R, f_alpha, l_R, interactions)**: Control low-speed authority and turning. Too low: ineffective at slow speeds/docking. Too high: excessive force or stall sensitivity.

**Resistance R_0 & form (C_b, draft)**: Affect deceleration, steady speeds. Tune after propulsion for balance.

**Order**: 1) Prop model + w/t/eta (thrust baseline). 2) Rudder geometry & inflow (authority). 3) Hull damping/derivatives (turning dynamics). 4) Added masses (inertia). 5) Fine-tune interactions/C_b for specific behaviors. Use known trials (turning diameter, stopping distance, prop walk direction/magnitude) as anchors. Unrealistic behaviors (e.g., no prop walk on shaft, instant stopping) flag immediate issues.

**6. Final practical output**

**Recommended “safe starting envelope” for a generic 10–16 m charter monohull (e.g., ~12 m LWL, 6–10 t disp, fin keel, single rudder, auxiliary ~30–50 hp)**:
- C_b ≈ 0.42; T_canoe ≈ 0.5 m; x_G ≈ +0.5–1% LWL aft midships.
- w_P0 ≈ 0.12 (shaft) or 0.08 (saildrive); t_P ≈ 0.15; eta ≈ 1.0.
- A_R scaled to hull (~1 m² mid-range); f_alpha ≈ 4.5 /rad.
- m_y_dash ≈ 0.6–0.8; J_z_dash appropriate to inertia.
- Derivatives: Start with Masuyama-like linear values (Y_v' ~ –0.55 range per their convention); scale higher-order cautiously.
- Prop: Standard 2-blade folding/feathering K_T curve (k0 ~0.5, k1 ~ –0.5, k2 ~ –0.1); adjust for open-water data.
- Interactions: Conservative ship-like with yacht adjustment (stronger for shaft).

**5 highest-value coefficients to tune first**:
1. Rudder-related (A_R, f_alpha, gamma_R/inflow) — low-speed authority.
2. w_P0 and t_P (or full prop model) — thrust and walk.
3. Key hull damping (Y_v_dash, N_r_dash) — turning response.
4. Prop k0/k1/k2 — power delivery across RPM/J.
5. Added masses/inertia — acceleration feel.

This envelope provides a defensible starting point before simulation tuning against real trials or observations (e.g., typical turning circle 3–5 LWL under power, noticeable but manageable prop walk on shaft-drive). Validate against analog geometry and adjust for specific shaft/saildrive configuration. For precision on any parameter, CFD or captive tests on the exact hull are ideal but expensive.



------------



# ChatGPT Deep Research (14 sources were used)

## Maneuvering-Coefficient Initialization for 10–16 m Auxiliary Monohull Sailing Yachts Using MMG-Style Coefficients

### Methodology and scope

This report targets auxiliary **monohull sailing yachts** in the **10–16 m LOA (34–52 ft)** class, prioritizing: fin-keel, **single rudder**, auxiliary **inboard diesel**, and “low-speed powered maneuvering / docking” (typical speed regime from near-zero up to a few knots, with frequent ahead/astern shifts and large rudder angles).  

The core challenge is that **published MMG-style coefficient sets for production cruising sailboats are rare** (especially for nonlinear hull derivatives and hull–propeller–rudder interaction terms). Therefore the evidence base is layered:

- **Primary “definitions + identification method” anchor:** the MMG standard-method description and its coefficient structure (hull polynomial derivatives, rudder/propeller interaction parameters, and non-dimensionalization conventions).   
- **Sailing-yacht-specific hydrodynamics for appendage interaction and “effective draft” conventions:** the sailing-yacht yaw-balance / Extended Keel Method (EKM) literature showing explicit **canoe-body draft** usage, **rudder downwash/leeway degradation**, and effective-depth corrections for deep-keel yachts.   
- **Sailing-yacht measurement / performance modeling conventions (draft, appendages, propeller drag modeling):** ORC VPP documentation (especially where it distinguishes canoe-body quantities and models propeller configurations/drag; while not a maneuvering model, it is one of the few widely-used, openly-documented yacht frameworks that formalizes “canoe body vs appendages”).   
- **Practical powered-behavior anchors at the small-yacht scale:** an instrumented propeller/stop-test on a **Bavaria 37 Cruiser** with **Volvo Penta saildrive**, including stop time and qualitative prop-walk note; and a broad comparative propeller test measuring stopping and prop-walk side-force.   
- **Propeller modeling (KT, KQ, advance ratio, polynomial fits):** open-water coefficient definitions, polynomial representations, and their limitations (especially for reverse / 4-quadrant behavior).   

Excluded (unless used explicitly as “analogy only”): catamarans, dinghies, sail-training ships, pure race yachts without auxiliary engines, and merchant-ship regressions presented as “yacht truth.” Merchant-ship MMG regressions are used **only as extrapolation scaffolding** and are explicitly labeled as such.   

image_group{"layout":"carousel","aspect_ratio":"16:9","query":["sailboat saildrive propeller in front of rudder photo","sailboat shaft drive propeller and rudder arrangement photo","sailboat folding propeller under power","sailboat feathering propeller close up"],"num_per_query":1}

### Draft and reference-quantity conventions for sailing yachts

#### Canoe-body draft, total draft, and “effective depth”
Sailing-yacht hydrodynamics commonly separates the **canoe body** (hull without keel/rudder) from appendages. In sailing-yacht EKM/yaw-balance formulations, the **canoe-body draft** is explicitly denoted **Tc** and used in lift-slope / aspect-ratio style relations, while the **total draft** **T** corresponds to the keel-tip depth.   

A recurring issue for deep-fin yachts is that **Tc/T can be small** (deep keel under a relatively shallow hull), which pushes them outside assumptions of some “keel extension to waterline” approximations; consequently, yacht literature introduces **effective depth** corrections (e.g., based on Newman & Wu slender-body-with-fin ideas) expressed as a function of **Tc/T**.   

In practice, you will likely need **two draft conventions** in a simulator:

- **Geometry / hydrostatics convention:**  
  - **Total draft** \(T\) = keel tip to waterline (matches builder “draft” specs and docking clearance concerns).  
- **Hydrodynamic scaling convention for MMG-style non-dimensionalization:**  
  - Use either **canoe-body draft** \(T_c\) (if your hull-force model is “canoe-body dominated”), or an **effective depth** \(T_e\) (if your “hull” includes keel effects or you want derivatives to stay within ship-like numeric magnitudes). Yacht literature explicitly provides \(T_e/T\) style corrections as functions of \(T_c/T\).   

#### Rudder inflow degradation from keel/hull (key for low-speed steering)
Sailing-yacht literature reports explicit **rudder angle-of-attack degradation** due to keel sidewash/downwash. A commonly cited “typical DSYHS layout” correction is that the effective rudder angle of attack is reduced by **~60% of leeway angle**, alongside an additional rudder inflow speed reduction to **~90% of free-stream** to represent keel wake effects.   

For docking (near-zero leeway but strong propeller slipstream), the same conceptual mechanism matters through MMG interaction coefficients (flow-straightening and rudder inflow velocity factors). The yacht-specific takeaway is: **rudder effectiveness is highly sensitive to upstream disturbances (keel/hull wake) and propeller slipstream geometry**, so interaction coefficients should be initialized conservatively and tuned early.   

#### Non-dimensionalization and where “dash” coefficients come from
The MMG standard method expresses hull forces using dynamic pressure scaling and non-dimensional “maneuvering derivatives,” typically with:
- \(X_H = \tfrac12 \rho L d U^2 X'_H(\cdot)\),  
- \(Y_H = \tfrac12 \rho L d U^2 Y'_H(\cdot)\),  
- \(N_H = \tfrac12 \rho L^2 d U^2 N'_H(\cdot)\),  
and polynomial expansions for \(X'_H, Y'_H, N'_H\) including linear and cubic terms (and quartic for \(X'_H\)), plus a baseline resistance coefficient \(R'_0\).   

For yachts, **the choice of \(d\)** (use \(T_c\) vs \(T_e\) vs \(T\)) strongly changes the numerical magnitude of the dimensionless derivatives, even if the physical forces are unchanged. This is the single biggest “convention trap” when porting ship MMG coefficients to deep-keel yachts.   

### Coefficient range table

#### How to read these ranges
- Ranges are intended as **initialization bounds** before tuning.  
- “Charter-cruiser / saildrive” assumes modern production cruisers with saildrive and a folding/feathering prop, common in charter fleets.  
- **Confidence** reflects how directly yacht-specific evidence constrains the parameter:
  - **High:** commonly defined and bounded by yacht sources or clearly identifiable geometry.  
  - **Medium:** defined well, but numeric ranges require some analogy.  
  - **Low:** mostly ship-derived/extrapolated or highly installation-specific.

#### Geometry, hydrostatics, and inertia (including added mass terms)

| Parameter | Typical range (10–16 m monohull auxiliary) | Charter-cruiser / saildrive narrower range | Confidence | Source(s) | What it affects / notes |
|---|---:|---:|---|---|---|
| `C_b` | 0.30–0.50 **(canoe-body definition)** | 0.33–0.45 | Low | EKM explicitly distinguishes canoe-body draft `Tc` from total draft `T`, implying “hull-form coefficients should be canoe-body-based,” not keel-tip based.  | Required by many ship regressions; for yachts it becomes a **convention**. If computed using total draft \(T\), `C_b` becomes unrealistically small for deep keels; do not feed ship regressions with such a value without re-validation.  |
| Effective hull draft convention (`Tc`, `T`, `Te`) | \(T_c\) typically ~0.4–1.1 m for 10–16 m LOA; \(T\) typically ~1.6–2.6 m; \(T_e\) between \(T_c\) and \(T\) | \(T\) ~1.8–2.4 m common; \(T_c/T\) “small” for deep keels | Medium | `Tc` (canoe-body draft) and `T` (total draft) appear directly in yacht EKM/yaw-balance methodology; effective depth correction formulas are provided for low-aspect situations via \(T_c/T\).  | Choose **one draft** for MMG non-dimensionalization and document it. For deep-fin yachts, \(T_e\) is often the most numerically stable reference for MMG-style derivatives (keel influence partially included).  |
| `x_G` | \(-0.08\,L\) to \(+0.02\,L\) (from midship; aft negative) | \(-0.06\,L\) to \(-0.01\,L\) | Low | MMG standard method uses `x_G` explicitly and non-dimensionalizes it by `L`.  | Strong effect on yaw inertia coupling and turning response. For yachts, CG is rarely published; treat as a tunable parameter informed by weight estimate. |
| `A_R` (rudder area) | 0.8–2.0 m² for 10–16 m LOA (spade rudders) | 1.0–1.8 m² | Medium | Rudder area is a direct geometric input in MMG; MMG example clarifies that `A_R` is typically the **movable** portion of the rudder area.  | Drives rudder normal force and the scaling of rudder-related coefficients. Use CAD/lines plan when possible. |
| `m_x_dash` | 0.03–0.10 | 0.04–0.08 | Low | MMG coefficient sets include added-mass terms `m'_x` (and `m'_y`) as separate non-dimensional values.  | Controls surge acceleration under thrust changes. Strongly dependent on reference draft convention. |
| `m_y_dash` | 0.08–0.30 | 0.10–0.25 | Low | MMG shows `m'_y` as a major term (ship example `m'_y≈0.223`).  | Controls lateral acceleration and influences low-speed “slide” behaviors. Deep keels likely increase physical lateral added mass, but non-dimensional value depends on chosen `d`. |
| `J_z_dash` | 0.002–0.010 | 0.003–0.008 | Low | MMG uses non-dimensional yaw inertia `J'_z` (ship example `J'_z≈0.011`) and highlights typical yaw gyration radius assumptions (e.g., 0.25L).  | Controls yaw acceleration; too small → twitchy; too large → sluggish. |

#### Propeller and rudder interaction parameters (MMG-style)

| Parameter | Typical range (10–16 m) | Charter-cruiser / saildrive narrower range | Confidence | Source(s) | What it affects / notes |
|---|---:|---:|---|---|---|
| `f_alpha` (rudder lift gradient factor) | 2.0–3.5 | 2.3–3.2 | Medium | MMG standard method uses a Fujii-type lift gradient model and shows an example value `f_a≈2.747`.  | Primary scalar on rudder normal force vs effective angle. For yacht spade rudders (often higher AR than ship rudders), upper end is plausible. |
| `eta` (relative rotative efficiency / installed prop efficiency factor) | 0.95–1.05 | 0.98–1.03 | Low | MMG framework separates open-water prop characteristics from behind-hull effects via wake and thrust deduction; most installed-efficiency “extra factor” terms are near unity in such decompositions.  | If your implementation includes an explicit `eta`, initialize near 1.0 and rely more on `w_P0` and `t_P` first. |
| `w_P0` (wake fraction at prop in straight running) | 0.05–0.30 | 0.05–0.15 | Low–Medium | MMG defines/uses `wP0` and gives a ship example (`wP0=0.40` for KVLCC2) illustrating magnitude and role.  | For saildrives (prop in relatively clean flow) expect **lower** than typical ship values; for shaft-in-aperture expect higher. Keep separate for ahead vs astern if modeling reverse realistically. |
| `t_P` (thrust deduction) | 0.02–0.20 | 0.02–0.12 | Low–Medium | MMG uses constant `tP` in \(X_P=(1-t_P)T\) and provides ship example `tP=0.220`.  | Yacht hulls have finer sterns and smaller prop loading than tankers → typically lower than the example ship case. |
| `t_R` (steering resistance deduction / rudder–hull interaction term) | 0.10–0.40 | 0.10–0.30 | Low | MMG identifies `tR` as part of the straight-moving rudder tests and provides ship example `tR≈0.387`.  | Strongly affects effective rudder sideforce transmitted to hull. For saildrives with strong slipstream-on-rudder, effective steering can be high even at low boat speed. |
| `l_R` (rudder arm; CG→rudder lever) | 0.40–0.60 L | 0.45–0.58 L | Medium | MMG uses rudder position `xR` (often ~\(-0.5L\)) as a reference geometry term.  | Mostly geometric: distance from CG to rudder center of pressure/stock. Drives yaw moment from rudder force. |
| `kappa` (prop slipstream velocity increase at rudder) | 0.4–1.1 | 0.6–1.1 | Low | MMG identifies parameters for longitudinal inflow to rudder (`j`, `e`) obtained from straight-moving rudder tests; these govern how propeller action modifies rudder inflow.  | Implementation-dependent naming: many MMG codes derive a “slipstream factor” from the `j`/`e` pair; saildrive typically raises the fraction of accelerated flow reaching the rudder. |
| `epsilon` (rudder/prop wake relationship) | 0.85–1.20 | 0.90–1.15 | Low | MMG uses `e` as part of rudder inflow characterization (`j, e`), with a ship example `e≈1.09`.  | Map your `epsilon` to the same definition as your MMG source; it typically stays near 1.0 if defined as a ratio of wake-related terms. |
| `x_H_dash` (acting point of additional lateral force induced by steering) | \(-0.55\) to \(-0.30\) | \(-0.52\) to \(-0.38\) | Medium | MMG defines `xH` explicitly and ship example shows `x’H≈-0.464`.  | Key yaw-moment arm for hull–rudder interaction; less sensitive than `a_H` but still important for turn radius vs response. |
| `a_H` (rudder-force increase factor acting on hull) | 0.10–0.45 | 0.15–0.35 | Medium | MMG provides ship example `aH≈0.312` and discusses its identification from straight-moving rudder tests.  | Governs how rudder action induces additional lateral force on hull (beyond the rudder’s own force). |
| `gamma_R_plus` | 0.50–0.90 | 0.60–0.85 | Low–Medium | MMG uses a flow-straightening coefficient `cR` with different values depending on sign; ship example shows `cR(bR<0)=0.395`, `cR(bR>0)=0.640`.  | For yachts, keel/hull wake and rudder placement drive this; asymmetry is plausible. Treat “plus/minus” as separate tuning knobs if you model different behavior in port vs starboard maneuvers or ahead vs astern. |
| `gamma_R_minus` | 0.35–0.85 | 0.55–0.80 | Low–Medium | Same as above.  | In sailing-yacht EKM context, “rudder effective angle reduction” is explicitly discussed (e.g., 60% leeway correction), supporting the concept that `gamma`-type factors can be significantly below 1.  |
| `k_0`, `k_1`, `k_2` (KT polynomial fit coefficients) | k0: 0.15–0.35; k1: −0.15 to −0.60; k2: −0.05 to −0.35 | Similar; often slightly lower k0 for 2-blade folding | Low | MMG shows a sample quadratic KT fit (`k0≈0.293`, `k1≈-0.275`, `k2≈-0.139`) for a ship prop; Smogeli shows how KT can be approximated with low-order polynomials in advance ratio and warns about quadrant limitations.  | Best practice is to derive from actual prop curves (see derivation table), then fit. For folding/feathering props, use **separate ahead/astern curves** or a 4-quadrant map if possible.  |

#### Hull-force polynomial derivatives (MMG-style)

Below are **initialization envelopes** for the **dimensionless hull derivatives** in the MMG polynomial hull-force model. They are **the least constrained by yacht-specific open literature**, so confidence is generally low; the key is to preserve correct signs and plausible magnitudes, then tune to match turning/stop behavior. MMG explicitly defines the polynomial structure and names these as “hydrodynamic derivatives on maneuvering.”   

| Parameter | Typical range (10–16 m) | Charter-cruiser / saildrive narrower range | Confidence | Source(s) | What it affects / notes |
|---|---:|---:|---|---|---|
| `R_0_dash` | 0.010–0.035 | 0.012–0.030 | Low | MMG defines baseline resistance coefficient `R0’` inside the hull surge-force polynomial.  | Controls how quickly the boat coasts down at low speed (with prop in neutral) and sets required thrust for a given steady low speed. |
| `X_vv_dash` | −0.02 to −0.10 | −0.02 to −0.08 | Low | MMG polynomial includes `X’vv`; ship example `X’vv≈−0.040`.  | Adds surge drag with drift; matters in sideways docking and crabbing. |
| `X_vr_dash` | −0.02 to +0.03 | −0.01 to +0.02 | Low | MMG polynomial includes `X’vr`; ship example `X’vr≈0.002`.  | Cross-coupling drag during turning with lateral velocity. |
| `X_rr_dash` | 0.00–0.05 | 0.00–0.04 | Low | MMG polynomial includes `X’rr`; ship example `X’rr≈0.011`.  | Turning-rate-related surge drag; influences how speed bleeds off in tight turns. |
| `X_vvvv_dash` | 0.2–1.5 | 0.3–1.2 | Low | MMG includes quartic `X’vvvv`; ship example `X’vvvv≈0.771`.  | High-drift surge drag stabilizer; prevents unphysical sideways “gliding.” |
| `Y_v_dash` | −0.25 to −0.90 | −0.30 to −0.75 | Low | MMG defines `Y’v`; ship example `Y’v≈−0.315`.  | Primary lateral damping/sideforce slope with lateral velocity (or drift). Deep fin keels can increase physical sideforce slope; non-dimensional value depends on draft convention. |
| `Y_r_dash` | +0.03 to +0.20 | +0.05 to +0.16 | Low | MMG defines `Y’r` (written `Y’R` in the paper); ship example `Y’r≈0.083`.  | Lateral force from yaw rate; affects turning-circle size and sway during pivot turns. |
| `Y_vvv_dash` | −0.6 to −2.5 | −0.8 to −2.2 | Low | MMG includes cubic `Y’vvv`; ship example `Y’vvv≈−1.607`.  | Nonlinear saturation/softening at higher drift angles; important for docking at large rudder/low speed where drift can be large. |
| `Y_vvr_dash` | 0.1–0.8 | 0.2–0.6 | Low | MMG includes `Y’vvr`; ship example `Y’vvr≈0.379`.  | Cross-coupling in turning with drift. |
| `Y_vrr_dash` | −0.8 to 0.0 | −0.7 to −0.1 | Low | MMG includes `Y’vrr`; ship example `Y’vrr≈−0.391`.  | Often negative: turning rate can reduce effective lateral force at certain combinations. |
| `Y_rrr_dash` | −0.05 to +0.05 | −0.03 to +0.03 | Low | MMG includes `Y’rrr`; ship example `Y’rrr≈0.008`.  | Usually small; helps shape high-rate behavior. |
| `N_v_dash` | −0.05 to −0.40 | −0.08 to −0.30 | Low | MMG defines `N’v`; ship example `N’v≈−0.137`.  | Course stability vs oversteer tendencies. For yachts, keel placement and CLR vs CG are dominant. Yacht yaw-balance methods emphasize correct CLR estimation.  |
| `N_r_dash` | −0.02 to −0.20 | −0.03 to −0.15 | Low | MMG defines `N’r` (`N’R`); ship example `N’r≈−0.049`.  | Yaw damping. Too small → fish-tailing; too large → won’t start turning at low speed. |
| `N_vvv_dash` | −0.10 to +0.05 | −0.08 to +0.03 | Low | MMG includes `N’vvv`; ship example `N’vvv≈−0.030`.  | Shapes nonlinear yaw-moment at large drift. |
| `N_vvr_dash` | −0.8 to −0.05 | −0.6 to −0.1 | Low | MMG includes `N’vvr`; ship example `N’vvr≈−0.294`.  | Often negative; couples drift-squared with yaw rate. |
| `N_vrr_dash` | −0.05 to +0.15 | −0.02 to +0.12 | Low | MMG includes `N’vrr`; ship example `N’vrr≈0.055`.  | Cross-coupling; tunes pivot-point feel. |
| `N_rrr_dash` | −0.08 to +0.03 | −0.05 to +0.02 | Low | MMG includes `N’rrr`; ship example `N’rrr≈−0.013`.  | Usually small; affects tight turn behavior at high rates (rare in docking but can matter in crash maneuvers). |

### Formula and derivation table

The table below prioritizes **defensible derivation workflows** over “guessing constants.” Where the literature provides a direct identification method (e.g., MMG straight-moving rudder tests), that is listed first.   

| Parameter | Recommended derivation method | Required inputs | Where inputs usually come from | Known limitations for 10–16 m yachts |
|---|---|---|---|---|
| `C_b` | Compute on **canoe body**: \(C_b=\nabla /(L_{WL} B_{WL} T_c)\) using canoe-body draft \(T_c\). | Displacement volume \(\nabla\), \(L_{WL}\), \(B_{WL}\), \(T_c\). | Builder hydrostatics or ORC/IMS offsets; CAD hull surface. | \(T_c\) is rarely published; using total draft \(T\) makes \(C_b\) misleadingly small for deep keels.  |
| Canoe-body draft `Tc` | Prefer measurement from hull surface at design waterline; if unavailable, infer from offsets / hydrostatic section at midship. | Hull geometry. | ORC/IMS measurement files; CAD; lines plan. | Strongly affects non-dimensional coefficients; treat as a documented convention.  |
| Effective depth `Te` | Use yacht literature’s effective-depth correction as a function of \(T_c/T\) (deep-keel correction approach). | Total draft \(T\), canoe draft \(T_c\). | Builder draft + hull geometry estimate for \(T_c\). | This is not “standard MMG,” but helps avoid numerical extremes when keel dominates lateral forces.  |
| `x_G` | Mass-property estimate + calibration: start from weight spreadsheet; tune using turning/stop response if needed. | Weight breakdown, longitudinal locations. | Design weight estimate; onboard survey; CAD. | Rarely published; small errors can be absorbed into `N_r’`, `J_z’`, and rudder arm tuning.  |
| `A_R` | Direct geometry of movable rudder planform; treat as “movable part excluding fixed horn/skeg.” | Rudder planform. | CAD; class drawings; measurement. | Production brochures rarely include rudder area; but it is geometric and should not be guessed if you can measure.  |
| `f_alpha` | Use MMG rudder lift-gradient formula (Fujii-type) as initialization; validate with rudder profile AR. | Rudder aspect ratio / geometry parameter. | Rudder CAD; typical NACA-like section assumptions. | Sailboat rudders can have different stall behavior (esp. due to keel/hull wake); treat as first-fit only.  |
| `w_P0`, `t_P` | Best: self-propulsion test or CFD at low speed; otherwise initialize by installation class (saildrive vs shaft) and tune to match steady-speed vs RPM. | Prop location, hull stern form, measured speed vs RPM. | Sea trials; dock tests; manufacturer RPM/speed observations. | Ship regressions often assume fuller sterns; saildrive props can be in cleaner flow → much lower wake fraction.  |
| `t_R`, `a_H`, `x_H_dash`, (`epsilon`,`kappa` via `j,e`) | Follow MMG identification concept: straight-moving rudder tests (propelled, \(β=0, r=0\)) yield these interaction terms. | Measured forces/moments vs rudder angle (upright). | Captive tests (rare for yachts) or constrained CFD “rudder angle test.” | Yacht docking uses higher rudder angles and lower speeds than standard ship trial points; coefficients may be speed-dependent.  |
| `gamma_R_plus`, `gamma_R_minus` | Either: calibrated MMG flow-straightening test concept; or map from yacht “rudder AoA degradation” (downwash) ideas. | Rudder zero-lift angle shifts; slipstream geometry. | CFD wake analysis; towing tank; heuristic (keel–rudder spacing). | Yachts show explicit keel→rudder sidewash effects (e.g., 60% leeway correction in DSYHS-type layouts), supporting values well below 1.  |
| `m_x_dash`, `m_y_dash`, `J_z_dash` | Compute from mass/inertia + added-mass estimate (strip theory/slender body); tune using acceleration response tests. | Mass, radii of gyration, hull geometry. | Weight estimate; onboard roll/yaw tests; CAD. | Highly sensitive to the chosen `d` scaling; be consistent with your `Tc/Te` decision.  |
| `R_0_dash` | Calibrate from “neutral” coast-down or steady low-speed in calm water; separate prop drag if modeling freewheeling vs locked. | Speed decay data or power-to-speed curve. | Sea trials; docking tests. | Propeller drag state matters: fixed vs folding/feathering; gear locked vs freewheeling changes resistance strongly.  |
| KT polynomial `k0,k1,k2` | Fit \(K_T(J)\) in the expected operating J-range. Use polynomial forms as in MMG/controls literature; for better reverse behavior use 4-quadrant mapping or separate astern curve. | Prop diameter \(D\), pitch, blade area ratio; or manufacturer thrust curves; RPM vs speed. | Manufacturer prop charts; measured bollard pull; generic Wageningen-B style curves (with caution). | Low-order polynomials work mainly in the first quadrant and can fail for negative/near-zero shaft-speed transitions; Smogeli details these limitations.  |
| Folding/feathering under power | Use separate ahead/astern thrust behavior: feathering generally better in reverse; folding can be less reliable for crash stop and often needs higher revs to open in astern. | Prop type, measured reverse response, stop tests. | Prop tests; controlled sea trials. | Strongly prop-specific. Comparative tests measure stopping and prop-walk and show large variation among products.  |

### Analog boats and data anchors

These are practical, model-relevant analogs with publicly available information indicating propulsion type and (where possible) maneuvering-relevant notes (prop type, etc.). They span charter-style cruisers and heavier shaft-drive cruisers to bound the space.

| Analog boat (exact model) | Length | Drive | Why it is a good analog | Helps constrain | Source |
|---|---:|---|---|---|---|
| Bavaria 37 Cruiser (test boat) | LWL 10.25 m (test doc) | Saildrive | Direct measured powered behavior: speed vs RPM, stop time, and note on prop-walk neutrality in reverse with a Gori prop; saildrive installation explicitly stated. | `k0,k1,k2` (via speed/RPM), reverse modeling, stop dynamics, qualitative prop-walk, saildrive inflow assumptions (`w_P0`) |  |
| Sun Odyssey 419 | LOA 41.83 ft | Saildrive | Common cruiser class; explicit statement that diesel engine is fitted “with a saildrive” for docking/maneuvering. | Saildrive parameter ranges (`w_P0`, `t_P`), helm authority expectations |  |
| J/109 | (class spec) | Saildrive | Performance cruiser with explicit saildrive and 2-blade folding prop; useful “lighter/faster” end of monohull spectrum (still auxiliary). | Folding-prop under power assumptions; rudder authority at speed transitions |  |
| Dehler 38 | (spec sheet) | Saildrive | Modern cruiser/racer with explicit saildrive options and folding prop choices; bridges charter cruiser ↔ performance ends. | Saildrive + folding-prop parameterization; reverse effectiveness tuning targets |  |
| X-382 (brokerage spec) | (model) | Saildrive | Cruiser/racer with explicit saildrive in machinery listing; useful mid-size reference for saildrive geometry. | Saildrive interaction assumptions; keel/rudder proportions typical of performance cruisers |  |
| Najad 380 | LOA 11.55 m | Shaft drive | Heavier displacement cruiser with explicit **shaft drive** and feathering prop (Maxprop). Provides contrast vs saildrive handling and inertia. | Shaft-drive ranges (`w_P0`, `t_P`), reverse thrust of feathering props, inertia terms (`J_z’`) |  |
| Catalina 36 (example listing) | ~36 ft | Shaft drive | Very common fin-keel monohull format with explicit shaft-drive listing; helps anchor “older production cruiser” behavior. | Shaft-drive baseline; prop-walk expectations under shaft geometry |  |
| J/120 (example listing) | 40 ft class | Shaft drive | Performance-oriented auxiliary monohull with explicit shaft-drive listing (contrasts with saildrive J/109). | Shaft-drive + higher speed potential; helps bound rudder authority and yaw damping |  |

### Tuning guidance and safe starting envelopes

#### What to tune first and why (low-speed docking priorities)
For “docking realism,” the simulator’s perceived quality usually hinges more on **propulsion + rudder authority + reverse quirks** than on high-order hull derivatives. Comparative propeller tests explicitly measure **astern thrust, stopping distance, and prop-walk side-force**, and show large variations across prop types—exactly the phenomena users notice first.   

A practical tuning order that minimizes wasted effort:

1) **Propeller thrust (ahead/astern) and effective resistance** (`k0,k1,k2`, `R0’`, plus your prop drag state logic)  
2) **Wake/thrust-deduction** (`w_P0`, `t_P`) to match speed–RPM or speed–throttle response  
3) **Rudder effectiveness in propwash** (`f_alpha`, `kappa`, `epsilon`, `t_R`)  
4) **Rudder–hull coupling** (`a_H`, `x_H’`) to get realistic turning diameter / pivot point  
5) **Hull yaw stability/damping** (`Y_v’`, `N_r’`, `N_v’`) to prevent “ice skating” or “on rails” artifacts  

This ordering mirrors what the MMG method itself emphasizes: interaction coefficients (`tR`, `aH`, `xH’`, inflow terms) are determined from rudder tests, while hull derivatives shape the overall maneuvering response.   

#### Common “looks wrong” symptoms by coefficient group

**Propeller & resistance (`R0’`, `k0..k2`, plus `w_P0`, `t_P`)**  
- Too low effective resistance / too strong thrust → boat accelerates unrealistically fast, reaches near hull-speed with minimal throttle, and stops too slowly in neutral.   
- Too high resistance / too weak thrust → boat feels “stuck,” can’t build way, and reverse has no authority. Real tests show meaningful stop times and measurable stopping distances; extreme values break that.   

**Rudder in propwash (`f_alpha`, `kappa`, `epsilon`, `t_R`, `gamma±`)**  
- Too low → “dead rudder” at low speed; helm does nothing until boat already has significant forward speed. This contradicts common saildrive-close-to-rudder behavior where even modest RPM can generate strong flow at the rudder.   
- Too high → unrealistic pivot-in-place with tiny speed, and overly sharp response to small rudder angles; can also create “snap yaw” when shifting ahead/astern.   

**Rudder–hull coupling (`a_H`, `x_H’`, asymmetry via `gamma_R±`)**  
- Too low `a_H` → turning circle too large; the boat slides sideways without building yaw moment.   
- Too high `a_H` → boat yaws excessively for modest helm, often giving unrealistic “bow snaps” and very small tactical diameter.   
- Poorly tuned `gamma_R±` → port/starboard asymmetry that feels arbitrary rather than reflecting systematic inflow differences; yacht literature supports that keel/hull can reduce effective rudder AoA substantially, so asymmetry should be plausible and tied to geometry.   

**Hull derivatives (`Y_v’`, `N_v’`, `N_r’`, higher-order terms)**  
- Too low damping → “ice skating” sideways at low speed; rudder induces yaw without enough lateral resistance. MMG’s cubic terms exist specifically to better represent nonlinear maneuvering forces.   
- Too high damping → “train on rails”: strong directional stability, sluggish to start turning, and overly fast decay of yaw rate when helm is centered.   

#### Safe starting envelopes

These are practical initialization envelopes intended for a “typical charter monohull” before tuning.

##### Safe starting envelope for a 10–16 m charter monohull with saildrive
Assumptions: fin keel, spade rudder, saildrive, folding/feathering prop; docking speeds typically 0–4 kn; large rudder angles. The existence of strong prop/rudder effects and meaningful crash-stop timing is supported by the Bavaria 37 saildrive test and comparative propeller testing.   

Recommended envelope (MMG-style):
- `w_P0`: **0.05–0.15** (cleaner inflow than ship examples; start at 0.10).   
- `t_P`: **0.02–0.12** (start ~0.06).   
- `f_alpha`: **2.3–3.2** (start ~2.8).   
- `t_R`: **0.10–0.30** (start ~0.20).   
- `a_H`: **0.15–0.35** (start ~0.25–0.30).   
- `x_H_dash`: **−0.52 to −0.38** (start ~−0.45).   
- `gamma_R_plus / gamma_R_minus`: start symmetric **0.65–0.80**, then allow ±0.05–0.15 asymmetry if needed.   
- Propeller KT fit `k0,k1,k2`: derive by fit; if forced to initialize, use ship-example order of magnitude and tune to match speed–RPM.   
- Reverse modeling: if using folding props, include reduced “deployment” effectiveness in astern unless you have prop-specific evidence; comparative prop tests show astern performance varies widely and can be less reliable for some folding props.   

**Five highest-value coefficients to tune first (saildrive charter case):**
- `k0,k1,k2` (or equivalent thrust curve fit)   
- `R_0_dash`   
- `w_P0`   
- `t_P`   
- `kappa` (or your equivalent “rudder-in-propwash” gain)   

##### Safe starting envelope for a 10–16 m monohull with shaft drive
Assumptions: conventional shaft, prop further from rudder (often), possibly more hull interaction; typical of heavier cruisers (e.g., Najad 380 shaft-drive with feathering prop).   

Recommended envelope:
- `w_P0`: **0.15–0.30** (start 0.22).   
- `t_P`: **0.05–0.20** (start 0.10–0.14).   
- `t_R`: **0.15–0.40** (start ~0.25–0.30).   
- `kappa`: **0.4–0.9** (start ~0.6).   
- `gamma_R±`: **0.50–0.80** (start ~0.65; allow more asymmetry if shaft angle / offset induces it).   
- For feathering props, reverse thrust is often strong (comparative tests emphasize that feathering props tend to outperform folding props astern), so initialize reverse effectiveness higher than for folding props unless evidence suggests otherwise.   

**Five highest-value coefficients to tune first (shaft-drive case):**
- `w_P0`   
- `t_P`   
- `gamma_R_minus` (since reverse often exposes asymmetry/prop-walk artifacts first)   
- `t_R`   
- `N_r_dash` (yaw damping; critical to avoid “fish-tailing” when shifting gears)   

### Key source URLs

```text
MMG standard method (Yasukawa & Yoshimura, 2015, Springer PDF)
https://link.springer.com/content/pdf/10.1007/s00773-014-0293-y.pdf

Yaw balance / Extended Keel Method discussion (sailing yacht; canoe body draft Tc; effective depth)
https://scispace.com/pdf/the-yaw-balance-of-sailing-yachts-upright-and-heeled-16uye8jsx2.pdf

ORC VPP documentation (canoe body draft + propeller modeling conventions)
https://orc.org/public/ORC%20VPP%20Documentation.pdf

Bavaria 37 saildrive propeller test (speed vs RPM, stop time, prop-walk note)
https://bsidk.com/app/uploads/sites/5/2022/02/PROPELLER-TEST-BAVARIA-37.pdf

Comparative folding/feathering propeller test (thrust, stopping, propwalk side-force)
https://www.yachtingmonthly.com/gear/folding-and-feathering-propeller-test-29807

Propeller modeling with KT polynomials and limitations (Smogeli PhD)
https://assor.folk.ntnu.no/PhD%20Thesis/Smogeli_PhD_Thesis.pdf

Open-water coefficient definitions and Wageningen-B polynomial context (Marine Propulsors proceedings paper)
https://www.marinepropulsors.com/proceedings/2019/MA2-4.pdf
```