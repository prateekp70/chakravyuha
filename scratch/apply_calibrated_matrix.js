const fs = require('fs');

const servicePath = 'data/hub_service.js';
let content = fs.readFileSync(servicePath, 'utf8');

const newMatrix = JSON.parse(fs.readFileSync('scratch/calibrated_road_matrix.json', 'utf8'));
const matrixStr = JSON.stringify(newMatrix);

// Replace this.ROAD_MATRIX = {...};
const matrixRegex = /this\.ROAD_MATRIX\s*=\s*\{[\s\S]*?\};/;
if (!matrixRegex.test(content)) {
    console.error("Could not find this.ROAD_MATRIX in data/hub_service.js");
    process.exit(1);
}

content = content.replace(matrixRegex, `this.ROAD_MATRIX = ${matrixStr};`);

// Update fallback model in calculateRoadMetrics
const oldFallback = `        // 2. Calibrated Road Network Circuity Model (fallback for dynamic POIs/Hubs)
        let circuity = 1.21;
        let speed = 62;

        if (poi.cat === 'hill') {
            circuity = 1.38;
            speed = 46;
        } else if (poi.cat === 'nature') {
            circuity = 1.28;
            speed = 52;
        } else if (poi.cat === 'coastal') {
            circuity = 1.25;
            speed = 58;
        } else if (poi.cat === 'quick') {
            circuity = 1.26;
            speed = 42;
        }

        const exitPenalty = airDist < 80 ? 12 : 0;
        const roadDist = Math.round(airDist * circuity + exitPenalty);
        const hrs = roadDist / speed;
        const h = Math.floor(hrs);
        const m = Math.round((hrs - h) * 60);

        return {
            roadDist,
            driveTime: \`\${h}h \${m.toString().padStart(2, '0')}m\`,
            corridor: "National Highway"
        };`;

const newFallback = `        // 2. Calibrated Road Network Circuity Model (fallback for dynamic POIs/Hubs)
        let circuity = 1.26;
        let speed = 52;
        let corridor = "National / State Highway";

        if (hubKey === 'MAA' && poi.lon < 77.8 && poi.lat > 11.5 && poi.lat < 14.5) {
            circuity = 1.30;
            speed = 50;
            corridor = "NH 48 via Krishnagiri";
        } else if (hubKey === 'HYD' && poi.lat < 13.5) {
            circuity = 1.28;
            speed = 54;
            corridor = "NH 44 South via Bengaluru";
        } else if (poi.cat === 'hill') {
            circuity = 1.38;
            speed = 40;
            corridor = "National Highway & Ghat Pass";
        } else if (poi.cat === 'nature') {
            circuity = 1.30;
            speed = 46;
            corridor = "Highway & Forest Reserve Corridor";
        } else if (poi.cat === 'coastal') {
            circuity = 1.28;
            speed = 48;
            corridor = "Coastline Highway Corridor";
        } else if (poi.cat === 'quick' && airDist < 90) {
            circuity = 1.30;
            speed = 38;
            corridor = "Regional Expressway / State Route";
        }

        const exitPenalty = airDist < 60 ? 12 : 0;
        const roadDist = Math.round(airDist * circuity + exitPenalty);
        const hrs = roadDist / speed;
        const h = Math.floor(hrs);
        const m = Math.round((hrs - h) * 60);

        return {
            roadDist,
            driveTime: \`\${h}h \${m.toString().padStart(2, '0')}m\`,
            corridor
        };`;

if (content.includes(oldFallback)) {
    content = content.replace(oldFallback, newFallback);
    console.log("Updated fallback model in calculateRoadMetrics");
} else {
    console.log("Fallback model pattern not matched verbatim; skipping fallback replace or already updated");
}

fs.writeFileSync(servicePath, content);
console.log("Updated data/hub_service.js successfully!");

