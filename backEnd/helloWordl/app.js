// en jätteenkel webserver. Allt körs i terminalen t.ex. node script.js. Öppna localhost:3000 för att se meddelandet

const http = require('http'); //ladda in http-servern
const fs = require('fs');

const hostname = '127.0.0.1';  // '127.0.0.1' detta namn pekar på din egna dator (localhost)
const port = 3000; // skapar en port. En port bestämmer vilken server vi ska köra på, detta gör det möjligt att kunna köra flera servers samtidigt
                   // 3000, 8000, 8080 är vanliga standardportar man använder. Unvik skapa portar under 1000
const server = http.createServer((req, res) => {    //här skapar vi en server. funktionen tar 2 arg. req = ett obj, request, all info från klienten. Res = framtida responsen vi vill svara med
    fs.readFile('./appFSmodul.txt', function readFile(err, data){ //Hämta filen. ska ligga inne i funktionen för att slippa ladda om servern hela tiden
        if(err){
            console.log(err);
            res.statusCode = 500;
            res.end();
        } else {
        res.statusCode = 200; //200 = ok
        res.setHeader('Content-Type', 'text/plain'); //standard textformat
        res.end(data);     //avslutar requesten, skickar tillbaka det vi vill svara
        }
    });
});

server.listen(port, hostname, () => {  //en callback som körs när servern är igång. utan denna funkar servern shi
  console.log(`Server running at http://${hostname}:${port}/`);
});