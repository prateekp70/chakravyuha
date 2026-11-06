/**
 * HubService — Master GIS Road Trip Intelligence & Dynamic Hub Resolution Engine
 * 
 * Features:
 * - Master National POI catalog (168 unique South/Central India destinations)
 * - Metro origin anchors (BLR, HYD, MAA, and future additions)
 * - True Road Trip Distance Engine: computes realistic highway driving distances,
 *   drive times, and corridors instead of raw aerial / straight-line Euclidean distance
 * - Dynamic spatial proximity resolution: computes road distance, bearing,
 *   compass direction, and aerial distance on the fly for any active origin hub
 * - Threshold filtering and sorting
 */
class HubService {
    constructor() {
        this.hubs = new Map();
        this.masterPois = [];
        this.listeners = [];

        // Precompiled high-precision road metrics lookup matrix [roadDist, driveTime, corridor]
        this.ROAD_MATRIX = {"BLR:agumbe":[350,"7h 00m","NH 48 to Shimoga -> Thirthahalli"],"BLR:ahobilam":[330,"6h 30m","NH 44 to Anantapur -> Allagadda"],"BLR:aihole":[500,"8h 30m","NH 48 to Hubballi -> Bagalkot"],"BLR:ajanta_ellora_caves":[1033,"19h 52m","National / State Highway"],"BLR:alampur":[375,"5h 45m","NH 44 North to Kurnool"],"BLR:alleppey":[525,"10h 56m","Coastline Highway Corridor"],"BLR:amaravati":[624,"12h 00m","National / State Highway"],"BLR:ananthagiri_hills_vikarabad":[604,"11h 37m","National / State Highway"],"BLR:anthargange":[68,"1h 45m","NH 75 East via Kolar"],"BLR:araku_valley_borra_caves":[980,"18h 00m","NH 44 to Kurnool -> Vijayawada -> Vizag"],"BLR:auroville":[329,"6h 20m","National / State Highway"],"BLR:avalabetta":[92,"2h 00m","NH 44 to Chikkaballapur"],"BLR:badami":[510,"8h 45m","NH 48 to Hubballi -> Bagalkot"],"BLR:bandipur_national_park":[220,"4h 15m","NH 275 to Mysuru -> Gundlupet"],"BLR:banganapalle":[338,"6h 30m","National / State Highway"],"BLR:basar":[823,"15h 50m","National / State Highway"],"BLR:basavakalyan_fort":[686,"13h 12m","National / State Highway"],"BLR:bekal_fort":[365,"7h 30m","NH 275 via Madikeri -> Sullia"],"BLR:belum_caves":[295,"5h 45m","NH 44 to Anantapur -> Tadipatri"],"BLR:belur_halebidu":[220,"4h 00m","NH 75 to Hassan -> Belur"],"BLR:bhadrachalam":[789,"15h 10m","National / State Highway"],"BLR:bheemeshwari":[100,"2h 30m","NH 948 to Kanakapura -> Halagur"],"BLR:bhongir_fort":[655,"12h 36m","National / State Highway"],"BLR:bidar_fort_mahmud_gawan":[686,"13h 12m","National / State Highway"],"BLR:bijapur":[575,"9h 30m","NH 48 to Chitradurga -> NH 50"],"BLR:biligiriranga_hills":[166,"3h 57m","National Highway & Ghat Pass"],"BLR:bogatha_falls":[867,"18h 51m","Highway & Forest Reserve Route"],"BLR:chandragiri_fort_raja_mahal":[249,"4h 47m","National / State Highway"],"BLR:channapatna":[60,"1h 15m","NH 275 Expressway"],"BLR:chettinad":[434,"8h 21m","National / State Highway"],"BLR:chidambaram_pichavaram_mangrove":[373,"8h 07m","Highway & Forest Reserve Route"],"BLR:chikmagalur":[245,"4h 30m","NH 75 to Hassan -> Belur -> Chikmagalur"],"BLR:chitradurga":[200,"3h 14m","NH 48 (Bengaluru-Pune Hwy)"],"BLR:coonoor":[295,"6h 45m","Mysore Expressway -> Gundlupet -> Ooty"],"BLR:coorg":[265,"5h 30m","NH 275 Expressway -> Kushalnagar"],"BLR:coringa_wildlife_sanctuary_kakinada":[867,"18h 51m","Highway & Forest Reserve Route"],"BLR:dandeli_anshi_tiger_reserve":[460,"8h 30m","NH 48 to Hubballi -> Haliyal"],"BLR:daulatabad_fort":[1020,"19h 37m","National / State Highway"],"BLR:devarakonda_fort":[548,"10h 32m","National / State Highway"],"BLR:devarayanadurga":[72,"1h 45m","NH 48 to Tumakuru"],"BLR:dharmapuri":[854,"16h 25m","National / State Highway"],"BLR:gandikota":[280,"5h 30m","NH 44 to Anantapur -> Tadipatri"],"BLR:gangaikonda_cholapuram":[353,"6h 47m","National / State Highway"],"BLR:ghanpur_temples":[804,"15h 28m","National / State Highway"],"BLR:gingee_fort":[266,"5h 07m","National / State Highway"],"BLR:gokarna":[490,"9h 00m","NH 48 to Shimoga -> Sagar -> Honnavar"],"BLR:gooty_fort":[298,"5h 44m","National / State Highway"],"BLR:gulbarga":[614,"11h 48m","National / State Highway"],"BLR:hampi":[345,"6h 15m","NH 48 to Chitradurga -> NH 50 to Hospet"],"BLR:hogenakkal_falls":[180,"3h 45m","NH 44 to Dharmapuri -> Pennagaram"],"BLR:horsley_hills":[155,"3h 30m","NH 75 to Madanapalle"],"BLR:javadhu_hills":[204,"4h 51m","National Highway & Ghat Pass"],"BLR:jog_falls":[380,"7h 15m","NH 48 to Shimoga -> Sagara"],"BLR:kabini":[215,"4h 15m","NH 275 Mysuru Exp -> H.D. Kote"],"BLR:kadem_dam_reservoir":[901,"19h 35m","Highway & Forest Reserve Route"],"BLR:kaigal_falls":[139,"3h 01m","Highway & Forest Reserve Route"],"BLR:kailasakona_waterfalls":[291,"6h 20m","Highway & Forest Reserve Route"],"BLR:kakkabe_tadiandamol":[270,"6h 00m","NH 275 to Virajpet -> Kakkabe"],"BLR:kaleshwaram":[869,"16h 43m","National / State Highway"],"BLR:kanchipuram":[286,"5h 30m","National / State Highway"],"BLR:kannur":[320,"6h 30m","NH 275 to Virajpet -> Iritty"],"BLR:kanyakumari":[665,"10h 30m","NH 44 North-South Corridor via Madurai"],"BLR:karwar":[545,"11h 21m","Coastline Highway Corridor"],"BLR:kaundinya_wildlife_sanctuary":[151,"3h 17m","Highway & Forest Reserve Route"],"BLR:kawal_tiger_reserve":[915,"19h 53m","Highway & Forest Reserve Route"],"BLR:keesaragutta":[649,"12h 29m","National / State Highway"],"BLR:kemmangundi":[265,"5h 30m","NH 48 to Birur -> Tarikere"],"BLR:khammam_fort_palair_lake":[686,"13h 12m","National / State Highway"],"BLR:kochi":[471,"9h 49m","Coastline Highway Corridor"],"BLR:kodaikanal":[465,"8h 45m","NH 44 South to Salem -> Dindigul -> Batlagundu"],"BLR:koilkonda_fort_koilsagar":[519,"9h 59m","National / State Highway"],"BLR:kolhapur":[688,"13h 14m","National / State Highway"],"BLR:kolli_hills":[287,"6h 50m","National Highway & Ghat Pass"],"BLR:kotagiri":[275,"6h 15m","Mysore Expressway -> Gundlupet -> Kotagiri"],"BLR:kozhikode":[351,"7h 19m","Coastline Highway Corridor"],"BLR:kudremukh_peak_reserve":[310,"7h 00m","NH 75 to Hassan -> Belur -> Kalasa"],"BLR:kumbakonam":[370,"7h 07m","National / State Highway"],"BLR:kuntala_falls":[923,"20h 04m","Highway & Forest Reserve Route"],"BLR:kurnool_orvakal_rock_garden":[360,"5h 30m","NH 44 North Expressway"],"BLR:kuruva_island":[260,"5h 30m","NH 275 via Mysore -> HD Kote -> Mananthavady"],"BLR:kushalnagar_bylakuppe":[220,"4h 15m","NH 275 Expressway"],"BLR:laknavaram_lake":[824,"17h 55m","Highway & Forest Reserve Route"],"BLR:lambasingi":[880,"16h 00m","NH 44 to Kurnool -> Ongole -> NH 16"],"BLR:lepakshi":[125,"2h 30m","NH 44 North via Bagepalli"],"BLR:lonar_meteorite_crater":[1023,"22h 14m","Highway & Forest Reserve Route"],"BLR:madurai":[425,"7h 00m","NH 44 South Direct 4-Lane"],"BLR:mahabalipuram":[364,"7h 35m","Coastline Highway Corridor"],"BLR:makalidurga":[80,"2h 06m","Regional Expressway / State Route"],"BLR:mangalore":[350,"6h 30m","NH 75 Shiradi Ghat"],"BLR:manginapudi_beach":[682,"14h 13m","Coastline Highway Corridor"],"BLR:mantralayam":[380,"7h 00m","NH 44 to Gooty -> Adoni"],"BLR:maravanthe_beach":[440,"8h 00m","NH 75 via Hassan -> Mangalore -> Kundapura"],"BLR:maredumilli_rampachodavaram":[881,"19h 09m","Highway & Forest Reserve Route"],"BLR:medak_fort_cathedral":[711,"13h 40m","National / State Highway"],"BLR:mekedatu_sangama":[95,"2h 15m","NH 948 to Kanakapura -> Sangama"],"BLR:melukote":[140,"2h 45m","NH 75 to Bellur Cross -> Melukote"],"BLR:mettur_dam_stanley_reservoir":[173,"3h 46m","Highway & Forest Reserve Route"],"BLR:mudumalai_tiger_reserve":[235,"4h 45m","NH 275 to Gundlupet -> Theppakadu"],"BLR:mullayanagiri_peak":[265,"5h 15m","NH 75 via Chikmagalur -> Bababudangiri"],"BLR:munnar":[480,"9h 30m","NH 44 South to Salem -> Dindigul -> Theni -> Ghat"],"BLR:murudeshwar":[480,"8h 30m","NH 48 to Shimoga -> Honnavar"],"BLR:muttukadu_siruseri_backwaters":[359,"6h 54m","National / State Highway"],"BLR:mypadu_beach":[419,"8h 44m","Coastline Highway Corridor"],"BLR:mysore":[145,"2h 15m","NH 275 Bengaluru-Mysuru Expressway"],"BLR:nagalapuram":[313,"6h 48m","Highway & Forest Reserve Route"],"BLR:nagapattinam":[434,"8h 21m","National / State Highway"],"BLR:nagari_nose":[301,"7h 10m","National Highway & Ghat Pass"],"BLR:nagarjuna_sagar_island_museum":[575,"12h 30m","Highway & Forest Reserve Route"],"BLR:nagpur":[1154,"22h 12m","National / State Highway"],"BLR:nanded":[860,"16h 32m","National / State Highway"],"BLR:nandi_hills":[60,"1h 15m","NH 44 Airport Highway"],"BLR:narsapur_forest_lake":[669,"12h 52m","National / State Highway"],"BLR:ooty":[275,"6h 15m","Mysore Expressway -> Gundlupet -> Bandipur -> 36 Hairpins"],"BLR:pakhal_lake_wildlife_sanctuary":[793,"17h 14m","Highway & Forest Reserve Route"],"BLR:papikondalu":[842,"18h 18m","Highway & Forest Reserve Route"],"BLR:pattadakal":[495,"8h 30m","NH 48 to Hubballi -> Bagalkot"],"BLR:pench_national_park":[1277,"27h 46m","Highway & Forest Reserve Route"],"BLR:pillalamarri":[528,"10h 09m","National / State Highway"],"BLR:pocharam_wildlife_sanctuary":[751,"16h 20m","Highway & Forest Reserve Route"],"BLR:pochera_falls":[917,"19h 56m","Highway & Forest Reserve Route"],"BLR:pondicherry":[310,"5h 30m","NH 44 to Krishnagiri -> Tiruvannamalai"],"BLR:pulicat_lake_bird_sanctuary":[389,"8h 27m","Highway & Forest Reserve Route"],"BLR:rachakonda_fort":[606,"11h 39m","National / State Highway"],"BLR:ramanagara":[48,"1h 00m","NH 275 Expressway Entry"],"BLR:ramappa_temple":[799,"15h 22m","National / State Highway"],"BLR:rameshwaram_dhanushkodi":[590,"10h 00m","NH 44 / NH 383 via Salem, Trichy & Ramanathapuram"],"BLR:ranganathittu_bird_sanctuary":[130,"2h 00m","NH 275 Expressway"],"BLR:sadras_dutch_fort":[354,"6h 48m","National / State Highway"],"BLR:sakleshpur":[220,"4h 15m","NH 75 to Hassan -> Sakleshpur"],"BLR:savandurga":[50,"1h 20m","Magadi Road via Tavarekere"],"BLR:shamirpet_lake_deer_park":[656,"12h 37m","National / State Highway"],"BLR:shimoga_mattur":[280,"5h 00m","NH 48 to Tumakuru -> NH 69"],"BLR:shivagange":[55,"1h 20m","NH 48 to Dobbaspet"],"BLR:shravanabelagola":[145,"2h 45m","NH 75 via Channarayapatna"],"BLR:singur_dam_reservoir":[693,"15h 04m","Highway & Forest Reserve Route"],"BLR:sirumalai_hills":[431,"10h 16m","National Highway & Ghat Pass"],"BLR:somnathpur":[135,"2h 30m","NH 275 via Bannur"],"BLR:south_goa":[570,"10h 00m","NH 48 to Hubballi -> Yellapur -> Karwar"],"BLR:srikalahasti":[305,"5h 52m","National / State Highway"],"BLR:srisailam":[530,"9h 30m","NH 44 to Kurnool -> Atmakur -> Srisailam"],"BLR:suryalanka_beach":[575,"11h 59m","Coastline Highway Corridor"],"BLR:tada_falls":[330,"7h 10m","Highway & Forest Reserve Route"],"BLR:tadoba_andhari_tiger_reserve":[1010,"18h 30m","NH 44 North via Hyderabad & Adilabad"],"BLR:talakadu":[135,"3h 15m","NH 948 via Kanakapura & Malavalli"],"BLR:thanjavur":[369,"7h 06m","National / State Highway"],"BLR:thekkady":[510,"10h 00m","NH 44 to Theni -> Kumily"],"BLR:thirunallar":[411,"7h 54m","National / State Highway"],"BLR:thiruvananthapuram":[725,"12h 45m","NH 44 via Madurai & Nagercoil"],"BLR:tirupati_tirumala":[250,"4h 45m","NH 75 via Kolar -> Chittoor"],"BLR:tiruvallur_poondi_reservoir":[313,"6h 01m","National / State Highway"],"BLR:tiruvannamalai":[226,"4h 21m","National / State Highway"],"BLR:topslip":[410,"8h 30m","NH 44 to Coimbatore -> Pollachi"],"BLR:tranquebar":[419,"8h 44m","Coastline Highway Corridor"],"BLR:trichy":[339,"6h 31m","National / State Highway"],"BLR:udupi_malpe_beach":[405,"7h 30m","NH 75 to Mangalore -> NH 66"],"BLR:uppada_beach_handloom_hub":[874,"18h 12m","Coastline Highway Corridor"],"BLR:vagamon":[515,"12h 16m","National Highway & Ghat Pass"],"BLR:valparai":[450,"9h 00m","NH 44 South to Coimbatore -> Pollachi -> 40 Hairpins"],"BLR:vedanthangal_bird_sanctuary":[324,"7h 03m","Highway & Forest Reserve Route"],"BLR:velankanni_nagore":[452,"9h 25m","Coastline Highway Corridor"],"BLR:vellore_fort_jalakanteshwara":[209,"4h 01m","National / State Highway"],"BLR:vijayawada":[640,"12h 18m","National / State Highway"],"BLR:visakhapatnam":[1023,"21h 19m","Coastline Highway Corridor"],"BLR:warangal":[745,"14h 20m","National / State Highway"],"BLR:wayanad":[280,"6h 00m","NH 275 to Gundlupet -> Sulthan Bathery"],"BLR:yaganti":[339,"6h 31m","National / State Highway"],"BLR:yelagiri_hills":[160,"3h 30m","NH 44 to Krishnagiri -> Vaniyambadi"],"BLR:yercaud":[225,"4h 30m","NH 44 South to Salem"],"HYD:agumbe":[733,"15h 56m","Highway & Forest Reserve Route"],"HYD:ahobilam":[305,"6h 00m","NH 44 to Kurnool -> Allagadda"],"HYD:aihole":[410,"8h 30m","NH 65 to Gulbarga -> Bagalkot"],"HYD:ajanta_ellora_caves":[570,"10h 58m","National / State Highway"],"HYD:alampur":[215,"3h 30m","NH 44 South (Tungabhadra Confluence)"],"HYD:alleppey":[1161,"21h 30m","NH 44 South via Bengaluru"],"HYD:amaravati":[260,"4h 30m","NH 65 via Guntur"],"HYD:ananthagiri_hills_vikarabad":[80,"2h 00m","Vikarabad Highway via Chevella"],"HYD:anthargange":[607,"11h 14m","NH 44 South via Bengaluru"],"HYD:araku_valley_borra_caves":[620,"12h 00m","NH 65 to Vijayawada -> Rajahmundry -> Vizag"],"HYD:auroville":[787,"14h 34m","NH 44 South via Bengaluru"],"HYD:avalabetta":[538,"10h 21m","National / State Highway"],"HYD:badami":[410,"8h 30m","NH 65 to Gulbarga -> Bagalkot"],"HYD:bandipur_national_park":[852,"15h 47m","NH 44 South via Bengaluru"],"HYD:banganapalle":[290,"5h 15m","NH 44 to Kurnool"],"HYD:basar":[210,"4h 00m","NH 44 to Nizamabad -> Basar"],"HYD:basavakalyan_fort":[190,"3h 30m","NH 65 to Humnabad"],"HYD:bekal_fort":[855,"15h 50m","NH 44 South via Bengaluru"],"HYD:belum_caves":[330,"6h 00m","NH 44 to Kurnool -> Dhone -> Banaganapalle"],"HYD:belur_halebidu":[701,"12h 59m","NH 44 South via Bengaluru"],"HYD:bhadrachalam":[310,"6h 00m","NH 65 to Suryapet -> Kothagudem"],"HYD:bheemeshwari":[744,"13h 47m","NH 44 South via Bengaluru"],"HYD:bhongir_fort":[50,"1h 15m","NH 163 (Warangal Highway)"],"HYD:bidar_fort_mahmud_gawan":[145,"2h 45m","NH 65 to Zaheerabad -> Bidar"],"HYD:bijapur":[376,"7h 14m","National / State Highway"],"HYD:biligiriranga_hills":[790,"14h 38m","NH 44 South via Bengaluru"],"HYD:bogatha_falls":[330,"6h 30m","NH 163 to Eturunagaram"],"HYD:chandragiri_fort_raja_mahal":[540,"10h 23m","National / State Highway"],"HYD:channapatna":[696,"12h 53m","NH 44 South via Bengaluru"],"HYD:chettinad":[1042,"19h 18m","NH 44 South via Bengaluru"],"HYD:chidambaram_pichavaram_mangrove":[868,"16h 04m","NH 44 South via Bengaluru"],"HYD:chikmagalur":[650,"12h 00m","NH 44 to Anantapur -> Chitradurga -> Kadur"],"HYD:chitradurga":[520,"10h 00m","National / State Highway"],"HYD:coonoor":[870,"16h 00m","NH 44 South via Bengaluru & Mysore"],"HYD:coorg":[840,"15h 00m","NH 44 South to Bengaluru -> Mysore Rd"],"HYD:coringa_wildlife_sanctuary_kakinada":[480,"9h 30m","NH 65 to Rajahmundry -> Kakinada"],"HYD:dandeli_anshi_tiger_reserve":[619,"13h 27m","Highway & Forest Reserve Route"],"HYD:daulatabad_fort":[520,"9h 00m","NH 65 to Solapur / Jalna"],"HYD:devarakonda_fort":[111,"2h 08m","National / State Highway"],"HYD:devarayanadurga":[596,"11h 02m","NH 44 South via Bengaluru"],"HYD:dharmapuri":[231,"4h 27m","National / State Highway"],"HYD:gandikota":[380,"7h 30m","NH 44 to Kurnool -> Tadipatri"],"HYD:gangaikonda_cholapuram":[890,"16h 29m","NH 44 South via Bengaluru"],"HYD:ghanpur_temples":[225,"4h 20m","National / State Highway"],"HYD:gingee_fort":[741,"13h 43m","NH 44 South via Bengaluru"],"HYD:gokarna":[670,"13h 00m","NH 44 to Raichur -> Hubballi -> Yellapur"],"HYD:gooty_fort":[336,"6h 28m","National / State Highway"],"HYD:gulbarga":[220,"4h 00m","NH 65 to Humnabad -> Gulbarga"],"HYD:hampi":[375,"7h 30m","NH 44 to Raichur -> Sindhanur -> Gangavathi"],"HYD:hogenakkal_falls":[756,"14h 00m","NH 44 South via Bengaluru"],"HYD:horsley_hills":[571,"13h 36m","National Highway & Ghat Pass"],"HYD:javadhu_hills":[678,"12h 33m","NH 44 South via Bengaluru"],"HYD:jog_falls":[685,"14h 53m","Highway & Forest Reserve Route"],"HYD:kabini":[832,"15h 24m","NH 44 South via Bengaluru"],"HYD:kadem_dam_reservoir":[280,"5h 30m","NH 44 to Nirmal"],"HYD:kaigal_falls":[616,"11h 24m","NH 44 South via Bengaluru"],"HYD:kailasakona_waterfalls":[593,"10h 59m","NH 44 South via Bengaluru"],"HYD:kakkabe_tadiandamol":[836,"15h 29m","NH 44 South via Bengaluru"],"HYD:kaleshwaram":[270,"5h 00m","State Highway via Karimnagar & Manthani"],"HYD:kanchipuram":[669,"12h 23m","NH 44 South via Bengaluru"],"HYD:kannur":[893,"16h 32m","NH 44 South via Bengaluru"],"HYD:kanyakumari":[1240,"20h 30m","NH 44 South via Bengaluru & Madurai"],"HYD:karwar":[698,"14h 32m","Coastline Highway Corridor"],"HYD:kaundinya_wildlife_sanctuary":[603,"11h 10m","NH 44 South via Bengaluru"],"HYD:kawal_tiger_reserve":[265,"5h 00m","NH 44 to Nirmal -> Jannaram"],"HYD:keesaragutta":[45,"1h 11m","Regional Expressway / State Route"],"HYD:kemmangundi":[713,"16h 59m","National Highway & Ghat Pass"],"HYD:khammam_fort_palair_lake":[221,"4h 15m","National / State Highway"],"HYD:kochi":[1105,"20h 28m","NH 44 South via Bengaluru"],"HYD:kodaikanal":[1040,"18h 00m","NH 44 South via Bengaluru & Dindigul"],"HYD:koilkonda_fort_koilsagar":[133,"2h 33m","National / State Highway"],"HYD:kolhapur":[571,"10h 59m","National / State Highway"],"HYD:kolli_hills":[873,"16h 10m","NH 44 South via Bengaluru"],"HYD:kotagiri":[876,"16h 13m","NH 44 South via Bengaluru"],"HYD:kozhikode":[948,"17h 33m","NH 44 South via Bengaluru"],"HYD:kudremukh_peak_reserve":[741,"13h 43m","NH 44 South via Bengaluru"],"HYD:kumbakonam":[923,"17h 06m","NH 44 South via Bengaluru"],"HYD:kuntala_falls":[280,"5h 30m","NH 44 to Nirmal"],"HYD:kurnool_orvakal_rock_garden":[225,"3h 45m","NH 44 South Expressway"],"HYD:kuruva_island":[858,"15h 53m","NH 44 South via Bengaluru"],"HYD:kushalnagar_bylakuppe":[783,"14h 30m","NH 44 South via Bengaluru"],"HYD:laknavaram_lake":[220,"4h 15m","NH 163 to Mulugu -> Govindaraopet"],"HYD:lambasingi":[570,"10h 30m","NH 65 to Vijayawada -> NH 16 -> Narsipatnam"],"HYD:lepakshi":[511,"9h 50m","National / State Highway"],"HYD:lonar_meteorite_crater":[450,"8h 30m","NH 44 / NH 161 via Mehkar"],"HYD:madurai":[1062,"19h 40m","NH 44 South via Bengaluru"],"HYD:mahabalipuram":[717,"13h 17m","NH 44 South via Bengaluru"],"HYD:makalidurga":[579,"10h 43m","NH 44 South via Bengaluru"],"HYD:mangalore":[809,"14h 59m","NH 44 South via Bengaluru"],"HYD:manginapudi_beach":[345,"6h 30m","NH 65 to Machilipatnam"],"HYD:mantralayam":[255,"5h 00m","NH 44 to Raichur or Kurnool"],"HYD:maravanthe_beach":[744,"15h 30m","Coastline Highway Corridor"],"HYD:maredumilli_rampachodavaram":[420,"8h 30m","NH 65 to Rajahmundry -> Rampachodavaram"],"HYD:medak_fort_cathedral":[100,"2h 15m","NH 765D via Narsapur"],"HYD:mekedatu_sangama":[742,"13h 44m","NH 44 South via Bengaluru"],"HYD:melukote":[717,"13h 17m","NH 44 South via Bengaluru"],"HYD:mettur_dam_stanley_reservoir":[803,"14h 52m","NH 44 South via Bengaluru"],"HYD:mudumalai_tiger_reserve":[870,"16h 07m","NH 44 South via Bengaluru"],"HYD:mullayanagiri_peak":[684,"12h 40m","NH 44 South via Bengaluru"],"HYD:munnar":[1050,"18h 30m","NH 44 South via Bengaluru & Salem"],"HYD:murudeshwar":[721,"15h 01m","Coastline Highway Corridor"],"HYD:muttukadu_siruseri_backwaters":[692,"12h 49m","NH 44 South via Bengaluru"],"HYD:mypadu_beach":[470,"9h 47m","Coastline Highway Corridor"],"HYD:mysore":[768,"14h 13m","NH 44 South via Bengaluru"],"HYD:nagalapuram":[594,"11h 00m","NH 44 South via Bengaluru"],"HYD:nagapattinam":[961,"17h 48m","NH 44 South via Bengaluru"],"HYD:nagari_nose":[598,"11h 04m","NH 44 South via Bengaluru"],"HYD:nagarjuna_sagar_island_museum":[155,"3h 15m","Nagarjuna Sagar Rd via Ibrahimpatnam"],"HYD:nagpur":[500,"8h 30m","NH 44 North"],"HYD:nanded":[291,"5h 36m","National / State Highway"],"HYD:nandi_hills":[582,"10h 47m","NH 44 South via Bengaluru"],"HYD:narsapur_forest_lake":[71,"1h 52m","Regional Expressway / State Route"],"HYD:ooty":[850,"15h 30m","NH 44 South via Bengaluru & Mysore"],"HYD:pakhal_lake_wildlife_sanctuary":[195,"4h 00m","NH 163 to Narsampet"],"HYD:papikondalu":[380,"7h 30m","NH 65 to Rajahmundry / Bhadrachalam"],"HYD:pattadakal":[405,"8h 30m","NH 65 to Gulbarga -> Bagalkot"],"HYD:pench_national_park":[580,"10h 00m","NH 44 North via Nagpur"],"HYD:pillalamarri":[114,"3h 00m","Regional Expressway / State Route"],"HYD:pocharam_wildlife_sanctuary":[110,"2h 30m","NH 765D to Medak"],"HYD:pochera_falls":[270,"5h 15m","NH 44 to Nirmal"],"HYD:pondicherry":[796,"14h 44m","NH 44 South via Bengaluru"],"HYD:pulicat_lake_bird_sanctuary":[618,"11h 27m","NH 44 South via Bengaluru"],"HYD:rachakonda_fort":[67,"1h 46m","Regional Expressway / State Route"],"HYD:ramanagara":[685,"12h 41m","NH 44 South via Bengaluru"],"HYD:ramappa_temple":[210,"4h 00m","NH 163 to Mulugu -> Palampet"],"HYD:rameshwaram_dhanushkodi":[1140,"19h 00m","NH 44 South via Bengaluru & Salem"],"HYD:ranganathittu_bird_sanctuary":[749,"13h 52m","NH 44 South via Bengaluru"],"HYD:sadras_dutch_fort":[730,"13h 31m","NH 44 South via Bengaluru"],"HYD:sakleshpur":[690,"12h 30m","NH 44 to Anantapur -> Hassan"],"HYD:savandurga":[657,"12h 10m","NH 44 South via Bengaluru"],"HYD:shamirpet_lake_deer_park":[45,"1h 11m","Regional Expressway / State Route"],"HYD:shimoga_mattur":[619,"11h 54m","National / State Highway"],"HYD:shivagange":[625,"11h 34m","NH 44 South via Bengaluru"],"HYD:shravanabelagola":[700,"12h 58m","NH 44 South via Bengaluru"],"HYD:singur_dam_reservoir":[95,"2h 00m","NH 65 to Sangareddy"],"HYD:sirumalai_hills":[1027,"19h 01m","NH 44 South via Bengaluru"],"HYD:somnathpur":[759,"14h 03m","NH 44 South via Bengaluru"],"HYD:south_goa":[660,"13h 00m","NH 44 to Raichur -> Hubballi -> Karwar"],"HYD:srikalahasti":[531,"10h 13m","National / State Highway"],"HYD:srisailam":[215,"4h 30m","Srisailam Highway via Kalwakurthy & Dindi"],"HYD:suryalanka_beach":[310,"6h 00m","NH 65 to Guntur -> Bapatla"],"HYD:tada_falls":[579,"12h 35m","Highway & Forest Reserve Route"],"HYD:tadoba_andhari_tiger_reserve":[430,"8h 00m","NH 44 North via Adilabad & Chandrapur"],"HYD:talakadu":[735,"13h 30m","NH 44 South via Kurnool -> Bengaluru -> Kanakapura"],"HYD:thanjavur":[943,"17h 28m","NH 44 South via Bengaluru"],"HYD:thekkady":[1123,"20h 48m","NH 44 South via Bengaluru"],"HYD:thirunallar":[936,"17h 20m","NH 44 South via Bengaluru"],"HYD:thiruvananthapuram":[1290,"22h 00m","NH 44 South via Bengaluru & Madurai"],"HYD:tirupati_tirumala":[582,"13h 51m","National Highway & Ghat Pass"],"HYD:tiruvallur_poondi_reservoir":[635,"11h 46m","NH 44 South via Bengaluru"],"HYD:tiruvannamalai":[739,"13h 41m","NH 44 South via Bengaluru"],"HYD:topslip":[1009,"18h 41m","NH 44 South via Bengaluru"],"HYD:tranquebar":[924,"17h 07m","NH 44 South via Bengaluru"],"HYD:trichy":[940,"17h 24m","NH 44 South via Bengaluru"],"HYD:udupi_malpe_beach":[772,"14h 18m","NH 44 South via Bengaluru"],"HYD:uppada_beach_handloom_hub":[490,"9h 30m","NH 65 to Kakinada"],"HYD:vagamon":[1117,"20h 41m","NH 44 South via Bengaluru"],"HYD:valparai":[1020,"18h 00m","NH 44 South via Bengaluru & Coimbatore"],"HYD:vedanthangal_bird_sanctuary":[714,"13h 13m","NH 44 South via Bengaluru"],"HYD:velankanni_nagore":[973,"18h 01m","NH 44 South via Bengaluru"],"HYD:vellore_fort_jalakanteshwara":[641,"11h 52m","NH 44 South via Bengaluru"],"HYD:vijayawada":[275,"4h 30m","NH 65 4-Lane Expressway"],"HYD:visakhapatnam":[610,"10h 00m","NH 65 to Vijayawada -> NH 16"],"HYD:warangal":[150,"2h 45m","NH 163 via Jangaon & Kazipet"],"HYD:wayanad":[896,"16h 36m","NH 44 South via Bengaluru"],"HYD:yaganti":[300,"5h 30m","NH 44 to Kurnool -> Banaganapalle"],"HYD:yelagiri_hills":[685,"12h 41m","NH 44 South via Bengaluru"],"HYD:yercaud":[799,"14h 48m","NH 44 South via Bengaluru"],"MAA:agumbe":[700,"13h 00m","NH 48 via Bengaluru & Thirthahalli"],"MAA:ahobilam":[375,"7h 30m","NH 716 via Kadapa -> Allagadda"],"MAA:aihole":[695,"13h 15m","NH 716 via Kadapa & Bagalkot"],"MAA:ajanta_ellora_caves":[1180,"22h 42m","National / State Highway"],"MAA:alampur":[490,"9h 00m","NH 716 to Kadapa -> NH 40 Kurnool"],"MAA:alleppey":[730,"13h 30m","NH 544 via Kochi"],"MAA:amaravati":[465,"8h 00m","NH 16 via Guntur"],"MAA:ananthagiri_hills_vikarabad":[670,"12h 53m","National / State Highway"],"MAA:anthargange":[294,"5h 39m","National / State Highway"],"MAA:araku_valley_borra_caves":[890,"16h 30m","NH 16 via Vizag -> S.Kota"],"MAA:auroville":[150,"3h 00m","East Coast Road (ECR)"],"MAA:avalabetta":[358,"7h 10m","NH 48 via Krishnagiri"],"MAA:badami":[700,"13h 30m","NH 716 via Kadapa & Bagalkot"],"MAA:bandipur_national_park":[560,"10h 15m","NH 48 to Mysuru -> Gundlupet"],"MAA:banganapalle":[420,"7h 45m","NH 716 via Kadapa"],"MAA:basar":[864,"16h 37m","National / State Highway"],"MAA:basavakalyan_fort":[801,"15h 24m","National / State Highway"],"MAA:bekal_fort":[745,"14h 54m","NH 48 via Krishnagiri"],"MAA:belum_caves":[425,"8h 00m","NH 716 via Kadapa -> Tadipatri"],"MAA:belur_halebidu":[560,"10h 00m","NH 48 to Bengaluru -> NH 75 Hassan"],"MAA:bhadrachalam":[620,"11h 00m","NH 16 to Vijayawada -> Kothagudem"],"MAA:bheemeshwari":[435,"8h 30m","NH 48 to Hosur -> Kanakapura -> Halagur"],"MAA:bhongir_fort":[643,"12h 22m","National / State Highway"],"MAA:bidar_fort_mahmud_gawan":[765,"14h 43m","National / State Highway"],"MAA:bijapur":[804,"15h 28m","National / State Highway"],"MAA:biligiriranga_hills":[469,"9h 23m","NH 48 via Krishnagiri"],"MAA:bogatha_falls":[751,"16h 20m","Highway & Forest Reserve Route"],"MAA:chandragiri_fort_raja_mahal":[145,"3h 15m","NH 716 via Tirupati"],"MAA:channapatna":[410,"7h 45m","NH 48 to Bengaluru NICE -> NH 275"],"MAA:chettinad":[410,"7h 00m","NH 45 via Trichy -> Pudukkottai"],"MAA:chidambaram_pichavaram_mangrove":[245,"5h 00m","East Coast Road (ECR / NH 32)"],"MAA:chikmagalur":[590,"11h 00m","NH 48 via Bengaluru & Hassan"],"MAA:chitradurga":[550,"9h 00m","NH 48 via Bengaluru NICE"],"MAA:coonoor":[520,"10h 15m","NH 48 to Salem & Mettupalayam"],"MAA:coorg":[610,"11h 30m","NH 48 via Bengaluru & Mysore"],"MAA:coringa_wildlife_sanctuary_kakinada":[605,"11h 00m","NH 16 to Kakinada"],"MAA:dandeli_anshi_tiger_reserve":[810,"14h 30m","NH 48 via Bengaluru & Hubballi"],"MAA:daulatabad_fort":[1168,"22h 28m","National / State Highway"],"MAA:devarakonda_fort":[535,"10h 17m","National / State Highway"],"MAA:devarayanadurga":[415,"7h 45m","NH 48 to Bengaluru NICE -> Tumakuru"],"MAA:dharmapuri":[831,"15h 59m","National / State Highway"],"MAA:gandikota":[385,"7h 30m","NH 716 via Tirupati -> Kadapa -> Jammalamadugu"],"MAA:gangaikonda_cholapuram":[284,"5h 28m","National / State Highway"],"MAA:ghanpur_temples":[730,"14h 02m","National / State Highway"],"MAA:gingee_fort":[160,"3h 00m","NH 45 to Tindivanam"],"MAA:gokarna":[830,"15h 30m","NH 48 via Bengaluru & Shimoga"],"MAA:gooty_fort":[440,"8h 00m","NH 716 to Kadapa -> Gooty"],"MAA:gulbarga":[749,"14h 24m","National / State Highway"],"MAA:hampi":[540,"10h 30m","NH 716 via Kadapa & Guntakal"],"MAA:hogenakkal_falls":[340,"6h 30m","NH 48 to Krishnagiri -> Pennagaram"],"MAA:horsley_hills":[240,"5h 00m","NH 716 via Chittoor -> Madanapalle"],"MAA:javadhu_hills":[220,"4h 30m","NH 48 to Polur"],"MAA:jog_falls":[730,"13h 30m","NH 48 via Bengaluru & Sagara"],"MAA:kabini":[565,"10h 30m","NH 48 via Bengaluru & Mysuru -> HD Kote"],"MAA:kadem_dam_reservoir":[894,"19h 26m","Highway & Forest Reserve Route"],"MAA:kaigal_falls":[230,"4h 30m","NH 48 to Palamaner"],"MAA:kailasakona_waterfalls":[85,"2h 00m","NH 716 via Puttur"],"MAA:kakkabe_tadiandamol":[670,"13h 24m","NH 48 via Krishnagiri"],"MAA:kaleshwaram":[798,"15h 21m","National / State Highway"],"MAA:kanchipuram":[75,"1h 30m","NH 48 via Sriperumbudur"],"MAA:kannur":[685,"13h 00m","NH 48 via Bengaluru -> Virajpet"],"MAA:kanyakumari":[705,"11h 15m","NH 45 / NH 38 via Trichy & Madurai"],"MAA:karwar":[883,"18h 24m","Coastline Highway Corridor"],"MAA:kaundinya_wildlife_sanctuary":[235,"4h 30m","NH 48 to Palamaner"],"MAA:kawal_tiger_reserve":[898,"19h 31m","Highway & Forest Reserve Route"],"MAA:keesaragutta":[653,"12h 33m","National / State Highway"],"MAA:kemmangundi":[638,"12h 46m","NH 48 via Krishnagiri"],"MAA:khammam_fort_palair_lake":[579,"11h 08m","National / State Highway"],"MAA:kochi":[690,"12h 30m","NH 544 via Salem, Coimbatore & Ernakulam"],"MAA:kodaikanal":[520,"9h 45m","NH 45 via Dindigul & Batlagundu"],"MAA:koilkonda_fort_koilsagar":[604,"11h 37m","National / State Highway"],"MAA:kolhapur":[954,"18h 21m","National / State Highway"],"MAA:kolli_hills":[380,"7h 30m","NH 45 / NH 79 to Salem -> Rasipuram"],"MAA:kotagiri":[525,"10h 15m","NH 48 to Salem & Mettupalayam"],"MAA:kozhikode":[660,"12h 30m","NH 544 via Coimbatore & Palakkad"],"MAA:kudremukh_peak_reserve":[706,"14h 07m","NH 48 via Krishnagiri"],"MAA:kumbakonam":[290,"5h 30m","NH 32 / NH 36 via Panruti"],"MAA:kuntala_falls":[932,"20h 16m","Highway & Forest Reserve Route"],"MAA:kurnool_orvakal_rock_garden":[470,"8h 30m","NH 716 to Kadapa -> NH 40"],"MAA:kuruva_island":[618,"12h 22m","NH 48 via Krishnagiri"],"MAA:kushalnagar_bylakuppe":[614,"12h 17m","NH 48 via Krishnagiri"],"MAA:laknavaram_lake":[733,"15h 56m","Highway & Forest Reserve Route"],"MAA:lambasingi":[789,"14h 25m","NH 16 via Vijayawada & Tuni"],"MAA:lepakshi":[295,"5h 45m","NH 716 to Chittoor -> Palasamudram"],"MAA:lonar_meteorite_crater":[1125,"24h 27m","Highway & Forest Reserve Route"],"MAA:madurai":[465,"7h 30m","NH 45 4-Lane Direct"],"MAA:mahabalipuram":[55,"1h 15m","East Coast Road (ECR / SH 49)"],"MAA:makalidurga":[393,"7h 52m","NH 48 via Krishnagiri"],"MAA:mangalore":[695,"12h 30m","NH 48 to Bengaluru -> NH 75 Shiradi Ghat"],"MAA:manginapudi_beach":[455,"8h 00m","NH 16 via Machilipatnam"],"MAA:mantralayam":[535,"10h 00m","NH 716 via Kadapa -> Gooty"],"MAA:maravanthe_beach":[797,"15h 56m","NH 48 via Krishnagiri"],"MAA:maredumilli_rampachodavaram":[675,"12h 30m","NH 16 to Rajahmundry -> Rampachodavaram"],"MAA:medak_fort_cathedral":[740,"14h 14m","National / State Highway"],"MAA:mekedatu_sangama":[430,"8h 15m","NH 48 to Hosur -> Kanakapura"],"MAA:melukote":[475,"8h 45m","NH 48 via Bengaluru NICE -> Bellur Cross"],"MAA:mettur_dam_stanley_reservoir":[395,"8h 35m","Highway & Forest Reserve Route"],"MAA:mudumalai_tiger_reserve":[571,"11h 25m","NH 48 via Krishnagiri"],"MAA:mullayanagiri_peak":[642,"12h 50m","NH 48 via Krishnagiri"],"MAA:munnar":[585,"11h 00m","NH 45 via Trichy & Theni"],"MAA:murudeshwar":[825,"15h 00m","NH 48 via Bengaluru & Honnavar"],"MAA:muttukadu_siruseri_backwaters":[32,"0h 45m","East Coast Road (ECR)"],"MAA:mypadu_beach":[180,"3h 30m","NH 16 North 4-Lane"],"MAA:mysore":[490,"8h 45m","NH 48 to Bengaluru -> NH 275 Expressway"],"MAA:nagalapuram":[80,"2h 00m","NH 716 via Tiruvallur"],"MAA:nagapattinam":[300,"5h 45m","NH 32 via Cuddalore"],"MAA:nagari_nose":[109,"2h 36m","National Highway & Ghat Pass"],"MAA:nagarjuna_sagar_island_museum":[523,"11h 22m","Highway & Forest Reserve Route"],"MAA:nagpur":[1131,"21h 45m","National / State Highway"],"MAA:nanded":[933,"17h 57m","National / State Highway"],"MAA:nandi_hills":[367,"7h 20m","NH 48 via Krishnagiri"],"MAA:narsapur_forest_lake":[700,"13h 28m","National / State Highway"],"MAA:ooty":[535,"10h 30m","NH 48 to Salem & Coimbatore -> 36 Hairpins"],"MAA:pakhal_lake_wildlife_sanctuary":[705,"15h 20m","Highway & Forest Reserve Route"],"MAA:papikondalu":[645,"12h 00m","NH 16 to Rajahmundry"],"MAA:pattadakal":[697,"13h 15m","NH 716 via Kadapa & Bagalkot"],"MAA:pench_national_park":[1247,"27h 07m","Highway & Forest Reserve Route"],"MAA:pillalamarri":[594,"11h 25m","National / State Highway"],"MAA:pocharam_wildlife_sanctuary":[788,"17h 08m","Highway & Forest Reserve Route"],"MAA:pochera_falls":[928,"20h 10m","Highway & Forest Reserve Route"],"MAA:pondicherry":[155,"3h 00m","East Coast Road (ECR / NH 32)"],"MAA:pulicat_lake_bird_sanctuary":[60,"1h 30m","NH 16 North via Ponneri"],"MAA:rachakonda_fort":[601,"11h 33m","National / State Highway"],"MAA:ramanagara":[395,"7h 30m","NH 48 to Bengaluru NICE -> NH 275"],"MAA:ramappa_temple":[721,"13h 52m","National / State Highway"],"MAA:rameshwaram_dhanushkodi":[560,"9h 30m","NH 45 / NH 36 via Trichy & Ramanathapuram"],"MAA:ranganathittu_bird_sanctuary":[515,"10h 18m","NH 48 via Krishnagiri"],"MAA:sadras_dutch_fort":[70,"1h 30m","East Coast Road (ECR)"],"MAA:sakleshpur":[570,"10h 30m","NH 48 via Bengaluru & Hassan"],"MAA:savandurga":[395,"7h 30m","NH 48 to Bengaluru NICE -> Magadi"],"MAA:shamirpet_lake_deer_park":[668,"12h 51m","National / State Highway"],"MAA:shimoga_mattur":[672,"13h 26m","NH 48 via Krishnagiri"],"MAA:shivagange":[405,"7h 30m","NH 48 to Bengaluru NICE -> Dobbaspet"],"MAA:shravanabelagola":[495,"9h 00m","NH 48 via Bengaluru NICE -> NH 75"],"MAA:singur_dam_reservoir":[750,"16h 18m","Highway & Forest Reserve Route"],"MAA:sirumalai_hills":[560,"13h 20m","National Highway & Ghat Pass"],"MAA:somnathpur":[460,"8h 45m","NH 48 via Krishnagiri & Bannur"],"MAA:south_goa":[910,"16h 30m","NH 48 via Bengaluru & Hubballi"],"MAA:srikalahasti":[115,"2h 30m","NH 16 to Naidupeta -> Srikalahasti"],"MAA:srisailam":[475,"9h 30m","NH 16 to Ongole -> Markapur -> Dornala"],"MAA:suryalanka_beach":[380,"7h 00m","NH 16 to Ongole -> Bapatla"],"MAA:tada_falls":[90,"2h 00m","NH 16 to Tada -> Varadaiahpalem"],"MAA:tadoba_andhari_tiger_reserve":[1090,"20h 00m","NH 16 to Vijayawada -> NH 44"],"MAA:talakadu":[460,"9h 02m","NH 48 via Krishnagiri & Malavalli"],"MAA:thanjavur":[340,"6h 00m","NH 45 / NH 81 via Vikravandi"],"MAA:thekkady":[610,"11h 30m","NH 45 via Dindigul & Theni"],"MAA:thirunallar":[295,"5h 45m","NH 32 via Karaikal"],"MAA:thiruvananthapuram":[745,"12h 30m","NH 45 / NH 44 via Madurai & Nagercoil"],"MAA:tirupati_tirumala":[140,"3h 15m","NH 716 via Tiruvallur & Puttur"],"MAA:tiruvallur_poondi_reservoir":[45,"1h 15m","NH 716 Direct"],"MAA:tiruvannamalai":[195,"4h 00m","NH 45 to Tindivanam -> Gingee"],"MAA:topslip":[540,"10h 30m","NH 45 / NH 544 via Pollachi"],"MAA:tranquebar":[280,"6h 00m","East Coast Road (ECR / NH 32)"],"MAA:trichy":[330,"5h 30m","NH 45 Direct 4-Lane"],"MAA:udupi_malpe_beach":[750,"13h 30m","NH 48 via Bengaluru & Mangalore"],"MAA:uppada_beach_handloom_hub":[620,"11h 00m","NH 16 to Kakinada"],"MAA:vagamon":[720,"14h 00m","NH 45 via Dindigul & Theni"],"MAA:valparai":[580,"11h 00m","NH 45 / NH 544 to Coimbatore & Pollachi"],"MAA:vedanthangal_bird_sanctuary":[85,"1h 45m","NH 45 (GST Road) via Chengalpattu"],"MAA:velankanni_nagore":[310,"6h 00m","NH 32 via Nagapattinam"],"MAA:vellore_fort_jalakanteshwara":[140,"2h 30m","NH 48 6-Lane Direct"],"MAA:vijayawada":[450,"7h 30m","NH 16 6-Lane North"],"MAA:visakhapatnam":[800,"14h 00m","NH 16 North Coast Expressway"],"MAA:warangal":[685,"13h 10m","National / State Highway"],"MAA:wayanad":[635,"12h 00m","NH 48 via Bengaluru -> Mysore -> Gundlupet"],"MAA:yaganti":[435,"8h 00m","NH 716 via Kadapa -> Banaganapalle"],"MAA:yelagiri_hills":[230,"4h 30m","NH 48 to Vellore -> Vaniyambadi"],"MAA:yercaud":[365,"6h 30m","NH 45 to Villupuram -> NH 79 to Salem"],"HYD:dantewada":[440,"8h 30m","NH 163 via Khammam, Bhadrachalam & Sukma"],"HYD:barsur":[465,"9h 00m","NH 163 to Bhadrachalam -> Sukma -> Dantewada"],"HYD:chitrakote_falls":[520,"10h 15m","NH 163 / NH 30 via Bhadrachalam & Jagdalpur"],"HYD:tirathgarh_falls":[495,"9h 45m","NH 30 via Bhadrachalam -> Sukma -> Darbha"],"HYD:kanger_valley_kutumsar":[505,"10h 00m","NH 30 via Bhadrachalam -> Sukma -> Kanger Ghati"],"HYD:jagdalpur":[515,"10h 15m","NH 30 via Khammam, Bhadrachalam & Sukma"],"HYD:keshkal_ghat":[540,"10h 00m","NH 30 via Bhadrachalam & Jagdalpur"],"HYD:kanker_palace":[565,"10h 30m","NH 30 via Bhadrachalam & Jagdalpur"],"HYD:malanjhkudum_falls":[555,"10h 20m","NH 30 via Bhadrachalam & Kanker"],"HYD:gangrel_dam":[605,"11h 00m","NH 30 via Bhadrachalam, Jagdalpur & Dhamtari"],"HYD:dongargarh":[670,"11h 30m","NH 44 to Adilabad -> Chandrapur -> Rajnandgaon"],"HYD:rajim_sangam":[660,"11h 45m","NH 30 via Jagdalpur & Dhamtari -> SH 22"],"HYD:ghatarani_jatmai_falls":[680,"12h 00m","NH 30 via Dhamtari & Rajim -> Gariaband"],"HYD:raipur_nandanvan":[690,"12h 15m","NH 30 via Bhadrachalam & Jagdalpur or NH 44 / NH 53"],"HYD:madku_dweep":[725,"12h 45m","NH 44 / NH 53 via Raipur & Simga"],"HYD:sirpur_heritage":[740,"13h 00m","NH 30 to Raipur -> NH 53 to Arang & Sirpur"],"HYD:bhoramdeo_temple":[760,"13h 00m","NH 44 to Adilabad -> Chandrapur -> Durg -> Kawardha"],"HYD:barnawapara_wildlife":[765,"13h 30m","NH 30 to Raipur -> NH 53 to Mahasamund"],"HYD:achanakmar_tiger_reserve":[790,"13h 45m","NH 44 / NH 53 via Raipur & Bilaspur -> Kota"],"MAA:dantewada":[680,"13h 30m","NH 16 via Rajahmundry -> Bhadrachalam -> Sukma"],"MAA:barsur":[710,"14h 00m","NH 16 via Rajahmundry -> Bhadrachalam -> Sukma"],"MAA:chitrakote_falls":[740,"14h 30m","NH 16 to Rajahmundry -> Bhadrachalam -> Jagdalpur"],"MAA:tirathgarh_falls":[710,"13h 45m","NH 16 via Rajahmundry -> Bhadrachalam -> Sukma"],"MAA:kanger_valley_kutumsar":[715,"14h 00m","NH 16 via Rajahmundry -> Sukma -> Kanger Ghati"],"MAA:jagdalpur":[705,"13h 30m","NH 16 to Rajahmundry -> NH 30 via Sukma"],"MAA:keshkal_ghat":[780,"15h 00m","NH 16 to Rajahmundry -> NH 30 to Keshkal"],"MAA:kanker_palace":[830,"15h 30m","NH 16 via Rajahmundry -> NH 30"],"MAA:malanjhkudum_falls":[820,"15h 15m","NH 16 via Rajahmundry -> NH 30"],"MAA:gangrel_dam":[850,"15h 45m","NH 16 via Rajahmundry -> NH 30"],"MAA:dongargarh":[1010,"18h 30m","NH 16 to Vijayawada -> NH 44 to Chandrapur"],"MAA:rajim_sangam":[930,"17h 00m","NH 16 via Rajahmundry -> NH 30"],"MAA:ghatarani_jatmai_falls":[950,"17h 15m","NH 16 via Rajahmundry -> NH 30"],"MAA:raipur_nandanvan":[960,"17h 30m","NH 16 via Rajahmundry -> NH 30"],"MAA:madku_dweep":[980,"17h 45m","NH 16 via Rajahmundry -> Raipur"],"MAA:sirpur_heritage":[1000,"18h 00m","NH 16 via Rajahmundry -> Raipur -> NH 53"],"MAA:bhoramdeo_temple":[1120,"20h 00m","NH 16 via Vijayawada & Chandrapur"],"MAA:barnawapara_wildlife":[1020,"18h 30m","NH 16 via Rajahmundry -> NH 53"],"MAA:achanakmar_tiger_reserve":[1060,"19h 15m","NH 16 via Rajahmundry -> Bilaspur"],"BLR:dantewada":[825,"15h 30m","NH 44 via Kurnool -> Khammam -> Bhadrachalam"],"BLR:barsur":[845,"16h 00m","NH 44 via Kurnool -> Bhadrachalam -> Sukma"],"BLR:chitrakote_falls":[880,"16h 30m","NH 44 via Kurnool -> Khammam -> Jagdalpur"],"BLR:tirathgarh_falls":[860,"16h 15m","NH 44 to Kurnool -> Khammam -> Sukma"],"BLR:kanger_valley_kutumsar":[870,"16h 30m","NH 44 via Kurnool -> Bhadrachalam -> Sukma"],"BLR:jagdalpur":[880,"16h 30m","NH 44 via Kurnool -> Bhadrachalam -> Sukma"],"BLR:keshkal_ghat":[980,"18h 00m","NH 44 via Hyderabad -> NH 30"],"BLR:kanker_palace":[1030,"18h 45m","NH 44 via Hyderabad -> NH 30"],"BLR:malanjhkudum_falls":[1015,"18h 30m","NH 44 via Hyderabad -> NH 30"],"BLR:gangrel_dam":[1050,"19h 00m","NH 44 via Hyderabad -> NH 30"],"BLR:dongargarh":[1040,"18h 45m","NH 44 North via Hyderabad & Adilabad"],"BLR:rajim_sangam":[1120,"19h 45m","NH 44 via Hyderabad -> NH 30"],"BLR:ghatarani_jatmai_falls":[1140,"20h 00m","NH 44 via Hyderabad -> NH 30"],"BLR:raipur_nandanvan":[1150,"20h 15m","NH 44 via Hyderabad -> NH 30"],"BLR:madku_dweep":[1170,"20h 45m","NH 44 via Hyderabad -> Raipur"],"BLR:sirpur_heritage":[1190,"21h 00m","NH 44 via Hyderabad -> Raipur -> NH 53"],"BLR:bhoramdeo_temple":[1150,"20h 30m","NH 44 North via Hyderabad & Nagpur"],"BLR:barnawapara_wildlife":[1200,"21h 15m","NH 44 via Hyderabad -> Raipur"],"BLR:achanakmar_tiger_reserve":[1240,"21h 45m","NH 44 via Hyderabad -> Bilaspur"]};
    }

