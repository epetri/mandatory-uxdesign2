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
  this.x += x;
  this.y += y;
}
// let rectangle = new Rectangle(55, 55, 100, 100);
// let rect = new Rectangle(0, 0, 100, 100);

/*
// rektangel går från vänster till höger
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
setInterval(function(){
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillStyle = 'purple';
  rectangle.translate(rectangle.x + 10, rectangle.y);
  ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}, 1000);


// Animera skalning av rektangel
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
setInterval(function(){
  ctx.clearRect(0, 0, 300, 300);
  ctx.fillStyle = 'purple';
  rectangle.translate(rectangle.x + 10, rectangle.y);
  rectangle.scale(rectangle.height * 2, rectangle.width * 2);
  ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}, 1000);
*/
//animera rektangel som går från hörn till hörn medurs
let rect = new Rectangle(100, 100, 0, 0);


let canvas = document.querySelector("canvas");
canvas.width = 1000;
canvas.height = 700;
let ctx = canvas.getContext("2d");
ctx.fillStyle = 'lightblue';


setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Standard size is 300px * 150px
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

  if (rect.x < canvas.width - rect.width && rect.y === 0) { //går från övre-vänst till övre-höger
    rect.translate(10, 0);                                   //x, y ... vilken riktning det ska gå
    ctx.fillStyle = 'lightblue';
  } else if (rect.x === canvas.width - rect.width && rect.y < canvas.height - rect.height) { //från övre-h till nedre-h
    rect.translate(0, 10);                                      //x, y
    ctx.fillStyle = 'lightgreen';
  } else if (rect.x > 0 && rect.y === canvas.height - rect.height) { //
    rect.translate(-10, 0);
    ctx.fillStyle = 'red';
  } else if (rect.x === 0 && rect.y > 0) {
    rect.translate(0, -10);
    ctx.fillStyle = 'pink';
  }

}, 5);
