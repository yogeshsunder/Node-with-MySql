const express = require('express')
const con = require('./config');
const app = express();
app.use(express.json());

app.delete("/:PersonID", (req, resp) => {
    
    con.query('DELETE FROM persons where PersonID = ' + req.params.PersonID, (err, result, fields) => {
        if(err) throw err;
        resp.send(result);
    })
})

app.listen(5300);