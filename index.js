function validateForm(e) {
    const form = e.target;

    if (form.checkValidity()) {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm_password');
        const errorMsg = document.getElementById('error_msg');

        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMsg.innerText = '';

        if (password.value !== confirmPassword.value) {
            password.classList.add('error');
            confirmPassword.classList.add('error');
            errorMsg.innerText = '* Passwords do not match';
        } else {
            // eslint-disable-next-line no-alert
            alert('The form is valid. Let\'s pretend this button does something useful.');
        }
    }
    e.preventDefault();
}

const myform = document.getElementById('signup-form');
myform.addEventListener('submit', validateForm);
