let progress = document.querySelector('.progress');

let grow = 0;
setInterval(function(){
  if (grow < 100){
    grow += 10;
    progress.style.width = grow + '%';
    console.log(grow);
  }
}, 100);
