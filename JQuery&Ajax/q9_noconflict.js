$j1(document).ready(function() {
    const $carousel = $j1("#carousel");
    const $slides = $j1(".carousel-item");
    let currentSlide = 0;
    
    $slides.hide();
    $slides.eq(currentSlide).show();

    $j1("#next-slide").on("click", function() {
        $slides.eq(currentSlide).fadeOut(500, function() {
            currentSlide = (currentSlide + 1) % $slides.length;
            $slides.eq(currentSlide).fadeIn(500);
        });
    });

    $j1("#carousel-widget").addClass("active-widget");
});


$j3(document).ready(function() {
    $j3("#show-modal").on("click", function() {
        $j3("#notification-modal").fadeIn(400);
    });

    $j3("#close-modal").on("click", function() {
        $j3("#notification-modal").fadeOut(400);
    });

    $j3("#tooltip-target").on({
        mouseenter: function() {
            const tooltipText = $j3(this).attr("title");
            const $this = $j3(this);
            
            $this.attr("data-title", tooltipText).removeAttr("title"); 

            $j3("body").append('<div class="tooltip">' + tooltipText + '</div>');
            const $tooltip = $j3(".tooltip");
            
            const pos = $this.offset();
            $tooltip.css({
                top: pos.top - $tooltip.outerHeight() - 5,
                left: pos.left + ($this.outerWidth() / 2) - ($tooltip.outerWidth() / 2)
            }).fadeIn(200);
        },
        mouseleave: function() {
            const originalTitle = $j3(this).attr("data-title");
            $j3(this).attr("title", originalTitle).removeAttr("data-title");
            $j3(".tooltip").remove();
        }
    });
});