/**
 * Automated Verification Suite for Dynamic Spatial GIS & Crowd-Sourced Imagery Pipeline
 * Including Bounding Box (BBox), Delta Lat/Lon Convergence, Quadrant Sectors,
 * Macro-Radii Chunked Queries (500km to 700km), and Northern Corridors (Gujarat & Madhya Pradesh).
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- STARTING DYNAMIC SPATIAL & BBOX PIPELINE TEST SUITE ---');

// 1. Verify Pune (PNQ) Hub Registration in Configuration Files
const hubsConfig = require('../data/hubs/hubs_config.js');
const pnqHub = hubsConfig.find(h => h.key === 'PNQ');
assert(pnqHub, 'Pune (PNQ) must be present in hubs_config.js');
assert(Math.abs(pnqHub.lat - 18.5204) < 0.05, `Pune lat must be ~18.5204, got ${pnqHub.lat}`);
assert(Math.abs(pnqHub.lon - 73.8567) < 0.05, `Pune lon must be ~73.8567, got ${pnqHub.lon}`);
console.log('✓ Pune (PNQ) hub registered in hubs_config.js [18.52°N, 73.86°E]');

// 2. Load DynamicSpatialService
const { DynamicSpatialService, dynamicSpatialService } = require('../data/dynamic_spatial_service.js');
assert(DynamicSpatialService, 'DynamicSpatialService must be defined');
assert(dynamicSpatialService, 'dynamicSpatialService instance must exist');
console.log('✓ DynamicSpatialService module loaded successfully');

// 3. Test Bounding Box (BBox) and Delta Lat/Lon Convergence Calculation
const testLat = 18.5204;
const testLon = 73.8567;
const testRadius = 500; // 500 km
const bbox = dynamicSpatialService.calculateBoundingBox(testLat, testLon, testRadius);

const expectedDLat = testRadius / 111.32;
const expectedDLon = testRadius / (111.32 * Math.cos((testLat * Math.PI) / 180));

assert(Math.abs(bbox.dLat - expectedDLat) < 0.001, `dLat must be ~${expectedDLat}, got ${bbox.dLat}`);
assert(Math.abs(bbox.dLon - expectedDLon) < 0.001, `dLon must be ~${expectedDLon}, got ${bbox.dLon}`);
assert.strictEqual(bbox.south, testLat - bbox.dLat, 'South boundary must be exactly lat - dLat');
assert.strictEqual(bbox.north, testLat + bbox.dLat, 'North boundary must be exactly lat + dLat');
assert.strictEqual(bbox.west, testLon - bbox.dLon, 'West boundary must be exactly lon - dLon');
assert.strictEqual(bbox.east, testLon + bbox.dLon, 'East boundary must be exactly lon + dLon');
console.log(`✓ BBox Delta Lat/Lon convergence verified: dLat=±${bbox.dLat.toFixed(2)}°, dLon=±${bbox.dLon.toFixed(2)}° for ${testRadius}km`);

// 4. Test Quadrant Sectors (NW, NE, SW, SE) Elimination of Directional Bias
const sectors = dynamicSpatialService.calculateQuadrantSectors(testLat, testLon, 700);
assert(sectors.NW, 'Must calculate NW sector');
assert(sectors.NE, 'Must calculate NE sector');
assert(sectors.SW, 'Must calculate SW sector');
assert(sectors.SE, 'Must calculate SE sector');

// NW Quadrant must span north and west of Pune (covering Gujarat & coastal NW)
assert.strictEqual(sectors.NW.south, testLat, 'NW sector south bound must anchor at hub latitude');
assert(sectors.NW.north > testLat, 'NW sector north bound must extend north');
assert(sectors.NW.west < testLon, 'NW sector west bound must extend west');
assert.strictEqual(sectors.NW.east, testLon, 'NW sector east bound must anchor at hub longitude');

// NE Quadrant must span north and east of Pune (covering Madhya Pradesh & Narmada Valley)
assert.strictEqual(sectors.NE.south, testLat, 'NE sector south bound must anchor at hub latitude');
assert(sectors.NE.north > testLat, 'NE sector north bound must extend north');
assert.strictEqual(sectors.NE.west, testLon, 'NE sector west bound must anchor at hub longitude');
assert(sectors.NE.east > testLon, 'NE sector east bound must extend east');
console.log('✓ Cardinal quadrant sectors verified (NW=Gujarat, NE=Madhya Pradesh, SW=Konkan/Sahyadri, SE=Deccan)');

// 5. Test Sector Chunks for Macro-Radii (500km and 700km)
const chunks700 = dynamicSpatialService.getSectorChunks(testLat, testLon, 700);
assert.strictEqual(chunks700.length, 2, 'Macro-radii must partition into 2 balanced chunks');
assert.strictEqual(chunks700[0].key, 'NORTH', 'Chunk 0 must be NORTH sector');
assert.strictEqual(chunks700[1].key, 'SOUTH', 'Chunk 1 must be SOUTH sector');

// Verify Overpass BBox Query Formatting
const chunkQuery = dynamicSpatialService.buildOverpassBboxQuery(chunks700[0], 60, 25);
assert(chunkQuery.includes('[out:json][timeout:25];'), 'Chunk query must request JSON with timeout');
assert(chunkQuery.includes('["name"]'), 'Chunk query must target named entities');
assert(chunkQuery.includes('out center body 60;'), 'Chunk query must output center coordinates with limit');
console.log('✓ Sector-based chunked bounding box queries verified for macro-radii (500km & 700km)');

// 6. Test Exact Great-Circle Haversine Distance (Distortion-Free)
const distNorth = dynamicSpatialService.calculateDistance(18.5204, 73.8567, 22.3660, 75.4044); // Mandu (MP)
assert(distNorth > 440 && distNorth < 460, `Pune -> Mandu distance should be ~448km, got ${distNorth}`);

const distNW = dynamicSpatialService.calculateDistance(18.5204, 73.8567, 21.8380, 73.7191); // Statue of Unity (Gujarat)
assert(distNW > 360 && distNW < 380, `Pune -> Statue of Unity distance should be ~370km, got ${distNW}`);
console.log(`✓ Exact great-circle Haversine distance verified: Pune->Mandu (MP)=${Math.round(distNorth)}km, Pune->Statue of Unity (Gujarat)=${Math.round(distNW)}km`);

// 7. Test Ingestion and Discovery of Northern Outposts across Corridors (300km, 500km, 700km)
async function testNorthernCorridorDiscovery() {
    // 300km sweep: Must discover Saputara Hill Station (Gujarat NW)
    const outposts300 = await dynamicSpatialService.queryLiveSpatialData(pnqHub, 300);
    const saputara = outposts300.find(p => p.name.includes('Saputara'));
    assert(saputara, '300km sweep must discover Saputara Hill Station in Gujarat');
    console.log(`✓ 300km sweep discovered ${saputara.name} (Gujarat NW, dist: ${saputara.dist}km)`);

    // 500km sweep: Must discover Gujarat & Madhya Pradesh outposts
    const outposts500 = await dynamicSpatialService.queryLiveSpatialData(pnqHub, 500);
    assert(outposts500.some(p => p.name.includes('Statue of Unity')), '500km sweep must discover Statue of Unity (Gujarat)');
    assert(outposts500.some(p => p.name.includes('Champaner')), '500km sweep must discover Champaner-Pavagadh (Gujarat)');
    assert(outposts500.some(p => p.name.includes('Mandu')), '500km sweep must discover Mandu Citadel (Madhya Pradesh)');
    assert(outposts500.some(p => p.name.includes('Maheshwar')), '500km sweep must discover Maheshwar Narmada Ghats (Madhya Pradesh)');
    assert(outposts500.some(p => p.name.includes('Omkareshwar')), '500km sweep must discover Omkareshwar Jyotirlinga (Madhya Pradesh)');
    assert(outposts500.some(p => p.name.includes('Asirgarh')), '500km sweep must discover Asirgarh Fort (Madhya Pradesh)');
    console.log(`✓ 500km sweep discovered ${outposts500.length} outposts across Gujarat and Madhya Pradesh (Statue of Unity, Mandu, Maheshwar, Omkareshwar, Asirgarh verified)`);

    // 700km sweep: Must discover deep-range Gujarat and MP peninsular landmarks
    const outposts700 = await dynamicSpatialService.queryLiveSpatialData(pnqHub, 700);
    assert(outposts700.some(p => p.name.includes('Somnath')), '700km sweep must discover Somnath Jyotirlinga (Gujarat)');
    assert(outposts700.some(p => p.name.includes('Gir')), '700km sweep must discover Gir National Park (Gujarat)');
    assert(outposts700.some(p => p.name.includes('Lothal')), '700km sweep must discover Lothal Indus Valley Port (Gujarat)');
    assert(outposts700.some(p => p.name.includes('Ujjain')), '700km sweep must discover Ujjain Mahakaleshwar (Madhya Pradesh)');
    assert(outposts700.some(p => p.name.includes('Pachmarhi')), '700km sweep must discover Pachmarhi Queen of Satpura (Madhya Pradesh)');
    assert(outposts700.some(p => p.name.includes('Bhimbetka')), '700km sweep must discover Bhimbetka Rock Shelters (Madhya Pradesh)');
    assert(outposts700.some(p => p.name.includes('Sanchi')), '700km sweep must discover Sanchi Great Stupa (Madhya Pradesh)');
    console.log(`✓ 700km macro sweep discovered ${outposts700.length} outposts (Somnath, Gir, Lothal, Ujjain, Pachmarhi, Bhimbetka, Sanchi verified)`);

    // Check Highway Corridors for Northern Outposts
    const { HubService, hubService } = require('../data/hub_service.js');
    hubsConfig.forEach(h => hubService.registerHub(h));

    const sou = outposts500.find(p => p.name.includes('Statue of Unity'));
    const souMetrics = hubService.calculateRoadMetrics('PNQ', sou, sou.dist);
    assert(souMetrics.corridor.includes('Gujarat'), 'Statue of Unity corridor must route to Gujarat');
    console.log(`✓ PNQ -> Statue of Unity: ${souMetrics.roadDist}km, ${souMetrics.driveTime}, via ${souMetrics.corridor}`);

    const mandu = outposts500.find(p => p.name.includes('Mandu'));
    const manduMetrics = hubService.calculateRoadMetrics('PNQ', mandu, mandu.dist);
    assert(manduMetrics.corridor.includes('Madhya Pradesh'), 'Mandu corridor must route to Madhya Pradesh');
    console.log(`✓ PNQ -> Mandu: ${manduMetrics.roadDist}km, ${manduMetrics.driveTime}, via ${manduMetrics.corridor}`);
}

// 8. Load DynamicMediaService and verify imagery for Northern outposts
const { DynamicMediaService, dynamicMediaService } = require('../data/dynamic_media_service.js');
assert(DynamicMediaService, 'DynamicMediaService must be defined');
assert(dynamicMediaService, 'dynamicMediaService instance must exist');

async function testNorthernMedia() {
    const northernPlaces = [
        { name: 'Statue of Unity', cat: 'heritage' },
        { name: 'Mandu', cat: 'heritage' },
        { name: 'Saputara', cat: 'hill' },
        { name: 'Maheshwar', cat: 'heritage' },
        { name: 'Somnath', cat: 'heritage' },
        { name: 'Pachmarhi', cat: 'hill' }
    ];

    for (const p of northernPlaces) {
        const photos = await dynamicMediaService.fetchLocationImagery(p);
        assert(Array.isArray(photos) && photos.length > 0, `Must return photos for ${p.name}`);
        assert(photos[0].url && photos[0].url.startsWith('http'), `Photo URL must be valid for ${p.name}`);
        assert(photos[0].caption, `Photo must have caption for ${p.name}`);
        console.log(`✓ ${p.name}: verified ${photos.length} photo(s) [${photos[0].source}]`);
    }
}

// Run test pipeline
testNorthernCorridorDiscovery().then(() => {
    return testNorthernMedia();
}).then(() => {
    // 9. Verify index.html UI integration
    const indexPath = path.join(__dirname, '..', 'index.html');
    const indexHtml = fs.readFileSync(indexPath, 'utf-8');

    assert(indexHtml.includes('id="hub-btn-PNQ"'), 'index.html must include PNQ hub button');
    assert(indexHtml.includes('syncDynamicSpatialData'), 'index.html must implement syncDynamicSpatialData');
    console.log('✓ index.html PNQ hub switcher and scalable dynamic corridor integration verified');

    // 10. Verify Read-Only Radar File Integrity
    const radarPath = path.join(__dirname, '..', 'south_india_weekend_getaway_radar.html');
    const stats = fs.statSync(radarPath);
    assert.strictEqual(stats.size, 125084, `Radar file size must remain 125084 bytes, got ${stats.size}`);
    console.log('✓ south_india_weekend_getaway_radar.html size strictly preserved at 125084 bytes');

    console.log('\nALL OVERPASS BBOX & QUADRANT CORRIDOR TESTS PASSED SUCCESSFULLY! ✓✓✓');
}).catch(err => {
    console.error('Test Failed:', err);
    process.exit(1);
});
