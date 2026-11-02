const fs = require('fs');
const pois = require('../data/master_pois.js');
const hubsConfig = require('../data/hubs/hubs_config.js');

// Benchmark routes from user screenshots and official Google Maps
const BENCHMARKS = {
    'MAA:talakadu': { dist: 460, time: '9h 02m', corridor: 'NH 48 via Krishnagiri & Malavalli' },
    'MAA:lambasingi': { dist: 789, time: '14h 25m', corridor: 'NH 16 via Vijayawada & Tuni' },
    'BLR:chitradurga': { dist: 200, time: '3h 14m', corridor: 'NH 48 (Bengaluru-Pune Hwy)' },
    'BLR:kabini': { dist: 215, time: '4h 15m', corridor: 'NH 275 Mysuru Exp -> H.D. Kote' },
    'BLR:kanyakumari': { dist: 665, time: '10h 30m', corridor: 'NH 44 North-South Corridor via Madurai' },
    'BLR:thiruvananthapuram': { dist: 725, time: '12h 45m', corridor: 'NH 44 via Madurai & Nagercoil' },
    'BLR:rameshwaram_dhanushkodi': { dist: 590, time: '10h 00m', corridor: 'NH 44 / NH 383 via Salem, Trichy & Ramanathapuram' },
    'MAA:kanyakumari': { dist: 705, time: '11h 15m', corridor: 'NH 45 / NH 38 via Trichy & Madurai' },
    'MAA:thiruvananthapuram': { dist: 745, time: '12h 30m', corridor: 'NH 45 / NH 44 via Madurai & Nagercoil' },
    'MAA:rameshwaram_dhanushkodi': { dist: 560, time: '9h 30m', corridor: 'NH 45 / NH 36 via Trichy & Ramanathapuram' },
    'HYD:srisailam': { dist: 215, time: '4h 30m', corridor: 'Srisailam Highway via Kalwakurthy & Dindi' },
    'HYD:warangal': { dist: 150, time: '2h 25m', corridor: 'NH 163 via Jangaon & Kazipet' },
    'HYD:tadoba_andhari_tiger_reserve': { dist: 430, time: '8h 00m', corridor: 'NH 44 North via Adilabad & Chandrapur' },
};

console.log("Checking benchmarks count:", Object.keys(BENCHMARKS).length);

