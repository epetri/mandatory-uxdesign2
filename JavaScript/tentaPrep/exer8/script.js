/*VG Uppgift

I index.html ligger det en box. Med JavaScript skriv kod så att boxens bredden är 50%
av sidans bredd, samt höjden är 50% av sidans höjd. Gör också så att boxen alltid ligger
i mitten av skärmen. Du får endast använda pixel värden för bredden och positionen för
boxen, dvs inga %-värden. Säg också till att boxen är korrekt även när vi ändrar storleken på fönstret.*/

let box = document.querySelector('#box');
  boxInWindow();

window.addEventListener('resize', function(event){
  boxInWindow();
});

function boxInWindow(){
  let height = window.innerHeight / 2;
  let width = window.innerWidth / 2;

  box.style.height = height + 'px';
  box.style.width = width + 'px';

  box.style.position = 'relative';
  box.style.left = width / 2 + 'px';
  box.style.top = height / 2 + 'px';
};





//syns först när man ändrar strl på window
