let axios = require('axios');


axios.get('https://ghibliapi.herokuapp.com/films')
.then((respons) => {
    let data = 
    respons.data.map(movie => movie.title)
    .filter(title => title.toLowerCase().includes('castle'))
    console.log(data);
    findmovieamount(respons);
});

function findmovieamount (respons){
    console.log(
    
    respons.data.reduce(function(acc, curr) {
        acc[curr.release_date] ? acc[curr.release_date] ++ : acc[curr.release_date] = 1;
        return acc;
    }, {} ));
}

/* node scrips.js */
