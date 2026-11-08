# Principles of Flight — course-topic summary

**Course scope:** airflow and aerofoil geometry; lift/drag; stability and controls; straight flight, climb/descent and turns; stall/spin; and propeller principles.

## 1. Aerofoil, airflow, and four forces

The four forces are **lift, weight, thrust and drag**. In steady level flight lift balances weight and thrust balances drag. The chord joins leading and trailing edges; the mean camber line describes aerofoil curvature. **Angle of attack (AoA)** is between chord and relative airflow; it is not pitch attitude or installed wing incidence. Relative airflow is opposite the flight path.

An aerofoil's pressure distribution and momentum change produce lift. Bernoulli's speed/pressure relationship is useful, but a wing is not simply a Venturi tube and equal-transit-time reasoning is false. At the leading-edge stagnation point, local flow speed is near zero; the boundary layer develops along the surface. Separation grows as AoA approaches the critical value.

The basic equations are:

`L = ½ ρ V² S C_L`  `D = ½ ρ V² S C_D`

Dynamic pressure `q = ½ρV²`. Since speed is squared, doubling speed multiplies dynamic pressure by four if other terms stay fixed. Lift coefficient depends on aerofoil, configuration and AoA. Increasing AoA initially raises lift; beyond the **critical AoA**, separation causes a sharp lift loss: a stall. A stall can occur at any attitude or airspeed if critical AoA is exceeded.

## 2. Drag, high-lift devices, and performance

**Induced drag** comes from producing lift and tip vortices; it is high at low speed/high lift and reduced by greater aspect ratio/ground effect. **Parasite drag** includes form, skin-friction and interference drag and rises strongly with speed. Total drag combines induced and parasite drag and has a minimum between them. Maximum `L/D` corresponds to best glide angle in still air (finesse); read the axes before interpreting a lift/drag polar.

Flaps increase camber (Fowler flaps also increase wing area), raising lift and drag; they allow slower flight but change trim and reduce climb performance when extended. Slots/slats re-energize upper-surface flow and delay separation, increasing usable AoA. Their effects are not interchangeable: flap mainly changes camber/lift/drag; slat/slot delays stall.

Contamination changes the aerofoil and may cause earlier separation. Weight changes the lift required and stall speed, not the critical AoA itself. For the same configuration, accelerated stall speed rises approximately as `Vs × √load factor`.

## 3. Controls, stability, and balance

| Axis | Motion | Primary control |
|---|---|---|
| Longitudinal (nose-tail) | Roll | Ailerons |
| Lateral (wingtip-wingtip) | Pitch | Elevator |
| Vertical | Yaw | Rudder |

Static stability is the initial tendency after disturbance; dynamic stability describes the motion/damping afterward. Tail surfaces, dihedral and other design features contribute to stability. **CG position** is critical: forward CG generally increases longitudinal stability and control force; aft CG reduces stability and may make stall recovery difficult. Keep within the aircraft's loading envelope.

Ailerons create roll but can produce adverse yaw; rudder coordinates the turn. Trim relieves sustained control force; it does not move the CG. Mass balance helps prevent flutter; do not exceed VNE or other limitations. The inclinometer ball indicates slip/skid, not bank angle (“step on the ball”).

## 4. Climb, descent, turns, stalls, and propellers

In a climb, thrust must overcome drag and the rearward component of weight along the flight path. **Vx** is best angle (height per horizontal distance); **Vy** is best rate (height per time). During descent, gravity contributes along the path; use the approved pitch/power technique.

In a coordinated level turn, `load factor n = 1/cos(bank)`. The horizontal lift component turns the aircraft; the vertical component must still support weight. More bank raises load and stall speed. Rate-one is 3°/s, but required bank depends on TAS. An uncoordinated stall can develop into autorotation.

A **spin** is a stalled, autorotating descent; a **spiral dive** is an unstalled steep descending turn with speed/load increasing. Prevent spins by maintaining coordination and avoiding the stall. Recovery is type-specific: use the POH/AFM and instructor, never generic steps as an operational procedure.

A propeller is a rotating aerofoil. Blade twist compensates for greater rotational speed at the tip. Fixed-pitch props are optimized around a design condition; a constant-speed unit changes blade pitch to maintain selected RPM—it does not hold aircraft speed constant. Torque, slipstream, gyroscopic effects and asymmetric blade thrust can create yaw/roll tendencies; coordinate with rudder.

**Course notes:** [Principles of Flight lesson notes](../lesson-notes/51_Principles_of_Flight.md) · [Principles of Flight question bank](../51_Principles_of_Flight_(Aeroplane).md)

**Primary references:** [EASA Easy Access Rules for Aircrew](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew) · [FAA Pilot's Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak)
