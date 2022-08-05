let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let radio0 = document.getElementById('tab-1');
let radio1 = document.getElementById('tab-2');
let radio2 = document.getElementById('tab-3');
let radio3 = document.getElementById('tab-4');
let image0 = document.getElementById('tab-icon-1');
let image1 = document.getElementById('tab-icon-2');
let image2 = document.getElementById('tab-icon-3');
let image3 = document.getElementById('tab-icon-4');

image0.src = '../img/Icon_Batleground_On.png';
image1.src = '../img/Icon_Play.png';
image2.src = '../img/Icon_Tech.png';
image3.src = '../img/Icon_Immutable.png';

let radio0selected = true, radio1selected = false, radio2selected = false, radio3selected = false;

var myCarousel = document.querySelector('#carouselExampleFade')
var carousel = new bootstrap.Carousel(myCarousel);

option0.addEventListener("click", function () {
    carousel.to('0');
});

option1.addEventListener("click", function () {
    carousel.to('1');
});

option2.addEventListener("click", function () {
    carousel.to('2');
});

option3.addEventListener("click", function () {
    carousel.to('3');
});

option0.addEventListener("mouseenter", function () {
    if(!radio0selected)
        image0.src = '../img/Icon_Batleground_On.png';
});

option1.addEventListener("mouseenter", function () {
    if(!radio1selected)
        image1.src = '../img/Icon_Play_On.png';

});

option2.addEventListener("mouseenter", function () {
    if(!radio2selected)
        image2.src = '../img/Icon_Tech_On.png';

});

option3.addEventListener("mouseenter", function () {
    if(!radio3selected)
        image3.src = '../img/Icon_Immutable_On.png';

});

option0.addEventListener("mouseleave", function () {
    if(!radio0selected)
        image0.src = '../img/Icon_Batleground.png';

});

option1.addEventListener("mouseleave", function () {
    if(!radio1selected)
        image1.src = '../img/Icon_Play.png';

});

option2.addEventListener("mouseleave", function () {
    if(!radio2selected)
        image2.src = '../img/Icon_Tech.png';

});

option3.addEventListener("mouseleave", function () {
    if(!radio3selected)
        image3.src = '../img/Icon_Immutable.png';

});

myCarousel.addEventListener('slide.bs.carousel', function (e) {
    switch (e.from) {
        case 0: {
            radio0.checked = false;
            image0.src = '../img/Icon_Batleground.png';
            radio0selected = false;
        } break;
        case 1: {
            radio1.checked = false;
            image1.src = '../img/Icon_Play.png';
            radio1selected = false;
        } break;
        case 2: {
            radio2.checked = false;
            image2.src = '../img/Icon_Tech.png';
            radio2selected = false;
        } break;
        case 3: {
            radio3.checked = false;
            image3.src = '../img/Icon_Immutable.png';
            radio3selected = false;
        } break;
    }
    switch (e.to) {
        case 0: {
            image0.src = '../img/Icon_Batleground_On.png';
            radio0.checked = true;
            radio0selected = true;
        } break;
        case 1: {
            radio1.checked = true;
            image1.src = '../img/Icon_Play_On.png';
            radio1selected = true;
        } break;
        case 2: {
            radio2.checked = true;
            image2.src = '../img/Icon_Tech_On.png';
            radio2selected = true;
        } break;
        case 3: {
            radio3.checked = true;
            image3.src = '../img/Icon_Immutable_On.png';
            radio3selected = true;
        } break;
    }

});