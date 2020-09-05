const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let deleteRecord = async (name) => {
    try {
        const con = mysql.createConnection(config.DB_CON);

        await con.connectAsync();

        let sql = "DELETE FROM team WHERE name = ?";
        let result = await con.queryAsync(sql, [name]);

        console.log("Affected row(s) : ", result.affectedRows)
        await con.endAsync();

    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    deleteRecord
};