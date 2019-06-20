const http = require('http');

process.stdin.on('data', url => {
   let req = http.get(url.toString(), res => {
        console.log(res.statusCode);
    });

    req.on('error', function(e){
        console.error(e);
    })
})
/* för att testa, skriv i terminalen: *starta program.. node preocessStidn*
    sen skriv : http://www.googe.com  (tex) */


/* Viktors lösning


    process.stdin.on('data', data => {
        http.get(data, res => {
            process.stdout.write(res.statusCode + '\n');
    });
});

*/