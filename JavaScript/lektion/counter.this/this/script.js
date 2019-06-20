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
