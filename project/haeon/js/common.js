$(function () {

    $(".depth2").hide();
    $(".gnb > li").hover(function () {
        $(this).find(".depth2").stop().fadeToggle();
    });


    let depth1 = $(".gnb > li");
    let depth2 = $(".gnb > li").find("depth2");

    depth1.hover(function () {
        $(this).depth2.stop().fadeToggle();
    });
});