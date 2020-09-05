//internal modules by nodeJS
const http = require('http');

http.createServer((request, response) => {
    //response.end("Hello World");

    let mj = {
        name: "shantanu",
        city: "mumbai"
    };

    response.end(JSON.stringify(mj));


}).listen(5500);