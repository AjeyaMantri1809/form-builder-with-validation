const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const phone_number = document.getElementById('phone');
const email_address = document.getElementById('email');
const password = document.getElementById('password');
const cfm_password = document.getElementById('cfm_password');
const message_container = document.querySelector('.message-container');
const message  = document.getElementById('error_msg');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent =  'Please fill out all fields';
        message.style.color = 'red';
        message_container.style.display = 'flex';
        message_container.style.borderColor = 'red';
        return;
    } else {
        message.textContent =  '';
        message_container.style.display = 'none';
    }

    checkPasswordMatching();

    if(passwordsMatch && isValid){
        message.textContent =  'Successfully Registered';
        message.style.color = 'green';
        message_container.style.display = 'flex';
        message_container.style.borderColor = 'green';
    }
}

function checkPasswordMatching(){
    if(password.value === cfm_password.value){
        passwordsMatch = true;
        password.style.borderColor = 'green';
        cfm_password.style.borderColor = 'green';
        message.textContent =  '';
        message_container.style.display = 'none';
    } else {
        passwordsMatch = false;
        password.style.borderColor = 'red';
        cfm_password.style.borderColor = 'red';
        message.textContent =  'Passwords do not match';
        message.style.color = 'red';
        message_container.style.display = 'flex';
        message_container.style.borderColor = 'red';
    }
}

// In real application or website, replace this function with a function to send information to the backend. 
// Ensure that you do not send information or log it without encrypting, especially passwords.

function storeFormData(){
    const user = {
        name: first_name.value + '' + last_name.value,
        number : phone_number.value,
        email : phone_number.value,
        pwd: password.value,
    }
    console.log(user); 
}

function processFormData(e){
    e.preventDefault();
    validateForm();
    if(passwordsMatch && isValid){
        storeFormData();
    }
}

form.addEventListener('submit', processFormData);

