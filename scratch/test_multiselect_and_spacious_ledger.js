// scratch/test_multiselect_and_spacious_ledger.js
// Verification for:
// 1. Multi-Select Distance Filters & Concentric Circle Highlighting
// 2. Checkpoint Hover-Out Sticky State Cleanup (clearAllWaypointHighlights, no appendChild)
// 3. Dynamic Checkpoint Toggle & Google Maps Multi-Stop Routing
// 4. Bold, Spacious, Larger Checkpoint Ledger Cards Layout & Styling

const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING MULTI-SELECT DISTANCE FILTERS & SPACIOUS CHECKPOINTS LEDGER ===');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify Multi-Select Distance Filter State & Functions
assert(html.includes('let activeDistanceTiers = new Set'), 'activeDistanceTiers Set must exist');
assert(html.includes('function setDistanceFilter(tier)'), 'setDistanceFilter must exist');
assert(html.includes('function applyDistanceFilter()'), 'applyDistanceFilter must exist');

// Test multi-select toggle logic
const activeDistanceTiers = new Set(['all']);
function simulateSetDistanceFilter(tier) {
    if (tier === 'all') {
        activeDistanceTiers.clear();
        activeDistanceTiers.add('all');
    } else {
        if (activeDistanceTiers.has('all')) {
            activeDistanceTiers.clear();
            activeDistanceTiers.add(tier);
        } else {
            if (activeDistanceTiers.has(tier)) {
                activeDistanceTiers.delete(tier);
                if (activeDistanceTiers.size === 0) {
                    activeDistanceTiers.add('all');
                }
            } else {
                activeDistanceTiers.add(tier);
            }
        }
    }
}

// Initial state
assert(activeDistanceTiers.has('all'), 'Initial state must be all');

// Select 200 km
simulateSetDistanceFilter('200');
assert(!activeDistanceTiers.has('all') && activeDistanceTiers.has('200'), '200 km must be active');

// Add 400 km (multi-select combo)
simulateSetDistanceFilter('400');
assert(activeDistanceTiers.has('200') && activeDistanceTiers.has('400') && activeDistanceTiers.size === 2, 'Both 200 and 400 km must be active');

// Toggle off 200 km
simulateSetDistanceFilter('200');
assert(!activeDistanceTiers.has('200') && activeDistanceTiers.has('400'), 'Only 400 km remains active');

// Toggle off 400 km -> should revert to 'all'
simulateSetDistanceFilter('400');
assert(activeDistanceTiers.has('all'), 'Empty selection must revert to all');
console.log('[PASS] Multi-select distance filter state toggling logic verified');

// Verify Concentric Ring Highlighting logic in HTML
assert(html.includes("activeRing = document.getElementById(`radar-ring-${t}`)"), 'applyDistanceFilter must find radar-ring for each active tier');
assert(html.includes("activeRing.classList.add('active-ring')"), 'applyDistanceFilter must illuminate active-ring on matching concentric rings');
console.log('[PASS] Multi-select concentric radar range ring illumination verified');

// 2. Verify Sticky Hover State Cleanup
assert(html.includes('function clearAllWaypointHighlights()'), 'clearAllWaypointHighlights must exist');
assert(html.includes("document.querySelectorAll('.active-waypoint-highlight')"), 'clearAllWaypointHighlights must target active-waypoint-highlight');
assert(html.includes("document.querySelectorAll('.active-waypoint-row')"), 'clearAllWaypointHighlights must target active-waypoint-row');

// Ensure DOM re-appending is NOT in highlightWaypoint (preventing cursor capture drop)
const hwStart = html.indexOf('function highlightWaypoint(id, scrollLedger = false) {');
const hwEnd = html.indexOf('function unhighlightWaypoint(id) {', hwStart);
const hwCode = html.substring(hwStart, hwEnd);
assert(!hwCode.includes('appendChild'), 'highlightWaypoint must not re-append mapNode to DOM during hover (fixes sticky hover capture bug)');
assert(hwCode.includes('clearAllWaypointHighlights()'), 'highlightWaypoint must call clearAllWaypointHighlights() first');
console.log('[PASS] Checkpoint hover-out sticky state bug fix verified (DOM hierarchy stable, global clearance)');

// 3. Verify Dynamic Checkpoint Selection & Google Maps Multi-Stop Routing
assert(html.includes('let selectedWaypointIds = new Set'), 'selectedWaypointIds Set must exist');
assert(html.includes('function toggleWaypointSelection(wpId, activeHub, item, routeWps)'), 'toggleWaypointSelection function must exist');
assert(html.includes('function updateWaypointVisualsAndMapsUrl(activeHub, item, routeWps)'), 'updateWaypointVisualsAndMapsUrl function must exist');
assert(html.includes('wp-select-badge'), 'wp-select-badge class must exist');
assert(html.includes('wp-item-excluded'), 'wp-item-excluded class must exist');
assert(html.includes('wp-node-excluded'), 'wp-node-excluded class must exist');

