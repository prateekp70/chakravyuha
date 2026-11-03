# Chakravyuha 🛡️
> Tactical GIS Radar & Offline Road Trip Intelligence Engine for Peninsular India

**Chakravyuha** is an aviation-grade tactical mission control application designed to plan, calculate, and visualize weekend getaways and road expeditions across South India. Built as an offline-first web HUD, it replaces cluttered maps with a concentric radar scope, true road-calibrated distance engines, and multi-stop route planning.

---

## ⚡ Core Capabilities

* **Tactical Radar Scope (800 km Range):** Visualizes regional geography using an equidistant azimuthal projection centered on major metro hubs with concentric distance rings (100–700 km).
* **True Road Trip Distance Engine:** Calculates actual highway driving distances, forward azimuth bearings, compass quadrants, and absolute-duration drive times (rather than straight-line crow-fly calculations).
* **Multi-Origin Hub Switching:** Seamlessly shift mission command between **Bengaluru (BLR)**, **Hyderabad (HYD)**, and **Chennai (MAA)**.
* **Level-2 Satellite Orbital Recon:** Launch hyper-local outpost constellations around locked destinations, displaying 15 km, 30 km, and 45 km local range rings and local terrain nodes.
* **Multi-Select Distance Slicing:** Dynamically filter and illuminate outposts across specific concentric distance bands.
* **Multi-Stop Google Maps Integration:** Instantly generate universal directions URLs incorporating selected intermediate highway pit stops and final destinations.
* **Spacious Telemetry Sidebar Ledger:** Clean, high-contrast dark aviation UI cards featuring scouting briefs, seasonal windows, and elevation data with bidirectional map cross-highlighting.

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
* `data/satellite_service.js` — Level-2 orbital reconnaissance generator.
* `scratch/` — Headless verification and test suites.
