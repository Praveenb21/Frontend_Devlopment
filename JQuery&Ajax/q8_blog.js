$(document).ready(function() {
    let postIdCounter = 4;

    function createNewPost(title, content, isFeatured) {
        const featuredClass = isFeatured ? 'style="border-left: 5px solid #ff5722;"' : '';
        return `
            <article class="blog-post" data-post-id="${postIdCounter++}" ${featuredClass}>
                <h2>${title}</h2>
                <p class="post-content">${content}</p>
                <small>Published: ${new Date().toLocaleDateString()}</small>
            </article>
        `;
    }

    $("#add-post-btn").on("click", function() {
        const newPostHtml = createNewPost(
            "Quick Tip: jQuery Appends", 
            "Use the .append() method to insert content to the end of selected elements.", 
            false
        );
        $(".post-list").append(newPostHtml);
    });

    $("#prepend-post-btn").on("click", function() {
        const featuredPostHtml = createNewPost(
            "🔥 FEATURED: Master DOM Traversal", 
            "This featured article dives deep into .find(), .parent(), and .siblings().", 
            true
        );
        $(".post-list").prepend(featuredPostHtml);
    });

    $("#remove-last-btn").on("click", function() {
        $(".blog-post:last").remove();
    });

    $("#add-tags-btn").on("click", function() {
        $(".blog-post:eq(1) h2").after('<span class="tag">JQUERY</span><span class="tag">JS</span>');
        $(".blog-post:eq(2) p.post-content").after('<span class="tag">FRAMEWORKS</span>');
        $(this).prop("disabled", true).text("Tags Added");
    });
    
    $("#highlight-keywords-btn").on("click", function() {
        const keyword = "new";
        
        $(".post-content").each(function() {
            const $content = $(this);
            const originalText = $content.html();
            
            const regex = new RegExp(keyword, "gi");
            
            const highlightedText = originalText.replace(regex, `<span class="keyword-highlight">${keyword.toUpperCase()}</span>`);
            
            $content.html(highlightedText);
        });

        $(this).prop("disabled", true).text("Keywords Highlighted");
    });
});