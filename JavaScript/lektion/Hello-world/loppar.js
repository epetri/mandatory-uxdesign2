
var i = 0;
while (i<21) {
  console.log("hello,world!");
  i++;
}

var x = 0;
for (i = 0; i <= 100; i ++){
  x += i;
}
    console.log(x);

var y = 0;
for (x = 0; x <= 100; x += 2){
  y += x;
}
  console.log(y);


var y = 0;
for (var x=1; x<=100; x+=2){
  y += x;
}
  console.log(y);


var x;
var y = 0;
for (x = 0; x <= 100; x++){
  if (x % 10 === 0) continue;
    y += x;
}
  console.log(y);
