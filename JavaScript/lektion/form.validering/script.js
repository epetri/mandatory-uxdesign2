function validate(submit) {                                           // Skapa en funktion
  let name = document.querySelector('input[name="name"]');            // Hämta ut name input-fältet
  if (name.value === ""){                                             //Skapa en condition "om strängen är tom..."
    alert("Du måste ange namn");                                      //... då visas detta meddelande
    submit.preventDefault();                                          // anger man fel så skickas informationen inte vidare
  }

  let age = document.querySelector('input[name="age"]');              // hämta ut age input-fältet
  age = parseInt(age.value);                                          // gör om stärng till siffror
  if (isNaN(age) || age <= 0 || age >= 100){                          // nämner conditions
    alert("please insert your correct age");                          // anger du fel visas detta meddelande
    submit.preventDefault();                                          // anger man fel så skickas informationen inte vidare
}

 let username = document.querySelector('input[name="username"]');     //hämta ut username input-fältet
 if (username.value === ""){                                          //skapa en condition "om strängen är tom..."
   alert("pls insert unsername");                                     //...då visas detta meddelande
   submit.preventDefault();                                           // anger man fel så skickas informationen inte vidare
 }

let password = document.querySelector('input[name="password"]');      // AND SO ON
if (password.value === "" || password.value.length <= 6 ){
  alert ("password must contain atleast 7 letters")
  submit.preventDefault();
}

let passwordrepeat = document.querySelector('input[name="passwordrepeat"]');
if (passwordrepeat.value != password.value){
  alert ("incorrect password")
  submit.preventDefault();
}
}


let form = document.querySelector('form');
form.addEventListener('submit', validate);
