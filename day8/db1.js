const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306"
});
con.connect((err) => {
    if (err) throw err;
    console.log("Connected");
});