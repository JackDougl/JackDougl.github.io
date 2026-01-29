'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', goto);
}

function swipe(e){
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(e.currentTarget.classList.contains('left')) {
        if(currentIndex===0) {
            nextIndex = CAROUSEL_SIZE - 1;
        } else {
            nextIndex = currentIndex - 1;
        }
    } else {
        if(currentIndex===CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');

    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

function goto(e){
    if(e.currentTarget.classList.contains('active')) {
        return;
    } else {
        const currentCarouselItem = document.querySelector('.carousel-item.active');
        const currentIndex = carouselItems.indexOf(currentCarouselItem);
        const nextItem = e.currentTarget;
        const nextIndex = navItems.indexOf(nextItem);

        carouselItems[nextIndex].classList.add('active');
        navItems[nextIndex].classList.add('active');
        currentCarouselItem.classList.remove('active');
        navItems[currentIndex].classList.remove('active');
    }
}

const root = document.documentElement;

const buttons = Array.from(document.querySelectorAll('.accordion-label'));
buttons.forEach(e=>{
    e.addEventListener('click', buttonClick);
});

function buttonClick(e) {
    const btn = e.currentTarget;
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
    for(let i = 0; i < buttons.length; i++) {
        if((buttons[i] !== btn) && (buttons[i].classList.contains('open'))) {
            buttons[i].classList.toggle('open');
            buttons[i].nextElementSibling.classList.toggle('open');
        }
    }
}