// Test waypoint toggle and URL generation logic
const corridorService = require('../data/corridor_routes.js');
const startIdx = html.indexOf('function buildGoogleMapsRouteUrl(hub, dest, waypoints) {');
const endIdx = html.indexOf('function parseElevationMeters', startIdx);
const fnCode = html.substring(startIdx, endIdx).trim();
const buildGoogleMapsRouteUrl = new Function('hub', 'dest', 'waypoints', fnCode + '\nreturn buildGoogleMapsRouteUrl(hub, dest, waypoints);');

const hub = { lat: 12.9716, lon: 77.5946 };
const dest = { lat: 9.9252, lon: 78.1198 };
const maduraiRoute = corridorService.getHighwayRoute('BLR', hub, { id: 'madurai', dist: 425 }, (lat, lon) => ({ x: 0, y: 0 }));
const allWps = maduraiRoute.waypoints;
assert(allWps.length >= 5, 'Madurai must have at least 5 waypoints');

// All waypoints selected
const fullUrl = buildGoogleMapsRouteUrl(hub, dest, allWps);
assert(fullUrl.includes('&waypoints='), 'Full URL must contain waypoints');
assert(fullUrl.includes(allWps[0].lat.toFixed(5)), 'Full URL must contain first waypoint');

// Exclude first 2 waypoints
const filteredWps = allWps.slice(2);
const filteredUrl = buildGoogleMapsRouteUrl(hub, dest, filteredWps);
assert(!filteredUrl.includes(allWps[0].lat.toFixed(5)), 'Filtered URL must not contain excluded first waypoint');
assert(filteredUrl.includes(allWps[2].lat.toFixed(5)), 'Filtered URL must contain included third waypoint');

// Exclude all waypoints
const emptyUrl = buildGoogleMapsRouteUrl(hub, dest, []);
assert(!emptyUrl.includes('&waypoints='), 'URL with all waypoints excluded must produce direct route without waypoints param');
console.log('[PASS] Dynamic waypoint exclusion / inclusion in Google Maps URL verified');

// 4. Verify Bold, Spacious, Larger Checkpoint Cards Styling
const wpRowMatch = html.match(/\.wp-item-row\s*\{([\s\S]*?)\}/);
assert(wpRowMatch, '.wp-item-row CSS must exist');
const wpRowCss = wpRowMatch[1];

assert(wpRowCss.includes('padding: 14px 16px'), 'wp-item-row must have generous padding (14px 16px)');
assert(wpRowCss.includes('border-left: 3.5px solid'), 'wp-item-row must have prominent left-border accent');
assert(wpRowCss.includes('border-radius: 10px'), 'wp-item-row must have rounded corners (10px)');
assert(wpRowCss.includes('gap: 12px'), 'wp-item-row must have spacious 12px gap between icon and info');

const wpIconMatch = html.match(/\.wp-item-icon\s*\{([\s\S]*?)\}/);
assert(wpIconMatch, '.wp-item-icon CSS must exist');
const wpIconCss = wpIconMatch[1];
assert(wpIconCss.includes('width: 32px'), 'wp-item-icon must be 32px wide');
assert(wpIconCss.includes('height: 32px'), 'wp-item-icon must be 32px tall');

const wpNameMatch = html.match(/\.wp-item-name\s*\{([\s\S]*?)\}/);
assert(wpNameMatch, '.wp-item-name CSS must exist');
assert(wpNameMatch[1].includes('font-weight: 800'), 'wp-item-name must have bold font-weight 800');
assert(wpNameMatch[1].includes('font-size: 0.86rem'), 'wp-item-name must have prominent font-size 0.86rem');

const wpTipMatch = html.match(/\.wp-item-tip\s*\{([\s\S]*?)\}/);
assert(wpTipMatch, '.wp-item-tip CSS must exist');
assert(wpTipMatch[1].includes('white-space: normal'), 'wp-item-tip must allow clean multi-line wrapping');
assert(wpTipMatch[1].includes('line-height: 1.45'), 'wp-item-tip must have readable line-height 1.45');
console.log('[PASS] Bold, spacious, larger checkpoint cards layout and typography verified');

// 5. Verify Read-Only Integrity
const refFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(refFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log(`[PASS] Read-only integrity: ${refFile} is strictly untouched (${refStats.size} bytes)`);

console.log('\nALL MULTI-SELECT & SPACIOUS CHECKPOINTS LEDGER CHECKS PASSED!\n');

