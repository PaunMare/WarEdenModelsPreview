import{S as n}from"./splide.esm.cd103580.js";let t=document.getElementById("race-human"),a=document.getElementById("race-dwarf"),c=document.getElementById("race-elf"),e=document.getElementById("splide-race");e=new n("#splide-race",{padding:"30%",arrows:!1,pagination:!1}).mount();t.addEventListener("click",function(){e.go(0)});a.addEventListener("click",function(){e.go(1)});c.addEventListener("click",function(){e.go(2)});
