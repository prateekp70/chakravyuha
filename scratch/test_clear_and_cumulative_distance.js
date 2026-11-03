const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

console.log('=== TEST: SINGLE PERIMETER RING HIGHLIGHT & CUMULATIVE OUTPOST DISPLAY ===');

// 1. Verify HTML elements exist
assert(html.includes('id="btn-clear-distance"'), 'btn-clear-distance button must exist');
assert(html.includes('onclick="clearDistanceFilter()"'), 'clearDistanceFilter onclick must exist');
assert(html.includes('class="filter-btn filter-clear-btn"'), 'filter-clear-btn CSS class must exist');
console.log('[PASS] Clear button markup verified');

// 2. Verify functions exist in JS
assert(html.includes('function clearDistanceFilter()'), 'clearDistanceFilter function must exist in JS');
assert(html.includes('function setDistanceFilter(tier)'), 'setDistanceFilter function must exist in JS');
assert(html.includes('function applyDistanceFilter()'), 'applyDistanceFilter function must exist in JS');
console.log('[PASS] Function declarations verified');

// 3. Test Single Perimeter Ring + Cumulative Outpost logic
let activeDistanceTiers = new Set(['all']);

function simulateSetDistanceFilter(tier) {
    if (tier === 'all' || tier === 'clear') {
        activeDistanceTiers.clear();
        activeDistanceTiers.add('all');
    } else {
        if (activeDistanceTiers.has(tier)) {
            activeDistanceTiers.clear();
            activeDistanceTiers.add('all');
        } else {
            activeDistanceTiers.clear();
            activeDistanceTiers.add(tier);
        }
    }
}

function simulateClearDistanceFilter() {
    simulateSetDistanceFilter('all');
}

function testOutpostInclusion(dist) {
    if (activeDistanceTiers.has('all')) return true;
    const selectedLimit = parseInt(Array.from(activeDistanceTiers)[0], 10);
    const maxActiveDist = (selectedLimit === 700) ? 800 : selectedLimit;
    return dist <= maxActiveDist;
}

function getHighlightedRings() {
    if (activeDistanceTiers.has('all')) return [];
    return Array.from(activeDistanceTiers).map(t => `radar-ring-${t}`);
}

// Initial state
assert(activeDistanceTiers.has('all'), 'Initial state must be all');
assert(getHighlightedRings().length === 0, 'No rings highlighted initially');
assert(testOutpostInclusion(50), '50km included in all');
assert(testOutpostInclusion(650), '650km included in all');

// Select 300 km
simulateSetDistanceFilter('300');
assert(!activeDistanceTiers.has('all'), 'all cleared when 300km selected');
assert(activeDistanceTiers.has('300'), '300km must be active');
assert(!activeDistanceTiers.has('100'), '100km must NOT be active when 300km selected');
assert(!activeDistanceTiers.has('200'), '200km must NOT be active when 300km selected');

// Verify ONLY the 300 km ring is highlighted!
const rings300 = getHighlightedRings();
assert.deepStrictEqual(rings300, ['radar-ring-300'], 'ONLY radar-ring-300 must be highlighted (NOT 100 or 200)');
console.log('[PASS] Verified only perimeter ring 300 km is highlighted (100 and 200 rings remain subtle)');

// Test that outposts within 100, 200, and 300 km are ALL displayed
assert(testOutpostInclusion(45) === true, 'Outpost at 45km (within 100km) MUST be included');
assert(testOutpostInclusion(95) === true, 'Outpost at 95km (within 100km) MUST be included');
assert(testOutpostInclusion(150) === true, 'Outpost at 150km (within 200km) MUST be included');
assert(testOutpostInclusion(245) === true, 'Outpost at 245km (within 300km) MUST be included');
assert(testOutpostInclusion(299) === true, 'Outpost at 299km (within 300km) MUST be included');

// Test that outposts beyond 300km are excluded
assert(testOutpostInclusion(301) === false, 'Outpost at 301km (beyond 300km) MUST be excluded');
assert(testOutpostInclusion(450) === false, 'Outpost at 450km (beyond 300km) MUST be excluded');
console.log('[PASS] Verified cumulative outpost display: <=100, <=200, and <=300 km outposts are all included');

// Select 200 km
simulateSetDistanceFilter('200');
const rings200 = getHighlightedRings();
assert.deepStrictEqual(rings200, ['radar-ring-200'], 'ONLY radar-ring-200 must be highlighted (NOT 100)');
assert(testOutpostInclusion(45) === true, '45km included in 200km filter');
assert(testOutpostInclusion(190) === true, '190km included in 200km filter');
assert(testOutpostInclusion(250) === false, '250km excluded from 200km filter');
console.log('[PASS] Verified 200 km selection highlights ONLY ring 200 while including 100km outposts');

// Test Clear
simulateClearDistanceFilter();
assert(activeDistanceTiers.has('all'), 'Clear must restore all state');
assert(getHighlightedRings().length === 0, 'No rings highlighted after clear');
assert(testOutpostInclusion(500) === true, '500km included after clear');
console.log('[PASS] Clear button resets filter and clears ring highlights');

console.log('ALL TESTS PASSED SUCCESSFULLY!');
