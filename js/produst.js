$(function () {
  $(".living-slider").slick({
    dots: false, //네이베이션 사용여부
    arrows: true, //화살표 사용여부
    prevArrow: $(".living-left"), //이전 화살표
    nextArrow: $(".living-right"), //다음 화살표
    autoplay: false, //자동넘김
    autoplaySpeed: 2300, //자동넘김 속도
    speed: 900, // 슬라이드 속도
    infinite: true, // 무한슬라이
    swipe: true, //스와이프
    variableWidth: true,
    initialSlide: 0, //슬라이드 시작순서
    slidesToShow: 2, //보여질 슬라이드 갯수
    slidesToScroll: 2, //넘겨질 슬라이드 갯수
    // cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", //css transition
  });

  // product-list
  $(".footer-btn").click(function () {
    $(".footer").toggleClass("active");
  });

  // product-이미지(호버)
  $(".product-list li").click(function () {
    // 백그라운드 이미지
    const imgName1 = "image/product/livingroom";
    const imgName2 = "image/product/diningroom";
    const imgName3 = "image/product/livingroom";
    const imgName4 = "image/product/diningroom";

    // 호버이미지
    const imghover1 = "../image/product/livingroom_on";
    const imghover2 = "../image/product/diningroom_on";

    $(".product-list li").removeClass("active");

    $(this).addClass("active");

    if ($(this).hasClass("p2")) {
      $(".product-slider a.living-img01 .img-hover").css({
        backgroundImage: `url("${imghover2}(1).png")`,
      });
      $(".change-text01").text("asd1.");

      $(".product-slider a.living-img02 .img-hover").css({
        backgroundImage: `url("${imghover2}(2).png")`,
      });
      $(".change-text02").text("asd2.");

      $(".product-slider a.living-img03 .img-hover").css({
        backgroundImage: `url("${imghover2}(3).png")`,
      });
      $(".change-text03").text("asd3.");

      $(".product-slider a.living-img04 .img-hover").css({
        backgroundImage: `url("${imghover2}(4).png")`,
      });
      $(".change-text04").text("asd4.");

      $(".product-slider a.living-img05 .img-hover").css({
        backgroundImage: `url("${imghover2}(5).png")`,
      });
      $(".change-text05").text("asd5.");

      $(".product-slider a.living-img06 .img-hover").css({
        backgroundImage: `url("${imghover2}(6).png")`,
      });
      $(".change-text06").text("asd6.");

      $(".living-slider .living-img01 img").attr("src", imgName2 + "(1).png");
      $(".living-slider .living-img02 img").attr("src", imgName2 + "(2).png");
      $(".living-slider .living-img03 img").attr("src", imgName2 + "(3).png");
      $(".living-slider .living-img04 img").attr("src", imgName2 + "(4).png");
      $(".living-slider .living-img05 img").attr("src", imgName2 + "(5).png");
      $(".living-slider .living-img06 img").attr("src", imgName2 + "(6).png");
    } else if ($(this).hasClass("p3")) {
      $(".product-slider a.living-img01 .img-hover").css({
        backgroundImage: `url("${imghover2}(3).png")`,
      });
      $(".change-text01").text("bellport");

      $(".product-slider a.living-img02 .img-hover").css({
        backgroundImage: `url("${imghover2}(5).png")`,
      });
      $(".change-text02").text("friend");

      $(".product-slider a.living-img03 .img-hover").css({
        backgroundImage: `url("${imghover1}(3).png")`,
      });
      $(".change-text03").text("sydney");

      $(".product-slider a.living-img04 .img-hover").css({
        backgroundImage: `url("${imghover1}(4).png")`,
      });
      $(".change-text04").text("bellport");

      $(".product-slider a.living-img05 .img-hover").css({
        backgroundImage: `url("${imghover1}(1).png")`,
      });
      $(".change-text05").text("tribeca");

      $(".product-slider a.living-img06 .img-hover").css({
        backgroundImage: `url("${imghover2}(6).png")`,
      });
      $(".change-text06").text("home-hotel");

      $(".living-slider .living-img01 img").attr("src", imgName3 + "(1).png");
      $(".living-slider .living-img02 img").attr("src", imgName3 + "(2).png");
      $(".living-slider .living-img03 img").attr("src", imgName3 + "(3).png");
      $(".living-slider .living-img04 img").attr("src", imgName3 + "(4).png");
      $(".living-slider .living-img05 img").attr("src", imgName3 + "(5).png");
      $(".living-slider .living-img06 img").attr("src", imgName3 + "(6).png");
    } else if ($(this).hasClass("p4")) {
      $(".product-slider a.living-img01 .img-hover").css({
        backgroundImage: `url("${imghover2}(5).png")`,
      });
      $(".change-text01").text("bellport?");

      $(".product-slider a.living-img02 .img-hover").css({
        backgroundImage: `url("${imghover1}(6).png")`,
      });
      $(".change-text02").text("friend?");

      $(".product-slider a.living-img03 .img-hover").css({
        backgroundImage: `url("${imghover1}(4).png")`,
      });
      $(".change-text03").text("sydney?");

      $(".product-slider a.living-img04 .img-hover").css({
        backgroundImage: `url("${imghover2}(2).png")`,
      });
      $(".change-text04").text("bellport?");

      $(".product-slider a.living-img05 .img-hover").css({
        backgroundImage: `url("${imghover2}(1).png")`,
      });
      $(".change-text05").text("tribeca?");

      $(".product-slider a.living-img06 .img-hover").css({
        backgroundImage: `url("${imghover1}(3).png")`,
      });
      $(".change-text06").text("home-hotel?");

      $(".living-slider .living-img01 img").attr("src", imgName4 + "(1).png");
      $(".living-slider .living-img02 img").attr("src", imgName4 + "(2).png");
      $(".living-slider .living-img03 img").attr("src", imgName4 + "(3).png");
      $(".living-slider .living-img04 img").attr("src", imgName4 + "(4).png");
      $(".living-slider .living-img05 img").attr("src", imgName4 + "(5).png");
      $(".living-slider .living-img06 img").attr("src", imgName4 + "(6).png");
    } else if ($(this).hasClass("p1")) {
      $(".product-slider a.living-img01 .img-hover").css({
        backgroundImage: `url("${imghover1}(1).png")`,
      });
      $(".change-text01").text("bellport");

      $(".product-slider a.living-img02 .img-hover").css({
        backgroundImage: `url("${imghover1}(2).png")`,
      });
      $(".change-text02").text("friend");

      $(".product-slider a.living-img03 .img-hover").css({
        backgroundImage: `url("${imghover1}(3).png")`,
      });
      $(".change-text03").text("sydney");

      $(".product-slider a.living-img04 .img-hover").css({
        backgroundImage: `url("${imghover1}(4).png")`,
      });
      $(".change-text04").text("bellport");

      $(".product-slider a.living-img05 .img-hover").css({
        backgroundImage: `url("${imghover1}(5).png")`,
      });
      $(".change-text05").text("tribeca");

      $(".product-slider a.living-img06 .img-hover").css({
        backgroundImage: `url("${imghover1}(6).png")`,
      });
      $(".change-text06").text("home-hotel");

      $(".living-slider .living-img01 img").attr("src", imgName1 + "(1).png");
      $(".living-slider .living-img02 img").attr("src", imgName1 + "(2).png");
      $(".living-slider .living-img03 img").attr("src", imgName1 + "(3).png");
      $(".living-slider .living-img04 img").attr("src", imgName1 + "(4).png");
      $(".living-slider .living-img05 img").attr("src", imgName1 + "(5).png");
      $(".living-slider .living-img06 img").attr("src", imgName1 + "(6).png");
    } else {
    }
  });
});
