const express = require('express')
const con = require('./config');
const app = express();

app.get("/", (req, resp) => {
    con.query("select * from persons", (err, result) => {
        if (err) {
            resp.send("Database connection error")
        } else {
            resp.send(result);
        }

    })
})

app.listen(5000);