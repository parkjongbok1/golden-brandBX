$(function () {

  $(".living-slider").slick({
    dots: false, //네이베이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".product-left"), //이전 화살표
    nextArrow: $(".product-right"), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 2300, //자동넘김 속도
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    swipe: true, //스와이프
    variableWidth: true,
    initialSlide: 0, //슬라이드 시작순서
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
  });

  // product-list
  $(".footer-btn").click(function () {
    $(".footer").toggleClass("active");
  });

  $(".product-list li").click(function () {
    $(".product-list li").removeClass("active");
    $(this).addClass("active");
    let tabName = $(this).attr("data-name");

    $(".product-contents").removeClass("active");
    $("#" + tabName).addClass("active");
  });
  
});
