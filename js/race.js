import Splide from '@splidejs/splide';

let humanIcon = document.getElementById('race-human');
let dwarfIcon = document.getElementById('race-dwarf');
let elfIcon = document.getElementById('race-elf');

let slider = document.getElementById('splide-race');

slider = new Splide('#splide-race',{
    padding: '30%',
    arrows: false,
    pagination: false
}).mount();

humanIcon.addEventListener("click", function(){
    slider.go(0);
})

dwarfIcon.addEventListener("click", function(){
    slider.go(1);
})

elfIcon.addEventListener("click", function(){
    slider.go(2);
})