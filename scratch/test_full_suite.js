const fs = require('fs');
const path = require('path');

// 1. Check data/master_pois.js
const pois = require('../data/master_pois.js');
console.log(`[PASS] Master POIs loaded: ${pois.length} unique destinations`);
if (pois.length < 187) throw new Error(`Expected at least 187 POIs, got ${pois.length}`);

// Check anchors
const kk = pois.find(p => p.id === 'kanyakumari');
const tvm = pois.find(p => p.id === 'thiruvananthapuram');
const ram = pois.find(p => p.id === 'rameshwaram_dhanushkodi');
if (!kk || !tvm || !ram) throw new Error("Missing southern anchors");
console.log(`[PASS] Deep South anchors verified: Kanyakumari, Thiruvananthapuram, Rameshwaram`);

// Check Chhattisgarh destinations
const chPlaces = [
  'dantewada', 'barsur', 'chitrakote_falls', 'tirathgarh_falls',
  'kanger_valley_kutumsar', 'jagdalpur', 'keshkal_ghat', 'kanker_palace',
  'malanjhkudum_falls', 'gangrel_dam', 'dongargarh', 'rajim_sangam',
  'ghatarani_jatmai_falls', 'raipur_nandanvan', 'madku_dweep',
  'sirpur_heritage', 'bhoramdeo_temple', 'barnawapara_wildlife',
  'achanakmar_tiger_reserve'
];
chPlaces.forEach(id => {
    const found = pois.find(p => p.id === id);
    if (!found) throw new Error(`Missing Chhattisgarh destination: ${id}`);
});
console.log(`[PASS] Verified all 19 Chhattisgarh destinations in Master POIs`);

// 2. Check data/hub_service.js
const { HubService, hubService } = require('../data/hub_service.js');
const hubsConfig = require('../data/hubs/hubs_config.js');
hubsConfig.forEach(h => hubService.registerHub(h));
hubService.setMasterPois(pois);

['BLR', 'HYD', 'MAA'].forEach(hubKey => {
    const outposts = hubService.getOutpostsForHub(hubKey, 800);
    console.log(`[PASS] Hub ${hubKey}: ${outposts.length} outposts within 800km driving range`);
});

// Check specific routes
const lambasingi = pois.find(p => p.id === 'lambasingi');
const blrKK = hubService.calculateRoadMetrics('BLR', kk, 550);
console.log(`[PASS] BLR -> Kanyakumari: ${blrKK.roadDist} km (~${blrKK.driveTime}) via ${blrKK.corridor}`);

const maaLambasingi = hubService.calculateRoadMetrics('MAA', lambasingi, 580);
console.log(`[PASS] MAA -> Lambasingi: ${maaLambasingi.roadDist} km (~${maaLambasingi.driveTime}) via ${maaLambasingi.corridor}`);
if (maaLambasingi.roadDist !== 789) throw new Error("MAA -> Lambasingi road distance should be 789 km");

const chitrakote = pois.find(p => p.id === 'chitrakote_falls');
const hydChitrakote = hubService.calculateRoadMetrics('HYD', chitrakote, 396);
console.log(`[PASS] HYD -> Chitrakote Falls: ${hydChitrakote.roadDist} km (~${hydChitrakote.driveTime}) via ${hydChitrakote.corridor}`);
if (hydChitrakote.roadDist !== 520) throw new Error("HYD -> Chitrakote Falls road distance should be 520 km");

const dantewada = pois.find(p => p.id === 'dantewada');
const hydDantewada = hubService.calculateRoadMetrics('HYD', dantewada, 346);
console.log(`[PASS] HYD -> Dantewada: ${hydDantewada.roadDist} km (~${hydDantewada.driveTime}) via ${hydDantewada.corridor}`);
if (hydDantewada.roadDist !== 440) throw new Error("HYD -> Dantewada road distance should be 440 km");

// 3. Check index.html Hub Switcher UI
const html = fs.readFileSync('index.html', 'utf8');
const checks = [
    'class="hud-hub-switcher"',
    'class="hub-switch-hint"',
    'class="hub-toggle-group"',
    'id="hub-btn-BLR"',
    'id="hub-btn-HYD"',
    'id="hub-btn-MAA"',
    'updateHubSwitcherUI()',
    'selectHub(hubKey)',
    'card-photos-grid',
    'photo-lightbox-modal',
    'id="card-lock-badge"',
    'id="card-dist"',
    'id="card-time"',
    '430px',
    'class="card-intel-section"',
    'id="card-dist-sub"',
    'id="card-time-sub"',
    'id="card-lock-hint"',
    'viewBox="0 0 380 52"',
    "e.key === 'Escape'",
    'class="filter-deck" id="distance-tier-deck"',
    'data-tier="100"',
    'data-tier="200"',
    'data-tier="300"',
    'data-tier="400"',
    'data-tier="500"',
    'data-tier="600"',
    'data-tier="700"',
    'renderHighwayRoute',
    'active-highway-path',
    'active-telemetry-pulse',
    'card-maps-link',
    'active-ring'
];

if (html.includes('id="card-bearing"') || html.includes('cardBearing')) {
    throw new Error("card-bearing was not chucked!");
}
if (html.includes('id="card-elev"') || html.includes('cardElev')) {
    throw new Error("card-elev was not removed!");
}
if (html.includes('id="card-corridor"') || html.includes('cardCorridor')) {
    throw new Error("card-corridor was not removed!");
}
console.log("[PASS] Verified card-elev, card-corridor, and card-bearing completely removed from UI");

checks.forEach(check => {
    if (!html.includes(check)) throw new Error(`Missing expected element/code in index.html: ${check}`);
    console.log(`[PASS] Verified in index.html: ${check}`);
});

console.log("\nALL VERIFICATION CHECKS COMPLETED SUCCESSFULLY!");
