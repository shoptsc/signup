const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    // get values from the inputs
    const usernameValue = username.value.trim();
    const emailValues = email.value.trim();
    const passwordValues = password.value.trim();
    const password2Values = password2.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank')
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValues === '') {
        //show error
        //add error class
        setErrorFor(email, 'email cannot be blank')
    } else {
        // add success class
        setSuccessFor(email);
    }

    if (passwordValues === '') {
        //show error
        //add error class
        setErrorFor(password, 'password cannot be blank')
    } else {
        // add success class
        setSuccessFor(password);
    }

    if (password2Values === '') {
        //show error
        //add error class
        setErrorFor(password2, 'password2 cannot be blank')
    } else if (passwordValues !== password2Values) {
        setErrorFor(password2, 'Password does not match');
    } else {
        // add success class
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
