//$ curl localhost:8080/movies -XPOST -H 'Content-Type: application/json' -d '{"title": "gon with the wind", "rating": 4}' -v

const express = require('express'); //laddar in express
const app = express();
const port = 8080;

app.use(express.json()) // en express middleware som hanterar JSON datan som vi sen kommer åt i req.body. Ska ligga högst upp innan routerna

let id = 1; 
let movies = [];

function getID() {
    return id++;
}

app.get('/movies', (req, res) => { //Hämtar alla filmer
    res.json({movies})
})

app.get('/movies/:id', (req, res) => { //hämtar en specifik film
    const id = parseInt(req.params.id); //hämtar filmens id
    if(!id){
        res.status(404).end();
        return;
    }
    const movie = movies.find(movie => movie.id === id); 
    if(movie){
        res.json(movie); //om vi hittar en film som matchar id:t så skickar vi tillbaka den filmen till användaren
    } else {
        res.status(404).end();
    }
});

app.post('/movies', (req, res) => {
    const body = req.body; //sparar datan som du får i variabel
    if (!body.title || typeof body.title !== 'string' || typeof body.rating !== 'number') { //kollar om filmens titel inte är en sträng eller om ratinget inte är ett nummer
      res.status(400).end(); //i sånt fall sätt status 400
      return;
    }
  
    let movie = {   //sparar datan i ett objekt som sedan pushas in i arrayn movies
      id: getID(),
      title: body.title,
      rating: body.rating,
    };
    movies.push(movie);
    res.status(201).json(movie);
  });
  
  app.delete('/movies/:id', (req, res) => { 
    const id = parseInt(req.params.id); // kolla om filmen finns med rätt id
    if (!id) {
      res.status(400).end();
      return;
    }
  
    const movieIndex = movies.findIndex(movie => movie.id === id); //hittar filmen med det id:t
    if (movieIndex !== -1) { //findIndex returnerar -1, är movieIndex ett värde så splice:ar man ute den filen från arrayn.. 
      movies.splice(movieIndex, 1);
    }
    res.status(204).end();
  });
  
  app.put('/movies/:id', (req, res) => { //man vill ändra något i datan text ändra titeln
    const id = parseInt(req.params.id);
    const body = req.body;
    if (!id || !body.title || typeof body.title !== 'string' || typeof body.rating !== 'number') { //validerar, stämmer det inte skickas statusen 400
      res.status(400).end();
      return;
    }
  
    const movieIndex = movies.findIndex(movie => movie.id === id); //hittar filmen med det id:t
    if (movieIndex !== -1) { //hittas filmen så ändras de nya värdena. 
      let movie = { //för att inte kunna lägga till fler nycklar, ha det i ett objekt
        id: movies[movieIndex].id,
        title: body.title,
        rating: body.rating,
      };
      movies[movieIndex] = movie;
      res.status(200).send(movies[movieIndex]);
    } else {
      res.status(404).end();
    }
  });
  
  const PORT = 8080;
  app.listen(PORT, function() {
    console.log('listening on', PORT);
  });


 {/* 
axios(`/chatroom/${chatrrom id}/message`, {content: "test"}).then((response=>{
        
}))

axios.post("/login", {username: "emma"})
    .then(response=>{
        console.log(response.data)
        //emma
    })

  */} 