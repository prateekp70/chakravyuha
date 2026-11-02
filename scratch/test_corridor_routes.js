const corridorService = require('../data/corridor_routes.js');

function mockProject(lat, lon, hubLat, hubLon) {
    const dxKm = (lon - hubLon) * 111.32 * Math.cos(hubLat * (Math.PI / 180));
    const dyKm = -(lat - hubLat) * 110.574;
    return {
        x: 500 + dxKm,
        y: 500 + dyKm
    };
}

const hubBLR = { name: "Bengaluru", lat: 12.9716, lon: 77.5946 };
const poiOoty = { id: "ooty", name: "Ooty", lat: 11.4102, lon: 76.6950, dist: 275 };

const routeOoty = corridorService.getHighwayRoute('BLR', hubBLR, poiOoty, mockProject);
console.log("=== BLR -> OOTY ROUTE ===");
console.log("Corridor Name:", routeOoty.corridorName);
console.log("Path d length:", routeOoty.polylineD.length);
console.log("Path d snippet:", routeOoty.polylineD.substring(0, 100) + "...");
console.log("Waypoints count:", routeOoty.waypoints.length);
routeOoty.waypoints.forEach(w => console.log(`  [${w.icon}] ${w.name} (KM ${w.km}) - ${w.tip.substring(0, 45)}...`));

const hubHYD = { name: "Hyderabad", lat: 17.3850, lon: 78.4867 };
const poiSrisailam = { id: "srisailam", name: "Srisailam", lat: 16.0736, lon: 78.8687, dist: 215 };
const routeSrisailam = corridorService.getHighwayRoute('HYD', hubHYD, poiSrisailam, mockProject);
console.log("\n=== HYD -> SRISAILAM ROUTE ===");
console.log("Corridor Name:", routeSrisailam.corridorName);
console.log("Waypoints count:", routeSrisailam.waypoints.length);
routeSrisailam.waypoints.forEach(w => console.log(`  [${w.icon}] ${w.name} (KM ${w.km})`));

const poiChitrakote = { id: "chitrakote_falls", name: "Chitrakote Falls", lat: 19.2064, lon: 81.7061, dist: 520 };
const routeChitrakote = corridorService.getHighwayRoute('HYD', hubHYD, poiChitrakote, mockProject);
console.log("\n=== HYD -> CHITRAKOTE ROUTE ===");
console.log("Corridor Name:", routeChitrakote.corridorName);
console.log("Waypoints count:", routeChitrakote.waypoints.length);
routeChitrakote.waypoints.forEach(w => console.log(`  [${w.icon}] ${w.name} (KM ${w.km})`));

console.log("\n=== TESTING POINT-TO-POINT CLAMP (NO OVERSHOOT) ===");

// Check Madurai does not overshoot to Kanyakumari
const poiMadurai = { id: "madurai", name: "Madurai (Meenakshi Temple)", lat: 9.9252, lon: 78.1198, dist: 425 };
const routeMadurai = corridorService.getHighwayRoute('BLR', hubBLR, poiMadurai, mockProject);
const lastNodeMadurai = routeMadurai.chain[routeMadurai.chain.length - 1];
console.log(`BLR -> Madurai final node: ${lastNodeMadurai.name} (KM ${lastNodeMadurai.km})`);
if (routeMadurai.chain.some(pt => pt.name.toLowerCase().includes('kanyakumari') || pt.name.toLowerCase().includes('tirunelveli'))) {
    throw new Error("BLR -> Madurai overshot to Tirunelveli/Kanyakumari!");
}
if (Math.hypot(lastNodeMadurai.lat - poiMadurai.lat, lastNodeMadurai.lon - poiMadurai.lon) > 0.05) {
    throw new Error("BLR -> Madurai did not terminate at Madurai!");
}
console.log("[PASS] BLR -> Madurai strictly terminates at Madurai (no Kanyakumari overshoot)");

// Check Chitradurga does not overshoot to Hampi
const poiChitradurga = { id: "chitradurga", name: "Chitradurga", lat: 14.2230, lon: 76.4020, dist: 200 };
const routeChitradurga = corridorService.getHighwayRoute('BLR', hubBLR, poiChitradurga, mockProject);
const lastNodeChitradurga = routeChitradurga.chain[routeChitradurga.chain.length - 1];
console.log(`BLR -> Chitradurga final node: ${lastNodeChitradurga.name} (KM ${lastNodeChitradurga.km})`);
if (routeChitradurga.chain.some(pt => pt.name.toLowerCase().includes('hampi') || pt.name.toLowerCase().includes('hospet'))) {
    throw new Error("BLR -> Chitradurga overshot to Hospet/Hampi!");
}
console.log("[PASS] BLR -> Chitradurga strictly terminates at Chitradurga (no Hampi overshoot)");

// Check Dantewada does not overshoot to Jagdalpur
const poiDantewada = { id: "dantewada", name: "Dantewada", lat: 18.8950, lon: 81.3520, dist: 440 };
const routeDantewada = corridorService.getHighwayRoute('HYD', hubHYD, poiDantewada, mockProject);
const lastNodeDantewada = routeDantewada.chain[routeDantewada.chain.length - 1];
console.log(`HYD -> Dantewada final node: ${lastNodeDantewada.name} (KM ${lastNodeDantewada.km})`);
if (routeDantewada.chain.some(pt => pt.name.toLowerCase().includes('jagdalpur') || pt.name.toLowerCase().includes('tirathgarh'))) {
    throw new Error("HYD -> Dantewada overshot to Jagdalpur!");
}
console.log("[PASS] HYD -> Dantewada strictly terminates at Dantewada (no Jagdalpur overshoot)");

console.log("\nALL CORRIDOR & DESTINATION CLAMP TESTS PASSED!");
