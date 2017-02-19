'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $ */
var app = {};
app.partial = {};

// var dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 網址為 gulp 或者 github 時 設定成debug 模式
var debug = /localhost[:]9000|nelson119.github.io/.test(location.href);

var scrollTop = 0;

var activeSection = '';

var range = {};

$(function(){
    app.getParam = getParam;
    
    // 定義每個section
	$.each(app.partial, function(name, init){
		init();
    });

	$('.section').each(function(){

		
		var id = $(this).attr('id');

		if(!id){
			return;
		}

		range[id] = {};
		// if(!$('#'+id).length){
		// 	return;
		// }
		range[id].top = function(){
			return $('#' + id).offset().top;// - $('#' + id).outerHeight() *1;
		};
		range[id].butt = function(){
			return $('#' + id).offset().top + $('#' + id).outerHeight();// *2;
		};
		range[id].middle = function(){
			return $('#' + id).offset().top + $('#' + id).outerHeight() / 2;// *2;
		};
	});

    app.imageReload.init();


    app.imageReload.callback = function(){
			// console.log('preload callback');
    	$('html').addClass('loading-done');
    	setTimeout(function(){
			$(window).trigger('scroll');
    	}, 500);
    };


	$(window).on('scroll resize', function(){
		var currentTop = $(window).scrollTop() + $(window).height() / 3;
		var currentButt = $(window).scrollTop() + $(window).height() / 3 * 2;
		$('.section').each(function(i, section){
			var sectionId = $(this).attr('id');
			var rg = range[sectionId];
			if(rg.middle() >= currentTop  && rg.middle() <= currentButt){
				if(activeSection != sectionId){
					activeSection = sectionId;
					if(activeSection && !$('#' + activeSection).hasClass('on')){
						$('#' + activeSection).addClass('on').siblings().removeClass('on').trigger('section:on');
					}
				}
			} 
			scrollTop = currentTop;
		});
	});

	$(window).on('resize', function(){
		if($('.slick-list').length){
			console.log('resizeCarousel();');
			resizeCarousel();
		} else{
			initCarousel();
			console.log('initCarousel();');
		}
		setTimeout(function(){
	 		initThumbs();
		}, 500);
	});
	app.imageReload.init();

	function resizeCarousel(){

		//gray
		$('#section5 .carousel .slide.gray .slide-image').slick('resize');
		$('#section5 .carousel .slide.gray .slide-thumb aside').slick('resize');
		//red
		$('#section5 .carousel .slide.red .slide-image').slick('resize');
		$('#section5 .carousel .slide.red .slide-thumb aside').slick('resize');
		//black
		$('#section5 .carousel .slide.black .slide-image').slick('resize');
		$('#section5 .carousel .slide.black .slide-thumb aside').slick('resize');
		//white
		$('#section5 .carousel .slide.white .slide-image').slick('resize');
		$('#section5 .carousel .slide.white .slide-thumb aside').slick('resize');
		//light-gray
		$('#section5 .carousel .slide.light-gray .slide-image').slick('resize');
		$('#section5 .carousel .slide.light-gray .slide-thumb aside').slick('resize');
		$('#section5 .carousel').slick('resize');
		$('#section5 .colors aside').slick('resize');
	}

	function initCarousel(){

		//gray
		$('#section5 .carousel .slide.gray .slide-image').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#section5 .carousel .slide.gray .slide-thumb aside'
		});
		//red
		$('#section5 .carousel .slide.red .slide-image').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#section5 .carousel .slide.red .slide-thumb aside'
		});
		//black
		$('#section5 .carousel .slide.black .slide-image').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#section5 .carousel .slide.black .slide-thumb aside'
		});
		//white
		$('#section5 .carousel .slide.white .slide-image').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#section5 .carousel .slide.white .slide-thumb aside'
		});
		//light-gray
		$('#section5 .carousel .slide.light-gray .slide-image').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#section5 .carousel .slide.light-gray .slide-thumb aside'
		});
		$('#section5 .carousel').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			// arrows: true,
			fade: true,
			asNavFor: '#section5 .colors aside'
		});
		$('#section5 .colors aside').slick({
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			arrows: false,
			draggable: false,
			focusOnSelect: true,
			asNavFor: '#section5 .carousel'
		});
	}

	function initThumbs(){

		var w = $(window).width();
		var vertical = true;
		var centerMode = false;
		if(w <= 768){
			vertical = false;
			centerMode = true;
		}
		var opts = {
			infinite: false,
			vertical: vertical,
			focusOnSelect: true,
			slidesToShow: 10,
			slidesToScroll: 10,
			arrows: false,
			draggable: false
			// centerMode: centerMode
		};
		console.log('initThumbs();');

		//gray
		if($('#section5 .carousel .slide.gray .slide-thumb aside .slick-list').length){
			$('#section5 .carousel .slide.gray .slide-thumb aside').slick('unslick');	
		}
		opts.asNavFor = '#section5 .carousel .slide.gray .slide-image';
		$('#section5 .carousel .slide.gray .slide-thumb aside').slick(opts);
		//red
		if($('#section5 .carousel .slide.red .slide-thumb aside .slick-list').length){
			$('#section5 .carousel .slide.red .slide-thumb aside').slick('unslick');	
		}
		opts.asNavFor = '#section5 .carousel .slide.red .slide-image';
		$('#section5 .carousel .slide.red .slide-thumb aside').slick(opts);
		//black
		if($('#section5 .carousel .slide.black .slide-thumb aside .slick-list').length){
			$('#section5 .carousel .slide.black .slide-thumb aside').slick('unslick');	
		}
		opts.asNavFor = '#section5 .carousel .slide.black .slide-image';
		$('#section5 .carousel .slide.black .slide-thumb aside').slick(opts);
		//white
		if($('#section5 .carousel .slide.white .slide-thumb aside .slick-list').length){
			$('#section5 .carousel .slide.white .slide-thumb aside').slick('unslick');	
		}
		opts.asNavFor = '#section5 .carousel .slide.white .slide-image';
		$('#section5 .carousel .slide.white .slide-thumb aside').slick(opts);
		//light-gray
		if($('#section5 .carousel .slide.light-gray .slide-thumb aside .slick-list').length){
			$('#section5 .carousel .slide.light-gray .slide-thumb aside').slick('unslick');	
		}
		opts.asNavFor = '#section5 .carousel .slide.light-gray .slide-image';
		$('#section5 .carousel .slide.light-gray .slide-thumb aside').slick(opts);
	}
});




