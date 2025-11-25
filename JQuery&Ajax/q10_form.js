$(document).ready(function() {
    const $form = $("#registration-form");
    const $name = $("#name");
    const $email = $("#email");
    const $password = $("#password");
    const $successMessage = $("#success-message");

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isEmailUnique(email) {
        return email.toLowerCase() !== 'test@example.com';
    }

    function validateField($field, condition, errorMessageId, invalidMessage) {
        const isValid = condition;
        const $errorElement = $field.siblings(`#${errorMessageId}`);

        if (isValid) {
            $field.removeClass("invalid-field");
            $errorElement.hide();
        } else {
            $field.addClass("invalid-field");
            $errorElement.text(invalidMessage || $errorElement.text()).show();
        }
        return isValid;
    }

    $form.on("submit", function(event) {
        event.preventDefault(); 
        
        $successMessage.hide();
        let formValid = true;

        const isNameValid = validateField($name, $name.val().trim().length > 0, 'name-error', "Name cannot be empty.");
        if (!isNameValid) formValid = false;

        const emailValue = $email.val().trim();
        const isFormatValid = isValidEmail(emailValue);
        const isUniqueValid = isEmailUnique(emailValue);
        
        let emailMessage = "Please enter a valid email address.";
        if (!isFormatValid) {
        } else if (!isUniqueValid) {
            emailMessage = "This email is already registered.";
        }
        
        const isEmailValid = validateField($email, isFormatValid && isUniqueValid, 'email-error', emailMessage);
        if (!isEmailValid) formValid = false;

        const isPasswordValid = validateField($password, $password.val().length >= 8, 'password-error', "Password must be at least 8 characters long.");
        if (!isPasswordValid) formValid = false;

        if (formValid) {
            $(".error-message").hide();
            $("input").removeClass("invalid-field");
            
            $successMessage.fadeIn(500);

            setTimeout(() => {
                $form[0].reset();
                $successMessage.fadeOut(500);
            }, 3000);
        }
    });
});