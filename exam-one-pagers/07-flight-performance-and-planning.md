# Flight Performance and Planning — course-topic summary

[← Back to index](README.md)

**Course scope:** mass/balance; fuel and flight-log planning; take-off, climb and landing performance; pressure/density altitude; wind components; chart/table reading; and ICAO flight-plan information.

## 1. Mass, moment, and centre of gravity

Use the aircraft-specific POH/AFM loading data. The **datum** is the reference from which each arm is measured; **moment = mass × arm**; total CG is `Σ moments / Σ mass`. Start from the current empty/basic mass and include occupants, baggage, fuel and other variable loads using the correct units and arms. Confirm both maximum mass and CG envelope—not just total mass.

Check loading for take-off and landing: fuel burn can change mass and CG. Forward CG generally increases stability/control force and may limit flare; aft CG reduces stability and may make recovery difficult. Secure baggage so it cannot shift. Do not use an example aircraft's arms or fuel density for another type.

**Class C172 example:**

| Phase | Mass | Total moment | CG = moment / mass |
|---|---:|---:|---:|
| Loaded | 2451 lb | 103,100 lb·in | 42.1 in |
| After specified fuel burn | 2202 lb | 91,100 lb·in | 41.4 in |

These are example aircraft/data, not operating limits. Recompute each phase and check both mass and CG against the envelope.

## 2. Take-off, climb, landing, and density altitude

```text
TAKE-OFF: ground roll → airborne segment → specified obstacle height
LANDING:  specified screen height → touchdown → landing ground roll
```

| Chart input | Typical effect / check |
|---|---|
| Higher mass, pressure altitude or temperature | Generally reduces performance margin |
| Headwind / tailwind | Normally shortens / lengthens ground distance |
| Slope and surface | Check uphill/downhill and wet, grass, soft or contaminated corrections |
| Configuration and footnotes | Apply the actual chart's corrections and obstacle height; do not borrow another aircraft's factors |

Ground roll and total distance over an obstacle are different answers; course examples commonly use 50 ft/15 m.

**Pressure altitude** is found by setting 1013.25 hPa and reading the altimeter (or applying the specified correction). **Density altitude** is pressure altitude corrected for non-standard temperature; high DA means lower density and typically less engine/propeller performance, less lift at a given TAS and poorer climb/take-off performance. Read charts exactly as published; interpolate only as permitted and apply each adjustment once.

```text
Pressure altitude + temperature correction → density altitude
High / hot conditions → lower air density → generally longer take-off and poorer climb
```

| Climb term | Measures | Useful for |
|---|---|---|
| Vx | Best angle: height gained per horizontal distance | Obstacle clearance |
| Vy | Best rate: height gained per time | Gaining altitude in least time |
| Gradient | Vertical / horizontal distance | Comparing height gained with distance |

Do not confuse rate, gradient and angle. For a rough small-angle check, a 5% climb gradient is about 3°.

## 3. Fuel, distance, and flight logs

```text
Distance + true course + wind + TAS → WCA / heading / GS → time / ETA → trip fuel
Trip fuel + taxi/start + climb + applicable alternate / contingency / final reserve
```

`time (h) = distance (NM) / GS (kt)`; use GS, not TAS. Verify usable fuel, grade, quantity, consumption units and the correct density when converting volume to mass.

Update the plan from actual groundspeed and weather at checkpoints. Recalculate remaining time and fuel; plan alternates and diversion decision points while options remain. A flight log commonly records checkpoint, frequency, minimum safe altitude, planned altitude/FL, track/heading, GS, distance, ETE/ETA/ATA and fuel.

## 4. Wind and weight/performance calculation discipline

Resolve wind relative to runway/track: headwind `W cos θ`, crosswind `W sin θ`. The crosswind limit is an aircraft/operator constraint; the maximum wind for a specified crosswind component is `component / sin θ`. Use exact trig or a flight computer when needed.

For weight/balance and charts:
1. Write values with units and use consistent mass/arm/moment units.
2. Verify datum, loading condition, chart title and configuration.
3. Check all chart notes and interpolation steps.
4. Compare result with limits and margins for every phase, including landing.

## 5. Flight plan and paperwork

Know the purpose and main information in an ICAO flight plan: aircraft identification/type/equipment, flight rules/type, departure and EOBT in UTC, speed/level/route, destination/total EET/alternates, other information, endurance, persons on board and survival/emergency equipment. Filing/activation/closing and when a flight plan is required depend on the state and operation; use current AIP/authority rules.

**Course notes:** [Flight Performance and Planning lesson notes](../lesson-notes/70_Flight_Performance_and_Planning.md) · [question bank](../70_Flight_Performance_and_Planning.md)

**Primary references:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) · [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) · [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors). The current aircraft POH/AFM controls.
