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

    //Updating a record

    var sql = "UPDATE members set city ='Navi Mumbai' where city='Mumbai' ";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + "row(s) affected");
    })

});