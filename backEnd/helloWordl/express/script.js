//express.js är ett ramverk som hjälper oss med logiken när vi skapar en HTTP server
// https://expressjs.com/en/4x/api.html#app 

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()) // en express middleware som hanterar JSON datan som vi sen kommer åt i req.body. Ska ligga högst upp innan routerna

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')
});

app.get('/foo', (req, res) => res.send('Hello foo!')); //express routing


app.listen(port, () => console.log(`Example app listening on port ${port}!`));