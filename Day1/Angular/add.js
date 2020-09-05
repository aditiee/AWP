const Promise = require('bluebird');
const mysql = require('mysql');

const config = require('./config');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let addRecord = async (team) => {
    try {
        const con = mysql.createConnection(config.DB_CON);

        await con.connectAsync();

        let sql = "INSERT INTO team (id , name , rating) VALUES (? , ? , ? )";
        let result = await con.queryAsync(sql, [
            team.id,
            team.name,
            team.rating
        ]);

        console.log("Affected row(s) : ", result.affectedRows)
        await con.endAsync();

    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    addRecord
};