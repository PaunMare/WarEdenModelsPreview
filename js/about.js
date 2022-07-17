let option0 = document.getElementById('option1');
let option1 = document.getElementById('option2');
let option2 = document.getElementById('option3');
let option3 = document.getElementById('option4');
let aboutSection = document.getElementById('about-section');

var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(myCarousel);

option0.addEventListener("click", function(){
    carousel.to('0');
});

option1.addEventListener("click", function(){
    carousel.to('1');
});

option2.addEventListener("click", function(){
    carousel.to('2');
});

option3.addEventListener("click", function(){
    carousel.to('3');
});
