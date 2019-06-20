/*Write a function alternate that combines two lists by alternatingly taking elements.*/

function arr(x, y){
  let oneArr = [];
  if (x.length != y.length){
    throw new Error('unmatching length');
    return;
  }
  for(let i = 0; i < x.length; i++){
    let value = x[i];
    let value2 = y[i];
    oneArr.push(value);
    oneArr.push(value2);

  }
  return oneArr;
}

console.log(arr([1, 2, 3], ['a', 'b', 'c']));
