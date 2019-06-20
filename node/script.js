const obj = require('./test.js'); //importera kod från test.js filen

//  import obj from './test.js' , är ett nyare sätt men funkar inte för node..

var a = 'Hello';
var b = 'is';

console.log(a, obj.name, b, obj.mood);
