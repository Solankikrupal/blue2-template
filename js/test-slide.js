var slide = document.querySelector('.owl-carousel');
var person = document.querySelectorAll('.person')


var nextBTN = document.querySelector('#leftbtn');
var prevBTN = document.querySelector('#rightbtn');

let counter = 1;

var size = person[0].clientWidth;
console.log(size);
var size1 = person[1].clientWidth;
console.log(size1);
var size2 = person[2].clientWidth;
console.log(size2);

/*slide.style.transform = 'translateX('+(-size * counter)+'px)';*/


nextBTN.addEventListener('click',function(){
  slide.style.transition = 'transform 0.5s ease-in-out';
  slide.style.transform = 'translateX('+((-person[counter].clientWidth - 28.7) * counter)+'px)';
  counter++;
});
prevBTN.addEventListener('click',function(){
  slide.style.transition = 'transform 0.5s ease-in-out';
  slide.style.transform = 'translateX('+((person[counter].clientWidth + 28.7) * counter)+'px)';
  counter++;
});

slide.addEventListener('transitionend',function(){
  console.log(person[counter].class);
});
