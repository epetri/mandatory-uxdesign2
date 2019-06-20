/*Write a function concatenate that takes two arrays as arguments.
The function should return the two arrays merged into a single array.*/

function arrays(x, y){
   let i = x.concat(y);
   return i;
}

let x = [1, 2, 3];
let y = [4, 5, 6];
console.log( arrays(x, y) );



/*
function concatenate(x, y){
 let a = x.concat(y)
 return a;
}


console.log(concatenate([1, 2, 3], [4, 5, 6]));
*/
