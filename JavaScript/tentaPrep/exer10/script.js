/*I index.html ligger det en struktur för att skapa tabbar.
Lägg på JS som döljer alla tabs-single-content divar som inte ska visas.
Varje .tabs-selector är matchad med en .tabs-single-content med hjälp av data-tab och data-tabid.
När vi trycker på en .tabs-selector ska dessa matchande .tabs-single-content visas.
 .tabs-selectorn ska också få classen .selected och vara ensam om att ha den.*/



 function openTab() {
   let content = document.querySelectorAll('.tabs-single-content');
   for(let i = 0; i < content.length; i++){
     content[i].style.display = 'none';
   }
   let tabSelect = document.querySelectorAll('.tabs-selector')
   for(let i = 0; i < tabSelect.length; i++){


     tabSelect[i].addEventListener('click', function(event){
       openTab();
       for(let i = 0; i <content.length; i++){
         if(event.target.dataset.tab === content[i].dataset.tabid){
           content[i].style.display = 'block';
        }
      }
    });
  }
}

openTab();
