function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.x = 0;
  this.y = 0;
}

Rectangle.prototype.scale = function(num) {
  this.width *= num;
  this.height *= num;
}

Rectangle.prototype.translate = function(x, y) {
  this.x += x;
  this.y += y;
}

let rect = new Rectangle(100, 100);

let canvas = document.querySelector("canvas");
canvas.width = 600;
canvas.height = 600;
let ctx = canvas.getContext("2d");
ctx.fillStyle = 'green';

setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Standard size is 300px * 150px
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  if (rect.x < canvas.width - rect.width && rect.y === 0) {
    rect.translate(10, 0);
  } else if (rect.x === canvas.width - rect.width && rect.y < canvas.height - rect.height) {
    rect.translate(0, 10);
  } else if (rect.x > 0 && rect.y === canvas.height - rect.height) {
    rect.translate(-10, 0);
  } else if (rect.x === 0 && rect.y > 0) {
    rect.translate(0, -10);
  }

}, 50);
