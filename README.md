# Chakravyuha 🛡️
> Tactical GIS Radar & Offline Road Trip Intelligence Engine for Peninsular India

**Chakravyuha** is an aviation-grade tactical mission control application designed to plan, calculate, and visualize weekend getaways and road expeditions across South India. Built as an offline-first web HUD, it replaces cluttered maps with a concentric radar scope, true road-calibrated distance engines, and seamless highway corridor navigation.

---

## ⚡ Core Capabilities

* **Tactical Radar Scope (800 km Range):** Visualizes regional geography using an equidistant azimuthal projection centered on major metro hubs with concentric distance rings (100–700 km).
* **True Road Trip Distance Engine:** Calculates actual highway driving distances, forward azimuth bearings, compass quadrants, and absolute-duration drive times (rather than straight-line crow-fly calculations).
* **Multi-Origin Hub Switching:** Seamlessly shift mission command between **Bengaluru (BLR)**, **Hyderabad (HYD)**, and **Chennai (MAA)**.
* **Multi-Select Distance Slicing:** Dynamically filter and illuminate outposts across specific concentric distance bands with cumulative range filtering and dedicated reset controls.
* **Direct Google Maps Route Integration:** Instantly generate universal directions URLs from active origin hubs directly to locked expedition destinations.
* **Tactical Theme Engine:** Switch between the default rich aviation neon HUD and a razor-thin, deep matte charcoal "Instrument / Minimal" palette with phosphor green telemetry readouts.
* **Spacious Telemetry Sidebar Ledger:** Clean, high-contrast dark aviation UI cards featuring scouting briefs, tactical dispatch vibes, seasonal windows, and terrain elevation profiles.

> [!NOTE]
> Advanced Level-2 Satellite Orbital Reconnaissance and intermediate Corridor Pit Stop Checkpoint Ledgers are maintained in the dedicated feature branch: `feature/orbital-recon-and-checkpoints`.

---

## 🚀 Quick Start & Offline Execution

Chakravyuha is entirely client-side and requires **zero external raster map APIs or network dependencies**.

1. Clone or download the repository:
   ```bash
   git clone https://github.com/prateekp70/roadtripapp.git
   cd roadtripapp
   ```

2. Launch the application locally by opening `index.html` directly in any modern web browser, or serve it via a local static server:
   ```bash
   # Using Node.js npx
   npx serve .

   # Or using Python
   python -m http.server 8080
   ```

---

## 🛠️ Project Structure

* `index.html` — Core aviation HUD presentation engine and UI layout.
* `data/master_pois.js` — Curated registry of regional outposts, coordinates, and briefs.
* `data/hub_service.js` — Road distance calculation and telemetry engine.
* `data/corridor_routes.js` — Highway waypoint chains and Catmull-Rom spline routing.
* `scratch/` — Headless verification and test suites.
