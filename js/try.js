$(window).scroll(function() {
	$(window).scrollTop() >= 87 ? $(".hphero").addClass("herosmall") : $(".hphero").removeClass("herosmall")
}), $(document).ready(function() {
	$(".hamburger").click(function() {
		$(this).toggleClass("is-active"), $(".menu-overlay").toggleClass("downed")
	})
}), $(window).scroll(function() {
	$(window).scrollTop() >= 307 ? $(".triangle").addClass("squared") : $(".triangle").removeClass("squared")
}), $(window).scroll(function() {
	$(window).scrollTop() >= 307 ? $(".branded").addClass("squared") : $(".branded").removeClass("squared")
}), $(window).scroll(function() {
	$(window).scrollTop() >= 307 ? $(".hamburger").addClass("squared") : $(".hamburger").removeClass("squared")
}),
	function(e) {
	e(window).load(function() {
		e("body").addClass("page-loaded")
	})
}(jQuery);
var $animation_elements = $(".finna"),
	$window = $(window);
function check_if_in_view() {
	var e = $window.height(),
		n = $window.scrollTop(),
		i = n + e;
	$.each($animation_elements, function() {
		var e = $(this),
			o = e.outerHeight(),
			t = e.offset().top;
		t + o >= n && t <= i && e.addClass("in-view")
	})
}

function once(e, n) {
	var i;
	return function() {
		return e && (i = e.apply(n || this, arguments), e = null), i
	}
}
$window.on("scroll resize", check_if_in_view), $window.trigger("scroll"), $(".toggle").click(function(e) {
	e.preventDefault(), $(".toggle-animate").toggleClass("in-view")
}), $(".transition").on("click", function(e) {
	$(".transition-overlay").toggleClass("show-me")
}), $(".transition").on("click", function(e) {
	e.preventDefault();
	var n = this.getAttribute("href");
	setTimeout(function() {
		window.location = n
	}, 1e3)
});
var splits = new Array($(".split").length);
$(".split").each(function(e, n) {

	$(this).addClass("split" + e), $(this).css({
		opacity: 0
	}); 
	if ($(this).offset().top < $(window).height()+$(window).scrollTop()) {
		$(".split"+e).css({ opacity: 1});
		splits[e] = once(function() {
			fadeInText(".split" + e, 2.0)
		})
		splits[e]();
	}
	else {
		splits[e] = once(function() {
			fadeInText(".split" + e)
		})
	}

}); 
$(window).scroll(function() {
	for (var e = 0; e <= $(".split").length; e++) $(this).scrollTop() + $(window).height() > $(".split" + e).offset().top - $(".split" + e).height() && ($(".split" + e).css({
		opacity: 1
	}), splits[e]())
});
var f = ".split",
	y = 3.0;
function fadeInText(e, y) {
	var n = document.querySelector(e),
		i = n.dataset.split,
		o = new SplitText(n, {
			type: i
		}),
		t = new TimelineMax({
			paused: !1
		}),
		s = o[i],
		l = s.map(function(e) {
			return '<span style="display: inline-block">' + e.innerText + "</span>"
		});
	s.forEach(function(e, n) {
		e.style.overflow = "hidden", e.innerHTML = l[n]
	});
	var a = s.map(function(e) {
		return e.querySelector("span")
	});
	return t.staggerFrom(a, 1.25, {
		skewY: 4,
		y: "200%",
		ease: Expo.easeOut,
		delay: y
	}, .1, "in"), e
}
$(function() {
	$(".servslide").click(function(e) {
		e.preventDefault(), $(".servslide").toggleClass("slidengo"), $(".slideover").toggleClass("slidengo")
	})
});

$(window).scroll(function(){$(window).scrollTop()>=87?$(".topbanner").addClass("membersmall"):$(".topbanner").removeClass("membersmall")});$(window).scroll(function(){$(window).scrollTop()>=87?$(".memberbanner").addClass("membersmall"):$(".memberbanner").removeClass("membersmall")});$(window).scroll(function(){$(window).scrollTop()>=87?