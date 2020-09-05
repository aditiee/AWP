const fs = require('fs');
const Promise = require('bluebird');

Promise.promisifyAll(fs);

let readFileDemoPromise = async () => {

    const path1 = 'C:/Users/dell/Playlist.txt';
    const path2 = 'C:/Users/dell/edmgp.txt';
    const path3 = 'C:/Users/dell/edmgp1.txt';

    const data1 = await fs.readFileAsync(path1, {
        encoding: "utf-8"
    });
    console.log(data1);

    const data2 = await fs.readFileAsync(path2, {
        encoding: "utf-8"
    });
    console.log(data2);

    const data3 = await fs.readFileAsync(path3, {
        encoding: "utf-8"
    });
    console.log(data3);

}

readFileDemoPromise();