/**
 * Hyderabad (HYD) Regional Hub & Comprehensive Outpost Dataset
 * High-density destinations within extended 600 km road trip radar envelope (65 outposts)
 */
(function (root, factory) {
    const data = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = data;
    } else if (typeof root.hubService !== 'undefined') {
        root.hubService.register(data);
    } else if (typeof window !== 'undefined') {
        window.HUB_HYD = data;
    }
})(typeof self !== 'undefined' ? self : this, function () {
    return {
  "key": "HYD",
  "name": "Hyderabad",
  "fullName": "Hyderabad (Deccan Metro)",
  "lat": 17.385,
  "lon": 78.4867,
  "elev": "540m Deccan Granite Ridge",
  "outposts": [
    {
      "name": "Shamirpet Lake & Deer Park",
      "lat": 17.5956,
      "lon": 78.57,
      "dist": 32,
      "cat": "quick",
      "elev": "540m Lakefront",
      "desc": "Scenic sunset lakefront ringed with rocky granite crags and a natural dry deciduous deer sanctuary."
    },
    {
      "name": "Keesaragutta",
      "lat": 17.5167,
      "lon": 78.6833,
      "dist": 38,
      "cat": "quick",
      "elev": "560m Boulder Hillock",
      "desc": "Ancient Ramalingeswara rock-cut cave shrines chiseled amidst thousands of monolithic stone lingams."
    },
    {
      "name": "Bhongir Fort (Bhuvanagiri)",
      "lat": 17.5111,
      "lon": 78.8889,
      "dist": 50,
      "cat": "quick",
      "elev": "610m Monolithic Dome",
      "desc": "Isolated egg-shaped monolithic rock citadel built by Western Chalukya ruler Tribhuvanamalla."
    },
    {
      "name": "Narsapur Forest & Lake",
      "lat": 17.74,
      "lon": 78.28,
      "dist": 50,
      "cat": "quick",
      "elev": "580m Forest Hills",
      "desc": "Tranquil deciduous forest ridge, natural mini-lake & cycling/trekking canopy just outside Hyderabad."
    },
    {
      "name": "Rachakonda Fort",
      "lat": 17.1756,
      "lon": 78.8144,
      "dist": 65,
      "cat": "quick",
      "elev": "520m Rock Citadel",
      "desc": "14th-century Velama dynasty boulder fortress with cyclopean stone masonry and ruined palaces."
    },
    {
      "name": "Ananthagiri Hills & Vikarabad",
      "lat": 17.3114,
      "lon": 77.8631,
      "dist": 80,
      "cat": "quick",
      "elev": "680m Forest Ridge",
      "desc": "Dense coffee and medicinal deciduous forest, Kotepally reservoir kayaking & origin of the Musi River."
    },
    {
      "name": "Singur Dam & Reservoir",
      "lat": 17.7558,
      "lon": 77.925,
      "dist": 95,
      "cat": "nature",
      "elev": "525m Manjeera Basin",
      "desc": "Deep Manjeera river reservoir sheltering hundreds of mugger crocodiles and migratory waterfowl."
    },
    {
      "name": "Medak Fort & Cathedral",
      "lat": 18.0461,
      "lon": 78.2617,
      "dist": 100,
      "cat": "heritage",
      "elev": "488m Hilltop Bastion",
      "desc": "Kakatiya hilltop fortress with 3 massive gateways and the towering 175-foot Gothic Medak Cathedral."
    },
    {
      "name": "Pillalamarri (Mahabubnagar Banyan)",
      "lat": 16.7489,
      "lon": 77.9944,
      "dist": 105,
      "cat": "quick",
      "elev": "498m Plains",
      "desc": "800-year-old banyan tree spreading over 4 acres with ancient Kakatiya shrines nearby."
    },
    {
      "name": "Pocharam Wildlife Sanctuary",
      "lat": 18.14,
      "lon": 78.16,
      "dist": 110,
      "cat": "nature",
      "elev": "470m Wetland Forest",
      "desc": "Historic Nizam hunting preserve around Pocharam lake, home to chinkara, sambar, and painted storks."
    },
    {
      "name": "Devarakonda Fort",
      "lat": 16.7,
      "lon": 78.92,
      "dist": 115,
      "cat": "heritage",
      "elev": "380m Granite Citadel",
      "desc": "14th-century Recherla Velama stronghold built across 7 granite hills with hidden granaries and water cisterns."
    },
    {
      "name": "Koilkonda Fort & Koilsagar",
      "lat": 16.7025,
      "lon": 77.7889,
      "dist": 130,
      "cat": "quick",
      "elev": "550m Granite Gorge",
      "desc": "Challenging 7-gate Qutb Shahi hill fortress trek overlooking the serene Koilsagar reservoir."
    },
    {
      "name": "Bidar Fort & Mahmud Gawan",
      "lat": 17.9104,
      "lon": 77.5199,
      "dist": 145,
      "cat": "heritage",
      "elev": "670m Laterite Plateau",
      "desc": "Bahmani and Barid Shahi capital: 3-mile perimeter red laterite moated fortress, Rangin Mahal & bidriware craft."
    },
    {
      "name": "Warangal (Thousand Pillar)",
      "lat": 17.9689,
      "lon": 79.5941,
      "dist": 150,
      "cat": "heritage",
      "elev": "302m Kakatiya Heart",
      "desc": "Ancient Kakatiya imperial capital: Thousand Pillar Temple, Warangal Fort stone gateways & Bhadrakali temple."
    },
    {
      "name": "Nagarjuna Sagar & Island Museum",
      "lat": 16.5778,
      "lon": 79.3144,
      "dist": 155,
      "cat": "nature",
      "elev": "124m Krishna Reservoir",
      "desc": "World's largest masonry dam, boat ferry to Nagarjunakonda Buddhist island excavation museum."
    },
    {
      "name": "Ethipothala Falls",
      "lat": 16.53,
      "lon": 79.34,
      "dist": 165,
      "cat": "nature",
      "elev": "110m Chandravanka River",
      "desc": "70-foot multi-stream cascade dropping into a lagoon with a freshwater crocodile breeding centre."
    },
    {
      "name": "Basavakalyan Fort",
      "lat": 17.8739,
      "lon": 76.9497,
      "dist": 190,
      "cat": "heritage",
      "elev": "620m Plains",
      "desc": "12th-century Sharana social revolution capital of Basaveshwara, cave shrines, and deep moat fortification."
    },
    {
      "name": "Pakhal Lake & Wildlife Sanctuary",
      "lat": 17.95,
      "lon": 79.98,
      "dist": 195,
      "cat": "nature",
      "elev": "280m Wetland Reserve",
      "desc": "Pristine 13th-century artificial lake hemmed by dense deciduous teak forest, leopards and sloth bears."
    },
    {
      "name": "Khammam Fort & Palair Lake",
      "lat": 17.2472,
      "lon": 80.1514,
      "dist": 195,
      "cat": "heritage",
      "elev": "112m Stambhadri Rock",
      "desc": "Stambhadri hill fortress blending Kakatiya, Musunuri Nayak, and Qutb Shahi architecture."
    },
    {
      "name": "Ramappa Temple (UNESCO)",
      "lat": 18.2589,
      "lon": 79.9431,
      "dist": 210,
      "cat": "heritage",
      "elev": "220m Forest Base",
      "desc": "13th-century UNESCO World Heritage marvel featuring floating bricks and intricate black basalt carved brackets."
    },
    {
      "name": "Basar (Gnana Saraswati)",
      "lat": 18.88,
      "lon": 77.95,
      "dist": 210,
      "cat": "heritage",
      "elev": "350m Godavari Bank",
      "desc": "Ancient Saraswati sanctum where sage Vyasa meditated; one of India's pre-eminent pilgrimage sites for Akshara Abhyasam."
    },
    {
      "name": "Alampur (Navabrahma Temples)",
      "lat": 15.8778,
      "lon": 78.1333,
      "dist": 215,
      "cat": "heritage",
      "elev": "272m Confluence",
      "desc": "7th-century Badami Chalukya sandstone temples dedicated to Shiva at Tungabhadra–Krishna sangam."
    },
    {
      "name": "Srisailam (Mallikarjuna Jyotirlinga)",
      "lat": 16.0747,
      "lon": 78.8681,
      "dist": 215,
      "cat": "heritage",
      "elev": "457m Krishna Canyon",
      "desc": "Holy Jyotirlinga & Shakti Peeth perched deep within the Nallamala Tiger Reserve and Krishna River gorge."
    },
    {
      "name": "Laknavaram Lake",
      "lat": 18.15,
      "lon": 80.08,
      "dist": 220,
      "cat": "nature",
      "elev": "210m Lake Basin",
      "desc": "Sprawling lake created by Kakatiya rulers spanning 10,000 acres across 13 forested islands with suspension bridge."
    },
    {
      "name": "Gulbarga (Kalaburagi)",
      "lat": 17.3297,
      "lon": 76.8343,
      "dist": 220,
      "cat": "heritage",
      "elev": "454m Black Soil Plains",
      "desc": "Early Bahmani sultanate capital: colossal Jama Masjid without open courtyard, 15 towers & Khwaja Bande Nawaz Dargah."
    },
    {
      "name": "Kurnool & Orvakal Rock Garden",
      "lat": 15.8281,
      "lon": 78.0373,
      "dist": 225,
      "cat": "heritage",
      "elev": "273m Quartzite Crags",
      "desc": "Konda Reddy Buruju fort bastion & 3-billion-year-old volcanic silica/quartzite rock formations."
    },
    {
      "name": "Ghanpur Temples (Kota Gullu)",
      "lat": 18.32,
      "lon": 79.88,
      "dist": 225,
      "cat": "heritage",
      "elev": "230m Forest Complex",
      "desc": "Cluster of 22 13th-century Kakatiya red sandstone temples built by King Ganapatideva nestled in palm groves."
    },
    {
      "name": "Dharmapuri (Narasimha)",
      "lat": 18.95,
      "lon": 79.08,
      "dist": 230,
      "cat": "heritage",
      "elev": "215m Godavari River",
      "desc": "Vedic learning settlement on the Godavari banks housing ancient Narasimha rock shrines and bathing ghats."
    },
    {
      "name": "Mantralayam",
      "lat": 15.94,
      "lon": 77.43,
      "dist": 255,
      "cat": "heritage",
      "elev": "325m Tungabhadra Bank",
      "desc": "Sacred Vrindavana shrine of Saint Raghavendra Swami on the banks of the Tungabhadra River."
    },
    {
      "name": "Kawal Tiger Reserve (Jannaram)",
      "lat": 19.1667,
      "lon": 78.9667,
      "dist": 260,
      "cat": "nature",
      "elev": "280m Teak Forest",
      "desc": "Prime northern Telangana teak sanctuary on the Godavari banks sheltering nilgai, leopards, and gaur."
    },
    {
      "name": "Amaravati (Historic Capital & Stupa)",
      "lat": 16.5739,
      "lon": 80.3575,
      "dist": 260,
      "cat": "heritage",
      "elev": "30m Alluvial Plains",
      "desc": "Ancient Satavahana capital, Mahachaitya Buddhist stupa remains & colossal Dhyana Buddha statue."
    },
    {
      "name": "Pochera Falls",
      "lat": 19.26,
      "lon": 78.43,
      "dist": 270,
      "cat": "nature",
      "elev": "390m Gorge",
      "desc": "Deep circular stone amphitheater waterfall where the Godavari tributaries drop through basalt rock crevasses."
    },
    {
      "name": "Kaleshwaram (Triveni Sangam)",
      "lat": 18.81,
      "lon": 79.91,
      "dist": 270,
      "cat": "heritage",
      "elev": "128m River Confluence",
      "desc": "Rare Mukteshwara shrine with two lingams on a single plinth at the confluence of the Godavari and Pranahita rivers."
    },
    {
      "name": "Vijayawada (Kanaka Durga)",
      "lat": 16.5062,
      "lon": 80.648,
      "dist": 275,
      "cat": "heritage",
      "elev": "39m Krishna Delta",
      "desc": "Indrakeeladri hill sanctum, Prakasam Barrage across Krishna River & ancient Undavalli rock-cut cave temples."
    },
    {
      "name": "Kuntala Falls",
      "lat": 19.3,
      "lon": 78.5,
      "dist": 280,
      "cat": "nature",
      "elev": "420m Kadam River Bluff",
      "desc": "Highest waterfall in Telangana, where the Kadam river plunges 150 feet down two rocky tiers in Sahyadri hills."
    },
    {
      "name": "Nanded (Hazur Sahib)",
      "lat": 19.153,
      "lon": 77.3014,
      "dist": 280,
      "cat": "heritage",
      "elev": "362m Godavari Plains",
      "desc": "One of the five holy Takhts of Sikhism where Guru Gobind Singh spent his final days on the banks of Godavari."
    },
    {
      "name": "Kadem Dam & Reservoir",
      "lat": 19.1,
      "lon": 78.78,
      "dist": 280,
      "cat": "nature",
      "elev": "213m Kadam River",
      "desc": "Picturesque multi-spillway masonry reservoir surrounded by forest hillocks near the Kawal wildlife corridor."
    },
    {
      "name": "Banganapalle (Nawab Palace)",
      "lat": 15.32,
      "lon": 78.23,
      "dist": 290,
      "cat": "heritage",
      "elev": "209m Rayalaseema Basin",
      "desc": "18th-century royal Nawab palace, birthplace of the famous Banganapalli mangoes & gateway to Yaganti caves."
    },
    {
      "name": "Yaganti (Uma Maheshwara)",
      "lat": 15.35,
      "lon": 78.1333,
      "dist": 300,
      "cat": "heritage",
      "elev": "320m Cave Gorge",
      "desc": "Mystical growing monolithic Nandi bull, Pushkarini freshwater pond & Agastya meditation cave."
    },
    {
      "name": "Bhadrachalam (Godavari Sanctum)",
      "lat": 17.6689,
      "lon": 80.8936,
      "dist": 310,
      "cat": "heritage",
      "elev": "50m Godavari Bank",
      "desc": "Historic Rama temple constructed by Bhakta Ramadasu on the forested bends of the Godavari."
    },
    {
      "name": "Suryalanka Beach (Bapatla)",
      "lat": 15.8459,
      "lon": 80.5212,
      "dist": 310,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Wide golden sand beach on the Bay of Bengal with gentle surf and dolphin spotting."
    },
    {
      "name": "Gooty Fort",
      "lat": 15.11,
      "lon": 77.63,
      "dist": 310,
      "cat": "heritage",
      "elev": "680m Shell Fort",
      "desc": "Vast shell-shaped granite mountain citadel with 15 rampart gates built by Vijayanagara and Maratha rulers."
    },
    {
      "name": "Belum Caves",
      "lat": 15.1017,
      "lon": 78.1119,
      "dist": 330,
      "cat": "nature",
      "elev": "280m Subterranean",
      "desc": "India's second-largest underground karst cave system with 3.2 km of limestone passages and sinkholes."
    },
    {
      "name": "Bogatha Falls (Telangana Niagara)",
      "lat": 18.28,
      "lon": 80.5,
      "dist": 330,
      "cat": "nature",
      "elev": "180m Cheekupally Stream",
      "desc": "Scenic horseshoe waterfall dropping into a crystal pool surrounded by dense Jayashankar Bhupalpally forest."
    },
    {
      "name": "Manginapudi Beach (Machilipatnam)",
      "lat": 16.2089,
      "lon": 81.2464,
      "dist": 345,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Natural black soil beach and historic Coromandel port used by Dutch, French, and British traders."
    },
    {
      "name": "Ahobilam",
      "lat": 15.1328,
      "lon": 78.7303,
      "dist": 360,
      "cat": "heritage",
      "elev": "328m Nallamala Range",
      "desc": "Nine sacred Narasimha shrines split between Upper and Lower Ahobilam across dense Nallamala forest trails."
    },
    {
      "name": "Hampi (Vijayanagara UNESCO)",
      "lat": 15.335,
      "lon": 76.46,
      "dist": 375,
      "cat": "heritage",
      "elev": "467m Monolithic Basin",
      "desc": "Imperial ruins, boulder-strewn landscape, Virupaksha temple, and Stone Chariot along Tungabhadra."
    },
    {
      "name": "Bijapur (Vijayapura)",
      "lat": 16.8302,
      "lon": 75.71,
      "dist": 380,
      "cat": "heritage",
      "elev": "606m Deccan Plains",
      "desc": "Adil Shahi architectural capital featuring the world's second-largest acoustic dome at Gol Gumbaz & Ibrahim Rauza."
    },
    {
      "name": "Papikondalu (Papi Hills Gorge)",
      "lat": 17.48,
      "lon": 81.42,
      "dist": 380,
      "cat": "nature",
      "elev": "120m Godavari Canyon",
      "desc": "Scenic riverboat journey through the deep canyon of the Godavari River slicing dramatically through Eastern Ghats."
    },
    {
      "name": "Gandikota (The Grand Canyon)",
      "lat": 14.8144,
      "lon": 78.2861,
      "dist": 385,
      "cat": "heritage",
      "elev": "290m Canyon Rim",
      "desc": "Sheer red sandstone canyon carved by the Pennar River below a 13th-century fortified citadel."
    },
    {
      "name": "Badami & Pattadakal (Vatapi)",
      "lat": 15.9189,
      "lon": 75.6766,
      "dist": 410,
      "cat": "heritage",
      "elev": "560m Sandstone Cliffs",
      "desc": "6th-century Chalukya capital with dramatic red sandstone cave temples surrounding Agastya Lake & UNESCO coronation temples."
    },
    {
      "name": "Aihole (Cradle of Architecture)",
      "lat": 16.0219,
      "lon": 75.8828,
      "dist": 410,
      "cat": "heritage",
      "elev": "520m Malaprabha Basin",
      "desc": "Cradle of Hindu temple architecture featuring over 125 5th-century experimental sandstone monuments."
    },
    {
      "name": "Maredumilli & Rampachodavaram",
      "lat": 17.6,
      "lon": 81.7167,
      "dist": 420,
      "cat": "nature",
      "elev": "420m Eastern Ghats Jungle",
      "desc": "Dense semi-evergreen monsoon rainforest, bamboo chicken tribal cuisine & Jalatharangini waterfall."
    },
    {
      "name": "Tadoba-Andhari Tiger Reserve",
      "lat": 20.2407,
      "lon": 79.3023,
      "dist": 430,
      "cat": "nature",
      "elev": "250m Central Teak Belt",
      "desc": "Maharashtra's premier tiger sanctuary: dense bamboo thickets, Moharli/Kolara safari gates & high apex predator density via NH 44."
    },
    {
      "name": "Lonar Meteorite Crater",
      "lat": 19.9763,
      "lon": 76.5074,
      "dist": 450,
      "cat": "nature",
      "elev": "480m Basalt Plateau",
      "desc": "World's only hyper-velocity impact crater formed in volcanic basalt rock, filled by a mysterious hyper-saline soda lake."
    },
    {
      "name": "Coringa Wildlife Sanctuary & Kakinada",
      "lat": 16.8185,
      "lon": 82.363,
      "dist": 480,
      "cat": "nature",
      "elev": "Sea Level",
      "desc": "Second-largest mangrove formation in India, Hope Island sand spit & endangered white-backed vulture habitat."
    },
    {
      "name": "Uppada Beach & Handloom Hub",
      "lat": 17.07,
      "lon": 82.33,
      "dist": 490,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Coastal village famous for Jamdani silk weaving, eroded shoreline geology & Bay of Bengal views."
    },
    {
      "name": "Nagpur (Deekshabhoomi & Gateway)",
      "lat": 21.1458,
      "lon": 79.0882,
      "dist": 500,
      "cat": "heritage",
      "elev": "310m Central Plateau",
      "desc": "Historic central zero-mile marker, Dr. Ambedkar's colossal Deekshabhoomi stupa & orange orchards."
    },
    {
      "name": "Daulatabad Fort (Devagiri)",
      "lat": 19.9427,
      "lon": 75.2132,
      "dist": 520,
      "cat": "heritage",
      "elev": "600m Monolithic Cone",
      "desc": "Impregnable pyramidal rock citadel with dark subterranean labyrinth tunnels (Bhulbhulaiya) and moat."
    },
    {
      "name": "Ajanta & Ellora Caves",
      "lat": 20.0268,
      "lon": 75.1793,
      "dist": 530,
      "cat": "heritage",
      "elev": "580m Deccan Traps",
      "desc": "UNESCO World Heritage wonder: Kailasa monolithic temple carved top-down from single basalt mountain & Buddhist cave frescos."
    },
    {
      "name": "Dandeli Wildlife Reserve",
      "lat": 15.2447,
      "lon": 74.6231,
      "dist": 560,
      "cat": "nature",
      "elev": "473m Kali Valley",
      "desc": "Kali River white water rapids, hornbill canopy conservation reserve & dense Western Ghats evergreen forests."
    },
    {
      "name": "Lambasingi (Kashmir of Andhra)",
      "lat": 17.8167,
      "lon": 82.4833,
      "dist": 570,
      "cat": "hill",
      "elev": "1,000m Eastern Ghats",
      "desc": "The only location in South India that occasionally experiences sub-zero winter temperatures and morning frost."
    },
    {
      "name": "Pench National Park",
      "lat": 21.6582,
      "lon": 79.2882,
      "dist": 580,
      "cat": "nature",
      "elev": "425m Satpura Foothills",
      "desc": "The true setting of Kipling's Jungle Book: teak forest canopy, tiger corridors & scenic lake safari on the MP-Maharashtra border."
    },
    {
      "name": "Visakhapatnam (Vizag & Rushikonda)",
      "lat": 17.6868,
      "lon": 83.2185,
      "dist": 610,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "The City of Destiny: sweeping beaches, INS Kursura submarine museum, Ross Hill harbor & cliffside coastal drives."
    },
    {
      "name": "Araku Valley & Borra Caves",
      "lat": 18.3273,
      "lon": 82.8775,
      "dist": 620,
      "cat": "hill",
      "elev": "911m Eastern Ghats",
      "desc": "Misty tribal highland plateau, organic Arabica coffee estates & 150-million-year-old subterranean caves."
    }
  ]
};
});
