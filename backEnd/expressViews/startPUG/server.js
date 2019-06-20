const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  });

  const PORT = 8080;
  app.listen(PORT, () => console.log(`yey ${PORT}`));