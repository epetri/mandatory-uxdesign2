/*Write a function logAge that takes a single object as argument.
Check if the age key is set on the object, and if it's then log its value to
the console. */
let object = {
  name: "Smith",
  age: 54,
};

function logAge(object){
  console.log(object.age);
}

logAge(object);
