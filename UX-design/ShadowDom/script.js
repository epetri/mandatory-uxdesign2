let p = document.querySelector('#p').attachShadow({mode: 'closed'});
let div = document.createElement('div');

div.style.backgroundColor = 'purple';
div.textContent = "då"
p.appendChild(div);
