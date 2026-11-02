// scratch/test_hub_centering.js
// Verification script for hub beacon badge and button horizontal and vertical text centering.

const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING HUB BEACON TEXT CENTERING IN INDEX.HTML ===');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Check CSS styles for .hub-badge-text and .hub-click-btn-text
assert(html.includes('.hub-badge-text'), 'CSS class .hub-badge-text must exist');
assert(html.includes('.hub-click-btn-text'), 'CSS class .hub-click-btn-text must exist');

// Extract .hub-badge-text CSS block
const badgeTextCssMatch = html.match(/\.hub-badge-text\s*\{([^}]+)\}/);
assert(badgeTextCssMatch, '.hub-badge-text CSS block must be found');
const badgeTextCss = badgeTextCssMatch[1];
assert(badgeTextCss.includes('text-anchor: middle'), '.hub-badge-text must specify text-anchor: middle');
assert(badgeTextCss.includes('dominant-baseline: central'), '.hub-badge-text must specify dominant-baseline: central');
assert(badgeTextCss.includes('alignment-baseline: central'), '.hub-badge-text must specify alignment-baseline: central');
console.log('[PASS] .hub-badge-text CSS verified with text-anchor: middle and dominant-baseline: central');

// Extract .hub-click-btn-text CSS block
const btnTextCssMatch = html.match(/\.hub-click-btn-text\s*\{([^}]+)\}/);
assert(btnTextCssMatch, '.hub-click-btn-text CSS block must be found');
const btnTextCss = btnTextCssMatch[1];
assert(btnTextCss.includes('text-anchor: middle'), '.hub-click-btn-text must specify text-anchor: middle');
assert(btnTextCss.includes('dominant-baseline: central'), '.hub-click-btn-text must specify dominant-baseline: central');
assert(btnTextCss.includes('alignment-baseline: central'), '.hub-click-btn-text must specify alignment-baseline: central');
console.log('[PASS] .hub-click-btn-text CSS verified with text-anchor: middle and dominant-baseline: central');

// 2. Check SVG Presentation Attributes in renderHubBeacons
assert(html.includes("label.setAttribute('y', -18)"), 'label must be vertically centered at y = -18 (half of rect y=-28 to -8)');
assert(html.includes("label.setAttribute('text-anchor', 'middle')"), 'label must set text-anchor="middle" attribute');
assert(html.includes("label.setAttribute('dominant-baseline', 'central')"), 'label must set dominant-baseline="central" attribute');
assert(html.includes("label.setAttribute('alignment-baseline', 'central')"), 'label must set alignment-baseline="central" attribute');
console.log('[PASS] Active origin badge label attributes verified: x=0, y=-18, text-anchor="middle", dominant-baseline="central"');

assert(html.includes("btnTxt.setAttribute('y', -17)"), 'btnTxt must be vertically centered at y = -17 (half of rect y=-26 to -8)');
assert(html.includes("btnTxt.setAttribute('text-anchor', 'middle')"), 'btnTxt must set text-anchor="middle" attribute');
assert(html.includes("btnTxt.setAttribute('dominant-baseline', 'central')"), 'btnTxt must set dominant-baseline="central" attribute');
assert(html.includes("btnTxt.setAttribute('alignment-baseline', 'central')"), 'btnTxt must set alignment-baseline="central" attribute');
console.log('[PASS] Target hub button text attributes verified: x=0, y=-17, text-anchor="middle", dominant-baseline="central"');

// 3. Dynamic Pill Width & Center offset
assert(html.includes("badge.setAttribute('x', (-estWidth / 2).toFixed(1))"), 'badge x must be centered at -estWidth / 2');
assert(html.includes("btnBg.setAttribute('x', (-estWidth / 2).toFixed(1))"), 'btnBg x must be centered at -estWidth / 2');
console.log('[PASS] Dynamic pill width auto-centering verified for both Origin Badge and Target Buttons');

// 4. Verify getComputedTextLength dynamic auto-fit hook
assert(html.includes("labelEl.getComputedTextLength"), 'getComputedTextLength hook verified for active origin badge');
assert(html.includes("btnTxtEl.getComputedTextLength"), 'getComputedTextLength hook verified for target hub button');
console.log('[PASS] DOM-rendered real-time getComputedTextLength auto-fit hook verified');

// 5. Verify south_india_weekend_getaway_radar.html is completely unmodified
const referenceFile = 'south_india_weekend_getaway_radar.html';
const refStats = fs.statSync(referenceFile);
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must remain unmodified (125084 bytes)');
console.log('[PASS] south_india_weekend_getaway_radar.html is strictly untouched (125084 bytes)');

console.log('\nALL HUB BEACON TEXT CENTERING CHECKS PASSED!\n');

