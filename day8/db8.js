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

    //Deleting a record

    var sql = "delete from members where name ='Ramos' ";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + "row(s) affected");
    })

});