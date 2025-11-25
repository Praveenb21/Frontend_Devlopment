const subscriptionHandler = function() {
    const topic = $(this).data("topic");
    const $listItem = $(this).closest("li");

    $listItem.toggleClass("subscribed-topic");
    
    const isSubscribed = $listItem.hasClass("subscribed-topic");
    
    const statusText = isSubscribed 
        ? `Successfully **Subscribed** to ${topic}!`
        : `Successfully **Unsubscribed** from ${topic}.`;
    
    $("#status-message").html(statusText).slideDown(300).delay(2000).slideUp(300);
};

$(document).ready(function() {
    const $status = $("#notification-status");
    const $topicList = $("#topic-list");
    
    $topicList.on("click", ".topic-btn", subscriptionHandler);

    $("#subscribe-btn").on("click", function() {
        $status.text("Notifications are currently **Enabled**").removeClass("disabled").addClass("enabled");
        $("#status-message").html("You are now **subscribed** to all events!").slideDown(300).delay(2000).slideUp(300);
    });

    $("#unsubscribe-btn").on("click", function() {
        $status.text("Notifications are currently **Disabled**").removeClass("enabled").addClass("disabled");
        $("#status-message").html("You have been **unsubscribed** from all events.").slideDown(300).delay(2000).slideUp(300);
    });

    $("#add-topic-btn").on("click", function() {
        const newTopic = $("#new-topic-name").val().trim();
        if (newTopic) {
            const $newItem = $(`
                <li>
                    <span>${newTopic} </span>
                    <button class="topic-btn" data-topic="${newTopic.toLowerCase().replace(/\s/g, '-')}">Toggle Status (on/off)</button>
                    <button class="remove-topic-btn">Remove</button>
                </li>
            `);
            
            $topicList.append($newItem);
            
            $("#new-topic-name").val("");
            $("#status-message").html(`New topic **${newTopic}** added successfully!`).slideDown(300).delay(2000).slideUp(300);
        } else {
            alert("Please enter a topic name.");
        }
    });

    $("#removable-topic-btn").on("click", function() {
        $topicList.off("click", "#removable-topic-btn");

        $(this).closest("li").slideUp(300, function() {
            $(this).remove();
            $("#status-message").html("Topic removed and event detached using **.off()**!").slideDown(300).delay(2000).slideUp(300);
        });
    });

    $topicList.on("click", ".remove-topic-btn:not(#removable-topic-btn)", function() {
        $(this).closest("li").slideUp(300, function() {
            $(this).remove();
        });
    });
});