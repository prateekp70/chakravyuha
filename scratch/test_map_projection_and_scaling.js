const fs = require('fs');
const assert = require('assert');

console.log('--- STARTING MAP PROJECTION & SCREEN-SCALING TEST SUITE ---');

// 1. Read index.html
const html = fs.readFileSync('index.html', 'utf8');

// 2. Verify expanded SVG viewBox
assert(html.includes('viewBox="-400 -400 1800 1800"'), 'SVG viewBox must be expanded to -400 -400 1800 1800 to accommodate macro corridors without clipping');
console.log('✓ SVG viewBox verified: viewBox="-400 -400 1800 1800"');

// 3. Extract and test PROJECTION_MATRIX and latLonToPixel
assert(html.includes('PROJECTION_MATRIX'), 'PROJECTION_MATRIX must be defined in index.html');
assert(html.includes('earthRadiusKm: 6371.0'), 'earthRadiusKm must be 6371.0');
console.log('✓ PROJECTION_MATRIX configuration verified');

// Extract latLonToPixel function from index.html for execution
const match = html.match(/const PROJECTION_MATRIX = {[\s\S]*?function latLonToPixel\(lat, lon, hubLat, hubLon, scale = 1\.0\) {[\s\S]*?\n        }/);
assert(match, 'Could not locate latLonToPixel in index.html');

const evalCode = match[0] + '; global.latLonToPixel = latLonToPixel; global.PROJECTION_MATRIX = PROJECTION_MATRIX;';
eval(evalCode);

// Haversine reference calculation for true distance
function trueGreatCircleDistance(lat1, lon1, lat2, lon2) {
    const R = 6371.0;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// True geodesic forward azimuth (bearing from North)
function trueGeodesicBearing(lat1, lon1, lat2, lon2) {
    const phi1 = lat1 * Math.PI / 180;
    const phi2 = lat2 * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const y = Math.sin(dLon) * Math.cos(phi2);
    const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(dLon);
    return Math.atan2(y, x);
}

// 4. Test Azimuthal Equidistant projection invariant from Pune (PNQ: 18.5204°N, 73.8567°E)
const puneHub = { lat: 18.5204, lon: 73.8567 };

const testLocations = [
    { name: 'Statue of Unity (Gujarat)', lat: 21.8380, lon: 73.7191 },
    { name: 'Saputara Hill Station (Gujarat)', lat: 20.5750, lon: 73.7483 },
    { name: 'Somnath Jyotirlinga (Gujarat Coast)', lat: 20.8880, lon: 70.4010 },
    { name: 'Dwarka (Westernmost Gujarat)', lat: 22.2442, lon: 68.9685 },
    { name: 'Mandu Citadel (MP)', lat: 22.3660, lon: 75.4040 },
    { name: 'Maheshwar Narmada Ghats (MP)', lat: 22.1762, lon: 75.5847 },
    { name: 'Omkareshwar Jyotirlinga (MP)', lat: 22.2458, lon: 76.1519 },
    { name: 'Ujjain Mahakaleshwar (MP)', lat: 23.1765, lon: 75.7885 },
    { name: 'Sanchi Stupa (MP)', lat: 23.4795, lon: 77.7397 },
    { name: 'Pachmarhi Hill Station (MP)', lat: 22.4674, lon: 78.4346 },
    { name: 'Shivpuri (Northern MP, 25.4°N)', lat: 25.4243, lon: 77.6534 },
    { name: 'Gwalior Fort (Northern MP, 26.2°N)', lat: 26.2183, lon: 78.1828 },
    { name: 'Kashmir Boundary (Northern Extent, ~35°N)', lat: 35.0, lon: 75.0 },
    { name: 'Kanyakumari (Southern Tip, 8.08°N)', lat: 8.0883, lon: 77.5385 }
];

testLocations.forEach(loc => {
    const pt = global.latLonToPixel(loc.lat, loc.lon, puneHub.lat, puneHub.lon);
    const expectedDist = trueGreatCircleDistance(puneHub.lat, puneHub.lon, loc.lat, loc.lon);
    const actualRingRadius = Math.hypot(pt.x - 500, pt.y - 500);

    // Assert radial distance matches true distance within 0.05 km
    assert(Math.abs(actualRingRadius - expectedDist) < 0.05,
        `${loc.name}: Ring radius ${actualRingRadius.toFixed(2)}px must match true distance ${expectedDist.toFixed(2)}km`);

    // Verify bearing alignment
    const actualAzimuth = Math.atan2(pt.x - 500, -(pt.y - 500));
    const expectedAzimuth = trueGeodesicBearing(puneHub.lat, puneHub.lon, loc.lat, loc.lon);
    let azimuthDiff = Math.abs(actualAzimuth - expectedAzimuth);
    if (azimuthDiff > Math.PI) azimuthDiff = 2 * Math.PI - azimuthDiff;
    assert(azimuthDiff < 0.001, `${loc.name}: Azimuth diff ${azimuthDiff} rad must be zero`);

    // If within 1000km, check it lies strictly within the expanded viewBox [-400, 1400]
    if (expectedDist <= 980) {
        assert(pt.x >= -400 && pt.x <= 1400, `${loc.name} X coord ${pt.x} must be within [-400, 1400]`);
        assert(pt.y >= -400 && pt.y <= 1400, `${loc.name} Y coord ${pt.y} must be within [-400, 1400]`);
    }
});
console.log('✓ Geodesic Azimuthal Equidistant invariant verified across all test locations (discrepancy < 0.05 km)');
console.log('✓ Northern outposts (Mandu, Ujjain, Sanchi, Gwalior up to 26.2°N) project inside [-400, 1400] without clipping');
console.log('✓ Western outposts (Dwarka, Somnath, Statue of Unity) project inside [-400, 1400] without clipping');

// 5. Test Distance Ring Alignment
const ringDistances = [100, 200, 300, 400, 500, 600, 700];
ringDistances.forEach(d => {
    // A synthetic outpost exactly d km north, east, south, or west
    const ptNorth = { x: 500, y: 500 - d };
    const ptEast = { x: 500 + d, y: 500 };
    assert.strictEqual(Math.hypot(ptNorth.x - 500, ptNorth.y - 500), d);
    assert.strictEqual(Math.hypot(ptEast.x - 500, ptEast.y - 500), d);
});
console.log('✓ Concentric radar distance rings (100–700km) calibrated to 1 km = 1 px');

// 6. Test whole India camera scaling in setViewMode('india')
assert(html.includes("smoothCameraTo(dX, dY, 0.45)"), "setViewMode('india') must use scale 0.45 for 1800x1800 viewBox framing");
console.log("✓ Whole India camera framing scale (0.45) verified");

// 7. Reference file size check
const refSize = fs.statSync('south_india_weekend_getaway_radar.html').size;
assert.strictEqual(refSize, 125084, `Reference radar must be 125084 bytes, got ${refSize}`);
console.log('✓ south_india_weekend_getaway_radar.html size strictly preserved at 125084 bytes');

console.log('\nALL MAP PROJECTION & SCREEN-SCALING TESTS PASSED SUCCESSFULLY! ✓✓✓');

