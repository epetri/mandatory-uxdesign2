#!/usr/bin/env node

let color = require('cli-color');


  for (let i = 0; i <= 100; i++){
    if(i % 2 === 0) {
      console.log(color.red(i));
    } else {
      console.log(color.blue(i));
    }
  }


console.log(color.red.bold(process.argv[2]));
