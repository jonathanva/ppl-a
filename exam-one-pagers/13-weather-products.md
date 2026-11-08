# Weather products and briefing

[← Back to index](README.md)

## Build a decision-focused picture

```text
BIG PICTURE → ROUTE / TIME → HAZARDS → OBSERVATION vs FORECAST → OPTIONS
```

| Step | Check |
|---|---|
| Big picture | Synoptic chart, fronts, pressure, significant weather and upper winds |
| Route / time | Area forecast, aerodrome forecasts/observations, warnings and change groups |
| Hazards | CB, icing/freezing level, turbulence, waves, low cloud/fog, shear and crosswind |
| Compare / decide | Trends, discrepancies, deterioration, alternates and escape options |

Products are time- and location-specific; refresh the briefing before departure.

## Common coded products

| Product | What it tells you | What it does not do |
|---|---|---|
| METAR | Observed aerodrome wind, visibility, present weather, cloud, temperature/dew point, pressure and trend where issued | It is not a route forecast or guarantee of conditions between stations |
| TAF | Forecast aerodrome conditions and expected changes during its validity | It is not a precise point forecast for the whole route |
| SIGMET | Significant en-route hazardous phenomena over a defined area/time | It is not a complete weather briefing |
| GAMET / low-level area forecast | Regional low-level conditions and hazards, where issued | It may not resolve local terrain effects |
| AIRMET / national warning | Additional hazard information where provided by the state | Naming/coverage and availability vary |
| ATIS / VOLMET | Broadcast aerodrome or en-route weather/operational information | It does not replace a full briefing or current NOTAM/AIP check |

## METAR/TAF decoding cues

**Illustrative METAR:** `METAR EBBR 121450Z 24012KT 9999 BKN020 18/12 Q1015`

| Group | Interpretation |
|---|---|
| `EBBR 121450Z` | Station; day 12 at 14:50 UTC |
| `24012KT` | Wind from 240° true at 12 kt |
| `9999` | Visibility 10 km or more |
| `BKN020` | Broken cloud, base 2,000 ft above aerodrome |
| `18/12 Q1015` | Temperature 18°C, dew point 12°C, QNH 1015 hPa |

This simplified example is not current weather. Reporting conventions and units vary by state.

| Cue | Read it as |
|---|---|
| Wind | **From** the reported direction; check true/magnetic convention; `VRB` variable, `G` gust |
| Visibility / `CAVOK` | State-prescribed units; `CAVOK` is a defined coded condition, not simply “perfect” |
| `FEW` / `SCT` / `BKN` / `OVC` | Cloud amount; base normally in hundreds of feet above aerodrome |
| `CB` / `TCU` | Convective cloud |
| Temperature / dew point close | Nearer saturation; does not prove fog or cloud |
| `BECMG` / `TEMPO` / `PROB` | TAF change groups; read time window and probability |

**Go/no-go is about the whole route and return**, including terrain, airspace, daylight, aircraft limits, pilot currency, alternates, and a margin for forecast error. Legal VMC minima are not a guarantee of safe VFR weather.

**Sources:** [UK Met Office aviation meteorology resources](https://www.metoffice.gov.uk/services/transport/aviation/regulated/training-resources-for-aviation); [Met Office METARs and TAFs guide](https://www.metoffice.gov.uk/services/transport/aviation/regulated/training-resources-for-aviation/metars-and-tafs); [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew); [EASA Easy Access Rules for SERA](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-standardised-european-rules-air). Use the meteorological service and terminology applicable to the state and route.
