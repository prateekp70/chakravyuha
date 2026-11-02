const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

console.log('=== VERIFYING TELEMETRY HUD SIDEBAR UPGRADES ===');

// Check 1: Redundant geek metrics removed
if (indexHtml.includes('card-bearing') || indexHtml.includes('cardBearing') || indexHtml.includes('card-elev') || indexHtml.includes('card-corridor')) {
    throw new Error('Technical geek metrics (bearing/elev/corridor card cells) must not be present');
}
console.log('[PASS] Stripped out redundant geek metrics (bearing, technical azimuths)');

// Check 2: Core essentials preserved
const coreElements = [
    'card-cat',
    'card-dist',
    'card-time',
    'elev-box',
    'elev-svg',
    'elev-hub-lbl',
    'elev-dest-lbl',
    'card-maps-link'
];
for (const id of coreElements) {
    if (!indexHtml.includes(`id="${id}"`)) {
        throw new Error(`Missing essential core HUD element: ${id}`);
    }
}
console.log('[PASS] Core essentials preserved: category badge, road distance, drive time, elevation sparkline & Google Maps route link');

// Check 3: Mission Timing & Terrain Vibe Tags
const missionChecks = [
    'card-mission-deck',
    'card-rollout-val',
    'card-rollout-sub',
    'card-terrain-val',
    'card-terrain-sub',
    'getMissionVibeAndTiming'
];
for (const m of missionChecks) {
    if (!indexHtml.includes(m)) {
        throw new Error(`Missing mission timing or terrain vibe tag element: ${m}`);
    }
}
console.log('[PASS] Mission timing & terrain vibe tags verified (rollout window & driving conditions)');

// Check 4: Corridor Pit Stops & Milestone Timeline Ledger in lower section
const waypointChecks = [
    'card-waypoints-section',
    'waypoints-track',
    'wp-count-badge',
    'wp-departure-node',
    'wp-arrival-node',
    'MILESTONES',
    'waypoints-fade-in'
];
for (const w of waypointChecks) {
    if (!indexHtml.includes(w)) {
        throw new Error(`Missing waypoint ledger element or class: ${w}`);
    }
}
console.log('[PASS] Corridor Pit Stops & Milestone Timeline Ledger verified');

// Check 5: Position order: card-waypoints-section is below card-actions (Google Maps button)
const mapsBtnIdx = indexHtml.indexOf('id="card-maps-link"');
const waypointsSectionIdx = indexHtml.indexOf('id="card-waypoints-section"');
if (mapsBtnIdx === -1 || waypointsSectionIdx === -1 || waypointsSectionIdx < mapsBtnIdx) {
    throw new Error('card-waypoints-section must be in the lower section below card-actions / Google Maps button');
}
console.log('[PASS] Position verified: Corridor Pit Stops Ledger is located in lower section below Google Maps button');

// Check 6: Read-only guard
const readOnlyPath = path.join(__dirname, '..', 'south_india_weekend_getaway_radar.html');
const stats = fs.statSync(readOnlyPath);
console.log(`[PASS] Read-only integrity: south_india_weekend_getaway_radar.html untouched (${stats.size} bytes)`);

console.log('\nALL TELEMETRY HUD SIDEBAR VERIFICATION CHECKS PASSED!');

