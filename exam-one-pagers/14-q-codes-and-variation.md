# Navigation conversions: course, heading, bearings and Q-codes

[← Back to index](README.md) · [Navigation calculations](12-vfr-navigation.md)

## 1. Course, heading and north references

| Term | What it describes | Reference |
|---|---|---|
| **Course / track** | Desired route / actual path over the ground | True or magnetic north |
| **Heading** | Direction the aircraft nose points | True, magnetic or compass north |
| **Bearing** | Direction of an object or station from a position | True or magnetic north; relative bearing is from the nose |
| **Variation (VAR)** | Difference between true and magnetic north | Location and date; use chart |
| **Deviation (DEV)** | Error in the aircraft's magnetic compass | Aircraft, compass heading and equipment; use compass card |

**TC** = desired true course; **TH / MH / CH** = true / magnetic / compass heading.

| Signed correction | Positive (+) | Negative (−) |
|---|---|---|
| WCA | Right / clockwise | Left / anticlockwise |
| VAR or DEV | East | West |

```text
Desired TC ── + WCA ──> TH ── − VAR ──> MH ── − DEV ──> CH
Desired TC <── − WCA ── TH <── + VAR ── MH <── + DEV ── CH
```

| Find | Formula using signed values | When used |
|---|---|---|
| Heading from course | `TH = TC + WCA` | Correct the desired ground track for wind |
| Course from heading | `TC = TH − WCA` | Recover the planned track using the same WCA |
| Magnetic from true | `MH = TH − VAR`; `MC = TC − VAR` | Change north reference, not direction |
| True from magnetic | `TH = MH + VAR`; `TC = MC + VAR` | Change north reference, not direction |
| Compass from magnetic | `CH = MH − DEV` | Obtain compass heading to steer |
| Magnetic from compass | `MH = CH + DEV` | Recover magnetic heading from compass |
| Find variation / deviation | `VAR = TH − MH`; `DEV = MH − CH` | Use comparable headings; express the difference as a signed angle |

| Check | Rule |
|---|---|
| Normalize directions | 000°–359°; add/subtract 360° as needed |
| Signed difference across north | Use equivalent −180° to +180°: 003 − 358 = −355 = **+5°E** |
| Variation | Also converts true ↔ magnetic bearings |
| Deviation | Compass indication only; not a charted magnetic course or Q-code bearing |
| Compass card | Use deviation for the heading/equipment; do not reapply correction to a direct “steer” value |
| WCA | Depends on wind and desired track; heading alone cannot determine actual track |

### Worked heading conversions

| Step | East variation, west deviation | West variation, east deviation |
|---|---|---|
| Given TC and WCA | TC 040°T; WCA 7° left (−7°) | TC 350°T; WCA 8° right (+8°) |
| True heading: TC + WCA | 040 − 7 = **033°T** | 350 + 8 = **358°T** |
| Magnetic heading: TH − VAR | 033 − 4°E = **029°M** | 358 − (−5°W) = 363 → **003°M** |
| Compass heading: MH − DEV | 029 − (−2°W) = **031°C** | 003 − 2°E = **001°C** |

```text
Reverse check: 031°C ── + (−2° DEV) ──> 029°M ── + 4° VAR ──> 033°T
               ── − (−7° WCA) ──> 040°T desired course
```

Here **°C means compass**, not degrees Celsius.

## 2. Q-codes: which end of the line, and which north?

| Bearing | Magnetic north | True north | Meaning |
|---|---|---|---|
| **To** the station | **QDM** | **QUJ** | Direction from aircraft towards station |
| **From** the station | **QDR** | **QTE** | Direction from station towards aircraft |

```text
                  FROM station: QDR (M) / QTE (T)
       [STATION] ──────────────────────────────────> [AIRCRAFT]
       [STATION] <────────────────────────────────── [AIRCRAFT]
                    TO station: QDM (M) / QUJ (T)
```

For local flat-chart exercises, TO ↔ FROM = **±180°** with the same north reference. QDR is magnetic FROM, like a VOR radial; QTE is true FROM.

