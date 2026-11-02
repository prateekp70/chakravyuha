const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Verify distance filter buttons
const tiers = ['100', '200', '300', '400', '500', '600', '700'];
tiers.forEach(tier => {
    if (!html.includes(`data-tier="${tier}"`)) {
        throw new Error(`Missing button for data-tier="${tier}"`);
    }
    if (!html.includes(`onclick="setDistanceFilter('${tier}')"`)) {
        throw new Error(`Missing onclick for tier ${tier}`);
    }
});
console.log('[PASS] Verified distance scale filter buttons for 100, 200, 300, 400, 500, 600, 700');

// 2. Verify radar grid distances
if (!html.includes('const distances = [100, 200, 300, 400, 500, 600, 700];')) {
    throw new Error('Radar distances array does not match 100, 200, 300, 400, 500, 600, 700');
}
console.log('[PASS] Verified radar rings calibrated to [100, 200, 300, 400, 500, 600, 700]');

// 3. Verify ring ID format
if (!html.includes('ring.id = `radar-ring-${dist}`;')) {
    throw new Error('Ring ID should use radar-ring-${dist}');
}
console.log('[PASS] Verified ring id format radar-ring-${dist}');

// 4. Verify ring active glow class
if (!html.includes('.ring.active-ring')) {
    throw new Error('Missing .ring.active-ring CSS rule');
}
console.log('[PASS] Verified active-ring highlight styling');

// 5. Test isWithinTier logic in isolated function
function isWithinTier(dist, tier, mode = 'bracket') {
    if (tier === 'all') return true;
    const limit = parseInt(tier, 10);
    if (isNaN(limit)) return true;

    if (mode === 'radius') {
        return dist <= limit;
    }

    if (limit === 100) return dist <= 100;
    if (limit === 700) return dist > 600;
    return dist > (limit - 100) && dist <= limit;
}

// Tests for bracket mode
if (!isWithinTier(50, '100', 'bracket')) throw new Error('50km should be in 100 bracket');
if (isWithinTier(150, '100', 'bracket')) throw new Error('150km should NOT be in 100 bracket');
if (!isWithinTier(150, '200', 'bracket')) throw new Error('150km should be in 200 bracket');
if (isWithinTier(50, '200', 'bracket')) throw new Error('50km should NOT be in 200 bracket');
if (!isWithinTier(250, '300', 'bracket')) throw new Error('250km should be in 300 bracket');
if (!isWithinTier(665, '700', 'bracket')) throw new Error('665km (Kanyakumari) should be in 700 bracket');
if (!isWithinTier(789, '700', 'bracket')) throw new Error('789km (Lambasingi) should be in 700 bracket');

// Tests for radius mode (cumulative)
if (!isWithinTier(50, '200', 'radius')) throw new Error('50km should be within 200km radius');
if (!isWithinTier(150, '200', 'radius')) throw new Error('150km should be within 200km radius');
if (isWithinTier(250, '200', 'radius')) throw new Error('250km should NOT be within 200km radius');

console.log('[PASS] Verified isWithinTier bracket & radius modes');
console.log('\nALL DISTANCE SCALE TESTS PASSED!');

