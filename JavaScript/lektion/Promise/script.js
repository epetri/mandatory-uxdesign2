function giveMePromise(){
  return new Promise((resolve, reject) => { //BIG ARROW => ersätter ordet function,
    let msg = 'Hello from promise';         //hade kunnat skriva såhär också: return new Promise(function(resolve, reject).Big arrow hanerar även .this annorlunda
    setTimeout(function(){                  //setTimeout skickar(resolve:ar) med 1 sekund fördröjning
      resolve(msg);
    }, 1000);
  });
}

giveMePromise()
.then(function(msg) {
console.log(msg); // -> "Hello from promise"
});


//viktors lösning
function giveMePromise(){
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve('hello from promise');
    }, 1000);
  });
}

giveMePromise()
.then(function(msg) {
console.log(msg); // -> "Hello from promise"
});
