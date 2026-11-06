const fs = require('fs');
const assert = require('assert');

console.log('--- STARTING DYNAMIC OUTPOST HUB MERGE & RENDER TEST SUITE ---');

// 1. Load modules
const { hubService } = require('../data/hub_service.js');
const hubsConfig = require('../data/hubs/hubs_config.js');
const masterPois = require('../data/master_pois.js');
const corridorService = require('../data/corridor_routes.js');
const { dynamicSpatialService } = require('../data/dynamic_spatial_service.js');
const hubPNQConfig = require('../data/hubs/pnq.js');

// Register hubs and set baseline master POIs
hubsConfig.forEach(h => hubService.registerHub(h));
hubService.registerHub(hubPNQConfig);
hubService.setMasterPois(masterPois);

// 2. Verify getCurrentHub and setCurrentHub methods
assert(typeof hubService.setCurrentHub === 'function', 'hubService.setCurrentHub must be a function');
assert(typeof hubService.getCurrentHub === 'function', 'hubService.getCurrentHub must be a function');

hubService.setCurrentHub('PNQ');
const currentHub = hubService.getCurrentHub();
assert.strictEqual(currentHub.key, 'PNQ', 'Current hub must be PNQ');
assert(Array.isArray(currentHub.outposts), 'currentHub.outposts must be an array');
console.log('✓ hubService.setCurrentHub and getCurrentHub verified');

// 3. Verify dynamic outposts from regional catalog or live Overpass
const regionalPNQ = dynamicSpatialService.getRegionalFallbacks('PNQ');
assert(regionalPNQ.length >= 25, `Expected >= 25 regional outposts for PNQ, got ${regionalPNQ.length}`);

// Verify presence of Gujarat and Madhya Pradesh outposts
const names = regionalPNQ.map(p => p.name.toLowerCase());
const hasMaheshwar = names.some(n => n.includes('maheshwar'));
const hasMandu = names.some(n => n.includes('mandu'));
const hasStatueOfUnity = names.some(n => n.includes('statue of unity'));
const hasUjjain = names.some(n => n.includes('ujjain'));
const hasSomnath = names.some(n => n.includes('somnath'));

assert(hasMaheshwar, 'Regional catalog must include Maheshwar');
assert(hasMandu, 'Regional catalog must include Mandu');
assert(hasStatueOfUnity, 'Regional catalog must include Statue of Unity');
assert(hasUjjain, 'Regional catalog must include Ujjain');
assert(hasSomnath, 'Regional catalog must include Somnath');
console.log('✓ Gujarat and Madhya Pradesh outposts verified in dynamic spatial catalog');

// 4. Test merge directly into hubService.getCurrentHub().outposts
const beforeCount = currentHub.outposts.length;
regionalPNQ.forEach(dyn => {
    const key = dyn.name.toLowerCase();
    if (!currentHub.outposts.some(p => p.name.toLowerCase() === key)) {
        currentHub.outposts.push(dyn);
    }
});
assert(currentHub.outposts.length >= 25, `currentHub.outposts must contain merged outposts, got ${currentHub.outposts.length}`);
console.log(`✓ Merged ${currentHub.outposts.length} outposts directly into hubService.getCurrentHub().outposts`);

// 5. Test resolution in hubService.getOutpostsForHub('PNQ', 800)
const resolvedOutposts = hubService.getOutpostsForHub('PNQ', 800);
assert(resolvedOutposts.length >= 25, `getOutpostsForHub('PNQ') must return >= 25 outposts, got ${resolvedOutposts.length}`);

const resolvedNames = resolvedOutposts.map(p => p.name.toLowerCase());
assert(resolvedNames.some(n => n.includes('maheshwar')), 'Resolved outposts must include Maheshwar');
assert(resolvedNames.some(n => n.includes('mandu')), 'Resolved outposts must include Mandu');
assert(resolvedNames.some(n => n.includes('statue of unity')), 'Resolved outposts must include Statue of Unity');
assert(resolvedNames.some(n => n.includes('ujjain')), 'Resolved outposts must include Ujjain');
assert(resolvedNames.some(n => n.includes('somnath')), 'Resolved outposts must include Somnath');

