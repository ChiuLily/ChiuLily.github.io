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

$(function() {
            var m = getVar("mobile");
            if ($.cookie("mobile") == null) {
                $.cookie("mobile", "off");
            } else {
                if (m != false) {
                    $.cookie("mobile", m);
                }
                if ($.cookie("mobile") == "on") {
                    mobileswitch();
                }
            }
        });

        function getVar(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return (false);
        }

        function mobileswitch() {
            document.querySelector('style').textContent += "@media(max-width:768px){.container{width: 1170px;}.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {float: left;}.col-md-12 {width: 100%;}.col-md-11 {width: 91.66666667%;}.col-md-10 {width: 83.33333333%;}.col-md-9 {width: 75%;}.col-md-8 {width: 66.66666667%;}.col-md-7 {width: 58.33333333%;}.col-md-6 {width: 50%;}.col-md-5 {width: 41.66666667%;}.col-md-4 {width: 33.33333333%;}.col-md-3 {width: 25%;}.col-md-2 {width: 16.66666667%;}.col-md-1 {width: 8.33333333%;}}";
        }




