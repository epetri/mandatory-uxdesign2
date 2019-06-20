/*var p = document.createElement('p');
p.textContent = 'Apple';
document.body.appendChild(p);

p = document.createElement('p');
p.textContent = 'Pear';
document.body.appendChild(p);

p = document.createElement('p');
p.textContent = 'Banana';
document.body.appendChild(p);
*/

var arr = ['Apple', 'Pear', 'nanana'];
  var header = document.querySelector('header');
  for (var i=0; i<arr.length; i++){
    var p = document.createElement('p');
    p.textContent = arr[i];
    header.appendChild(p);
    p.setAttribute('style','color:blue;');
  }

var grr = ['grape', 'banana', 'pinaple'];
  for (var i=0; i<grr.length;i++){
    var str = document.createElement('p');
    str.textContent = grr[i];
    document.body.appendChild(str);
    str.setAttribute('style', 'color:yellow;');
  }
