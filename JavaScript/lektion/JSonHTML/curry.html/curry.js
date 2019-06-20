var hello = document.getElementById('no-text');
  hello.textContent = 'Hello World!';

var deleted = document.querySelectorAll('.remove-me');
  for (var i =0; i<deleted.length; i++){
    deleted[i].parentElement.removeChild(deleted[i]);
  }

hello.setAttribute('style','color:red;');


/*
    ====== Ett annat sätt att lösa skiten på ====

    for (var i =0; i<deleted.length; i++){
    var element = deleted[i];
    var badText = document.querySelector('main');
    badText.removeChild(element);
*/
