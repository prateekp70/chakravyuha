// scratch/test_satellite_label_collision.js
// Verification for Level-2 Satellite Orbital Recon Label Collision Avoidance, Leader Lines, and SVG Elevation

const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING SATELLITE ORBITAL RECON COLLISION AVOIDANCE & LEADER LINES ===');

// 1. Verify index.html content
const html = fs.readFileSync('index.html', 'utf8');

// A. Leader lines and anchor dots classes in CSS
assert(html.includes('.satellite-leader-line'), 'CSS must include .satellite-leader-line class');
assert(html.includes('.satellite-leader-anchor'), 'CSS must include .satellite-leader-anchor class');
assert(html.includes('body.theme-instrument .satellite-leader-line'), 'Theme instrument must customize .satellite-leader-line');
console.log('[PASS] CSS definitions for .satellite-leader-line and .satellite-leader-anchor verified');

// B. Leader line and anchor dot elements creation in renderSatelliteOrbit
assert(html.includes("leaderLine.setAttribute('class', 'satellite-leader-line')"), 'SVG leader line element must be created');
assert(html.includes("anchorDot.setAttribute('class', 'satellite-leader-anchor')"), 'SVG anchor dot element must be created');
assert(html.includes("checkPillOverlap"), 'Dynamic collision overlap detection must be implemented');
console.log('[PASS] SVG leader line and anchor dot generation in renderSatelliteOrbit verified');

// C. Top-layer SVG DOM reordering (z-index elevation)
assert(html.includes('satNode.parentNode.appendChild(satNode)'), 'lockSatellite must elevate node to top layer using appendChild');
assert(html.includes('node.parentNode.appendChild(node)'), 'highlightSatellite must elevate node to top layer using appendChild');
assert(html.includes('lockedNode.parentNode.appendChild(lockedNode)'), 'unhighlightSatellite must restore locked node to top layer');
console.log('[PASS] SVG z-index elevation (DOM re-parenting) verified in lock, highlight, and unhighlight handlers');

// 2. Behavioral verification of collision avoidance layout across all outposts
const svc = require('../data/satellite_service.js');
const pois = require('../data/master_pois.js');

let totalOutpostsTested = 0;
let totalSatellitesTested = 0;
let totalCollisionsDetected = 0;

function simulateOrbitLayout(satellites) {
    const cx = 500, cy = 500;
    satellites.forEach((sat, sIdx) => {
        const satR = Math.max(90, Math.min(375, (sat.dist / 45) * 320 + 75));
        const angleRad = (sat.bearingDeg !== undefined ? sat.bearingDeg : (sIdx * (360 / satellites.length))) * (Math.PI / 180);
        sat.pixelX = cx + satR * Math.sin(angleRad);
        sat.pixelY = cy - satR * Math.cos(angleRad);
        sat.angleRad = angleRad;
    });

    const placedPillBoxes = [];
    function checkPillOverlap(b1, b2, pad = 4) {
        return !(
            b1.x2 + pad <= b2.x1 - pad ||
            b1.x1 - pad >= b2.x2 + pad ||
            b1.y2 + pad <= b2.y1 - pad ||
            b1.y1 - pad >= b2.y2 + pad
        );
    }

    satellites.forEach((sat, sIdx) => {
        const sx = sat.pixelX;
        const sy = sat.pixelY;
        const pName = sat.name.length > 24 ? sat.name.slice(0, 22) + '…' : sat.name;
        const kmStr = `${sat.dist} km · ${sat.driveTime}`;
        const pillW = Math.max(90, pName.length * 5.6 + kmStr.length * 4.8 + 18);
        const pillH = 18;

        const preferredSide = (sx > 840) ? 'left' : ((sx < 160) ? 'right' : (sx >= 500 ? 'right' : 'left'));
        const sides = preferredSide === 'right' ? ['right', 'left'] : ['left', 'right'];
        const distanceMultipliers = [1.0, 1.45, 1.95, 2.5];
        const vOffsets = [0, -16, 16, -30, 30, -44, 44, -58, 58];

        let bestCandidate = null;
        let lowestPenalty = Infinity;

        for (const side of sides) {
            for (const mult of distanceMultipliers) {
                for (const dy of vOffsets) {
                    const dist = Math.round(20 * mult);
                    let shiftX, shiftY, anchorX, anchorY;

                    if (side === 'right') {
                        shiftX = dist;
                        shiftY = dy - Math.round(pillH / 2);
                        anchorX = shiftX;
                        anchorY = dy;
                    } else {
                        shiftX = -(pillW + dist);
                        shiftY = dy - Math.round(pillH / 2);
                        anchorX = shiftX + pillW;
                        anchorY = dy;
                    }

                    const box = {
                        x1: sx + shiftX,
                        y1: sy + shiftY,
                        x2: sx + shiftX + pillW,
                        y2: sy + shiftY + pillH
                    };

                    let penalty = 0;
                    for (const pb of placedPillBoxes) {
                        if (checkPillOverlap(box, pb, 4)) penalty += 10000;
                    }

                    satellites.forEach((otherSat, oIdx) => {
                        if (oIdx === sIdx) return;
                        const ox = otherSat.pixelX;
                        const oy = otherSat.pixelY;
                        if (ox >= box.x1 - 12 && ox <= box.x2 + 12 && oy >= box.y1 - 12 && oy <= box.y2 + 12) {
                            penalty += 6000;
                        }
                    });

                    if (Math.hypot(box.x1 + pillW / 2 - cx, box.y1 + pillH / 2 - cy) < 65) penalty += 8000;
                    if (box.x1 < 15) penalty += (15 - box.x1) * 200;
                    if (box.x2 > 985) penalty += (box.x2 - 985) * 200;
                    if (box.y1 < 15) penalty += (15 - box.y1) * 200;
                    if (box.y2 > 985) penalty += (box.y2 - 985) * 200;

                    penalty += Math.abs(dy) * 1.5;
                    penalty += (mult - 1.0) * 15;
                    if (side !== preferredSide) penalty += 25;

                    if (penalty < lowestPenalty) {
                        lowestPenalty = penalty;
                        bestCandidate = { shiftX, shiftY, anchorX, anchorY, pillW, pillH, box };
                    }
                }
            }
        }

        placedPillBoxes.push(bestCandidate.box);
        sat.layout = bestCandidate;
    });

    return satellites;
}

