/*(function () {

    $("#owl-example").owlCarousel();
    $(window).load(function () {


    });

})();

*/


$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

});








(function ($) {
    $.extend({

        scrollToTop: function () {

            var _isScrolling = false;

            // Append Button
            $("body").append($("<a />")
							.addClass("scroll-to-top")
							.attr({
							    "href": "#",
							    "id": "scrollToTop"
							})
							.append(
								$("<i />")
									.addClass("icons icon-up")
							));

            $("#scrollToTop").click(function (e) {

                e.preventDefault();
                $("body, html").animate({ scrollTop: 0 }, 500);
                return false;

            });

            // Show/Hide Button on Window Scroll event.
            $(window).scroll(function () {

                if (!_isScrolling) {

                    _isScrolling = true;

                    if ($(window).scrollTop() > 150) {

                        $("#scrollToTop").stop(true, true).addClass("visible");
                        _isScrolling = false;

                    } else {

                        $("#scrollToTop").stop(true, true).removeClass("visible");
                        _isScrolling = false;

                    }

                }

            });

        }

    });
})(jQuery);








 /*-----------------------------------------------------------------------------------*/
        /*	Flex Slider
        /*-----------------------------------------------------------------------------------*/
        if(jQuery().flexslider)
        {
            // Flex Slider for Homepage
            $('#home-flexslider .flexslider').flexslider({
                animation: "fade",
                slideshowSpeed: 7000,
                animationSpeed:	1500,
                directionNav: true,
                controlNav: false,
                keyboardNav: true,
                start: function (slider) {
                    slider.removeClass('loading');
                }
            });

            // Remove Flex Slider Navigation for Smaller Screens Like IPhone Portrait
            $('.slider-wrapper , .listing-slider').hover(function(){
                var mobile = $('body').hasClass('probably-mobile');
                if(!mobile)
                {
                    $('.flex-direction-nav').stop(true,true).fadeIn('slow');
                }
            },function(){
                $('.flex-direction-nav').stop(true,true).fadeOut('slow');
            });

            // Flex Slider for Detail Page
            $('#property-detail-flexslider .flexslider').flexslider({
                animation: "slide",
                directionNav: true,
                controlNav: "thumbnails"
            });

            // Flex Slider Gallery Post
            $('.listing-slider ').flexslider({
                animation: "slide"
            });

            /* Property detail page slider variation two */
            $('#property-carousel-two').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 113,
                itemMargin: 10,
                // move: 1,
                asNavFor: '#property-slider-two'
            });
            $('#property-slider-two').flexslider({
                animation: "slide",
                directionNav: true,
                controlNav: false,
                animationLoop: false,
                slideshow: true,
                sync: "#property-carousel-two",
                start: function (slider) {
                    slider.removeClass('loading');
                }
            });

        }


        /*-----------------------------------------------------------------------------------*/
        /*	jCarousel
        /*-----------------------------------------------------------------------------------*/
        if(jQuery().jcarousel){
            // Jcarousel for Detail Page
            jQuery('#property-detail-flexslider .flex-control-nav').jcarousel({
                vertical: true,
                scroll:1
            });

            // Jcarousel for partners
            jQuery('.brands-carousel .brands-carousel-list ').jcarousel({
                scroll:1
            });
        }





$(function () {
    $('.list-group.checked-list-box .list-group-item').each(function () {

        // Settings
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            color = ($widget.data('color') ? $widget.data('color') : "primary"),
            style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        $widget.css('cursor', 'pointer')
        $widget.append($checkbox);

        // Event Handlers
        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });


        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $widget.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$widget.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $widget.addClass(style + color + ' active');
            } else {
                $widget.removeClass(style + color + ' active');
            }
        }

        // Initialization
        function init() {

            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }

            updateDisplay();

            // Inject the icon if applicable
            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span>');
            }
        }
        init();
    });

    $('#get-checked-data').on('click', function (event) {
        event.preventDefault();
        var checkedItems = {}, counter = 0;
        $("#check-list-box li.active").each(function (idx, li) {
            checkedItems[counter] = $(li).text();
            counter++;
        });
        $('#display-json').html(JSON.stringify(checkedItems, null, '\t'));
    });
});


