$(document).ready(function(){
    $('.loading').delay(200).fadeOut(500,function(){
        $('.navbar').fadeIn(1500);
        $('.container-fluid').fadeIn(300);
    })
});

//Scrolling from one div to another
var scrolling = false;
var currentPos = 0;

    function scrollUp(){
        if(!scrolling && currentPos > 0 ){
            scrolling=true;
            currentPos --;
            var scrollToElement = $('.scrollTo')[currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 500, function(){
                scrolling = false;
            });      
        }
    }   

    function scrollDown(){   
        if(!scrolling && currentPos < $('.scrollTo').length-1  ){
            scrolling=true;
            currentPos ++;
            var scrollToElement = $('.scrollTo')[currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 500,function(){
                scrolling = false;
            }); 
        }
    }    

    $(document).ready(function() {

        // Get the current position on load

        for( var i = 0; i < $('.scrollTo').length; i++){
            var elm = $('.scrollTo')[i];

            if( $(document).scrollTop() >= $(elm).offset().top ){
                currentPos = i;
            }
        }

        $(document).bind('DOMMouseScroll', function(e){
            if(e.originalEvent.detail > 0) {
                scrollDown();
            }else {
                scrollUp();   
            }
            return false;
        });

        $(document).bind('mousewheel', function(e){
            if(e.originalEvent.wheelDelta < 0) {
                scrollDown();
            }else {
                scrollUp();     
            }
            return false;
        });
    });

//Smooth Scrolling on click on the Navbar
$(document).on('click', 'a[href^="#home"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).on('click', 'a[href^="#about"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).on('click', 'a[href^="#contact"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Typography effect for homepage
$(function(){
    $(".write").typed({
        strings: ["Creativity", "Sincerity", "Ethics", "Professionalism"],
        typeSpeed: 0.5,
        loop: !0, // did the trick for repeating
        startDelay: 1000,
        backDelay: 1000,
    });
});


//Hamburger Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} 
