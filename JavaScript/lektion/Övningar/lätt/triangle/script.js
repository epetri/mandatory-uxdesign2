/* Write a loop that makes seven calls to console.log to output the following triangle: */
function triangle(){
  let hashtag = "";
  for(let i = 0; i < 7; i++){
    hashtag += '#';
    console.log(hashtag);
  }
}

triangle();

for (let line = "*"; line.length < 8; line += "*")
  console.log(line);
