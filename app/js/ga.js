'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, $, ga */
app.partial.ga = function(){
	$('.section').on('section:on', function(){
		var w = $(window).width();
		var section = $(this).attr('data-section-ga');
		if(w <= 768){
			section = $(this).attr('data-section-mobile-ga');
		}
		if(typeof ga !== 'undefined'){
			ga('send', 'pageview', { 'page': section, 'title': section});
		}
	});

	$('[data-ga]').on('click', function(){
		var w = $(window).width();
		if(w > 768){
			ga('send', 'event', 'Button', 'click', $(this).attr('data-ga'));
		}
	});

	$('[data-mobile-ga]').on('click', function(){
		var w = $(window).width();
		if(w <= 768){
			ga('send', 'event', 'Button', 'click', $(this).attr('data-mobile-ga'));
		}
	});
};
