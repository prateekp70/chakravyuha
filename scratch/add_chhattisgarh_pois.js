const fs = require('fs');
const path = require('path');

const chhattisgarhPois = [
  {
    "id": "dantewada",
    "name": "Dantewada (Maa Danteshwari Temple)",
    "lat": 18.8943,
    "lon": 81.3497,
    "cat": "heritage",
    "elev": "385m Bastar Basin",
    "season": "OCT_MAR",
    "desc": "Ancient 14th-century Shakti Peetha at the sacred confluence of Shankini and Dankini rivers, constructed by Kakatiya rulers with exquisite Bastar woodcraft."
  },
  {
    "id": "barsur",
    "name": "Barsur (Twin Ganesha & Battisa Temple)",
    "lat": 19.1026,
    "lon": 81.3789,
    "cat": "heritage",
    "elev": "390m Indravati Basin",
    "season": "OCT_MAR",
    "desc": "Historical 11th-century capital of the Chhindaka Nagavanshis, famed for the colossal 8-foot monolithic Twin Ganesha and the 32-pillared Battisa Shiva Temple."
  },
  {
    "id": "chitrakote_falls",
    "name": "Chitrakote Falls (Niagara of India)",
    "lat": 19.2064,
    "lon": 81.7061,
    "cat": "nature",
    "elev": "560m Indravati Gorge",
    "season": "JUL_OCT",
    "desc": "India's widest waterfall, a majestic 300m horseshoe curtain on the Indravati river plunging 95 feet through lush sal-forested gorges."
  },
  {
    "id": "tirathgarh_falls",
    "name": "Tirathgarh Falls (Kanger Valley)",
    "lat": 18.9056,
    "lon": 81.8631,
    "cat": "nature",
    "elev": "570m Kanger Basin",
    "season": "AUG_DEC",
    "desc": "Spectacular 300-foot block-tiered waterfall cascading down white limestone terraces inside Kanger Valley National Park."
  },
  {
    "id": "kanger_valley_kutumsar",
    "name": "Kanger Valley & Kutumsar Caves",
    "lat": 18.8682,
    "lon": 81.9425,
    "cat": "nature",
    "elev": "580m Karst Plateau",
    "season": "NOV_MAY",
    "desc": "Subterranean limestone karst cavern 330m deep featuring dramatic stalactites, blind cave fish, and pristine sal biosphere sheltering Bastar hill mynas."
  },
  {
    "id": "jagdalpur",
    "name": "Jagdalpur (Bastar Royal Citadel)",
    "lat": 19.0744,
    "lon": 82.0080,
    "cat": "heritage",
    "elev": "555m Bastar Plateau",
    "season": "OCT_MAR",
    "desc": "Cultural capital of the Bastar tribal kingdom, renowned for Dokra bell-metal crafts, wood carving galleries, and the historic 75-day Bastar Dussehra festival."
  },
  {
    "id": "keshkal_ghat",
    "name": "Keshkal Ghat & Tatamari Hill",
    "lat": 20.0883,
    "lon": 81.5951,
    "cat": "hill",
    "elev": "640m Keshkal Pass",
    "season": "OCT_FEB",
    "desc": "Spectacular 12-hairpin mountain pass marking the geological climb onto the Bastar plateau, offering panoramic vistas of the Muria tribal hills and Tatamari pine groves."
  },
  {
    "id": "kanker_palace",
    "name": "Kanker Palace & Royal Estate",
    "lat": 20.2719,
    "lon": 81.4925,
    "cat": "heritage",
    "elev": "388m North Bastar",
    "season": "OCT_MAR",
    "desc": "Colonial heritage palace of the Kanker royal lineage surrounded by forested tribal countryside, ancient rock art shelters, and Dudh river valleys."
  },
  {
    "id": "malanjhkudum_falls",
    "name": "Malanjhkudum Waterfalls (Dudh River)",
    "lat": 20.2185,
    "lon": 81.3658,
    "cat": "nature",
    "elev": "410m Dudh Valley",
    "season": "JUL_JAN",
    "desc": "Picturesque tiered waterfall of the Dudh river tumbling through scenic granite boulders and sal woodlands south of Kanker."
  },
  {
    "id": "gangrel_dam",
    "name": "Gangrel Dam & Watersports (Dhamtari)",
    "lat": 20.6277,
    "lon": 81.5647,
    "cat": "nature",
    "elev": "348m Mahanadi Basin",
    "season": "OCT_MAR",
    "desc": "Chhattisgarh's largest reservoir on the Mahanadi river, offering angling, island cruises, water sports, and tranquil shoreline sunsets."
  },
  {
    "id": "dongargarh",
    "name": "Dongargarh (Maa Bamleshwari Crag)",
    "lat": 21.1895,
    "lon": 80.7583,
    "cat": "hill",
    "elev": "490m Rajnandgaon Crags",
    "season": "OCT_MAR",
    "desc": "Celebrated pilgrimage citadel situated atop a 1,600-foot granite crag with ropeway access, overlooking green valleys in Rajnandgaon."
  },
  {
    "id": "rajim_sangam",
    "name": "Rajim (Triveni Sangam & Rajiv Lochan)",
    "lat": 20.9634,
    "lon": 81.8797,
    "cat": "heritage",
    "elev": "280m Mahanadi Confluence",
    "season": "NOV_FEB",
    "desc": "The 'Prayag of Chhattisgarh' at the holy confluence of Mahanadi, Pairi, and Sondur rivers, famous for its 8th-century Vishnu shrine and Kumbh festival."
  },
  {
    "id": "ghatarani_jatmai_falls",
    "name": "Ghatarani & Jatmai Waterfalls",
    "lat": 20.9324,
    "lon": 82.1648,
    "cat": "nature",
    "elev": "420m Gariaband Highlands",
    "season": "JUL_DEC",
    "desc": "Twin sacred forest waterfalls in Gariaband tumbling over rock shrines amidst dense sal forests and natural stone bridges."
  },
  {
    "id": "raipur_nandanvan",
    "name": "Raipur (Nandanvan Biosphere & Muktangan)",
    "lat": 21.1610,
    "lon": 81.7876,
    "cat": "nature",
    "elev": "298m Naya Raipur",
    "season": "OCT_MAR",
    "desc": "Capital gateway showcasing Asia's largest man-made safari park (Nandanvan) with tiger and herbivore zones, alongside the open-air Bastar tribal cultural museum."
  },
  {
    "id": "madku_dweep",
    "name": "Madku Dweep (Mahanadi River Island & Temples)",
    "lat": 21.6441,
    "lon": 81.9056,
    "cat": "heritage",
    "elev": "260m Shivnath Confluence",
    "season": "OCT_MAR",
    "desc": "Enchanting 50-acre emerald river island on the Shivnath-Mahanadi confluence featuring 19 excavated 11th-century Kalachuri stone temples and peaceful riverside ghats."
  },
  {
    "id": "sirpur_heritage",
    "name": "Sirpur (Laxman Temple & Buddhist Viharas)",
    "lat": 21.3411,
    "lon": 82.1793,
    "cat": "heritage",
    "elev": "270m Mahanadi Bank",
    "season": "OCT_MAR",
    "desc": "Ancient 5th–8th century capital of South Kosala visited by Hiuen Tsang, featuring the ornate red-brick Laxman Temple, Surang Tila, and excavated Buddhist Mahaviharas."
  },
  {
    "id": "bhoramdeo_temple",
    "name": "Bhoramdeo Temple (Maikal Shivalaya)",
    "lat": 22.1197,
    "lon": 81.1578,
    "cat": "heritage",
    "elev": "420m Maikal Hills",
    "season": "OCT_MAR",
    "desc": "The 'Khajuraho of Chhattisgarh', an exquisite 11th-century Nagara-style stone temple dedicated to Shiva at the foot of the misty Maikal Hills."
  },
  {
    "id": "barnawapara_wildlife",
    "name": "Barnawapara Wildlife Sanctuary",
    "lat": 21.3965,
    "lon": 82.4172,
    "cat": "nature",
    "elev": "320m Balamdehi Basin",
    "season": "NOV_JUN",
    "desc": "Lush teak and sal forest sanctuary traversed by the Balamdehi river, harboring large herds of Indian bison (gaur), leopards, and flying squirrels."
  },
  {
    "id": "achanakmar_tiger_reserve",
    "name": "Achanakmar Tiger Reserve (Biosphere)",
    "lat": 22.4833,
    "lon": 81.7500,
    "cat": "nature",
    "elev": "600m Maikal Ridge",
    "season": "NOV_JUN",
    "desc": "Pristine tiger and leopard sanctuary within the UNESCO Bilaspur-Amarkantak Biosphere Reserve, dense with sal, bamboo, and wild elephants."
  }
];

