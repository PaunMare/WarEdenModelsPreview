let identity0 = document.getElementById('identity0');
let identity1 = document.getElementById('identity1');
let identity2 = document.getElementById('identity2');
let identity3 = document.getElementById('identity3');

var myCarousel1 = document.querySelector('#carouselExampleFade1')
var carousel1 = new bootstrap.Carousel(myCarousel1);

identity0.addEventListener("click", function(){
    carousel1.to('0');
});

identity1.addEventListener("click", function(){
    carousel1.to('1');
});

identity2.addEventListener("click", function(){
    carousel1.to('2');
});

identity3.addEventListener("click", function(){
    carousel1.to('3');
});