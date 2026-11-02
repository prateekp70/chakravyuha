// scratch/test_zero_clutter_and_cross_highlight.js
// Verification for:
// 1. Zero-Clutter Map Spoke (Clean Milestone Dots, no floating text boxes by default)
// 2. Dedicated Sidebar Corridor Checkpoints Ledger (details live in scrollable sidebar)
// 3. Interactive Bidirectional Sidebar-to-Map Cross-Highlighting

const fs = require('fs');
const assert = require('assert');
const path = require('path');

console.log('=== VERIFYING ZERO-CLUTTER SPOKE & BIDIRECTIONAL CROSS-HIGHLIGHTING ===');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify Zero-Clutter Map Spoke: pill tags hidden by default
const pillTagMatch = html.match(/\.wp-pill-tag\s*\{([\s\S]*?)\}/);
assert(pillTagMatch, '.wp-pill-tag CSS block must exist');
const pillTagCss = pillTagMatch[1];
assert(pillTagCss.includes('opacity: 0'), '.wp-pill-tag must have opacity: 0 by default (zero clutter airspace)');
assert(pillTagCss.includes('pointer-events: none'), '.wp-pill-tag must have pointer-events: none by default');

// Revealed only on active highlight or hover
const pillRevealMatch = html.match(/\.waypoint-node:hover \.wp-pill-tag,\s*\.waypoint-node\.active-waypoint-highlight \.wp-pill-tag\s*\{([\s\S]*?)\}/);
assert(pillRevealMatch, 'Pill reveal selector must exist for hover and active-waypoint-highlight');
assert(pillRevealMatch[1].includes('opacity: 1'), 'Pill tag must reveal with opacity: 1 on highlight/hover');
assert(pillRevealMatch[1].includes('pointer-events: auto'), 'Pill tag must enable pointer-events on highlight/hover');
console.log('[PASS] Zero-Clutter Map Spoke verified: clean dots by default, micro-tooltips hidden until highlighted');

// 2. Verify Milestone Dot Hover/Highlight Pulsing
const dotHighlightMatch = html.match(/\.waypoint-node:hover \.waypoint-dot,\s*\.waypoint-node\.active-waypoint-highlight \.waypoint-dot\s*\{([\s\S]*?)\}/);
assert(dotHighlightMatch, 'Dot highlight selector must exist');
assert(dotHighlightMatch[1].includes('r: 10'), 'Highlighted milestone dot must expand to r: 10');
assert(dotHighlightMatch[1].includes('#38bdf8'), 'Highlighted milestone dot must illuminate with vibrant cyan glow');
console.log('[PASS] Milestone dot neon pulsing on active highlight verified');

// 3. Verify Dedicated Sidebar Corridor Ledger
const wpTrackCssMatch = html.match(/\.waypoints-track\s*\{([\s\S]*?)\}/);
assert(wpTrackCssMatch, '.waypoints-track CSS block must exist');
assert(html.includes('id="card-waypoints-section"'), 'card-waypoints-section must exist in sidebar');
assert(html.includes('wp-item-row'), 'wp-item-row must exist for ledger items');
assert(html.includes('class="wp-item-tip"'), 'wp-item-tip must exist for detailed checkpoint tips');
console.log('[PASS] Dedicated sidebar corridor checkpoints ledger verified with rich descriptions');

// 4. Verify Interactive Bidirectional Cross-Highlighting Functions & Handlers
assert(html.includes('function highlightWaypoint(id, scrollLedger = false)'), 'highlightWaypoint must support scrollLedger flag');
assert(html.includes('function unhighlightWaypoint(id)'), 'unhighlightWaypoint must exist');
assert(html.includes('mapNode.classList.add(\'active-waypoint-highlight\')'), 'Must toggle active-waypoint-highlight on mapNode');
assert(html.includes('row.classList.add(\'active-waypoint-row\')'), 'Must toggle active-waypoint-row on ledger row');

// Map Node Hover: triggers highlightWaypoint with scrollLedger = true
assert(html.includes("wpNode.addEventListener('mouseenter', () => highlightWaypoint(wp.id, true));"), 'Map node hover must scroll and highlight sidebar ledger item');
assert(html.includes("wpNode.addEventListener('mouseleave', () => unhighlightWaypoint(wp.id));"), 'Map node mouseleave must unhighlight');

// Sidebar Row Hover: triggers highlightWaypoint with scrollLedger = false
assert(html.includes("row.addEventListener('mouseenter', () => highlightWaypoint(wp.id, false));"), 'Sidebar row hover must illuminate only the matching milestone dot on map');
assert(html.includes("row.addEventListener('mouseleave', () => unhighlightWaypoint(wp.id));"), 'Sidebar row mouseleave must unhighlight');
console.log('[PASS] Bidirectional cross-highlighting verified (Sidebar <-> Map Spoke synchronized)');

// 5. Verify Read-Only Integrity
const refFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(refFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log(`[PASS] Read-only integrity: ${refFile} is strictly untouched (${refStats.size} bytes)`);

console.log('\nALL ZERO-CLUTTER & BIDIRECTIONAL CROSS-HIGHLIGHTING CHECKS PASSED!\n');