## 3. Q-code conversion map

Take east variation as positive and west as negative:

```text
            + signed VAR
  QDR (M) ───────────────> QTE (T)          FROM station
          <───────────────
            − signed VAR

            + signed VAR
  QDM (M) ───────────────> QUJ (T)          TO station
          <───────────────
            − signed VAR

  QDR ↔ QDM: reciprocal ±180°    QTE ↔ QUJ: reciprocal ±180°
```

| Conversion | East variation | West variation |
|---|---|---|
| Magnetic → true: QDR → QTE, QDM → QUJ | Add | Subtract |
| True → magnetic: QTE → QDR, QUJ → QDM | Subtract | Add |
| Reverse TO ↔ FROM, same reference | Add or subtract 180° | Add or subtract 180° |

Normalize to **000°–359°**; `360°` = `000°`. Variation changes north reference; deviation is not used to convert a magnetic bearing to true.

## 4. Worked bearing conversions

| Given | Steps | Answer |
|---|---|---|
| QDR 022°M, VAR 10°E | Magnetic → true: 022 + 10 | **QTE 032°T** |
| QTE 229°T, VAR 10°W | True → magnetic: 229 + 10 = QDR 239; reciprocal 239 − 180 | **QDR 239°M; QDM 059°M** |
| QDM 138°M, VAR 10°E | Magnetic → true: 138 + 10 = QUJ 148; reciprocal 148 + 180 | **QUJ 148°T; QTE 328°T** |
| QDR 005°M, VAR 10°W | Magnetic → true: 005 − 10 = −5; add 360 | **QTE 355°T** |

```text
MH 095° + relative bearing 355° = 450° → QDM 090°M
QDM 090°M ── +180° ──> QDR 270°M ── +6°E VAR ──> QTE 276°T
```

Relative bearing is clockwise from the nose: **do not apply variation to it**. This bearing relationship works in wind, but does not give the wind-corrected heading or ground track.

```text
CH 031°C ── + (−2° DEV) ──> MH 029°M ── + 045° relative bearing ──> QDM 074°M
QDM 074°M ── +4°E VAR ──> QUJ 078°T
QDM 074°M ── +180° ──> QDR 254°M ── +4°E VAR ──> QTE 258°T
```

These are bearings at that position, not necessarily the heading to steer.

| Relative-bearing conversion | Formula, normalized to 000°–359° |
|---|---|
| Magnetic bearing **to** station | `QDM = MH + relative bearing` |
| Relative bearing to station | `relative bearing = QDM − MH` |
| True bearing **to** station | `QUJ = TH + relative bearing` |
| True bearing **from** station | `QTE = QUJ ± 180°` |

## 5. Exam method

```text
LABEL: TO/FROM + TRUE/MAGNETIC
       ↓
REVERSE DIRECTION: ±180°     CHANGE NORTH REFERENCE: apply VAR
       ↓
NORMALIZE 000°–359° → label Q-code + reference → plot QTE FROM station on true chart
```

Either conversion order works for these local exercises; QDM must be reciprocated and converted before plotting from the station.

> **Scope:** Real-world plotting requires current charted variation, the appropriate station/reference and any chart or navigation-aid conventions. At long distances, meridian convergence and station-specific magnetic references can matter; use the chart/AIP and question assumptions. A bearing to a station is not necessarily the heading to steer in wind.

**Course notes:** [Navigation lesson notes: north references and conversions](../lesson-notes/90_Navigation.md#north-references) · [Q-codes and reciprocity](../lesson-notes/90_Navigation.md#q-codes-and-reciprocity) · [Navigation question bank](../90_Navigation.md)

**References:** [ICAO PANS-ABC, Doc 8400](https://store.icao.int/en/procedures-for-air-navigation-services-pans-icao-abbreviations-and-codes-doc-8400) · [UK CAA CAP 413](https://www.caa.co.uk/data-and-publications/publications/documents/content/cap-413/) · [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak).
