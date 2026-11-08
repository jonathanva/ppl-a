# Units and conversions

[← Back to index](README.md)

## Distance, speed, and time

| Quantity | Conversion |
|---|---|
| 1 nautical mile (NM) | **1,852 m** = 1.852 km = 6,076.1 ft |
| 1 statute mile | 1.609 km = 0.869 NM |
| 1 knot (kt) | 1 NM/h = 1.852 km/h = 0.5144 m/s |
| 1 km/h | 0.540 kt |
| 1 ft | 0.3048 m |
| 1 m | 3.281 ft |
| 1 degree of latitude | 60 NM (approximately) |
| 1 minute of latitude | 1 NM (approximately) |

**Time:** `time (hours) = distance (NM) / groundspeed (kt)`. Convert the decimal fraction of an hour to minutes by multiplying by 60: 0.1 h = 6 min; 0.25 h = 15 min; 0.5 h = 30 min.

## Mass, volume, and temperature

| Quantity | Conversion |
|---|---|
| 1 kg | 2.205 lb |
| 1 lb | 0.4536 kg |
| 1 litre | 0.2642 US gal = 0.2200 Imperial gal |
| 1 US gal | 3.785 L |
| 1 Imperial gal | 4.546 L |
| Celsius to Fahrenheit | `°F = (°C × 9/5) + 32` |
| Fahrenheit to Celsius | `°C = (°F − 32) × 5/9` |

**Fuel volume is not fuel mass.** Use the fuel grade's specified density or the aircraft's approved planning data when converting litres/gallons to kilograms/pounds. Do not treat US and Imperial gallons as interchangeable.

## Pressure and altitude

| Quantity | Conversion / memory aid |
|---|---|
| 1 inHg | 33.864 hPa |
| 1 hPa | 0.02953 inHg |
| 1 hPa pressure change | about 27 ft indicated-altitude change near sea level (rule of thumb only) |
| Standard pressure | 1013.25 hPa = 29.92 inHg |

Pressure-altitude correction is approximate and depends on the altimeter and atmospheric conditions. Follow the relevant altimeter-setting procedure; don't use the 27 ft rule as a terrain-clearance method.

## Fast checks

- Write the **unit beside every value** before calculating. Cancel units as you would algebra.
- A groundspeed in knots gives distance in NM when time is in hours.
- Convert chart distance, fuel quantity, and aircraft mass to the units used by the POH/AFM before reading performance data.
- For a rough mental conversion, `kt × 2 ≈ km/h` (slightly high); use 1.852 for accurate calculations.
- Check whether a chart uses feet or metres, and whether a fuel figure is per hour, per engine, or total.

**Sources:** [NIST Guide to the SI, Appendix B (conversion factors)](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors); [NIST Appendix B.8](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8); [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) (current aircraft-specific units and procedures: POH/AFM).
