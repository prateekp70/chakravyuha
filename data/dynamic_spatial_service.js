/**
 * Dynamic Spatial Service — Real-Time Spatial GIS & OpenStreetMap Ingestion Pipeline
 * 
 * Features:
 * - Queries OpenStreetMap Overpass API and open spatial endpoints based on hub coordinates & radius.
 * - Dynamically translates OSM nodes, ways, and relations into normalized Chakravyuha Outpost objects.
 * - Categorizes open spatial POIs into tactical categories: 'hill', 'heritage', 'nature', 'coastal', 'quick'.
 * - Robust multi-tier caching: in-memory cache + localStorage persistence.
 * - Offline-first resilience: falls back to baseline POI registry if network is unavailable.
 */
(function (root, factory) {
    const service = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = service;
    }
    if (typeof root !== 'undefined') {
        root.DynamicSpatialService = service.DynamicSpatialService;
        root.dynamicSpatialService = service.dynamicSpatialService;
    }
    if (typeof window !== 'undefined') {
        window.DynamicSpatialService = service.DynamicSpatialService;
        window.dynamicSpatialService = service.dynamicSpatialService;
    }
})(typeof self !== 'undefined' ? self : this, function () {

    class DynamicSpatialService {
        constructor() {
            this.endpoints = [
                'https://overpass-api.de/api/interpreter',
                'https://overpass.kumi.systems/api/interpreter',
                'https://maps.mail.ru/osm/tools/overpass/api/interpreter'
            ];
            this.activeEndpointIndex = 0;
            this.cache = new Map();
            this.cachePrefix = 'CHAKRAVYUHA_SPATIAL_V1_';
            this.cacheTtlMs = 1000 * 60 * 60 * 24; // 24 hours

            // High-fidelity regional fallbacks for offline resilience and instant cold starts
            this.regionalFallbacks = {
                PNQ: [
                    {
                        id: 'osm_pnq_shaniwar_wada',
                        name: 'Shaniwar Wada',
                        lat: 18.5194,
                        lon: 73.8553,
                        cat: 'heritage',
                        elev: '560m Fortress',
                        season: 'YEAR_ROUND',
                        desc: '18th-century seven-story fortified palace seat of the Peshwa prime ministers of the Maratha Empire with colossal teak bastions.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_sinhagad',
                        name: 'Sinhagad Fort',
                        lat: 18.3663,
                        lon: 73.7558,
                        cat: 'hill',
                        elev: '1,312m Sahyadri Ridge',
                        season: 'MONSOON_WINTER',
                        desc: 'Historic 17th-century Maratha fortress perched on an isolated cliff in the Bhuleshwar range, renowned for Tanaji Malusare heroic assault.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_rajgad',
                        name: 'Rajgad Fort',
                        lat: 18.2562,
                        lon: 73.6822,
                        cat: 'hill',
                        elev: '1,376m Royal Citadel',
                        season: 'MONSOON_WINTER',
                        desc: 'The Sovereign Capital of the Maratha Empire under Chhatrapati Shivaji Maharaj for over 25 years, with massive machis and citadel fortifications.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_torna',
                        name: 'Torna Fort (Prachandagad)',
                        lat: 18.2778,
                        lon: 73.6217,
                        cat: 'hill',
                        elev: '1,403m Eagle Peak',
                        season: 'WINTER',
                        desc: 'The highest hill fort in Pune district, captured by Shivaji at age 16; features the precarious Zunjar and Budhla Machi ridges.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_lohagad',
                        name: 'Lohagad Fort',
                        lat: 18.7094,
                        lon: 73.4778,
                        cat: 'hill',
                        elev: '1,033m Fortified Peak',
                        season: 'MONSOON_WINTER',
                        desc: 'Formidable Iron Fort featuring four sequential defense gates and the dramatic Vinchukata (scorpion tail) razor cliff projecting into the valley.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_pawna_lake',
                        name: 'Pawna Lake & Valley',
                        lat: 18.6865,
                        lon: 73.4862,
                        cat: 'nature',
                        elev: '650m Reservoir',
                        season: 'YEAR_ROUND',
                        desc: 'Sprawling freshwater reservoir nestled beneath Lohagad, Tikona, and Tung hill forts, known for shoreline camping and water excursions.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_tamhini_ghat',
                        name: 'Tamhini Ghat',
                        lat: 18.4727,
                        lon: 73.4219,
                        cat: 'nature',
                        elev: '600m Rainforest Pass',
                        season: 'MONSOON_AUTUMN',
                        desc: 'Spectacular Western Ghats mountain pass linking the Deccan plateau to the Konkan coast, famous for cascading waterfalls and emerald mist.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_lonavala_khandala',
                        name: 'Lonavala & Khandala',
                        lat: 18.7557,
                        lon: 73.4091,
                        cat: 'quick',
                        elev: '624m Sahyadri Pass',
                        season: 'YEAR_ROUND',
                        desc: 'Popular Sahyadri mountain gateway famous for Tiger Leap viewpoint, Bhushi Dam cascades, and ancient Karla Buddhist rock-cut caves.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_mahabaleshwar',
                        name: 'Mahabaleshwar & Panchgani',
                        lat: 17.9237,
                        lon: 73.6586,
                        cat: 'hill',
                        elev: '1,353m Sahyadri Plateau',
                        season: 'AUTUMN_WINTER',
                        desc: 'Vast Sahyadri hill station plateau with 30 panoramic viewpoints overlooking the Krishna River basin and dense evergreen forest valleys.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_kaas_plateau',
                        name: 'Kaas Plateau (Valley of Flowers)',
                        lat: 17.7206,
                        lon: 73.8189,
                        cat: 'nature',
                        elev: '1,200m Endemic Meadow',
                        season: 'MONSOON_POST_MONSOON',
                        desc: 'UNESCO World Natural Heritage volcanic laterite plateau exploding with vibrant endemic wild flower blooms every August to October.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_alibaug_murud',
                        name: 'Murud-Janjira & Alibaug',
                        lat: 18.2987,
                        lon: 72.9642,
                        cat: 'coastal',
                        elev: 'Sea Level Arabian Coast',
                        season: 'WINTER',
                        desc: 'Impregnable island sea fortress built by the Siddis in the Arabian Sea surrounded by coconut groves and coastal fishing hamlets.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_harishchandragad',
                        name: 'Harishchandragad & Konkan Kada',
                        lat: 19.3875,
                        lon: 73.7767,
                        cat: 'hill',
                        elev: '1,422m Konkan Cliff',
                        season: 'MONSOON_WINTER',
                        desc: 'Monumental 6th-century fortress famed for the sheer concave overhang of Konkan Kada and the semi-submerged Kedareshwar cave.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_malshej_ghat',
                        name: 'Malshej Ghat Pass',
                        lat: 19.3400,
                        lon: 73.7740,
                        cat: 'nature',
                        elev: '700m Cloud Pass',
                        season: 'MONSOON',
                        desc: 'High mountain pass carved into rugged Deccan basalt traps, hosting migratory flamingos and continuous roadside cloud waterfalls.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_ajanta_ellora',
                        name: 'Ellora & Daulatabad Citadel',
                        lat: 20.0268,
                        lon: 75.1792,
                        cat: 'heritage',
                        elev: '570m Rock-Cut Plateau',
                        season: 'WINTER',
                        desc: 'World Heritage rock-cut cave temples centered on the monolithic Kailasa temple carved from a single basalt cliff face, alongside Daulatabad Fort.',
                        isDynamic: true
                    },
                    // --- Gujarat Corridors (North-West Quadrant) ---
                    {
                        id: 'osm_pnq_saputara',
                        name: 'Saputara Hill Station',
                        lat: 20.5750,
                        lon: 73.7486,
                        cat: 'hill',
                        elev: '875m Sahyadri Cliff',
                        season: 'MONSOON_WINTER',
                        desc: 'Gujarat premier Sahyadri hill retreat set amid the lush Dang tribal forest, famous for Sunrise Point and Gira waterfalls.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_surat_dumas',
                        name: 'Surat & Dumas Shoreline',
                        lat: 21.1702,
                        lon: 72.8311,
                        cat: 'coastal',
                        elev: 'Sea Level Arabian Coast',
                        season: 'WINTER',
                        desc: 'Historic Mughal and colonial diamond trade port on the Tapti River mouth and black sand Dumas beach.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_statue_of_unity',
                        name: 'Statue of Unity & Kevadia',
                        lat: 21.8380,
                        lon: 73.7191,
                        cat: 'heritage',
                        elev: '182m Colossus',
                        season: 'YEAR_ROUND',
                        desc: 'World tallest 182-meter monumental colossus of Sardar Vallabhbhai Patel towering over the Narmada river and Sardar Sarovar reservoir.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_champaner_pavagadh',
                        name: 'Champaner-Pavagadh UNESCO Park',
                        lat: 22.4854,
                        lon: 73.5358,
                        cat: 'heritage',
                        elev: '762m Volcanic Peak',
                        season: 'WINTER',
                        desc: 'UNESCO World Heritage archaeological landscape with Kalika Mata temple atop Pavagadh hill and 15th-century sultanate citadel.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_lothal',
                        name: 'Lothal Indus Valley Port',
                        lat: 22.5218,
                        lon: 72.2494,
                        cat: 'heritage',
                        elev: '12m Harappan Basin',
                        season: 'WINTER',
                        desc: 'Ancient 2400 BCE Harappan civilization port featuring the world earliest known tidal dockyard and bead-making workshops.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_somnath',
                        name: 'Somnath Shoreline Jyotirlinga',
                        lat: 20.8880,
                        lon: 70.4012,
                        cat: 'heritage',
                        elev: 'Sea Level Arabian Coast',
                        season: 'WINTER',
                        desc: 'Sacred first Jyotirlinga shrine standing at the holy Triveni Sangam on the shores of the Arabian Sea.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_gir_national_park',
                        name: 'Gir National Park & Lion Sanctuary',
                        lat: 21.1241,
                        lon: 70.8242,
                        cat: 'nature',
                        elev: '380m Teak Reserve',
                        season: 'WINTER_SPRING',
                        desc: 'Sole global refuge of the endangered Asiatic Lion in rugged dry deciduous scrub and teak forest.',
                        isDynamic: true
                    },
                    // --- Madhya Pradesh Corridors (North & North-East Quadrant) ---
                    {
                        id: 'osm_pnq_asirgarh',
                        name: 'Asirgarh Fort (Key to the Deccan)',
                        lat: 21.4683,
                        lon: 76.2994,
                        cat: 'hill',
                        elev: '701m Satpura Ridge',
                        season: 'WINTER',
                        desc: 'Formidable Satpura mountain fortress historically guarding the major pass connecting northern India to the Deccan.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_maheshwar',
                        name: 'Maheshwar Narmada Ghats & Ahilya Fort',
                        lat: 22.1765,
                        lon: 75.5847,
                        cat: 'heritage',
                        elev: '160m Narmada Basin',
                        season: 'WINTER',
                        desc: 'Ahilya Bai Holkar historic royal capital with monumental carved stone ghats descending into the sacred Narmada river.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_mandu',
                        name: 'Mandu Citadel (City of Joy)',
                        lat: 22.3660,
                        lon: 75.4044,
                        cat: 'heritage',
                        elev: '633m Malwa Plateau',
                        season: 'MONSOON_WINTER',
                        desc: 'Spectacular medieval fortified citadel with the floating Jahaz Mahal palace, Hindola Mahal, and Rani Roopmati Pavilion.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_omkareshwar',
                        name: 'Omkareshwar Jyotirlinga Island',
                        lat: 22.2442,
                        lon: 76.1506,
                        cat: 'heritage',
                        elev: '175m Sacred Island',
                        season: 'YEAR_ROUND',
                        desc: 'Revered island Jyotirlinga temple situated in the sacred Om-shaped Mandhata island on the Narmada.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_ujjain',
                        name: 'Ujjain Mahakaleshwar & Ram Ghat',
                        lat: 23.1765,
                        lon: 75.7885,
                        cat: 'heritage',
                        elev: '492m Malwa Riverbank',
                        season: 'WINTER',
                        desc: 'Ancient holy city on the Shipra River with the sacred Mahakaleshwar Jyotirlinga and historic Jantar Mantar observatory.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_bhimbetka',
                        name: 'Bhimbetka Rock Shelters UNESCO',
                        lat: 22.9372,
                        lon: 77.6127,
                        cat: 'heritage',
                        elev: '450m Vindhyan Sandstone',
                        season: 'WINTER',
                        desc: 'UNESCO World Heritage Paleolithic and Mesolithic rock art complex featuring cave paintings over 30,000 years old.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_pachmarhi',
                        name: 'Pachmarhi Queen of Satpura',
                        lat: 22.4674,
                        lon: 78.4346,
                        cat: 'hill',
                        elev: '1,067m Satpura Biosphere',
                        season: 'YEAR_ROUND',
                        desc: 'Madhya Pradesh highest hill resort within the Satpura Tiger Reserve, renowned for Dhoopgarh peak and Bee Falls.',
                        isDynamic: true
                    },
                    {
                        id: 'osm_pnq_sanchi',
                        name: 'Sanchi Great Stupa UNESCO',
                        lat: 23.4795,
                        lon: 77.7397,
                        cat: 'heritage',
                        elev: '430m Ashokan Hill',
                        season: 'WINTER',
                        desc: 'Oldest stone structure in India commissioned by Emperor Ashoka in 3rd century BCE with intricately carved Buddhist toranas.',
                        isDynamic: true
                    }
                ]
            };
        }

        getActiveEndpoint() {
            return this.endpoints[this.activeEndpointIndex];
        }

        rotateEndpoint() {
            this.activeEndpointIndex = (this.activeEndpointIndex + 1) % this.endpoints.length;
            return this.getActiveEndpoint();
        }

        /**
         * Calculate precise geographic bounding box and delta offsets for a given radius
         * Accounts for latitude-dependent longitudinal convergence: dLon = r / (111.32 * cos(lat))
         * Symmetrical across all quadrants (North, South, East, West) without clipping
         */
        calculateBoundingBox(lat, lon, radiusKm) {
            const dLat = radiusKm / 111.32;
            const latRad = (lat * Math.PI) / 180;
            const cosLat = Math.max(0.01, Math.cos(latRad));
            const dLon = radiusKm / (111.32 * cosLat);

            return {
                south: Math.max(-90, lat - dLat),
                north: Math.min(90, lat + dLat),
                west: Math.max(-180, lon - dLon),
                east: Math.min(180, lon + dLon),
                dLat,
                dLon
            };
        }

        /**
         * Calculate cardinal quadrant sectors (NW, NE, SW, SE) to eliminate directional bias
         * Ensures northern territories (Gujarat, MP) receive dedicated node quotas
         */
        calculateQuadrantSectors(lat, lon, radiusKm) {
            const bbox = this.calculateBoundingBox(lat, lon, radiusKm);
            return {
                NW: {
                    key: 'NW',
                    name: 'North-West (Gujarat / NW Corridor)',
                    south: lat,
                    west: bbox.west,
                    north: bbox.north,
                    east: lon
                },
                NE: {
                    key: 'NE',
                    name: 'North-East (Madhya Pradesh / NE Corridor)',
                    south: lat,
                    west: lon,
                    north: bbox.north,
                    east: bbox.east
                },
                SW: {
                    key: 'SW',
                    name: 'South-West (Konkan / Sahyadri Corridor)',
                    south: bbox.south,
                    west: bbox.west,
                    north: lat,
                    east: lon
                },
                SE: {
                    key: 'SE',
                    name: 'South-East (Deccan / Peninsular Corridor)',
                    south: bbox.south,
                    west: lon,
                    north: lat,
                    east: bbox.east
                }
            };
        }

        /**
         * Generate sector chunks for macro-radii (500km and 700km)
         * Breaks down massive peninsular sweeps into balanced northern & southern queries
         * preventing Overpass server timeouts from Western Ghats node density
         */
        getSectorChunks(lat, lon, radiusKm) {
            const bbox = this.calculateBoundingBox(lat, lon, radiusKm);
            const halfLimit = radiusKm >= 700 ? 70 : 50;

            return [
                {
                    key: 'NORTH',
                    name: 'Northern Territories (Gujarat & Madhya Pradesh)',
                    south: lat,
                    west: bbox.west,
                    north: bbox.north,
                    east: bbox.east,
                    limit: halfLimit
                },
                {
                    key: 'SOUTH',
                    name: 'Southern Territories (Western Ghats & Peninsular South)',
                    south: bbox.south,
                    west: bbox.west,
                    north: lat,
                    east: bbox.east,
                    limit: halfLimit
                }
            ];
        }

        /**
         * Construct Overpass QL query for a specific bounding box
         */
        buildOverpassBboxQuery(bbox, limit = 50, timeoutSec = 25) {
            const s = bbox.south.toFixed(4);
            const w = bbox.west.toFixed(4);
            const n = bbox.north.toFixed(4);
            const e = bbox.east.toFixed(4);

            return `[out:json][timeout:${timeoutSec}];(
                node["tourism"~"attraction|viewpoint|zoo|theme_park"]["name"](${s},${w},${n},${e});
                node["historic"~"fort|monument|ruins|castle|archaeological_site|memorial"]["name"](${s},${w},${n},${e});
                node["natural"~"peak|waterfall|cliff|cave_entrance|beach"]["name"](${s},${w},${n},${e});
                node["leisure"~"nature_reserve|park"]["name"](${s},${w},${n},${e});
                way["historic"~"fort|castle|ruins"]["name"](${s},${w},${n},${e});
                way["tourism"~"attraction|viewpoint"]["name"](${s},${w},${n},${e});
                way["leisure"="nature_reserve"]["name"](${s},${w},${n},${e});
            );out center body ${limit};>;out skel qt;`;
        }

        /**
         * Construct Overpass QL query around a geographic anchor
         * Uses bounding box to avoid directional bias and ensure northern coverage
         */
        buildOverpassQuery(lat, lon, radiusKm = 100, limit = null) {
            const bbox = this.calculateBoundingBox(lat, lon, radiusKm);
            const queryLimit = limit || (radiusKm >= 700 ? 120 : (radiusKm >= 500 ? 100 : (radiusKm >= 300 ? 80 : (radiusKm >= 200 ? 60 : 45))));
            const timeoutSec = radiusKm >= 500 ? 30 : 25;
            return this.buildOverpassBboxQuery(bbox, queryLimit, timeoutSec);
        }

        /**
         * Categorize OSM tags into Chakravyuha tactical categories
         */
        categorizeOsmElement(tags = {}, distKm = 0) {
            const natural = tags.natural || '';
            const historic = tags.historic || '';
            const tourism = tags.tourism || '';
            const leisure = tags.leisure || '';

            if (natural.match(/peak|cliff|volcano|ridge/) || tags.sport === 'climbing') {
                return 'hill';
            }
            if (natural.match(/beach/) || tags.coastal === 'yes' || tags.seamark) {
                return 'coastal';
            }
            if (historic.match(/fort|ruins|monument|castle|archaeological_site|memorial|palace|wada/) || tags.heritage) {
                return 'heritage';
            }
            if (natural.match(/waterfall|cave_entrance|spring|wood|ghat/) || leisure.match(/nature_reserve/)) {
                return 'nature';
            }
            if (distKm <= 80 || tourism.match(/viewpoint|attraction/)) {
                return 'quick';
            }
            return 'nature';
        }

        /**
         * Calculate exact great-circle Haversine distance in km
         * Symmetrical and distortion-free across all quadrants
         */
        calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = ((lat2 - lat1) * Math.PI) / 180;
            const dLon = ((lon2 - lon1) * Math.PI) / 180;
            const a =
                Math.sin(dLat / 2) ** 2 +
                Math.cos((lat1 * Math.PI) / 180) *
                Math.cos((lat2 * Math.PI) / 180) *
                Math.sin(dLon / 2) ** 2;
            return 2 * R * Math.asin(Math.sqrt(a));
        }

        /**
         * Deduplicate array of outposts by ID and normalized name
         */
        deduplicateOutposts(outposts = []) {
            const seen = new Set();
            const deduped = [];
            outposts.forEach(p => {
                const key = p.name ? p.name.toLowerCase().trim() : p.id;
                if (!seen.has(key)) {
                    seen.add(key);
                    deduped.push(p);
                }
            });
            return deduped;
        }

        /**
         * Execute Overpass query with timeout and automatic endpoint failover
         */
        async executeOverpassFetch(query, hub, timeoutMs = 18000) {
            const endpoint = this.getActiveEndpoint();
            try {
                if (typeof fetch !== 'undefined') {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept': 'application/json',
                            'User-Agent': 'ChakravyuhaRoadTripRadar/2.0 (Dynamic Spatial GIS Pipeline; support@roadtripapp.local)'
                        },
                        body: 'data=' + encodeURIComponent(query),
                        signal: controller.signal
                    });
                    clearTimeout(timeoutId);

                    if (response.ok) {
                        const json = await response.json();
                        return this.normalizeOsmElements(json.elements, hub);
                    } else {
                        console.warn(`[DynamicSpatialService] Query to ${endpoint} returned ${response.status}, rotating`);
                        this.rotateEndpoint();
                    }
                }
            } catch (err) {
                console.warn(`[DynamicSpatialService] Query to ${endpoint} failed, rotating:`, err.message);
                this.rotateEndpoint();
            }
            return [];
        }

        /**
         * Transform raw OSM elements into normalized Chakravyuha Outpost objects
         */
        normalizeOsmElements(elements, hub = { lat: 12.9716, lon: 77.5946 }) {
            if (!Array.isArray(elements)) return [];

            const outposts = [];
            const seen = new Set();

            elements.forEach(el => {
                const tags = el.tags || {};
                const name = tags['name:en'] || tags.name || tags['alt_name'] || null;
                if (!name || name.trim().length < 2) return;

                const lat = el.lat || (el.center ? el.center.lat : null);
                const lon = el.lon || (el.center ? el.center.lon : null);
                if (lat === null || lon === null) return;

                // Deduplicate by name & coordinates
                const key = `${name.toLowerCase()}_${lat.toFixed(3)}_${lon.toFixed(3)}`;
                if (seen.has(key)) return;
                seen.add(key);

                // Exact great-circle Haversine air distance
                const distKm = Math.round(this.calculateDistance(hub.lat, hub.lon, lat, lon));

                const cat = this.categorizeOsmElement(tags, distKm);
                const elev = tags.ele ? `${tags.ele}m` : (cat === 'hill' ? '850m Peak' : 'Terrain');
                const desc = tags.description || tags.wikipedia || tags['tourism:description'] || `${name} — Real-time dynamic geospatial outpost resolved via OpenStreetMap data pipeline.`;

                outposts.push({
                    id: `osm_${el.type || 'node'}_${el.id}`,
                    name: name.trim(),
                    lat: parseFloat(lat),
                    lon: parseFloat(lon),
                    cat: cat,
                    elev: elev,
                    season: tags.season || 'YEAR_ROUND',
                    desc: desc,
                    dist: distKm,
                    isDynamic: true,
                    tags: tags
                });
            });

            return outposts;
        }

        /**
         * Query spatial endpoints dynamically with caching and fallback
         * Supports scalable tactical corridors: 100km, 200km, 300km, 500km, and 700km
         */
        async queryLiveSpatialData(hub, radiusKm = 120, limit = null) {
            if (!hub || !hub.lat || !hub.lon) return [];

            const rKm = radiusKm || (hub.scoutingRadiusKm || 120);
            const cacheKey = `${this.cachePrefix}${hub.key || 'HUB'}_${rKm}`;
            
            // 1. In-memory cache
            if (this.cache.has(cacheKey)) {
                return this.cache.get(cacheKey);
            }

            // 2. LocalStorage cache
            if (typeof window !== 'undefined' && window.localStorage) {
                try {
                    const cached = localStorage.getItem(cacheKey);
                    if (cached) {
                        const parsed = JSON.parse(cached);
                        if (Date.now() - parsed.timestamp < this.cacheTtlMs && parsed.outposts && parsed.outposts.length > 0) {
                            this.cache.set(cacheKey, parsed.outposts);
                            return parsed.outposts;
                        }
                    }
                } catch (e) {
                    console.warn('[DynamicSpatialService] localStorage read warning:', e);
                }
            }

            // 3. Live Overpass query across scalable tactical corridors
            let outposts = [];
            if (rKm >= 500) {
                // Chunked sector queries for macro-radii to prevent Western Ghats timeout
                const chunks = this.getSectorChunks(hub.lat, hub.lon, rKm);
                const chunkResults = [];
                for (const chunk of chunks) {
                    const chunkQuery = this.buildOverpassBboxQuery(chunk, chunk.limit, 25);
                    const res = await this.executeOverpassFetch(chunkQuery, hub, 20000);
                    if (res && res.length > 0) {
                        chunkResults.push(...res);
                    }
                }
                outposts = this.deduplicateOutposts(chunkResults);
            } else {
                // Single bounding-box query for local & regional sweeps
                const queryLimit = limit || (rKm >= 300 ? 80 : (rKm >= 200 ? 60 : 45));
                const query = this.buildOverpassQuery(hub.lat, hub.lon, rKm, queryLimit);
                outposts = await this.executeOverpassFetch(query, hub, 18000);
            }

            if (outposts.length > 0) {
                this.cache.set(cacheKey, outposts);
                if (typeof window !== 'undefined' && window.localStorage) {
                    try {
                        localStorage.setItem(cacheKey, JSON.stringify({
                            timestamp: Date.now(),
                            outposts
                        }));
                    } catch (err) {}
                }
                return outposts;
            }

            // 4. Offline Regional Baseline Fallback (ensures instant availability even without network)
            if (this.regionalFallbacks && this.regionalFallbacks[hub.key]) {
                const maxAllowed = (rKm >= 500 ? 800 : rKm + 15);
                const regionalList = this.regionalFallbacks[hub.key].map(item => {
                    const distKm = Math.round(this.calculateDistance(hub.lat, hub.lon, item.lat, item.lon));
                    return {
                        ...item,
                        dist: distKm
                    };
                }).filter(item => item.dist <= maxAllowed);

                if (regionalList.length > 0) {
                    this.cache.set(cacheKey, regionalList);
                    return regionalList;
                }
            }

            return [];
        }

        /**
         * Retrieve high-fidelity regional outposts for a given hub
         */
        getRegionalFallbacks(hubKey) {
            const k = (hubKey || 'PNQ').toUpperCase();
            return (this.regionalFallbacks && this.regionalFallbacks[k]) ? [...this.regionalFallbacks[k]] : [];
        }

        /**
         * Merge dynamic spatial outposts with existing master POIs
         */
        mergeWithBaseline(baselinePois = [], dynamicOutposts = []) {
            if (!Array.isArray(dynamicOutposts) || dynamicOutposts.length === 0) {
                return baselinePois;
            }

            const merged = [...baselinePois];
            const existingNames = new Set(baselinePois.map(p => p.name.toLowerCase()));

            dynamicOutposts.forEach(dyn => {
                if (!existingNames.has(dyn.name.toLowerCase())) {
                    merged.push(dyn);
                    existingNames.add(dyn.name.toLowerCase());
                }
            });

            return merged;
        }
    }

    const dynamicSpatialService = new DynamicSpatialService();

    return {
        DynamicSpatialService,
        dynamicSpatialService
    };
});

