const router = new Navigo(null, true, '#');
let main = document.querySelector('main');

router                              //Här skapas en router
 .on('/about', aboutPage)
 .on('/contact', contactPage)
 .on('*', homePage)

 .resolve();


 function homePage(){
   main.innerHTML = "";
   let h1 = document.createElement('h1');
   h1.textContent = 'HomePage';
   main.style.backgroundColor = 'red';
   main.appendChild(h1)
 }

 function aboutPage(){
   main.innerHTML = "";
   let h1 = document.createElement('h1');
   h1.textContent = 'aboutPage';
   main.style.backgroundColor = 'limegreen';
   main.appendChild(h1)
 }

 function contactPage(){
   let newA = document.createElement('a');  //skapa en ny tagg, så man får be routern att uppdatera sig
   newA.setAttribute('href', '/about')
   newA.textContent = 'new Link';
   newA.setAttribute('data-navigo', '');



   main.innerHTML = "";
   let h1 = document.createElement('h1');
   h1.textContent = 'contactPage';
   main.style.backgroundColor = 'lightblue';

   main.appendChild(newA);
   main.appendChild(h1)

      router.updatePageLinks();  //uppdatera routern
 }
