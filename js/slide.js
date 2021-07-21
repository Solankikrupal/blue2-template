$('h3.grid-sub-header').hover(function(){
    $('span.circle').toggleClass('circlecolorhover');
    $('.grid-sub-header').toggleClass('grid-sub-headerhover');
});

$('h3.grid-sub-header').click(function(){
    $('span.circle').addClass('circlecoloractive');
    $('.grid-sub-header').addClass('grid-sub-headerhover');
});




$('.grid-info p').slideUp();
var title = document.querySelectorAll('.grid-sub-header').length;


for(var i = 0 ; i < title ; i++ ){

  document.querySelectorAll('.grid-sub-header')[i].onclick = function(){
    $('p.grid-describe').slideToggle();
  }
}
