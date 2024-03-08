// Joemol Joy - 8912316

"use strict";

$(document).ready(function () {

    // Function to display notifications
    let showNotification = (message, type) => {
        const notification = $('.notification');
        notification.text(message);
        notification.removeClass('success error').addClass(type).animate({ height: 'toggle' });

        setTimeout(function () {
            // Toogle animate when showing notification
            notification.animate({
                height: 'toggle'
            });
        }, 2000);
    }

    // Function to clear the form after submission
    let clearForm = () => {
        $('#contactForm')[0].reset();
    }

    // Submit event for contact form
    $('#contactForm').submit(function (event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        // Checking if all fields are filled
        if (name && email && message) {
            showNotification('Success! Form submitted.', 'success');
            clearForm();
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });

    // Fading in contact information and form
    $('.contact-info').hide().fadeIn(1000);
    $('.contact-form').hide().fadeIn(1500);
});




