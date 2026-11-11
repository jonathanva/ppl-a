# VFR navigation calculations

[← Back to index](README.md)

## Route, track, heading

| Term | Meaning / correction |
|---|---|
| Track / heading | Path over ground / direction the nose points; wind causes drift |
| Wind-correction angle (WCA) | Correct desired track toward wind; right positive, left negative |
| Variation | True ↔ magnetic; magnetic is less than true for east, greater for west |
| Deviation | Magnetic ↔ compass; follow the aircraft's deviation card |

Label directions true, magnetic or compass; use the chart and card, not an unlabelled mnemonic.

```text
TRUE TRACK ── + signed WCA ──> TRUE HEADING
TRUE HEADING ── variation ──> MAGNETIC HEADING ── deviation card ──> COMPASS HEADING
```

**Example:** track 040°T with a 7° left correction gives heading 033°T. With 4°E variation, magnetic heading is 029°M; apply the aircraft's deviation card separately.

**Course, heading and bearing conversions:** for the full true/magnetic/compass chain, QDR/QTE, variation, deviation and worked examples, see [navigation conversions](14-q-codes-and-variation.md).

## Wind triangle

For wind speed `W`, angle `θ` between wind direction and desired track, and true airspeed `TAS`:

| Find | Formula |
|---|---|
| Crosswind | `W × sin θ` |
| Headwind | `W × cos θ`; negative for tailwind |
| Wind correction | `arcsin(crosswind / TAS)`, toward the wind |
| Groundspeed | `TAS × cos(WCA) − headwind` |

These component formulas are a planning approximation; a flight computer or vector triangle is better for large angles or strong winds. Check whether a wind direction is reported **from** (meteorological convention) or **to** (vector direction).

## Time, distance, and off-track

| Find | Calculation |
|---|---|
| Time in minutes | `distance (NM) / GS (kt) × 60` |
| Distance in NM | `GS (kt) × time (min) / 60` |
| Track error, small angles | `60 × cross-track error / distance flown` degrees |
| Closing angle, small angles | `60 × off-track distance / distance remaining` degrees |

To regain the destination, add the closing angle to the correction needed to maintain the original track, in the appropriate direction.

**Worked 1-in-60:** 5 NM right of track after 60 NM, with 60 NM remaining → track error ≈ 5° right, closing angle ≈ 5° → approximately **10° left** from the heading that produced the error, assuming unchanged wind and small angles.

Measure cross-track and along-track distances on the chart in the same units. The 1-in-60 rule is for small angles and short distances, not a substitute for replanning after a major deviation.

## Chart and in-flight cross-checks

- Use charted magnetic variation, scale, legend, airspace vertical limits, frequencies, prohibited/restricted/danger areas, and terrain/obstacle data.
- Check position by more than one cue: time, heading/track, landmarks, terrain, and radio-navigation information if available. A single visual feature can be misleading.
- Recalculate ETA/ fuel and terrain clearance when wind or track differs from plan. Identify a safe diversion and decision point before conditions become limiting.
- Confirm route, altitude, QNH, airspace status, NOTAMs, and suitable alternates using current official information.

**Sources:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) (PPL(A) navigation syllabus); [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) (navigation fundamentals); [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors). Use current official aeronautical charts/AIP and the approved flight computer for operational planning.
