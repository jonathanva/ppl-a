# Navigation — course-topic summary

[← Back to index](README.md)

**Course scope:** Earth coordinates and chart projections; distance/time/scale; wind triangle and heading; compass and bearings; radio aids; radar/transponder/GNSS; and integrated route, fuel, PET/ETP and holding calculations.

## 1. Earth, coordinates, charts, and scale

| Concept | Key relationship |
|---|---|
| Latitude | N/S of equator; 1′ ≈ 1 NM, 1° ≈ 60 NM |
| Longitude | E/W of Greenwich; 1° ≈ `60 × cos(latitude)` NM |
| Earth rotation | 15°/h; 1° longitude ≈ 4 min solar time; flight planning uses UTC |
| Great circle / rhumb line | Shortest spherical route / constant angle to meridians |
| Mercator / Lambert | Straight rhumb lines and scale increases with latitude / conformal conic suited to mid-latitudes |
| Scale `1:n` | Convert map and real distances to the same units before dividing |

For short coordinate problems, combine latitude and longitude distances as perpendicular components. Handle N/S and E/W signs, including crossings of the equator. Check chart projection, validity, variation, obstacles, airspace and NOTAM/AIP.

## 2. Wind triangle, course/heading, and time

Distinguish **IAS/CAS/TAS/GS**: TAS is through the airmass; GS is over ground. Wind direction is reported **from**; reverse it to draw the vector. To maintain a desired track, apply wind correction toward the wind:

| Speed | What it describes |
|---|---|
| IAS | Indicated by the airspeed indicator |
| CAS | IAS corrected for instrument and position error |
| TAS | Speed through the air |
| GS | Speed over the ground; use for leg time and ETA |

1. Plot true course (TC) and wind vector.
2. Resolve head/tailwind and crosswind (or use an E6B).
3. Find wind-correction angle (WCA); `true heading = TC + WCA`.
4. Convert reference to magnetic/compass as needed and calculate GS.

Headwind reduces GS; tailwind increases it. `time (min) = 60 × distance (NM) / GS (kt)`; use GS for ETA, not TAS. Recompute from actual progress at checkpoints. For small errors, **1-in-60**: track error in degrees ≈ `60 × cross-track error / distance flown`; to regain the destination, add a closing angle based on distance remaining. Use only for small-angle approximations.

## 3. North references and radio bearings

True north is geographic; magnetic north follows Earth's field; compass north is the installed compass indication. **Variation** (charted, location-dependent) converts true↔magnetic; **deviation** (aircraft/equipment) is read from the compass card. Apply each correction once, with sign and convention stated, and normalize to 000°–359°. In the Northern Hemisphere, turning error uses UNOS (undershoot north, overshoot south); acceleration error on east/west headings uses ANDS.

| Bearing | Magnetic | True |
|---|---|---|
| To station | QDM | QUJ |
| From station | QDR | QTE |

Reciprocal bearings differ by 180°. RBI shows relative bearing from the aircraft nose; QDM is not the same as heading when wind/drift exists.

**Worked course, heading, bearing and Q-code conversions:** see [navigation conversions](14-q-codes-and-variation.md).

| Aid | What it provides | Important limitation |
|---|---|---|
| NDB/ADF | Relative bearing to LF/MF beacon | Night and shoreline effects can disturb bearings |
| VOR | VHF radial: magnetic bearing **from** station | CDI deflection is angular, not a fixed distance |
| DME | Slant-range distance to station | Difference from ground distance is greatest near overhead |
| VDF | Ground station derives bearing from VHF transmission | QDR locates aircraft from the station |

For NDB/ADF, relative bearing (RB) is measured clockwise from the nose: `QDM = magnetic heading + RB`, normalized to 360°. Heading and inbound ground track still differ in wind. For VOR, set OBS, identify the station, and interpret CDI and TO/FROM; two radials can define a fix. Check tuning, identification, mode and signal quality before relying on indications.

## 4. Radar, GNSS, and integrated planning

| System | Provides / limitation |
|---|---|
| Primary radar | Detects reflected energy |
| SSR | Interrogates transponder for coded replies; know assigned squawk/ident and emergency codes |
| GNSS | Satellite position/time; depends on setup, database awareness and signal integrity |

Cross-check chart, terrain and time; a display neither grants clearance nor replaces lookout.

For each route leg, calculate TC, WCA, true/magnetic heading, wind, GS, distance, ETE/ETA and fuel. Check terrain/minimum safe altitude, controlled/notified airspace, frequencies, alternates and NOTAMs. A **PET/ETP** is the point where the time to continue to the destination equals the time to return/divert under the stated wind/performance assumptions. For a simple out-and-back with constant TAS and opposite wind, distance from departure is `total route distance × (GS_out / (GS_out + GS_home))`; confirm which direction each groundspeed represents before substituting. Radius of turn and holding questions depend on speed, bank, wind and the specified pattern—do not mix a ground track with an air heading. In a standard-rate turn, 3°/s gives 360° in two minutes; required bank increases with TAS.

**Course notes:** [Navigation lesson notes](../lesson-notes/90_Navigation.md) · [Navigation question bank](../90_Navigation.md)

**Primary references:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) · [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) · [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors). Use current official charts/AIP and a current approved flight computer for operational planning.
