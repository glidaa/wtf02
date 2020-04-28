const moment = require('moment');

const marketPositions = [
  {"date": "23-04-2021", "close": 68.55, "open": 74.55, "corona_world": 2708884, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "22-04-2021", "close": 74.55, "open": 69.55, "corona_world": 2624089, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "21-04-2021", "close": 69.55, "open": 62.55, "corona_world": 2549122, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "20-04-2021", "close": 62.55, "open": 56.55, "corona_world": 2472258, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "19-04-2021", "close": 56.55, "open": 59.55, "corona_world": 2401101, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "18-04-2021", "close": 59.86, "open": 65.86, "corona_world": 2317758, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "17-04-2021", "close": 62.62, "open": 65.62, "corona_world": 2240190, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "16-04-2021", "close": 64.48, "open": 60.48, "corona_world": 2152437, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "15-04-2021", "close": 60.98, "open": 55.98, "corona_world": 2056054, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "14-04-2021", "close": 58.13, "open": 53.13, "corona_world": 1976191, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "13-04-2021", "close": 68.55, "open": 74.55, "corona_world": 1904838, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "12-04-2021", "close": 74.55, "open": 69.55, "corona_world": 1834721, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "11-04-2021", "close": 69.55, "open": 62.55, "corona_world": 1735650, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "10-04-2021", "close": 62.55, "open": 56.55, "corona_world": 1657526, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "09-04-2021", "close": 56.55, "open": 59.55, "corona_world": 1565278, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "08-04-2021", "close": 59.86, "open": 65.86, "corona_world": 1479804, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "07-04-2021", "close": 62.62, "open": 65.62, "corona_world": 1396092, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "06-04-2021", "close": 64.48, "open": 60.48, "corona_world": 1321131, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "05-04-2021", "close": 60.98, "open": 55.98, "corona_world": 1249484, "corona_worl_deaths": 32333, "corona_world_recovered": 2222},
  {"date": "04-04-2021", "close": 58.13, "open": 53.13, "corona_world": 1175857, "corona_worl_deaths": 32333, "corona_world_recovered": 2222}
];

let counter = 0;

function updateMarket() {
  const diff = Math.floor(Math.random() * 1000) / 100;
  const lastDay = moment(marketPositions[0].date, 'DD-MM-YYYY').add(1, 'days');
  let open;
  let close;
  let starttime = 1587945600000; //1587686400000; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
 
  var d = new Date();
  var now = d.getTime();
  let corona_world = (Math.round(((now - starttime)* 0.00098881944)+3003352));

  let corona_world_deaths = (Math.round(((now - starttime)* 0.00006862268)+207094));

  let corona_world_recovered = (Math.round(((now - starttime)* 0.00005950231)+882552));
  console.log(corona_world);
  console.log(corona_world_deaths);
  console.log(corona_world_recovered);
  if (counter % 2 === 0) {
    open = marketPositions[0].open + diff;
    close = marketPositions[0].close + diff;
  } else {
    open = Math.abs(marketPositions[0].open - diff);
    close = Math.abs(marketPositions[0].close - diff);
 }

  marketPositions.unshift({
    date: lastDay.format('DD-MM-YYYY'),
    open,
    close,
    corona_world,
    corona_world_deaths,
    corona_world_recovered
 });
  counter++;
}

module.exports = {
  marketPositions,
  updateMarket,
};
