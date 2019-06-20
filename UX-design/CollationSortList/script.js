function sort() {
  let animals = ['kanin', 'ko', 'känguru', 'koala']
  let ul = document.querySelector('ul');
  let option = document.querySelector('select').value;
  ul.textContent = '';

  animals.sort(function(a, b) {
    return a.localeCompare(b, option);
  });

  for(let animal of animals){
    let li = document.createElement('li');
    li.textContent = animal;
    ul.appendChild(li);
  }

  if(option === 'val'){
    ul.textContent = '';
  }
}

sort();
document.querySelector('select').addEventListener('change', sort);
