
function fibonacci(n) {
  if(n === 0){
    return n;
  } else if (n === 1) {
    return n;
  }else if (n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7));

// viktors lösning

function fibonacci(n) {
  if ( n <= 1) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(8));
