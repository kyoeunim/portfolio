$(function () {
    const graphic_list = new Swiper(".graphic_list", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            500: { // 600px 이하
                slidesPerView: 2,
                spaceBetween: 20,
            },
            660: { // 600px 이하
                slidesPerView: 3,
                spaceBetween: 20,
            },
            900: { // 900px 이하
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1200: { // 1200px 이하
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    // mgnb
  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".dim").fadeIn();
    $(".mgnb_box").animate({
      "right": "0"
    });
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".dim").fadeOut();
    $(".mgnb_box").animate({
      "right": "-100%"
    });
  });
});