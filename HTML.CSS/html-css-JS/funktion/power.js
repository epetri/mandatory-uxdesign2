function powers(array, power){
  for(var i = 0; i < array.length; i++){
    var num = array[i];
    if(power === 0){
      array[i] = 1;
    } else if(power === 1) {
      break;
    } else {
      for(var j = 2; j <= power; j++){
      num *= array[i];
    }
    array[i] = num;
    }
  }

  return array;
}
console.log(powers([1,2,3], 5));

//en annan lösning

function powers(array, power){
 for(var i = 0; i < array.length; i++){
   array[i] = Math.pow(array[i], power);
 }
 return array;
}
console.log(powers([1,2,3], 2));
