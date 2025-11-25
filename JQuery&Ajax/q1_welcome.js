$(document).ready(function() {
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning! Have a productive start.";
        } else if (hour < 18) {
            return "Good Afternoon! Hope you're having a great day.";
        } else {
            return "Good Evening! Time to relax and explore.";
        }
    }

    $("#greeting-text").text(getGreeting());

    $("#change-greeting-btn").on("click", function() {
        const quote = "The only way to do great work is to love what you do. - Steve Jobs";
        $("#greeting-text").text(quote).css("color", "#00796b");
    });

    $("#toggle-message-btn").on("click", function() {
        $("#welcome-message").toggle(400);
        const isVisible = $("#welcome-message").is(":visible");
        $(this).text(isVisible ? "Hide Welcome Message" : "Show Welcome Message");
    });

    $("#greeting-text").on("click", function() {
        alert("You clicked the greeting! Current text: " + $(this).text());
    });

    $("#toggle-message-btn").text("Hide Welcome Message");
});