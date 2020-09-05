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

    //to insert a single record in the table
    /*
    var q = "INSERT INTO members VALUES(105,'Shantanu Upase','Mumbai')";
    con.query(q, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted in the database");
    })
    */

    // to insert the multiple record into the table 
    var q = "INSERT INTO members VALUES ?";
    var values = [
        [006, 'Aditya Soni', 'Mumbai'],
        [134, 'Vipul Zope', 'Mumbai'],
        [345, 'Messi', 'Barca'],
        [007, 'Ronaldo', 'Real Madrid'],
        [040, 'Lewandoski', 'Bayern']
    ];

    con.query(q, [values], (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) inserted");

    })

});