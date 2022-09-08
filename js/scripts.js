$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:65,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
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
                items:1
            },

            1000:{
                items:3
            }
        }
    });
});