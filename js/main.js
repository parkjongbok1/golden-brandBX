$(function () {
  // main
  const sec3_offset = $(".sec3").offset().top;
  const sec3_video_offset = $(".style-con").offset().top;
  const bed_offset = $(".Bedroom").offset().top;
  const Living_offset = $(".Livingroom").offset().top;
  const library_offset = $(".library").offset().top;
  const Kitchen_offset = $(".Kitchen").offset().top;
  const Dining_offset = $(".Diningroom").offset().top;

  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();

    if ($(this).innerWidth() >= 1000) {
      if (scrollTop >= sec3_video_offset) {
        $(".sec3-inner .style-con").css({
          position: "fixed",
        });
      } else {
        $(".sec3-inner .style-con").css({
          position: "",
        });
      }

      if (scrollTop >= sec3_offset + $(window).innerHeight()) {
        $(".sec3-inner .title").css({
          opacity: "0",
        });
        $(".style-con .black-cover").css({
          opacity: "0.93",
        });
      } else {
        $(".sec3-inner .title").css({
          opacity: "",
        });
        $(".style-con .black-cover").css({
          opacity: "",
        });
      }

      // Bedroom
      if (scrollTop >= bed_offset + $(window).innerHeight() / -2) {
        $(".Bedroom .image-item img").addClass("ani");
        $(".style .style-item .item ").css({});
      } else {
        $(".Bedroom .image-item img").removeClass("ani");
        $(".style .style-item .item").css({});
      }

      // Livingroom;
      if (scrollTop >= Living_offset + $(window).innerHeight() / -5) {
        $(".Livingroom .image-item img").addClass("ani");
        $(".style .style-item .item").css({});
      } else {
        $(".Livingroom .image-item img").removeClass("ani");
        $(".style .style-item .item").css({});
      }

      // library
      if (scrollTop >= library_offset + $(window).innerHeight() / -5) {
        $(".library .image-item img").addClass("ani");
        $(".style .style-item .item").css({});
      } else {
        $(".library .image-item img").removeClass("ani");
        $(".style .style-item .item").css({});
      }

      // Kitchen
      if (scrollTop >= Kitchen_offset + $(window).innerHeight() / -5) {
        $(".Kitchen .image-item img").addClass("ani");
        $(".style .style-item .item").css({});
      } else {
        $(".Kitchen .image-item img").removeClass("ani");
        $(".style .style-item .item").css({});
      }

      // Diningroom
      if (scrollTop >= Dining_offset + $(window).innerHeight() / -5) {
        $(".Diningroom .image-item img").addClass("ani");
        $(".style .style-item .item").css({});
      } else {
        $(".Diningroom .image-item img").removeClass("ani");
        $(".style .style-item .item").css({});
      }
    }
    // $(".pos").text(scrollTop);

  });

  // ------- 메인 클릭이벤트, 호버, 기타..  ------ //

  $(".promotion-con .video-btn span").on("click", function () {
    if ($(this).hasClass("play")) {
      $("#video").get(0).play();

      $(this).fadeOut();
      $(this).siblings(".pause").fadeIn();
    } else {
      $("#video").get(0).pause();

      $(this).fadeOut();
      $(this).siblings(".play").fadeIn();
    }
  });

  
});
