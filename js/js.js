/*global $,alert,console*/


$(function() {

    //nice scroll//

    $("body").niceScroll({
        cursorwidth: "10px",
        cursorcolor: "#f7600f",
        cursorborderradius: "0",
        cursorborder: "2px solid #f7600f",
        cursoropacitymin: "1"
    })

    //nice scroll//
    var head = $(".header");
    var wind = $(window);
    head.css({
        height: wind.height()
    })
    wind.resize(function() {
        head.css({
            height: wind.height()
        })
    })


    $(".header .container").css({
        "paddingTop": ($(window).height() - $(".header .container").innerHeight()) / 2 + 70 + "px"
    })


    $(".header .navbar").css({
        left: ($(window).width() - $(".header .navbar").innerWidth()) / 2 + "px"
    })

    //scroll to element //

    $(".arrow i").click(function() {
        $("body,html").animate({
            scrollTop: $(".features").offset().top
        })
    })

    $(".hire").click(function() {

        $("body,html").animate({
            scrollTop: $(".contact-form").offset().top
        }, 600)

    })


    $(".work").click(function() {

        $("body,html").animate({
            scrollTop: $(".our-work").offset().top - 20
        }, 600)

    })

    //scroll to features //
    //make the slider//


    var leftarrow = $(".cotrols .fa-chevron-left");
    var rightarrow = $(".cotrols .fa-chevron-right");

    function checkarrow() {

        if ($(".clint:first").hasClass("active")) {
            leftarrow.hide()
        } else {
            leftarrow.fadeIn()
        }

        if ($(".clint:last").hasClass("active")) {
            rightarrow.hide()
        } else {
            rightarrow.fadeIn()
        }

    }

    checkarrow()

    /*
        $(".cotrols i").click(function() {

            if ($(this).hasClass("fa-chevron-right")) {
                $(".box-item .active").removeClass("active").fadeOut().next().addClass("active").fadeIn();
                checkarrow()
            }

            if ($(this).hasClass("fa-chevron-left")) {
                $(".box-item .active").removeClass("active").fadeOut().prev().addClass("active").fadeIn();
                checkarrow()
            }

        })*/

    rightarrow.click(function() {
        $(".box-item .active").removeClass("active").fadeOut().next().addClass("active").fadeIn();
        checkarrow()
    })

    leftarrow.click(function() {
        $(".box-item .active").removeClass("active").fadeOut().prev().addClass("active").fadeIn();
        checkarrow()
    })


    //make the slider//



    $(".team .imployee").hover(
        function() {
            $(this).toggleClass("active")
        },
        function() {
            $(this).toggleClass("active")
        }
    )


})

//make the slider//
//side bar//
var menu = $(".menu-bar");
var body = $("body");

$("#bar").click(function() {
    $(this).toggleClass("hide");

    if ($(this).hasClass("hide")) {


        menu.animate({
            right: "0"
        })
        body.animate({
            paddingRight: $(".menu-bar").innerWidth() + "px"
        })
        $(".menu-bar i").fadeIn()

    } else {
        body.animate({
            paddingRight: "0"
        })
        menu.animate({
            right: "-" + menu.innerWidth() + "px"
        })

        $(".menu-bar i").fadeOut()
    }

})

$(".menu-bar i").click(function() {

    $("#bar").toggleClass("hide");
    body.animate({
        paddingRight: "0"
    })
    $(this).parent().animate({
        right: "-" + menu.innerWidth() + "px"
    })

    $(".menu-bar i").fadeOut()

})