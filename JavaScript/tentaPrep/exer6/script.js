/*I script.js ligger det en funktion getData. Denna funktion returnerar en promise med JSON data.
Skriv kod i script.js som kallar på funktionen getData och använder datan den skickar till att rendera en lista.
Listan ska renderas i .container elementet.*/


/* Implement your solution here */

let container = document.querySelector('.container');
let table = document.createElement('table');
container.appendChild(table);

getData().then(function(data) {
  let ul = document.createElement('ul');
  let parsed = JSON.parse(data);
  for (let key of parsed.data){
    let li = document.createElement('li');
    li.textContent = key;
    ul.appendChild(li);
    table.appendChild(ul)
  }
})

/* Do not touch anything below this line */
function getData() {
  return new Promise(function(resolve, reject) {
    let t = Math.random() * 2000 + 1000;
    setTimeout(function() {
      resolve(JSON.stringify({
        data: [
          'Sweden',
          'Denmark',
          'Norway',
          'Finland'
        ]
      }));
    }, t);
  });
}
