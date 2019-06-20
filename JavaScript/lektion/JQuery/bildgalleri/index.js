$("div.dot").css({
  "background-color": "white",
  "hight": "20px",
  "width": "20px",
});


$('img').on('click', function(e) {
 let clickedImg = e.target;                 //Bestäm vilken bild som det klickas på
 let src = clickedImg.getAttribute('src');  //Hämta innehållet från just den bilden, spara i src
 let bigImg = $('.big img').attr('src');    //Hämta innehållet från den stora bilden, spara i bigImg
 $('div img:first').attr('src', src);       //Byter innehållet på den första bilden med den du klickade på
 $('.big img').fadeOut(0);                  //Animation
 $('.big img').fadeIn('slow');              //Animation
 $(e.target).attr('src', bigImg);           //Byter innehållet på den klickade bilden med den stora
});


$("div").width("600px");
$("body").css("background-color","black");
$("div.big img").css({
    "border-radius": "20px",
    "width": "97%",
  });
$("div.small img").css({
  "border-radius": "20px",
  "opacity": "0.5",
  "width": '19%'
});
