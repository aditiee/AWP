const fs = require('fs');
const http = require('http');
const {
    resourceUsage
} = require('process');

const path1 = 'C:/Users/dell/Playlist.txt';
const path2 = 'C:/Users/dell/edmgp.txt';
const path3 = 'C:/Users/dell/edmgp1.txt';


http.createServer((req, res) => {
    fs.readFile(path1, {
        encoding: "utf-8"
    }, (err, data) => {

        res.write(data);
        fs.readFile(path2, {
            encoding: "utf-8"
        }, (err, data) => {

            res.write(data);
            res.end();
        })
    })



}).listen(8000);


// let read = () => {
//     fs.readFile(path1, {
//         encoding: "utf-8"
//     }, (err, data) => {

//         console.log(data);
//     })
// }