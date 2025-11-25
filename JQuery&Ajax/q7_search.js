$(document).ready(function() {
    const $searchInput = $("#search-input");
    const $courseItems = $(".course-item");
    const $matchCount = $("#match-count");

    function resetHighlights() {
        $courseItems.find(".highlighted-text").each(function() {
            $(this).replaceWith($(this).text());
        });
    }

    $searchInput.on("keyup", function() {
        const searchTerm = $(this).val().toLowerCase().trim();
        let matchedCount = 0;

        resetHighlights();

        if (searchTerm.length === 0) {
            $courseItems.removeClass("no-match").show();
            matchedCount = $courseItems.length;
        } else {
            $courseItems.each(function() {
                const $course = $(this);
                const courseText = $course.text().toLowerCase();
                
                if (courseText.includes(searchTerm)) {
                    matchedCount++;
                    $course.removeClass("no-match").show();

                    const originalHTML = $course.html();
                    const regex = new RegExp("(" + searchTerm + ")", "gi");
                    const highlightedHTML = originalHTML.replace(regex, '<span class="highlighted-text">$1</span>');
                    
                    $course.html(highlightedHTML);

                } else {
                    $course.addClass("no-match").hide();
                }
            });
        }
        
        $matchCount.text(matchedCount);
    });
    
    $("#clear-search-btn").on("click", function() {
        $searchInput.val("");
        $searchInput.trigger("keyup"); 
    });
});