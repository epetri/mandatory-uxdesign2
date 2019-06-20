/* 
installera https://www.npmjs.com/package/cookie-parser
skriv i webläsaren: localhost:8080/setCookie?name=Emma   ..för att skicka ett namn till cookie
därefter : localhost:8080/getCookie    ..för att se cookie
*/

const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 8080;

app.use(express.json());

app.use(cookieParser()); //cookie middleware

app.get('/setCookie', (req, res) => {
    let name = req.query.name;
    res.cookie('name', name)
    res.end()
});

app.get('/getCookie', (req, res) => {
    let cookie = req.cookies.name;
    res.status(200).send(`Hello ${cookie}`);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));