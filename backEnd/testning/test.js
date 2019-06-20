var assert = require('chai').assert;
var assert = require('assert');


describe('test Server with api', function() {
    afterEach(function(){
        return axios.delete('localhost:3033/movies')
    });

    it('should return all movies in json', function() {
       return axios.post('localhost:3033/movies', {
        title: 'diz sucks',
        rating: 1
       })
       .then(() => {
           return axios.get('localhost:3033/movies')
           .then(function(response){
                let data = response.data;
                assert.typeOf(data.title = 'string');
                assert.lengthOf(data.rating, 1);
                assert.equal(response.statusCode, 200);
           });
       });
    });
    it('should return one movie', function(){
        return axios.post('localhost:3033/movies', {
            title: "i'm dead",
            rating: 3
        })
        .then((response) => {
           let id = response.data.id
           return axios.get('localhost:3033/movies/' + id)
           .then(function(response){
            let data = response.data;
            assert.equal(data.title, "i'm dead");
            assert.equal(data.rating, 3);
           })
        })
    });
});


