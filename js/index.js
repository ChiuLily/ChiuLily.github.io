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
