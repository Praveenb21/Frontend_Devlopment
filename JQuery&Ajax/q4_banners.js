$(document).ready(function() {
    $("#hide-btn").on("click", function() {
        $(".banner-1").hide(300);
    });

    $("#show-btn").on("click", function() {
        $(".banner-1").show(300);
    });

    $("#slide-btn").on("click", function() {
        $(".banner-2").slideToggle(400); 
    });

    $("#fade-out-btn").on("click", function() {
        $(".banner-2").fadeOut(600);
    });

    $("#fade-in-btn").on("click", function() {
        $(".banner-2").fadeIn(600);
    });

    const $rotatingBanners = $(".rotating-banner");
    let currentIndex = 0;

    function rotateBanner() {
        $rotatingBanners.eq(currentIndex).fadeOut(1000, function() {
            currentIndex = (currentIndex + 1) % $rotatingBanners.length;
            $rotatingBanners.eq(currentIndex).fadeIn(1000);
        });
    }

    $rotatingBanners.first().show();

    setInterval(rotateBanner, 5000); 
});