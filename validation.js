function validateLoginForm() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let emailError = document.getElementById('login-email-error');
    let passwordError = document.getElementById('login-password-error');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
        return false;
    }

    return true; // Form is valid, allow submission
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

