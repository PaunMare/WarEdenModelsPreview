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

let accordionItem0Enable = true;
let accordionItem1Enable = false;
let accordionItem2Enable = false;
let accordionItem3Enable = false;
let accordionItem4Enable = false;

let accordionItem0Hovering = false;
let accordionItem1Hovering = false;
let accordionItem2Hovering = false;
let accordionItem3Hovering = false;
let accordionItem4Hovering = false;


let endingLetter;

function assignImages(endingLetter){
    
roadmapImage0.src = './img/Roadmap1_On' + endingLetter + '.png';
roadmapImage1.src = './img/Roadmap2_Off' + endingLetter + '.png';;
roadmapImage2.src = './img/Roadmap3_Off' + endingLetter + '.png';;
roadmapImage3.src = './img/Roadmap4_Off' + endingLetter + '.png';;
roadmapImage4.src = './img/Roadmap5_Off' + endingLetter + '.png';;

roadmapImage0.addEventListener('mouseover',function(){
    accordionItem0Hovering = true;
    if(!accordionItem0Enable)
        roadmapImage0.src = './img/Roadmap1_Hover' + endingLetter + '.png';;
});

roadmapImage1.addEventListener('mouseover',function(){
    accordionItem1Hovering = true;
    if(!accordionItem1Enable)
        roadmapImage1.src = './img/Roadmap2_Hover' + endingLetter + '.png';
});

roadmapImage2.addEventListener('mouseover',function(){
    accordionItem2Hovering = true;
    if(!accordionItem2Enable)
        roadmapImage2.src = './img/Roadmap3_Hover' + endingLetter + '.png';
});

roadmapImage3.addEventListener('mouseover',function(){
    accordionItem3Hovering = true;
    if(!accordionItem3Enable)
        roadmapImage3.src = './img/Roadmap4_Hover' + endingLetter + '.png';
});

roadmapImage4.addEventListener('mouseover',function(){
    accordionItem4Hovering = true;
    if(!accordionItem4Enable)
        roadmapImage4.src = './img/Roadmap5_Hover' + endingLetter + '.png';
});

roadmapImage0.addEventListener('mouseleave',function(){
    accordionItem0Hovering = false;
    if(!accordionItem0Enable)
        roadmapImage0.src = './img/Roadmap1_Off' + endingLetter + '.png';
});

roadmapImage1.addEventListener('mouseleave',function(){
    accordionItem1Hovering = false;
    if(!accordionItem1Enable)
        roadmapImage1.src = './img/Roadmap2_Off' + endingLetter + '.png';
});
roadmapImage2.addEventListener('mouseleave',function(){
    accordionItem2Hovering = false;
    if(!accordionItem2Enable)
        roadmapImage2.src = './img/Roadmap3_Off' + endingLetter + '.png';
});
roadmapImage3.addEventListener('mouseleave',function(){
    accordionItem3Hovering = false;
    if(!accordionItem3Enable)
        roadmapImage3.src = './img/Roadmap4_Off' + endingLetter + '.png';
});
roadmapImage4.addEventListener('mouseleave',function(){
    accordionItem4Hovering = false;
    if(!accordionItem4Enable)
        roadmapImage4.src = './img/Roadmap5_Off' + endingLetter + '.png';
});

accordionItem0.addEventListener("show.bs.collapse",function(){
    roadmapImage0.src = './img/Roadmap1_On' + endingLetter + '.png';
    accordionItem0Enable = true;
})
accordionItem0.addEventListener("hide.bs.collapse",function(){
    accordionItem0Enable = false;
    roadmapImage0.src = './img/Roadmap1_Off' + endingLetter + '.png';

    if(accordionItem0Hovering)
        roadmapImage0.src = './img/Roadmap1_Hover' + endingLetter + '.png';
})

accordionItem1.addEventListener("show.bs.collapse",function(){
    roadmapImage1.src = './img/Roadmap2_On' + endingLetter + '.png';
    accordionItem1Enable = true;
})
accordionItem1.addEventListener("hide.bs.collapse",function(){
    accordionItem1Enable = false;
    roadmapImage1.src = './img/Roadmap2_Off' + endingLetter + '.png';

    if(accordionItem1Hovering)
        roadmapImage1.src = './img/Roadmap2_Hover' + endingLetter + '.png';
})

accordionItem2.addEventListener("show.bs.collapse",function(){
    roadmapImage2.src = './img/Roadmap3_On' + endingLetter + '.png';
    accordionItem2Enable = true;
})
accordionItem2.addEventListener("hide.bs.collapse",function(){
    accordionItem2Enable = false;
    roadmapImage2.src = './img/Roadmap3_Off' + endingLetter + '.png';

    if(accordionItem2Hovering)
        roadmapImage2.src = './img/Roadmap3_Hover' + endingLetter + '.png';
})

accordionItem3.addEventListener("show.bs.collapse",function(){
    roadmapImage3.src = './img/Roadmap4_On' + endingLetter + '.png';
    accordionItem3Enable = true;
})
accordionItem3.addEventListener("hide.bs.collapse",function(){
    accordionItem3Enable = false;
    roadmapImage3.src = './img/Roadmap4_Off' + endingLetter + '.png';

    if(accordionItem3Hovering)
        roadmapImage3.src = './img/Roadmap4_Hover' + endingLetter + '.png';
})

accordionItem4.addEventListener("show.bs.collapse",function(){
    roadmapImage4.src = './img/Roadmap5_On' + endingLetter + '.png';
    accordionItem4Enable = true;
})
accordionItem4.addEventListener("hide.bs.collapse",function(){
    accordionItem4Enable = false;
    roadmapImage4.src = './img/Roadmap5_Off' + endingLetter + '.png';

    if(accordionItem4Hovering)
        roadmapImage4.src = './img/Roadmap5_Hover' + endingLetter + '.png';
})
}

function checkForResize(){
    if(window.innerWidth > window.innerHeight){
        if(window.innerWidth > 800){
            endingLetter = "L";
        }else if(window.innerWidth > 400){
            endingLetter = "M";
        }
    }else{
        if(window.innerWidth > 800){
            endingLetter = "L";
        }else if(window.innerWidth > 400){
            endingLetter = "M";
        }else{
            endingLetter = "S";
        }
    }
    assignImages(endingLetter);
}

checkForResize();

window.addEventListener('resize', checkForResize);