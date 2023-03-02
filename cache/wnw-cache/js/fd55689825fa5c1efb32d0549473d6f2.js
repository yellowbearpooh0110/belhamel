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
