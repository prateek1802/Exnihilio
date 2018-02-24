$(document).ready(function(){
    $('#loading').delay(500).fadeOut(500,function(){
        $('#head').fadeIn(600);
        $('#content').fadeIn(300);
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

//Hamburger Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



var $body = $('#about'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		var sxPos = e.pageX / $panel.width() * 100 - 100;
		var syPos = e.pageY / $panel.height() * 100 - 100;
		TweenMax.to($pContent, 2, {
			rotationY: 0.03 * sxPos,
			rotationX: -0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -400",
			ease: Expo.easeOut
		});
		TweenMax.to($img, 2, {
			rotationY: 0.03 * sxPos,
			rotationX: -0.03 * syPos,
			transformPerspective: 500,
			transformOrigin: "center center -200",
			ease: Expo.easeOut
		});
	});
};

initTilt();

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},9000);


console.clear();
var mouse_Scroll = document.getElementById('mouse-scroll');
var mouse_Scroll_Str = mouse_Scroll.getTotalLength();

mouse_Scroll.setAttribute('stroke-dashoffset', mouse_Scroll_Str);
mouse_Scroll.setAttribute('stroke-dasharray', mouse_Scroll_Str);



//Typography effect for homepage
$(function(){
    $(".write").typed({
        strings: ["SMARTER", "ENGAGING", "OUTSTANDING"],
        typeSpeed: 0.7,
        loop: !0, // did the trick for repeating
        startDelay: 1000,
        backDelay: 1000,
    });
    $(".weare").typed({
        strings: ["We create voices which stand in noise"],
        typeSpeed: 0.7,
        loop: !0, // did the trick for repeating
        startDelay: 1000,
        backDelay: 1000,
    });
});

//About Fades in Scrolling


