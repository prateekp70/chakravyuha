const fs = require('fs');
const path = require('path');

// Test that index.html contains all expected elements and valid syntax
const html = fs.readFileSync('index.html', 'utf8');

// 1. Check HUD status strip elements
console.log("Checking HUD switcher elements...");
if (!html.includes('id="hud-hub-switcher"')) throw new Error("Missing #hud-hub-switcher");
if (!html.includes('id="hub-btn-BLR"')) throw new Error("Missing #hub-btn-BLR");
if (!html.includes('id="hub-btn-HYD"')) throw new Error("Missing #hub-btn-HYD");
if (!html.includes('id="hub-btn-MAA"')) throw new Error("Missing #hub-btn-MAA");
if (!html.includes('Click any hub on map to switch or select from toggle:')) {
    throw new Error("Missing switcher guidance label");
}
console.log("✓ HTML elements present");

// 2. Extract script tags and check JS syntax
const scriptMatches = [...html.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)];
const inlineScript = scriptMatches[scriptMatches.length - 1][1];

try {
    new Function(inlineScript);
    console.log("✓ Inline JS syntax in index.html is valid");
} catch (e) {
    console.error("Syntax Error in inline JS:", e);
    process.exit(1);
}

console.log("ALL TESTS PASSED!");