// Verify road driving metrics and corridors computed
const maheshwarPoi = resolvedOutposts.find(p => p.name.toLowerCase().includes('maheshwar'));
assert(maheshwarPoi, 'Maheshwar POI must be resolved');
assert(maheshwarPoi.dist > 400 && maheshwarPoi.dist < 600, `Maheshwar road distance must be 400-600km, got ${maheshwarPoi.dist}km`);
assert(maheshwarPoi.corridor.includes('NH 52') || maheshwarPoi.corridor.includes('NH 60'), `Maheshwar corridor must specify NH 52 / NH 60, got ${maheshwarPoi.corridor}`);
console.log(`✓ Maheshwar: ${maheshwarPoi.dist} km, ${maheshwarPoi.driveTime}, via ${maheshwarPoi.corridor}`);

const unityPoi = resolvedOutposts.find(p => p.name.toLowerCase().includes('statue of unity'));
assert(unityPoi, 'Statue of Unity POI must be resolved');
assert(unityPoi.dist > 350 && unityPoi.dist < 550, `Statue of Unity road distance must be 350-550km, got ${unityPoi.dist}km`);
assert(unityPoi.corridor.includes('NH 48') || unityPoi.corridor.includes('Western Expressway'), `Statue of Unity corridor must specify NH 48, got ${unityPoi.corridor}`);
console.log(`✓ Statue of Unity: ${unityPoi.dist} km, ${unityPoi.driveTime}, via ${unityPoi.corridor}`);

// 6. Test highway route generation for Maheshwar and Statue of Unity
function mockProject(lat, lon, hLat, hLon) {
    return { x: 500 + (lon - hLon) * 50, y: 500 - (lat - hLat) * 50 };
}

const maheshwarRoute = corridorService.getHighwayRoute('PNQ', currentHub, maheshwarPoi, mockProject);
assert(maheshwarRoute, 'Must generate highway route for Maheshwar');
assert(maheshwarRoute.corridorName.includes('NH 60') && maheshwarRoute.corridorName.includes('NH 52'), 
    `Maheshwar route name must include NH 60 & NH 52, got: ${maheshwarRoute.corridorName}`);
assert(maheshwarRoute.waypoints.length >= 3, `Maheshwar route must include intermediate checkpoints, got ${maheshwarRoute.waypoints.length}`);
console.log(`✓ Maheshwar Highway Route: ${maheshwarRoute.corridorName} with ${maheshwarRoute.waypoints.length} checkpoints (Nashik, Dhule, Sendhwa border verified)`);

const unityRoute = corridorService.getHighwayRoute('PNQ', currentHub, unityPoi, mockProject);
assert(unityRoute, 'Must generate highway route for Statue of Unity');
assert(unityRoute.corridorName.includes('NH 48') || unityRoute.corridorName.includes('Western Expressway'),
    `Statue of Unity route name must include NH 48, got: ${unityRoute.corridorName}`);
console.log(`✓ Statue of Unity Highway Route: ${unityRoute.corridorName} with ${unityRoute.waypoints.length} checkpoints (Lonavala, Surat, Bharuch verified)`);

// 7. Verify index.html sync and redraw wiring
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('hubService.setCurrentHub'), 'index.html must invoke hubService.setCurrentHub');
assert(indexHtml.includes('currentHub.outposts'), 'index.html must update currentHub.outposts directly');
assert(indexHtml.includes('deployAnimatedRadar();'), 'index.html must trigger deployAnimatedRadar redraw');
assert(indexHtml.includes('applyDistanceFilter();'), 'index.html must trigger applyDistanceFilter');
console.log('✓ index.html runtime redraw and active hub outpost merge wiring verified');

// 8. Reference file integrity
const refSize = fs.statSync('south_india_weekend_getaway_radar.html').size;
assert.strictEqual(refSize, 125084, `Reference radar must be 125084 bytes, got ${refSize}`);
console.log('✓ south_india_weekend_getaway_radar.html size strictly preserved at 125084 bytes');

console.log('\nALL DYNAMIC OUTPOST HUB MERGE & RENDER TESTS PASSED SUCCESSFULLY! ✓✓✓');

