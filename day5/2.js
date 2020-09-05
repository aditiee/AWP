const objs = require('os');
let tm = objs.totalmem;
let fm = objs.freemem;

console.log(`Total Memory : ${tm}`)
console.log(`Free Memory : ${fm}`)
