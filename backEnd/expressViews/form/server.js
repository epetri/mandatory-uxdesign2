const express = require('express');
const app = express();
 
app.use(express.urlencoded ());

app.set('view engine', 'pug');
const people= [];

app.get('/', function (req, res){
    res.render('index', {title: 'form', people}) 
});

app.post('/submit', function (req, res){
  /*  if(!req.body.name || !req.body.age){
        req.status(400).end()
    }  */
    let person = {name: req.body.name, age: req.body.age};
    people.push(person);
    res.status(200).redirect('/');
});

const PORT = 8080;
app.listen(PORT, () => console.log(`yey ${PORT}`));
