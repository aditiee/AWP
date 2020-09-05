const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let readRecord = async () => {
    try {
        const con = mysql.createConnection(config.DB_CON);

        await con.connectAsync();

        let sql = "SELECT * FROM team";
        let result = await con.queryAsync(sql);

        console.log(result);
        await con.endAsync();

    } catch (err) {
        console.log(err.name);
    }
}

module.exports = {
    readRecord
};