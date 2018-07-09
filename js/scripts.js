/*-smooth scroll-*/
<script>
	function SmoothScroll(t){var e=this,o=document.documentElement;t=t||window,e.rAF=!1,e.target=0,e.scroll=0,e.animate=function(){e.scroll+=.1*(e.target-e.scroll),Math.abs(e.scroll.toFixed(5)-e.target)<=.47131&&(cancelAnimationFrame(e.rAF),e.rAF=!1),t==window?scrollTo(0,e.scroll):t.scrollTop=e.scroll,e.rAF&&(e.rAF=requestAnimationFrame(e.animate))},t.onmousewheel=function(r){r.preventDefault(),r.stopPropagation();var l=t==window?o.scrollHeight-o.clientHeight:t.scrollHeight-t.clientHeight;e.target+=r.wheelDelta>0?-45a:45,e.target<0&&(e.target=0),e.target>l&&(e.target=l),e.rAF||(e.rAF=requestAnimationFrame(e.animate))},t.onscroll=function(){e.rAF||(e.target=t==window?pageYOffset||o.scrollTop:t.scrollTop,e.scroll=e.target)}}new SmoothScroll;
</script>

/*-SCROLL TEXT ANIMATIONS-*/
function opac() {
	$(".h1fade").css({"opacity": "1"});
}

$(function() {
	setTimeout(opac, 2200);
});

window.addEventListener("beforeunload", function () {
	document.body.classList.add("animate-out");
});




/*-SCROLL TEXT ANIMATIONS-*/
var $animation_elements = $('.finna');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$('.toggle').click(function(e) {
    e.preventDefault();
    $('.toggle-animate').toggleClass('in-view');
});

