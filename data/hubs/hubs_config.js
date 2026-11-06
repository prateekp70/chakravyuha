/**
 * Metro Origins Configuration — Regional GIS Anchor Hubs
 * 
 * Lightweight metro identities and coordinate centers.
 * All destination outposts are dynamically resolved from the Master National POI catalog.
 */
(function (root, factory) {
    const data = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = data;
    }
    if (typeof root !== 'undefined' && root.hubService) {
        data.forEach(h => root.hubService.registerHub(h));
    }
    if (typeof window !== 'undefined') {
        window.HUBS_CONFIG = data;
        if (window.hubService) {
            data.forEach(h => window.hubService.registerHub(h));
        }
    }
})(typeof self !== 'undefined' ? self : this, function () {
    return [
        {
            key: "BLR",
            name: "Bengaluru",
            fullName: "Bengaluru (Bangalore)",
            lat: 12.9716,
            lon: 77.5946,
            elev: "920m Deccan Plateau"
        },
        {
            key: "HYD",
            name: "Hyderabad",
            fullName: "Hyderabad (Deccan Metro)",
            lat: 17.3850,
            lon: 78.4867,
            elev: "540m Deccan Granite Ridge"
        },
        {
            key: "MAA",
            name: "Chennai",
            fullName: "Chennai (Madras / Coromandel)",
            lat: 13.0827,
            lon: 80.2707,
            elev: "Sea Level Coromandel Coast"
        },
        {
            key: "PNQ",
            name: "Pune",
            fullName: "Pune (Sahyadri Foothills / Western Ghats Hub)",
            lat: 18.5204,
            lon: 73.8567,
            elev: "560m Sahyadri Foothills / Deccan Plateau",
            scoutingRadiusKm: 120,
            maxScoutingRadiusKm: 700
        }
    ];
});

