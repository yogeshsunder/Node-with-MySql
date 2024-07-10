const express = require('express')
const con = require('./config');
const app = express();
app.use(express.json());

app.post("/", (req, resp) => {
    //const data = { PersonID: "3", LastName: "Jambo", FirstName: "BabaYogi", Address: "AeroHomes", City: "Zirakpur" }

    const data = req.body;

    con.query('INsert INTO persons SET ?', data, (err, result, fields) => {
        if(err) err;
        resp.send(result);
    })
})

app.listen(5100);