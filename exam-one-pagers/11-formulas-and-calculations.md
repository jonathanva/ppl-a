# Core formulas and calculations

[← Back to index](README.md)

## The flight-planning triangle

| Need | Formula |
|---|---|
| Time | `t (h) = distance (NM) / groundspeed (kt)` |
| Distance | `d (NM) = groundspeed (kt) × time (h)` |
| Fuel used | `fuel = consumption per hour × time (h)` |
| Fuel endurance | `usable fuel / consumption per hour` (before reserves/limitations) |
| Mass moment | `moment = mass × arm` |
| Centre of gravity | `CG = total moment / total mass` |

Keep all inputs in the units required by the chart or aircraft data. For weight and balance, include every item, use the correct datum/arm, and confirm the resulting mass and CG fall within the approved envelope.

## Aerodynamics and turns

| Quantity | Formula / condition |
|---|---|
| Dynamic pressure | `q = ½ ρ V²` |
| Lift / drag | `L = ½ ρ V² S C_L` / `D = ½ ρ V² S C_D` |
| Load factor | `n = lift / weight`; `n = 1 / cos(bank)` in a coordinated level turn |
| Accelerated stall speed | `V_S(n) = V_S(1) × √n`, same configuration and assumptions |
| Rate-one turn | `3°/s`; approximate radius in NM = `groundspeed (kt) / 188.5` |

Use the specified standard-rate formula/table when required.

The lift equation is a model, not an operating limit. Use the AFM/POH for approved speeds, load limits, and performance.

## Wind and performance

| Calculation | Rule / meaning |
|---|---|
| Wind relative to track/runway | Headwind `= W × cos(angle)`; crosswind `= W × sin(angle)` |
| Approximate TAS from IAS | `TAS ≈ IAS × (1 + 0.02 × altitude in thousands of feet)` |
| Pressure altitude | Altimeter set to 1013.25 hPa, or approved pressure correction applied |
| Density altitude | Pressure altitude corrected for non-standard temperature |

A headwind reduces groundspeed; a tailwind increases it. The TAS rule is rough: temperature and instrument/position errors matter. Hot/high/humid conditions reduce density and generally degrade take-off, climb, and engine/propeller performance.

For take-off and landing, interpolate charts only as instructed, apply all chart notes and corrections, and include surface, slope, wind, mass, temperature, pressure altitude, and obstacle effects as applicable. Never invent a correction factor.

## Sanity checks

1. Label each value and convert to consistent units.
2. Estimate the answer before calculating; reject impossible units or a result that contradicts the expected trend.
3. Keep **IAS, TAS, and groundspeed** distinct; only groundspeed belongs in the map time-distance calculation.
4. Treat reserves as a requirement to satisfy, not discretionary fuel available for the planned leg.

**Sources:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) (PPL(A) syllabus and aircraft operational data); [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) (principles, performance, and weight-and-balance fundamentals); [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors). The aircraft's current POH/AFM is controlling for its actual performance.
