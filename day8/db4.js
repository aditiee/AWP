const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "meandb"
});
con.connect((err) => {
    if (err) throw err;
    console.log("Connected");

    //to insert a single record in the table and return the id 
    /*
    var q = "INSERT INTO members VALUES(184,'Neymar Jr','PSG')";
    con.query(q, (err, result) => {
        if (err) throw err;

        console.log("1 record inserted in the database, ID : " + result.insertId);
    });
    */

    var q = "INSERT INTO members VALUES(185,'Ramos','Real Madrid')";
    con.query(q, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log("1 record inserted in the database, ID : " + result.insertId);
    })




});