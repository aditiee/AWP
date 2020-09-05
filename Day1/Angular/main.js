const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const add = require('./add');
const read = require('./read');
const del = require('./del');

app.post('/adduser', async (req, res) => {
    try {
        const input = req.body;
        await add.addRecord(
            input
        );

        //res.json(input);
        res.end();

    } catch (err) {
        console.log("error in main : ", err.name)
    }
});
app.listen(4000);