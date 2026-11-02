// scratch/test_satellite_orbital_recon.js
// Verification for Satellite Outpost Orbital Radar Mode (Level-2 Local Exploration)

const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING SATELLITE OUTPOST ORBITAL RADAR MODE (LEVEL-2 LOCAL RECON) ===');

// 1. Verify Satellite Service Module
const satService = require('../data/satellite_service.js');
assert(satService, 'satellite_service module must load');
assert(typeof satService.getSatellitesForOutpost === 'function', 'getSatellitesForOutpost function must exist');

// Test Sringeri Constellation
const sringeriOutpost = {
    id: "sringeri",
    name: "Sringeri (Sharada Peetham)",
    lat: 13.4187,
    lon: 75.2570,
    cat: "heritage",
    elev: "672m Tunga Valley"
};
const sringeriSats = satService.getSatellitesForOutpost(sringeriOutpost);
assert(Array.isArray(sringeriSats), 'Sringeri satellites must be an array');
assert(sringeriSats.length >= 6, `Expected at least 6 satellites for Sringeri, got ${sringeriSats.length}`);

// Verify key Sringeri local satellites
const sirimane = sringeriSats.find(s => s.name.toLowerCase().includes('sirimane'));
assert(sirimane, 'Sirimane Falls satellite must exist for Sringeri');
assert(sirimane.dist > 0 && sirimane.dist < 25, 'Sirimane distance must be short-range (< 25km)');
assert(sirimane.driveTime, 'Sirimane driveTime must exist');
assert(sirimane.elev, 'Sirimane micro-elevation must exist');
assert(sirimane.tip, 'Sirimane local travel tip must exist');

const kigga = sringeriSats.find(s => s.name.toLowerCase().includes('kigga'));
assert(kigga, 'Kigga satellite must exist for Sringeri');

const kudremukh = sringeriSats.find(s => s.name.toLowerCase().includes('kudremukh'));
assert(kudremukh, 'Kudremukh Base satellite must exist for Sringeri');

console.log(`[PASS] Sringeri satellite constellation verified (${sringeriSats.length} hyper-local attractions)`);

// Test Dynamic Fallback Generator for Arbitrary Outpost
const genericHill = {
    id: "custom_misty_peak",
    name: "Custom Misty Peak",
    lat: 12.50,
    lon: 76.50,
    cat: "hill",
    elev: "1400m"
};
const genericSats = satService.getSatellitesForOutpost(genericHill);
assert(genericSats.length >= 5, 'Dynamic satellite generator must provide at least 5 local satellites');
genericSats.forEach(s => {
    assert(s.name && s.dist && s.driveTime && s.icon && s.elev && s.lat && s.lon, 'Every synthesized satellite must have full telemetry properties');
});
console.log(`[PASS] Universal dynamic satellite generator verified (${genericSats.length} synthesized satellites)`);

// 2. Verify UI Components in index.html
const html = fs.readFileSync('index.html', 'utf8');

// Action Buttons in Telemetry Card
assert(html.includes('id="card-orbit-btn"'), 'card-orbit-btn must exist in index.html');
assert(html.includes('Launch Outpost Orbit / Local Recon'), 'Orbit launch button text must be present');
assert(html.includes('id="card-return-macro-btn"'), 'card-return-macro-btn must exist in index.html');
assert(html.includes('Return to Master Grid'), 'Return to Master Grid text must be present');
console.log('[PASS] Telemetry sidebar orbit action buttons verified');

// Top HUD Orbit Banner
assert(html.includes('id="hud-orbit-pill"'), 'hud-orbit-pill must exist in top status strip');
assert(html.includes('id="hud-orbit-title"'), 'hud-orbit-title must exist');
assert(html.includes('orbit-hud-return-btn'), 'orbit-hud-return-btn must exist');
console.log('[PASS] Top Command HUD orbit indicator & return pill verified');

// SVG Orbit Layer & Gradients
assert(html.includes('id="orbit-layer"'), 'orbit-layer SVG group must exist');
assert(html.includes('id="orbit-sun-gradient"'), 'orbit-sun-gradient radial gradient must exist');
assert(html.includes('orbit-radar-sweep'), 'orbit-radar-sweep scanner must exist');
assert(html.includes('orbit-ring'), 'orbit-ring class must exist for micro-range circles');
assert(html.includes('orbit-spoke'), 'orbit-spoke class must exist');
assert(html.includes('satellite-node'), 'satellite-node class must exist');
console.log('[PASS] SVG orbit layer, scanning radar sweep, and constellation elements verified');

// Script Reference
assert(html.includes('src="data/satellite_service.js"'), 'data/satellite_service.js script tag must be included in index.html');
console.log('[PASS] Script inclusion verified');

// 3. Verify JavaScript State & Functions in index.html
assert(html.includes('let radarMode ='), 'radarMode state variable must exist');
assert(html.includes('let orbitOutpost ='), 'orbitOutpost state variable must exist');
assert(html.includes('let lockedSatellite ='), 'lockedSatellite state variable must exist');
assert(html.includes('function launchOutpostOrbit(outpost)'), 'launchOutpostOrbit function must exist');
assert(html.includes('function exitOutpostOrbit()'), 'exitOutpostOrbit function must exist');
assert(html.includes('function renderSatelliteOrbit(outpost)'), 'renderSatelliteOrbit function must exist');
assert(html.includes('function renderOrbitTelemetry(outpost, lockedSat)'), 'renderOrbitTelemetry function must exist');
assert(html.includes('function lockSatellite(sat)'), 'lockSatellite function must exist');
assert(html.includes('function highlightSatellite(id'), 'highlightSatellite function must exist');
assert(html.includes('function unhighlightSatellite(id)'), 'unhighlightSatellite function must exist');
console.log('[PASS] Level-2 Orbit Reconnaissance functions verified');

// 4. Verify Multi-Leg Google Maps URL Construction for Satellite Excursions
const gmapsOrbitMatch = html.includes('https://www.google.com/maps/dir/?api=1&origin=') &&
                        html.includes('&destination=') &&
                        html.includes('&waypoints=') &&
                        html.includes('Open Expedition + Side-Trip in Google Maps');
assert(gmapsOrbitMatch, 'Multi-leg Google Maps routing incorporating satellite side-trips must be supported');
console.log('[PASS] Multi-leg expedition + local satellite Google Maps route generation verified');

// 5. Verify Escape Key Integration
assert(html.includes("if (radarMode === 'orbit')"), 'Escape key handler must check radarMode === orbit to return to master grid');
console.log('[PASS] Hotkey ESC integration for orbit mode exit verified');

// 6. Verify Read-Only File Integrity
const refFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(refFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log(`[PASS] Read-only integrity: ${refFile} is strictly untouched (${refStats.size} bytes)`);

console.log('\nALL SATELLITE OUTPOST ORBITAL RADAR MODE CHECKS PASSED!\n');