const chhattisgarhRoadMatrix = {
  // HYD origin
  "HYD:dantewada": [440, "8h 30m", "NH 163 via Khammam, Bhadrachalam & Sukma"],
  "HYD:barsur": [465, "9h 00m", "NH 163 to Bhadrachalam -> Sukma -> Dantewada"],
  "HYD:chitrakote_falls": [520, "10h 15m", "NH 163 / NH 30 via Bhadrachalam & Jagdalpur"],
  "HYD:tirathgarh_falls": [495, "9h 45m", "NH 30 via Bhadrachalam -> Sukma -> Darbha"],
  "HYD:kanger_valley_kutumsar": [505, "10h 00m", "NH 30 via Bhadrachalam -> Sukma -> Kanger Ghati"],
  "HYD:jagdalpur": [515, "10h 15m", "NH 30 via Khammam, Bhadrachalam & Sukma"],
  "HYD:keshkal_ghat": [540, "10h 00m", "NH 30 via Bhadrachalam & Jagdalpur"],
  "HYD:kanker_palace": [565, "10h 30m", "NH 30 via Bhadrachalam & Jagdalpur"],
  "HYD:malanjhkudum_falls": [555, "10h 20m", "NH 30 via Bhadrachalam & Kanker"],
  "HYD:gangrel_dam": [605, "11h 00m", "NH 30 via Bhadrachalam, Jagdalpur & Dhamtari"],
  "HYD:dongargarh": [670, "11h 30m", "NH 44 to Adilabad -> Chandrapur -> Rajnandgaon"],
  "HYD:rajim_sangam": [660, "11h 45m", "NH 30 via Jagdalpur & Dhamtari -> SH 22"],
  "HYD:ghatarani_jatmai_falls": [680, "12h 00m", "NH 30 via Dhamtari & Rajim -> Gariaband"],
  "HYD:raipur_nandanvan": [690, "12h 15m", "NH 30 via Bhadrachalam & Jagdalpur or NH 44 / NH 53"],
  "HYD:madku_dweep": [725, "12h 45m", "NH 44 / NH 53 via Raipur & Simga"],
  "HYD:sirpur_heritage": [740, "13h 00m", "NH 30 to Raipur -> NH 53 to Arang & Sirpur"],
  "HYD:bhoramdeo_temple": [760, "13h 00m", "NH 44 to Adilabad -> Chandrapur -> Durg -> Kawardha"],
  "HYD:barnawapara_wildlife": [765, "13h 30m", "NH 30 to Raipur -> NH 53 to Mahasamund"],
  "HYD:achanakmar_tiger_reserve": [790, "13h 45m", "NH 44 / NH 53 via Raipur & Bilaspur -> Kota"],

  // MAA origin
  "MAA:dantewada": [680, "13h 30m", "NH 16 via Rajahmundry -> Bhadrachalam -> Sukma"],
  "MAA:barsur": [710, "14h 00m", "NH 16 via Rajahmundry -> Bhadrachalam -> Sukma"],
  "MAA:chitrakote_falls": [740, "14h 30m", "NH 16 to Rajahmundry -> Bhadrachalam -> Jagdalpur"],
  "MAA:tirathgarh_falls": [710, "13h 45m", "NH 16 via Rajahmundry -> Bhadrachalam -> Sukma"],
  "MAA:kanger_valley_kutumsar": [715, "14h 00m", "NH 16 via Rajahmundry -> Sukma -> Kanger Ghati"],
  "MAA:jagdalpur": [705, "13h 30m", "NH 16 to Rajahmundry -> NH 30 via Sukma"],
  "MAA:keshkal_ghat": [780, "15h 00m", "NH 16 to Rajahmundry -> NH 30 to Keshkal"],
  "MAA:kanker_palace": [830, "15h 30m", "NH 16 via Rajahmundry -> NH 30"],
  "MAA:malanjhkudum_falls": [820, "15h 15m", "NH 16 via Rajahmundry -> NH 30"],
  "MAA:gangrel_dam": [850, "15h 45m", "NH 16 via Rajahmundry -> NH 30"],
  "MAA:dongargarh": [1010, "18h 30m", "NH 16 to Vijayawada -> NH 44 to Chandrapur"],
  "MAA:rajim_sangam": [930, "17h 00m", "NH 16 via Rajahmundry -> NH 30"],
  "MAA:ghatarani_jatmai_falls": [950, "17h 15m", "NH 16 via Rajahmundry -> NH 30"],
  "MAA:raipur_nandanvan": [960, "17h 30m", "NH 16 via Rajahmundry -> NH 30"],
  "MAA:madku_dweep": [980, "17h 45m", "NH 16 via Rajahmundry -> Raipur"],
  "MAA:sirpur_heritage": [1000, "18h 00m", "NH 16 via Rajahmundry -> Raipur -> NH 53"],
  "MAA:bhoramdeo_temple": [1120, "20h 00m", "NH 16 via Vijayawada & Chandrapur"],
  "MAA:barnawapara_wildlife": [1020, "18h 30m", "NH 16 via Rajahmundry -> NH 53"],
  "MAA:achanakmar_tiger_reserve": [1060, "19h 15m", "NH 16 via Rajahmundry -> Bilaspur"],

  // BLR origin
  "BLR:dantewada": [825, "15h 30m", "NH 44 via Kurnool -> Khammam -> Bhadrachalam"],
  "BLR:barsur": [845, "16h 00m", "NH 44 via Kurnool -> Bhadrachalam -> Sukma"],
  "BLR:chitrakote_falls": [880, "16h 30m", "NH 44 via Kurnool -> Khammam -> Jagdalpur"],
  "BLR:tirathgarh_falls": [860, "16h 15m", "NH 44 to Kurnool -> Khammam -> Sukma"],
  "BLR:kanger_valley_kutumsar": [870, "16h 30m", "NH 44 via Kurnool -> Bhadrachalam -> Sukma"],
  "BLR:jagdalpur": [880, "16h 30m", "NH 44 via Kurnool -> Bhadrachalam -> Sukma"],
  "BLR:keshkal_ghat": [980, "18h 00m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:kanker_palace": [1030, "18h 45m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:malanjhkudum_falls": [1015, "18h 30m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:gangrel_dam": [1050, "19h 00m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:dongargarh": [1040, "18h 45m", "NH 44 North via Hyderabad & Adilabad"],
  "BLR:rajim_sangam": [1120, "19h 45m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:ghatarani_jatmai_falls": [1140, "20h 00m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:raipur_nandanvan": [1150, "20h 15m", "NH 44 via Hyderabad -> NH 30"],
  "BLR:madku_dweep": [1170, "20h 45m", "NH 44 via Hyderabad -> Raipur"],
  "BLR:sirpur_heritage": [1190, "21h 00m", "NH 44 via Hyderabad -> Raipur -> NH 53"],
  "BLR:bhoramdeo_temple": [1150, "20h 30m", "NH 44 North via Hyderabad & Nagpur"],
  "BLR:barnawapara_wildlife": [1200, "21h 15m", "NH 44 via Hyderabad -> Raipur"],
  "BLR:achanakmar_tiger_reserve": [1240, "21h 45m", "NH 44 via Hyderabad -> Bilaspur"]
};

// 1. Update data/master_pois.js
const masterPoisPath = path.join(__dirname, '../data/master_pois.js');
let masterPoisContent = fs.readFileSync(masterPoisPath, 'utf8');

// Load current POIs
const existingPois = require('../data/master_pois.js');
const existingIds = new Set(existingPois.map(p => p.id));

const toAdd = chhattisgarhPois.filter(p => !existingIds.has(p.id));
console.log(`Found ${toAdd.length} new Chhattisgarh destinations to add to master_pois.js`);

if (toAdd.length > 0) {
    const formattedToAdd = toAdd.map(p => '  ' + JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')).join(',\n');
    
    // Find last closing bracket
    const lastBracketIdx = masterPoisContent.lastIndexOf('];');
    if (lastBracketIdx === -1) throw new Error("Could not find closing ]; in master_pois.js");
    
    masterPoisContent = masterPoisContent.substring(0, lastBracketIdx).trimEnd() + ',\n' + formattedToAdd + '\n];\n});\n';
    fs.writeFileSync(masterPoisPath, masterPoisContent, 'utf8');
    console.log(`Successfully added ${toAdd.length} destinations to master_pois.js!`);
}

// 2. Update data/hub_service.js ROAD_MATRIX
const hubServicePath = path.join(__dirname, '../data/hub_service.js');
let hubServiceContent = fs.readFileSync(hubServicePath, 'utf8');

const matrixMatch = hubServiceContent.match(/this\.ROAD_MATRIX = (\{[\s\S]*?\});/);
if (!matrixMatch) throw new Error("Could not locate this.ROAD_MATRIX in hub_service.js");

const currentMatrix = JSON.parse(matrixMatch[1]);
let addedKeys = 0;
for (const [key, val] of Object.entries(chhattisgarhRoadMatrix)) {
    currentMatrix[key] = val;
    addedKeys++;
}

const updatedMatrixJson = JSON.stringify(currentMatrix);
hubServiceContent = hubServiceContent.replace(matrixMatch[0], `this.ROAD_MATRIX = ${updatedMatrixJson};`);
fs.writeFileSync(hubServicePath, hubServiceContent, 'utf8');
console.log(`Successfully merged ${addedKeys} road matrix entries into hub_service.js!`);

