let roadmapImage0 = document.getElementById('accordion-img-0');
let roadmapImage1 = document.getElementById('accordion-img-1');
let roadmapImage2 = document.getElementById('accordion-img-2');
let roadmapImage3 = document.getElementById('accordion-img-3');
let roadmapImage4 = document.getElementById('accordion-img-4');

let accordionItem0 = document.getElementById('accordion-item-0');
let accordionItem1 = document.getElementById('accordion-item-1');
let accordionItem2 = document.getElementById('accordion-item-2');
let accordionItem3 = document.getElementById('accordion-item-3');
let accordionItem4 = document.getElementById('accordion-item-4');

let accordionItem0Enable = false;
let accordionItem1Enable = false;
let accordionItem2Enable = false;
let accordionItem3Enable = false;
let accordionItem4Enable = false;

let accordionItem0Hovering = false;
let accordionItem1Hovering = false;
let accordionItem2Hovering = false;
let accordionItem3Hovering = false;
let accordionItem4Hovering = false;

roadmapImage0.src = './img/Roadmap1_Off.png';
roadmapImage1.src = './img/Roadmap2_Off.png';
roadmapImage2.src = './img/Roadmap3_Off.png';
roadmapImage3.src = './img/Roadmap4_Off.png';
roadmapImage4.src = './img/Roadmap5_Off.png';

roadmapImage0.addEventListener('mouseover',function(){
    accordionItem0Hovering = true;
    if(!accordionItem0Enable)
        roadmapImage0.src = './img/RoadMap1_Hover.png';
});

roadmapImage1.addEventListener('mouseover',function(){
    accordionItem1Hovering = true;
    if(!accordionItem1Enable)
        roadmapImage1.src = './img/RoadMap2_Hover.png';
});

roadmapImage2.addEventListener('mouseover',function(){
    accordionItem2Hovering = true;
    if(!accordionItem2Enable)
        roadmapImage2.src = './img/RoadMap3_Hover.png';
});

roadmapImage3.addEventListener('mouseover',function(){
    accordionItem3Hovering = true;
    if(!accordionItem3Enable)
        roadmapImage3.src = './img/RoadMap4_Hover.png';
});

roadmapImage4.addEventListener('mouseover',function(){
    accordionItem4Hovering = true;
    if(!accordionItem4Enable)
        roadmapImage4.src = './img/RoadMap5_Hover.png';
});

roadmapImage0.addEventListener('mouseleave',function(){
    accordionItem0Hovering = false;
    if(!accordionItem0Enable)
        roadmapImage0.src = './img/Roadmap1_Off.png';
});

roadmapImage1.addEventListener('mouseleave',function(){
    accordionItem1Hovering = false;
    if(!accordionItem1Enable)
        roadmapImage1.src = './img/Roadmap2_Off.png';
});
roadmapImage2.addEventListener('mouseleave',function(){
    accordionItem2Hovering = false;
    if(!accordionItem2Enable)
        roadmapImage2.src = './img/Roadmap3_Off.png';
});
roadmapImage3.addEventListener('mouseleave',function(){
    accordionItem3Hovering = false;
    if(!accordionItem3Enable)
        roadmapImage3.src = './img/Roadmap4_Off.png';
});
roadmapImage4.addEventListener('mouseleave',function(){
    accordionItem4Hovering = false;
    if(!accordionItem4Enable)
        roadmapImage4.src = './img/Roadmap5_Off.png';
});

accordionItem0.addEventListener("show.bs.collapse",function(){
    roadmapImage0.src = './img/RoadMap1_On.png';
    accordionItem0Enable = true;
})
accordionItem0.addEventListener("hide.bs.collapse",function(){
    accordionItem0Enable = false;
    roadmapImage0.src = './img/RoadMap1_Off.png';

    if(accordionItem0Hovering)
        roadmapImage0.src = './img/RoadMap1_Hover.png';
})

accordionItem1.addEventListener("show.bs.collapse",function(){
    roadmapImage1.src = './img/RoadMap2_On.png';
    accordionItem1Enable = true;
})
accordionItem1.addEventListener("hide.bs.collapse",function(){
    accordionItem1Enable = false;
    roadmapImage1.src = './img/RoadMap2_Off.png';

    if(accordionItem1Hovering)
        roadmapImage1.src = './img/RoadMap2_Hover.png';
})

accordionItem2.addEventListener("show.bs.collapse",function(){
    roadmapImage2.src = './img/RoadMap3_On.png';
    accordionItem2Enable = true;
})
accordionItem2.addEventListener("hide.bs.collapse",function(){
    accordionItem2Enable = false;
    roadmapImage2.src = './img/RoadMap3_Off.png';

    if(accordionItem2Hovering)
        roadmapImage2.src = './img/RoadMap3_Hover.png';
})

accordionItem3.addEventListener("show.bs.collapse",function(){
    roadmapImage3.src = './img/RoadMap4_On.png';
    accordionItem3Enable = true;
})
accordionItem3.addEventListener("hide.bs.collapse",function(){
    accordionItem3Enable = false;
    roadmapImage3.src = './img/RoadMap4_Off.png';

    if(accordionItem3Hovering)
        roadmapImage3.src = './img/RoadMap4_Hover.png';
})

accordionItem4.addEventListener("show.bs.collapse",function(){
    roadmapImage4.src = './img/RoadMap5_On.png';
    accordionItem4Enable = true;
})
accordionItem4.addEventListener("hide.bs.collapse",function(){
    accordionItem4Enable = false;
    roadmapImage4.src = './img/RoadMap5_Off.png';

    if(accordionItem4Hovering)
        roadmapImage4.src = './img/RoadMap5_Hover.png';
})