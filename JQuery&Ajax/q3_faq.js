$(document).ready(function() {
    const $questions = $(".faq-question");
    const $answers = $(".faq-answer");
    const $inputs = $(".answer-input");

    $questions.on("click", function() {
        $(this).next(".faq-answer").slideToggle(300);
    });

    $questions.on({
        mouseenter: function() {
            $(this).addClass("hover-color");
        },
        mouseleave: function() {
            $(this).removeClass("hover-color");
        }
    });

    $questions.on("dblclick", function() {
        $answers.slideUp(300);
    });

    $inputs.on("focus", function() {
        $(this).closest(".faq-item").find(".faq-question").addClass("parent-highlight");
    });

    $inputs.on("blur", function() {
        $(this).closest(".faq-item").find(".faq-question").removeClass("parent-highlight");
    });
});