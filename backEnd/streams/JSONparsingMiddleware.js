const express = require('express');
const app = express();
const port = 8080;


function checkJSON(req, res, next) {    //skapa middleware
    //if(req.get('Content-Type') === 'application/json')  ett annat sätt att kolla contentType
    if(!req.is('application/json')){    //kolla om content-type är application/json
        next();                         //om nej, skippa resten av koden och gå vidare
        return;                         //en return för att skippa resten av koden
    } else {
        let body = '';                  //skapa en tom sträng

        req.on('data', chunk => {       //vi samlar ihop all (chunk) data och lägger de i body. chunksen är bufferobjekt *chunk.toString för att se*
            body += chunk;
        });

        req.once('end', () => {         //denna kod körs en gång i slutet
            try {
                req.body = JSON.parse(body);    //kolla om datan (chunksen) är json obj
                next();
            } catch (error) {
                res.status(400).send('Invalid JSON');
            }
        });
    }
}

app.post('/', (req, res) => {
    res.status(200).send(req.body);
});

app.post('/todos', checkJSON, (req, res) => {
    res.json(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//$ curl localhost:8080/uppercase -XPOST -H 'content-Type: application/json' -d '{"title": "hello"}' -v