    /**
     * Load / assign the master POI list
     * @param {Array<Object>} pois 
     */
    setMasterPois(pois) {
        if (Array.isArray(pois)) {
            this.masterPois = pois;
            this.notifyChange('MASTER_POIS');
        }
    }

    /**
     * Get the master POI list
     * @returns {Array<Object>}
     */
    getMasterPois() {
        return this.masterPois;
    }

    /**
     * Register a metro origin hub
     * @param {Object} hubConfig - { key, name, fullName, lat, lon, elev }
     */
    registerHub(hubConfig) {
        if (!hubConfig || !hubConfig.key) return;
        if (!hubConfig.outposts) {
            hubConfig.outposts = [];
        }
        this.hubs.set(hubConfig.key.toUpperCase(), hubConfig);
        this.notifyChange(hubConfig.key.toUpperCase());
    }

    /**
     * Backward-compatible alias
     */
    register(hubConfig) {
        this.registerHub(hubConfig);
    }

    /**
     * Set the currently active origin hub by key
     * @param {string} key - e.g. 'PNQ', 'BLR', 'HYD', 'MAA'
     * @returns {Object|null}
     */
    setCurrentHub(key) {
        if (!key) return null;
        this.currentHubKey = key.toUpperCase();
        const hub = this.getHub(this.currentHubKey);
        if (hub && !hub.outposts) {
            hub.outposts = [];
        }
        return hub;
    }

