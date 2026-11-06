/**
 * Tactical Highway Corridors, Proportional Waypoints & Vector Polylines Engine
 * 
 * Provides verified highway routing geometry across Indian National & State Highway
 * networks (NH 44, NH 48, NH 275, NH 16, NH 65, NH 30, NH 163, NH 765, NH 32 ECR, etc.).
 * Converts true road paths into continuous, organic SVG Bézier vector ribbons.
 */
(function (root, factory) {
    const service = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = service;
    } else if (typeof window !== 'undefined') {
        window.corridorService = service;
    }
})(typeof self !== 'undefined' ? self : this, function () {

    // Common Waypoint Category Icons & Badges
    const WAYPOINT_ICONS = {
        coffee: "☕",
        viewpoint: "⛰️",
        nature: "🌲",
        fuel: "⛽",
        heritage: "🏛️",
        toll: "⛩️",
        water: "💧",
        food: "🍱"
    };

    // Major Highway Trunk Nodes [lat, lon, name, type, tip]
    const TRUNKS = {
        // ------------------------------------------------------------------------
        // BENGALURU CORRIDORS
        // ------------------------------------------------------------------------
        // NH 275: Bengaluru -> Mysuru Expressway
        BLR_MYS: [
            { lat: 12.9716, lon: 77.5946, name: "Bengaluru Origin", type: "toll" },
            { lat: 12.8250, lon: 77.4420, name: "Bidadi Thatte Idli Strip", type: "coffee", km: 34, tip: "Iconic breakfast stop for hot thatte idlis with spiced coconut chutney and butter." },
            { lat: 12.7226, lon: 77.2783, name: "Ramanagara Sholay Crags", type: "viewpoint", km: 48, tip: "Dramatic monolithic granite boulders where classic Indian movies were filmed." },
            { lat: 12.6518, lon: 77.2038, name: "Channapatna Toy Arcade", type: "heritage", km: 62, tip: "Traditional ivory-wood lacquer toy craft stores lining the highway." },
            { lat: 12.5852, lon: 77.0475, name: "Maddur Tiffany Heritage", type: "food", km: 82, tip: "Home of original crispy Maddur Vada served fresh with onion and ginger relish." },
            { lat: 12.5230, lon: 76.8988, name: "Mandya Sugar Capital", type: "fuel", km: 100, tip: "Major agricultural expressway bypass with EV ultra-fast charging plazas." },
            { lat: 12.4238, lon: 76.6853, name: "Srirangapatna Cauvery Fort", type: "heritage", km: 125, tip: "Historic island fortress of Tipu Sultan flanked by the sacred north and south Cauvery rivers." },
            { lat: 12.2958, lon: 76.6394, name: "Mysuru Royal Palace Hub", type: "heritage", km: 145, tip: "Heritage junction connecting roads to Coorg, Wayanad, Kabini, and the Nilgiris." }
        ],

        // NH 766: Mysuru -> Gundlupet -> Bandipur -> Ooty (36 Hairpins)
        MYS_OOTY: [
            { lat: 12.2958, lon: 76.6394, name: "Mysuru Hub", type: "toll" },
            { lat: 12.1215, lon: 76.6816, name: "Nanjangud Temple Town", type: "heritage", km: 168, tip: "Ancient Srikanteshwara temple town on the Kapila river bank." },
            { lat: 11.8028, lon: 76.6912, name: "Gundlupet Sunflower Cross", type: "fuel", km: 205, tip: "Crucial highway fork branching west into Kerala (Wayanad) and south to Tamil Nadu (Ooty)." },
            { lat: 11.6662, lon: 76.6334, name: "Bandipur Tiger Reserve Entry", type: "nature", km: 228, tip: "Forest gate with wildlife speed sensors; deer, elephants, and peacocks frequently sighted." },
            { lat: 11.5830, lon: 76.6025, name: "Theppakadu Elephant Camp", type: "nature", km: 242, tip: "Mudumalai sanctuary boundary and junction for the thrilling steep Masinagudi shortcut." },
            { lat: 11.5300, lon: 76.6450, name: "Kalhatty 36 Hairpin Ascent", type: "viewpoint", km: 258, tip: "Steep 1,200m vertical climb negotiating 36 hairpin turns with panoramic Nilgiri views." },
            { lat: 11.4102, lon: 76.6950, name: "Ooty Botanical Ridge", type: "viewpoint", km: 275, tip: "Queen of the Hill Stations at 2,240m elevation enveloped in blue gum eucalyptus mist." }
        ],

        // NH 766: Gundlupet -> Sultan Bathery -> Wayanad
        MYS_WAYANAD: [
            { lat: 11.8028, lon: 76.6912, name: "Gundlupet Junction", type: "toll" },
            { lat: 11.7100, lon: 76.4500, name: "Moolehole Forest Checkpost", type: "nature", km: 232, tip: "Inter-state border pass traversing pristine deciduous sal and bamboo corridors." },
            { lat: 11.6644, lon: 76.2575, name: "Sultan Bathery Jain Bastis", type: "heritage", km: 255, tip: "Historic 13th-century granite temple used as Tipu Sultan's battery munitions dump." },
            { lat: 11.6050, lon: 76.0830, name: "Kalpetta Tea Valley", type: "viewpoint", km: 280, tip: "Heart of Wayanad coffee estates, bamboo handicrafts, and misty Chembra views." }
        ],

        // Mysuru -> H.D. Kote -> Kabini
        MYS_KABINI: [
            { lat: 12.2958, lon: 76.6394, name: "Mysuru Hub", type: "toll" },
            { lat: 12.0910, lon: 76.3310, name: "H.D. Kote Town", type: "fuel", km: 190, tip: "Quaint rural taluk gateway into the backwaters of the Kabini dam." },
            { lat: 11.9610, lon: 76.2410, name: "Antharasanthe Forest Gate", type: "nature", km: 205, tip: "Safari booking station where the Nagarhole and Bandipur wildernesses meet." },
            { lat: 11.9214, lon: 76.1558, name: "Kabini Riverfront", type: "nature", km: 216, tip: "Celebrated wildlife basin famed for highest Asian elephant density and black panther turf." }
        ],

        // Mysuru -> Hunsur -> Kushalnagar -> Madikeri (Coorg)
        MYS_COORG: [
            { lat: 12.2958, lon: 76.6394, name: "Mysuru Hub", type: "toll" },
            { lat: 12.3110, lon: 76.2910, name: "Hunsur Coffee Highway", type: "fuel", km: 188, tip: "Bustling coffee processing town and entry to Kodagu district." },
            { lat: 12.4560, lon: 75.9620, name: "Bylakuppe Golden Temple", type: "heritage", km: 222, tip: "Second largest Tibetan settlement outside Tibet, home to Namdroling Monastery." },
            { lat: 12.4640, lon: 75.9580, name: "Kushalnagar Cauvery Bridge", type: "water", km: 226, tip: "Gateway crossing of the young Cauvery river fringed by bamboo groves." },
            { lat: 12.4244, lon: 75.7382, name: "Madikeri Hill Fort", type: "viewpoint", km: 265, tip: "Misty capital of Coorg surrounded by lush Arabica coffee plantations and spice estates." }
        ],

        // NH 75: Bengaluru -> Hassan -> Sakleshpur -> Mangalore
        BLR_HASSAN: [
            { lat: 12.9716, lon: 77.5946, name: "Bengaluru Origin", type: "toll" },
            { lat: 13.0980, lon: 77.3910, name: "Nelamangala Highway Fork", type: "toll", km: 28, tip: "Major 8-lane expressway junction branching toward Hassan (NH 75) and Pune (NH 48)." },
            { lat: 13.0230, lon: 77.0320, name: "Kunigal Lake Express Stop", type: "coffee", km: 74, tip: "Popular breakfast corridor with fast highway dining and coffee plazas." },
            { lat: 12.9810, lon: 76.7320, name: "Bellur Cross Adichunchanagiri", type: "heritage", km: 108, tip: "Historic temple hill intersection and rural medical college township." },
            { lat: 12.9020, lon: 76.3910, name: "Channarayapatna / Shravanabelagola", type: "heritage", km: 145, tip: "Diversion for the world's tallest 57-foot monolithic statue of Lord Bahubali (Gommateshwara)." },
            { lat: 13.0033, lon: 76.1004, name: "Hassan Architectural Hub", type: "fuel", km: 185, tip: "Gateway to Hoysala stone temples of Belur and Halebidu." },
            { lat: 12.9440, lon: 75.7860, name: "Sakleshpur Manjarabad Fort", type: "viewpoint", km: 222, tip: "Star-shaped 1792 octagonal hill fort constructed by Tipu Sultan overlooking the Western Ghats." },
            { lat: 12.8700, lon: 75.5800, name: "Shiradi Ghat Forest Pass", type: "viewpoint", km: 260, tip: "Scenic mountain pass traversing steep Western Ghats rainforest descents." },
            { lat: 12.9141, lon: 74.8560, name: "Mangalore Coastal Terminal", type: "water", km: 350, tip: "Arabian Sea port city famous for golden beaches, ghee roast cuisine, and port sunsets." }
        ],

        // Hassan -> Belur -> Chikmagalur
        HASSAN_CHIKMAGALUR: [
            { lat: 13.0033, lon: 76.1004, name: "Hassan Hub", type: "toll" },
            { lat: 13.1620, lon: 75.8610, name: "Belur Chennakeshava Temple", type: "heritage", km: 220, tip: "12th-century Hoysala soapstone masterpiece carved over 103 years." },
            { lat: 13.3161, lon: 75.7720, name: "Chikmagalur Coffee Hub", type: "coffee", km: 245, tip: "Cradle of Indian coffee founded by Baba Budan; base for trekking Karnataka's highest peak." }
        ],

        // Chikmagalur -> Aldur -> Balehonnur -> Sringeri
        CHIKMAGALUR_SRINGERI: [
            { lat: 13.3161, lon: 75.7720, name: "Chikmagalur Hub", type: "toll" },
            { lat: 13.2980, lon: 75.6420, name: "Aldur Estate Canopies", type: "nature", km: 268, tip: "Lush shade-grown coffee canopy and pepper vines." },
            { lat: 13.3480, lon: 75.4710, name: "Balehonnur Bhadra Bridge", type: "water", km: 295, tip: "Scenic crossing over the roaring Bhadra river with Rambhapuri Matha." },
            { lat: 13.4187, lon: 75.2570, name: "Sringeri Sharada Peetham", type: "heritage", km: 320, tip: "Revered Shankaracharya peetham on the Tunga river with Vidyashankara stone temple." }
        ],

        // NH 48: Bengaluru -> Tumakuru -> Chitradurga -> Hampi
        BLR_HAMPI: [
            { lat: 12.9716, lon: 77.5946, name: "Bengaluru Origin", type: "toll" },
            { lat: 13.3422, lon: 77.1017, name: "Tumakuru Devarayanadurga Bypass", type: "fuel", km: 72, tip: "Major industrial city and gateway to the hilltop yoga Narasimha shrines." },
            { lat: 13.7430, lon: 76.9020, name: "Sira Mughal Tomb Strip", type: "heritage", km: 122, tip: "Historical 17th-century Malik Rihan dargah and Kasturi Rangappa fort outpost." },
            { lat: 14.2230, lon: 76.4020, name: "Chitradurga Kallina Kote", type: "heritage", km: 200, tip: "Legendary seven-concentric boulder stone citadel with 18 secret watchtowers." },
            { lat: 14.8620, lon: 76.3810, name: "Kudligi Iron Ore Corridor", type: "fuel", km: 275, tip: "Transition into the rugged Deccan thorn scrub plateau along NH 50." },
            { lat: 15.2710, lon: 76.3920, name: "Hospet Tungabhadra Dam", type: "water", km: 330, tip: "Vast masonry reservoir with illuminated musical gardens and watchtowers." },
            { lat: 15.3350, lon: 76.4600, name: "Hampi UNESCO Ruins", type: "heritage", km: 345, tip: "Glorious 14th-century capital of the Vijayanagara Empire on the boulder-strewn Tungabhadra." }
        ],

        // NH 44: Bengaluru -> Hosur -> Krishnagiri -> Salem -> Madurai -> Kanyakumari
        BLR_KANYAKUMARI: [
            { lat: 12.9716, lon: 77.5946, name: "Bengaluru Origin", type: "toll" },
            { lat: 12.7410, lon: 77.8280, name: "Hosur Industrial Gateway", type: "fuel", km: 40, tip: "Border town marking entry into Tamil Nadu with flower nurseries and rose exports." },
            { lat: 12.5240, lon: 78.2140, name: "Krishnagiri Fort Toll Plaza", type: "food", km: 92, tip: "Major highway fork for Chennai (NH 48), Salem (NH 44), and Pondicherry (NH 77)." },
            { lat: 12.1280, lon: 78.1580, name: "Dharmapuri Mango Belt", type: "nature", km: 138, tip: "Diversion for Hogenakkal Falls on the Cauvery river." },
            { lat: 11.8500, lon: 78.0700, name: "Thoppur Ghat Express Pass", type: "viewpoint", km: 168, tip: "Dramatic 4-lane mountain cutting through the Shevaroy-Kalrayan hills." },
            { lat: 11.6643, lon: 78.1460, name: "Salem Steel Junction", type: "fuel", km: 205, tip: "Central Tamil Nadu transit node surrounded by Nagaramalai and Jarugumalai peaks." },
            { lat: 10.9600, lon: 78.0800, name: "Karur Amaravathi Crossing", type: "water", km: 295, tip: "Ancient textile capital on the sacred Amaravathi river." },
            { lat: 10.3624, lon: 77.9803, name: "Dindigul Rock Fort", type: "heritage", km: 375, tip: "Famous 17th-century monolithic rock fortress and biryani capital; fork for Kodaikanal." },
            { lat: 9.9252, lon: 78.1198, name: "Madurai Meenakshi City", type: "heritage", km: 435, tip: "Cultural capital of the Pandyan dynasty with 14 towering gopurams." },
            { lat: 8.7139, lon: 77.7567, name: "Tirunelveli Halwa Hub", type: "food", km: 585, tip: "Historic Nellaiyappar temple city along the sacred Thamirabarani river." },
            { lat: 8.0883, lon: 77.5385, name: "Kanyakumari Peninsular Tip", type: "water", km: 665, tip: "Southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean meet." }
        ],

        // ------------------------------------------------------------------------
        // HYDERABAD CORRIDORS
        // ------------------------------------------------------------------------
        // NH 765: Hyderabad -> Kalwakurthy -> Mannanur -> Srisailam
        HYD_SRISAILAM: [
            { lat: 17.3850, lon: 78.4867, name: "Hyderabad Origin", type: "toll" },
            { lat: 17.0620, lon: 78.5810, name: "Ibrahimpatnam Lake Hub", type: "water", km: 32, tip: "Outskirts reservoir marking the start of the dedicated Nagarjunasagar / Srisailam highway." },
            { lat: 16.6690, lon: 78.4910, name: "Kalwakurthy Crossroads", type: "fuel", km: 82, tip: "Key road junction connecting southern Telangana agriculture basins." },
            { lat: 16.5810, lon: 78.8210, name: "Dindi Reservoir Spillway", type: "water", km: 110, tip: "Scenic dam with water reflections and fishing villages." },
            { lat: 16.3310, lon: 78.7810, name: "Mannanur Tiger Reserve Gate", type: "nature", km: 145, tip: "Entry checkpost for Amrabad Tiger Reserve; night driving restricted from 9 PM to 6 AM." },
            { lat: 16.2710, lon: 78.8210, name: "Farhabad 360° Valley Vista", type: "viewpoint", km: 175, tip: "Panoramic wooden watchtower perched 200m above the endless Nallamala jungle canopy." },
            { lat: 16.1410, lon: 78.8710, name: "Octopus Krishna Canyon View", type: "viewpoint", km: 195, tip: "Breathtaking overlook of the serpentine Krishna river canyon resembling octopus tentacles." },
            { lat: 16.0740, lon: 78.8680, name: "Srisailam Dam Overlook", type: "water", km: 210, tip: "Vast gorge dam with 12 radial crest gates discharging torrential emerald plumes." },
            { lat: 16.0736, lon: 78.8687, name: "Srisailam Mallikarjuna Jyotirlinga", type: "heritage", km: 215, tip: "One of only three sacred shrines in India that is simultaneously a Jyotirlinga and a Shakti Peetha." }
        ],

        // NH 163 & NH 30: Hyderabad -> Warangal -> Bhadrachalam -> Bastar / Chhattisgarh
        HYD_BASTAR: [
            { lat: 17.3850, lon: 78.4867, name: "Hyderabad Origin", type: "toll" },
            { lat: 17.5110, lon: 78.8890, name: "Bhongir Monolithic Fort", type: "viewpoint", km: 50, tip: "Smooth egg-shaped granite dome rising 500 feet with Chalukyan ramparts." },
            { lat: 17.7210, lon: 79.1820, name: "Jangaon Craft Strip", type: "food", km: 85, tip: "Famous brassware and Pembarthi sheet-metal artisan corridor." },
            { lat: 17.9784, lon: 79.5941, name: "Warangal 1000-Pillar Temple", type: "heritage", km: 150, tip: "12th-century Kakatiya star-shaped temple and Warangal fort stone Torana gateways." },
            { lat: 17.2510, lon: 80.1510, name: "Khammam Palair Lake", type: "water", km: 220, tip: "Vast lake fed by the Palair river with lakeside resorts and fish cuisine." },
            { lat: 17.6690, lon: 80.8920, name: "Bhadrachalam Godavari Ghat", type: "heritage", km: 310, tip: "Sacred 17th-century Sri Rama temple on the bend of the holy Godavari river." },
            { lat: 18.4010, lon: 81.6710, name: "Sukma Dandakaranya Gateway", type: "nature", km: 395, tip: "Dense forested border crossing into Chhattisgarh's legendary Bastar tribal country." },
            { lat: 18.8943, lon: 81.3497, name: "Dantewada Danteshwari Temple", type: "heritage", km: 440, tip: "Confluence of Shankini and Dankini rivers; 14th-century Shakti Peetha shrine." },
            { lat: 18.9056, lon: 81.8631, name: "Tirathgarh Step Falls", type: "water", km: 495, tip: "Limestone block waterfall cascading down white terraces inside Kanger Valley." },
            { lat: 19.0744, lon: 82.0080, name: "Jagdalpur Bastar Palace Hub", type: "heritage", km: 515, tip: "Bastar tribal craft capital famous for Dokra bronze castings and Bell-Metal bells." },
            { lat: 19.2064, lon: 81.7061, name: "Chitrakote Horseshoe Falls", type: "viewpoint", km: 520, tip: "Niagara of India — 300m wide crescent plunge of the Indravati river." }
        ],

        // NH 44: Hyderabad -> Nirmal -> Adilabad -> Tadoba / Nagpur
        HYD_NAGPUR: [
            { lat: 17.3850, lon: 78.4867, name: "Hyderabad Origin", type: "toll" },
            { lat: 18.3220, lon: 78.3410, name: "Kamareddy Food Plazas", type: "coffee", km: 115, tip: "Modern 4-lane highway expressway food plazas with extensive regional cuisine." },
            { lat: 19.0910, lon: 78.3420, name: "Nirmal Wooden Toy Fort", type: "heritage", km: 220, tip: "Artisan hub world-famous for oil-painted softwood toys and lacquered crafts." },
            { lat: 19.6640, lon: 78.5320, name: "Adilabad Forest Frontier", type: "fuel", km: 305, tip: "Northernmost district of Telangana bordering Maharashtra; gateway to Kuntala Falls." },
            { lat: 19.9615, lon: 79.2961, name: "Tadoba Andhari Tiger Reserve", type: "nature", km: 430, tip: "Maharashtra's oldest national park known for the highest tiger density in central India." },
            { lat: 21.1458, lon: 79.0882, name: "Nagpur Zero Mile Stone", type: "heritage", km: 500, tip: "Geographical center of India and the Orange City gateway to Pench." }
        ],

        // ------------------------------------------------------------------------
        // CHENNAI CORRIDORS
        // ------------------------------------------------------------------------
        // NH 32 (ECR): Chennai -> Mahabalipuram -> Pondicherry -> Velankanni
        MAA_ECR: [
            { lat: 13.0827, lon: 80.2707, name: "Chennai Origin", type: "toll" },
            { lat: 12.8250, lon: 80.2410, name: "Muttukadu Boating Lagoon", type: "water", km: 32, tip: "Estuary where backwaters meet the sea; windsurfing and catamaran rides." },
            { lat: 12.6208, lon: 80.1944, name: "Mahabalipuram Shore Temple", type: "heritage", km: 55, tip: "UNESCO World Heritage 7th-century monolithic granite rock-reliefs and Shore Temple." },
            { lat: 12.2010, lon: 79.9510, name: "Marakkanam Salt Pans", type: "nature", km: 115, tip: "Vast dazzling white salt pans stretching beside scenic coastal inlets." },
            { lat: 12.0060, lon: 79.8110, name: "Auroville Matrimandir", type: "heritage", km: 145, tip: "Experimental international township centered around the golden geodesic meditation sphere." },
            { lat: 11.9416, lon: 79.8083, name: "Pondicherry French Quarter", type: "heritage", km: 155, tip: "Charming seaside boulevard with French colonial mansions, bakeries, and Promenade Beach." },
            { lat: 11.3990, lon: 79.6930, name: "Pichavaram Mangrove Forest", type: "nature", km: 225, tip: "World's second largest mangrove forest with 4,400 interconnected tidal water canals." },
            { lat: 11.0310, lon: 79.8510, name: "Tranquebar Dansborg Fort", type: "heritage", km: 280, tip: "Sole 1620 Danish fort in India overlooking the surf of the Coromandel coast." }
        ],

        // NH 45 (GST): Chennai -> Chengalpattu -> Tindivanam -> Trichy -> Madurai
        MAA_TRICHY: [
            { lat: 13.0827, lon: 80.2707, name: "Chennai Origin", type: "toll" },
            { lat: 12.6840, lon: 79.9830, name: "Chengalpattu Lake View", type: "water", km: 58, tip: "Historic garrison lake city on the Palar river basin." },
            { lat: 12.5440, lon: 79.8550, name: "Vedanthangal Bird Sanctuary", type: "nature", km: 85, tip: "Oldest waterbird sanctuary in India home to 40,000+ migratory storks and herons." },
            { lat: 12.2310, lon: 79.6510, name: "Tindivanam Highway Hub", type: "fuel", km: 125, tip: "Bustling transit junction connecting routes to Gingee Fort and Tiruvannamalai." },
            { lat: 11.9410, lon: 79.4910, name: "Villupuram Rail Interchange", type: "coffee", km: 160, tip: "Central crossroads with traditional South Indian tiffin centers." },
            { lat: 11.5410, lon: 79.2910, name: "Ulundurpet Food Court Corridor", type: "food", km: 195, tip: "Major highway pitstop with multi-brand express dining and clean fuel stations." },
            { lat: 10.7905, lon: 78.7047, name: "Trichy Rockfort & Kaveri", type: "heritage", km: 330, tip: "83m monolithic rock citadel and the 156-acre Sri Ranganathaswamy island temple." },
            { lat: 10.7870, lon: 79.1378, name: "Thanjavur Brihadisvara UNESCO", type: "heritage", km: 360, tip: "The Great Living Chola Temple with its monolithic 80-ton granite cupola." }
        ],

        // NH 16: Chennai -> Tada -> Nellore -> Vijayawada
        MAA_VIJAYAWADA: [
            { lat: 13.0827, lon: 80.2707, name: "Chennai Origin", type: "toll" },
            { lat: 13.5810, lon: 80.0310, name: "Tada Falls Forest Border", type: "nature", km: 70, tip: "Popular trekking creek with crystal pools in the Kambakam forest." },
            { lat: 13.7010, lon: 80.0210, name: "Pulicat Lagoon Sanctuary", type: "water", km: 85, tip: "Brackish water lagoon where thousands of Greater Flamingos feed in winter." },
            { lat: 14.4426, lon: 79.9865, name: "Nellore Penna River Bridge", type: "food", km: 175, tip: "Famous for coastal Andhra cuisine, Nellore chepala pulusu, and Mypadu beach." },
            { lat: 15.5057, lon: 80.0499, name: "Ongole Coastal Expressway", type: "fuel", km: 310, tip: "Home of the majestic Ongole humped bull breed and coastal seafood hub." },
            { lat: 16.5062, lon: 80.6480, name: "Vijayawada Kanaka Durga", type: "heritage", km: 450, tip: "Major Andhra metropolis on the Krishna river, flanked by Indrakeeladri hill." }
        ],

        // ------------------------------------------------------------------------
        // PUNE (PNQ) CORRIDORS
        // ------------------------------------------------------------------------
        // NH 60 & NH 52: Pune -> Nashik -> Dhule -> Sendhwa -> Maheshwar -> Mandu / Indore
        PNQ_MP: [
            { lat: 18.5204, lon: 73.8567, name: "Pune Origin", type: "toll", km: 0 },
            { lat: 18.7560, lon: 73.8550, name: "Chakan Industrial Corridor", type: "toll", km: 32, tip: "Major automobile manufacturing belt and bypass gateway." },
            { lat: 19.5700, lon: 74.2100, name: "Sangamner Ghoti Bypass", type: "fuel", km: 140, tip: "Pravara river basin transit junction with 24/7 highway food courts." },
            { lat: 19.9975, lon: 73.7898, name: "Nashik Wine & Panchavati Hub", type: "coffee", km: 212, tip: "Wine capital of India on the holy Godavari river with historic temples and vineyards." },
            { lat: 20.3200, lon: 74.2400, name: "Chandwad Fort Pass", type: "viewpoint", km: 275, tip: "Scenic mountain pass overlooked by historic Ahilyabai Holkar fortress." },
            { lat: 20.9042, lon: 74.7749, name: "Dhule Crossroads (NH 60 / NH 52)", type: "fuel", km: 345, tip: "Crucial central transport crossroad connecting Maharashtra to Madhya Pradesh and Gujarat." },
            { lat: 21.3500, lon: 74.8800, name: "Shirpur Tapti River Basin", type: "nature", km: 395, tip: "Fertile Khandesh plains approaching the Satpura mountain ranges." },
            { lat: 21.6850, lon: 75.0950, name: "Sendhwa Border Pass (MH-MP)", type: "toll", km: 445, tip: "Inter-state border gateway climbing through rugged Satpura Ghat passes." },
            { lat: 22.1600, lon: 75.4700, name: "Dhamnod Junction (Narmada Valley)", type: "fuel", km: 495, tip: "Lowland intersection branching south to Maheshwar ghats and west to Mandu citadel." },
            { lat: 22.1765, lon: 75.5847, name: "Maheshwar Ahilya Fort & Ghats", type: "heritage", km: 527, tip: "Iconic 18th-century Holkar capital with towering carved stone ghats on the sacred Narmada." }
        ],

        // NH 48: Pune -> Mumbai Bypass -> Surat -> Bharuch -> Kevadia / Ahmedabad (Gujarat Corridor)
        PNQ_GUJ: [
            { lat: 18.5204, lon: 73.8567, name: "Pune Origin", type: "toll", km: 0 },
            { lat: 18.7500, lon: 73.4000, name: "Lonavala Khandala Crest", type: "viewpoint", km: 65, tip: "Scenic Sahyadri expressway mountain pass enveloped in monsoon mist." },
            { lat: 18.9900, lon: 73.1100, name: "Panvel Expressway Gateway", type: "toll", km: 115, tip: "Expressway terminus linking JNPT freight corridor and Mumbai bypass." },
            { lat: 19.2600, lon: 72.9700, name: "Thane Ghodbunder Road", type: "fuel", km: 165, tip: "Strategic bypass avoiding city congestion heading north onto NH 48." },
            { lat: 19.7400, lon: 72.9100, name: "Manor Palghar Expressway Strip", type: "coffee", km: 225, tip: "Popular highway dining corridor at the foothills of the Northern Konkan ranges." },
            { lat: 20.3700, lon: 72.9100, name: "Vapi Gujarat Border Gate", type: "toll", km: 290, tip: "Southern industrial frontier of Gujarat marking entry into Daman & Diu territory." },
            { lat: 20.6100, lon: 72.9300, name: "Valsad Coastal Highway Strip", type: "nature", km: 320, tip: "Verdant orchard belt renowned for Alphonso mango groves along the Arabian Sea." },
            { lat: 21.1702, lon: 72.8311, name: "Surat Diamond City Bypass", type: "fuel", km: 380, tip: "Modern expressway beltway skirting the Tapti river delta." },
            { lat: 21.7051, lon: 72.9959, name: "Bharuch Golden Bridge Crossing", type: "heritage", km: 425, tip: "Historic Narmada river crossing on India oldest working highway bridge." },
            { lat: 21.8380, lon: 73.7191, name: "Statue of Unity & Kevadia", type: "heritage", km: 450, tip: "World tallest monument (182m) situated on the Narmada river overlooking Sardar Sarovar Dam." }
        ]
    };

    /**
     * Catmull-Rom to Cubic Bézier spline converter.
     * Takes an array of pixel points [{x, y}, ...] and outputs a smooth SVG path `d`.
     */
    function pointsToSpline(pts) {
        if (!pts || pts.length === 0) return '';
        if (pts.length === 1) return `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
        if (pts.length === 2) {
            return `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)} L ${pts[1].x.toFixed(1)} ${pts[1].y.toFixed(1)}`;
        }

        let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
        for (let i = 0; i < pts.length - 1; i++) {
            const p0 = i > 0 ? pts[i - 1] : pts[i];
            const p1 = pts[i];
            const p2 = pts[i + 1];
            const p3 = i < pts.length - 2 ? pts[i + 2] : p2;

            const cp1x = p1.x + (p2.x - p0.x) / 6;
            const cp1y = p1.y + (p2.y - p0.y) / 6;
            const cp2x = p2.x - (p3.x - p1.x) / 6;
            const cp2y = p2.y - (p3.y - p1.y) / 6;

            d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
        }
        return d;
    }

    class CorridorService {
        constructor() {
            this.trunks = TRUNKS;
            this.icons = WAYPOINT_ICONS;
        }

        /**
         * Resolves the custom highway route, coordinates, waypoints, and SVG polyline
         * for a given origin hub and destination POI.
         * 
         * @param {string} hubKey - 'BLR', 'HYD', 'MAA'
         * @param {Object} hub - { lat, lon, name }
         * @param {Object} poi - Destination object { id, name, lat, lon, dist, ... }
         * @param {Function} projectFn - Projection function (lat, lon, hubLat, hubLon) => {x, y}
         * @returns {Object} Route result with highway name, coordinates, waypoints, and SVG path
         */
        getHighwayRoute(hubKey, hub, poi, projectFn) {
            const hk = (hubKey || 'BLR').toUpperCase();
            let chain = [];
            let routeName = "National Highway Corridor";
            let waypoints = [];

            // --------------------------------------------------------------------
            // 1. MATCH CORRIDOR CHAINS BY DESTINATION & HUB
            // --------------------------------------------------------------------
            if (hk === 'BLR') {
                if (['ooty', 'coonoor', 'kotagiri'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_MYS, ...this.trunks.MYS_OOTY.slice(1)];
                    routeName = "NH 275 Bengaluru-Mysuru Exp ➔ NH 766 Gundlupet ➔ 36 Hairpins";
                } else if (['wayanad', 'kuruva_island'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_MYS, ...this.trunks.MYS_WAYANAD.slice(1)];
                    routeName = "NH 275 Bengaluru-Mysuru Exp ➔ Gundlupet ➔ Sultan Bathery";
                } else if (['kabini', 'bandipur_national_park'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_MYS, ...this.trunks.MYS_KABINI.slice(1)];
                    routeName = "NH 275 Bengaluru-Mysuru Exp ➔ H.D. Kote ➔ Kabini Basin";
                } else if (['coorg', 'kushalnagar_bylakuppe', 'kakkabe_tadiandamol'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_MYS, ...this.trunks.MYS_COORG.slice(1)];
                    routeName = "NH 275 Bengaluru-Mysuru Exp ➔ Hunsur ➔ Madikeri Ghat";
                } else if (['mysore', 'somnathpur', 'talakadu', 'ranganathittu_bird_sanctuary'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_MYS];
                    routeName = "NH 275 Bengaluru-Mysuru Expressway";
                } else if (['sringeri'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_HASSAN.slice(0, 6), ...this.trunks.HASSAN_CHIKMAGALUR.slice(1), ...this.trunks.CHIKMAGALUR_SRINGERI.slice(1)];
                    routeName = "NH 75 Hassan ➔ Belur ➔ Chikmagalur ➔ Balehonnur ➔ Sringeri";
                } else if (['chikmagalur', 'mullayanagiri_peak', 'kemmangundi', 'belur_halebidu'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_HASSAN.slice(0, 6), ...this.trunks.HASSAN_CHIKMAGALUR.slice(1)];
                    routeName = "NH 75 Hassan Highway ➔ Belur ➔ Chikmagalur Hills";
                } else if (['sakleshpur', 'mangalore', 'udupi_malpe_beach', 'maravanthe_beach'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_HASSAN];
                    routeName = "NH 75 Hassan ➔ Sakleshpur ➔ Shiradi Ghat ➔ NH 66";
                } else if (['hampi', 'chitradurga'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_HAMPI];
                    routeName = "NH 48 Pune Highway ➔ Chitradurga ➔ NH 50 Hospet";
                } else if (['kanyakumari', 'madurai'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_KANYAKUMARI];
                    routeName = "NH 44 North-South 4-Lane Corridor via Salem & Madurai";
                } else if (['munnar', 'kodaikanal', 'valparai', 'yercaud'].includes(poi.id)) {
                    chain = [...this.trunks.BLR_KANYAKUMARI.slice(0, 8)];
                    routeName = "NH 44 South ➔ Salem ➔ Dindigul Ghat Pass";
                } else if (['pondicherry', 'auroville', 'gingee_fort', 'tiruvannamalai'].includes(poi.id)) {
                    chain = [
                        this.trunks.BLR_KANYAKUMARI[0],
                        this.trunks.BLR_KANYAKUMARI[2], // Krishnagiri
                        { lat: 12.2253, lon: 79.0747, name: "Tiruvannamalai Annamalaiyar", type: "heritage", km: 210, tip: "Sacred fire element Agni hill shrine." },
                        { lat: 12.2514, lon: 79.4172, name: "Gingee Rajagiri Fortress", type: "heritage", km: 248, tip: "Impregnable Troy of the East." },
                        { lat: 11.9416, lon: 79.8083, name: "Pondicherry Beach", type: "heritage", km: 310, tip: "Promenade beachfront." }
                    ];
                    routeName = "NH 44 to Krishnagiri ➔ NH 77 Tiruvannamalai ➔ Gingee";
                }
            } else if (hk === 'HYD') {
                if (['srisailam'].includes(poi.id)) {
                    chain = [...this.trunks.HYD_SRISAILAM];
                    routeName = "Srisailam Highway NH 765 via Dindi & Mannanur";
                } else if (['chitrakote_falls', 'jagdalpur', 'dantewada', 'barsur', 'tirathgarh_falls', 'kanger_valley_kutumsar'].includes(poi.id)) {
                    chain = [...this.trunks.HYD_BASTAR];
                    routeName = "NH 163 to Warangal ➔ Bhadrachalam ➔ NH 30 Bastar Plateau";
                } else if (['tadoba_andhari_tiger_reserve', 'nagpur', 'kuntala_falls', 'pochera_falls'].includes(poi.id)) {
                    chain = [...this.trunks.HYD_NAGPUR];
                    routeName = "NH 44 North ➔ Kamareddy ➔ Nirmal ➔ Adilabad";
                } else if (['alampur', 'kurnool_orvakal_rock_garden', 'mantralayam'].includes(poi.id)) {
                    chain = [
                        { lat: 17.3850, lon: 78.4867, name: "Hyderabad Origin", type: "toll" },
                        { lat: 16.7620, lon: 78.1310, name: "Jadcherla Express Crossing", type: "fuel", km: 85, tip: "Highway node branching toward Raichur." },
                        { lat: 16.1410, lon: 77.9420, name: "Beechupally Krishna Bridge", type: "water", km: 155, tip: "Sacred temple shrine on the broad Krishna river." },
                        { lat: 15.8820, lon: 78.1310, name: "Alampur Navabrahma Temples", type: "heritage", km: 215, tip: "7th-century Chalukyan temple complex." },
                        { lat: 15.8281, lon: 78.0373, name: "Kurnool Konda Reddy Buruju", type: "heritage", km: 225, tip: "Historic gateway fortress and Orvakal rock garden." }
                    ];
                    routeName = "NH 44 South ➔ Jadcherla ➔ Beechupally ➔ Kurnool";
                } else if (['vijayawada', 'amaravati', 'manginapudi_beach'].includes(poi.id)) {
                    chain = [
                        { lat: 17.3850, lon: 78.4867, name: "Hyderabad Origin", type: "toll" },
                        { lat: 17.1420, lon: 79.6210, name: "Suryapet 7-Spoke Food Mall", type: "food", km: 135, tip: "Bustling transit food mall with regional delicacies." },
                        { lat: 16.9920, lon: 79.9610, name: "Kodad Toll Plaza", type: "fuel", km: 180, tip: "State border crossing into Andhra Pradesh." },
                        { lat: 16.5062, lon: 80.6480, name: "Vijayawada Krishna Gateway", type: "heritage", km: 275, tip: "Major 4-lane expressway to coastal Andhra." }
                    ];
                    routeName = "NH 65 4-Lane Expressway to Vijayawada";
                }
            } else if (hk === 'MAA') {
                if (['pondicherry', 'auroville', 'mahabalipuram', 'tranquebar', 'chidambaram_pichavaram_mangrove', 'velankanni_nagore'].includes(poi.id)) {
                    chain = [...this.trunks.MAA_ECR];
                    routeName = "East Coast Road (ECR / NH 32) Scenic Shoreline Highway";
                } else if (['trichy', 'thanjavur', 'madurai', 'chettinad', 'rameshwaram_dhanushkodi'].includes(poi.id)) {
                    chain = [...this.trunks.MAA_TRICHY];
                    routeName = "Grand Southern Trunk (NH 45 / GST Road) via Tindivanam";
                } else if (['vijayawada', 'nellore', 'suryalanka_beach', 'lambasingi', 'visakhapatnam'].includes(poi.id)) {
                    chain = [...this.trunks.MAA_VIJAYAWADA];
                    routeName = "NH 16 North Coast Expressway via Nellore & Ongole";
                } else if (['kanchipuram', 'vellore_fort_jalakanteshwara', 'yelagiri_hills'].includes(poi.id)) {
                    chain = [
                        { lat: 13.0827, lon: 80.2707, name: "Chennai Origin", type: "toll" },
                        { lat: 12.9690, lon: 79.9410, name: "Sriperumbudur Rajiv Memorial", type: "heritage", km: 42, tip: "Major automobile manufacturing corridor." },
                        { lat: 12.8342, lon: 79.7036, name: "Kanchipuram Silk Temples", type: "heritage", km: 75, tip: "City of 1000 Temples and handwoven pure mulberry silk." },
                        { lat: 12.9210, lon: 79.1320, name: "Vellore Jalakanteshwara Fort", type: "heritage", km: 140, tip: "Massive 16th-century granite fort encircled by a crocodile moat." }
                    ];
                    routeName = "NH 48 Bengaluru Highway via Sriperumbudur & Kanchipuram";
                }
            } else if (hk === 'PNQ') {
                const pId = (poi.id || '').toLowerCase();
                const pName = (poi.name || '').toLowerCase();
                if (pId.includes('maheshwar') || pName.includes('maheshwar') ||
                    pId.includes('mandu') || pName.includes('mandu') ||
                    pId.includes('omkareshwar') || pName.includes('omkareshwar') ||
                    pId.includes('ujjain') || pName.includes('ujjain') ||
                    pId.includes('asirgarh') || pName.includes('asirgarh') ||
                    pId.includes('pachmarhi') || pName.includes('pachmarhi') ||
                    pId.includes('sanchi') || pName.includes('sanchi') ||
                    pId.includes('bhimbetka') || pName.includes('bhimbetka') ||
                    (poi.lat > 20.5 && poi.lon >= 74.5)) {
                    chain = [...this.trunks.PNQ_MP];
                    routeName = "NH 60 & NH 52 North Corridor via Nashik & Dhule to Narmada River Ghats";
                } else if (pId.includes('statue_of_unity') || pName.includes('statue of unity') ||
                           pId.includes('kevadia') || pName.includes('kevadia') ||
                           pId.includes('saputara') || pName.includes('saputara') ||
                           pId.includes('surat') || pName.includes('surat') ||
                           pId.includes('champaner') || pName.includes('champaner') ||
                           pId.includes('lothal') || pName.includes('lothal') ||
                           pId.includes('somnath') || pName.includes('somnath') ||
                           pId.includes('gir') || pName.includes('gir') ||
                           (poi.lat > 20.0 && poi.lon < 74.5)) {
                    chain = [...this.trunks.PNQ_GUJ];
                    routeName = "NH 48 Western Expressway via Mumbai Bypass, Surat & Bharuch ➔ Gujarat";
                }
            }

            // --------------------------------------------------------------------
            // 2. FALLBACK/ORGANIC ROUTING (If destination branch isn't in predefined chain)
            // --------------------------------------------------------------------
            if (chain.length === 0) {
                // Synthesize an authentic, organic curving road vector
                const hubLat = hub.lat;
                const hubLon = hub.lon;
                const destLat = poi.lat;
                const destLon = poi.lon;
                const d = poi.dist || Math.round(Math.hypot((destLat - hubLat) * 111, (destLon - hubLon) * 108) * 1.25) || 100;
                const stops = [];

                if (poi.cat === 'hill') {
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.32 + (destLon > hubLon ? -0.05 : 0.05),
                        lon: hubLon + (destLon - hubLon) * 0.28 + (destLat > hubLat ? 0.06 : -0.06),
                        name: "Expressway Breakfast Halt",
                        type: "coffee",
                        km: Math.min(d - 15, Math.max(15, Math.round(d * 0.30))),
                        tip: "Hot south-indian tiffin, idli-vada, and fresh filter coffee refill."
                    });
                    if (d > 140) {
                        stops.push({
                            lat: hubLat + (destLat - hubLat) * 0.65,
                            lon: hubLon + (destLon - hubLon) * 0.68,
                            name: "Foothill Fuel & Pressure Check",
                            type: "fuel",
                            km: Math.min(d - 20, Math.max(40, Math.round(d * 0.65))),
                            tip: "Last major fuel plaza and tire pressure calibration before mountain ascent."
                        });
                    }
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.88,
                        lon: hubLon + (destLon - hubLon) * 0.90,
                        name: "Ghat Pass Valley Viewpoint",
                        type: "viewpoint",
                        km: Math.min(d - 8, Math.max(25, Math.round(d * 0.88))),
                        tip: "Scenic hairpin overlook with sweeping valley views and cool mountain breeze."
                    });
                } else if (poi.cat === 'coastal') {
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.35 + (destLon > hubLon ? -0.04 : 0.04),
                        lon: hubLon + (destLon - hubLon) * 0.30 + (destLat > hubLat ? 0.05 : -0.05),
                        name: "Highway Express Food Plaza",
                        type: "coffee",
                        km: Math.min(d - 20, Math.max(20, Math.round(d * 0.35))),
                        tip: "Multi-cuisine express highway food court and refreshment stop."
                    });
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.72,
                        lon: hubLon + (destLon - hubLon) * 0.75,
                        name: "Coastal Estuary Bridge Overlook",
                        type: "water",
                        km: Math.min(d - 10, Math.max(35, Math.round(d * 0.72))),
                        tip: "Scenic bridge crossing coastal river inlet and coconut groves."
                    });
                } else if (poi.cat === 'nature') {
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.35 + (destLon > hubLon ? -0.05 : 0.05),
                        lon: hubLon + (destLon - hubLon) * 0.30 + (destLat > hubLat ? 0.06 : -0.06),
                        name: "Highway Oasis & EV Fast Charger",
                        type: "fuel",
                        km: Math.min(d - 20, Math.max(20, Math.round(d * 0.35))),
                        tip: "High-speed expressway fuel plaza with EV charging points and restrooms."
                    });
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.75,
                        lon: hubLon + (destLon - hubLon) * 0.76,
                        name: "Forest Buffer Sanctuary Gate",
                        type: "nature",
                        km: Math.min(d - 10, Math.max(35, Math.round(d * 0.75))),
                        tip: "Wildlife reserve entry boundary with forest department checkpost."
                    });
                } else if (poi.cat === 'heritage') {
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.35 + (destLon > hubLon ? -0.04 : 0.04),
                        lon: hubLon + (destLon - hubLon) * 0.30 + (destLat > hubLat ? 0.05 : -0.05),
                        name: "Heritage Tiffin Center",
                        type: "food",
                        km: Math.min(d - 20, Math.max(20, Math.round(d * 0.35))),
                        tip: "Iconic regional tiffin and snack stop celebrated for authentic local breakfast."
                    });
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.72,
                        lon: hubLon + (destLon - hubLon) * 0.74,
                        name: "Historic Citadel Gateway",
                        type: "heritage",
                        km: Math.min(d - 10, Math.max(35, Math.round(d * 0.72))),
                        tip: "Stone fort archway and ancient temple riverbank approach."
                    });
                } else {
                    // Quick escape / general road trip
                    stops.push({
                        lat: hubLat + (destLat - hubLat) * 0.40 + (destLon > hubLon ? -0.04 : 0.04),
                        lon: hubLon + (destLon - hubLon) * 0.35 + (destLat > hubLat ? 0.05 : -0.05),
                        name: "Highway Breakfast & Filter Coffee",
                        type: "coffee",
                        km: Math.min(d - 15, Math.max(15, Math.round(d * 0.40))),
                        tip: "Popular highway breakfast hub for crisp dosas and filter coffee."
                    });
                    if (d > 65) {
                        stops.push({
                            lat: hubLat + (destLat - hubLat) * 0.75,
                            lon: hubLon + (destLon - hubLon) * 0.75,
                            name: "Scenic Ridge Viewpoint",
                            type: "viewpoint",
                            km: Math.min(d - 10, Math.max(30, Math.round(d * 0.75))),
                            tip: "Elevated roadside viewpoint overlooking Deccan boulder country."
                        });
                    }
                }

                chain = [
                    { lat: hubLat, lon: hubLon, name: `${hub.name} Origin`, type: "toll" },
                    ...stops,
                    { lat: destLat, lon: destLon, name: poi.name, type: "heritage", km: poi.dist, tip: poi.desc }
                ];
                routeName = poi.corridor || "National Highway & Regional Corridor";
            } else {
                // ----------------------------------------------------------------
                // CLAMP TRUNK CORRIDORS: Strictly terminate at the destination!
                // Prevent overshooting (e.g. Madurai overshooting to Kanyakumari)
                // ----------------------------------------------------------------
                // 1. Anchor Origin Hub as starting point
                chain[0] = { lat: hub.lat, lon: hub.lon, name: `${hub.name} Origin`, type: "toll", km: 0 };

                // 2. Scan chain to find direct destination match or optimal branch-off junction
                let matchIdx = -1;
                let bestDist = Infinity;
                let bestIdx = -1;

                for (let i = 1; i < chain.length; i++) {
                    const pt = chain[i];
                    const dist = Math.hypot(pt.lat - poi.lat, pt.lon - poi.lon);
                    
                    // Exact or near spatial match on highway corridor (within ~15km or name match)
                    if (dist < 0.14 || (pt.name && poi.name && pt.name.toLowerCase().includes(poi.id))) {
                        matchIdx = i;
                        break;
                    }

                    // Candidate junction along the route before the destination (must not overshoot distance)
                    if (!pt.km || pt.km <= (poi.dist + 15)) {
                        if (dist < bestDist) {
                            bestDist = dist;
                            bestIdx = i;
                        }
                    }
                }

                if (matchIdx !== -1) {
                    // Direct match found on highway trunk: trim everything beyond this destination node!
                    chain = chain.slice(0, matchIdx + 1);
                    chain[chain.length - 1] = {
                        lat: poi.lat,
                        lon: poi.lon,
                        name: poi.name,
                        type: "heritage",
                        km: poi.dist,
                        tip: poi.desc
                    };
                } else if (bestIdx !== -1 && bestIdx < chain.length - 1) {
                    // Branching off highway trunk at bestIdx junction: trim points beyond junction & append destination!
                    chain = chain.slice(0, bestIdx + 1);
                    chain.push({
                        lat: poi.lat,
                        lon: poi.lon,
                        name: poi.name,
                        type: "heritage",
                        km: poi.dist,
                        tip: poi.desc
                    });
                } else {
                    // Fallback clamp: ensure final node is strictly the destination POI
                    const last = chain[chain.length - 1];
                    if (Math.hypot(last.lat - poi.lat, last.lon - poi.lon) > 0.04) {
                        chain.push({
                            lat: poi.lat,
                            lon: poi.lon,
                            name: poi.name,
                            type: "heritage",
                            km: poi.dist,
                            tip: poi.desc
                        });
                    } else {
                        chain[chain.length - 1] = {
                            lat: poi.lat,
                            lon: poi.lon,
                            name: poi.name,
                            type: "heritage",
                            km: poi.dist,
                            tip: poi.desc
                        };
                    }
                }
            }

            // --------------------------------------------------------------------
            // 3. EXTRACT WAYPOINTS & BUILD SMOOTH SVG PATH
            // --------------------------------------------------------------------
            // Filter intermediate nodes as micro-checkpoints (exclude origin and destination)
            waypoints = chain.slice(1, chain.length - 1)
                .filter(w => !w.km || w.km < (poi.dist - 5))
                .map((w, idx) => ({
                    id: `wp-${poi.id}-${idx}`,
                    name: w.name,
                    type: w.type || 'viewpoint',
                    icon: this.icons[w.type] || '📍',
                    km: w.km || Math.round((idx + 1) * (poi.dist / chain.length)),
                    lat: w.lat,
                    lon: w.lon,
                    tip: w.tip || "Recommended road trip checkpoint."
                }));

            // Convert lat/lon chain to pixel points using projection
            const pxPoints = chain.map(pt => projectFn(pt.lat, pt.lon, hub.lat, hub.lon));
            const polylineD = pointsToSpline(pxPoints);

            return {
                corridorName: routeName,
                chain,
                waypoints,
                pxPoints,
                polylineD
            };
        }
    }

    return new CorridorService();
});

