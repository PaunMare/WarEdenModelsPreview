import Splide from '@splidejs/splide';

let sliderIcons = document.getElementsByClassName('raceIcon');
let slider = document.getElementById('splide-race');

slider = new Splide('#splide-race',{
    padding: '10%',
    arrows: false,
    pagination: false,
}).mount();

for (let index = 0; index < sliderIcons.length; index++) {
    const element = sliderIcons[index];
    const raceName = element.id.split('race-');

    element.src = "../img/Icons/race/Icon_" + raceName[1] + "_Off.png";

    element.addEventListener("click", function(){
        slider.go(index);
        clearImages(slider.index);
        element.src = "../img/Icons/race/Icon_" + raceName[1] + "_On.png";
    })

    element.addEventListener("mouseover", function(){
        if(slider.index != index)
        element.src = "../img/Icons/race/Icon_" + raceName[1] + "_Hover.png";;
    })

    element.addEventListener("mouseleave", function(){
        if(slider.index != index)
        element.src = "../img/Icons/race/Icon_" + raceName[1] + "_Off.png";
    })  
}

sliderIcons[0].src = "../img/Icons/race/Icon_Human_On.png";

function clearImages(slideIndex){
    for (let index = 0; index < sliderIcons.length; index++) {
        const element = sliderIcons[index];
        const raceName = element.id.split('race-');
        if(index != slideIndex)
            element.src = "../img/Icons/race/Icon_" + raceName[1] + "_Off.png";
    }
}

slider.on( 'move', function () {
    clearImages(slider.index);
    const raceName = sliderIcons[slider.index].id.split('race-');
    sliderIcons[slider.index].src = "../img/Icons/race/Icon_" + raceName[1] + "_ON.png";
} );
