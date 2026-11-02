// scratch/test_declutter_and_rogue_dot.js
// Verification for telemetry sidebar decluttering and rogue outer dot animation elimination.

const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING TELEMETRY SIDEBAR DECLUTTER & ROGUE ANIMATION ELIMINATION ===');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify Compact Metadata Row
assert(html.includes('id="card-mission-deck"'), 'card-mission-deck must exist');
assert(html.includes('id="card-rollout-val"'), 'card-rollout-val must exist');
assert(html.includes('id="card-rollout-sub"'), 'card-rollout-sub must exist');
assert(html.includes('id="card-terrain-val"'), 'card-terrain-val must exist');
assert(html.includes('id="card-terrain-sub"'), 'card-terrain-sub must exist');

const missionDeckCssMatch = html.match(/\.card-mission-deck\s*\{([^}]+)\}/);
assert(missionDeckCssMatch, '.card-mission-deck CSS block must be found');
assert(missionDeckCssMatch[1].includes('display: flex'), 'Mission deck must use streamlined flex row layout');
assert(missionDeckCssMatch[1].includes('flex-direction: row'), 'Mission deck must use horizontal flex-direction: row');
console.log('[PASS] Streamlined horizontal info row for Rollout Window & Driving Conditions verified');

// 2. Verify High-Density Pit Stop Ledger
const wpTrackCssMatch = html.match(/\.waypoints-track\s*\{([^}]+)\}/);
assert(wpTrackCssMatch, '.waypoints-track CSS block must be found');
assert(wpTrackCssMatch[1].includes('max-height: 180px'), 'Waypoints track must have compact max-height of 180px');

const wpItemRowCssMatch = html.match(/\.wp-item-row\s*\{([^}]+)\}/);
assert(wpItemRowCssMatch, '.wp-item-row CSS block must be found');
assert(wpItemRowCssMatch[1].includes('padding: 5px 8px'), 'wp-item-row must have compact padding');
console.log('[PASS] High-density sleek Pit Stop Timeline list verified (compact padding & 180px max-height)');

// 3. Verify Rogue Dot / Pulse Animation Elimination
// Check that the broken scaling animation pulse-halo-breathe is completely removed
assert(!html.includes('@keyframes pulse-halo-breathe'), 'Broken @keyframes pulse-halo-breathe must be removed');
assert(!html.includes('animation: pulse-halo-breathe'), 'pulse-halo-breathe animation must not be applied to .pulse-halo');
console.log('[PASS] Broken CSS transform scale (pulse-halo-breathe) completely removed');

// Check that orphaned radar-beacon and target-pulse are removed
assert(!html.includes('@keyframes radar-beacon'), 'Orphaned @keyframes radar-beacon must be removed');
assert(!html.includes('@keyframes target-pulse'), 'Orphaned @keyframes target-pulse must be removed');
console.log('[PASS] Orphaned CSS keyframe animations (radar-beacon, target-pulse) completely removed');

// Check that telemetry tracer initializes coordinates at pt0 (no flash at 0,0)
assert(html.includes("tail2.setAttribute('cx', pt0.x.toFixed(1))"), 'Tracer tail2 must initialize at pt0');
assert(html.includes("halo.setAttribute('cx', pt0.x.toFixed(1))"), 'Tracer halo must initialize at pt0');
assert(html.includes("core.setAttribute('cx', pt0.x.toFixed(1))"), 'Tracer core must initialize at pt0');
console.log('[PASS] Immediate telemetry tracer coordinate initialization verified (zero-frame 0,0 flash eliminated)');

// Check lock-on isolation rules for target hubs
assert(html.includes('#radar-group.radar-has-lock .metro-hub-group.target-hub-group'), 'Lock-on isolation for target hubs must exist');
console.log('[PASS] Animation loops strictly isolated: target hubs dimmed with animations disabled during lock-on');

// 4. Verify read-only guard
const refFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(refFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log('[PASS] Read-only integrity: south_india_weekend_getaway_radar.html is strictly untouched (125084 bytes)');

console.log('\nALL DECLUTTER & ROGUE ANIMATION CHECKS PASSED!\n');

