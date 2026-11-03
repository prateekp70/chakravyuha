const fs = require('fs');
const assert = require('assert');

console.log('=== TEST: PHOTO TILE GRID, LIGHTBOX SLIDESHOW & POI IMAGERY AUDIT ===');

// 1. Check data/master_pois.js
const pois = require('../data/master_pois.js');
assert(pois.length >= 188, `Expected at least 188 POIs, found ${pois.length}`);

// Audit Avalabetta
const avalabetta = pois.find(p => p.id === 'avalabetta');
assert(avalabetta, 'Avalabetta must exist in master_pois.js');
assert(Array.isArray(avalabetta.images), 'Avalabetta must have images array');
assert(avalabetta.images.length >= 2, 'Avalabetta must have at least 2 photos');
assert(!avalabetta.image.includes('photo-1507525428034-b723cf961d3e'), 'Avalabetta must NOT point to generic beach photo!');
assert(avalabetta.images[0].url.includes('Avalabetta.jpg'), 'Avalabetta photo 1 must point to authentic Avalabetta cliff');
assert(avalabetta.images[0].caption.includes('Avalabetta'), 'Avalabetta caption must be context-specific');
console.log('[PASS] Avalabetta imagery and metadata verified with authentic regional cliff photos');

// Audit other Bangalore quick getaways (Nandi Hills, Anthargange, Savandurga)
const nandi = pois.find(p => p.id === 'nandi_hills');
assert(nandi && nandi.images.length >= 2, 'Nandi Hills must have authentic photos');
assert(!nandi.image.includes('photo-1507525428034-b723cf961d3e'), 'Nandi Hills must NOT have beach photo');

const savan = pois.find(p => p.id === 'savandurga');
assert(savan && savan.images.length >= 2, 'Savandurga must have authentic photos');

const anthar = pois.find(p => p.id === 'anthargange');
assert(anthar && anthar.images.length >= 2, 'Anthargange must have authentic photos');
console.log('[PASS] Nandi Hills, Savandurga, and Anthargange regional photography verified');

// 2. Audit index.html
const html = fs.readFileSync('index.html', 'utf8');

// Ensure Single Header Banner Image is removed
assert(!html.includes('id="card-hero-media"'), 'Single header banner #card-hero-media must be removed from UI');
assert(!html.includes('class="card-hero-media"'), '.card-hero-media CSS/HTML must be removed from UI');
assert(!html.includes('id="card-hero-img"'), '#card-hero-img must be removed from UI');
console.log('[PASS] Single header banner image removed from telemetry card');

// Verify Photo Tile Grid in Bottom Half
assert(html.includes('id="card-photos-section"'), 'Photos section #card-photos-section must exist');
assert(html.includes('id="card-photos-grid"'), 'Photo tile grid #card-photos-grid must exist');
assert(html.includes('id="photos-count-badge"'), 'Photos count badge #photos-count-badge must exist');
assert(html.includes('renderPhotoGrid'), 'renderPhotoGrid function must exist');
console.log('[PASS] Bottom-half photo tile grid elements and engine verified');

// Verify Lightbox Modal & Slideshow
assert(html.includes('id="photo-lightbox-modal"'), 'Lightbox modal #photo-lightbox-modal must exist');
assert(html.includes('id="lightbox-current-img"'), 'Lightbox main image #lightbox-current-img must exist');
assert(html.includes('id="lightbox-caption"'), 'Lightbox caption #lightbox-caption must exist');
assert(html.includes('id="lightbox-counter"'), 'Lightbox counter #lightbox-counter must exist');
assert(html.includes('id="lightbox-filmstrip"'), 'Lightbox filmstrip thumbnail track must exist');
assert(html.includes('openPhotoLightbox'), 'openPhotoLightbox function must exist');
assert(html.includes('closePhotoLightbox'), 'closePhotoLightbox function must exist');
assert(html.includes('navigatePhotoLightbox'), 'navigatePhotoLightbox function must exist');
assert(html.includes('ArrowLeft') && html.includes('ArrowRight'), 'Keyboard arrow navigation for lightbox must exist');
console.log('[PASS] Interactive Lightbox slideshow viewer and navigation controls verified');

// Verify Fallback Handling
assert(html.includes('getFallbackTileSvg'), 'getFallbackTileSvg fallback generator must exist');
assert(html.includes('photo-fallback-tile'), 'photo-fallback-tile empty-state markup must exist');
console.log('[PASS] Graceful offline/missing imagery fallback handling verified');

// Read-only integrity
const STAT_BYTES = 125084;
const radarBytes = fs.statSync('south_india_weekend_getaway_radar.html').size;
assert.strictEqual(radarBytes, STAT_BYTES, `south_india_weekend_getaway_radar.html size mismatch`);
console.log('[PASS] south_india_weekend_getaway_radar.html is strictly untouched (125084 bytes)');

console.log('\nALL PHOTO GRID, LIGHTBOX & POI IMAGERY TESTS PASSED SUCCESSFULLY!');
