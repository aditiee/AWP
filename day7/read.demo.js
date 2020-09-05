const fs = require('fs');
let readFileDemo = () => {

    const path = 'C:/Users/dell/Playlist.txt';
    const path1 = 'C:/Users/dell/edmgp.txt';
    const path2 = 'C:/Users/dell/edmgp1.txt';

    /* fs.readFile(path, {
         encoding: "utf-8"
     }, (err, data) => {
         console.log(data);
     });

     fs.readFile(path1, {
         encoding: "utf-8"
     }, (err, data) => {
         console.log(data);
     });

     fs.readFile(path2, {
         encoding: "utf-8"
     }, (err, data) => {
         console.log(data);
     }); */

    //Reading file 1 
    fs.readFile(path, {
        encoding: "utf-8"
    }, (err, data) => {
        console.log('1', data);
        //reading file 2 
        fs.readFile(path1, {
            encoding: "utf-8"
        }, (err, data) => {
            console.log('2', data);
            //reading file 3 
            fs.readFile(path2, {
                encoding: "utf-8"
            }, (err, data) => {
                console.log('3', data);
            });
        });
    });



};

readFileDemo();