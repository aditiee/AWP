const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "meandb"
}

let readAllUser = async () => {

    try {
        const con = mysql.createConnection(DB_CONFIG);

        await con.connectAsync();

        let sql = "SELECT * FROM members WHERE city = ? AND name = ?";
        let output = await con.queryAsync(sql, ['Barca', 'Messi']);
        console.log(output);

        await con.endAsync();
        return output;

    } catch (err) {
        console.log(err);
    }

}

readAllUser();