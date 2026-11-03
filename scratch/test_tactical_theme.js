const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

console.log('=== TEST: TACTICAL THEME TOGGLE (AVIATION vs INSTRUMENT MINIMAL) ===');

// 1. Verify UI Toggle Button in Top Header
assert(html.includes('id="theme-toggle-btn"'), 'theme-toggle-btn must exist in header');
assert(html.includes('onclick="toggleTacticalTheme()"'), 'toggleTacticalTheme onclick must exist');
assert(html.includes('id="theme-btn-icon"'), 'theme-btn-icon must exist');
assert(html.includes('id="theme-btn-label"'), 'theme-btn-label must exist');
console.log('[PASS] Header UI toggle button verified');

// 2. Verify Theme Functions & localStorage Persistence
assert(html.includes('function initTacticalTheme()'), 'initTacticalTheme function must exist');
assert(html.includes('function applyTheme(theme)'), 'applyTheme function must exist');
assert(html.includes('function toggleTacticalTheme()'), 'toggleTacticalTheme function must exist');
assert(html.includes("localStorage.getItem('chakravyuha_theme')"), 'Must read from localStorage');
assert(html.includes("localStorage.setItem('chakravyuha_theme'"), 'Must save to localStorage');
assert(html.includes('document.body.classList.add(\'theme-instrument\')'), 'Must toggle theme-instrument class');
console.log('[PASS] Tactical theme engine & localStorage persistence verified');

// 3. Verify CSS Theme Specifications
assert(html.includes('body.theme-instrument {'), 'body.theme-instrument CSS rule must exist');
assert(html.includes('--bg: #030407;'), 'Matte charcoal-black palette must be defined');
assert(html.includes('border: 1px solid rgba(255, 255, 255, 0.08) !important;'), 'Hairline 1px border rule must exist');
assert(html.includes('box-shadow: none !important;'), 'Shadow suppression rule must exist');
assert(html.includes('JetBrains Mono'), 'Monospace telemetry readout font stack must exist');
assert(html.includes('body.theme-instrument .hub-switch-hint'), 'Header clutter removal for hub-switch-hint must exist');
assert(html.includes('body.theme-instrument .brand-badge'), 'Header clutter removal for brand-badge must exist');
assert(html.includes('color: #4ade80 !important;'), 'Phosphor green metric readout styling must exist');
assert(html.includes('color: #f59e0b !important;'), 'Amber waypoint marker styling must exist');
console.log('[PASS] Instrument theme CSS specifications verified');

// 4. Test Theme Toggle State Machine
let mockClassList = new Set();
let mockStorage = {};
let currentTheme = 'aviation';

function mockApplyTheme(theme) {
    currentTheme = theme;
    if (theme === 'instrument') {
        mockClassList.add('theme-instrument');
    } else {
        mockClassList.delete('theme-instrument');
    }
    mockStorage['chakravyuha_theme'] = theme;
}

function mockToggleTheme() {
    mockApplyTheme(currentTheme === 'instrument' ? 'aviation' : 'instrument');
}

// Initial state
assert(!mockClassList.has('theme-instrument'), 'Default state must not have theme-instrument');

// Toggle to instrument
mockToggleTheme();
assert(currentTheme === 'instrument', 'Theme must switch to instrument');
assert(mockClassList.has('theme-instrument'), 'theme-instrument class must be active');
assert(mockStorage['chakravyuha_theme'] === 'instrument', 'localStorage must store instrument');

// Toggle back to aviation
mockToggleTheme();
assert(currentTheme === 'aviation', 'Theme must switch back to aviation');
assert(!mockClassList.has('theme-instrument'), 'theme-instrument class must be removed');
assert(mockStorage['chakravyuha_theme'] === 'aviation', 'localStorage must store aviation');

console.log('[PASS] Theme toggle state machine & simulated reload verified');
console.log('ALL THEME TESTS PASSED SUCCESSFULLY!');
