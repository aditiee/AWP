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

    //writing Query :: Creating database 
    /*  con.query("CREATE DATABASE meandb", (err, result) => {
          if (err) throw err;
          console.log("Database Create");
          console.log(result);
      })
    */

    //Writing Query :: Create Table
    var q = "CREATE TABLE members (sid int(5) , name varchar(50) , city varchar(50))";
    con.query(q, (err, result) => {
        if (err) throw err;
        console.log("Table created");
    })
});