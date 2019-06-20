function minimum(arr){
  var min = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
var array1 = [2, 3, 1];
console.log(minimum(array1));


function maximum(arr){
  var min = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > min){
      min = arr[i];
    }
  }
  return min;
}
var array1 = [2, 3, 1];
console.log(maximum(array1));
