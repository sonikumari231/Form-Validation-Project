const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// function to validate the form
function validateForm() {
    let isValid = true;

    if (nameInput.value.length < 5) {
        nameError.innerHTML = 'Name must be at least 5 characters';
        isValid = false;
    } else {
        nameError.innerHTML = '';
    }

    if (emailInput.value.indexOf('@') == -1) {
        emailError.innerHTML = 'Email must contain @ character';
        isValid = false;
    } else {
        emailError.innerHTML = '';
    }

    if (phoneInput.value === '123456789' || phoneInput.value.length !== 10) {
        phoneError.innerHTML = 'Phone number must be a 10-digit number and should not be 123456789';
        isValid = false;
    } else {
        phoneError.innerHTML = '';
    }

    if (passwordInput.value === 'password' || passwordInput.value === nameInput.value || passwordInput.value.length < 8) {
        passwordError.innerHTML = 'Password cannot be \'password\' or \'name of the user\' or less than 8 characters';
        isValid = false;
    } else {
        passwordError.innerHTML = '';
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.innerHTML = 'Password and confirm password should match';
        isValid = false;
    } else {
        confirmPasswordError.innerHTML = '';
    }

    return isValid;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        // submit the form if it is valid
        form.submit();
    }
});

nameInput.addEventListener('input', function() {
    if (nameInput.value.length < 5) {
        nameError.innerHTML = 'Name must be at least 5 characters';
    } else {
        nameError.innerHTML = '';
    }
});

emailInput.addEventListener('input', function() {
    if (emailInput.value.indexOf('@') == -1) {
        emailError.innerHTML = 'Email must contain @ character';
    } else {
        emailError.innerHTML = '';
    }
});

phoneInput.addEventListener('input', function() {
    if (phoneInput.value === '123456789' || phoneInput.value.length !== 10) {
        phoneError.innerHTML = 'Phone number must be a 10-digit number and should not be 123456789';
    } else {
        phoneError.innerHTML = '';
    }
});

passwordInput.addEventListener('input', function() {
    if (passwordInput.value === 'password' || passwordInput.value === nameInput.value || passwordInput.value.length < 8) {
        passwordError.innerHTML = 'Password cannot be \'password\' or \'name of the user\' or less than 8 characters';
    } else {
        passwordError.innerHTML = '';
    }
});

confirmPasswordInput.addEventListener('input', function() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.innerHTML = 'Password and confirm password should match';
    } else {
        confirmPasswordError.innerHTML = '';
    }
});
