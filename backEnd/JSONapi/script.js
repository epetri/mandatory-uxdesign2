/*  För att testa din kod gör man ett HTTP request direkt från vår terminal.
    Detta med hjälp av curl, t.ex:
    curl localhost:8080/uppercase -XPOST -H 'Content-Type: application/json' -d '{"value": "hello"}' 
    curl localhost:8080/uppercase -XPOST -H 'Content-Type: application/json' -d '{"heje": "hello"}' -v  För att göra ett fel och få ut statusen */

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

function verifyMiddleware(req, res, next){ // Skapa egen middleware
    if(!typeof req.body.value === 'string'){
        console.log('U suck');
        res.status(400).end();
        return;
    }
    next();
}

app.post('/uppercase', verifyMiddleware, (req, res) => {    
    console.log(req.body.value.ToUpperCase()); //metoder som redan finns i express
})

app.post('/lowercase', (req, res) => {
    if(!req.body.value){
        console.log('U suck');
        res.status(400).end();
        // return; ..har man inte en else-sats måste man ha en return, annars körs all kod ändå. 
    } else {
    console.log(req.body.value.ToLowerCase());
    }
})

app.post('/capitalize', (req, res) => {
    if(!req.body.value){
        res.status(400).end();
    } else {
    let capitalized = req.body.value.charAt(0).ToUpperCase() + req.body.value.slice(1); //capitalize fanns inte som metod
    console.log(capitalized);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));