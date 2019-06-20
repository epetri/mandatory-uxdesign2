const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');
let div = document.createElement('div');

body.appendChild(div);

for (let button of buttons) {
  button.addEventListener('click', function(event) {
    if(event.target.id === 'home') {
      renderHome();

    } else if (event.target.id === 'menu') {
      renderMenu();
    } else {
      renderFavorite();
    }
 });
}

function renderHome() {
  removePic();
  let pic = document.createElement('img')
  pic.setAttribute('src', 'https://i.pinimg.com/originals/b6/0f/20/b60f200cfda0bd11fca0b6982fb5e275.jpg')
  pic.style.height = "300px"
  div.appendChild(pic);
}


function renderMenu() {
  removePic();
  let pic = document.createElement('img')
  pic.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6UdI3yCPVEd9ZVxdrsqUTAvLGGX9axDbyA4mKMkaXrLJYTSP')
  pic.style.height = "300px"
  div.appendChild(pic);
}

function renderFavorite() {
  removePic();
  let pic = document.createElement('img')
  pic.setAttribute('src', 'https://i.pinimg.com/originals/c2/60/05/c26005f0a5fa75eedc13b5870640bbca.jpg')
  pic.style.height = "300px"
  div.appendChild(pic);
}

function removePic() {
  div.innerHTML ='';
}
