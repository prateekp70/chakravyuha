/**
 * Bengaluru (BLR) Regional Hub & Comprehensive Outpost Dataset
 * High-density destinations within extended 600 km road trip radar envelope
 */
(function (root, factory) {
    const data = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = data;
    } else if (typeof root.hubService !== 'undefined') {
        root.hubService.register(data);
    } else if (typeof window !== 'undefined') {
        window['HUB_' + data.key] = data;
    }
})(typeof self !== 'undefined' ? self : this, function () {
    return {
  "key": "BLR",
  "name": "Bengaluru",
  "fullName": "Bengaluru (Bangalore)",
  "lat": 12.9716,
  "lon": 77.5946,
  "elev": "920m Deccan Plateau",
  "outposts": [
    {
      "name": "Ramanagara",
      "lat": 12.7209,
      "lon": 77.2799,
      "dist": 48,
      "cat": "quick",
      "elev": "747m Granite Crag",
      "desc": "Legendary granite boulder formations, rock-climbing faces & endangered long-billed vulture sanctuary."
    },
    {
      "name": "Savandurga",
      "lat": 12.9192,
      "lon": 77.2931,
      "dist": 50,
      "cat": "quick",
      "elev": "1,226m Monolith",
      "desc": "One of Asia's largest monolithic granite masses rising sheer above Arkavathi forest reserve."
    },
    {
      "name": "Shivagange",
      "lat": 13.1706,
      "lon": 77.2272,
      "dist": 54,
      "cat": "quick",
      "elev": "1,368m Sacred Cone",
      "desc": "Conical granite peak shaped like a Shiva Lingam with spring-fed rock-cut cave temples."
    },
    {
      "name": "Nandi Hills",
      "lat": 13.3702,
      "lon": 77.6835,
      "dist": 60,
      "cat": "quick",
      "elev": "1,478m Granite Cliff",
      "desc": "Pre-dawn cloud inversions, Tipu Sultan's cliff fort & ancient Bhoga Nandeeshwara base temple."
    },
    {
      "name": "Makalidurga",
      "lat": 13.4278,
      "lon": 77.5028,
      "dist": 60,
      "cat": "quick",
      "elev": "1,117m Fortified Ridge",
      "desc": "Railway-curve foot trail leading to rugged hilltop Vijayanagara fort ruins overlooking Gundamagere lake."
    },
    {
      "name": "Channapatna",
      "lat": 12.6519,
      "lon": 77.2062,
      "dist": 60,
      "cat": "quick",
      "elev": "730m Valley",
      "desc": "Heritage lacquerware toy artisan workshops and rustic Silk City stop on the old Mysuru corridor."
    },
    {
      "name": "Skandagiri (Kalavara Durga)",
      "lat": 13.4181,
      "lon": 77.6831,
      "dist": 62,
      "cat": "quick",
      "elev": "1,450m Peak",
      "desc": "Midnight moonlight trek above sea of clouds to 18th-century hill fortress ruins."
    },
    {
      "name": "Anthargange",
      "lat": 13.1425,
      "lon": 78.1039,
      "dist": 68,
      "cat": "quick",
      "elev": "1,260m Volcanic Hill",
      "desc": "Maze of volcanic granite cave crevasses, night exploration tunnels & perennial spring head."
    },
    {
      "name": "Devarayanadurga",
      "lat": 13.3742,
      "lon": 77.2106,
      "dist": 72,
      "cat": "quick",
      "elev": "1,188m Rocky Hill",
      "desc": "Dense dry deciduous forest hill with dual Yoga & Bhoga Narasimha temples and Namada Chilume spring."
    },
    {
      "name": "Avalabetta",
      "lat": 13.5786,
      "lon": 77.7788,
      "dist": 92,
      "cat": "quick",
      "elev": "1,150m Cliff",
      "desc": "Serene northern alternative to Nandi Hills with protruding cantilever rock ledge and valley views."
    },
    {
      "name": "Mekedatu & Sangama",
      "lat": 12.2633,
      "lon": 77.4478,
      "dist": 95,
      "cat": "nature",
      "elev": "580m Gorge",
      "desc": "Confluence of Arkavathi and Cauvery narrowing into a deep, turbulent granite chasm."
    },
    {
      "name": "Bheemeshwari (Cauvery Wildlife)",
      "lat": 12.3087,
      "lon": 77.2144,
      "dist": 100,
      "cat": "nature",
      "elev": "620m River Basin",
      "desc": "Roaring Cauvery river rapids, dense deciduous canopy & legendary mahseer habitat."
    },
    {
      "name": "Lepakshi",
      "lat": 13.8044,
      "lon": 77.6055,
      "dist": 125,
      "cat": "heritage",
      "elev": "630m Deccan Plain",
      "desc": "16th-century Vijayanagara architectural wonder with hanging pillar and giant monolithic Basavanna Nandi."
    },
    {
      "name": "Ranganathittu Bird Sanctuary",
      "lat": 12.4244,
      "lon": 76.6844,
      "dist": 128,
      "cat": "nature",
      "elev": "690m Islets",
      "desc": "Six Cauvery river islets hosting dense breeding colonies of painted storks, spoonbills & mugger crocodiles."
    },
    {
      "name": "Talakadu",
      "lat": 12.195,
      "lon": 77.0319,
      "dist": 130,
      "cat": "heritage",
      "elev": "635m Sand Dunes",
      "desc": "Mystical desert-like sand dunes burying 30+ historic Ganga dynasty temples along the Cauvery bend."
    },
    {
      "name": "Shivanasamudra Falls",
      "lat": 12.2929,
      "lon": 77.1683,
      "dist": 135,
      "cat": "nature",
      "elev": "610m River Bluff",
      "desc": "Twin thunderous waterfalls (Gaganachukki & Bharachukki) dropping into a rocky Cauvery gorge."
    },
    {
      "name": "Somnathpur (Chennakeshava)",
      "lat": 12.2764,
      "lon": 76.9048,
      "dist": 135,
      "cat": "heritage",
      "elev": "650m Plains",
      "desc": "13th-century UNESCO trikuta Hoysala masterpiece carved entirely from soapstone on a star-shaped plinth."
    },
    {
      "name": "Melukote",
      "lat": 12.6644,
      "lon": 76.6575,
      "dist": 138,
      "cat": "heritage",
      "elev": "910m Hill Sanctum",
      "desc": "Srivaisnava spiritual citadel atop Yadugiri hill with Kalyani stepwell and Yoga Narasimha temple."
    },
    {
      "name": "Shravanabelagola",
      "lat": 12.8583,
      "lon": 76.4864,
      "dist": 140,
      "cat": "heritage",
      "elev": "1,020m Vindhyagiri",
      "desc": "Colossal 58-foot monolithic statue of Lord Bahubali carved from single granite rock in 981 CE."
    },
    {
      "name": "Mysore (Amba Vilas Palace)",
      "lat": 12.2958,
      "lon": 76.6394,
      "dist": 145,
      "cat": "heritage",
      "elev": "763m Royal Basin",
      "desc": "Wodeyar royal capital, Indo-Saracenic illuminated palace & Chamundi Hill vantage point."
    },
    {
      "name": "Horsley Hills",
      "lat": 13.6593,
      "lon": 78.397,
      "dist": 155,
      "cat": "hill",
      "elev": "1,290m Escarpment",
      "desc": "Cool Eastern Ghats highland plateau fringed with eucalyptus groves and scenic sunset cliffs."
    },
    {
      "name": "Yelagiri Hills",
      "lat": 12.5786,
      "lon": 78.6399,
      "dist": 155,
      "cat": "hill",
      "elev": "1,110m Plateau",
      "desc": "Serene 14-hairpin mountain road leading to an orchard-covered Eastern Ghats basin."
    },
    {
      "name": "Biligiriranga Hills (BR Hills)",
      "lat": 11.99,
      "lon": 77.14,
      "dist": 175,
      "cat": "hill",
      "elev": "1,550m White Cliff",
      "desc": "Ecological bridge between Eastern and Western Ghats, sacred Champakaranya temple & Soliga tribal heartland."
    },
    {
      "name": "Hogenakkal Falls",
      "lat": 12.1186,
      "lon": 77.777,
      "dist": 180,
      "cat": "nature",
      "elev": "250m River Canyon",
      "desc": "Niagara of India: roaring Kaveri river cascading through carbonatite rock canyon with coracle boat rides."
    },
    {
      "name": "Javadhu Hills",
      "lat": 12.6333,
      "lon": 78.9167,
      "dist": 190,
      "cat": "hill",
      "elev": "1,100m Eastern Ghats",
      "desc": "Untouched blue-tinged hill range known for Vainu Bappu astronomical observatory and Beemanmadavu waterfalls."
    },
    {
      "name": "Chitradurga",
      "lat": 14.2251,
      "lon": 76.398,
      "dist": 200,
      "cat": "heritage",
      "elev": "732m Granite Fortress",
      "desc": "Kallina Kote, the legendary seven-concentric stone boulder citadel with 18 secret watchtowers."
    },
    {
      "name": "Kabini (Nagarhole Tiger Reserve)",
      "lat": 11.9261,
      "lon": 76.3264,
      "dist": 215,
      "cat": "nature",
      "elev": "700m Backwaters",
      "desc": "Prime wildlife safari habitat on Kabini reservoir, home to leopards, black panthers & Asiatic elephant herds."
    },
    {
      "name": "Belur & Halebidu",
      "lat": 13.1622,
      "lon": 75.8569,
      "dist": 215,
      "cat": "heritage",
      "elev": "975m Hoysala Heartland",
      "desc": "Twin 12th-century Hoysaleshwara & Chennakeshava temples featuring intricate soapstone friezes (UNESCO)."
    },
    {
      "name": "Yercaud (Shevaroy Hills)",
      "lat": 11.7753,
      "lon": 78.2093,
      "dist": 220,
      "cat": "hill",
      "elev": "1,515m Shevaroys",
      "desc": "Jewel of the South: tranquil coffee and orange plantation hill station overlooking the Salem plains."
    },
    {
      "name": "Bandipur National Park",
      "lat": 11.6664,
      "lon": 76.6331,
      "dist": 220,
      "cat": "nature",
      "elev": "800m Deciduous Belt",
      "desc": "Core Nilgiri Biosphere sanctuary flanked by Western and Eastern Ghats junction along the Mysuru–Ooty highway."
    },
    {
      "name": "Sakleshpur",
      "lat": 12.9442,
      "lon": 75.7865,
      "dist": 220,
      "cat": "hill",
      "elev": "956m Western Ghats",
      "desc": "Cloud-covered Bisle Ghat bio-reserve, Green Route railway trek & star-shaped Manjarabad Fort built by Tipu."
    },
    {
      "name": "Kushalnagar & Bylakuppe",
      "lat": 12.4439,
      "lon": 75.9664,
      "dist": 220,
      "cat": "heritage",
      "elev": "835m Plains",
      "desc": "Largest Tibetan settlement in South India with the Namdroling Golden Temple & craft monasteries."
    },
    {
      "name": "Gingee Fort (Senji)",
      "lat": 12.2536,
      "lon": 79.4183,
      "dist": 230,
      "cat": "heritage",
      "elev": "250m Triple Citadel",
      "desc": "The Troy of the East: impregnable triple-citadel complex (Rajagiri, Krishnagiri, Chandrayandurg)."
    },
    {
      "name": "Chandragiri Fort",
      "lat": 13.5855,
      "lon": 79.3175,
      "dist": 235,
      "cat": "heritage",
      "elev": "210m Fort Base",
      "desc": "Imposing granite citadel and Raja Mahal palace where Vijayanagara kings ruled during their final dynasty."
    },
    {
      "name": "Mudumalai Tiger Reserve",
      "lat": 11.5714,
      "lon": 76.5404,
      "dist": 240,
      "cat": "nature",
      "elev": "960m Foothills",
      "desc": "Dense teak and bamboo forests at Nilgiri base sheltering royal Bengal tigers, gaur & the Moyar river gorge."
    },
    {
      "name": "Chikmagalur",
      "lat": 13.3161,
      "lon": 75.772,
      "dist": 245,
      "cat": "hill",
      "elev": "1,090m Coffee Basin",
      "desc": "Birthplace of Indian coffee nestled beneath the Baba Budangiri range and serene mountain estates."
    },
    {
      "name": "Tirupati & Tirumala",
      "lat": 13.6833,
      "lon": 79.35,
      "dist": 250,
      "cat": "hill",
      "elev": "853m Seshachalam",
      "desc": "Seven holy peaks of the Seshachalam Biosphere Reserve surrounded by red sandalwood reserves and waterfalls."
    },
    {
      "name": "Kuruva Island (Kuruvadweep)",
      "lat": 11.8219,
      "lon": 76.0911,
      "dist": 250,
      "cat": "nature",
      "elev": "750m River Island",
      "desc": "Protected 950-acre uninhabited delta of evergreen river islets on the Kabini tributaries with bamboo rafts."
    },
    {
      "name": "Coorg (Madikeri)",
      "lat": 12.4244,
      "lon": 75.7382,
      "dist": 250,
      "cat": "hill",
      "elev": "1,061m Mist Escarpment",
      "desc": "Scotland of India: emerald coffee estates, Raja's Seat valley panorama, Abbey Falls & Kodava culture."
    },
    {
      "name": "Kemmangundi (KR Hills)",
      "lat": 13.5489,
      "lon": 75.7583,
      "dist": 255,
      "cat": "hill",
      "elev": "1,434m Royal Retreat",
      "desc": "Wodeyar hill retreat with landscaped rose gardens, Hebbe Falls plunge & Z-point canyon trek."
    },
    {
      "name": "Mullayanagiri Peak",
      "lat": 13.3911,
      "lon": 75.7214,
      "dist": 265,
      "cat": "hill",
      "elev": "1,930m Karnataka Summit",
      "desc": "Highest peak in Karnataka with narrow ridge drives, brisk winds & sweeping views across Deccan plateau."
    },
    {
      "name": "Kakkabe & Tadiandamol",
      "lat": 12.2133,
      "lon": 75.6111,
      "dist": 265,
      "cat": "hill",
      "elev": "1,748m Coorg Roof",
      "desc": "Highest peak in Kodagu with sweeping shola-grassland ridges and 18th-century Padi Igguthappa temple."
    },
    {
      "name": "Kotagiri",
      "lat": 11.43,
      "lon": 76.88,
      "dist": 270,
      "cat": "hill",
      "elev": "1,793m Kota Heartland",
      "desc": "The oldest Nilgiri hill settlement with pristine temperate climate, Catherine Falls & Kodanad View Point."
    },
    {
      "name": "Kolli Hills (Kolli Malai)",
      "lat": 11.25,
      "lon": 78.3333,
      "dist": 275,
      "cat": "hill",
      "elev": "1,300m Mountain",
      "desc": "The Mountain of Death: thrilling 70 continuous hairpin bends leading to Agaya Gangai waterfall."
    },
    {
      "name": "Ooty (Udhagamandalam)",
      "lat": 11.41,
      "lon": 76.695,
      "dist": 275,
      "cat": "hill",
      "elev": "2,240m Nilgiri Highs",
      "desc": "Queen of Hill Stations: rolling blue eucalyptus sholas, tea estates, Doddabetta Peak & steam railway."
    },
    {
      "name": "Wayanad (Vythiri & Chembra)",
      "lat": 11.5544,
      "lon": 76.0425,
      "dist": 275,
      "cat": "hill",
      "elev": "1,300m Cloud Ridge",
      "desc": "Misty spice-laden Kerala mountain crest, heart-shaped Chembra lake trek & Edakkal Neolithic rock caves."
    },
    {
      "name": "Gandikota",
      "lat": 14.8144,
      "lon": 78.2861,
      "dist": 280,
      "cat": "heritage",
      "elev": "290m Canyon Rim",
      "desc": "The Grand Canyon of India: sheer red sandstone gorge carved by the Pennar River below a 13th-century fort."
    },
    {
      "name": "Shimoga & Mattur",
      "lat": 13.9299,
      "lon": 75.5681,
      "dist": 280,
      "cat": "heritage",
      "elev": "570m Tunga Valley",
      "desc": "Gateway to Malnad along Tunga River and Mattur, India's famous living Sanskrit-speaking village."
    },
    {
      "name": "Coonoor",
      "lat": 11.353,
      "lon": 76.7959,
      "dist": 290,
      "cat": "hill",
      "elev": "1,850m Tea Ravine",
      "desc": "Quieter Nilgiri sister station overlooking Catherine Falls, Droog Fort & manicured tea factory slopes."
    },
    {
      "name": "Belum Caves",
      "lat": 15.1017,
      "lon": 78.1119,
      "dist": 295,
      "cat": "nature",
      "elev": "280m Subterranean",
      "desc": "India's second-largest underground karst cave system featuring 3.2 km of limestone passages and sinkholes."
    },
    {
      "name": "Pondicherry (Puducherry)",
      "lat": 11.9416,
      "lon": 79.8083,
      "dist": 310,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "French colonial White Town bougainvillea promenades, rock beach & bohemian Auroville community."
    },
    {
      "name": "Kudremukh Peak & Reserve",
      "lat": 13.2144,
      "lon": 75.2536,
      "dist": 310,
      "cat": "hill",
      "elev": "1,894m Horse Face",
      "desc": "Rolling emerald shola grasslands shaped like a horse's face in a protected tiger and lion-tailed macaque habitat."
    },
    {
      "name": "Kannur (Theyyam Coast)",
      "lat": 11.8745,
      "lon": 75.3704,
      "dist": 310,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Asia's longest drive-in beach at Muzhappilangad, sacred ritual Theyyam performances & St. Angelo seaside fort."
    },
    {
      "name": "Hampi (Vijayanagara UNESCO)",
      "lat": 15.335,
      "lon": 76.46,
      "dist": 340,
      "cat": "heritage",
      "elev": "467m Monolithic Basin",
      "desc": "Surreal landscape of balancing granite boulders, ruined imperial palaces, Stone Chariot & Tungabhadra ghats."
    },
    {
      "name": "Ahobilam",
      "lat": 15.1328,
      "lon": 78.7303,
      "dist": 345,
      "cat": "heritage",
      "elev": "328m Nallamala Range",
      "desc": "Nine sacred Narasimha shrines split between Upper and Lower Ahobilam across dense Nallamala forest trails."
    },
    {
      "name": "Mahabalipuram (Mamallapuram)",
      "lat": 12.6269,
      "lon": 80.1927,
      "dist": 345,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "7th-century UNESCO rock-cut Shore Temple, Pancha Rathas & monolithic elephant bas-reliefs on Coromandel coast."
    },
    {
      "name": "Agumbe (Rainforest Capital)",
      "lat": 13.5074,
      "lon": 75.0939,
      "dist": 350,
      "cat": "nature",
      "elev": "643m Rain Belt",
      "desc": "Cherrapunji of the South: dense wet evergreen jungle, King Cobra research station & Barkana Falls."
    },
    {
      "name": "Mangalore (Mangaluru)",
      "lat": 12.9141,
      "lon": 74.856,
      "dist": 350,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Historic port gateway, Someshwara beach cliffs, Mangaladevi sanctum & coastal culinary capital."
    },
    {
      "name": "Kozhikode (Calicut)",
      "lat": 11.2588,
      "lon": 75.7804,
      "dist": 350,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Historic landing of Vasco da Gama at Kappad beach, legendary Malabar culinary heritage & Beypore wooden dhow shipyards."
    },
    {
      "name": "Bekal Fort",
      "lat": 12.3926,
      "lon": 75.0315,
      "dist": 360,
      "cat": "heritage",
      "elev": "Sea Level",
      "desc": "Massive 17th-century keyhole-shaped laterite ocean fort rising directly out of the Arabian Sea surf in Kasaragod."
    },
    {
      "name": "Jog Falls (Gerosoppa)",
      "lat": 14.2289,
      "lon": 74.8122,
      "dist": 380,
      "cat": "nature",
      "elev": "475m Sharavathi Chasm",
      "desc": "Second-highest plunge waterfall in India, where the Sharavathi river divides into Raja, Roarer, Rocket & Rani."
    },
    {
      "name": "Udupi & Malpe Beach",
      "lat": 13.3409,
      "lon": 74.7421,
      "dist": 400,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Krishna Mutt heritage, Malpe beach sea walk & geological wonder St. Mary's basaltic hexagonal columns."
    },
    {
      "name": "Chettinad (Karaikudi)",
      "lat": 10.0735,
      "lon": 78.7732,
      "dist": 430,
      "cat": "heritage",
      "elev": "82m Limestone Plains",
      "desc": "19th-century merchant mansions with Burmese teak, Belgian glass, Athangudi handmade tiles & legendary fiery cuisine."
    },
    {
      "name": "Madurai",
      "lat": 9.9252,
      "lon": 78.1198,
      "dist": 435,
      "cat": "heritage",
      "elev": "101m Vaigai Basin",
      "desc": "Ancient Pandyan capital anchored by the 14 towering gopurams of Meenakshi Amman Temple & Nayakkar Palace via 6-lane NH 44."
    },
    {
      "name": "Maravanthe Beach",
      "lat": 13.7042,
      "lon": 74.6369,
      "dist": 440,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Rare scenic coastal highway strip with Arabian Sea on one side and the Souparnika River on the other."
    },
    {
      "name": "Pattadakal",
      "lat": 15.9489,
      "lon": 75.8164,
      "dist": 440,
      "cat": "heritage",
      "elev": "530m River Valley",
      "desc": "UNESCO World Heritage coronation site showcasing fusion of northern Nagara and southern Dravidian architecture."
    },
    {
      "name": "Aihole",
      "lat": 16.0219,
      "lon": 75.8828,
      "dist": 450,
      "cat": "heritage",
      "elev": "520m Malaprabha Basin",
      "desc": "Cradle of Hindu temple architecture featuring over 125 5th-century experimental sandstone monuments."
    },
    {
      "name": "Valparai",
      "lat": 10.3267,
      "lon": 76.9554,
      "dist": 450,
      "cat": "hill",
      "elev": "1,193m Anamalais",
      "desc": "Spectacular 40-hairpin climb through Anamalai tiger country into an emerald rainforest & tea escarpment."
    },
    {
      "name": "Badami (Vatapi)",
      "lat": 15.9189,
      "lon": 75.6766,
      "dist": 455,
      "cat": "heritage",
      "elev": "560m Red Sandstone",
      "desc": "6th-century Chalukya rock-cut cave temples chiseled into rugged red sandstone cliffs surrounding Agastya Lake."
    },
    {
      "name": "Dandeli & Anshi Tiger Reserve",
      "lat": 15.2447,
      "lon": 74.6231,
      "dist": 460,
      "cat": "nature",
      "elev": "473m Kali Valley",
      "desc": "Thrilling white-water rafting on the roaring Kali River, dense hornbill canopy & elusive black panther habitat."
    },
    {
      "name": "Kodaikanal",
      "lat": 10.2381,
      "lon": 77.4892,
      "dist": 465,
      "cat": "hill",
      "elev": "2,133m Palani Hills",
      "desc": "Princess of Hill Stations: star-shaped mountain lake, Pillar Rocks, pine forest canopy & crisp shola air via Batlagundu Ghat."
    },
    {
      "name": "Munnar",
      "lat": 10.0889,
      "lon": 77.0595,
      "dist": 475,
      "cat": "hill",
      "elev": "1,532m High Range",
      "desc": "Iconic high-altitude tea plateau, Anamudi summit (2,695m) & Eravikulam Nilgiri tahr habitat via Salem–Theni corridor."
    },
    {
      "name": "Murudeshwar",
      "lat": 14.0944,
      "lon": 74.4897,
      "dist": 480,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "World's second-tallest Shiva statue (123 ft) on a peninsula cliff overlooking Kanduka Hill & Rajagopuram."
    },
    {
      "name": "Gokarna",
      "lat": 14.5479,
      "lon": 74.3188,
      "dist": 485,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Serene temple coastal enclave with Om Beach, Kudle Beach & cliff trails above the Arabian Sea."
    },
    {
      "name": "South Goa (Palolem & Agonda)",
      "lat": 15.01,
      "lon": 74.02,
      "dist": 500,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Crescent-shaped palm-fringed bays, Cabo de Rama fort ruins & relaxed coastal road trip terminus."
    },
    {
      "name": "Thekkady (Periyar Tiger Reserve)",
      "lat": 9.6031,
      "lon": 77.1615,
      "dist": 510,
      "cat": "nature",
      "elev": "900m Cardamom Hills",
      "desc": "Lake boat safaris surrounded by submerged dead trees, wild elephant herds & dense evergreen spice hills."
    },
    {
      "name": "Vagamon",
      "lat": 9.6869,
      "lon": 76.9056,
      "dist": 520,
      "cat": "hill",
      "elev": "1,100m Pine Ridge",
      "desc": "Untamed pine forests, rolling velvet-green meadows, Kurisumala tea monastery & misty paragliding cliffs."
    },
    {
      "name": "Karwar (Devbagh)",
      "lat": 14.8185,
      "lon": 74.1352,
      "dist": 520,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Tagore's secluded beach inspiration, Kali River estuary, casuarina island camps & authentic coastal seafood."
    },
    {
      "name": "Bijapur (Vijayapura)",
      "lat": 16.8302,
      "lon": 75.71,
      "dist": 525,
      "cat": "heritage",
      "elev": "606m Deccan Plains",
      "desc": "Adil Shahi imperial seat home to the colossal acoustic Whispering Gallery of Gol Gumbaz & graceful Ibrahim Rauza."
    },
    {
      "name": "Kochi (Fort Kochi)",
      "lat": 9.9312,
      "lon": 76.2673,
      "dist": 530,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Historic Malabar spice port, cantilevered Chinese fishing nets, Jewish Synagogue & colonial Portuguese lanes."
    },
    {
      "name": "Alleppey (Alappuzha)",
      "lat": 9.4981,
      "lon": 76.3388,
      "dist": 580,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Venice of the East: sprawling Vembanad backwater lagoons, traditional kettuvallam houseboats & Kuttanad below-sea paddy fields."
    },
    {
      "name": "Rameshwaram & Dhanushkodi",
      "lat": 9.2876,
      "lon": 79.3129,
      "dist": 590,
      "cat": "coastal",
      "elev": "Sea Level",
      "desc": "Pamban sea-bridge crossing to the temple island & ghost-town ruins of Dhanushkodi sand spit where two oceans meet."
    },
    {
      "name": "Kolhapur",
      "lat": 16.705,
      "lon": 74.2433,
      "dist": 590,
      "cat": "heritage",
      "elev": "569m Panchganga Basin",
      "desc": "Historic Maratha bastion: Mahalakshmi temple, Rankala Lake, Panhala cliff fortress & fiery tambda-pandhra rassa cuisine."
    }
  ]
};
});
