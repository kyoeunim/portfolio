const visual_list = new Swiper(".visual_list", {
    effect: "fade", //페이드 효과
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' (숫자) | 'progressbar'
        clickable: true, // 버튼 클릭 여부
    },
    navigation: {
        nextEl: '.swiper-button-next', // 다음 버튼
        prevEl: '.swiper-button-prev', // 이전 버튼
    },
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true, // 슬라이드 반복 여부
});


const doctor_list = new Swiper(".doctor_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true, // 슬라이드 반복 여부
});

$(".new_menu .inner .new_menu_list .new_menu_img a").hide();
$(".new_menu .inner .new_menu_list .new_menu_img a").eq(0).show();

$(".new_menu .inner .new_menu_list .new_menu_txt button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".new_menu .inner .new_menu_list .new_menu_img a").eq(idx).fadeIn().siblings().hide();
});

$(".before_big > div").hide();
$(".before_big > div").eq(0).fadeIn();
$(".before_txt button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".before_big > div").eq(idx).fadeIn().siblings().hide();
})

const interior_list = new Swiper(".interior_list", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' (숫자) | 'progressbar'
        clickable: true, // 버튼 클릭 여부
    },
    navigation: {
        nextEl: '.swiper-button-next', // 다음 버튼
        prevEl: '.swiper-button-prev', // 이전 버튼
    },
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true, // 슬라이드 반복 여부


});