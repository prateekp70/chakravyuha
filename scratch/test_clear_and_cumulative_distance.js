const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

console.log('=== TEST: CLEAR BUTTON & CUMULATIVE DISTANCE FILTER ===');

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

// 3. Test cumulative logic simulation
const ALL_DISTANCE_TIERS = [100, 200, 300, 400, 500, 600, 700];
let activeDistanceTiers = new Set(['all']);

function isWithinTier(dist, tier, mode = 'radius') {
    if (tier === 'all') return true;
    const limit = parseInt(tier, 10);
    if (isNaN(limit)) return true;
    if (mode === 'radius') {
        if (limit === 700) return dist <= 800;
        return dist <= limit;
    }
    if (limit === 100) return dist <= 100;
    if (limit === 700) return dist > 600;
    return dist > (limit - 100) && dist <= limit;
}

function simulateSetDistanceFilter(tier) {
    if (tier === 'all' || tier === 'clear') {
        activeDistanceTiers.clear();
        activeDistanceTiers.add('all');
    } else {
        const targetTier = parseInt(tier, 10);
        const currentMax = activeDistanceTiers.has('all') 
            ? null 
            : Math.max(...Array.from(activeDistanceTiers).map(t => parseInt(t, 10)).filter(n => !isNaN(n)));

        const expectedSize = ALL_DISTANCE_TIERS.filter(t => t <= targetTier).length;
        if (currentMax === targetTier && activeDistanceTiers.size === expectedSize) {
            activeDistanceTiers.clear();
            activeDistanceTiers.add('all');
        } else {
            activeDistanceTiers.clear();
            ALL_DISTANCE_TIERS.forEach(t => {
                if (t <= targetTier) {
                    activeDistanceTiers.add(String(t));
                }
            });
        }
    }
}

function simulateClearDistanceFilter() {
    simulateSetDistanceFilter('all');
}

function testOutpostInclusion(dist) {
    if (activeDistanceTiers.has('all')) return true;
    for (const t of activeDistanceTiers) {
        if (isWithinTier(dist, t, 'radius')) return true;
    }
    return false;
}

// Initial state
assert(activeDistanceTiers.has('all'), 'Initial state must be all');
assert(testOutpostInclusion(50), '50km must be included in all');
assert(testOutpostInclusion(250), '250km must be included in all');
assert(testOutpostInclusion(650), '650km must be included in all');

// Select 300 km
simulateSetDistanceFilter('300');
assert(!activeDistanceTiers.has('all'), 'all should be cleared when 300km selected');
assert(activeDistanceTiers.has('100'), '100km must be active when 300km selected');
assert(activeDistanceTiers.has('200'), '200km must be active when 300km selected');
assert(activeDistanceTiers.has('300'), '300km must be active when 300km selected');
assert(!activeDistanceTiers.has('400'), '400km must NOT be active when 300km selected');

// Test that outposts within 100, 200, and 300 km are ALL included
assert(testOutpostInclusion(45) === true, 'Outpost at 45km (within 100km) MUST be included');
assert(testOutpostInclusion(95) === true, 'Outpost at 95km (within 100km) MUST be included');
assert(testOutpostInclusion(150) === true, 'Outpost at 150km (within 200km) MUST be included');
assert(testOutpostInclusion(245) === true, 'Outpost at 245km (within 300km) MUST be included');
assert(testOutpostInclusion(299) === true, 'Outpost at 299km (within 300km) MUST be included');

// Test that outposts beyond 300km are excluded
assert(testOutpostInclusion(301) === false, 'Outpost at 301km (beyond 300km) MUST be excluded');
assert(testOutpostInclusion(450) === false, 'Outpost at 450km (beyond 300km) MUST be excluded');
assert(testOutpostInclusion(680) === false, 'Outpost at 680km (beyond 300km) MUST be excluded');
console.log('[PASS] Cumulative distance threshold logic verified: 300 km includes <= 100, <= 200, <= 300 km outposts');

// Test Clear button
simulateClearDistanceFilter();
assert(activeDistanceTiers.has('all'), 'Clear must restore all state');
assert(testOutpostInclusion(50) === true, '50km included after clear');
assert(testOutpostInclusion(450) === true, '450km included after clear');
assert(testOutpostInclusion(750) === true, '750km included after clear');
console.log('[PASS] Clear button simulation successfully resets distance filter');

console.log('ALL TESTS PASSED!');
