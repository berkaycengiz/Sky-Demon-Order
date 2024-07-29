const names = document.getElementById("nameid");
const username = document.getElementById("usernameid");
const email = document.getElementById("emailid");
const password = document.getElementById("passwordid");
const cpassword = document.getElementById("cpasswordid");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
};


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(!isValidEmail(emailValue)){
        setError(email, "The email must be a valid email address.");
    }
    else{
        setSuccess(email);
    }

    if(passwordValue.length < 8 ) {
        setError(password, 'The password must be at least 8 character.')
    } 

    else{
        setSuccess(password);
    }

    if(cpasswordValue !== passwordValue) {
        setError(cpassword, "The password confirmation does not match.");
    }
    else{
        setSuccess(cpassword);
    }
};