//判斷是否具有屬性
$.fn.hasAttr = function(attributeName){
	var attr = $(this).attr(attributeName);
	if (typeof attr !== typeof undefined && attr !== false) {
		return true;
	}else{
		return false;
	}
};



var share = {
	facebook: function(href, title){
		href = encodeURIComponent(href || location.href + '?utm_source=facebook&utm_medium=fbshare_m&utm_campaign=camp');
		title = encodeURIComponent(title || document.title);
		window.open('https://www.facebook.com/sharer.php?u='+href+'&amp;t='+title);
	},
	googleplus: function(href){
		href = encodeURIComponent(href || location.href + '?utm_source=g+&utm_medium=googleplus_m&utm_campaign=camp');
		window.open('https://plus.google.com/share?url=' + href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	},
	email: function(href, title){
		href = encodeURIComponent(href || location.href + '?utm_source=email&utm_medium=email_m&utm_campaign=camp');
		title = encodeURIComponent(title || document.title);
		var body = encodeURIComponent(''+href+' #' +title+'');
		window.open('https://mail.google.com/mail/?view=cm&fs=1&to=&su=與你分享:'+title+'&body='+body+'&bcc=');
	}
};


function getParam(name){
	var r = new RegExp('^.*[?&]'+name+'[=]([^&]+).*$', 'i');
	if(!r.test(location.search)){
		return null;
	}
	var value = location.search.replace(r,'$1');
	return decodeURIComponent(value);
}

