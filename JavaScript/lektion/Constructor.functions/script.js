function Point(x, y) {  // skapa "bas" funktionen
  this.x = x;
  this.y = y;
}

Point.prototype.plus = function (point) {  //här plusas point1 med point2 och sparas i point3
  x = this.x + point.x;
  y = this.y + point.y;
  let mainPoint = new Point(x, y);
  return mainPoint;
}

Point.prototype.subtract = function (point) { //här subtraheras point1 med point2 och sparas i point4
  x = this.x - point.x;
  y = this.y - point.y;
  return new Point(x, y);   //här returnar vi en 'new Point' direkt utan att spara värdet i en variabel (mainPoint) först 
}

Point.prototype.multiply = function (point) { //här multipluseras point1 med point2 och sparas i point5
  x = this.x * point.x;
  y = this.y * point.y;
  let mainPoint = new Point(x, y);
  return mainPoint;
}

let point1 = new Point(10, 20);  //ger point1 värden
let point2 = new Point(4, 4); //ger point2 värden
let point3 = point1.plus(point2); //sparar värdet av point1 + point2
let point4 = point1.subtract(point2); //sparar värdet av point1 - point2
let point5 = point1.multiply(point2); //sparar värdet av point1 * point2
console.log(point3);
console.log(point4);
console.log(point5);
