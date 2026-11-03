// Curated registry of regional outposts, coordinates, road metrics & briefs
const MASTER_POIS = [
    {
        "id": "agumbe",
        "name": "Agumbe (Rainforest Capital)",
        "lat": 13.5074,
        "lon": 75.0939,
        "cat": "nature",
        "elev": "643m Rain Belt",
        "season": "YEAR_ROUND",
        "desc": "Cherrapunji of the South: dense wet evergreen jungle, King Cobra research station & Barkana Falls.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Agumbe (Rainforest Capital) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Agumbe (Rainforest Capital) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Agumbe (Rainforest Capital) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "sringeri",
        "name": "Sringeri (Sharada Peetham)",
        "lat": 13.4187,
        "lon": 75.257,
        "cat": "heritage",
        "elev": "672m Tunga Valley",
        "season": "YEAR_ROUND",
        "desc": "First matha established by Adi Shankara on holy river Tunga, nestled in lush Western Ghats evergreen valleys.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Sringeri (Sharada Peetham) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Sringeri (Sharada Peetham) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Sringeri (Sharada Peetham) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "ahobilam",
        "name": "Ahobilam (Nava Narasimha)",
        "lat": 15.1328,
        "lon": 78.7303,
        "cat": "heritage",
        "elev": "328m Nallamala Range",
        "season": "OCT_MAR",
        "desc": "Nine sacred Narasimha shrines split between Upper and Lower Ahobilam across dense Nallamala forest trails.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Ahobilam (Nava Narasimha) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Ahobilam (Nava Narasimha) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Ahobilam (Nava Narasimha) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "aihole",
        "name": "Aihole (Cradle of Architecture)",
        "lat": 16.0219,
        "lon": 75.8828,
        "cat": "heritage",
        "elev": "520m Malaprabha Basin",
        "season": "OCT_MAR",
        "desc": "Cradle of Hindu temple architecture featuring over 125 5th-century experimental sandstone monuments.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Aihole (Cradle of Architecture) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Aihole (Cradle of Architecture) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Aihole (Cradle of Architecture) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "ajanta_ellora_caves",
        "name": "Ajanta & Ellora Caves (UNESCO)",
        "lat": 20.0268,
        "lon": 75.1793,
        "cat": "heritage",
        "elev": "580m Deccan Traps",
        "season": "OCT_MAR",
        "desc": "UNESCO World Heritage wonder: Kailasa monolithic temple carved top-down from single basalt mountain & Buddhist cave frescos.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Ajanta & Ellora Caves (UNESCO) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Ajanta & Ellora Caves (UNESCO) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Ajanta & Ellora Caves (UNESCO) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "alampur",
        "name": "Alampur (Navabrahma Temples)",
        "lat": 15.8778,
        "lon": 78.1333,
        "cat": "heritage",
        "elev": "272m Confluence",
        "season": "YEAR_ROUND",
        "desc": "7th-century Badami Chalukya sandstone temples dedicated to Shiva at Tungabhadra–Krishna sangam.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Alampur (Navabrahma Temples) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Alampur (Navabrahma Temples) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Alampur (Navabrahma Temples) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "alleppey",
        "name": "Alleppey (Alappuzha)",
        "lat": 9.4981,
        "lon": 76.3388,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Venice of the East: sprawling Vembanad backwater lagoons, traditional kettuvallam houseboats & Kuttanad below-sea paddy fields.",
        "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kettuvallam Houseboats on Vembanad Lake"
            },
            {
                "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=80",
                "caption": "Tranquil Palm-Fringed Backwater Canals"
            }
        ]
    },
    {
        "id": "amaravati",
        "name": "Amaravati (Historic Capital & Stupa)",
        "lat": 16.5739,
        "lon": 80.3575,
        "cat": "heritage",
        "elev": "30m Alluvial Plains",
        "season": "YEAR_ROUND",
        "desc": "Ancient Satavahana capital, Mahachaitya Buddhist stupa remains & colossal Dhyana Buddha statue.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Amaravati (Historic Capital & Stupa) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Amaravati (Historic Capital & Stupa) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Amaravati (Historic Capital & Stupa) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "ananthagiri_hills_vikarabad",
        "name": "Ananthagiri Hills & Vikarabad",
        "lat": 17.3114,
        "lon": 77.8631,
        "cat": "quick",
        "elev": "680m Forest Ridge",
        "season": "YEAR_ROUND",
        "desc": "Dense coffee and medicinal deciduous forest, Kotepally reservoir kayaking & origin of the Musi River.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Ananthagiri Hills & Vikarabad — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Ananthagiri Hills & Vikarabad — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Ananthagiri Hills & Vikarabad — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "anthargange",
        "name": "Anthargange",
        "lat": 13.1425,
        "lon": 78.1039,
        "cat": "quick",
        "elev": "1,260m Volcanic Hill",
        "season": "YEAR_ROUND",
        "desc": "Maze of volcanic granite cave crevasses, night exploration tunnels & perennial spring head.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antargange_caves_kolar.jpg/960px-Antargange_caves_kolar.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Antargange_caves_kolar.jpg/960px-Antargange_caves_kolar.jpg",
                "caption": "Volcanic Granite Cave Crevasses"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Anthargange_hills.jpg/960px-Anthargange_hills.jpg",
                "caption": "Perennial Spring Caverns & Rocky Trail"
            }
        ]
    },
    {
        "id": "araku_valley_borra_caves",
        "name": "Araku Valley & Borra Caves",
        "lat": 18.3273,
        "lon": 82.8775,
        "cat": "hill",
        "elev": "911m Eastern Ghats",
        "season": "OCT_MAR",
        "desc": "Misty tribal highland plateau, organic Arabica coffee estates & 150-million-year-old subterranean caves.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Araku Valley & Borra Caves — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Araku Valley & Borra Caves — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Araku Valley & Borra Caves — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "auroville",
        "name": "Auroville (City of Dawn)",
        "lat": 12.0069,
        "lon": 79.8106,
        "cat": "quick",
        "elev": "54m Plateau",
        "season": "YEAR_ROUND",
        "desc": "Experimental universal township anchored by the golden geodesic dome of Matrimandir and organic farms.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Matrimandir%2C_Auroville%2C_Pondicherry%2C_India.jpg/960px-Matrimandir%2C_Auroville%2C_Pondicherry%2C_India.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Matrimandir%2C_Auroville%2C_Pondicherry%2C_India.jpg/960px-Matrimandir%2C_Auroville%2C_Pondicherry%2C_India.jpg",
                "caption": "Golden Geodesic Dome of Matrimandir"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Matrimandir_Gardens.jpg/960px-Matrimandir_Gardens.jpg",
                "caption": "Auroville Peace Gardens & Lotus Pond"
            }
        ]
    },
    {
        "id": "avalabetta",
        "name": "Avalabetta",
        "lat": 13.5786,
        "lon": 77.7788,
        "cat": "quick",
        "elev": "1,150m Cliff",
        "season": "YEAR_ROUND",
        "desc": "Serene northern alternative to Nandi Hills with protruding cantilever rock ledge and valley views.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Avalabetta Cantilever Rock & Cliff Ledge"
            },
            {
                "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Panoramic_view_from_Avalabetta.jpg/960px-Panoramic_view_from_Avalabetta.jpg",
                "caption": "Panoramic Summit Vista from Avalabetta"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Chikkaballapura Granite Escarpment"
            }
        ]
    },
    {
        "id": "badami",
        "name": "Badami (Vatapi Cave Temples)",
        "lat": 15.9189,
        "lon": 75.6766,
        "cat": "heritage",
        "elev": "560m Red Sandstone",
        "season": "OCT_MAR",
        "desc": "6th-century Chalukya capital with dramatic red sandstone cave temples surrounding Agastya Lake & UNESCO coronation temples.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Badami_Cave_1_Nataraja.jpg/960px-Badami_Cave_1_Nataraja.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Badami_Cave_1_Nataraja.jpg/960px-Badami_Cave_1_Nataraja.jpg",
                "caption": "18-Armed Nataraja Rock-Cut Relief"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bhutanatha_group_of_temples%2C_Badami.jpg/960px-Bhutanatha_group_of_temples%2C_Badami.jpg",
                "caption": "Bhutanatha Temple on Agastya Lake"
            }
        ]
    },
    {
        "id": "bandipur_national_park",
        "name": "Bandipur National Park",
        "lat": 11.6664,
        "lon": 76.6331,
        "cat": "nature",
        "elev": "800m Deciduous Belt",
        "season": "YEAR_ROUND",
        "desc": "Core Nilgiri Biosphere sanctuary flanked by Western and Eastern Ghats junction along the Mysuru–Ooty highway.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Bandipur National Park — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Bandipur National Park — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Bandipur National Park — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "banganapalle",
        "name": "Banganapalle (Nawab Palace)",
        "lat": 15.32,
        "lon": 78.23,
        "cat": "heritage",
        "elev": "209m Rayalaseema Basin",
        "season": "YEAR_ROUND",
        "desc": "18th-century royal Nawab palace, birthplace of the famous Banganapalli mangoes & gateway to Yaganti caves.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Banganapalle (Nawab Palace) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Banganapalle (Nawab Palace) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Banganapalle (Nawab Palace) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "basar",
        "name": "Basar (Gnana Saraswati)",
        "lat": 18.88,
        "lon": 77.95,
        "cat": "heritage",
        "elev": "350m Godavari Bank",
        "season": "YEAR_ROUND",
        "desc": "Ancient Saraswati sanctum where sage Vyasa meditated; one of India's pre-eminent pilgrimage sites for Akshara Abhyasam.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Basar (Gnana Saraswati) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Basar (Gnana Saraswati) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Basar (Gnana Saraswati) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "basavakalyan_fort",
        "name": "Basavakalyan Fort",
        "lat": 17.8739,
        "lon": 76.9497,
        "cat": "heritage",
        "elev": "620m Plains",
        "season": "YEAR_ROUND",
        "desc": "12th-century Sharana social revolution capital of Basaveshwara, cave shrines, and deep moat fortification.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Basavakalyan Fort — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Basavakalyan Fort — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Basavakalyan Fort — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "bekal_fort",
        "name": "Bekal Fort",
        "lat": 12.3926,
        "lon": 75.0315,
        "cat": "heritage",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Massive 17th-century keyhole-shaped laterite ocean fort rising directly out of the Arabian Sea surf in Kasaragod.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Bekal Fort — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Bekal Fort — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Bekal Fort — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "belum_caves",
        "name": "Belum Caves",
        "lat": 15.1017,
        "lon": 78.1119,
        "cat": "nature",
        "elev": "280m Subterranean",
        "season": "OCT_MAR",
        "desc": "India's second-largest underground karst cave system featuring 3.2 km of limestone passages and sinkholes.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Belum_Caves_Underground_Hall.jpg/960px-Belum_Caves_Underground_Hall.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Belum_Caves_Underground_Hall.jpg/960px-Belum_Caves_Underground_Hall.jpg",
                "caption": "Underground Limestone Stalactite Hall"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Belum_Caves_Pataalaganga.jpg/960px-Belum_Caves_Pataalaganga.jpg",
                "caption": "Pataalaganga Subterranean Stream"
            }
        ]
    },
    {
        "id": "belur_halebidu",
        "name": "Belur & Halebidu",
        "lat": 13.1622,
        "lon": 75.8569,
        "cat": "heritage",
        "elev": "975m Hoysala Heartland",
        "season": "YEAR_ROUND",
        "desc": "Twin 12th-century Hoysaleshwara & Chennakeshava temples featuring intricate soapstone friezes (UNESCO).",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Belur & Halebidu — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Belur & Halebidu — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Belur & Halebidu — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "bhadrachalam",
        "name": "Bhadrachalam (Godavari Sanctum)",
        "lat": 17.6689,
        "lon": 80.8936,
        "cat": "heritage",
        "elev": "50m Godavari Bank",
        "season": "YEAR_ROUND",
        "desc": "Historic Rama temple constructed by Bhakta Ramadasu on the forested bends of the Godavari.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Bhadrachalam (Godavari Sanctum) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Bhadrachalam (Godavari Sanctum) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Bhadrachalam (Godavari Sanctum) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "bheemeshwari",
        "name": "Bheemeshwari (Cauvery Wildlife)",
        "lat": 12.3087,
        "lon": 77.2144,
        "cat": "nature",
        "elev": "620m River Basin",
        "season": "YEAR_ROUND",
        "desc": "Twin thunderous waterfalls (Gaganachukki & Bharachukki) dropping into a rocky Cauvery gorge.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Bheemeshwari (Cauvery Wildlife) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Bheemeshwari (Cauvery Wildlife) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Bheemeshwari (Cauvery Wildlife) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "bhongir_fort",
        "name": "Bhongir Fort (Bhuvanagiri)",
        "lat": 17.5111,
        "lon": 78.8889,
        "cat": "quick",
        "elev": "610m Monolithic Dome",
        "season": "YEAR_ROUND",
        "desc": "Isolated egg-shaped monolithic rock citadel built by Western Chalukya ruler Tribhuvanamalla.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Bhuvanagiri_Fort_Rock.jpg/960px-Bhuvanagiri_Fort_Rock.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Bhuvanagiri_Fort_Rock.jpg/960px-Bhuvanagiri_Fort_Rock.jpg",
                "caption": "Monolithic Egg-Shaped Granite Citadel"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bhongir_Fort_View.jpg/960px-Bhongir_Fort_View.jpg",
                "caption": "Western Chalukya Fortress Ramparts"
            }
        ]
    },
    {
        "id": "bidar_fort_mahmud_gawan",
        "name": "Bidar Fort & Mahmud Gawan",
        "lat": 17.9104,
        "lon": 77.5199,
        "cat": "heritage",
        "elev": "670m Laterite Plateau",
        "season": "YEAR_ROUND",
        "desc": "Bahmani and Barid Shahi capital: 3-mile perimeter red laterite moated fortress, Rangin Mahal & bidriware craft.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Bidar Fort & Mahmud Gawan — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Bidar Fort & Mahmud Gawan — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Bidar Fort & Mahmud Gawan — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "bijapur",
        "name": "Bijapur (Vijayapura Gol Gumbaz)",
        "lat": 16.8302,
        "lon": 75.71,
        "cat": "heritage",
        "elev": "606m Deccan Plains",
        "season": "OCT_MAR",
        "desc": "Adil Shahi architectural capital featuring the world's second-largest acoustic dome at Gol Gumbaz & Ibrahim Rauza.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Bijapur (Vijayapura Gol Gumbaz) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Bijapur (Vijayapura Gol Gumbaz) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Bijapur (Vijayapura Gol Gumbaz) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "biligiriranga_hills",
        "name": "Biligiriranga Hills (BR Hills)",
        "lat": 11.99,
        "lon": 77.14,
        "cat": "hill",
        "elev": "1,550m White Cliff",
        "season": "YEAR_ROUND",
        "desc": "Ecological bridge between Eastern and Western Ghats, sacred Champakaranya temple & Soliga tribal heartland.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Biligiriranga Hills (BR Hills) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Biligiriranga Hills (BR Hills) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Biligiriranga Hills (BR Hills) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "bogatha_falls",
        "name": "Bogatha Falls (Telangana Niagara)",
        "lat": 18.28,
        "lon": 80.5,
        "cat": "nature",
        "elev": "180m Cheekupally Stream",
        "season": "YEAR_ROUND",
        "desc": "Scenic horseshoe waterfall dropping into a crystal pool surrounded by dense Jayashankar Bhupalpally forest.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Bogatha Falls (Telangana Niagara) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Bogatha Falls (Telangana Niagara) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Bogatha Falls (Telangana Niagara) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "chandragiri_fort_raja_mahal",
        "name": "Chandragiri Fort & Raja Mahal",
        "lat": 13.5855,
        "lon": 79.3175,
        "cat": "heritage",
        "elev": "210m Fort Base",
        "season": "OCT_MAR",
        "desc": "Imposing granite citadel and Raja Mahal palace where Vijayanagara kings ruled during their final dynasty.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Chandragiri Fort & Raja Mahal — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Chandragiri Fort & Raja Mahal — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Chandragiri Fort & Raja Mahal — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "channapatna",
        "name": "Channapatna",
        "lat": 12.6519,
        "lon": 77.2062,
        "cat": "quick",
        "elev": "730m Valley",
        "season": "YEAR_ROUND",
        "desc": "Heritage lacquerware toy artisan workshops and rustic Silk City stop on the old Mysuru corridor.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Channapatna_Toys.jpg/960px-Channapatna_Toys.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Channapatna_Toys.jpg/960px-Channapatna_Toys.jpg",
                "caption": "Traditional Lacquer Wooden Toys"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Channapatna_Woodcraft.jpg/960px-Channapatna_Woodcraft.jpg",
                "caption": "Artisan Toy Craft Workshop"
            }
        ]
    },
    {
        "id": "chettinad",
        "name": "Chettinad (Karaikudi Mansions)",
        "lat": 10.0735,
        "lon": 78.7732,
        "cat": "heritage",
        "elev": "82m Limestone Plains",
        "season": "OCT_MAR",
        "desc": "Grand palatial mansions built by merchant bankers with Italian marble, Burmese teak, Athangudi tiles & fiery cuisine.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Chettinad (Karaikudi Mansions) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Chettinad (Karaikudi Mansions) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Chettinad (Karaikudi Mansions) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "chidambaram_pichavaram_mangrove",
        "name": "Chidambaram & Pichavaram Mangrove",
        "lat": 11.3992,
        "lon": 79.6936,
        "cat": "nature",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Akasa Lingam (Space element) Nataraja temple & the world's second-largest mangrove forest explored by rowboats.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Chidambaram & Pichavaram Mangrove — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Chidambaram & Pichavaram Mangrove — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Chidambaram & Pichavaram Mangrove — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "chikmagalur",
        "name": "Chikmagalur",
        "lat": 13.3161,
        "lon": 75.772,
        "cat": "hill",
        "elev": "1,090m Coffee Basin",
        "season": "YEAR_ROUND",
        "desc": "Birthplace of Indian coffee nestled beneath the Baba Budangiri range and serene mountain estates.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mullayanagiri_Peak.jpg/960px-Mullayanagiri_Peak.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mullayanagiri_Peak.jpg/960px-Mullayanagiri_Peak.jpg",
                "caption": "Mullayanagiri Summit Temple"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Baba_Budangiri_Hills.jpg/960px-Baba_Budangiri_Hills.jpg",
                "caption": "Baba Budangiri Misty Shola Ridge"
            }
        ]
    },
    {
        "id": "chitradurga",
        "name": "Chitradurga",
        "lat": 14.2251,
        "lon": 76.398,
        "cat": "heritage",
        "elev": "732m Granite Fortress",
        "season": "YEAR_ROUND",
        "desc": "Kallina Kote, the legendary seven-concentric stone boulder citadel with 18 secret watchtowers.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/960px-Chitradurga_Fort_Overview.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/960px-Chitradurga_Fort_Overview.jpg",
                "caption": "Seven-Walled Stone Fort Citadel"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Chitradurga_Fort_Granite_Passages.jpg/960px-Chitradurga_Fort_Granite_Passages.jpg",
                "caption": "Granite Passages & Obavvana Kindi"
            }
        ]
    },
    {
        "id": "coonoor",
        "name": "Coonoor",
        "lat": 11.353,
        "lon": 76.7959,
        "cat": "hill",
        "elev": "1,850m Tea Ravine",
        "season": "YEAR_ROUND",
        "desc": "Quieter Nilgiri sister station overlooking Catherine Falls, Droog Fort & manicured tea factory slopes.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Coonoor — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Coonoor — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Coonoor — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "coorg",
        "name": "Coorg (Madikeri)",
        "lat": 12.4244,
        "lon": 75.7382,
        "cat": "hill",
        "elev": "1,061m Mist Escarpment",
        "season": "YEAR_ROUND",
        "desc": "Scotland of India: emerald coffee estates, Raja's Seat valley panorama, Abbey Falls & Kodava culture.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Abbey_Falls_Coorg.jpg/960px-Abbey_Falls_Coorg.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Abbey_Falls_Coorg.jpg/960px-Abbey_Falls_Coorg.jpg",
                "caption": "Abbey Falls in Spice Plantations"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Raja%27s_Seat_Madikeri.jpg/960px-Raja%27s_Seat_Madikeri.jpg",
                "caption": "Raja's Seat Sunset Over Western Ghats"
            }
        ]
    },
    {
        "id": "coringa_wildlife_sanctuary_kakinada",
        "name": "Coringa Wildlife Sanctuary & Kakinada",
        "lat": 16.8185,
        "lon": 82.363,
        "cat": "nature",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Second-largest mangrove formation in India, Hope Island sand spit & endangered white-backed vulture habitat.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Coringa Wildlife Sanctuary & Kakinada — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Coringa Wildlife Sanctuary & Kakinada — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Coringa Wildlife Sanctuary & Kakinada — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "dandeli_anshi_tiger_reserve",
        "name": "Dandeli & Anshi Tiger Reserve",
        "lat": 15.2447,
        "lon": 74.6231,
        "cat": "nature",
        "elev": "473m Kali Valley",
        "season": "OCT_MAY",
        "desc": "Thrilling white-water rafting on the roaring Kali River, dense hornbill canopy & elusive black panther habitat.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Dandeli & Anshi Tiger Reserve — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Dandeli & Anshi Tiger Reserve — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Dandeli & Anshi Tiger Reserve — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "daulatabad_fort",
        "name": "Daulatabad Fort (Devagiri)",
        "lat": 19.9427,
        "lon": 75.2132,
        "cat": "heritage",
        "elev": "600m Monolithic Cone",
        "season": "YEAR_ROUND",
        "desc": "Impregnable pyramidal rock citadel with dark subterranean labyrinth tunnels (Bhulbhulaiya) and moat.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Daulatabad Fort (Devagiri) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Daulatabad Fort (Devagiri) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Daulatabad Fort (Devagiri) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "devarakonda_fort",
        "name": "Devarakonda Fort",
        "lat": 16.7,
        "lon": 78.92,
        "cat": "heritage",
        "elev": "380m Granite Citadel",
        "season": "YEAR_ROUND",
        "desc": "14th-century Recherla Velama stronghold built across 7 granite hills with hidden granaries and water cisterns.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Devarakonda Fort — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Devarakonda Fort — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Devarakonda Fort — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "devarayanadurga",
        "name": "Devarayanadurga",
        "lat": 13.3742,
        "lon": 77.2106,
        "cat": "quick",
        "elev": "1,188m Rocky Hill",
        "season": "YEAR_ROUND",
        "desc": "Dense dry deciduous forest hill with dual Yoga & Bhoga Narasimha temples and Namada Chilume spring.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Devarayanadurga_Hills.jpg/960px-Devarayanadurga_Hills.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Devarayanadurga_Hills.jpg/960px-Devarayanadurga_Hills.jpg",
                "caption": "Deciduous Forest Hill & Narasimha Temple"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Namada_Chilume.jpg/960px-Namada_Chilume.jpg",
                "caption": "Namada Chilume Natural Perennial Rock Spring"
            }
        ]
    },
    {
        "id": "dharmapuri",
        "name": "Dharmapuri (Narasimha)",
        "lat": 18.95,
        "lon": 79.08,
        "cat": "heritage",
        "elev": "215m Godavari River",
        "season": "YEAR_ROUND",
        "desc": "Vedic learning settlement on the Godavari banks housing ancient Narasimha rock shrines and bathing ghats.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Dharmapuri (Narasimha) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Dharmapuri (Narasimha) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Dharmapuri (Narasimha) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "gandikota",
        "name": "Gandikota (The Grand Canyon)",
        "lat": 14.8144,
        "lon": 78.2861,
        "cat": "heritage",
        "elev": "290m Canyon Rim",
        "season": "OCT_MAR",
        "desc": "The Grand Canyon of India: sheer red sandstone gorge carved by the Pennar River below a 13th-century fort.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gandikota_Canyon_View.jpg/960px-Gandikota_Canyon_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gandikota_Canyon_View.jpg/960px-Gandikota_Canyon_View.jpg",
                "caption": "Pennar River Gorge & Grand Canyon"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gandikota_Fort_Ramparts.jpg/960px-Gandikota_Fort_Ramparts.jpg",
                "caption": "Red Sandstone Fort Ramparts"
            }
        ]
    },
    {
        "id": "gangaikonda_cholapuram",
        "name": "Gangaikonda Cholapuram",
        "lat": 11.2061,
        "lon": 79.4522,
        "cat": "heritage",
        "elev": "38m Plains",
        "season": "YEAR_ROUND",
        "desc": "Imperial capital founded by Rajendra Chola I after his conquest of the Ganges, featuring a massive living temple.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Gangaikonda Cholapuram — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Gangaikonda Cholapuram — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Gangaikonda Cholapuram — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "ghanpur_temples",
        "name": "Ghanpur Temples (Kota Gullu)",
        "lat": 18.32,
        "lon": 79.88,
        "cat": "heritage",
        "elev": "230m Forest Complex",
        "season": "YEAR_ROUND",
        "desc": "Cluster of 22 13th-century Kakatiya red sandstone temples built by King Ganapatideva nestled in palm groves.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Ghanpur Temples (Kota Gullu) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Ghanpur Temples (Kota Gullu) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Ghanpur Temples (Kota Gullu) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "gingee_fort",
        "name": "Gingee Fort (Senji)",
        "lat": 12.2536,
        "lon": 79.4183,
        "cat": "heritage",
        "elev": "250m Triple Citadel",
        "season": "OCT_MAR",
        "desc": "The Troy of the East: impregnable triple-citadel complex (Rajagiri, Krishnagiri, Chandrayandurg).",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Gingee Fort (Senji) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Gingee Fort (Senji) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Gingee Fort (Senji) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "gokarna",
        "name": "Gokarna",
        "lat": 14.5479,
        "lon": 74.3188,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Serene temple coastal enclave with Om Beach, Kudle Beach & cliff trails above the Arabian Sea.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Om Beach Twin Crescent Bays"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kudle_Beach_Sunset.jpg/960px-Kudle_Beach_Sunset.jpg",
                "caption": "Kudle Beach Rocky Headland"
            }
        ]
    },
    {
        "id": "gooty_fort",
        "name": "Gooty Fort",
        "lat": 15.11,
        "lon": 77.63,
        "cat": "heritage",
        "elev": "680m Shell Fort",
        "season": "YEAR_ROUND",
        "desc": "Vast shell-shaped granite mountain citadel with 15 rampart gates built by Vijayanagara and Maratha rulers.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Gooty Fort — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Gooty Fort — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Gooty Fort — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "gulbarga",
        "name": "Gulbarga (Kalaburagi)",
        "lat": 17.3297,
        "lon": 76.8343,
        "cat": "heritage",
        "elev": "454m Black Soil Plains",
        "season": "YEAR_ROUND",
        "desc": "Early Bahmani sultanate capital: colossal Jama Masjid without open courtyard, 15 towers & Khwaja Bande Nawaz Dargah.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Gulbarga (Kalaburagi) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Gulbarga (Kalaburagi) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Gulbarga (Kalaburagi) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "hampi",
        "name": "Hampi (Vijayanagara UNESCO)",
        "lat": 15.335,
        "lon": 76.46,
        "cat": "heritage",
        "elev": "467m Monolithic Basin",
        "season": "OCT_MAR",
        "desc": "Surreal landscape of balancing granite boulders, ruined imperial palaces, Stone Chariot & Tungabhadra ghats.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stone_Chariot_at_Vijaya_Vittala_Temple_in_Hampi.jpg/960px-Stone_Chariot_at_Vijaya_Vittala_Temple_in_Hampi.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stone_Chariot_at_Vijaya_Vittala_Temple_in_Hampi.jpg/960px-Stone_Chariot_at_Vijaya_Vittala_Temple_in_Hampi.jpg",
                "caption": "Vijaya Vittala Stone Chariot"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Virupaksha_Temple_Hampi.jpg/960px-Virupaksha_Temple_Hampi.jpg",
                "caption": "Virupaksha Temple Gopuram & River Ghats"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hampi_boulders_sunset.jpg/960px-Hampi_boulders_sunset.jpg",
                "caption": "Hemakuta Hill Monolithic Boulders"
            }
        ]
    },
    {
        "id": "hogenakkal_falls",
        "name": "Hogenakkal Falls",
        "lat": 12.1186,
        "lon": 77.777,
        "cat": "nature",
        "elev": "250m River Canyon",
        "season": "JUL_FEB",
        "desc": "Niagara of India: roaring Kaveri river cascading through carbonatite rock canyon with coracle boat rides.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Hogenakkal Falls — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Hogenakkal Falls — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Hogenakkal Falls — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "horsley_hills",
        "name": "Horsley Hills",
        "lat": 13.6593,
        "lon": 78.397,
        "cat": "hill",
        "elev": "1,290m Escarpment",
        "season": "YEAR_ROUND",
        "desc": "Cool Eastern Ghats highland plateau fringed with eucalyptus groves and scenic sunset cliffs.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Horsley Hills — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Horsley Hills — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Horsley Hills — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "javadhu_hills",
        "name": "Javadhu Hills",
        "lat": 12.6333,
        "lon": 78.9167,
        "cat": "hill",
        "elev": "1,100m Eastern Ghats",
        "season": "OCT_MAR",
        "desc": "Untouched blue-tinged hill range known for Vainu Bappu astronomical observatory and Beemanmadavu waterfalls.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Javadhu Hills — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Javadhu Hills — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Javadhu Hills — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "jog_falls",
        "name": "Jog Falls (Gerosoppa)",
        "lat": 14.2289,
        "lon": 74.8122,
        "cat": "nature",
        "elev": "475m Sharavathi Chasm",
        "season": "YEAR_ROUND",
        "desc": "Second-highest plunge waterfall in India, where the Sharavathi river divides into Raja, Roarer, Rocket & Rani.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/960px-Jog_Falls_during_monsoon.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/960px-Jog_Falls_during_monsoon.jpg",
                "caption": "Raja, Roarer, Rocket & Rani Cascades"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jog_Falls_Mist.jpg/960px-Jog_Falls_Mist.jpg",
                "caption": "Sharavathi Gorge Monsoon Mist Plume"
            }
        ]
    },
    {
        "id": "kabini",
        "name": "Kabini (Nagarhole Tiger Reserve)",
        "lat": 11.9261,
        "lon": 76.3264,
        "cat": "nature",
        "elev": "700m Backwaters",
        "season": "YEAR_ROUND",
        "desc": "Prime wildlife safari habitat on Kabini reservoir, home to leopards, black panthers & Asiatic elephant herds.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kabini (Nagarhole Tiger Reserve) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kabini (Nagarhole Tiger Reserve) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kabini (Nagarhole Tiger Reserve) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kadem_dam_reservoir",
        "name": "Kadem Dam & Reservoir",
        "lat": 19.1,
        "lon": 78.78,
        "cat": "nature",
        "elev": "213m Kadam River",
        "season": "YEAR_ROUND",
        "desc": "Picturesque multi-spillway masonry reservoir surrounded by forest hillocks near the Kawal wildlife corridor.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kadem Dam & Reservoir — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kadem Dam & Reservoir — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kadem Dam & Reservoir — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kaigal_falls",
        "name": "Kaigal Falls (Dumukurallu)",
        "lat": 13.06,
        "lon": 78.58,
        "cat": "nature",
        "elev": "650m Forest Basin",
        "season": "YEAR_ROUND",
        "desc": "Unspoiled 40-foot waterfall cascading over natural rock fissures inside the Kaundinya elephant corridor.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kaigal Falls (Dumukurallu) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kaigal Falls (Dumukurallu) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kaigal Falls (Dumukurallu) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kailasakona_waterfalls",
        "name": "Kailasakona Waterfalls",
        "lat": 13.37,
        "lon": 79.62,
        "cat": "nature",
        "elev": "210m Nagari Valley",
        "season": "YEAR_ROUND",
        "desc": "Perennial crystalline mineral cascade dropping from 40 feet in the Nagari valley with Shiva-Parvati shrine.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kailasakona Waterfalls — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kailasakona Waterfalls — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kailasakona Waterfalls — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kakkabe_tadiandamol",
        "name": "Kakkabe & Tadiandamol",
        "lat": 12.2133,
        "lon": 75.6111,
        "cat": "hill",
        "elev": "1,748m Coorg Roof",
        "season": "YEAR_ROUND",
        "desc": "Highest peak in Kodagu with sweeping shola-grassland ridges and 18th-century Padi Igguthappa temple.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Kakkabe & Tadiandamol — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Kakkabe & Tadiandamol — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Kakkabe & Tadiandamol — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "kaleshwaram",
        "name": "Kaleshwaram (Triveni Sangam)",
        "lat": 18.81,
        "lon": 79.91,
        "cat": "heritage",
        "elev": "128m River Confluence",
        "season": "YEAR_ROUND",
        "desc": "Rare Mukteshwara shrine with two lingams on a single plinth at the confluence of the Godavari and Pranahita rivers.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kaleshwaram (Triveni Sangam) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kaleshwaram (Triveni Sangam) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kaleshwaram (Triveni Sangam) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "kanchipuram",
        "name": "Kanchipuram (City of Thousand Temples)",
        "lat": 12.8342,
        "lon": 79.7036,
        "cat": "heritage",
        "elev": "83m Vegavathi Basin",
        "season": "YEAR_ROUND",
        "desc": "Pallava & Chola temple architecture capital (Kailasanathar, Ekambareswarar) and world-famous pure mulberry silk weaving.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kanchipuram (City of Thousand Temples) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kanchipuram (City of Thousand Temples) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kanchipuram (City of Thousand Temples) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "kannur",
        "name": "Kannur (Theyyam Coast)",
        "lat": 11.8745,
        "lon": 75.3704,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Asia's longest drive-in beach at Muzhappilangad, sacred ritual Theyyam performances & St. Angelo seaside fort.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Kannur (Theyyam Coast) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kannur (Theyyam Coast) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kannur (Theyyam Coast) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "kanyakumari",
        "name": "Kanyakumari (Cape Comorin)",
        "lat": 8.0883,
        "lon": 77.5385,
        "cat": "coastal",
        "elev": "Sea Level (Peninsular Tip)",
        "season": "OCT_MAR",
        "desc": "Southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean meet; iconic Vivekananda Rock Memorial & sunrise/sunset ocean confluence.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vivekananda_Rock_Memorial_Sunset.jpg/960px-Vivekananda_Rock_Memorial_Sunset.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vivekananda_Rock_Memorial_Sunset.jpg/960px-Vivekananda_Rock_Memorial_Sunset.jpg",
                "caption": "Vivekananda Rock Memorial & Thiruvalluvar Statue"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kanyakumari_Triveni_Sangam.jpg/960px-Kanyakumari_Triveni_Sangam.jpg",
                "caption": "Triveni Sangam Three-Sea Confluence"
            }
        ]
    },
    {
        "id": "karwar",
        "name": "Karwar (Devbagh)",
        "lat": 14.8185,
        "lon": 74.1352,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Tagore's secluded beach inspiration, Kali River estuary, casuarina island camps & authentic coastal seafood.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Karwar (Devbagh) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Karwar (Devbagh) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Karwar (Devbagh) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "kaundinya_wildlife_sanctuary",
        "name": "Kaundinya Wildlife Sanctuary",
        "lat": 13.15,
        "lon": 78.65,
        "cat": "nature",
        "elev": "700m Palamaner Hills",
        "season": "YEAR_ROUND",
        "desc": "Only sanctuary in Andhra Pradesh with a thriving population of Asiatic elephants, leopards, and sloth bears.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kaundinya Wildlife Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kaundinya Wildlife Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kaundinya Wildlife Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kawal_tiger_reserve",
        "name": "Kawal Tiger Reserve",
        "lat": 19.1667,
        "lon": 78.9667,
        "cat": "nature",
        "elev": "280m Teak Forest",
        "season": "OCT_MAY",
        "desc": "Prime northern Telangana teak sanctuary on the Godavari banks sheltering nilgai, leopards, and gaur.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kawal Tiger Reserve — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kawal Tiger Reserve — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kawal Tiger Reserve — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "keesaragutta",
        "name": "Keesaragutta",
        "lat": 17.5167,
        "lon": 78.6833,
        "cat": "quick",
        "elev": "560m Boulder Hillock",
        "season": "YEAR_ROUND",
        "desc": "Ancient Ramalingeswara rock-cut cave shrines chiseled amidst thousands of monolithic stone lingams.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Keesaragutta — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Keesaragutta — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Keesaragutta — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "kemmangundi",
        "name": "Kemmangundi (KR Hills)",
        "lat": 13.5489,
        "lon": 75.7583,
        "cat": "hill",
        "elev": "1,434m Royal Retreat",
        "season": "YEAR_ROUND",
        "desc": "Wodeyar hill retreat with landscaped rose gardens, Hebbe Falls plunge & Z-point canyon trek.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Kemmangundi (KR Hills) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Kemmangundi (KR Hills) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Kemmangundi (KR Hills) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "khammam_fort_palair_lake",
        "name": "Khammam Fort & Palair Lake",
        "lat": 17.2472,
        "lon": 80.1514,
        "cat": "heritage",
        "elev": "112m Stambhadri Rock",
        "season": "YEAR_ROUND",
        "desc": "Stambhadri hill fortress blending Kakatiya, Musunuri Nayak, and Qutb Shahi architecture.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Khammam Fort & Palair Lake — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Khammam Fort & Palair Lake — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Khammam Fort & Palair Lake — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "kochi",
        "name": "Kochi (Fort Kochi)",
        "lat": 9.9312,
        "lon": 76.2673,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Historic Malabar spice port, cantilevered Chinese fishing nets, Jewish Synagogue & colonial Portuguese lanes.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Kochi (Fort Kochi) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kochi (Fort Kochi) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kochi (Fort Kochi) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "kodaikanal",
        "name": "Kodaikanal",
        "lat": 10.2381,
        "lon": 77.4892,
        "cat": "hill",
        "elev": "2,133m Palani Hills",
        "season": "YEAR_ROUND",
        "desc": "Princess of Hill Stations: star-shaped mountain lake, Pillar Rocks, pine forest canopy & crisp shola air via Batlagundu Ghat.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pillar_Rocks%2C_Kodaikanal.jpg/960px-Pillar_Rocks%2C_Kodaikanal.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pillar_Rocks%2C_Kodaikanal.jpg/960px-Pillar_Rocks%2C_Kodaikanal.jpg",
                "caption": "Pillar Rocks Vertical Granite Cliffs"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kodaikanal_Lake_Aerial.jpg/960px-Kodaikanal_Lake_Aerial.jpg",
                "caption": "Star-Shaped Kodai Lake & Pine Forest"
            }
        ]
    },
    {
        "id": "koilkonda_fort_koilsagar",
        "name": "Koilkonda Fort & Koilsagar",
        "lat": 16.7025,
        "lon": 77.7889,
        "cat": "quick",
        "elev": "550m Granite Gorge",
        "season": "YEAR_ROUND",
        "desc": "Challenging 7-gate Qutb Shahi hill fortress trek overlooking the serene Koilsagar reservoir.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Koilkonda Fort & Koilsagar — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Koilkonda Fort & Koilsagar — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Koilkonda Fort & Koilsagar — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "kolhapur",
        "name": "Kolhapur",
        "lat": 16.705,
        "lon": 74.2433,
        "cat": "heritage",
        "elev": "569m Panchganga Basin",
        "season": "YEAR_ROUND",
        "desc": "Historic Maratha bastion: Mahalakshmi temple, Rankala Lake, Panhala cliff fortress & fiery tambda-pandhra rassa cuisine.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kolhapur — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kolhapur — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kolhapur — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "kolli_hills",
        "name": "Kolli Hills (Kolli Malai)",
        "lat": 11.25,
        "lon": 78.3333,
        "cat": "hill",
        "elev": "1,300m Mountain",
        "season": "OCT_MAR",
        "desc": "Thrilling 70 continuous hairpin bends, Agaya Gangai waterfall plunge & ancient Arapaleeswarar temple.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Kolli Hills (Kolli Malai) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Kolli Hills (Kolli Malai) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Kolli Hills (Kolli Malai) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "kotagiri",
        "name": "Kotagiri",
        "lat": 11.43,
        "lon": 76.88,
        "cat": "hill",
        "elev": "1,793m Kota Heartland",
        "season": "YEAR_ROUND",
        "desc": "The oldest Nilgiri hill settlement with pristine temperate climate, Catherine Falls & Kodanad View Point.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Kotagiri — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Kotagiri — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Kotagiri — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "kozhikode",
        "name": "Kozhikode (Calicut)",
        "lat": 11.2588,
        "lon": 75.7804,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Historic landing of Vasco da Gama at Kappad beach, legendary Malabar culinary heritage & Beypore wooden dhow shipyards.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Kozhikode (Calicut) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kozhikode (Calicut) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Kozhikode (Calicut) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "kudremukh_peak_reserve",
        "name": "Kudremukh Peak & Reserve",
        "lat": 13.2144,
        "lon": 75.2536,
        "cat": "hill",
        "elev": "1,894m Horse Face",
        "season": "YEAR_ROUND",
        "desc": "Rolling emerald shola grasslands shaped like a horse's face in a protected tiger and lion-tailed macaque habitat.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Kudremukh Peak & Reserve — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Kudremukh Peak & Reserve — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Kudremukh Peak & Reserve — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "kumbakonam",
        "name": "Kumbakonam (Temple City)",
        "lat": 10.9601,
        "lon": 79.377,
        "cat": "heritage",
        "elev": "24m Kaveri Basin",
        "season": "YEAR_ROUND",
        "desc": "Exquisite 12th-century Chola chariot temple with musical steps and miniature stone stone-carving friezes.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kumbakonam (Temple City) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kumbakonam (Temple City) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kumbakonam (Temple City) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "kuntala_falls",
        "name": "Kuntala Falls",
        "lat": 19.3,
        "lon": 78.5,
        "cat": "nature",
        "elev": "420m Kadam River Bluff",
        "season": "YEAR_ROUND",
        "desc": "Highest waterfall in Telangana, where the Kadam river plunges 150 feet down two rocky tiers in Sahyadri hills.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kuntala Falls — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kuntala Falls — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kuntala Falls — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kurnool_orvakal_rock_garden",
        "name": "Kurnool & Orvakal Rock Garden",
        "lat": 15.8281,
        "lon": 78.0373,
        "cat": "heritage",
        "elev": "273m Quartzite Crags",
        "season": "YEAR_ROUND",
        "desc": "Konda Reddy Buruju fort bastion & 3-billion-year-old volcanic silica/quartzite rock formations.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kurnool & Orvakal Rock Garden — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kurnool & Orvakal Rock Garden — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kurnool & Orvakal Rock Garden — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "kuruva_island",
        "name": "Kuruva Island (Kuruvadweep)",
        "lat": 11.8219,
        "lon": 76.0911,
        "cat": "nature",
        "elev": "750m River Island",
        "season": "YEAR_ROUND",
        "desc": "Protected 950-acre uninhabited delta of evergreen river islets on the Kabini tributaries with bamboo rafts.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kuruva Island (Kuruvadweep) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kuruva Island (Kuruvadweep) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kuruva Island (Kuruvadweep) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "kushalnagar_bylakuppe",
        "name": "Kushalnagar & Bylakuppe",
        "lat": 12.4439,
        "lon": 75.9664,
        "cat": "heritage",
        "elev": "835m Plains",
        "season": "YEAR_ROUND",
        "desc": "Largest Tibetan settlement in South India with the Namdroling Golden Temple & craft monasteries.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kushalnagar & Bylakuppe — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kushalnagar & Bylakuppe — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kushalnagar & Bylakuppe — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "laknavaram_lake",
        "name": "Laknavaram Lake",
        "lat": 18.15,
        "lon": 80.08,
        "cat": "nature",
        "elev": "210m Lake Basin",
        "season": "YEAR_ROUND",
        "desc": "Sprawling lake created by Kakatiya rulers spanning 10,000 acres across 13 forested islands with suspension bridge.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Laknavaram Lake — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Laknavaram Lake — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Laknavaram Lake — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "lambasingi",
        "name": "Lambasingi (Kashmir of Andhra)",
        "lat": 17.8167,
        "lon": 82.4833,
        "cat": "hill",
        "elev": "1,000m Eastern Ghats",
        "season": "YEAR_ROUND",
        "desc": "The only location in South India that occasionally experiences sub-zero winter temperatures and morning frost.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Lambasingi (Kashmir of Andhra) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Lambasingi (Kashmir of Andhra) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Lambasingi (Kashmir of Andhra) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "lepakshi",
        "name": "Lepakshi",
        "lat": 13.8044,
        "lon": 77.6055,
        "cat": "heritage",
        "elev": "630m Deccan Plain",
        "season": "OCT_MAR",
        "desc": "16th-century Vijayanagara architectural wonder with hanging pillar and giant monolithic Basavanna Nandi.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Lepakshi — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Lepakshi — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Lepakshi — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "lonar_meteorite_crater",
        "name": "Lonar Meteorite Crater",
        "lat": 19.9763,
        "lon": 76.5074,
        "cat": "nature",
        "elev": "480m Basalt Plateau",
        "season": "OCT_MAR",
        "desc": "World's only hyper-velocity impact crater formed in volcanic basalt rock, filled by a mysterious hyper-saline soda lake.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Lonar Meteorite Crater — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Lonar Meteorite Crater — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Lonar Meteorite Crater — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "madurai",
        "name": "Madurai (Meenakshi Temple)",
        "lat": 9.9252,
        "lon": 78.1198,
        "cat": "heritage",
        "elev": "101m Vaigai Basin",
        "season": "OCT_MAR",
        "desc": "Ancient Pandyan capital anchored by the 14 towering gopurams of Meenakshi Amman Temple & Nayakkar Palace via 6-lane NH 44.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Meenakshi_Amman_Temple_Gopurams.jpg/960px-Meenakshi_Amman_Temple_Gopurams.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Meenakshi_Amman_Temple_Gopurams.jpg/960px-Meenakshi_Amman_Temple_Gopurams.jpg",
                "caption": "Meenakshi Amman Temple Gopurams"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Madurai_Thousand_Pillar_Hall.jpg/960px-Madurai_Thousand_Pillar_Hall.jpg",
                "caption": "Thousand Pillar Colonnade Hall"
            }
        ]
    },
    {
        "id": "mahabalipuram",
        "name": "Mahabalipuram (Mamallapuram UNESCO)",
        "lat": 12.6269,
        "lon": 80.1927,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "OCT_MAR",
        "desc": "7th-century UNESCO World Heritage Shore Temple, Arjuna's Penance, Pancha Rathas & monolithic elephant carvings.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Shore_Temple_at_Mahabalipuram.jpg/960px-Shore_Temple_at_Mahabalipuram.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Shore_Temple_at_Mahabalipuram.jpg/960px-Shore_Temple_at_Mahabalipuram.jpg",
                "caption": "Shore Temple on the Bay of Bengal"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pancha_Rathas_Mahabalipuram.jpg/960px-Pancha_Rathas_Mahabalipuram.jpg",
                "caption": "Pancha Rathas Monolithic Shrines"
            }
        ]
    },
    {
        "id": "makalidurga",
        "name": "Makalidurga",
        "lat": 13.4278,
        "lon": 77.5028,
        "cat": "quick",
        "elev": "1,117m Fortified Ridge",
        "season": "YEAR_ROUND",
        "desc": "Railway-curve foot trail leading to rugged hilltop Vijayanagara fort ruins overlooking Gundamagere lake.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Makalidurga_hill.jpg/960px-Makalidurga_hill.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Makalidurga_hill.jpg/960px-Makalidurga_hill.jpg",
                "caption": "Rugged Granite Hill & Railway Curve"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Makalidurga_Fort_Summit.jpg/960px-Makalidurga_Fort_Summit.jpg",
                "caption": "Vijayanagara Fort Ruins & Gundamagere Lake"
            }
        ]
    },
    {
        "id": "mangalore",
        "name": "Mangalore (Mangaluru)",
        "lat": 12.9141,
        "lon": 74.856,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Historic port gateway, Someshwara beach cliffs, Mangaladevi sanctum & coastal culinary capital.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Mangalore (Mangaluru) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Mangalore (Mangaluru) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Mangalore (Mangaluru) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "manginapudi_beach",
        "name": "Manginapudi Beach (Machilipatnam)",
        "lat": 16.2089,
        "lon": 81.2464,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Natural black soil beach and historic Coromandel port used by Dutch, French, and British traders.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Manginapudi Beach (Machilipatnam) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Manginapudi Beach (Machilipatnam) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Manginapudi Beach (Machilipatnam) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "mantralayam",
        "name": "Mantralayam",
        "lat": 15.94,
        "lon": 77.43,
        "cat": "heritage",
        "elev": "325m Tungabhadra Bank",
        "season": "YEAR_ROUND",
        "desc": "Sacred Vrindavana shrine of Saint Raghavendra Swami on the banks of the Tungabhadra River.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Mantralayam — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Mantralayam — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Mantralayam — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "maravanthe_beach",
        "name": "Maravanthe Beach",
        "lat": 13.7042,
        "lon": 74.6369,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Rare scenic coastal highway strip with Arabian Sea on one side and the Souparnika River on the other.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Maravanthe Beach — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Maravanthe Beach — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Maravanthe Beach — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "maredumilli_rampachodavaram",
        "name": "Maredumilli & Rampachodavaram",
        "lat": 17.6,
        "lon": 81.7167,
        "cat": "nature",
        "elev": "420m Eastern Ghats",
        "season": "AUG_FEB",
        "desc": "Dense semi-evergreen monsoon rainforest, bamboo chicken tribal cuisine & Jalatharangini waterfall.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Maredumilli & Rampachodavaram — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Maredumilli & Rampachodavaram — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Maredumilli & Rampachodavaram — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "medak_fort_cathedral",
        "name": "Medak Fort & Cathedral",
        "lat": 18.0461,
        "lon": 78.2617,
        "cat": "heritage",
        "elev": "488m Hilltop Bastion",
        "season": "YEAR_ROUND",
        "desc": "Kakatiya hilltop fortress with 3 massive gateways and the towering 175-foot Gothic Medak Cathedral.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Medak Fort & Cathedral — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Medak Fort & Cathedral — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Medak Fort & Cathedral — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "mekedatu_sangama",
        "name": "Mekedatu & Sangama",
        "lat": 12.2633,
        "lon": 77.4478,
        "cat": "nature",
        "elev": "580m Gorge",
        "season": "YEAR_ROUND",
        "desc": "Confluence of Arkavathi and Cauvery narrowing into a deep, turbulent granite chasm.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Mekedatu & Sangama — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Mekedatu & Sangama — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Mekedatu & Sangama — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "melukote",
        "name": "Melukote",
        "lat": 12.6644,
        "lon": 76.6575,
        "cat": "heritage",
        "elev": "910m Hill Sanctum",
        "season": "YEAR_ROUND",
        "desc": "Srivaisnava spiritual citadel atop Yadugiri hill with Kalyani stepwell and Yoga Narasimha temple.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Melukote — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Melukote — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Melukote — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "mettur_dam_stanley_reservoir",
        "name": "Mettur Dam & Stanley Reservoir",
        "lat": 11.79,
        "lon": 77.8,
        "cat": "nature",
        "elev": "240m Kaveri Gorge",
        "season": "YEAR_ROUND",
        "desc": "One of India's largest masonry dams controlling the Kaveri River, bordered by rolling Shevaroy foothills.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Mettur Dam & Stanley Reservoir — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Mettur Dam & Stanley Reservoir — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Mettur Dam & Stanley Reservoir — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "mudumalai_tiger_reserve",
        "name": "Mudumalai Tiger Reserve",
        "lat": 11.5714,
        "lon": 76.5404,
        "cat": "nature",
        "elev": "960m Foothills",
        "season": "YEAR_ROUND",
        "desc": "Dense teak and bamboo forests at Nilgiri base sheltering royal Bengal tigers, gaur & the Moyar river gorge.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Mudumalai Tiger Reserve — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Mudumalai Tiger Reserve — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Mudumalai Tiger Reserve — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "mullayanagiri_peak",
        "name": "Mullayanagiri Peak",
        "lat": 13.3911,
        "lon": 75.7214,
        "cat": "hill",
        "elev": "1,930m Karnataka Summit",
        "season": "YEAR_ROUND",
        "desc": "Highest peak in Karnataka with narrow ridge drives, brisk winds & sweeping views across Deccan plateau.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Mullayanagiri Peak — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Mullayanagiri Peak — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Mullayanagiri Peak — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "munnar",
        "name": "Munnar",
        "lat": 10.0889,
        "lon": 77.0595,
        "cat": "hill",
        "elev": "1,532m High Range",
        "season": "YEAR_ROUND",
        "desc": "Top Station panoramic pass overlooking Tamil Nadu plains, tea estates & misty Nilgiri tahr sanctuary via Trichy–Theni.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tea_Gardens_Munnar.jpg/960px-Tea_Gardens_Munnar.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tea_Gardens_Munnar.jpg/960px-Tea_Gardens_Munnar.jpg",
                "caption": "Rolling Emerald Tea Plantations"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Anamudi_Peak_Munnar.jpg/960px-Anamudi_Peak_Munnar.jpg",
                "caption": "Anamudi South India's Highest Peak"
            }
        ]
    },
    {
        "id": "murudeshwar",
        "name": "Murudeshwar",
        "lat": 14.0944,
        "lon": 74.4897,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "World's second-tallest Shiva statue (123 ft) on a peninsula cliff overlooking Kanduka Hill & Rajagopuram.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Murudeshwar — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Murudeshwar — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Murudeshwar — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "muttukadu_siruseri_backwaters",
        "name": "Muttukadu & Siruseri Backwaters",
        "lat": 12.82,
        "lon": 80.24,
        "cat": "quick",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Historic Dutch port village turned surfing and windsurfing hub with crescent beach and fishing coves.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Muttukadu & Siruseri Backwaters — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Muttukadu & Siruseri Backwaters — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Muttukadu & Siruseri Backwaters — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "mypadu_beach",
        "name": "Mypadu Beach (Nellore)",
        "lat": 14.51,
        "lon": 80.18,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Pristine golden sand beach lined with casuarina groves and fresh seafood on the southern Andhra coast.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Mypadu Beach (Nellore) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Mypadu Beach (Nellore) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Mypadu Beach (Nellore) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "mysore",
        "name": "Mysore (Amba Vilas Palace)",
        "lat": 12.2958,
        "lon": 76.6394,
        "cat": "heritage",
        "elev": "763m Royal Basin",
        "season": "YEAR_ROUND",
        "desc": "Wodeyar royal capital, Indo-Saracenic illuminated palace & Chamundi Hill vantage point.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Mysore (Amba Vilas Palace) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Mysore (Amba Vilas Palace) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Mysore (Amba Vilas Palace) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "nagalapuram",
        "name": "Nagalapuram (Siddulaiah Kona)",
        "lat": 13.4,
        "lon": 79.78,
        "cat": "nature",
        "elev": "240m Red Sandstone Canyon",
        "season": "YEAR_ROUND",
        "desc": "Forest canyon river trekking with 3 consecutive natural freshwater swimming pools and sliding rocks.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagalapuram (Siddulaiah Kona) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Nagalapuram (Siddulaiah Kona) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagalapuram (Siddulaiah Kona) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "nagapattinam",
        "name": "Nagapattinam (Soundararaja)",
        "lat": 10.76,
        "lon": 79.84,
        "cat": "heritage",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Historic Chola seaport on the Bay of Bengal, ancient maritime trading hub with Burma and Sri Lanka.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Nagapattinam (Soundararaja) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Nagapattinam (Soundararaja) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Nagapattinam (Soundararaja) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "nagari_nose",
        "name": "Nagari Nose (Nagari Hills)",
        "lat": 13.32,
        "lon": 79.58,
        "cat": "hill",
        "elev": "855m Cliff",
        "season": "YEAR_ROUND",
        "desc": "Dramatic cliff precipice shaped like a human nose rising high above Kushasthali river; popular trekking summit.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagari Nose (Nagari Hills) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagari Nose (Nagari Hills) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagari Nose (Nagari Hills) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "nagarjuna_sagar_island_museum",
        "name": "Nagarjuna Sagar & Island Museum",
        "lat": 16.5778,
        "lon": 79.3144,
        "cat": "nature",
        "elev": "124m Krishna Reservoir",
        "season": "YEAR_ROUND",
        "desc": "70-foot multi-stream cascade dropping into a lagoon with a freshwater crocodile breeding centre.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagarjuna Sagar & Island Museum — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Nagarjuna Sagar & Island Museum — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Nagarjuna Sagar & Island Museum — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "nagpur",
        "name": "Nagpur (Deekshabhoomi & Gateway)",
        "lat": 21.1458,
        "lon": 79.0882,
        "cat": "heritage",
        "elev": "310m Central Plateau",
        "season": "YEAR_ROUND",
        "desc": "Historic central zero-mile marker, Dr. Ambedkar's colossal Deekshabhoomi stupa & orange orchards.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Nagpur (Deekshabhoomi & Gateway) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Nagpur (Deekshabhoomi & Gateway) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Nagpur (Deekshabhoomi & Gateway) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "nanded",
        "name": "Nanded (Hazur Sahib)",
        "lat": 19.153,
        "lon": 77.3014,
        "cat": "heritage",
        "elev": "362m Godavari Plains",
        "season": "YEAR_ROUND",
        "desc": "One of the five holy Takhts of Sikhism where Guru Gobind Singh spent his final days on the banks of Godavari.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Nanded (Hazur Sahib) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Nanded (Hazur Sahib) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Nanded (Hazur Sahib) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "nandi_hills",
        "name": "Nandi Hills",
        "lat": 13.3702,
        "lon": 77.6835,
        "cat": "quick",
        "elev": "1,478m Granite Cliff",
        "season": "YEAR_ROUND",
        "desc": "Pre-dawn cloud inversions, Tipu Sultan's cliff fort & ancient Bhoga Nandeeshwara base temple.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tipu%27s_Drop_Nandi_Hills.jpg/960px-Tipu%27s_Drop_Nandi_Hills.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tipu%27s_Drop_Nandi_Hills.jpg/960px-Tipu%27s_Drop_Nandi_Hills.jpg",
                "caption": "Tipu's Drop Cliff Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nandi_hills_early_morning.jpg/960px-Nandi_hills_early_morning.jpg",
                "caption": "Pre-Dawn Cloud Inversion Sunrise"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bhoga_Nandeeshwara_Temple.jpg/960px-Bhoga_Nandeeshwara_Temple.jpg",
                "caption": "Bhoga Nandeeshwara Foothill Temple"
            }
        ]
    },
    {
        "id": "narsapur_forest_lake",
        "name": "Narsapur Forest & Lake",
        "lat": 17.74,
        "lon": 78.28,
        "cat": "quick",
        "elev": "580m Forest Hills",
        "season": "YEAR_ROUND",
        "desc": "Tranquil deciduous forest ridge, natural mini-lake & cycling/trekking canopy just outside Hyderabad.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Narsapur Forest & Lake — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Narsapur Forest & Lake — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Narsapur Forest & Lake — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "ooty",
        "name": "Ooty (Udhagamandalam)",
        "lat": 11.41,
        "lon": 76.695,
        "cat": "hill",
        "elev": "2,240m Nilgiri Highs",
        "season": "YEAR_ROUND",
        "desc": "Queen of Hill Stations: rolling blue eucalyptus sholas, tea estates, Doddabetta Peak & steam railway.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ooty_Lake.jpg/960px-Ooty_Lake.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ooty_Lake.jpg/960px-Ooty_Lake.jpg",
                "caption": "Ooty Lake & Nilgiri Hills"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Nilgiri_Mountain_Railway_Train.jpg/960px-Nilgiri_Mountain_Railway_Train.jpg",
                "caption": "UNESCO Nilgiri Mountain Toy Train"
            }
        ]
    },
    {
        "id": "pakhal_lake_wildlife_sanctuary",
        "name": "Pakhal Lake & Wildlife Sanctuary",
        "lat": 17.95,
        "lon": 79.98,
        "cat": "nature",
        "elev": "280m Wetland Reserve",
        "season": "YEAR_ROUND",
        "desc": "Pristine 13th-century artificial lake hemmed by dense deciduous teak forest, leopards and sloth bears.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Pakhal Lake & Wildlife Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Pakhal Lake & Wildlife Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Pakhal Lake & Wildlife Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "papikondalu",
        "name": "Papikondalu (Papi Hills Gorge)",
        "lat": 17.48,
        "lon": 81.42,
        "cat": "nature",
        "elev": "120m Godavari Canyon",
        "season": "OCT_MAR",
        "desc": "Scenic riverboat journey through the deep canyon of the Godavari River slicing dramatically through Eastern Ghats.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Papikondalu (Papi Hills Gorge) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Papikondalu (Papi Hills Gorge) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Papikondalu (Papi Hills Gorge) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "pattadakal",
        "name": "Pattadakal (UNESCO)",
        "lat": 15.9489,
        "lon": 75.8164,
        "cat": "heritage",
        "elev": "530m River Valley",
        "season": "OCT_MAR",
        "desc": "UNESCO World Heritage coronation site showcasing fusion of northern Nagara and southern Dravidian architecture.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Pattadakal (UNESCO) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Pattadakal (UNESCO) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Pattadakal (UNESCO) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "pench_national_park",
        "name": "Pench National Park",
        "lat": 21.6582,
        "lon": 79.2882,
        "cat": "nature",
        "elev": "425m Satpura Foothills",
        "season": "OCT_JUN",
        "desc": "The true setting of Kipling's Jungle Book: teak forest canopy, tiger corridors & scenic lake safari on the MP-Maharashtra border.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Pench National Park — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Pench National Park — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Pench National Park — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "pillalamarri",
        "name": "Pillalamarri (Mahabubnagar Banyan)",
        "lat": 16.7489,
        "lon": 77.9944,
        "cat": "quick",
        "elev": "498m Plains",
        "season": "YEAR_ROUND",
        "desc": "800-year-old banyan tree spreading over 4 acres with ancient Kakatiya shrines nearby.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Pillalamarri (Mahabubnagar Banyan) — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Pillalamarri (Mahabubnagar Banyan) — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Pillalamarri (Mahabubnagar Banyan) — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "pocharam_wildlife_sanctuary",
        "name": "Pocharam Wildlife Sanctuary",
        "lat": 18.14,
        "lon": 78.16,
        "cat": "nature",
        "elev": "470m Wetland Forest",
        "season": "YEAR_ROUND",
        "desc": "Historic Nizam hunting preserve around Pocharam lake, home to chinkara, sambar, and painted storks.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Pocharam Wildlife Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Pocharam Wildlife Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Pocharam Wildlife Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "pochera_falls",
        "name": "Pochera Falls",
        "lat": 19.26,
        "lon": 78.43,
        "cat": "nature",
        "elev": "390m Gorge",
        "season": "YEAR_ROUND",
        "desc": "Deep circular stone amphitheater waterfall where the Godavari tributaries drop through basalt rock crevasses.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Pochera Falls — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Pochera Falls — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Pochera Falls — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "pondicherry",
        "name": "Pondicherry (Puducherry)",
        "lat": 11.9416,
        "lon": 79.8083,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "OCT_MAR",
        "desc": "French colonial White Town bougainvillea promenades, rock beach, French bakeries & bohemian Auroville community.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Pondicherry (Puducherry) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Pondicherry (Puducherry) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Pondicherry (Puducherry) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "pulicat_lake_bird_sanctuary",
        "name": "Pulicat Lake & Bird Sanctuary",
        "lat": 13.42,
        "lon": 80.32,
        "cat": "nature",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "India's second-largest brackish lagoon, Dutch cemetery ruins & winter breeding ground for thousands of flamingos.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Pulicat Lake & Bird Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Pulicat Lake & Bird Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Pulicat Lake & Bird Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "rachakonda_fort",
        "name": "Rachakonda Fort",
        "lat": 17.1756,
        "lon": 78.8144,
        "cat": "quick",
        "elev": "520m Rock Citadel",
        "season": "YEAR_ROUND",
        "desc": "14th-century Velama dynasty boulder fortress with cyclopean stone masonry and ruined palaces.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Rachakonda Fort — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Rachakonda Fort — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Rachakonda Fort — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "ramanagara",
        "name": "Ramanagara",
        "lat": 12.7209,
        "lon": 77.2799,
        "cat": "quick",
        "elev": "747m Granite Crag",
        "season": "YEAR_ROUND",
        "desc": "Legendary granite boulder formations, rock-climbing faces & endangered long-billed vulture sanctuary.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ramadevara_Betta%2C_Ramanagara.jpg/960px-Ramadevara_Betta%2C_Ramanagara.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ramadevara_Betta%2C_Ramanagara.jpg/960px-Ramadevara_Betta%2C_Ramanagara.jpg",
                "caption": "Ramadevarabetta Rock Crags & Vulture Sanctuary"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ramadevarabetta_Ramanagara.jpg/960px-Ramadevarabetta_Ramanagara.jpg",
                "caption": "Monolithic Granite Boulders of Sholay Fame"
            }
        ]
    },
    {
        "id": "ramappa_temple",
        "name": "Ramappa Temple (UNESCO)",
        "lat": 18.2589,
        "lon": 79.9431,
        "cat": "heritage",
        "elev": "220m Forest Base",
        "season": "YEAR_ROUND",
        "desc": "13th-century UNESCO World Heritage marvel featuring floating bricks and intricate black basalt carved brackets.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Ramappa Temple (UNESCO) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Ramappa Temple (UNESCO) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Ramappa Temple (UNESCO) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "rameshwaram_dhanushkodi",
        "name": "Rameshwaram & Dhanushkodi",
        "lat": 9.2876,
        "lon": 79.3129,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "OCT_MAR",
        "desc": "Pamban sea-bridge crossing to the temple island & ghost-town ruins of Dhanushkodi sand spit where two oceans meet.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pamban_Bridge_Cantilever.jpg/960px-Pamban_Bridge_Cantilever.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pamban_Bridge_Cantilever.jpg/960px-Pamban_Bridge_Cantilever.jpg",
                "caption": "Pamban Cantilever Sea Bridge"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dhanushkodi_Ghost_Town_Ruins.jpg/960px-Dhanushkodi_Ghost_Town_Ruins.jpg",
                "caption": "Dhanushkodi Ghost Town Sandspit"
            }
        ]
    },
    {
        "id": "ranganathittu_bird_sanctuary",
        "name": "Ranganathittu Bird Sanctuary",
        "lat": 12.4244,
        "lon": 76.6844,
        "cat": "nature",
        "elev": "690m Islets",
        "season": "YEAR_ROUND",
        "desc": "Six Cauvery river islets hosting dense breeding colonies of painted storks, spoonbills & mugger crocodiles.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Ranganathittu Bird Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Ranganathittu Bird Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Ranganathittu Bird Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "sadras_dutch_fort",
        "name": "Sadras Dutch Fort",
        "lat": 12.5186,
        "lon": 80.165,
        "cat": "heritage",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "17th-century seaside brick fortification with watchtowers, colonial burial vaults, and casuarina-fringed beach.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Sadras Dutch Fort — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Sadras Dutch Fort — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Sadras Dutch Fort — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "sakleshpur",
        "name": "Sakleshpur",
        "lat": 12.9442,
        "lon": 75.7865,
        "cat": "hill",
        "elev": "956m Western Ghats",
        "season": "YEAR_ROUND",
        "desc": "Cloud-covered Bisle Ghat bio-reserve, Green Route railway trek & star-shaped Manjarabad Fort built by Tipu.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Sakleshpur — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Sakleshpur — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Sakleshpur — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "savandurga",
        "name": "Savandurga",
        "lat": 12.9192,
        "lon": 77.2931,
        "cat": "quick",
        "elev": "1,226m Monolith",
        "season": "YEAR_ROUND",
        "desc": "One of Asia's largest monolithic granite masses rising sheer above Arkavathi forest reserve.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Asia's Largest Monolithic Granite Mass"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Savandurga_Trek.jpg/960px-Savandurga_Trek.jpg",
                "caption": "Monolith Ridge Overlooking Arkavathi Forest"
            }
        ]
    },
    {
        "id": "shamirpet_lake_deer_park",
        "name": "Shamirpet Lake & Deer Park",
        "lat": 17.5956,
        "lon": 78.57,
        "cat": "quick",
        "elev": "540m Lakefront",
        "season": "YEAR_ROUND",
        "desc": "Scenic sunset lakefront ringed with rocky granite crags and a natural dry deciduous deer sanctuary.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Shamirpet Lake & Deer Park — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Shamirpet Lake & Deer Park — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Shamirpet Lake & Deer Park — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "shimoga_mattur",
        "name": "Shimoga & Mattur",
        "lat": 13.9299,
        "lon": 75.5681,
        "cat": "heritage",
        "elev": "570m Tunga Valley",
        "season": "YEAR_ROUND",
        "desc": "Gateway to Malnad along Tunga River and Mattur, India's famous living Sanskrit-speaking village.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Shimoga & Mattur — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Shimoga & Mattur — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Shimoga & Mattur — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "shivagange",
        "name": "Shivagange",
        "lat": 13.1706,
        "lon": 77.2272,
        "cat": "quick",
        "elev": "1,368m Sacred Cone",
        "season": "YEAR_ROUND",
        "desc": "Conical granite peak shaped like a Shiva Lingam with spring-fed rock-cut cave temples.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Shivagange_Hill_Tumkur.jpg/960px-Shivagange_Hill_Tumkur.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Shivagange_Hill_Tumkur.jpg/960px-Shivagange_Hill_Tumkur.jpg",
                "caption": "Conical Shivalinga Shaped Granite Peak"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Shivagange_Trek_Steps.jpg/960px-Shivagange_Trek_Steps.jpg",
                "caption": "Rock-Cut Ascent Steps & Sacred Springs"
            }
        ]
    },
    {
        "id": "shravanabelagola",
        "name": "Shravanabelagola",
        "lat": 12.8583,
        "lon": 76.4864,
        "cat": "heritage",
        "elev": "1,020m Vindhyagiri",
        "season": "YEAR_ROUND",
        "desc": "Colossal 58-foot monolithic statue of Lord Bahubali carved from single granite rock in 981 CE.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Shravanabelagola — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Shravanabelagola — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Shravanabelagola — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "singur_dam_reservoir",
        "name": "Singur Dam & Reservoir",
        "lat": 17.7558,
        "lon": 77.925,
        "cat": "nature",
        "elev": "525m Manjeera Basin",
        "season": "YEAR_ROUND",
        "desc": "Deep Manjeera river reservoir sheltering hundreds of mugger crocodiles and migratory waterfowl.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Singur Dam & Reservoir — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Singur Dam & Reservoir — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Singur Dam & Reservoir — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "sirumalai_hills",
        "name": "Sirumalai Hills",
        "lat": 10.19,
        "lon": 77.99,
        "cat": "hill",
        "elev": "1,600m Foothills",
        "season": "YEAR_ROUND",
        "desc": "Quiet isolated Eastern Ghats hill range with 18 hairpin bends, famous Sirumalai hill bananas & Sanjeevani hill lore.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Sirumalai Hills — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Sirumalai Hills — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Sirumalai Hills — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "somnathpur",
        "name": "Somnathpur (Chennakeshava)",
        "lat": 12.2764,
        "lon": 76.9048,
        "cat": "heritage",
        "elev": "650m Plains",
        "season": "YEAR_ROUND",
        "desc": "13th-century UNESCO trikuta Hoysala masterpiece carved entirely from soapstone on a star-shaped plinth.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Somnathpur (Chennakeshava) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Somnathpur (Chennakeshava) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Somnathpur (Chennakeshava) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "south_goa",
        "name": "South Goa (Palolem & Agonda)",
        "lat": 15.01,
        "lon": 74.02,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Crescent-shaped palm-fringed bays, Cabo de Rama fort ruins & relaxed coastal road trip terminus.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "South Goa (Palolem & Agonda) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "South Goa (Palolem & Agonda) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "South Goa (Palolem & Agonda) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "srikalahasti",
        "name": "Srikalahasti",
        "lat": 13.75,
        "lon": 79.7,
        "cat": "heritage",
        "elev": "68m Swarnamukhi River",
        "season": "YEAR_ROUND",
        "desc": "Vayu Lingam (Air element) sanctum on the Swarnamukhi River, noted for ancient Rahu-Ketu parihara rituals.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Srikalahasti — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Srikalahasti — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Srikalahasti — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "srisailam",
        "name": "Srisailam (Mallikarjuna Jyotirlinga)",
        "lat": 16.0747,
        "lon": 78.8681,
        "cat": "heritage",
        "elev": "457m Krishna Canyon",
        "season": "OCT_MAR",
        "desc": "Mallikarjuna Jyotirlinga sanctum perched inside the deep Nallamala tiger sanctuary and massive Krishna dam gorge.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Srisailam (Mallikarjuna Jyotirlinga) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Srisailam (Mallikarjuna Jyotirlinga) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Srisailam (Mallikarjuna Jyotirlinga) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "suryalanka_beach",
        "name": "Suryalanka Beach (Bapatla)",
        "lat": 15.8459,
        "lon": 80.5212,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Wide golden sand beach on the Bay of Bengal with gentle surf and dolphin spotting.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Suryalanka Beach (Bapatla) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Suryalanka Beach (Bapatla) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Suryalanka Beach (Bapatla) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "tada_falls",
        "name": "Tada Falls (Ubbalamadugu)",
        "lat": 13.6,
        "lon": 79.85,
        "cat": "nature",
        "elev": "180m Crystalline Gorge",
        "season": "YEAR_ROUND",
        "desc": "Rocky canyon trek through crystalline forest pools and waterfalls situated on the Tamil Nadu–Andhra border.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Tada Falls (Ubbalamadugu) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Tada Falls (Ubbalamadugu) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Tada Falls (Ubbalamadugu) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "tadoba_andhari_tiger_reserve",
        "name": "Tadoba-Andhari Tiger Reserve",
        "lat": 20.2407,
        "lon": 79.3023,
        "cat": "nature",
        "elev": "250m Central Teak Belt",
        "season": "OCT_JUN",
        "desc": "Maharashtra's premier tiger sanctuary: dense bamboo thickets, Moharli/Kolara safari gates & high apex predator density via NH 44.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Tadoba-Andhari Tiger Reserve — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Tadoba-Andhari Tiger Reserve — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Tadoba-Andhari Tiger Reserve — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "talakadu",
        "name": "Talakadu",
        "lat": 12.195,
        "lon": 77.0319,
        "cat": "heritage",
        "elev": "635m Sand Dunes",
        "season": "YEAR_ROUND",
        "desc": "Mystical desert-like sand dunes burying 30+ historic Ganga dynasty temples along the Cauvery bend.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Talakadu — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Talakadu — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Talakadu — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "thanjavur",
        "name": "Thanjavur (Brihadisvara UNESCO)",
        "lat": 10.787,
        "lon": 79.1378,
        "cat": "heritage",
        "elev": "59m Kaveri Delta",
        "season": "YEAR_ROUND",
        "desc": "The Big Temple of Raja Raja Chola: 216-foot granite vimana topped with an 80-ton monolithic cupola & bronze gallery.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/960px-Brihadisvara_Temple_Thanjavur.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/960px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Brihadisvara Temple 216ft Vimana"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thanjavur_Palace_Durbar_Hall.jpg/960px-Thanjavur_Palace_Durbar_Hall.jpg",
                "caption": "Thanjavur Maratha Royal Palace"
            }
        ]
    },
    {
        "id": "thekkady",
        "name": "Thekkady (Periyar Tiger Reserve)",
        "lat": 9.6031,
        "lon": 77.1615,
        "cat": "nature",
        "elev": "900m Cardamom Hills",
        "season": "YEAR_ROUND",
        "desc": "Lake boat safaris surrounded by submerged dead trees, wild elephant herds & dense evergreen spice hills.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Thekkady (Periyar Tiger Reserve) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Thekkady (Periyar Tiger Reserve) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Thekkady (Periyar Tiger Reserve) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "thirunallar",
        "name": "Thirunallar (Karaikal)",
        "lat": 10.93,
        "lon": 79.79,
        "cat": "heritage",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Legendary temple of Lord Dharbaranyeswarar and Saturn (Saneeswara) with sacred Nalan Theertham bathing tank.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Thirunallar (Karaikal) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Thirunallar (Karaikal) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Thirunallar (Karaikal) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "thiruvananthapuram",
        "name": "Thiruvananthapuram (Trivandrum & Kovalam)",
        "lat": 8.5241,
        "lon": 76.9366,
        "cat": "coastal",
        "elev": "15m Coastal Ridge",
        "season": "OCT_MAR",
        "desc": "Capital of Kerala, home to the monumental Padmanabhaswamy Temple, crescent beaches of Kovalam, and coastal cliff outposts along the Arabian Sea.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Thiruvananthapuram (Trivandrum & Kovalam) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Thiruvananthapuram (Trivandrum & Kovalam) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Thiruvananthapuram (Trivandrum & Kovalam) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "tirupati_tirumala",
        "name": "Tirupati & Tirumala",
        "lat": 13.6833,
        "lon": 79.35,
        "cat": "hill",
        "elev": "853m Seshachalam",
        "season": "OCT_MAR",
        "desc": "Seven holy peaks of the Seshachalam Biosphere Reserve surrounded by red sandalwood reserves and waterfalls.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Tirupati & Tirumala — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Tirupati & Tirumala — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Tirupati & Tirumala — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "tiruvallur_poondi_reservoir",
        "name": "Tiruvallur & Poondi Reservoir",
        "lat": 13.14,
        "lon": 79.9,
        "cat": "quick",
        "elev": "42m Kosasthalaiyar Basin",
        "season": "YEAR_ROUND",
        "desc": "Ancient 8th-century Veeraraghava Perumal temple and expansive Poondi reservoir dam with parklands.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Avalabetta.jpg",
                "caption": "Tiruvallur & Poondi Reservoir — Monolithic Granite Escarpment"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Savandurga_Hill.jpg/960px-Savandurga_Hill.jpg",
                "caption": "Tiruvallur & Poondi Reservoir — Deccan Plateau Hilltop Fortifications"
            },
            {
                "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
                "caption": "Tiruvallur & Poondi Reservoir — Rustic Outpost Reservoir & Crags"
            }
        ]
    },
    {
        "id": "tiruvannamalai",
        "name": "Tiruvannamalai (Arunachala)",
        "lat": 12.2253,
        "lon": 79.0747,
        "cat": "heritage",
        "elev": "171m Sacred Peak",
        "season": "YEAR_ROUND",
        "desc": "Agni Lingam (Fire element) temple at the base of sacred Mount Arunachala and Sri Ramana Maharshi ashram.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Tiruvannamalai (Arunachala) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Tiruvannamalai (Arunachala) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Tiruvannamalai (Arunachala) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "topslip",
        "name": "Topslip (Anaimalai Tiger Reserve)",
        "lat": 10.48,
        "lon": 76.85,
        "cat": "nature",
        "elev": "750m Anamalai Foothills",
        "season": "YEAR_ROUND",
        "desc": "Pristine teak woods, elephant rehabilitation camp, hornbills, and wilderness safari in the core Western Ghats.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Topslip (Anaimalai Tiger Reserve) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Topslip (Anaimalai Tiger Reserve) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Topslip (Anaimalai Tiger Reserve) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "tranquebar",
        "name": "Tranquebar (Tharangambadi)",
        "lat": 11.0289,
        "lon": 79.8519,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "OCT_MAR",
        "desc": "Land of the Singing Waves: 1620 Danish Fort Dansborg, ozone-rich coastal breezes & quiet colonial churches on the coast.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Tranquebar (Tharangambadi) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Tranquebar (Tharangambadi) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Tranquebar (Tharangambadi) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "trichy",
        "name": "Trichy (Rockfort & Srirangam)",
        "lat": 10.7905,
        "lon": 78.7047,
        "cat": "heritage",
        "elev": "88m Kaveri River",
        "season": "YEAR_ROUND",
        "desc": "83m monolithic Rockfort perched high above the Kaveri, and the 156-acre island temple complex of Sri Ranganathaswamy.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Trichy (Rockfort & Srirangam) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Trichy (Rockfort & Srirangam) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Trichy (Rockfort & Srirangam) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "udupi_malpe_beach",
        "name": "Udupi & Malpe Beach",
        "lat": 13.3409,
        "lon": 74.7421,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Krishna Mutt heritage, Malpe beach sea walk & geological wonder St. Mary's basaltic hexagonal columns.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Udupi & Malpe Beach — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Udupi & Malpe Beach — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Udupi & Malpe Beach — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "uppada_beach_handloom_hub",
        "name": "Uppada Beach & Handloom Hub",
        "lat": 17.07,
        "lon": 82.33,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "YEAR_ROUND",
        "desc": "Coastal village famous for Jamdani silk weaving, eroded shoreline geology & Bay of Bengal views.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Uppada Beach & Handloom Hub — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Uppada Beach & Handloom Hub — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Uppada Beach & Handloom Hub — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "vagamon",
        "name": "Vagamon",
        "lat": 9.6869,
        "lon": 76.9056,
        "cat": "hill",
        "elev": "1,100m Pine Ridge",
        "season": "YEAR_ROUND",
        "desc": "Untamed pine forests, rolling velvet-green meadows, Kurisumala tea monastery & misty paragliding cliffs.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Vagamon — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Vagamon — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Vagamon — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "valparai",
        "name": "Valparai",
        "lat": 10.3267,
        "lon": 76.9554,
        "cat": "hill",
        "elev": "1,193m Anamalais",
        "season": "YEAR_ROUND",
        "desc": "Challenging 40 hairpin bends above Aliyar Dam into dense rain-soaked tea plantations and lion-tailed macaque habitat.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Valparai — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Valparai — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Valparai — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "vedanthangal_bird_sanctuary",
        "name": "Vedanthangal Bird Sanctuary",
        "lat": 12.54,
        "lon": 79.85,
        "cat": "nature",
        "elev": "122m Wetland Reserve",
        "season": "YEAR_ROUND",
        "desc": "India's oldest water bird sanctuary (est. 1798), home to 40,000+ migratory herons, storks, and ibises in barringtonia groves.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Vedanthangal Bird Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Vedanthangal Bird Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Vedanthangal Bird Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "velankanni_nagore",
        "name": "Velankanni & Nagore",
        "lat": 10.68,
        "lon": 79.84,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "OCT_MAR",
        "desc": "Lourdes of the East Basilica on the Bay of Bengal coast alongside the historic 16th-century Sufi shrine of Nagore Dargah.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Velankanni & Nagore — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Velankanni & Nagore — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Velankanni & Nagore — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "vellore_fort_jalakanteshwara",
        "name": "Vellore Fort & Jalakanteshwara",
        "lat": 12.9231,
        "lon": 79.1325,
        "cat": "heritage",
        "elev": "216m Palar Basin",
        "season": "YEAR_ROUND",
        "desc": "Imposing 16th-century Vijayanagara granite fortress surrounded by a massive water moat and exquisite carved temple pillars.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Vellore Fort & Jalakanteshwara — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Vellore Fort & Jalakanteshwara — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Vellore Fort & Jalakanteshwara — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "vijayawada",
        "name": "Vijayawada (Kanaka Durga)",
        "lat": 16.5062,
        "lon": 80.648,
        "cat": "heritage",
        "elev": "39m Krishna Delta",
        "season": "YEAR_ROUND",
        "desc": "Indrakeeladri hill sanctum, Prakasam Barrage across Krishna River & ancient Undavalli rock-cut cave temples.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Vijayawada (Kanaka Durga) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Vijayawada (Kanaka Durga) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Vijayawada (Kanaka Durga) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "visakhapatnam",
        "name": "Visakhapatnam (Vizag & Rushikonda)",
        "lat": 17.6868,
        "lon": 83.2185,
        "cat": "coastal",
        "elev": "Sea Level",
        "season": "OCT_MAR",
        "desc": "The City of Destiny: sweeping beaches, INS Kursura submarine museum, Ross Hill harbor & cliffside coastal drives.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Om_Beach_Gokarna_Cliff_View.jpg/960px-Om_Beach_Gokarna_Cliff_View.jpg",
                "caption": "Visakhapatnam (Vizag & Rushikonda) — Rocky Arabian Sea Headland"
            },
            {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
                "caption": "Visakhapatnam (Vizag & Rushikonda) — Coastal Palm Fringed Shoreline"
            },
            {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80",
                "caption": "Visakhapatnam (Vizag & Rushikonda) — Tidal Lagoon & Backwater Estuary"
            }
        ]
    },
    {
        "id": "warangal",
        "name": "Warangal (Thousand Pillar)",
        "lat": 17.9689,
        "lon": 79.5941,
        "cat": "heritage",
        "elev": "302m Kakatiya Heart",
        "season": "YEAR_ROUND",
        "desc": "Ancient Kakatiya imperial capital: Thousand Pillar Temple, Warangal Fort stone gateways & Bhadrakali temple.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Warangal (Thousand Pillar) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Warangal (Thousand Pillar) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Warangal (Thousand Pillar) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "wayanad",
        "name": "Wayanad (Vythiri & Chembra)",
        "lat": 11.5544,
        "lon": 76.0425,
        "cat": "hill",
        "elev": "1,300m Cloud Ridge",
        "season": "YEAR_ROUND",
        "desc": "Misty spice-laden Kerala mountain crest, heart-shaped Chembra lake trek & Edakkal Neolithic rock caves.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chembra_Peak_Heart_Lake.jpg/960px-Chembra_Peak_Heart_Lake.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chembra_Peak_Heart_Lake.jpg/960px-Chembra_Peak_Heart_Lake.jpg",
                "caption": "Heart-Shaped Lake on Chembra Peak"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Edakkal_Caves_Petroglyphs.jpg/960px-Edakkal_Caves_Petroglyphs.jpg",
                "caption": "Edakkal Caves Prehistoric Petroglyphs"
            }
        ]
    },
    {
        "id": "yaganti",
        "name": "Yaganti (Uma Maheshwara)",
        "lat": 15.35,
        "lon": 78.1333,
        "cat": "heritage",
        "elev": "320m Cave Gorge",
        "season": "YEAR_ROUND",
        "desc": "Mystical growing monolithic Nandi bull, Pushkarini freshwater pond & Agastya meditation cave.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Yaganti (Uma Maheshwara) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Yaganti (Uma Maheshwara) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Yaganti (Uma Maheshwara) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "yelagiri_hills",
        "name": "Yelagiri Hills",
        "lat": 12.5786,
        "lon": 78.6399,
        "cat": "hill",
        "elev": "1,110m Plateau",
        "season": "YEAR_ROUND",
        "desc": "Serene 14-hairpin mountain road leading to an orchard-covered Eastern Ghats basin.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Yelagiri Hills — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Yelagiri Hills — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Yelagiri Hills — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "yercaud",
        "name": "Yercaud (Shevaroy Hills)",
        "lat": 11.7753,
        "lon": 78.2093,
        "cat": "hill",
        "elev": "1,515m Shevaroys",
        "season": "YEAR_ROUND",
        "desc": "Jewel of the South: tranquil coffee and orange plantation hill station overlooking the Salem plains.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Yercaud (Shevaroy Hills) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Yercaud (Shevaroy Hills) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Yercaud (Shevaroy Hills) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "dantewada",
        "name": "Dantewada (Maa Danteshwari Temple)",
        "lat": 18.8943,
        "lon": 81.3497,
        "cat": "heritage",
        "elev": "385m Bastar Basin",
        "season": "OCT_MAR",
        "desc": "Ancient 14th-century Shakti Peetha at the sacred confluence of Shankini and Dankini rivers, constructed by Kakatiya rulers with exquisite Bastar woodcraft.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Danteshwari_Temple_Dantewada.jpg/960px-Danteshwari_Temple_Dantewada.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Danteshwari_Temple_Dantewada.jpg/960px-Danteshwari_Temple_Dantewada.jpg",
                "caption": "14th-Century Danteshwari Shakti Peeth"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Shankhini_Dankini_Confluence.jpg/960px-Shankhini_Dankini_Confluence.jpg",
                "caption": "Shankhini & Dankini Holy River Confluence"
            }
        ]
    },
    {
        "id": "barsur",
        "name": "Barsur (Twin Ganesha & Battisa Temple)",
        "lat": 19.1026,
        "lon": 81.3789,
        "cat": "heritage",
        "elev": "390m Indravati Basin",
        "season": "OCT_MAR",
        "desc": "Historical 11th-century capital of the Chhindaka Nagavanshis, famed for the colossal 8-foot monolithic Twin Ganesha and the 32-pillared Battisa Shiva Temple.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Barsur (Twin Ganesha & Battisa Temple) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Barsur (Twin Ganesha & Battisa Temple) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Barsur (Twin Ganesha & Battisa Temple) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "chitrakote_falls",
        "name": "Chitrakote Falls (Niagara of India)",
        "lat": 19.2064,
        "lon": 81.7061,
        "cat": "nature",
        "elev": "560m Indravati Gorge",
        "season": "JUL_OCT",
        "desc": "India's widest waterfall, a majestic 300m horseshoe curtain on the Indravati river plunging 95 feet through lush sal-forested gorges.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chitrakoot_Falls.jpg/960px-Chitrakoot_Falls.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chitrakoot_Falls.jpg/960px-Chitrakoot_Falls.jpg",
                "caption": "Horseshoe Waterfall on Indravati River (Niagara of India)"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chitrakote_Falls_Monsoon_Flow.jpg/960px-Chitrakote_Falls_Monsoon_Flow.jpg",
                "caption": "Bastar Plateau Monsoon Flow & Canyon Gorge"
            }
        ]
    },
    {
        "id": "tirathgarh_falls",
        "name": "Tirathgarh Falls (Kanger Valley)",
        "lat": 18.9056,
        "lon": 81.8631,
        "cat": "nature",
        "elev": "570m Kanger Basin",
        "season": "AUG_DEC",
        "desc": "Spectacular 300-foot block-tiered waterfall cascading down white limestone terraces inside Kanger Valley National Park.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tirathgarh_Waterfalls_Bastar.jpg/960px-Tirathgarh_Waterfalls_Bastar.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tirathgarh_Waterfalls_Bastar.jpg/960px-Tirathgarh_Waterfalls_Bastar.jpg",
                "caption": "Tiered Step Falls in Kanger Valley"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tirathgarh_Bastar_Forest.jpg/960px-Tirathgarh_Bastar_Forest.jpg",
                "caption": "Mugabahar River Canyon Forest"
            }
        ]
    },
    {
        "id": "kanger_valley_kutumsar",
        "name": "Kanger Valley & Kutumsar Caves",
        "lat": 18.8682,
        "lon": 81.9425,
        "cat": "nature",
        "elev": "580m Karst Plateau",
        "season": "NOV_MAY",
        "desc": "Subterranean limestone karst cavern 330m deep featuring dramatic stalactites, blind cave fish, and pristine sal biosphere sheltering Bastar hill mynas.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Kanger Valley & Kutumsar Caves — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Kanger Valley & Kutumsar Caves — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Kanger Valley & Kutumsar Caves — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "jagdalpur",
        "name": "Jagdalpur (Bastar Royal Citadel)",
        "lat": 19.0744,
        "lon": 82.008,
        "cat": "heritage",
        "elev": "555m Bastar Plateau",
        "season": "OCT_MAR",
        "desc": "Cultural capital of the Bastar tribal kingdom, renowned for Dokra bell-metal crafts, wood carving galleries, and the historic 75-day Bastar Dussehra festival.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Jagdalpur (Bastar Royal Citadel) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Jagdalpur (Bastar Royal Citadel) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Jagdalpur (Bastar Royal Citadel) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "keshkal_ghat",
        "name": "Keshkal Ghat & Tatamari Hill",
        "lat": 20.0883,
        "lon": 81.5951,
        "cat": "hill",
        "elev": "640m Keshkal Pass",
        "season": "OCT_FEB",
        "desc": "Spectacular 12-hairpin mountain pass marking the geological climb onto the Bastar plateau, offering panoramic vistas of the Muria tribal hills and Tatamari pine groves.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Keshkal Ghat & Tatamari Hill — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Keshkal Ghat & Tatamari Hill — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Keshkal Ghat & Tatamari Hill — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "kanker_palace",
        "name": "Kanker Palace & Royal Estate",
        "lat": 20.2719,
        "lon": 81.4925,
        "cat": "heritage",
        "elev": "388m North Bastar",
        "season": "OCT_MAR",
        "desc": "Colonial heritage palace of the Kanker royal lineage surrounded by forested tribal countryside, ancient rock art shelters, and Dudh river valleys.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Kanker Palace & Royal Estate — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Kanker Palace & Royal Estate — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Kanker Palace & Royal Estate — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "malanjhkudum_falls",
        "name": "Malanjhkudum Waterfalls (Dudh River)",
        "lat": 20.2185,
        "lon": 81.3658,
        "cat": "nature",
        "elev": "410m Dudh Valley",
        "season": "JUL_JAN",
        "desc": "Picturesque tiered waterfall of the Dudh river tumbling through scenic granite boulders and sal woodlands south of Kanker.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Malanjhkudum Waterfalls (Dudh River) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Malanjhkudum Waterfalls (Dudh River) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Malanjhkudum Waterfalls (Dudh River) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "gangrel_dam",
        "name": "Gangrel Dam & Watersports (Dhamtari)",
        "lat": 20.6277,
        "lon": 81.5647,
        "cat": "nature",
        "elev": "348m Mahanadi Basin",
        "season": "OCT_MAR",
        "desc": "Chhattisgarh's largest reservoir on the Mahanadi river, offering angling, island cruises, water sports, and tranquil shoreline sunsets.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Gangrel Dam & Watersports (Dhamtari) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Gangrel Dam & Watersports (Dhamtari) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Gangrel Dam & Watersports (Dhamtari) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "dongargarh",
        "name": "Dongargarh (Maa Bamleshwari Crag)",
        "lat": 21.1895,
        "lon": 80.7583,
        "cat": "hill",
        "elev": "490m Rajnandgaon Crags",
        "season": "OCT_MAR",
        "desc": "Celebrated pilgrimage citadel situated atop a 1,600-foot granite crag with ropeway access, overlooking green valleys in Rajnandgaon.",
        "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80",
                "caption": "Dongargarh (Maa Bamleshwari Crag) — Misty Western Ghats Ridge"
            },
            {
                "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
                "caption": "Dongargarh (Maa Bamleshwari Crag) — Shola Grassland Plateau"
            },
            {
                "url": "https://images.unsplash.com/photo-1616489953149-8097b830d941?w=800&auto=format&fit=crop&q=80",
                "caption": "Dongargarh (Maa Bamleshwari Crag) — High Elevation Mountain Vista"
            }
        ]
    },
    {
        "id": "rajim_sangam",
        "name": "Rajim (Triveni Sangam & Rajiv Lochan)",
        "lat": 20.9634,
        "lon": 81.8797,
        "cat": "heritage",
        "elev": "280m Mahanadi Confluence",
        "season": "NOV_FEB",
        "desc": "The 'Prayag of Chhattisgarh' at the holy confluence of Mahanadi, Pairi, and Sondur rivers, famous for its 8th-century Vishnu shrine and Kumbh festival.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Rajim (Triveni Sangam & Rajiv Lochan) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Rajim (Triveni Sangam & Rajiv Lochan) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Rajim (Triveni Sangam & Rajiv Lochan) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "ghatarani_jatmai_falls",
        "name": "Ghatarani & Jatmai Waterfalls",
        "lat": 20.9324,
        "lon": 82.1648,
        "cat": "nature",
        "elev": "420m Gariaband Highlands",
        "season": "JUL_DEC",
        "desc": "Twin sacred forest waterfalls in Gariaband tumbling over rock shrines amidst dense sal forests and natural stone bridges.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Ghatarani & Jatmai Waterfalls — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Ghatarani & Jatmai Waterfalls — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Ghatarani & Jatmai Waterfalls — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "raipur_nandanvan",
        "name": "Raipur (Nandanvan Biosphere & Muktangan)",
        "lat": 21.161,
        "lon": 81.7876,
        "cat": "nature",
        "elev": "298m Naya Raipur",
        "season": "OCT_MAR",
        "desc": "Capital gateway showcasing Asia's largest man-made safari park (Nandanvan) with tiger and herbivore zones, alongside the open-air Bastar tribal cultural museum.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Raipur (Nandanvan Biosphere & Muktangan) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Raipur (Nandanvan Biosphere & Muktangan) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Raipur (Nandanvan Biosphere & Muktangan) — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "madku_dweep",
        "name": "Madku Dweep (Mahanadi River Island & Temples)",
        "lat": 21.6441,
        "lon": 81.9056,
        "cat": "heritage",
        "elev": "260m Shivnath Confluence",
        "season": "OCT_MAR",
        "desc": "Enchanting 50-acre emerald river island on the Shivnath-Mahanadi confluence featuring 19 excavated 11th-century Kalachuri stone temples and peaceful riverside ghats.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Madku Dweep (Mahanadi River Island & Temples) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Madku Dweep (Mahanadi River Island & Temples) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Madku Dweep (Mahanadi River Island & Temples) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "sirpur_heritage",
        "name": "Sirpur (Laxman Temple & Buddhist Viharas)",
        "lat": 21.3411,
        "lon": 82.1793,
        "cat": "heritage",
        "elev": "270m Mahanadi Bank",
        "season": "OCT_MAR",
        "desc": "Ancient 5th–8th century capital of South Kosala visited by Hiuen Tsang, featuring the ornate red-brick Laxman Temple, Surang Tila, and excavated Buddhist Mahaviharas.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Sirpur (Laxman Temple & Buddhist Viharas) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Sirpur (Laxman Temple & Buddhist Viharas) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Sirpur (Laxman Temple & Buddhist Viharas) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "bhoramdeo_temple",
        "name": "Bhoramdeo Temple (Maikal Shivalaya)",
        "lat": 22.1197,
        "lon": 81.1578,
        "cat": "heritage",
        "elev": "420m Maikal Hills",
        "season": "OCT_MAR",
        "desc": "The 'Khajuraho of Chhattisgarh', an exquisite 11th-century Nagara-style stone temple dedicated to Shiva at the foot of the misty Maikal Hills.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
        "images": [
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Durga_Temple%2C_Aihole.jpg/800px-Durga_Temple%2C_Aihole.jpg",
                "caption": "Bhoramdeo Temple (Maikal Shivalaya) — Ancient Stone Temple Architecture"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chitradurga_Fort_Overview.jpg/800px-Chitradurga_Fort_Overview.jpg",
                "caption": "Bhoramdeo Temple (Maikal Shivalaya) — Historic Fort Ramparts & Citadels"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
                "caption": "Bhoramdeo Temple (Maikal Shivalaya) — Classical Dravidian Granite Gopuram"
            }
        ]
    },
    {
        "id": "barnawapara_wildlife",
        "name": "Barnawapara Wildlife Sanctuary",
        "lat": 21.3965,
        "lon": 82.4172,
        "cat": "nature",
        "elev": "320m Balamdehi Basin",
        "season": "NOV_JUN",
        "desc": "Lush teak and sal forest sanctuary traversed by the Balamdehi river, harboring large herds of Indian bison (gaur), leopards, and flying squirrels.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Barnawapara Wildlife Sanctuary — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Barnawapara Wildlife Sanctuary — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Barnawapara Wildlife Sanctuary — Protected Biosphere Sanctuary"
            }
        ]
    },
    {
        "id": "achanakmar_tiger_reserve",
        "name": "Achanakmar Tiger Reserve (Biosphere)",
        "lat": 22.4833,
        "lon": 81.75,
        "cat": "nature",
        "elev": "600m Maikal Ridge",
        "season": "NOV_JUN",
        "desc": "Pristine tiger and leopard sanctuary within the UNESCO Bilaspur-Amarkantak Biosphere Reserve, dense with sal, bamboo, and wild elephants.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
                "caption": "Achanakmar Tiger Reserve (Biosphere) — Deciduous Forest Canopy & Wildlife Corridor"
            },
            {
                "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jog_Falls_during_monsoon.jpg/800px-Jog_Falls_during_monsoon.jpg",
                "caption": "Achanakmar Tiger Reserve (Biosphere) — River Gorge & Mountain Cascade"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
                "caption": "Achanakmar Tiger Reserve (Biosphere) — Protected Biosphere Sanctuary"
            }
        ]
    }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = MASTER_POIS;
}
