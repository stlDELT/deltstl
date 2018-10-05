

//FITTEXT
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      var $this = $(this);

      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      resizer();
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };
})( jQuery );

		$("#ft1").fitText(.71);
        $("#ft2").fitText(.6);
		$("#fittext3").fitText(1.1, { minFontSize: '80px', maxFontSize: '125px' });




//PARALLAX IMAGES
$(window).scroll(function() {
    $(".lax").each(function() {
      var windowScrollTop = $(window).scrollTop(),
          elementOffsetTop = $(this).offset().top,
          element_h = $(this).height(),
          window_w =  $(window).width(),
          window_h = $(window).height(),
          velocity = $(this).attr("data-velocity");
          console.log(windowScrollTop)
          if(windowScrollTop + window_h > elementOffsetTop && windowScrollTop  < elementOffsetTop + element_h) {
            TweenLite.to($(this), 1.2, {
              yPercent: (windowScrollTop + window_h - elementOffsetTop) / window_h * velocity,
              ease: Power1.easeOut,
              overwrite: 0
            })
        } 
        if(windowScrollTop == 0) {
           TweenLite.to($(this), 1.2, {
              yPercent: 0,
              ease: Power1.easeOut,
              overwrite: 0
            })
        }
    })
})







//Image Reveal Animation
$(window).scroll(function() {
  $('.doit').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});
$(window).scroll(function() {
  $('.doit2').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});

$(window).scroll(function() {
  $('.doit3').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});
$(window).scroll(function() {
  $('.hidedwhites').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});
$(window).scroll(function() {
  $('.upit').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});
$(window).scroll(function() {
  $('.upit2').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});
$(window).scroll(function() {
  $('.upit3').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});
$(window).scroll(function() {
  $('.upit4').each(function(i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('is-loaded');
    }
  });
});


$(window).scroll(function() {
	$(window).scrollTop() >= 207 ? $(".hpimg").addClass("isabso") : $(".hpimg").removeClass("isabso")
}),
$(window).scroll(function() {
	$(window).scrollTop() >= 127 ? $(".hpimg").addClass("isfull") : $(".hpimg").removeClass("isfull")
}),
$(window).scroll(function() {
	$(window).scrollTop() >= 207 ? $(".whititle").addClass("isabso") : $(".whititle").removeClass("isabso")
}),
    
$(window).scroll(function() {
	$(window).scrollTop() >= 307 ? $(".mainbody").addClass("black_body") : $(".mainbody").removeClass("black_body")
}),
$(window).scroll(function() {
	$(window).scrollTop() >= 207 ? $(".btnshow").addClass("imhere") : $(".btnshows").removeClass("imhere")
}),
$(document).ready(function(){
  $(".mbox").click(function(){
    $(this).toggleClass("giter");
  });
});

$(document).ready(function(){
  $(".mbox").click(function(){
    $(".menugo").toggleClass("giter");
    $(".dropdown").toggleClass("giter");
      $(".swipeimg").toggleClass("giter");
      $(body).toggleClass("noscrollyme");
  });
});

//CHANGE BACKGROUND COLOR ON SCROLL




(function() {
  var parallax, speed;

  parallax = document.querySelectorAll('.parallax-image');

  speed = 0.2;

  window.onscroll = function() {
    return [].slice.call(parallax).forEach(function(el, i) {
      var dist;
      dist = $(window).scrollTop() - $(el).offset().top;
      return $(el).css('top', dist * speed + 'px');
    });
  };

}).call(this);



//EXECUTES ONLY ONCE
function once(fn, context) {
  var result;
  return function() {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}
var splits = new Array($(".split").length);
$('.split').each(function(i, obj) {
  $(this).addClass('split' + i);
  $(this).css({
    opacity: 0
  });
  splits[i] = once(function() {
      $(".split" + i).css({
        opacity: 1
      });
    fadeInText(".split" + i);
  })
});
$('.split').each(function(i, obj) {
  if ($(obj).offset().top < $(window).height()) {
    splits[i]();
  }
})
$(window).scroll(function() {

  for (var i = 0; i <= $(".split").length; i++) {
    //        if (i===0) { continue; }
    if ($(this).scrollTop() + $(window).height() > $(".split" + i).offset().top - $(".split" + i).height()) {
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
  var text = new SplitText(el, {
    type: split
  });
  var tl = new TimelineMax({
    paused: false
  });
  var splitEls = text[split];
  var wrapEls = function wrapEls(els) {
    return els.map(function(el) {
      //        return '<span style="display: inline-block">' + el.innerText + '</span>';
      return '<span style="display: inline-block">' + el.innerText + '</span>';

    });
  };
  var wrapped = wrapEls(splitEls);
  splitEls.forEach(function(el, i) {
    el.style.overflow = 'hidden';
    el.innerHTML = wrapped[i];
  });
  var masks = splitEls.map(function(el) {
    return el.querySelector('span');
  });
  //window.alert(r);
  tl.staggerFrom(masks, 1.25, {
    skewY: 4,
    y: '200%',
    ease: Expo.easeOut,
    delay: 0.5
  }, 0.1, 'in');

  //    },1000);
  return l;
}