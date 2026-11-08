# Navigation — course-topic summary

[← Back to index](README.md)

**Course scope:** Earth coordinates and chart projections; distance/time/scale; wind triangle and heading; compass and bearings; radio aids; radar/transponder/GNSS; and integrated route, fuel, PET/ETP and holding calculations.

## 1. Earth, coordinates, charts, and scale

Latitude is north/south of the equator; longitude east/west of Greenwich. One minute of latitude is approximately 1 NM; one degree is 60 NM. Longitude distance contracts with latitude (`60 × cos(latitude)` NM per degree). Add latitude differences across the equator; handle N/S and E/W explicitly. Earth rotates 15° per hour: 1° longitude corresponds to 4 minutes of solar-time difference; aviation planning uses UTC.

A **great circle** is the shortest spherical route; a **rhumb line** crosses meridians at a constant angle. Mercator has straight meridians/parallels and straight rhumb lines but scale increases with latitude. Lambert conformal conic is suited to mid-latitude charts; a straight drawn line is not automatically a great circle. Read chart title, projection, scale, units, variation, legend, validity and airspace vertical limits.

Scale `1:n`: convert map and real distances to the same units, then divide. For short coordinate problems, latitude distance is latitude difference in minutes (1′ ≈ 1 NM); longitude distance is longitude difference in minutes × cos(mean latitude). Combine north/south and east/west components as a right triangle. A chart feature is useful only when matched to coordinates, elevation/obstacles, symbology and current NOTAM/AIP information.

## 2. Wind triangle, course/heading, and time

Distinguish **IAS/CAS/TAS/GS**: TAS is through the airmass; GS is over ground. Wind direction is reported **from**; reverse it to draw the vector. To maintain a desired track, apply wind correction toward the wind:

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

| Aid | What it provides | Important limitation |
|---|---|---|
| NDB/ADF | Relative bearing to LF/MF beacon | Night and shoreline effects can disturb bearings |
| VOR | VHF radial: magnetic bearing **from** station | CDI deflection is angular, not a fixed distance |
| DME | Slant-range distance to station | Difference from ground distance is greatest near overhead |
| VDF | Ground station derives bearing from VHF transmission | QDR locates aircraft from the station |

For NDB/ADF, relative bearing (RB) is measured clockwise from the nose: `QDM = magnetic heading + RB`, normalized to 360°. Heading and inbound ground track still differ in wind. For VOR, set OBS, identify the station, and interpret CDI and TO/FROM; two radials can define a fix. Check tuning, identification, mode and signal quality before relying on indications.

## 4. Radar, GNSS, and integrated planning

Primary radar detects reflected energy; SSR interrogates a transponder for coded replies. Know the purpose of assigned squawk/ident and emergency codes. GNSS provides position/time from satellites but depends on correct setup, database/chart awareness and signal integrity; cross-check with chart, terrain, timing and other cues. A display does not grant airspace clearance or replace lookout.

For each route leg, calculate TC, WCA, true/magnetic heading, wind, GS, distance, ETE/ETA and fuel. Check terrain/minimum safe altitude, controlled/notified airspace, frequencies, alternates and NOTAMs. A **PET/ETP** is the point where the time to continue to the destination equals the time to return/divert under the stated wind/performance assumptions. For a simple out-and-back with constant TAS and opposite wind, distance from departure is `total route distance × (GS_out / (GS_out + GS_home))`; confirm which direction each groundspeed represents before substituting. Radius of turn and holding questions depend on speed, bank, wind and the specified pattern—do not mix a ground track with an air heading. In a standard-rate turn, 3°/s gives 360° in two minutes; required bank increases with TAS.

**Course notes:** [Navigation lesson notes](../lesson-notes/90_Navigation.md) · [Navigation question bank](../90_Navigation.md)

**Primary references:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) · [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) · [NIST conversion factors](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors). Use current official charts/AIP and a current approved flight computer for operational planning.