/*-CAROUSEL-*/
( function($) {

    $(document).ready(function() {

        var s           = $('.slider'),
            sWrapper    = s.find('.slider-wrapper'),
            sItem       = s.find('.slide-caro'),
            btn         = s.find('.slider-link'),
            sWidth      = sItem.width(),
            sCount      = sItem.length,
            slide_date  = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text  = s.find('.slide-text'),
            slide_more  = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount  = 0;

        btn.on('click', function(e) {
            e.preventDefault();

            if( $(this).hasClass('next') ) {

                ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
            } else if ( $(this).hasClass('prev') ) {

                ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
            }
            TweenMax.to(sWrapper, 0.6, {x: '-' + ( sWidth * clickCount ) })

            var fromProperties = {autoAlpha:0, x:'-50', y:'-5'};
            var toProperties = {autoAlpha:1, x:'0', y:'0'};

            TweenLite.fromTo(slide_image, 0, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });

    });


})(jQuery);
$('.overlay').addClass('overlay-blue');

/*-REVEAL ANIMATION-*/

$('.header-toggle').on('click', function() {
    $('.site-header').toggleClass('pushdown');
});

/*-------------------------------------------------------
FLICKITY HOVER
-------------------------------------------------------*/
$("#slider-2").mouseenter(function(){
	$('#slider-1').css({"width": "80%"});
}).mouseleave(function() {
	$('#slider-1').css({"width": "85%"});
});

/*-------------------------------------------------------
HOVER BOX
-------------------------------------------------------*/
var $body = $('body'),
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

/*-------------------------------------------------------
WORKPAGESLIDER
-------------------------------------------------------*/
$(document).ready(function(){

    var i = 0;
    var max = $('#caroussel > li').length - 1;  

    $('#caroussel > li').each(function(i){ 
        var titreNom = $(this).children('.lien').html();
        $('#subnav').append('<a href="#" id="'+i+'">'+titreNom+'<span></span></a>');
    }); 

    $("#caroussel > li").eq(i).addClass('active');
    $('#subnav > a').eq(i).addClass('active');

    $('#next').click(function(e){ 
        (e).preventDefault();  	    
        if( i < max ){   
            i++; 
            $('#caroussel > li').removeClass('active').eq(i).addClass('active');
            $('#subnav > a').removeClass('active').eq(i).addClass('active');
        }
        else{
            i = 0;  
            $('#caroussel > li').removeClass('active').eq(i).addClass('active');
            $('#subnav > a').removeClass('active').eq(i).addClass('active');
        } 
    });

    $('#prev').click(function(e){  
        (e).preventDefault();  	    
        if( i > 0 ){ 
            i--; 
            $('#caroussel > li').removeClass('active').eq(i).addClass('active');
            $('#subnav > a').removeClass('active').eq(i).addClass('active');
        }
        else{
            i = max;  
            $('#caroussel > li').removeClass('active').eq(i).addClass('active');
            $('#subnav > a').removeClass('active').eq(i).addClass('active');
        }  
    }); 

    $('#subnav > a').click(function(e){ 
        (e).preventDefault(); 
        i = $(this).attr('id');
        $(this).addClass('active');
        $('#subnav > a').removeClass('active').eq(i).addClass('active');
        $('#caroussel > li').removeClass('active').eq(i).addClass('active');
    });

});



/*---SLIDEUP SLIDER ---*/
var $activeSlide = $(".active"),
	$homeSlide = $(".slideup"),
	$slideNavPrev = $("#prev"),
	$slideNavNext = $("#next");


function init(){
	TweenMax.set($homeSlide.not($activeSlide), {autoAlpha: 0});
	TweenMax.set($slideNavPrev, {autoAlpha: 0.2});
}

init();

function goToNextSlide(slideOut, slideIn, slideInAll){
	var tl = new TimelineLite(),
		slideOutContent = slideOut.find('.card__content'),
		slideInContent = slideIn.find('.card__content'),
		slideOutImg = slideOut.find('.card__img'),
		slideInImg = slideIn.find('.card__img'),
		index = slideIn.index(),
		size = $homeSlide.length;
	console.log(index);  

	if(slideIn.length !== 0){

		tl
			.set(slideIn, {autoAlpha: 1, className: '+=active'})
			.set(slideOut, {className: '-=active'})
			.to(slideOutContent, 0.65, {y: '+=60px', ease:Power3.easeInOut}, 0)
			.to(slideOutImg, 0.65, {backgroundPosition: 'bottom', ease:Power3.easeInOut}, 0)
			.to(slideInAll, 1, {y: '-=100%', ease:Power3.easeInOut}, 0)
			.fromTo(slideInContent, 0.65, {y: '-=60px'}, {y: 0, ease:Power3.easeInOut}, "-=0.7")
			.fromTo(slideInImg, 0.65, {backgroundPosition: 'top'}, {backgroundPosition: 'bottom', ease:Power3.easeInOut}, "-=0.7")
	}

	TweenMax.set($slideNavPrev, {autoAlpha: 1});

	if(index === size - 1){
		TweenMax.to($slideNavNext, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
	}
};

$slideNavNext.click(function (e) {
	e.preventDefault();

	var slideOut = $('.slideup.active'),
		slideIn = $('.slideup.active').next('.slideup'),
		slideInAll = $('.slideup');

	goToNextSlide(slideOut, slideIn, slideInAll);
});

function goToPreviousSlide(slideOut, slideIn, slideInAll){
	var tl = new TimelineLite(),
		slideOutContent = slideOut.find('.card__content'),
		slideInContent = slideIn.find('.card__content'),
		slideOutImg = slideOut.find('.card__img'),
		slideInImg = slideIn.find('.card__img'),
		index = slideIn.index(),
		size = $homeSlide.length;

	if(slideIn.length !== 0){

		tl
			.set(slideIn, {autoAlpha: 1, className: '+=active'})
			.set(slideOut, {className: '-=active'})
			.to(slideOutContent, 0.65, {y: '-=40px', ease:Power3.easeInOut}, 0)
			.to(slideOutImg, 0.65, {backgroundPosition: 'top', ease:Power3.easeInOut}, 0)
			.to(slideInAll, 1, {y: '+=100%', ease:Power3.easeInOut}, 0)
			.fromTo(slideInContent, 0.65, {y: '+=40px'}, {y: 0, ease:Power3.easeInOut}, "-=0.7")
			.fromTo(slideInImg, 0.65, {backgroundPosition: 'bottom'}, {backgroundPosition: 'top', ease:Power3.easeInOut}, "-=0.7")
	}

	TweenMax.set($slideNavNext, {autoAlpha: 1});

	if(index === 0){
		TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
	}
};

$slideNavPrev.click(function (e) {
	e.preventDefault();

	var slideOut = $('.slideup.active'),
		slideIn = $('.slideup.active').prev('.slideup'),
		slideInAll = $('.slideup');

	goToPreviousSlide(slideOut, slideIn, slideInAll);
});
/*-------------------------------------------------------
REVEAL ANIMATION
-------------------------------------------------------*/
$(document).ready(function() {
    $('.has-animation').each(function(index) {
        $(this).delay($(this).data('delay')).queue(function(){
            $(this).addClass('animate-in');
        });
    });
});

/*-------------------------------------------------------
HOMEPAGE PORTFOLIO
-------------------------------------------------------*/
// buttons
var sliderControl = document.querySelector(".slider-control");

// slides informations
var slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
var slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
var slideCurrent = 0;

sliderControl.addEventListener("click", function(e){
    target = e.target;

    // get next button
    if(target.classList.contains("next")){

        next = e.target,
            prev = next.previousElementSibling,
            nextSlide = slidesArr[slideCurrent + 1],
            slide = slidesArr[slideCurrent];

        slide.classList.add("slide-on");
        slide.classList.remove("text-on");
        nextSlide.classList.add("text-on");

        slideCurrent += 1;

        if(slideCurrent > 0) {
            prev.classList.remove("disabled");
        }

        if(slideCurrent === slidesLength - 1){
            next.classList.add("disabled");
        }
    }

    // get prev button
    if(target.classList.contains("prev")){

        slideCurrent -= 1;

        prev = e.target,
            next = prev.nextElementSibling,
            prevSlide = slidesArr[slideCurrent + 1],
            slide = slidesArr[slideCurrent];

        prevSlide.classList.remove("text-on");
        slide.classList.remove("slide-on");
        slide.classList.add("text-on");

        if(slideCurrent === slidesLength - 2){
            next.classList.remove("disabled");
        }

        if(slideCurrent === 0){
            prev.classList.add("disabled");
        }

    }

});

balapaCop("Image Slider", "#999");


/*
(function() {
    var $slides = document.querySelectorAll('.slide');
    var $controls = document.querySelectorAll('.slider__control');
    var numOfSlides = $slides.length;
    var slidingAT = 1300; // sync this with scss variable
    var slidingBlocked = false;

    [].slice.call($slides).forEach(function($el, index) {
        var i = index + 1;
        $el.classList.add('slide-' + i);
        $el.dataset.slide = i;
    });

    [].slice.call($controls).forEach(function($el) {
        $el.addEventListener('click', controlClickHandler);
    });

    function controlClickHandler() {
        if (slidingBlocked) return;
        slidingBlocked = true;

        var $control = this;
        var isRight = $control.classList.contains('m--right');
        var $curActive = document.querySelector('.slide.s--active');
        var index = +$curActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = numOfSlides;
        if (index > numOfSlides) index = 1;
        var $newActive = document.querySelector('.slide-' + index);

        $control.classList.add('a--rotation');
        $curActive.classList.remove('s--active', 's--active-prev');
        document.querySelector('.slide.s--prev').classList.remove('s--prev');

        $newActive.classList.add('s--active');
        if (!isRight) $newActive.classList.add('s--active-prev');


        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = numOfSlides;

        document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

        setTimeout(function() {
            $control.classList.remove('a--rotation');
            slidingBlocked = false;
        }, slidingAT*0.75);
    };
}());
*/






