$(function () {
  // 슬라이드 변수네임
  let newSlide = $(".product-new-slider");
  let planSlide = $(".plan-slider");
  // let bestSlide = $(".best-slider");

  let sliderCounter = $(".pagingInfo");
  let currentSlideCount;
  let totalSlideCount;
  let calc;

  let updateSliderCounter = function (slick, currentSlide) {
    // 현재 페이지 index +1 을 해준 이유는 1부터 시작되게 하게끔
    currentSlideCount = slick.slickCurrentSlide() + 1;

    // 전체 슬라이드 페이지 갯수
    totalSlideCount = slick.slideCount;

    // 현재 페이지 index / 전체 슬라이드 갯수 나누고 * 100을 해서 퍼센페이지화 시킴
    calc = (currentSlideCount / totalSlideCount) * 100;

    $(".pagingInfo").text(currentSlideCount + "/" + totalSlideCount);
    $(".progress").css("width", calc + "%");
  };

  const newSlider = $(".new-slider");

  newSlider.slick({
    dots: false, //네이베이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".new-left"), //이전 화살표
    nextArrow: $(".new-right"), //다음 화살표
    autoplay: true, //자동넘김
    autoplaySpeed: 5000, //자동넘김 속도
    speed: 1000, // 슬라이드 속도
    infinite: true, // 무한슬라이
    asNavFor: "", //다른 슬라이드 연동 여부
    swipe: true, //스와이프
    centerMode: true,
    variableWidth: true,
    initialSlide: 0, //슬라이드 시작순서
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
  });

  function slickActive() {
    if ($(".slide01").hasClass("slick-active")) {
      $(".desc.d1").addClass("active");
    } else if ($(".slide02").hasClass("slick-active")) {
      $(".desc.d2").addClass("active");
    } else if ($(".slide03").hasClass("slick-active")) {
      $(".desc.d3").addClass("active");
    } else if ($(".slide04").hasClass("slick-active")) {
      $(".desc.d4").addClass("active");
    } else if ($(".slide05").hasClass("slick-active")) {
      $(".desc.d5").addClass("active");
    }

    if ($(".new .new-centainer")) {
      $(".new-slider .slider-item").addClass("active");
    } else {
      $(".new-slider .slider-item").removeClass("active");
    }
  }

  $(".new-slider").on({
    init: function (event, slick) {},
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      $(".desc").removeClass("active");
    },
    afterChange: function (event, slick, currentSlide, nextSlide) {
      slickActive();
    },
  });
  
  
  // HERO SLIDER
  let menu = [];
  $('.swiper-slide').each( function(index){
      menu.push( $(this).find('.slide-inner').attr("data-text") );
  });
  let interleaveOffset = 0.5;
  let swiperOptions = {
      
      loop: true,
      speed: 1000,
      parallax: true,
      // autoplay: {
      //     delay: 6500,
      //     disableOnInteraction: false,
      // },
      watchSlidesProgress: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

      on: {
          progress: function() {
              let swiper = this;
              for (let i = 0; i < swiper.slides.length; i++) {
                  let slideProgress = swiper.slides[i].progress;
                  let innerOffset = swiper.width * interleaveOffset;
                  let innerTranslate = slideProgress * innerOffset;
                  swiper.slides[i].querySelector(".slide-inner").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }      
          },

          touchStart: function() {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
            }
          },

          setTransition: function(speed) {
              let swiper = this;
              for (let i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].style.transition = speed + "ms";
                  swiper.slides[i].querySelector(".slide-inner").style.transition =
                  speed + "ms";
              }
          }
      }
  };

  const swiper = new Swiper(".swiper-container", swiperOptions);

  // DATA BACKGROUND IMAGE
  const sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function(indx){
      if ($(this).attr("data-background")){
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });
});