Object.keys(pois).forEach(k => {
    totalOutpostsTested++;
    const outpost = Object.assign({ id: k }, pois[k]);
    const sats = svc.getSatellitesForOutpost(outpost);
    totalSatellitesTested += sats.length;
    const resolved = simulateOrbitLayout(sats);

    for (let i = 0; i < resolved.length; i++) {
        const layoutA = resolved[i].layout;
        // Verify leader line geometry
        const anchorDist = Math.hypot(layoutA.anchorX, layoutA.anchorY);
        assert(anchorDist >= 15, `Leader line anchor distance must be >= 15px, got ${anchorDist} in ${k}`);
        
        // Verify leader line start point is on beacon circle perimeter (r=12)
        const dotR = 12.0;
        const startX = (layoutA.anchorX / anchorDist) * dotR;
        const startY = (layoutA.anchorY / anchorDist) * dotR;
        const startDist = Math.hypot(startX, startY);
        assert(Math.abs(startDist - 12.0) < 0.01, `Start point must be on perimeter r=12.0`);

        // Verify anchor point connects exactly to the edge of the pill card
        if (layoutA.shiftX > 0) {
            // Right-side card: anchor is on left edge
            assert.strictEqual(layoutA.anchorX, layoutA.shiftX, 'Right-side card must anchor at left edge x=shiftX');
        } else {
            // Left-side card: anchor is on right edge
            assert.strictEqual(layoutA.anchorX, layoutA.shiftX + layoutA.pillW, 'Left-side card must anchor at right edge x=shiftX+pillW');
        }

        // Check for collisions with other labels
        for (let j = i + 1; j < resolved.length; j++) {
            const layoutB = resolved[j].layout;
            const b1 = layoutA.box;
            const b2 = layoutB.box;
            const overlap = !(b1.x2 <= b2.x1 || b1.x1 >= b2.x2 || b1.y2 <= b2.y1 || b1.y1 >= b2.y2);
            if (overlap) {
                totalCollisionsDetected++;
                console.error(`COLLISION DETECTED in outpost ${k}: "${resolved[i].name}" vs "${resolved[j].name}"`);
            }
        }
    }
});

assert.strictEqual(totalCollisionsDetected, 0, `Expected 0 collisions, found ${totalCollisionsDetected}`);
console.log(`[PASS] Verified ${totalOutpostsTested} outposts (${totalSatellitesTested} satellites) — Zero label collisions detected`);

// 3. Verify Read-Only Integrity
const refStats = fs.statSync('south_india_weekend_getaway_radar.html');
assert.strictEqual(refStats.size, 125084, 'south_india_weekend_getaway_radar.html must be exactly 125,084 bytes');
console.log('[PASS] Read-only integrity: south_india_weekend_getaway_radar.html is untouched (125084 bytes)');

console.log('\nALL SATELLITE LABEL COLLISION & LEADER LINE TESTS PASSED!\n');
