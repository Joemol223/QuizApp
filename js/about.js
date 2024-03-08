// Joemol Joy - 8912316

"use strict";

$(document).ready(() => {
    const slider = $("#image_list");
    const imageWidth = $("#image_list li").outerWidth(true);
    let currentPosition = 0;

    // Handling the click event for the right button
    $("#right_button").click(() => {

        // Checking if there are more images to scroll
        if (currentPosition > -((slider.find('li').length - 3) * imageWidth)) {
            currentPosition -= imageWidth;

            // Animating the slider to move left
            slider.animate({ left: currentPosition }, 100);
        }
    });

    // Handling the click event for the left button
    $("#left_button").click(() => {

        // Checking if it's not at the beginning
        if (currentPosition !== 0) {
            currentPosition += imageWidth;

            // Animating the slider to move right
            slider.animate({ left: currentPosition }, 100);
        }
    });

    // jQuery UI tabs functionality with mouseover event
    $(function () {
        $("#tabs").tabs({ event: "mouseover" });
    });
});
