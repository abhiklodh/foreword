(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$(document).ready(function () {
    $(".bg-hover-1").hover(function () {
        $(".featured").css("background-color", "#9a9480");
    });
});

$(document).ready(function () {
    $(".bg-hover-2").hover(function () {
        $(".featured").css("background-color", "rgb(50, 50, 65)");
    });
});

$(document).ready(function () {
    $(".bg-hover-3").hover(function () {
        $(".featured").css("background-color", "#68686a");
    });
});

$(document).ready(function () {
    $(".featured").hover(function () {
        $(".featured").css("background-color", "#000000");
    });
});

$(document).ready(function () {
    $(".heading5").hover(function () {
        $(".footer").attr("style", "background-color: #292929 !important");
        $(".heading5").attr("style", "color: #ffffff");
    });
});

$(document).ready(function () {
    $(".footer").hover(function () {
        $(".footer").attr("style", "background-color: #000000 !important");
        $(".heading5").attr("style", "color: rgb(128, 128, 128)");
    });
});

$(document).ready(function () {
    $("img.link-product").click(function () {
        window.location.href = "product" + ".html";
    });
});
