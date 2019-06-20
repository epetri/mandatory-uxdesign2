let tableData = [
{name: 'Simba', animal: 'Lion'},
{name: 'Timon', animal: 'Meerkat'},
{name: 'Pumba', animal: 'warthog'}
]

let animal, name;
$('thead').append('<tr><th>Name</th><th>Animal</th></tr>')
for(let x of tableData){
  for(let key in x){
    if(key === "name"){
      name = x[key];
    } else {
      animal = x[key];
    }
  }
  $("tbody").append("<tr><td>" + name + " </td><td>" + animal + "</td></tr>");
}

$('td, th').css({
  'border': '5px dotted pink',
  'font-size': '20px',
  'color': 'lightblue',
  'padding': '20px',
});

$('table').css({
  'margin': '200px 426px ',
  'border-collapse': 'collapse',

});
