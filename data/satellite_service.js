/**
 * Tactical Satellite Outpost Orbital Reconnaissance & Hyper-Local Exploration Service
 * 
 * Provides Level-2 sub-regional attraction constellations, short-range road vectors,
 * micro-elevation terrain data, and local transit navigation for South Indian expedition outposts.
 */
(function (root, factory) {
    const service = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = service;
    } else if (typeof window !== 'undefined') {
        window.satelliteService = service;
    }
})(typeof self !== 'undefined' ? self : this, function () {

    const SATELLITE_REGISTRY = {
        sringeri: [
            {
                id: "sringeri-sharadamba-ghats",
                name: "Sharadamba Temple & Tunga River Ghats",
                dist: 1.2,
                driveTime: "~4m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "672m Tunga Riverbank",
                tip: "Sacred 8th-century temple complex established by Adi Shankara with crystal-clear Tunga river ghats and massive tame sacred Mahseer fish.",
                lat: 13.4187,
                lon: 75.2570,
                bearingDeg: 0
            },
            {
                id: "sringeri-kigga-temple",
                name: "Kigga & Sri Rishyashringa Shrine",
                dist: 9.8,
                driveTime: "~18m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "710m Foothills",
                tip: "Ancient sage shrine situated at the scenic base of Narasimha Parvatha peak; revered for bringing rain and agricultural prosperity.",
                lat: 13.3912,
                lon: 75.1950,
                bearingDeg: 235
            },
            {
                id: "sringeri-sirimane-falls",
                name: "Sirimane Mountain Waterfalls",
                dist: 14.5,
                driveTime: "~28m drive",
                cat: "nature",
                icon: "💧",
                elev: "780m Evergreen Canopy",
                tip: "Spectacular natural cascade fed by pristine Western Ghats streams through dense areca and coffee plantations with safe stepped bathing pools.",
                lat: 13.3855,
                lon: 75.2104,
                bearingDeg: 200
            },
            {
                id: "sringeri-hariharapura-bridge",
                name: "Hariharapura Matha & Hanging Bridge",
                dist: 18.2,
                driveTime: "~26m drive",
                cat: "heritage",
                icon: "🌉",
                elev: "630m River Valley",
                tip: "Scenic wooden suspension bridge spanning the churning Tunga river leading to a 600-year-old Adi Shankaracharya heritage ashram.",
                lat: 13.5042,
                lon: 75.3120,
                bearingDeg: 35
            },
            {
                id: "sringeri-kere-anjaneya",
                name: "Kere Anjaneya Swamy Hillock",
                dist: 2.4,
                driveTime: "~8m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "720m Summit Ridge",
                tip: "Elevated monolithic hillock offering panoramic 360° bird's-eye views over Sringeri valley, the temple towers, and Western Ghats ridges.",
                lat: 13.4250,
                lon: 75.2630,
                bearingDeg: 75
            },
            {
                id: "sringeri-kudremukh-base",
                name: "Kudremukh National Park Base",
                dist: 36.0,
                driveTime: "~1h 05m drive",
                cat: "nature",
                icon: "🌲",
                elev: "1100m Shola Grassland",
                tip: "Gateway to the UNESCO World Heritage rolling montane grasslands and horse-face mountain peak; emerald tea estates along the road.",
                lat: 13.2185,
                lon: 75.2530,
                bearingDeg: 180
            },
            {
                id: "sringeri-agumbe-sunset",
                name: "Agumbe Rainforest Sunset Point",
                dist: 26.5,
                driveTime: "~42m drive",
                cat: "hill",
                icon: "🌅",
                elev: "643m Coastal Ridge",
                tip: "World-renowned Western Ghats cliff-edge viewpoint offering jaw-dropping sunsets dropping directly into the Arabian Sea horizon.",
                lat: 13.5074,
                lon: 75.0939,
                bearingDeg: 305
            }
        ],

        ooty: [
            {
                id: "ooty-doddabetta-peak",
                name: "Doddabetta Peak Summit",
                dist: 9.4,
                driveTime: "~24m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "2637m Nilgiri Summit",
                tip: "Highest mountain in the Nilgiris range with an octagonal telescope house gazing across Tamil Nadu and Kerala valleys.",
                lat: 11.4010,
                lon: 76.7360,
                bearingDeg: 70
            },
            {
                id: "ooty-pykara-lake-falls",
                name: "Pykara Waterfalls & Lake",
                dist: 21.0,
                driveTime: "~42m drive",
                cat: "nature",
                icon: "💧",
                elev: "2180m Toda Highlands",
                tip: "Pristine sacred Toda river cascading through stepped granitic tiers into a calm mountain reservoir with speed boating.",
                lat: 11.4885,
                lon: 76.6020,
                bearingDeg: 310
            },
            {
                id: "ooty-avalanche-sanctuary",
                name: "Avalanche Lake & Reserve",
                dist: 23.8,
                driveTime: "~50m drive",
                cat: "nature",
                icon: "🌲",
                elev: "2250m Shola Valley",
                tip: "Unspoiled alpine lake flanked by dense rhododendron and pine forests, famous for trout angling and forest safari trails.",
                lat: 11.2980,
                lon: 76.5950,
                bearingDeg: 215
            },
            {
                id: "ooty-botanical-terraces",
                name: "Government Botanical Gardens",
                dist: 2.8,
                driveTime: "~10m drive",
                cat: "nature",
                icon: "🌺",
                elev: "2240m Lower Slopes",
                tip: "Historic 55-acre Victorian terraced garden featuring over 1,000 exotic floral species and a 20-million-year-old fossilized tree trunk.",
                lat: 11.4180,
                lon: 76.7110,
                bearingDeg: 25
            },
            {
                id: "ooty-kotagiri-catherine",
                name: "Kotagiri Catherine Falls",
                dist: 31.5,
                driveTime: "~1h 05m drive",
                cat: "nature",
                icon: "💧",
                elev: "1793m Tea Foothills",
                tip: "Dramatic double-cascading waterfall plunging 250 feet through verdant tea plantations; less crowded alternative to Ooty center.",
                lat: 11.4310,
                lon: 76.8850,
                bearingDeg: 85
            },
            {
                id: "ooty-glenmorgan-estate",
                name: "Glenmorgan Tea Estate & Ropeway",
                dist: 24.5,
                driveTime: "~48m drive",
                cat: "quick",
                icon: "☕",
                elev: "2100m Power Ridge",
                tip: "One of the oldest tea plantations in the Nilgiris; dramatic 3km mechanical ropeway view plunging down to the Singara powerhouse.",
                lat: 11.4740,
                lon: 76.6380,
                bearingDeg: 335
            }
        ],

        madurai: [
            {
                id: "madurai-thiruparankundram",
                name: "Thiruparankundram Rock-Cut Shrine",
                dist: 8.5,
                driveTime: "~20m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "180m Granite Crag",
                tip: "6th-century Pandya rock-cut cave temple carved directly into a solitary monolithic hill; first of the sacred Arupadaiveedu shrines.",
                lat: 9.8780,
                lon: 78.0710,
                bearingDeg: 210
            },
            {
                id: "madurai-alagar-kovil",
                name: "Alagar Kovil Kallazhagar Hills",
                dist: 21.4,
                driveTime: "~36m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "280m Forest Hills",
                tip: "Majestic Vishnu sanctuary fortified by massive stone battlements, tucked inside a natural forested valley of the Alagar range.",
                lat: 10.0760,
                lon: 78.2140,
                bearingDeg: 30
            },
            {
                id: "madurai-nayakkar-palace",
                name: "Thirumalai Nayakkar Mahal",
                dist: 2.5,
                driveTime: "~8m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "140m Royal Quarter",
                tip: "1636 CE architectural marvel blending Dravidian and Italianate Renaissance styles, supported by 82-foot-tall stucco pillars.",
                lat: 9.9150,
                lon: 78.1240,
                bearingDeg: 120
            },
            {
                id: "madurai-mariamman-teppakulam",
                name: "Vandiyur Mariamman Teppakulam",
                dist: 4.8,
                driveTime: "~12m drive",
                cat: "heritage",
                icon: "💧",
                elev: "135m City Basin",
                tip: "Massive historic square reservoir connected to Vaigai river by underground granite channels with an island garden pavilion (Maiya Mandapam).",
                lat: 9.9120,
                lon: 78.1520,
                bearingDeg: 100
            },
            {
                id: "madurai-kutladampatti-falls",
                name: "Kutladampatti Reserve Waterfalls",
                dist: 32.0,
                driveTime: "~48m drive",
                cat: "nature",
                icon: "💧",
                elev: "320m Reserve Hills",
                tip: "Picturesque 89-foot natural waterfall tucked inside protected Sirumalai reserve forest; accessible via scenic mango orchards.",
                lat: 10.1250,
                lon: 77.9850,
                bearingDeg: 330
            },
            {
                id: "madurai-pazhamudhircholai",
                name: "Pazhamudhircholai Hilltop Abode",
                dist: 24.0,
                driveTime: "~42m drive",
                cat: "nature",
                icon: "🌲",
                elev: "340m Upper Forest",
                tip: "Final abode of Murugan surrounded by dense green woods and the sacred natural spring Noopura Gangai.",
                lat: 10.0910,
                lon: 78.2280,
                bearingDeg: 35
            }
        ],

        chikmagalur: [
            {
                id: "cml-mullayanagiri",
                name: "Mullayanagiri Summit Peak",
                dist: 21.8,
                driveTime: "~44m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "1930m Karnataka Peak",
                tip: "The highest mountain peak in Karnataka; thrilling serpentine ghat ascent with 500-step climb to the summit temple and cloud sea.",
                lat: 13.3910,
                lon: 75.7210,
                bearingDeg: 330
            },
            {
                id: "cml-baba-budangiri",
                name: "Baba Budangiri & Manikyadhara",
                dist: 29.2,
                driveTime: "~55m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "1895m Crescent Range",
                tip: "Sacred mountain crescent where Sufi saint Baba Budan first planted seven raw coffee beans in India; perennial holy stream Manikyadhara.",
                lat: 13.4350,
                lon: 75.7680,
                bearingDeg: 345
            },
            {
                id: "cml-jhari-falls",
                name: "Jhari (Buttermilk) Falls",
                dist: 23.5,
                driveTime: "~50m drive",
                cat: "nature",
                icon: "💧",
                elev: "1420m Coffee Valley",
                tip: "Spectacular frothy white cascade dropping over tiered rocks in a private tea and coffee estate; accessible by 4WD jeep tracks.",
                lat: 13.4120,
                lon: 75.7480,
                bearingDeg: 338
            },
            {
                id: "cml-hebbe-falls",
                name: "Hebbe Falls (Kemmangundi)",
                dist: 54.0,
                driveTime: "~1h 35m drive",
                cat: "nature",
                icon: "💧",
                elev: "1200m Deep Reserve",
                tip: "Thunderous two-stage 550-foot waterfall inside Bhadra wildlife sanctuary; therapeutic mineral-rich plunge pool.",
                lat: 13.5480,
                lon: 75.7510,
                bearingDeg: 355
            },
            {
                id: "cml-hirekolale-lake",
                name: "Hirekolale Lake Mirror",
                dist: 10.2,
                driveTime: "~20m drive",
                cat: "nature",
                icon: "💧",
                elev: "1050m Valley Basin",
                tip: "Calm reservoir surrounded by Mullayanagiri hills reflecting dramatic twilight silhouettes; peaceful lakeside drive.",
                lat: 13.3640,
                lon: 75.7350,
                bearingDeg: 310
            },
            {
                id: "cml-z-point",
                name: "Z Point Kemmangundi Ridge",
                dist: 58.0,
                driveTime: "~1h 45m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "1430m Cliff Edge",
                tip: "Thrilling cliff-edge mountain ridge walk overlooking deep Western Ghats valleys, Shanti Falls, and wild orchids.",
                lat: 13.5510,
                lon: 75.7620,
                bearingDeg: 358
            }
        ],

        coorg: [
            {
                id: "coorg-abbey-falls",
                name: "Abbey Falls Hanging Bridge",
                dist: 7.8,
                driveTime: "~18m drive",
                cat: "nature",
                icon: "💧",
                elev: "1020m Coffee Gorge",
                tip: "Roaring waterfall framed by private coffee and spice plantations; suspension bridge overlooking the misty plunge pool.",
                lat: 12.4550,
                lon: 75.7180,
                bearingDeg: 345
            },
            {
                id: "coorg-rajas-seat",
                name: "Raja's Seat Royal Overlook",
                dist: 1.8,
                driveTime: "~5m drive",
                cat: "hill",
                icon: "🌅",
                elev: "1140m Madikeri Ridge",
                tip: "Historic royal garden with a brick-pillared pavilion where Kodagu kings enjoyed sweeping sunsets over misty Western Ghats horizons.",
                lat: 12.4180,
                lon: 75.7360,
                bearingDeg: 190
            },
            {
                id: "coorg-mandalpatti",
                name: "Mandalpatti 4x4 Cloud Peak",
                dist: 18.5,
                driveTime: "~46m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "1450m Windswept Ridge",
                tip: "Rugged off-road 4WD mountain trail leading to a cloud-wrapped grassland ridge overlooking Pushpagiri wildlife sanctuary.",
                lat: 12.5120,
                lon: 75.6980,
                bearingDeg: 330
            },
            {
                id: "coorg-talakaveri",
                name: "Talakaveri & Brahmagiri Summit",
                dist: 43.5,
                driveTime: "~1h 12m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "1276m Brahmagiri Peak",
                tip: "The holy birthplace spring of River Cauvery nestled high in the Western Ghats; steep climb up Brahmagiri for 360° views.",
                lat: 12.3850,
                lon: 75.4920,
                bearingDeg: 255
            },
            {
                id: "coorg-dubare",
                name: "Dubare Elephant Camp (Cauvery)",
                dist: 28.2,
                driveTime: "~45m drive",
                cat: "nature",
                icon: "🌲",
                elev: "820m Riverbank",
                tip: "Riverbank forest camp where travelers can participate in elephant bathing and feeding on the rocky banks of River Cauvery.",
                lat: 12.3680,
                lon: 75.9050,
                bearingDeg: 115
            },
            {
                id: "coorg-bylakuppe",
                name: "Namdroling Golden Temple (Bylakuppe)",
                dist: 34.0,
                driveTime: "~50m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "850m Tibetan Valley",
                tip: "Second largest Tibetan settlement outside Dharamshala; features 40-foot gilded gold Buddha statues and ornate Tibetan thangkas.",
                lat: 12.4300,
                lon: 75.9680,
                bearingDeg: 95
            }
        ],

        munnar: [
            {
                id: "munnar-top-station",
                name: "Top Station Cloudline Lookout",
                dist: 34.0,
                driveTime: "~1h 15m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "1880m Border Ridge",
                tip: "Highest elevation on the Munnar-Kodaikanal route; historic tea ropeway terminus overlooking the sprawling Tamil Nadu plains.",
                lat: 10.1250,
                lon: 77.2450,
                bearingDeg: 80
            },
            {
                id: "munnar-eravikulam",
                name: "Eravikulam Tahr National Park",
                dist: 12.0,
                driveTime: "~25m drive",
                cat: "nature",
                icon: "🌲",
                elev: "2050m Rajamalai Ridge",
                tip: "High-altitude sanctuary preserving the endangered Nilgiri Tahr against rolling Shola valleys and blooming Neelakurinji slopes.",
                lat: 10.1500,
                lon: 77.0650,
                bearingDeg: 345
            },
            {
                id: "munnar-mattupetty",
                name: "Mattupetty Dam & Lake",
                dist: 13.0,
                driveTime: "~30m drive",
                cat: "nature",
                icon: "💧",
                elev: "1700m Hydro Basin",
                tip: "Concrete gravity dam flanked by tea plantations and eucalyptus woods; speedboat cruises and elephant sightings.",
                lat: 10.1050,
                lon: 77.1250,
                bearingDeg: 75
            },
            {
                id: "munnar-kolukkumalai",
                name: "Kolukkumalai Sunrise Peak",
                dist: 35.0,
                driveTime: "~1h 40m drive",
                cat: "hill",
                icon: "🌅",
                elev: "2160m World's Highest Tea",
                tip: "World's highest orthodox tea plantation perched at 7,130 ft; legendary sunrise over drifting cloud blankets via rugged 4WD tracks.",
                lat: 10.0820,
                lon: 77.2180,
                bearingDeg: 98
            },
            {
                id: "munnar-kundala-lake",
                name: "Kundala Arch Dam & Lake",
                dist: 24.0,
                driveTime: "~50m drive",
                cat: "nature",
                icon: "💧",
                elev: "1750m Valley Lake",
                tip: "Asia's first arch dam framed by cherry blossom trees; Kashmiri shikara and pedal boat rides across serene waters.",
                lat: 10.1150,
                lon: 77.2050,
                bearingDeg: 82
            },
            {
                id: "munnar-attukal-falls",
                name: "Attukal Waterfalls Gorge",
                dist: 9.0,
                driveTime: "~20m drive",
                cat: "nature",
                icon: "💧",
                elev: "1520m Rock Gorge",
                tip: "Charming cascades tumbling over huge black rocks between Munnar and Pallivasal; romantic hiking trails.",
                lat: 10.0510,
                lon: 77.0420,
                bearingDeg: 215
            }
        ],

        hampi: [
            {
                id: "hampi-virupaksha",
                name: "Virupaksha Temple Sanctum",
                dist: 1.2,
                driveTime: "~3m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "460m Riverbank",
                tip: "Active 7th-century holy shrine with a 160-foot eastern Gopuram and inverted pinhole camera shadow phenomenon.",
                lat: 15.3350,
                lon: 76.4600,
                bearingDeg: 270
            },
            {
                id: "hampi-vittala-chariot",
                name: "Vijaya Vittala & Stone Chariot",
                dist: 3.8,
                driveTime: "~10m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "465m Sacred Basin",
                tip: "The apex of Vijayanagara stone architecture; famous monolithic granite chariot and 56 musical acoustic stone pillars.",
                lat: 15.3420,
                lon: 76.4780,
                bearingDeg: 55
            },
            {
                id: "hampi-matanga-hill",
                name: "Matanga Hill Sunrise Crags",
                dist: 1.8,
                driveTime: "~6m drive",
                cat: "hill",
                icon: "⛰️",
                elev: "540m Monolithic Vista",
                tip: "Highest panoramic vantage point in Hampi; 360-degree vistas of the boulder-strewn Tungabhadra valley at dawn.",
                lat: 15.3310,
                lon: 76.4670,
                bearingDeg: 140
            },
            {
                id: "hampi-anjanadri-hill",
                name: "Anjanadri Hill (Hanuman Birthplace)",
                dist: 13.5,
                driveTime: "~26m drive",
                cat: "heritage",
                icon: "⛰️",
                elev: "580m Anegundi Peak",
                tip: "575-step whitewashed stairway up to the mythic Kishkindha hilltop shrine; breathtaking sunset overlooking green paddy fields.",
                lat: 15.3550,
                lon: 76.4850,
                bearingDeg: 40
            },
            {
                id: "hampi-sanapur-lake",
                name: "Sanapur Lake Bouldering Crags",
                dist: 15.8,
                driveTime: "~30m drive",
                cat: "nature",
                icon: "💧",
                elev: "450m Reservoir Rim",
                tip: "Turquoise freshwater lake surrounded by giant balanced granite boulders; famous for coracle boat rides and cliff jumping.",
                lat: 15.3680,
                lon: 76.4420,
                bearingDeg: 330
            },
            {
                id: "hampi-royal-enclosure",
                name: "Royal Enclosure & Stepped Tank",
                dist: 3.2,
                driveTime: "~8m drive",
                cat: "heritage",
                icon: "🏛️",
                elev: "470m Citadel Plain",
                tip: "The administrative heart of the Vijayanagara Empire; grand Mahanavami Dibba, underground secret council room, and stepped pushkarani.",
                lat: 15.3180,
                lon: 76.4720,
                bearingDeg: 160
            }
        ]
    };

    return {
        /**
         * Retrieve curated or dynamically synthesized satellite wheel for an outpost
         * @param {Object} outpost Master POI outpost object
         * @returns {Array} Array of satellite objects
         */
        getSatellitesForOutpost: function (outpost) {
            if (!outpost) return [];

            // 1. Direct registry lookup by id
            const pId = String(outpost.id || '').toLowerCase().replace(/[-_\s]+/g, '');
            for (const key of Object.keys(SATELLITE_REGISTRY)) {
                if (pId.includes(key) || key.includes(pId)) {
                    return JSON.parse(JSON.stringify(SATELLITE_REGISTRY[key]));
                }
            }

            // 2. Name-based lookup
            const pName = String(outpost.name || '').toLowerCase();
            for (const key of Object.keys(SATELLITE_REGISTRY)) {
                if (pName.includes(key)) {
                    return JSON.parse(JSON.stringify(SATELLITE_REGISTRY[key]));
                }
            }

            // 3. Dynamic High-Precision Satellite Synthesizer (for any destination in South India)
            const cLat = outpost.lat || 12.97;
            const cLon = outpost.lon || 77.59;
            const cElevM = parseInt(String(outpost.elev || '500').replace(/\D/g, ''), 10) || 500;
            const cat = outpost.cat || 'nature';

            const templates = {
                hill: [
                    { name: "Ridge Summit Lookout", sub: "Peak Vista", icon: "⛰️", d: 11, time: "~25m drive", dElev: 280, tip: "Panoramic ridge trail overlooking surrounding valleys." },
                    { name: "Valley Stream Waterfalls", sub: "Forest Cascade", icon: "💧", d: 16, time: "~32m drive", dElev: -180, tip: "Stepped mountain cascade through dense evergreen forest." },
                    { name: "Ancient Hilltop Shrine", sub: "Sanctuary", icon: "🏛️", d: 7, time: "~15m drive", dElev: 120, tip: "Quiet historic shrine with tranquil meditation courtyard." },
                    { name: "Tea & Spice Estate Strip", sub: "Plantation Walk", icon: "☕", d: 14, time: "~28m drive", dElev: 40, tip: "Private rolling estate lanes with fresh locally cured blends." },
                    { name: "West Valley Sunset Point", sub: "Sunset Vista", icon: "🌅", d: 22, time: "~42m drive", dElev: 190, tip: "Dramatic cliff-edge viewpoint facing the setting western sun." },
                    { name: "Reserve Forest Gate Trail", sub: "Wildlife Trail", icon: "🌲", d: 29, time: "~55m drive", dElev: 60, tip: "Protected wildlife buffer zone with spotted deer and endemic birds." }
                ],
                heritage: [
                    { name: "Fortress Ramparts & Bastion", sub: "Historic Ramparts", icon: "🏛️", d: 4.5, time: "~10m drive", dElev: 80, tip: "Massive laterite / granite defensive walls with watchtowers." },
                    { name: "Sacred Stepped Temple Tank", sub: "Pushkarani", icon: "💧", d: 2.8, time: "~6m drive", dElev: -10, tip: "Ancient geometric stepped water reservoir with carved pavilions." },
                    { name: "Royal Archaeological Enclosure", sub: "Palace Ruins", icon: "🏛️", d: 6.2, time: "~14m drive", dElev: 20, tip: "Excavated ceremonial pavilions, pillar bases and royal stables." },
                    { name: "Monolithic Rock Sculpture", sub: "Rock Carving", icon: "⛰️", d: 12.5, time: "~24m drive", dElev: 90, tip: "Huge monolithic idol carved directly into local bedrock." },
                    { name: "Old Bazaar Heritage Street", sub: "Artisan Quarter", icon: "🏮", d: 1.5, time: "~4m drive", dElev: 0, tip: "Vibrant traditional handicraft market with local brass and weaving." },
                    { name: "River Confluence Ghat", sub: "Sangam Ghats", icon: "💧", d: 18.0, time: "~35m drive", dElev: -30, tip: "Sacred confluence of rivers with evening ceremonial oil lamps." }
                ],
                nature: [
                    { name: "Forest Cascade Waterfalls", sub: "Natural Falls", icon: "💧", d: 12.0, time: "~24m drive", dElev: -60, tip: "Perennial freshwater stream tumbling over natural rock pools." },
                    { name: "Wild Elephant Corridor Overlook", sub: "Sanctuary View", icon: "🌲", d: 18.5, time: "~38m drive", dElev: 40, tip: "Forest department watchtower overlooking migration routes." },
                    { name: "Eco-Lodge Nature Camp", sub: "River Camp", icon: "🏕️", d: 9.0, time: "~18m drive", dElev: -20, tip: "Bamboo rafting and guided nature walks along riverbanks." },
                    { name: "Canopy Treehouse Vista", sub: "Jungle Vista", icon: "⛰️", d: 24.0, time: "~45m drive", dElev: 150, tip: "High canopy boardwalk with views above the forest canopy." },
                    { name: "Hidden Jungle Cave Stream", sub: "Natural Cave", icon: "💧", d: 15.0, time: "~30m drive", dElev: -40, tip: "Subterranean stream emerging from moss-covered limestone clefts." },
                    { name: "Mist Valley Forest Border", sub: "Ridge Border", icon: "🌅", d: 31.0, time: "~58m drive", dElev: 110, tip: "Scenic boundary ridge offering misty panoramic mountain views." }
                ],
                coastal: [
                    { name: "Lighthouse Rock Promontory", sub: "Lighthouse Point", icon: "🗼", d: 6.5, time: "~14m drive", dElev: 45, tip: "Historic maritime beacon overlooking breaking coastal surf." },
                    { name: "Secluded Golden Sand Cove", sub: "Hidden Cove", icon: "🏖️", d: 11.0, time: "~22m drive", dElev: 10, tip: "Pristine sheltered beach accessible via coastal fishing trails." },
                    { name: "Estuary Mangrove Kayaking", sub: "Backwaters", icon: "🚣", d: 15.5, time: "~30m drive", dElev: 5, tip: "Tidal mangrove creeks rich in crabs, kingfishers and otters." },
                    { name: "Coastal Fort Cliff Bastion", sub: "Sea Fort", icon: "🏛️", d: 19.0, time: "~35m drive", dElev: 35, tip: "Laterite ocean fort battered by turquoise Arabian Sea breakers." },
                    { name: "Traditional Fishing Pier & Harbor", sub: "Harbor", icon: "⛵", d: 4.0, time: "~8m drive", dElev: 5, tip: "Colorfully painted catamarans unloading fresh daily coastal catches." },
                    { name: "Sunset Cliffside Shack Strip", sub: "Sunset Cafe", icon: "☕", d: 8.2, time: "~16m drive", dElev: 25, tip: "Rustic coconut-thatch shacks serving fresh coconut water and curry." }
                ]
            };

            const pool = templates[cat] || templates.nature;
            const angles = [30, 85, 145, 215, 275, 335];

            return pool.map((tmpl, idx) => {
                const angle = angles[idx % angles.length];
                const rad = angle * (Math.PI / 180);
                const latOffset = (tmpl.d / 111.0) * Math.cos(rad);
                const lonOffset = (tmpl.d / (111.0 * Math.cos(cLat * Math.PI / 180))) * Math.sin(rad);

                return {
                    id: `${outpost.id || 'outpost'}-sat-${idx + 1}`,
                    name: `${outpost.name.split('(')[0].trim()} ${tmpl.name}`,
                    dist: tmpl.d,
                    driveTime: tmpl.time,
                    cat: cat,
                    icon: tmpl.icon,
                    elev: `${Math.max(10, cElevM + tmpl.dElev)}m ${tmpl.sub}`,
                    tip: `${tmpl.tip} Located ${tmpl.d} km from ${outpost.name.split('(')[0].trim()} center.`,
                    lat: +(cLat + latOffset).toFixed(4),
                    lon: +(cLon + lonOffset).toFixed(4),
                    bearingDeg: angle
                };
            });
        }
    };
});

