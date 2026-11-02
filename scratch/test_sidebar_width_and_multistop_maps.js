// scratch/test_sidebar_width_and_multistop_maps.js
// Verification for:
// 1. Enlarge Sidebar Card Width & Footprint
// 2. Smoothly Scrollable Container with Custom Dark Aviation Scrollbars
// 3. Multi-Stop Google Maps URL Integration with Intermediate Waypoints

const fs = require('fs');
const assert = require('assert');
const path = require('path');

console.log('=== VERIFYING EXPANDED HUD SIDEBAR & MULTI-STOP MAPS URL ===');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify Enlarge Sidebar Card Width & Footprint
const cardCssMatch = html.match(/#telemetry-card\s*\{([\s\S]*?)\}/);
assert(cardCssMatch, '#telemetry-card CSS block must exist');
const cardCss = cardCssMatch[1];

assert(cardCss.includes('width: 480px'), 'Sidebar card width must be enlarged to 480px');
assert(cardCss.includes('min-width: 430px'), 'Sidebar card must maintain min-width 430px for responsive baseline');
assert(cardCss.includes('padding: 18px 20px'), 'Sidebar card must have spacious padding');
console.log('[PASS] Expanded sidebar card width (480px) and spacious footprint verified');

// 2. Verify Smoothly Scrollable Container with Custom Dark Aviation Scrollbars
assert(cardCss.includes('overflow-y: auto'), '#telemetry-card must have overflow-y: auto for smooth scrolling');
assert(cardCss.includes('scroll-behavior: smooth'), '#telemetry-card must have scroll-behavior: smooth');
assert(cardCss.includes('overscroll-behavior: contain'), '#telemetry-card must contain overscroll to avoid canvas zoom chaining');

// Scrollbar styles
assert(html.includes('#telemetry-card::-webkit-scrollbar'), 'Aviation webkit scrollbar must exist');
assert(html.includes('#telemetry-card::-webkit-scrollbar-thumb'), 'Aviation scrollbar thumb must exist');
assert(html.includes('scrollbar-width: thin'), 'Firefox scrollbar-width thin must be present');

// Waypoints track expansion (no clipping/cutoffs)
const wpTrackCssMatch = html.match(/\.waypoints-track\s*\{([\s\S]*?)\}/);
assert(wpTrackCssMatch, '.waypoints-track CSS block must exist');
const wpTrackCss = wpTrackCssMatch[1];
assert(wpTrackCss.includes('max-height: none'), 'waypoints-track must have max-height: none to prevent inner clipping');
assert(wpTrackCss.includes('overflow: visible'), 'waypoints-track must have overflow: visible so sidebar handles scrolling smoothly');
console.log('[PASS] Smoothly scrollable container with custom dark aviation scrollbar verified (no inner cutoffs)');

// 3. Verify Multi-Stop Google Maps URL Integration
assert(html.includes('function buildGoogleMapsRouteUrl(hub, dest, waypoints)'), 'buildGoogleMapsRouteUrl function must exist');

// Extract and test buildGoogleMapsRouteUrl logic
const startIdx = html.indexOf('function buildGoogleMapsRouteUrl(hub, dest, waypoints) {');
assert(startIdx !== -1, 'buildGoogleMapsRouteUrl function start found');
const endIdx = html.indexOf('function parseElevationMeters', startIdx);
const fnCode = html.substring(startIdx, endIdx).trim();
const buildGoogleMapsRouteUrl = new Function('hub', 'dest', 'waypoints', fnCode + '\nreturn buildGoogleMapsRouteUrl(hub, dest, waypoints);');

// Test Case A: Route with no waypoints
const directUrl = buildGoogleMapsRouteUrl(
    { lat: 12.9716, lon: 77.5946 },
    { lat: 12.3051, lon: 76.6551 },
    []
);
assert(directUrl.includes('origin=12.97160,77.59460'), 'Direct URL must include origin');
assert(directUrl.includes('destination=12.30510,76.65510'), 'Direct URL must include destination');
assert(!directUrl.includes('&waypoints='), 'Direct URL with empty waypoints must not include waypoints param');
assert(directUrl.includes('&travelmode=driving'), 'Direct URL must include travelmode=driving');
console.log('[PASS] Direct route URL without waypoints verified');

// Test Case B: Route with intermediate waypoints (e.g. Madurai - 7 waypoints)
const corridorService = require('../data/corridor_routes.js');
const maduraiRoute = corridorService.getHighwayRoute('BLR', { lat: 12.9716, lon: 77.5946 }, { id: 'madurai', dist: 425 }, (lat, lon) => ({ x: 0, y: 0 }));
assert(maduraiRoute && maduraiRoute.waypoints && maduraiRoute.waypoints.length > 0, 'Madurai route must produce waypoints');

const maduraiUrl = buildGoogleMapsRouteUrl(
    { lat: 12.9716, lon: 77.5946 },
    { lat: 9.9252, lon: 78.1198 },
    maduraiRoute.waypoints
);

assert(maduraiUrl.includes('&waypoints='), 'Multi-stop URL must include &waypoints= parameter');
assert(maduraiUrl.includes('%7C'), 'Multi-stop waypoints must be joined with %7C pipe delimiter');
// Check that Hosur (12.74100,77.82800) and Krishnagiri (12.52400,78.21400) are in the query
assert(maduraiUrl.includes('12.74100,77.82800'), 'Hosur waypoint coordinates must be injected');
assert(maduraiUrl.includes('12.52400,78.21400'), 'Krishnagiri waypoint coordinates must be injected');
console.log(`[PASS] Multi-stop Google Maps URL verified for Madurai (${maduraiRoute.waypoints.length} intermediate waypoints injected)`);

// Test Case C: Long corridor route exceeding 9 waypoints (e.g. Ooty - 11 waypoints)
const ootyRoute = corridorService.getHighwayRoute('BLR', { lat: 12.9716, lon: 77.5946 }, { id: 'ooty', dist: 275 }, (lat, lon) => ({ x: 0, y: 0 }));
assert(ootyRoute && ootyRoute.waypoints && ootyRoute.waypoints.length > 9, 'Ooty route has > 9 waypoints');

const ootyUrl = buildGoogleMapsRouteUrl(
    { lat: 12.9716, lon: 77.5946 },
    { lat: 11.4102, lon: 76.6950 },
    ootyRoute.waypoints
);

// Google Maps web limit is 9 waypoints
const wpCount = (ootyUrl.match(/%7C/g) || []).length + 1;
assert.strictEqual(wpCount, 9, 'Routes with >9 waypoints must be proportionally sampled to exactly 9 waypoints for Google Maps compatibility');
console.log('[PASS] Multi-stop URL sampling verified for >9 waypoints (Ooty sampled to 9 milestones)');

// 4. Verify showTelemetry integration with Google Maps button
assert(html.includes('cardMapsLink.href = buildGoogleMapsRouteUrl(activeHub, item, routeWps)'), 'showTelemetry must set cardMapsLink.href using buildGoogleMapsRouteUrl');
assert(html.includes('Open Multi-Stop Route in Google Maps'), 'cardMapsLink must update label to indicate Multi-Stop route when waypoints exist');
console.log('[PASS] UI button integration with multi-stop URL verified');

// 5. Verify read-only guard
const refFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(refFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log(`[PASS] Read-only integrity: ${refFile} is strictly untouched (${refStats.size} bytes)`);

console.log('\nALL ENLARGED SIDEBAR & MULTI-STOP MAPS URL TESTS PASSED!\n');

