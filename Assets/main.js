
//nav.php

const navigationContainerMobile = document.getElementById('navigationContainerMobile');
const buttonNavMenu             = document.getElementById('buttonNavMenu');
const buttonNavMenuBack         = document.getElementById('buttonNavMenuBack');



function buttonNav(){

  navigationContainerMobile.style.display = "flex";
  navigationContainerMobile.style.left    = "-100%";
  buttonNavMenu.style.display             = "none";
  buttonNavMenuBack.style.display         = "flex";

}


function buttonNavBack(){

  navigationContainerMobile.style.display = "none";
  buttonNavMenu.style.display             = "flex";
  buttonNavMenu.style.animation           = "buttonBackAnimation 4s";
  buttonNavMenuBack.style.display         = "none";

}

//home.php

const title = document.getElementById('section1H1Title');
const letters = [...document.querySelectorAll('h1 span')];



title.addEventListener("mouseenter", handleLetters);
title.addEventListener("mouseleave", handleLetters);



let isAnimatingIn = false; 
let calledOut = false;
let animOpened = false;


function handleLetters(){

    if(animOpened){
        animOut();
        animOpened = false;
        return;
    }


    if(isAnimatingIn){
        calledOut = true;
        return;
    }
    isAnimatingIn = true;


    const animPromise = new Promise((resolve) =>{
        animIn();
        setTimeout(()=> {
            resolve()
        }, 750)
    })
    animPromise.then(() => {
        isAnimatingIn = false;

        if(calledOut){
        animOut();
        calledOut = false;        
        } else if(!calledOut){
            animOpened = true;
        }

    })
}

function animIn(){
    anime({
        targets: 'h1 span',
        translateX: function(){
            return anime.random(-250, 250)
        },
        translateY: function(){
            return anime.random(-250, 250)
        },
        translateZ: function(){
            return anime.random(-2000, 750)
        },
        rotate: function(){
            return anime.random(-250, 250)
        },
        easing: 'easeOutCirc',
        duration: 750
    })
}


function animOut(){
    anime({
        targets: '#section1H1Title span',
        translateX:0,
        translateY:0,
        translateZ:0,
        rotate:0,
        easing: 'easeInQuad',
        duration: 750
    })
}

