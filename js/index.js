// <!-- toggle自動收合 -->
$(function() {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});


// <!-- nav scroll -->
$(document).ready(function() {
    $('nav li a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});
// $('[data-spy="scroll"]').each(function() {
//     var $spy = $(this).scrollspy('refresh')
// });


// $(function() {

//     "use strict"; // Start of use strict

//     // jQuery for page scrolling feature - requires jQuery Easing plugin
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($anchor.attr('href')).offset().top - 50)
//         }, 1250, 'easeInOutExpo');
//         event.preventDefault();
//     });

//     // Highlight the top nav as scrolling occurs
//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 51
//     });

//     // Closes the Responsive Menu on Menu Item Click
//     $('.navbar-collapse ul li a').click(function() {
//         $('.navbar-toggle:visible').click();
//     });

//     // Offset for Main Navigation
//     $('#mainNav').affix({
//         offset: {
//             top: 100
//         }
//     });
// });



// totop
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



//collapse變換icon
$(document).ready(function() {
    $('.collapse')
        .on('shown.bs.collapse', function() {
            $(this)
                .parent()
                .find(".fa-plus-circle")
                .removeClass("fa-plus-circle")
                .addClass("fa-chevron-circle-down");
        })
        .on('hidden.bs.collapse', function() {
            $(this)
                .parent()
                .find(".fa-chevron-circle-down")
                .removeClass("fa-chevron-circle-down")
                .addClass("fa-plus-circle");
        });
});

//輪播秒數與滑入停止
$('.carousel-inner').carousel({
    interval: 2000,
    pause: "hover"
});






