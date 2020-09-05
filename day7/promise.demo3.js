const fs = require('fs');
const Promise = require('bluebird');

Promise.promisifyAll(fs);

let readFileDemoPromise = () => {

    const path = 'C:/Users/dell/Playlist.txt';
    const path1 = 'C:/Users/dell/edmgp.txt';
    const path2 = 'C:/Users/dell/edmgp1.txt';

    fs.readFileAsync(path, {
        encoding: "utf-8"
    }).then((data) => {
        //file 1 done 
        console.log(data); //success
    }).catch((err) => {
        console.log(err); //error
    });

}

readFileDemoPromise();