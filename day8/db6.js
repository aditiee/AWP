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

    var q = "select * from members where sid = 105";
    con.query(q, (err, result) => {
        if (err) throw err;
        console.log(result);
    })

    // Escaping Query values

    var adr = "Barca";
    var q1 = "select * from members where city = " + mysql.escape(adr);
    con.query(q1, (err, result) => {
        if (err) throw err;
        console.log(result);
    })

    //Escape Query using placeholder '?'

    var adr = "Barca";
    var q2 = "select * from members where city = ?";
    con.query(q2, [adr], (err, result) => {
        if (err) throw err;
        console.log(result);
    })

    //Escape Query using  multiple placeholder '?'

    var adr = "Mumbai";
    var name = "Shantanu Upase";
    var q3 = "select * from members where name = ? AND city = ?";
    con.query(q3, [name, adr], (err, result) => {
        if (err) throw err;
        console.log(result);
    })

});