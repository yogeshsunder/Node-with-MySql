const express = require('express')
const con = require('./config');
const app = express();
app.use(express.json());

app.put("/:PersonID", (req, resp) => {
    //const data = ["TogiBabaJi", req.params.PersonID]

    const data = [req.body.FirstName, req.params.PersonID];

    con.query('UPDATE persons SET FirstName = ? where PersonID = ?', data, (err, result, fields) => {
        if(err) err;
        resp.send(result);
    })
})

app.listen(5200);