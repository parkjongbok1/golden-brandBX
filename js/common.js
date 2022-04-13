$(function () {
  let didScroll = 10;
  let lastScrollTop = 0;
  const delta = 5;
  const headerHeight = $(".header").outerHeight();
  const sec1_Height = $(".sec1").innerHeight();

  setInterval(function () {
    if (didScroll) {
      scrollHeaderEvent();
      didScroll = false;
    }
  }, 500);

  $(window).on("scroll", function () {
    didScroll = true;
  });

  function scrollHeaderEvent() {
    const scrollTop = $(this).scrollTop();

    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    }

    // 이전 스크롤 보다 스크롤을 내였을때
    if (scrollTop > lastScrollTop && scrollTop > sec1_Height - headerHeight) {
      $(".header").addClass("sticky");

      // 이전 스크롤 보다 스크롤을 올렸을때
    } else {
      if (scrollTop + $(window).innerHeight() < $(document).innerHeight()) {
        $(".header").removeClass("sticky");
      }
    }

    lastScrollTop = scrollTop;
  }

  // click event

  //  menu
  $(".menu-btn").click(function () {
    $(".menu-btn, .menu-bar").toggleClass("active");
  });

  $(".user").click(function () {
    $(".gnb-box .user i.fa-user").toggleClass("active");
    $(".pop-section").stop().fadeToggle(500);
  });

  // plan-popup
  $(".plan-container .title .desc button").click(function () {
    $(".plan-popup").toggleClass("active");
  });

  // service-pop
  $(".balloon").click(function () {
    $(".service-pop .container .up-items").toggleClass("active");
  });

  // event-video
  $(".login-btn span").on("click", function () {
    if ($(this).toggleClass(".login-btn span")) {
      $("event-video video").get(0).play();
    } else {
      $("event-video video").get(0).pause();
    }
  });

  // login
  $(".login-btn span").on("click", function () {
    if ($(this).hasClass("login-item")) {
      alert("정보를 입력하세요.");
    }
    if ($(this).hasClass("login-find")) {
      alert("이동하시겠습니까?");
    }
    if ($(this).hasClass("sign-up-item")) {
      alert("회원가입 하시겠습니까?.");
    }
  });

  // planning
  $(".plan-sofa").click(function () {
    $(".sofa-item").toggleClass("active");
  });

  $(".plan-table-s").click(function () {
    $(".table-s-item ").toggleClass("active");
  });

  $(".plan-table-b").click(function () {
    $(".table-b-item ").toggleClass("active");
  });

  $(".plan-armchair").click(function () {
    $(".armchair-item").toggleClass("active");
  });

  $(".plan-poof").click(function () {
    $(".poof-item").toggleClass("active");
  });
});
