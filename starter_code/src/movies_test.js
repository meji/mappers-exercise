const methods = require("./movies"); 
const movies = require("./data"); 
const test = methods.bestYearAvg([{ year: 2007, rate: 8 }]);
console.log(test); 
