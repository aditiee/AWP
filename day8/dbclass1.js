const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {

    try {
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            port: "3306",
            database: "meandb"
        });

        await con.connectAsync();

        let sql = "SELECT * FROM members";
        let output = await con.queryAsync(sql);
        console.log(output);

        await con.endAsync();
        return output;
    } catch (err) {
        console.log(err);
    }

}

readAllUser();