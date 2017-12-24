$(function(){
    var t1_height = $("#t1").offset().top;
    var t2_height = $("#t2").offset().top - 50;
    $("#nav").hide();
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop < t1_height) {
            $("#nav").fadeOut();
        }

        if(this_scrollTop >= t1_height ){
            $("#nav").fadeIn();
        }

        if((this_scrollTop > t1_height) && (this_scrollTop < t2_height)) {
            $("#at1").addClass("active");
            $("#at2").removeClass("active");
        }

        if((this_scrollTop >= t2_height)) {
            $("#at2").addClass("active");
            $("#at1").removeClass("active");
        }

    });

    $("#at1").click(function () {
        var t1_height = $("#t1").offset().top;
        $("html, body").animate({scrollTop: t1_height}, 1500);
    });

    $("#at2").click(function () {
        var t2_height = $("#t2").offset().top;
        $("html, body").animate({scrollTop: t2_height}, 1500);
    });

    $("#att1").click(function () {
        var t1_height = $("#st1").offset().top;
        $("html, body").animate({scrollTop: t1_height}, 1500);
    });

    $("#att2").click(function () {
        var t2_height = $("#st2").offset().top;
        $("html, body").animate({scrollTop: t2_height}, 1500);
    });

    $("#att3").click(function () {
        var t2_height = $("#st3").offset().top;
        $("html, body").animate({scrollTop: t2_height}, 1500);
    });

    $("#at31").click(function () {
        var t2_height = $("#sst1").offset().top;
        $("html, body").animate({scrollTop: t2_height}, 1500);
    });

    $("#at32").click(function () {
        var t2_height = $("#sst2").offset().top;
        $("html, body").animate({scrollTop: t2_height}, 1500);
    });
});