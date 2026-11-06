/**
 * Master National POI Registry — Absolute Geographic Outpost Catalog
 * 
 * Contains 188 curated regional weekend escapes, hill stations, heritage citadels,
 * and coastal sanctuaries across South and Central India.
 * 
 * Stores pure geographic coordinates (lat, lon), elevation, verified imagery, and travel essence.
 * Hub distances, bearings, and compass directions are dynamically resolved at runtime.
 */
(function (root, factory) {
    const data = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = data;
    }
    if (typeof root !== 'undefined') {
        root.MASTER_POIS = data;
        if (typeof root.hubService !== 'undefined') {
            root.hubService.setMasterPois(data);
        }
    }
    if (typeof window !== 'undefined') {
        window.MASTER_POIS = data;
        if (typeof window.hubService !== 'undefined') {
            window.hubService.setMasterPois(data);
        }
    }
})(typeof self !== 'undefined' ? self : this, function () {
    return [
  {
    "id": "agumbe",
    "name": "Agumbe (Rainforest Capital)",
    "lat": 13.5074,
    "lon": 75.0939,
    "cat": "nature",
    "elev": "643m Rain Belt",
    "season": "YEAR_ROUND",
    "desc": "Cherrapunji of the South: dense wet evergreen jungle, King Cobra research station & Barkana Falls.",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Agumbe (Rainforest Capital) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Agumbe (Rainforest Capital) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Agumbe (Rainforest Capital) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Sringeri (Sharada Peetham) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Sringeri (Sharada Peetham) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Sringeri (Sharada Peetham) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Ahobilam (Nava Narasimha) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Ahobilam (Nava Narasimha) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Ahobilam (Nava Narasimha) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Aihole (Cradle of Architecture) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Aihole (Cradle of Architecture) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Aihole (Cradle of Architecture) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Ajanta & Ellora Caves (UNESCO) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Ajanta & Ellora Caves (UNESCO) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Ajanta & Ellora Caves (UNESCO) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Alampur (Navabrahma Temples) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Alampur (Navabrahma Temples) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Alampur (Navabrahma Temples) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kettuvallam Houseboats on Vembanad Lake"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Tranquil Palm-Fringed Backwater Canals"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Alappuzha Beach & Arabian Sea Coast"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Amaravati (Historic Capital & Stupa) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Amaravati (Historic Capital & Stupa) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Amaravati (Historic Capital & Stupa) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Ananthagiri Hills & Vikarabad — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Ananthagiri Hills & Vikarabad — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Ananthagiri Hills & Vikarabad — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Volcanic Granite Cave Crevasses"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Perennial Spring Caverns & Rocky Trail"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolar Night Trek Ridge & Starry Vista"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Araku Valley & Borra Caves — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Araku Valley & Borra Caves — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Araku Valley & Borra Caves — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Auroville (City of Dawn) — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Auroville (City of Dawn) — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Auroville (City of Dawn) — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Avalabetta Cantilever Rock Ledge & Scenic Cliff"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Panoramic Summit Vista Over Chikkaballapura Plains"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Granite Escarpment & Northern Ridge Trail"
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
    "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
        "caption": "Badami Cave Temples & Red Sandstone Cliffs"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "18-Armed Nataraja Rock-Cut Relief in Cave 1"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhutanatha Temple on Agastya Lake Shore"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Bandipur National Park — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Bandipur National Park — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Bandipur National Park — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Banganapalle (Nawab Palace) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Banganapalle (Nawab Palace) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Banganapalle (Nawab Palace) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Basar (Gnana Saraswati) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Basar (Gnana Saraswati) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Basar (Gnana Saraswati) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Basavakalyan Fort — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Basavakalyan Fort — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Basavakalyan Fort — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Bekal Fort — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Bekal Fort — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Bekal Fort — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
        "caption": "Underground Limestone Stalactite Hall"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Pataalaganga Subterranean Caverns"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Rayalaseema Karst Rock Formations"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Belur & Halebidu — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Belur & Halebidu — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Belur & Halebidu — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhadrachalam (Godavari Sanctum) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhadrachalam (Godavari Sanctum) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhadrachalam (Godavari Sanctum) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Bheemeshwari (Cauvery Wildlife) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Bheemeshwari (Cauvery Wildlife) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Bheemeshwari (Cauvery Wildlife) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhongir Fort (Bhuvanagiri) — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhongir Fort (Bhuvanagiri) — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhongir Fort (Bhuvanagiri) — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Bidar Fort & Mahmud Gawan — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Bidar Fort & Mahmud Gawan — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Bidar Fort & Mahmud Gawan — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Bijapur (Vijayapura Gol Gumbaz) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Bijapur (Vijayapura Gol Gumbaz) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Bijapur (Vijayapura Gol Gumbaz) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Biligiriranga Hills (BR Hills) — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Biligiriranga Hills (BR Hills) — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Biligiriranga Hills (BR Hills) — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Bogatha Falls (Telangana Niagara) — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Bogatha Falls (Telangana Niagara) — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Bogatha Falls (Telangana Niagara) — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Chandragiri Fort & Raja Mahal — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Chandragiri Fort & Raja Mahal — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Chandragiri Fort & Raja Mahal — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Channapatna — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Channapatna — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Channapatna — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Chettinad (Karaikudi Mansions) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Chettinad (Karaikudi Mansions) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Chettinad (Karaikudi Mansions) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Chidambaram & Pichavaram Mangrove — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Chidambaram & Pichavaram Mangrove — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Chidambaram & Pichavaram Mangrove — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Mullayanagiri Karnataka's Highest Summit"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Baba Budangiri Misty Shola Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Hebbe & Manikyadhara Cascades"
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
    "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Seven-Walled Stone Fort Citadel"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Granite Passages & Obavvana Kindi"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Windmill Hills & Valley Bastions"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Coonoor — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Coonoor — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Coonoor — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Lush Coffee Plantations & Misty Shola Valleys"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Abbey Falls Cascading Through Rainforest"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Coringa Wildlife Sanctuary & Kakinada — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Coringa Wildlife Sanctuary & Kakinada — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Coringa Wildlife Sanctuary & Kakinada — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Dandeli & Anshi Tiger Reserve — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Dandeli & Anshi Tiger Reserve — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Dandeli & Anshi Tiger Reserve — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Daulatabad Fort (Devagiri) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Daulatabad Fort (Devagiri) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Daulatabad Fort (Devagiri) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Devarakonda Fort — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Devarakonda Fort — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Devarakonda Fort — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Devarayanadurga — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Devarayanadurga — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Devarayanadurga — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Dharmapuri (Narasimha) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Dharmapuri (Narasimha) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Dharmapuri (Narasimha) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
        "caption": "Pennar River Gorge & Grand Canyon of India"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Red Sandstone Fort Ramparts & Watchtowers"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Canyon Precipice & Panoramic Overlook"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Gangaikonda Cholapuram — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Gangaikonda Cholapuram — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Gangaikonda Cholapuram — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Ghanpur Temples (Kota Gullu) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Ghanpur Temples (Kota Gullu) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Ghanpur Temples (Kota Gullu) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Gingee Fort (Senji) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Gingee Fort (Senji) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Gingee Fort (Senji) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Om Beach Twin Crescent Rocky Headlands"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Kudle Beach Sunset & Arabian Sea Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Coastal Coconut Groves & Western Ghats Foothills"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Gooty Fort — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Gooty Fort — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Gooty Fort — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Gulbarga (Kalaburagi) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Gulbarga (Kalaburagi) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Gulbarga (Kalaburagi) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Vijaya Vittala Stone Chariot & Temple Complex"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Virupaksha Temple Gopuram & River Ghats"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Hemakuta Hill Monolithic Granite Boulders"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Hogenakkal Falls — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Hogenakkal Falls — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Hogenakkal Falls — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Horsley Hills — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Horsley Hills — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Horsley Hills — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Javadhu Hills — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Javadhu Hills — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Javadhu Hills — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Raja, Roarer, Rocket & Rani Cascades"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Sharavathi Gorge Monsoon Mist Plume"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Lush Western Ghats Rainforest Canopy"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kabini (Nagarhole Tiger Reserve) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kabini (Nagarhole Tiger Reserve) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kabini (Nagarhole Tiger Reserve) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kadem Dam & Reservoir — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kadem Dam & Reservoir — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kadem Dam & Reservoir — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaigal Falls (Dumukurallu) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaigal Falls (Dumukurallu) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaigal Falls (Dumukurallu) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kailasakona Waterfalls — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kailasakona Waterfalls — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kailasakona Waterfalls — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Kakkabe & Tadiandamol — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kakkabe & Tadiandamol — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kakkabe & Tadiandamol — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaleshwaram (Triveni Sangam) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaleshwaram (Triveni Sangam) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaleshwaram (Triveni Sangam) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanchipuram (City of Thousand Temples) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanchipuram (City of Thousand Temples) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanchipuram (City of Thousand Temples) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Kannur (Theyyam Coast) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kannur (Theyyam Coast) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Kannur (Theyyam Coast) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanyakumari (Cape Comorin) — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanyakumari (Cape Comorin) — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanyakumari (Cape Comorin) — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Karwar (Devbagh) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Karwar (Devbagh) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Karwar (Devbagh) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaundinya Wildlife Sanctuary — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaundinya Wildlife Sanctuary — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kaundinya Wildlife Sanctuary — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kawal Tiger Reserve — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kawal Tiger Reserve — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kawal Tiger Reserve — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Keesaragutta — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Keesaragutta — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Keesaragutta — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kemmangundi (KR Hills) — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kemmangundi (KR Hills) — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Kemmangundi (KR Hills) — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Khammam Fort & Palair Lake — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Khammam Fort & Palair Lake — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Khammam Fort & Palair Lake — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Kochi (Fort Kochi) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kochi (Fort Kochi) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Kochi (Fort Kochi) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pillar Rocks Vertical Granite Escarpments"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Dense Pine Forests & Shola Woodlands"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Star-Shaped Kodai Lake & Valley Lookout"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Koilkonda Fort & Koilsagar — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Koilkonda Fort & Koilsagar — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Koilkonda Fort & Koilsagar — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolhapur — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolhapur — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolhapur — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolli Hills (Kolli Malai) — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolli Hills (Kolli Malai) — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Kolli Hills (Kolli Malai) — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Kotagiri — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kotagiri — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kotagiri — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Kozhikode (Calicut) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kozhikode (Calicut) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Kozhikode (Calicut) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Kudremukh Peak & Reserve — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kudremukh Peak & Reserve — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kudremukh Peak & Reserve — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Kumbakonam (Temple City) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kumbakonam (Temple City) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kumbakonam (Temple City) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kuntala Falls — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kuntala Falls — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kuntala Falls — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Kurnool & Orvakal Rock Garden — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kurnool & Orvakal Rock Garden — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kurnool & Orvakal Rock Garden — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kuruva Island (Kuruvadweep) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kuruva Island (Kuruvadweep) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kuruva Island (Kuruvadweep) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Kushalnagar & Bylakuppe — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Kushalnagar & Bylakuppe — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kushalnagar & Bylakuppe — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Laknavaram Lake — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Laknavaram Lake — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Laknavaram Lake — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Lambasingi (Kashmir of Andhra) — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Lambasingi (Kashmir of Andhra) — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Lambasingi (Kashmir of Andhra) — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Lepakshi — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Lepakshi — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Lepakshi — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Lonar Meteorite Crater — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Lonar Meteorite Crater — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Lonar Meteorite Crater — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Meenakshi Amman Temple Soaring Dravidian Gopurams"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Thousand Pillar Colonnade Hall & Stone Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Ancient Dravidian Granite Architecture"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Shore Temple on the Bay of Bengal"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Pancha Rathas Monolithic Granite Shrines"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Arjuna's Penance Bas-Relief Carvings"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Makalidurga — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Makalidurga — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Makalidurga — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Mangalore (Mangaluru) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Mangalore (Mangaluru) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Mangalore (Mangaluru) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Manginapudi Beach (Machilipatnam) — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Manginapudi Beach (Machilipatnam) — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Manginapudi Beach (Machilipatnam) — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Mantralayam — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Mantralayam — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Mantralayam — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Maravanthe Beach — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Maravanthe Beach — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Maravanthe Beach — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Maredumilli & Rampachodavaram — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Maredumilli & Rampachodavaram — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Maredumilli & Rampachodavaram — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Medak Fort & Cathedral — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Medak Fort & Cathedral — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Medak Fort & Cathedral — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Mekedatu & Sangama — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Mekedatu & Sangama — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Mekedatu & Sangama — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Melukote — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Melukote — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Melukote — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Mettur Dam & Stanley Reservoir — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Mettur Dam & Stanley Reservoir — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Mettur Dam & Stanley Reservoir — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Mudumalai Tiger Reserve — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Mudumalai Tiger Reserve — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Mudumalai Tiger Reserve — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Mullayanagiri Peak — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Mullayanagiri Peak — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Mullayanagiri Peak — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Rolling Emerald Tea Carpet Slopes"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Anamudi South India's Highest Peak"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Attukal & Cheeyappara Mountain Waterfalls"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Murudeshwar — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Murudeshwar — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Murudeshwar — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Muttukadu & Siruseri Backwaters — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Muttukadu & Siruseri Backwaters — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Muttukadu & Siruseri Backwaters — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Mypadu Beach (Nellore) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Mypadu Beach (Nellore) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Mypadu Beach (Nellore) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Mysore (Amba Vilas Palace) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Mysore (Amba Vilas Palace) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Mysore (Amba Vilas Palace) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagalapuram (Siddulaiah Kona) — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagalapuram (Siddulaiah Kona) — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagalapuram (Siddulaiah Kona) — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagapattinam (Soundararaja) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagapattinam (Soundararaja) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagapattinam (Soundararaja) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagari Nose (Nagari Hills) — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagari Nose (Nagari Hills) — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagari Nose (Nagari Hills) — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagarjuna Sagar & Island Museum — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagarjuna Sagar & Island Museum — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagarjuna Sagar & Island Museum — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagpur (Deekshabhoomi & Gateway) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagpur (Deekshabhoomi & Gateway) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Nagpur (Deekshabhoomi & Gateway) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Nanded (Hazur Sahib) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Nanded (Hazur Sahib) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Nanded (Hazur Sahib) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pre-Dawn Cloud Inversion Sunrise Over Valley"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Tipu's Drop Cliff Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Narsapur Forest & Lake — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Narsapur Forest & Lake — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Narsapur Forest & Lake — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Nilgiri Mountain Slopes & Rolling Tea Gardens"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Doddabetta Peak & High Elevation Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Eucalyptus Woodlands & Pine Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pakhal Lake & Wildlife Sanctuary — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Pakhal Lake & Wildlife Sanctuary — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Pakhal Lake & Wildlife Sanctuary — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Papikondalu (Papi Hills Gorge) — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Papikondalu (Papi Hills Gorge) — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Papikondalu (Papi Hills Gorge) — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Pattadakal (UNESCO) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Pattadakal (UNESCO) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Pattadakal (UNESCO) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Pench National Park — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Pench National Park — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pench National Park — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Pillalamarri (Mahabubnagar Banyan) — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Pillalamarri (Mahabubnagar Banyan) — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pillalamarri (Mahabubnagar Banyan) — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Pocharam Wildlife Sanctuary — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Pocharam Wildlife Sanctuary — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pocharam Wildlife Sanctuary — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pochera Falls — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Pochera Falls — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Pochera Falls — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Pondicherry (Puducherry) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Pondicherry (Puducherry) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Pondicherry (Puducherry) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Pulicat Lake & Bird Sanctuary — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Pulicat Lake & Bird Sanctuary — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Pulicat Lake & Bird Sanctuary — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Rachakonda Fort — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Rachakonda Fort — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Rachakonda Fort — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Ramadevarabetta Rock Crags & Vulture Sanctuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Monolithic Granite Boulders of Sholay Fame"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Rock-Climbing Faces & Panoramic Ridge"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Ramappa Temple (UNESCO) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Ramappa Temple (UNESCO) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Ramappa Temple (UNESCO) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Rameshwaram & Dhanushkodi — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Rameshwaram & Dhanushkodi — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Rameshwaram & Dhanushkodi — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Ranganathittu Bird Sanctuary — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Ranganathittu Bird Sanctuary — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Ranganathittu Bird Sanctuary — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Sadras Dutch Fort — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Sadras Dutch Fort — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Sadras Dutch Fort — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Sakleshpur — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Sakleshpur — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Sakleshpur — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Asia's Largest Monolithic Granite Mass"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Monolith Ridge Trail Overlooking Arkavathi Forest"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Dawn Vista from Summit Fort Ruins"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Shamirpet Lake & Deer Park — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Shamirpet Lake & Deer Park — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Shamirpet Lake & Deer Park — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Shimoga & Mattur — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Shimoga & Mattur — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Shimoga & Mattur — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Shivagange — Rugged Granite Outpost Boulders"
      },
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Shivagange — Rock Citadel Ascent & Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Shivagange — Sunrise Vista Over Plateau Lake"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Shravanabelagola — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Shravanabelagola — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Shravanabelagola — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Singur Dam & Reservoir — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Singur Dam & Reservoir — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Singur Dam & Reservoir — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Sirumalai Hills — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Sirumalai Hills — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Sirumalai Hills — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Somnathpur (Chennakeshava) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Somnathpur (Chennakeshava) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Somnathpur (Chennakeshava) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "South Goa (Palolem & Agonda) — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "South Goa (Palolem & Agonda) — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "South Goa (Palolem & Agonda) — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Srikalahasti — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Srikalahasti — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Srikalahasti — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Srisailam (Mallikarjuna Jyotirlinga) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Srisailam (Mallikarjuna Jyotirlinga) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Srisailam (Mallikarjuna Jyotirlinga) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Suryalanka Beach (Bapatla) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Suryalanka Beach (Bapatla) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Suryalanka Beach (Bapatla) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Tada Falls (Ubbalamadugu) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Tada Falls (Ubbalamadugu) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Tada Falls (Ubbalamadugu) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Tadoba-Andhari Tiger Reserve — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Tadoba-Andhari Tiger Reserve — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Tadoba-Andhari Tiger Reserve — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Talakadu — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Talakadu — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Talakadu — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Brihadisvara Great Chola Temple 216ft Vimana"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Classical Chola Soapstone Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Thekkady (Periyar Tiger Reserve) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Thekkady (Periyar Tiger Reserve) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Thekkady (Periyar Tiger Reserve) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Thirunallar (Karaikal) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Thirunallar (Karaikal) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Thirunallar (Karaikal) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Thiruvananthapuram (Trivandrum & Kovalam) — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Thiruvananthapuram (Trivandrum & Kovalam) — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Thiruvananthapuram (Trivandrum & Kovalam) — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Tirupati & Tirumala — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Tirupati & Tirumala — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Tirupati & Tirumala — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=900&auto=format&fit=crop&q=80",
        "caption": "Tiruvallur & Poondi Reservoir — Monolithic Granite Escarpment"
      },
      {
        "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=900&auto=format&fit=crop&q=80",
        "caption": "Tiruvallur & Poondi Reservoir — Hilltop Trek Trail & Rock Formations"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Tiruvallur & Poondi Reservoir — Deccan Plateau Scenic Overlook"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Tiruvannamalai (Arunachala) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Tiruvannamalai (Arunachala) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Tiruvannamalai (Arunachala) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Topslip (Anaimalai Tiger Reserve) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Topslip (Anaimalai Tiger Reserve) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Topslip (Anaimalai Tiger Reserve) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Tranquebar (Tharangambadi) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Tranquebar (Tharangambadi) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Tranquebar (Tharangambadi) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Trichy (Rockfort & Srirangam) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Trichy (Rockfort & Srirangam) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Trichy (Rockfort & Srirangam) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Udupi & Malpe Beach — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Udupi & Malpe Beach — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Udupi & Malpe Beach — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Uppada Beach & Handloom Hub — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Uppada Beach & Handloom Hub — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Uppada Beach & Handloom Hub — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Vagamon — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Vagamon — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Vagamon — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Valparai — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Valparai — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Valparai — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Vedanthangal Bird Sanctuary — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Vedanthangal Bird Sanctuary — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Vedanthangal Bird Sanctuary — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Velankanni & Nagore — Rocky Headland & Ocean Horizon"
      },
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Velankanni & Nagore — Crescent Sandy Beach & Surf"
      },
      {
        "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&auto=format&fit=crop&q=80",
        "caption": "Velankanni & Nagore — Coastal Palm Groves & Lagoon"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Vellore Fort & Jalakanteshwara — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Vellore Fort & Jalakanteshwara — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Vellore Fort & Jalakanteshwara — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Vijayawada (Kanaka Durga) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Vijayawada (Kanaka Durga) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Vijayawada (Kanaka Durga) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
        "caption": "Visakhapatnam (Vizag & Rushikonda) — Pristine Golden Shoreline"
      },
      {
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&auto=format&fit=crop&q=80",
        "caption": "Visakhapatnam (Vizag & Rushikonda) — Seaside Cliffs & Coastal Estuary"
      },
      {
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
        "caption": "Visakhapatnam (Vizag & Rushikonda) — Tidal Inlets & Coconut Palms"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Warangal (Thousand Pillar) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Warangal (Thousand Pillar) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Warangal (Thousand Pillar) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Rolling Tea Estates of Wayanad"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Heart-Shaped Lake on Chembra Peak"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Edakkal Caves & Ancient Petroglyphs"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Yaganti (Uma Maheshwara) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Yaganti (Uma Maheshwara) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Yaganti (Uma Maheshwara) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Yelagiri Hills — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Yelagiri Hills — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Yelagiri Hills — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Yercaud (Shevaroy Hills) — Misty Western Ghats Ridge"
      },
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Yercaud (Shevaroy Hills) — High Elevation Mountain Vista"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Yercaud (Shevaroy Hills) — Shola Grassland & Tea Valleys"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Dantewada (Maa Danteshwari Temple) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Dantewada (Maa Danteshwari Temple) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Dantewada (Maa Danteshwari Temple) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Barsur (Twin Ganesha & Battisa Temple) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Barsur (Twin Ganesha & Battisa Temple) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Barsur (Twin Ganesha & Battisa Temple) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Horseshoe Waterfall on Indravati River (Niagara of India)"
      },
      {
        "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&auto=format&fit=crop&q=80",
        "caption": "Bastar Plateau Monsoon Flow & Canyon Gorge"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Dandakaranya Forest & Wildlife Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Tirathgarh Falls (Kanger Valley) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Tirathgarh Falls (Kanger Valley) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Tirathgarh Falls (Kanger Valley) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanger Valley & Kutumsar Caves — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanger Valley & Kutumsar Caves — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanger Valley & Kutumsar Caves — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Jagdalpur (Bastar Royal Citadel) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Jagdalpur (Bastar Royal Citadel) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Jagdalpur (Bastar Royal Citadel) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Keshkal Ghat & Tatamari Hill — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Keshkal Ghat & Tatamari Hill — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Keshkal Ghat & Tatamari Hill — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanker Palace & Royal Estate — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanker Palace & Royal Estate — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Kanker Palace & Royal Estate — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Malanjhkudum Waterfalls (Dudh River) — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Malanjhkudum Waterfalls (Dudh River) — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Malanjhkudum Waterfalls (Dudh River) — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Gangrel Dam & Watersports (Dhamtari) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Gangrel Dam & Watersports (Dhamtari) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Gangrel Dam & Watersports (Dhamtari) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=80",
        "caption": "Dongargarh (Maa Bamleshwari Crag) — Rolling Hill Station Panorama"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Dongargarh (Maa Bamleshwari Crag) — Gushing Mountain Stream"
      },
      {
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&auto=format&fit=crop&q=80",
        "caption": "Dongargarh (Maa Bamleshwari Crag) — Emerald Green Mountain Slopes"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Rajim (Triveni Sangam & Rajiv Lochan) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Rajim (Triveni Sangam & Rajiv Lochan) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Rajim (Triveni Sangam & Rajiv Lochan) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Ghatarani & Jatmai Waterfalls — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Ghatarani & Jatmai Waterfalls — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Ghatarani & Jatmai Waterfalls — Protected Wilderness Reserve"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Raipur (Nandanvan Biosphere & Muktangan) — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Raipur (Nandanvan Biosphere & Muktangan) — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Raipur (Nandanvan Biosphere & Muktangan) — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Madku Dweep (Mahanadi River Island & Temples) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Madku Dweep (Mahanadi River Island & Temples) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Madku Dweep (Mahanadi River Island & Temples) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&auto=format&fit=crop&q=80",
        "caption": "Sirpur (Laxman Temple & Buddhist Viharas) — Classical Granite Temple Gopuram"
      },
      {
        "url": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=900&auto=format&fit=crop&q=80",
        "caption": "Sirpur (Laxman Temple & Buddhist Viharas) — Ancient Stone Carvings & Sculptures"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Sirpur (Laxman Temple & Buddhist Viharas) — Historic Citadel Fortifications"
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
    "image": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhoramdeo Temple (Maikal Shivalaya) — Historic Monolithic Stone Architecture"
      },
      {
        "url": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhoramdeo Temple (Maikal Shivalaya) — Carved Colonnade Pillars & Mandapam"
      },
      {
        "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&auto=format&fit=crop&q=80",
        "caption": "Bhoramdeo Temple (Maikal Shivalaya) — Fort Ramparts & Heritage Gateway"
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
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Barnawapara Wildlife Sanctuary — Protected Deciduous Forest Canopy"
      },
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Barnawapara Wildlife Sanctuary — River Gorge & Mountain Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Barnawapara Wildlife Sanctuary — Biosphere Wildlife Sanctuary"
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
    "image": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=900&auto=format&fit=crop&q=80",
        "caption": "Achanakmar Tiger Reserve (Biosphere) — Pristine River Cascade"
      },
      {
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&auto=format&fit=crop&q=80",
        "caption": "Achanakmar Tiger Reserve (Biosphere) — Dense Tropical Flora & Forest Trails"
      },
      {
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&auto=format&fit=crop&q=80",
        "caption": "Achanakmar Tiger Reserve (Biosphere) — Protected Wilderness Reserve"
      }
    ]
  }
];
});
