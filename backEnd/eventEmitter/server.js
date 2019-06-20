// gör ett anrop för att se resultat: curl localhost:8080/todos -v

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

function verifyResponse(req, res, next) { //skapa middleware
    let start = new Date(); //startar tiden
    res.once('finish', () => { //responsen är inte satt ännu, därför sätter man en lyssnare som hämtar datan först när requesten är gjord 
        console.log(req.method, req.url, res.statusCode);
        let end = new Date() - start; //stoppar tiden.. för att få ut hur snabbt det gick att få responsen
        console.log('Execution Time: %dms', end);
    })
    next();
};

app.get('/todos', verifyResponse, (req, res) => { //här sätts responsen 
    res.status(200).end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));