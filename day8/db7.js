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

    //using order by clause 

    var sql = "Select * from members order by name desc";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    })

});