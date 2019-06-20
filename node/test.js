let obj = {
  name: 'Emma',
  age: 25,
  mood: 'happy',
};

module.exports = obj;   //i node måste man skriva detta för den kod vi vill exportera
                        // lätt för att dela kod. SE script.js filen i denna mapp där vi vill importera denna kod



/*===== för att exportera flera objekt samtidigt gör man såhär för att slippa
 exportera flera olika saker. Samla sen allt i ett objekt.
let foo = {
  name: 'Emma',
};

let bar = {
  name: 'Joanna',
};

let exportObj = {
  foo: foo,
  bar: bar,
}

module.exports = exportObj;
*/
