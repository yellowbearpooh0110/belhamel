!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n(e.jQuery)}(this,function(e){"use strict";function n(n){var t=this;if(1===arguments.length&&"function"==typeof n&&(n=[n]),!(n instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return n.forEach(function(n){"function"!=typeof n?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(t).forEach(function(t){return n.call(e(t))})}),this}function t(n){var t=e("<div></div>").css({width:"100%"});n.append(t);var o=n.width()-t.width();return t.remove(),o}function o(n,r){var i=n.getBoundingClientRect(),a=i.top,u=i.bottom,c=i.left,f=i.right,s=e.extend({tolerance:0,viewport:window},r),d=!1,l=s.viewport.jquery?s.viewport:e(s.viewport);l.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),l=e(window));var p=l.height(),w=l.width(),h=l[0].toString();if(l[0]!==window&&"[object Window]"!==h&&"[object DOMWindow]"!==h){var v=l[0].getBoundingClientRect();a-=v.top,u-=v.top,c-=v.left,f-=v.left,o.scrollBarWidth=o.scrollBarWidth||t(l),w-=o.scrollBarWidth}return s.tolerance=~~Math.round(parseFloat(s.tolerance)),s.tolerance<0&&(s.tolerance=p+s.tolerance),f<=0||c>=w?d:d=s.tolerance?a<=s.tolerance&&u>=s.tolerance:u>0&&a<=p}function r(n){if(n){var t=n.split(",");return 1===t.length&&isNaN(t[0])&&(t[1]=t[0],t[0]=void 0),{tolerance:t[0]?t[0].trim():void 0,viewport:t[1]?e(t[1].trim()):void 0}}return{}}e=e&&e.hasOwnProperty("default")?e.default:e,/**
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
e.extend(e.expr.pseudos||e.expr[":"],{"in-viewport":e.expr.createPseudo?e.expr.createPseudo(function(e){return function(n){return o(n,r(e))}}):function(e,n,t){return o(e,r(t[3]))}}),e.fn.isInViewport=function(e){return this.filter(function(n,t){return o(t,e)})},e.fn.run=n});;
;
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);;
;
$(window).on("load", function () {
	$('body').addClass('loaded');
	$('body > *').css('opacity', '1');
});

$(document).ready(function() {
    //SVG
    svg4everybody();


	//Click Copy
	$('.js-copy').on("click", function () {
		var temp = $('<input>');
		var btn = $(this);

		$('body').append(temp);
		temp.val(btn.text()).select();
		document.execCommand('copy');
		temp.remove();

		btn.addClass('done');
	});


	// Floater
	$(window).on("load resize scroll", $.debounce(20, function () {
		if ($(document).scrollTop() > 0) {
			$('body').addClass('scrolled');
			$('.floater').addClass('show');
		} else {
			$('body').removeClass('scrolled');
			$('.floater').removeClass('show');
		}

		if ($('body > .footer, .js-floater-disable').is(":in-viewport")) {
			$('.floater').removeClass('show');
		} else {
			$('.floater').addClass('show');
		}
	}));
	
	
	// Carousel
	$(".carousel").slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 9999,
				settings: "unslick",
			},
			{
				breakpoint: 560,
				settings: {
					arrow: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	window.addEventListener("resize", function () {
		if (window.innerWidth > 560) {
			$(".carousel").slick("unslick");
		} else {
			$(".carousel").slick({
				dots: true,
				infinite: true,
				speed: 300,
				arrows: false,
				autoplay: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 9999,
						settings: "unslick",
					},
					{
						breakpoint: 560,
						settings: {
							arrow: false,
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			});
		}
	});


	//Modal 
	$('a.modal-trigger').click(function() {
		var target = $(this).attr('href');

		$('body').addClass('modal-on');
		$(target).fadeIn().addClass('active');
	});
	$('button.modal-trigger').click(function() {
		var target = $(this).data('target');

		$('body').addClass('modal-on');
		$(target).fadeIn().addClass('active');
	});

	$('.modal__close').click(function() {
		$('body').removeClass('modal-on');
		$('.modal.active').fadeOut().removeClass('active');
	});

	$(document).on('keydown', function (e) {
		if (e.keyCode === 27) { // ESC
			$('body').removeClass('modal-on');
			$('.modal.active').fadeOut().removeClass('active');
		}
	});

	$(document).mouseup(function(e) {
		var container = $('.modal__content');

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('body').removeClass('modal-on');
			$('.modal.active').fadeOut().removeClass('active');
		}
	});


	// ScroolTo
	$(".js-scrollTo").click(function () {
		var scrollID = $(this).attr('href');
		var offsetNbr = $(this).data('offset');

		$("html, body").animate(
			{
				scrollTop: $(scrollID).offset().top - offsetNbr,
			},
			300
		);
	});
});

//Mobile height
window.addEventListener('load', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

;
;
;if(typeof jQuery === "object"){setTimeout(function(){jQuery(window).trigger("load");jQuery(window).trigger("resize");jQuery("body").addClass("jsload");loaddata();},600);}