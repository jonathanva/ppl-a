# VFR navigation calculations

[← Back to index](README.md)

## Route, track, heading

- **Track** is the path over the ground; **heading** is where the nose points; **drift** is the difference caused mainly by wind.
- Correct the planned track into wind: `true heading = true track + signed wind-correction angle (WCA)`. Use a positive angle for a right correction and a negative angle for a left correction.
- Convert references carefully: `true ↔ magnetic` uses local **variation**; `magnetic ↔ compass` uses the aircraft's **deviation card**. For east variation, magnetic is less than true; for west variation, magnetic is greater. Apply deviation using the sign/convention on the aircraft card.
- Apply corrections in a declared order and label every course/heading as true, magnetic, or compass. The local chart's compass rose and the aircraft compass card are safer than an unlabelled “east is least” shortcut.

```text
TRUE TRACK ── + signed WCA ──> TRUE HEADING
TRUE HEADING ── variation ──> MAGNETIC HEADING ── deviation card ──> COMPASS HEADING
```

**Example:** track 040°T with a 7° left correction gives heading 033°T. With 4°E variation, magnetic heading is 029°M; apply the aircraft's deviation card separately.

## Wind triangle

For a wind speed `W`, angle `θ` between wind direction and desired track, and true airspeed `TAS`:

- Crosswind component: `W × sin θ`.
- Headwind component: `W × cos θ` (positive headwind; tailwind is negative).
- Approximate WCA: `arcsin(crosswind component / TAS)`, toward the wind.
- Approximate groundspeed: `TAS × cos(WCA) − headwind component`.

These component formulas are a planning approximation; a flight computer or vector triangle is better for large angles or strong winds. Check whether a wind direction is reported **from** (meteorological convention) or **to** (vector direction).

## Time, distance, and off-track

| Find | Calculation |
|---|---|
| Time in minutes | `distance (NM) / GS (kt) × 60` |
| Distance in NM | `GS (kt) × time (min) / 60` |
| Track error, small angles | `60 × cross-track error / distance flown` degrees |
| Closing angle, small angles | `60 × off-track distance / distance remaining` degrees |

To regain the destination, add the closing angle to the correction needed to maintain the original track, in the appropriate direction.

Measure cross-track and along-track distances on the chart in the same units. The 1-in-60 rule is for small angles and short distances, not a substitute for replanning after a major deviation.

## Chart and in-flight cross-checks

- Use charted magnetic variation, scale, legend, airspace vertical limits, frequencies, prohibited/restricted/danger areas, and terrain/obstacle data.
- Check position by more than one cue: time, heading/track, landmarks, terrain, and radio-navigation information if available. A single visual feature can be misleading.
- Recalculate ETA/ fuel and terrain clearance when wind or track differs from plan. Identify a safe diversion and decision point before conditions become limiting.
- Confirm route, altitude, QNH, airspace status, NOTAMs, and suitable alternates using current official information.

**Sources:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) (PPL(A) navigation syllabus); [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) (navigation fundamentals); [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors). Use current official aeronautical charts/AIP and the approved flight computer for operational planning.
