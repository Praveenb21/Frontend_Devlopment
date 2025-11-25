$(document).ready(function() {
    const $managers = $(".member.manager");
    const $members = $(".member");
    const $departments = $(".department");

    function clearHighlights() {
        $members.removeClass("highlight");
        $departments.removeClass("dept-highlight");
    }

    $managers.on("click", function(event) {
        event.stopPropagation();
        clearHighlights();
        $(this).siblings(".member").addClass("highlight");
    });

    $(".directory").on({
        mouseenter: function() {
            $(this).find(".member-info").stop(true, true).slideDown(200);
        },
        mouseleave: function() {
            $(this).find(".member-info").stop(true, true).slideUp(200);
        }
    }, ".member");


    $departments.on("click", function() {
        clearHighlights();
        $(this).toggleClass("dept-highlight");
        $(this).find(".team-list").children(".member").toggleClass("highlight");
    });

    $("body").on("click", function() {
        clearHighlights();
        const randomIndex = Math.floor(Math.random() * $members.length);
        const $randomMember = $members.eq(randomIndex);
        $randomMember.siblings(".member").addClass("highlight");
        $randomMember.addClass("highlight");
    });

    $(".department-header").on("click", function(event) {
        event.stopPropagation();
        $(this).parent(".department").find(".team-list").slideToggle(400);
    });
});