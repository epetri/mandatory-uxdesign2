function Rectangle (width, height, x, y){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  }
Rectangle.prototype.area = function() {
  return this.height * this.width;
}
Rectangle.prototype.scale = function(width, height) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.translate = function(x, y) {
  this.x = x;
  this.y = y;
}

let calcArea = new Rectangle(5, 3, 7, 8);
console.log(calcArea.area());
calcArea.translate(7, 3);
calcArea.scale(2, 1);
