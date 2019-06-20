let imgContainer = document.querySelector('.imgContainer');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);

function callback(enteties) {
  enteties.forEach((entity) => {
    if(entity.isIntersecting) {
      observer.unobserve(entity.target);
      entity.target.src = entity.target.dataset.src;
    }
  });
}

for (let i = 0; i < 100; i++) {
  let img = document.createElement('img');
  img.dataset.src = 'https://picsum.photos/200/300/?random&' + i;
  imgContainer.appendChild(img);

  observer.observe(img);
}
