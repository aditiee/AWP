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

    var q = "SELECT * FROM members";
    con.query(q, (err, result) => {
        if (err) throw err;
        console.log(result);

    });

    var q1 = "SELECT name FROM members";
    con.query(q1, (err, result, feilds) => {
        if (err) throw err;
        console.log(result);
        console.log(result[2].name);

    });

    var q2 = "SELECT name,city FROM members";
    con.query(q2, (err, result, feilds) => {
        if (err) throw err;
        console.log(feilds);


    });




});