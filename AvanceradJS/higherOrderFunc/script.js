/* 
1. Implementera en funktion som gör samma sak som Array.prototype.forEach
forEach(array, (item) => console.log(item)); */

function forEach( array, func ) {
    for(let i = 0; i < array.length; i++){
        func(array[i]);
    }
}

forEach(['a', 'b', 'c'], (item) => console.log(item));


/*2. Implementera en funktion som gör samma sak som Array.prototype.filter
const evenNumbers = filter(array, (item) => item % 2 === 0);*/

function filter( array, func ){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i])){
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
    return newArray;    
}

filter([10,28,3,49,20], (item)=> (item %2 ===0));


/*3. Implementera en function som gör samma sak som Array.prototype.map
const squares = map(array, (item) => item * item); */

function map( array, func ) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(func(array[i]))
    }
    console.log(newArray);
    return newArray;
}

map([1,2,3], (item) => item * item)

Nej alltdå jag har googlat dethär...