    /**
     * Get the currently active origin hub
     * @returns {Object|null}
     */
    getCurrentHub() {
        if (!this.currentHubKey) {
            this.currentHubKey = 'BLR';
        }
        const hub = this.getHub(this.currentHubKey);
        if (hub && !hub.outposts) {
            hub.outposts = [];
        }
        return hub;
    }

    /**
     * Get hub configuration by key
     * @param {string} key - e.g. 'BLR', 'HYD', 'MAA'
     * @returns {Object|null}
     */
    getHub(key) {
        if (!key) return null;
        return this.hubs.get(key.toUpperCase()) || null;
    }

    /**
     * Get all registered metro hubs
     * @returns {Array<Object>}
     */
    getAllHubs() {
        return Array.from(this.hubs.values());
    }

    /**
     * Great-circle Haversine aerial distance in kilometers (straight-line)
     */
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;
        return 2 * R * Math.asin(Math.sqrt(a));
    }

    /**
     * Forward azimuth / bearing angle from origin to destination (0° - 360°)
     */
    calculateBearing(lat1, lon1, lat2, lon2) {
        const phi1 = lat1 * Math.PI / 180;
        const phi2 = lat2 * Math.PI / 180;
        const deltaLambda = (lon2 - lon1) * Math.PI / 180;
        const y = Math.sin(deltaLambda) * Math.cos(phi2);
        const x = Math.cos(phi1) * Math.sin(phi2) -
            Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
        const theta = Math.atan2(y, x);
        return (theta * 180 / Math.PI + 360) % 360;
    }

    /**
     * Convert degree bearing to 16-point cardinal compass string
     */
    bearingToCompass(deg) {
        const cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        const idx = Math.round(deg / 22.5) % 16;
        return cardinals[idx];
    }

    /**
     * True Road Trip Distance Engine:
     * Calculates realistic highway driving distances, driving times, and primary corridors
     * for any origin hub and destination pair, accounting for road network circuity,
     * ghat passes, city exit overhead, and verified highway routing.
     * 
     * @param {string} hubKey - e.g. 'BLR', 'HYD', 'MAA'
     * @param {Object} poi - Destination object with { id, name, cat, elev, lat, lon }
     * @param {number} airDist - Precalculated great-circle distance
     * @returns {Object} { roadDist, driveTime, corridor }
     */
    calculateRoadMetrics(hubKey, poi, airDist) {
        const key = `${hubKey.toUpperCase()}:${poi.id}`;

        // 1. Check precompiled verified matrix
        if (this.ROAD_MATRIX && this.ROAD_MATRIX[key]) {
            const entry = this.ROAD_MATRIX[key];
            return {
                roadDist: entry[0],
                driveTime: entry[1],
                corridor: entry[2]
            };
        }

        // 2. Calibrated Road Network Circuity Model (fallback for dynamic POIs/Hubs)
        let circuity = 1.26;
        let speed = 52;
        let corridor = "National / State Highway";

        if (hubKey === 'PNQ') {
            if (poi.lat > 20.2 && poi.lon < 74.0) {
                circuity = 1.22;
                speed = 60;
                corridor = "NH 48 / Western Expressway to Gujarat";
            } else if (poi.lat > 20.2 && poi.lon >= 74.0) {
                circuity = 1.24;
                speed = 56;
                corridor = "NH 52 / NH 60 North Corridor to Madhya Pradesh";
            } else if (poi.cat === 'hill') {
                circuity = 1.35;
                speed = 42;
                corridor = "Sahyadri Ghat & Mountain Pass";
            } else if (poi.cat === 'heritage') {
                circuity = 1.25;
                speed = 52;
                corridor = "NH 48 / Deccan Heritage Corridor";
            } else if (poi.cat === 'coastal') {
                circuity = 1.32;
                speed = 45;
                corridor = "Konkan Bhor / Tamhini Ghat Corridor";
            } else if (airDist < 80) {
                circuity = 1.28;
                speed = 40;
                corridor = "Pune Radial Expressway / State Highway";
            }
        } else if (hubKey === 'MAA' && poi.lon < 77.8 && poi.lat > 11.5 && poi.lat < 14.5) {
            circuity = 1.30;
            speed = 50;
            corridor = "NH 48 via Krishnagiri";
        } else if (hubKey === 'HYD' && poi.lat < 13.5) {
            circuity = 1.28;
            speed = 54;
            corridor = "NH 44 South via Bengaluru";
        } else if (poi.cat === 'hill') {
            circuity = 1.38;
            speed = 40;
            corridor = "National Highway & Ghat Pass";
        } else if (poi.cat === 'nature') {
            circuity = 1.30;
            speed = 46;
            corridor = "Highway & Forest Reserve Corridor";
        } else if (poi.cat === 'coastal') {
            circuity = 1.28;
            speed = 48;
            corridor = "Coastline Highway Corridor";
        } else if (poi.cat === 'quick' && airDist < 90) {
            circuity = 1.30;
            speed = 38;
            corridor = "Regional Expressway / State Route";
        }

        const exitPenalty = airDist < 60 ? 12 : 0;
        const roadDist = Math.round(Math.abs(airDist) * circuity + exitPenalty);
        const hrs = Math.abs(roadDist) / Math.max(1, Math.abs(speed));
        const h = Math.floor(hrs);
        const m = Math.abs(Math.round((hrs - h) * 60));

        return {
            roadDist,
            driveTime: `${h}h ${m.toString().padStart(2, '0')}m`,
            corridor
        };
    }

    /**
     * Dynamic Hub Resolution Engine:
     * Resolves all destination outposts for any given hub from the unified Master POI dataset.
     * Computes ROAD DRIVING DISTANCE, drive time, highway corridor, bearing, and compass direction.
     * 
     * @param {string} hubKey - e.g. 'BLR', 'HYD', 'MAA'
     * @param {number} [maxRadiusKm=800] - Radial road driving discovery threshold
     * @param {Object} [filter={}] - Optional filters { cat }
     * @returns {Array<Object>} Sorted array of resolved outposts
     */
    getOutpostsForHub(hubKey, maxRadiusKm = 800, filter = {}) {
        const hub = this.getHub(hubKey);
        if (!hub) return [];

        // Combine unified master POIs with hub-specific dynamic outposts
        const combinedPois = [...this.masterPois];
        if (hub.outposts && Array.isArray(hub.outposts) && hub.outposts.length > 0) {
            const seen = new Set(combinedPois.map(p => (p.name || p.id || '').toLowerCase()));
            hub.outposts.forEach(p => {
                const k = (p.name || p.id || '').toLowerCase();
                if (k && !seen.has(k)) {
                    combinedPois.push(p);
                    seen.add(k);
                }
            });
        }

        let list = combinedPois.map(poi => {
            const airDist = Math.round(this.calculateDistance(hub.lat, hub.lon, poi.lat, poi.lon));
            const bearing = Math.round(this.calculateBearing(hub.lat, hub.lon, poi.lat, poi.lon));
            const { roadDist, driveTime, corridor } = this.calculateRoadMetrics(hubKey, poi, airDist);

            return {
                ...poi,
                dist: roadDist,        // PRIMARY road driving distance (in km)
                roadDist: roadDist,    // Explicit road trip distance
                airDist: airDist,      // Geodesic aerial distance (for telemetry HUD readout)
                driveTime: driveTime,  // Realistic driving duration
                corridor: corridor,    // Highway route corridor
                bearing,
                direction: this.bearingToCompass(bearing)
            };
        });

        // Threshold filter by actual ROAD DRIVING DISTANCE
        list = list.filter(poi => poi.dist <= maxRadiusKm);

        // Category filter
        if (filter.cat && filter.cat !== 'all') {
            list = list.filter(poi => poi.cat === filter.cat);
        }

        // Sort ascending by ROAD DRIVING DISTANCE from origin
        return list.sort((a, b) => a.dist - b.dist);
    }

    /**
     * Backward-compatible getOutposts method
     */
    getOutposts(hubKey, filter = {}) {
        return this.getOutpostsForHub(hubKey, filter.maxDist || 800, filter);
    }

    /**
     * Subscribe to registry changes
     */
    onRegister(callback) {
        this.listeners.push(callback);
    }

    notifyChange(key) {
        this.listeners.forEach(fn => {
            try { fn(key, this.hubs.get(key)); } catch (e) { console.error(e); }
        });
    }
}

// Global singleton instance
const hubService = new HubService();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HubService, hubService };
} else if (typeof window !== 'undefined') {
    window.HubService = HubService;
    window.hubService = hubService;
}
