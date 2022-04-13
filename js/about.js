$(function () {


    const about_cover_offset = $(".about-image").offset().top;
    const about_offset = $(".img-banner").offset().top;

    const comfort_offset = $(".about-comfort").offset().top;
    const about_eco_offset = $(".about-eco").offset().top;
    const about_design_offset = $(".about-design").offset().top;

    // const product_offset = $(".").offset().top;

    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();

        //   이미지가 픽스되는 타이밍
        if (scrollTop > about_offset) {
            $(".img-banner .about-image").css({
                position: "fixed",
            });
            if (scrollTop > about_offset) {
                $(".about-list li.list-btn a").css({
                    color: "#fff",
                });
            }
        } else {
            $(".img-banner .about-image").css({
                position: "",
            });
            $(".about-list li.list-btn a").css({
                color: "#000",
            });
        }
        //   이미지 픽스에 오퍼시티 들어가는 타이밍
        if (scrollTop >= about_cover_offset + $(window).innerHeight()) {
            $(".about-image .black-cover").css({
                opacity: "0.9",
            });
            if (scrollTop > about_offset) {
                $(".about-list li.list-btn a").css({
                    color: "#000",
                });
            }
        } else {
            $(".about-image .black-cover").css({
                opacity: "0",
            });
        }

        // about-comfort;
        if (scrollTop > comfort_offset) {
            $(".about-comfort .container").css({
                transform: "translateY(0)",
                opacity: "1",
            });
        }
        // about-eco
        if (scrollTop > about_eco_offset) {
            $(".about-eco .container").css({
                transform: "translateY(0)",
                opacity: "1",
            });
        }
        // about-design
        if (scrollTop > about_design_offset) {
            $(".about-design .container").css({
                transform: "translateY(0)",
                opacity: "1",
            });
        }
    });

    $(".about-list li").click(function () {
        $(".about-list li").removeClass("active");
        $(this).addClass("active");
        let tabName = $(this).attr("data-name");

        $(".about-list-item").removeClass("active");
        $("#" + tabName).addClass("active");
    });
})