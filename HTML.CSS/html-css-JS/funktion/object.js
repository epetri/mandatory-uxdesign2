function logPerson (myObject){
  var str = "name: "+ myObject.name + " age: "+ myObject.age;
  if (typeof myObject.name==="string" && Number(myObject.age)){
  console.log(str);
  } else {
    console.log("error!");
  }
}

   var info = {
     name: "Emma",
     age: 25,
   }

   var info2 ={
     name: "Abella",
     age: 22,
   }

   var info3 = {
     name: "Ogge",
     age: 26,
   }
   logPerson(info);
   logPerson(info2);
   logPerson(info3);



   console.log(info.name + " is " + info.age + " years old");
