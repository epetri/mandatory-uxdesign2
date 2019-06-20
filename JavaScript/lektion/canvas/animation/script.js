let canvas = document.getElementById( 'canvas');
let ctx = canvas.getContext( '2d');
let x = 0;
setInterval(function() {
ctx.clearRect( 0, 0, 300, 150); // Standard size is 300px * 150px
ctx.fillStyle = 'blue';
x += 10;
ctx.fillRect(x, 10, 100, 100);
}, 1000);
