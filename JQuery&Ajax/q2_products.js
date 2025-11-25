$(document).ready(function() {
    const $products = $(".product-card");

    $products.on("click", function() {
        $(this).toggleClass("highlighted");

        if ($(this).data("stock") === "out-of-stock") {
            const productName = $(this).find("h3").text();
            alert("⚠️ " + productName + " is currently out of stock!");
        }
    });

    $products.on({
        mouseenter: function() {
            $(this).find(".details").slideDown(200);
        },
        mouseleave: function() {
            $(this).find(".details").slideUp(200);
        }
    });

    $(".product-list").on("click", ".favorite-icon", function(event) {
        event.stopPropagation(); 
        $(this).toggleClass("selected");
    });
});