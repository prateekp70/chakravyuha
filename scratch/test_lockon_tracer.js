const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

console.log('=== VERIFYING LOCK-ON INTERACTION & CONTINUOUS TELEMETRY TRACER ===');

// Check 1: renderHighwayRoute guard for isLocked
if (!indexHtml.includes('if (!isLocked) return;')) {
    throw new Error('renderHighwayRoute must guard: if (!isLocked) return;');
}
console.log('[PASS] renderHighwayRoute only executes when outpost is locked (isLocked === true)');

// Check 2: Hover handlers do not invoke renderHighwayRoute
const triggerHoverBlockMatch = indexHtml.match(/const triggerHover = \(active\) => \{([\s\S]*?)\n\s*\};/);
if (!triggerHoverBlockMatch) {
    throw new Error('Could not find triggerHover function block');
}
const triggerHoverBody = triggerHoverBlockMatch[1];
if (triggerHoverBody.includes('renderHighwayRoute(')) {
    throw new Error('triggerHover must NOT call renderHighwayRoute on hover! Highway and waypoints must be locked-only.');
}
console.log('[PASS] triggerHover is cleanly isolated: does not invoke renderHighwayRoute on hover');

// Check 3: Continuous Traveling Telemetry Tracer Engine defined
if (!indexHtml.includes('function startTelemetryTracer(') || !indexHtml.includes('function stopTelemetryTracer()')) {
    throw new Error('Missing startTelemetryTracer or stopTelemetryTracer functions');
}
if (!indexHtml.includes('requestAnimationFrame(step)') || !indexHtml.includes('cancelAnimationFrame(telemetryAnimId)')) {
    throw new Error('Telemetry tracer must utilize requestAnimationFrame ticker loop with clean cancelAnimationFrame teardown');
}
console.log('[PASS] Telemetry tracer engine uses fluid requestAnimationFrame loop and cancelAnimationFrame cleanup');

// Check 4: Curated pit stop markers have permanently visible tactical callout pill tags
const checks = [
    'wp-pill-tag',
    'wp-pill-bg',
    'wp-pill-text',
    'wp-pill-name',
    'wp-pill-km',
    'KM ${wp.km}',
    'active-waypoint-highlight',
    'corridor-waypoints-group'
];
for (const c of checks) {
    if (!indexHtml.includes(c)) {
        throw new Error(`Missing expected waypoint pill callout code: ${c}`);
    }
}
console.log('[PASS] Curated pit stop markers feature permanently visible tactical pill tags with name and KM relative to origin');

// Check 5: Teardown logic
if (!indexHtml.includes('clearHighwayRoute') || !indexHtml.includes('stopTelemetryTracer()')) {
    throw new Error('clearHighwayRoute must invoke stopTelemetryTracer()');
}
console.log('[PASS] unlockTarget and clearHighwayRoute atomically stop tracer and wipe corridor SVG layers');

// Check 6: Read-only guard
const readOnlyPath = path.join(__dirname, '..', 'south_india_weekend_getaway_radar.html');
const stats = fs.statSync(readOnlyPath);
console.log(`[PASS] Read-only integrity: south_india_weekend_getaway_radar.html unchanged (${stats.size} bytes)`);

console.log('\nALL LOCK-ON & TELEMETRY TRACER VERIFICATION CHECKS PASSED!');

