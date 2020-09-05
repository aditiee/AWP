const fs = require('fs');


let readDemo1 = () => {
    console.log("read file Async");
    //Asynchronous non-blocking
    try {
        var path = 'C:/Users/dell/Playlist.txt';
        fs.readFile(path, {
            encoding: "utf-8"
        }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });

    } catch (err) {
        console.log(err);
    }
};

let readDemo2 = () => {
    console.log("read file Sync");
    //Synchronous Blocking
    try {
        var path = 'C:/Users/dell/Playlist.txt';
        const data = fs.readFileSync(path, {
            encoding: "utf-8"
        });
        console.log(data);
    } catch (err) {
        console.log(err.name);
    }

}

let writeDemo = () => {
    console.log("write file");
};


module.exports = {
    readDemo1,
    readDemo2,
    writeDemo
};