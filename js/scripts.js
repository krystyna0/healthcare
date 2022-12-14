$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:65,
        dots:true,
        center:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1,
                margin:0,
            },

            1000:{
                items:3,
            }
        }
    });

    $('.slide-two').owlCarousel({
        loop:true,
        margin:33,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1,
                margin:10,
            },

            1026:{
                items:3,
            }
        }
    });
});


let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(95%)') {
        nav.style.transform = 'translateX(95%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});