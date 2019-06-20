function longestWord(sentence) {
  var arr = sentence.split (" ");
  var results = "";
  for(var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if(results.length < word.length){
      results = word;
   }
  }
  return results;
}
console.log(longestWord("I love JavaScript"));


function reverseString(str) {
  return str.split ("").reverse().join("");
}
console.log(reverseString("hello"));


function reverseString(str){
 var result = "";
 var arr = str.split("").reverse();
 for(var i = 0; i < arr.length; i++){
   result += arr[i];
 }
 return result
}

console.log(reverseString("hello"));


//Viktors lösning

function longestWord(sentence){
  var words = sentence.split(" ");
  console.log(words);
  var longestword = "";
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    if (word.length > longestword.length){
      longestword = word;
    }
  }
  return = longestword;
}

var longest = longestWord("I love JavaScript");
console.log(longest);
