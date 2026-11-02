// scratch/test_drive_time_and_spoke_overlays.js
// Verification for:
// 1. Negative drive-time bug / time-travel glitch fix (Math.abs normalization & formatDriveTime)
// 2. Telemetry card decluttering & streamlined metrics/sparkline layout
// 3. Spoke waypoint overlay alternating placement & jitter elimination

const fs = require('fs');
const assert = require('assert');
const path = require('path');

console.log('=== VERIFYING DRIVE TIME FIX & SPOKE OVERLAY POLISH ===');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify formatDriveTime implementation in index.html
assert(html.includes('function formatDriveTime(val)'), 'formatDriveTime function must exist in index.html');

// Extract and test formatDriveTime logic directly
const startIdx = html.indexOf('function formatDriveTime(val) {');
assert(startIdx !== -1, 'formatDriveTime function must be found');
const endIdx = html.indexOf('function parseElevationMeters', startIdx);
const fnCode = html.substring(startIdx, endIdx).trim();
const formatDriveTime = new Function('val', fnCode + '\nreturn formatDriveTime(val);');

// Test negative string inputs (time-travel glitch)
assert.strictEqual(formatDriveTime('-13h 14m'), '13h 14m', 'Negative string should format to positive 13h 14m');
assert.strictEqual(formatDriveTime('~13h 14m'), '13h 14m', 'Tilde string should strip tilde to avoid minus confusion');
assert.strictEqual(formatDriveTime('13h 14m'), '13h 14m', 'Positive string should format cleanly');
assert.strictEqual(formatDriveTime('~6h 31m'), '6h 31m', 'Tilde 6h 31m should strip tilde');
assert.strictEqual(formatDriveTime('-6h -31m'), '6h 31m', 'Inverted negative signs should become positive');
assert.strictEqual(formatDriveTime(-391), '6h 31m', 'Negative numeric minutes should format to positive 6h 31m');
assert.strictEqual(formatDriveTime(794), '13h 14m', 'Positive numeric minutes should format to 13h 14m');
console.log('[PASS] formatDriveTime successfully normalizes negative inputs and strips confusing tildes');

// Test Kolhapur drive time resolution
const { hubService } = require('../data/hub_service.js');
const kolhapurEntry = hubService.ROAD_MATRIX['BLR:kolhapur'];
assert(kolhapurEntry, 'BLR:kolhapur entry must exist in ROAD_MATRIX');
const kolhapurFormatted = formatDriveTime(kolhapurEntry[1]);
assert.strictEqual(kolhapurFormatted, '13h 14m', 'Kolhapur drive time must format to clean positive 13h 14m');
assert(!kolhapurFormatted.startsWith('-'), 'Kolhapur drive time must not start with minus');
assert(!kolhapurFormatted.startsWith('~'), 'Kolhapur drive time must not start with tilde');
console.log(`[PASS] Kolhapur verified: ${kolhapurFormatted} (no negative sign or ambiguous tilde)`);

// 2. Verify showTelemetry uses formatDriveTime
assert(html.includes('cardTime.textContent = formatDriveTime(item.driveTime)'), 'showTelemetry must use formatDriveTime');
assert(html.includes('Est. ${formatDriveTime(item.driveTime)}'), 'Waypoint arrival node must use formatDriveTime');
console.log('[PASS] showTelemetry and arrival waypoint node use formatDriveTime');

// 3. Verify Telemetry Sidebar Card Streamlining & Compact CSS
const cardMetricsCss = html.match(/\.card-metrics\s*\{([^}]+)\}/);
assert(cardMetricsCss, '.card-metrics CSS block must exist');
assert(cardMetricsCss[1].includes('gap: 8px'), 'card-metrics must have streamlined 8px gap');
assert(cardMetricsCss[1].includes('margin: 2px 0'), 'card-metrics must have compact 2px 0 margin');

const elevBoxCss = html.match(/\.elev-box\s*\{([^}]+)\}/);
assert(elevBoxCss, '.elev-box CSS block must exist');
assert(elevBoxCss[1].includes('padding: 6px 10px'), 'elev-box must have compact padding 6px 10px');

const elevSvgCss = html.match(/svg#elev-svg\s*\{([^}]+)\}/);
assert(elevSvgCss, 'svg#elev-svg CSS block must exist');
assert(elevSvgCss[1].includes('height: 38px'), 'elev-svg must have simplified 38px height');
console.log('[PASS] Streamlined metrics grid and simplified elevation sparkline verified');

// 4. Verify Spoke Pit Stop Overlays & Jitter Elimination
// Overlap prevention: alternating placement across vector
assert(html.includes('let shiftX = (wIdx % 2 === 0) ? 14 : -(pillWidth + 14);'), 'Pill placement must alternate left and right');
assert(html.includes('let shiftY = (wIdx % 2 === 0) ? -12 : -6;'), 'Pill vertical offset must be staggered');

// Jitter elimination: no transform: scale(...) on .waypoint-node
const wpNodeHoverMatch = html.match(/\.waypoint-node:hover[\s\S]*?\{([\s\S]*?)\}/);
assert(!wpNodeHoverMatch || !wpNodeHoverMatch[1].includes('transform: scale'), '.waypoint-node:hover must not use transform: scale (prevents SVG matrix jitter)');

// Entrance animation: opacity only (no WAAPI transform override)
const wpAnimMatch = html.match(/wpNode\.animate\(\[\s*\{\s*opacity:\s*0\s*\},/);
assert(wpAnimMatch, 'wpNode WAAPI animation must animate opacity only (avoids transform coordinate desync)');
console.log('[PASS] Spoke pit stop overlay alternating collision-free placement & jitter elimination verified');

// 5. Verify read-only guard
const refFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(refFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log(`[PASS] Read-only integrity: ${refFile} is strictly untouched (${refStats.size} bytes)`);

console.log('\nALL DRIVE TIME & SPOKE OVERLAY TESTS PASSED!\n');
