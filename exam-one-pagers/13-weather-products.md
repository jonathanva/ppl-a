# Weather products and briefing

[← Back to index](README.md)

## Build a decision-focused picture

1. **Start broad:** synoptic chart, fronts, pressure pattern, significant-weather forecast, and upper winds.
2. **Check the route and time:** low-level forecast/area forecast, aerodrome forecasts and observations, warnings, and forecast change groups.
3. **Check hazards:** thunderstorms/CB, icing and freezing level, turbulence, mountain waves, fog/low cloud, wind shear, and strong surface/crosswind conditions.
4. **Compare forecast with observations:** look for trends, deterioration, discrepancies, and alternate/escape options. Weather products are time- and location-specific; refresh them before departure.

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

- Wind direction is **from** magnetic/true north as specified by the product; verify the convention in the reporting system. `VRB` means variable; `G` introduces gusts.
- Visibility is reported in the units/format prescribed for the state. `CAVOK` is a defined coded condition, not simply “perfect weather”; check the applicable definition.
- Cloud amount codes: `FEW`, `SCT`, `BKN`, `OVC`; cloud base is normally given in hundreds of feet above aerodrome level. `CB`/`TCU` identify convective cloud.
- Temperature/dew point close together means high relative humidity and a greater chance of saturation, but does not by itself prove fog or cloud.
- TAF change groups such as `BECMG`, `TEMPO`, and `PROB` modify the forecast in defined ways. Read their time windows and probability; do not treat them as casual prose.

**Go/no-go is about the whole route and return**, including terrain, airspace, daylight, aircraft limits, pilot currency, alternates, and a margin for forecast error. Legal VMC minima are not a guarantee of safe VFR weather.

**Sources:** [UK Met Office aviation meteorology resources](https://www.metoffice.gov.uk/services/transport/aviation/regulated/training-resources-for-aviation); [Met Office METARs and TAFs guide](https://www.metoffice.gov.uk/services/transport/aviation/regulated/training-resources-for-aviation/metars-and-tafs); [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew); [EASA Easy Access Rules for SERA](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-standardised-european-rules-air). Use the meteorological service and terminology applicable to the state and route.
