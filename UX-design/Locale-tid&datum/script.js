let h1 = document.querySelector('h1');
let main = document.querySelector('main');
let select = document.querySelector('select');

main.setAttribute('style', 'width: 500px; height: 150px; background-color: lightgrey; border-radius: 10px;');
select.setAttribute('style', 'margin-left: 30%; margin-top: 5%;');
h1.setAttribute('style', 'margin-left: 17%;');


setInterval(function() {
  let option = document.querySelector('select').value;

  let date = new Date();
  h1.textContent = date.toLocaleString(option);

if(option === 'locale'){
  h1.textContent = '';
}
}, 1000);
