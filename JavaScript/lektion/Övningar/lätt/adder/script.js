/*Write a program that uses the function prompt to get two different numbers from the user.
You'll then alert the sum of these two numbers. */

let first = parseInt(prompt("please enter a number"));
let second = parseInt(prompt("please enter a second number"));

function add (numbers) {
  return first + second;
}

alert(add());
