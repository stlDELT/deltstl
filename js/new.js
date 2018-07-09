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

//		$(window).scroll(function(){$(window).scrollTop()>=87?$(".topbanner").addClass("membersmall"):$(".topbanner").removeClass("membersmall")}),$(window).scroll(function(){$(window).scrollTop()>=87?$(".memberbanner").addClass("membersmall"):$(".memberbanner").removeClass("membersmall")}),$(window).scroll(function(){$(window).scrollTop()>=87?$(".hphero").addClass("herosmall"):$(".hphero").removeClass("herosmall")}),$(document).ready(function(){$(".hamburger").click(function(){$(this).toggleClass("is-active"),$(".menu-overlay").toggleClass("downed")})}),$(window).scroll(function(){$(window).scrollTop()>=307?$(".triangle").addClass("squared"):$(".triangle").removeClass("squared")}),$(window).scroll(function(){$(window).scrollTop()>=307?$(".branded").addClass("squared"):$(".branded").removeClass("squared")}),$(window).scroll(function(){$(window).scrollTop()>=307?$(".hamburger").addClass("squared"):$(".hamburger").removeClass("squared")}),function(e){e(window).load(function(){e("body").addClass("page-loaded")})}(jQuery);var $animation_elements=$(".finna"),$window=$(window);function check_if_in_view(){var e=$window.height(),n=$window.scrollTop(),o=n+e;$.each($animation_elements,function(){var e=$(this),s=e.outerHeight(),i=e.offset().top;i+s>=n&&i<=o&&e.addClass("in-view")})}function once(e,n){var o;return function(){return e&&(o=e.apply(n||this,arguments),e=null),o}}$window.on("scroll resize",check_if_in_view),$window.trigger("scroll"),$(".toggle").click(function(e){e.preventDefault(),$(".toggle-animate").toggleClass("in-view")}),$(".transition").on("click",function(e){$(".transition-overlay").toggleClass("show-me")}),$(".transition").on("click",function(e){e.preventDefault();var n=this.getAttribute("href");setTimeout(function(){window.location=n},1e3)});var splits=new Array($(".split").length);$(".split").each(function(e,n){$(this).addClass("split"+e),$(this).css({opacity:0}),$(this).offset().top<$(window).height()+$(window).scrollTop()?($(".split"+e).css({opacity:1}),splits[e]=once(function(){fadeInText(".split"+e,2)}),splits[e]()):splits[e]=once(function(){fadeInText(".split"+e)})}),$(window).scroll(function(){for(var e=0;e<=$(".split").length;e++)$(this).scrollTop()+$(window).height()>$(".split"+e).offset().top-$(".split"+e).height()&&($(".split"+e).css({opacity:1}),splits[e]())});var f=".split",y=3;function fadeInText(e,n){var o=document.querySelector(e),s=o.dataset.split,i=new SplitText(o,{type:s}),l=new TimelineMax({paused:!1}),t=i[s],a=t.map(function(e){return'<span style="display: inline-block">'+e.innerText+"</span>"});t.forEach(function(e,n){e.style.overflow="hidden",e.innerHTML=a[n]});var r=t.map(function(e){return e.querySelector("span")});return l.staggerFrom(r,1.25,{skewY:4,y:"200%",ease:Expo.easeOut,delay:n},.1,"in"),e}$(function(){$(".servslide").click(function(e){e.preventDefault(),$(".servslide").toggleClass("slidengo"),$(".slideover").toggleClass("slidengo")})});



var $slider=$(".slider"),$bullets=$(".bullets");function calculateHeight(){var e=$(".theslide.active").outerHeight();$slider.height(e)}function resetSlides(){$(".theslide.inactive").removeClass("inactiveRight").removeClass("inactiveLeft")}function gotoSlide(e,i,t){e.removeClass("active").addClass("inactive "+t),i.removeClass("inactive").addClass("active"),calculateHeight(),resetBullets(),setTimeout(resetSlides,300)}function addBullets(){for(var e=$(".theslide").length,i=$(".theslide.active").index(),t=0;t<e;t++){var l=$("<div>").addClass("bullet");t==i&&l.addClass("active"),$bullets.append(l)}}function resetBullets(){$(".bullet.active").removeClass("active");var e=$(".theslide.active").index()+1;console.log(e),$(".bullet:nth-child("+e+")").addClass("active")}$(window).resize(function(){calculateHeight(),clearTimeout($.data(this,"resizeTimer"))}),$(".next").on("click",function(){var e=$(".theslide.active"),i=0!=e.next(".theslide").length?e.next(".theslide"):$(".theslide:first-child");console.log(i),gotoSlide(e,i,"inactiveLeft")}),$(".previous").on("click",function(){var e=$(".theslide.active");gotoSlide(e,0!=e.prev(".theslide").length?e.prev(".theslide"):$(".theslide:last-child"),"inactiveRight")}),$(document).on("click",".bullet",function(){if(!$(this).hasClass("active")){var e=$(".theslide.active"),i=e.index(),t=$(this).index();console.log(i,t),gotoSlide(e,$(".theslide:nth-child("+(t+1)+")"),i>t?"inactiveRight":"inactiveLeft")}}),addBullets(),calculateHeight();

$(window).scroll(function() { 
	$('.doit').each(function(i){  
		if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
			$(this).addClass('is-loaded');       
		}   
	}); 
});

$(window).scroll(function() { 
	$('.bbgoverlay').each(function(i){  
		if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
			$(this).addClass('is-loaded');       
		}   
	}); 
});


$(function() {

	$(".servy").click(function(e) {
		e.preventDefault();
		$('.servy').toggleClass('open');
		$('.showdamenu').toggleClass('open');
	});

});

$(window).scroll(function() {
	$(window).scrollTop() >= 87 ? $(".topbanner").addClass("membersmall") : $(".topbanner").removeClass("membersmall")
}),
	//	$(window).scroll(function() {
	//	$(window).scrollTop() >= 307 ? $(".wb").addClass("wbu") : $(".wb").removeClass("wbu")
	//}),	
	//	$(window).scroll(function() {
	//	$(window).scrollTop() >= 700 ? $(".menu-links").addClass("blacklinks") : $(".menu-links").removeClass("blacklinks")
	//}),	

	$(window).scroll(function() {
	$(window).scrollTop() >= 87 ? $(".memberbanner").addClass("membersmall") : $(".memberbanner").removeClass("membersmall")
}), 

	$(window).scroll(function() {
	$(window).scrollTop() >= 87 ? $(".hphero").addClass("herosmall") : $(".hphero").removeClass("herosmall")
}), 

	$(document).ready(function() {
	$(".hamburger").click(function() {
		$(this).toggleClass("is-active"), $(".menu-overlay").toggleClass("downed")
	})
}), 

	//$(window).scroll(function() {
	//$(window).scrollTop() >= 307 ? $(".triangle").addClass("squared") : $(".triangle").removeClass("squared")
	//}), 
	//	
	//$(window).scroll(function() {
	//$(window).scrollTop() >= 307 ? $(".branded").addClass("squared") : $(".branded").removeClass("squared")
	//})


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






