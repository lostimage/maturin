//=require jquery.min.js

//=require what-input.min.js

// Core Foundation files
//=require foundation.core.min.js

//=require foundation.util.keyboard.min.js
//=require foundation.util.mediaQuery.js
//=require foundation.util.triggers.min.js
//=require foundation.util.box.min.js
//=require foundation.util.nest.min.js
//=require foundation.util.imageLoader.js
//=require foundation.offcanvas.min.js 

// require foundation.util.*.min.js

// require foundation.dropdown.min.js
// require foundation.responsiveMenu.min.js
// require foundation.responsiveToggle.min.js
// require foundation.toggler.min.js

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.min.js
// require foundation.accordion.min.js
// require foundation.accordionMenu.min.js
// require foundation.drilldown.min.js
//=require foundation.dropdownMenu.min.js
// require foundation.equalizer.min.js
// require foundation.interchange.min.js
// require foundation.magellan.min.js
// require foundation.orbit.min.js
// require foundation.reveal.min.js
// require foundation.slider.min.js
// require foundation.sticky.min.js
//=require foundation.tabs.min.js
// require foundation.tooltip.min.js
// require foundation.zf.responsiveAccordionTabs.min.js

//=require slick.min.js


;(function($){
	$(document).foundation();

	$(document).ready(function(){
		var $marketSlider = $('.ba-market-slider');

		$marketSlider.slick({
			dots: false,
			infinite: true,
			prevArrow: '.ba-market-slider__prev',
			nextArrow: '.ba-market-slider__next'
		});

		var $productSlider = $('.ba-products-slider');

		$productSlider.slick({
			dots: false,
			infinite: true,
			slidesToShow:4,
			slidesToScroll:1,
			slide:'.ba-products-card',
			prevArrow: '.ba-products-slider__prev',
			nextArrow: '.ba-products-slider__next'
		});
		var $categoriesSlider = $('.ba-categories-slider');

		$categoriesSlider.slick({
			dots: false,
			infinite: true,
			slidesToShow:8,
			slidesToScroll:1,
			slide:'.ba-dish',
			prevArrow: '.ba-categories-slider__prev',
			nextArrow: '.ba-categories-slider__next'
		});

		var tab = $('.drink-types__list');

		tab.on('mouseover','.ba-tab', function (e) {
			e.preventDefault();
			tab.find('.ba-tab').removeClass('active');
			$(this).addClass('active');
		
			var id = $(this).find('a').attr('href');
			$('#panel1vv')
			$('.drink-image').removeClass('active');
			$(id).addClass('active');

		});
		var drinkCategory = $('.drink-category__list');

		drinkCategory.on('mouseover','.drink-category__link', function (e) {
			e.preventDefault();
				drinkCategory.find('.drink-category__link').removeClass('active');
			$(this).addClass('active');
		
			var id = $(this).find('a').attr('href');
			$('#panel1v')
			$('.drink-category-info').removeClass('active');
			$(id).addClass('active');

		});
	
	});

})(jQuery);



















