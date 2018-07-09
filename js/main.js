// Custom Cursor
var cursor = $(".your-cursor2"),
	follower = $(".follow2");

var posX = 0,
	posY = 0;

var mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(document).on("mousemove", function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$("a").on("mouseenter", function() {
	cursor.addClass("active");
	follower.addClass("active");
});
$("a").on("mouseleave", function() {
	cursor.removeClass("active");
	follower.removeClass("active");
});

new SmoothScroll();


//Smooth Scrolling
function SmoothScroll(el) {
	var t = this, h = document.documentElement;
	el = el || window;
	t.rAF = false;
	t.target = 0;
	t.scroll = 0;
	t.animate = function() {
		t.scroll += (t.target - t.scroll) * 0.1;
		if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
			cancelAnimationFrame(t.rAF);
			t.rAF = false;
		}
		if (el == window) scrollTo(0, t.scroll);
		else el.scrollTop = t.scroll;
		if (t.rAF) t.rAF = requestAnimationFrame(t.animate);
	};
	el.onmousewheel = function(e) {
		e.preventDefault();
		e.stopPropagation();
		var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
		t.target += (e.wheelDelta > 0) ? -60 : 60;
		if (t.target < 0) t.target = 0;
		if (t.target > scrollEnd) t.target = scrollEnd;
		if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);
	};
	el.onscroll = function() {
		if (t.rAF) return;
		t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
		t.scroll = t.target;
	};
}


//Service Page Tabs
$(document).ready(function() {

	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();

			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		} );
	})(jQuery);

});

var $slider=$(".slider"),$bullets=$(".bullets");function calculateHeight(){var e=$(".theslide.active").outerHeight();$slider.height(e)}function resetSlides(){$(".theslide.inactive").removeClass("inactiveRight").removeClass("inactiveLeft")}function gotoSlide(e,i,t){e.removeClass("active").addClass("inactive "+t),i.removeClass("inactive").addClass("active"),calculateHeight(),resetBullets(),setTimeout(resetSlides,300)}function addBullets(){for(var e=$(".theslide").length,i=$(".theslide.active").index(),t=0;t<e;t++){var l=$("<div>").addClass("bullet");t==i&&l.addClass("active"),$bullets.append(l)}}function resetBullets(){$(".bullet.active").removeClass("active");var e=$(".theslide.active").index()+1;console.log(e),$(".bullet:nth-child("+e+")").addClass("active")}$(window).resize(function(){calculateHeight(),clearTimeout($.data(this,"resizeTimer"))}),$(".next").on("click",function(){var e=$(".theslide.active"),i=0!=e.next(".theslide").length?e.next(".theslide"):$(".theslide:first-child");console.log(i),gotoSlide(e,i,"inactiveLeft")}),$(".previous").on("click",function(){var e=$(".theslide.active");gotoSlide(e,0!=e.prev(".theslide").length?e.prev(".theslide"):$(".theslide:last-child"),"inactiveRight")}),$(document).on("click",".bullet",function(){if(!$(this).hasClass("active")){var e=$(".theslide.active"),i=e.index(),t=$(this).index();console.log(i,t),gotoSlide(e,$(".theslide:nth-child("+(t+1)+")"),i>t?"inactiveRight":"inactiveLeft")}}),addBullets(),calculateHeight();


//Image Reveal Animation
$(window).scroll(function() {
	$('.doit').each(function(i){
		if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
			$(this).addClass('is-loaded');
		}
	});
});
$(window).scroll(function() {
	$('.doit2').each(function(i){
		if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
			$(this).addClass('is-loaded');
		}
	});
});
$(window).scroll(function() {
	$('.hidedwhites').each(function(i){
		if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
			$(this).addClass('is-loaded');
		}
	});
});


//Dropwdown Menu
$(function() {

	$(".servy").click(function(e) {
		e.preventDefault();
		$('.servy').toggleClass('open');
		$('.showdamenu').toggleClass('open');
	});

});



//$(window).scroll(function() {
//	$(window).scrollTop() >= 87 ? $(".topbanner").addClass("membersmall") : $(".topbanner").removeClass("membersmall")
//}),
//	$(window).scroll(function() {
//	$(window).scrollTop() >= 307 ? $(".wb").addClass("wbu") : $(".wb").removeClass("wbu")
//}),
//	$(window).scroll(function() {
//	$(window).scrollTop() >= 700 ? $(".menu-links").addClass("blacklinks") : $(".menu-links").removeClass("blacklinks")
//}),

//$(window).scroll(function() {
//$(window).scrollTop() >= 87 ? $(".memberbanner").addClass("membersmall") : $(".memberbanner").removeClass("membersmall")
//}),
//
//$(window).scroll(function() {
//$(window).scrollTop() >= 87 ? $(".hphero").addClass("herosmall") : $(".hphero").removeClass("herosmall")
//}),

$(document).ready(function() {
$(".hamburger").click(function() {
$(this).toggleClass("is-active"), $(".menu-overlay").toggleClass("downed")
})
})


//EXECUTES ONLY ONCE
function once(fn, context) {
	var result;
	return function() {
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}
		return result;
	};
}
var splits = new Array($(".split").length);
$('.split').each(function(i, obj) {
	$(this).addClass('split' + i);
	$(this).css({ opacity: 0 });
	splits[i] = once(function() {
		fadeInText(".split"+i);
	})
});
$(window).scroll(function() {

	for ( var i = 0; i <= $(".split").length; i++) {
		//        if (i===0) { continue; }
		if ($(this).scrollTop() + $(window).height() > $(".split" + i).offset().top - $(".split" + i).height()) {
			$(".split" + i).css({ opacity: 1 });
			splits[i]();
		}
	}

});
//SPLITTEXT
var f = ".split",
	r = ".split1";
//fadeInText(f);
//fadeInText(r);
//fadeInText(r);
function fadeInText(l) {
	//    setTimeout(function(){
	var el = document.querySelector(l);
	var split = el.dataset.split;
	var text = new SplitText(el, { type: split });
	var tl = new TimelineMax({ paused: false });
	var splitEls = text[split];
	var wrapEls = function wrapEls(els) {
		return els.map(function (el) {
			//        return '<span style="display: inline-block">' + el.innerText + '</span>';
			return '<span style="display: inline-block">' + el.innerText + '</span>';

		});
	};
	var wrapped = wrapEls(splitEls);
	splitEls.forEach(function (el, i) {
		el.style.overflow = 'hidden';
		el.innerHTML = wrapped[i];
	});
	var masks = splitEls.map(function (el) {
		return el.querySelector('span');
	});
	//window.alert(r);
	tl.staggerFrom(masks, 1.25, { skewY: 4, y: '200%', ease: Expo.easeOut, delay: 0.5 }, 0.1, 'in');

	//    },1000);
	return l;
}
