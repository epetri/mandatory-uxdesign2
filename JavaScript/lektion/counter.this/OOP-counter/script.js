
let myObject = {
  count: 0,
  incrase: function() {
    this.count++;
  },
  log: function(){
    console.log(this.count);
  }
};

myObject.incrase();
myObject.incrase();
myObject.log();

function Counter(startCount){ //vill man att det ska börja med, tex.0 per default skriver man inget inom paranteserna
  this.count = startCount;    //här skriver man det värde man vill att det ska börja, tex.0
  this.increase = function(){
    this.count++;
  };
    this.log = function(){
      console.log(this.count);
    }
  }

let counter = new Counter(5);
counter.increase();
counter.log();

let counter2 = new Counter(0);
counter2.increase();
counter2.log();
