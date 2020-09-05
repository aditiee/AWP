const http = require("http");
const mod = require("./my.module");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const myres = JSON.stringify(mod.list);
    res.end(myres);

});
server.listen(5600);

//console.log(mod);
//console.log(mod.list);