function validateSignUpForm() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('signup-confirm-password').value;

    let nameError = document.getElementById('signup-name-error');
    let emailError = document.getElementById('signup-email-error');
    let passwordError = document.getElementById('signup-password-error');
    let confirmPasswordError = document.getElementById('signup-confirm-password-error');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';

    // Name validation
    if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        nameError.style.display = 'block';
        return false;
    }

    // Email validation
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return false;
    }

    // Password validation: Minimum 8 characters, at least one uppercase letter
    if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter.';
        passwordError.style.display = 'block';
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        return false;
    }

    return true; // Form is valid, allow submission
}

// Helper function to validate email using regex
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Helper function to validate password: Minimum 8 characters, at least one uppercase letter
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // At least 8 characters, at least one uppercase letter
    return passwordRegex.test(password);
}
