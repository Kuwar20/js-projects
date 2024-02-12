const passwordBox = document.getElementById("Password");
const length = 12;
// const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

function copyPassword() {
    if (passwordBox.value) {
        passwordBox.select();
        document.execCommand("copy");
    } else {
        alert("Please Generate a password first");
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("Password");
    const eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 15.5C13.8 15.5 15.43 14 16.5 12C15.43 10 13.8 8.5 12 8.5S8.57 10 7.5 12C8.57 14 10.2 15.5 12 15.5M12 4C6.5 4 2 8.69 2 12s4.5 8 10 8s10-4.69 10-8s-4.5-8-10-8m-2 6a1 1 0 0 1 1 1c0 1.11 1.34 2.44 2.54 3.74C14.91 13.23 14 12.67 14 12a2 2 0 1 1 4 0c0 2.05-2.55 4.44-4.54 6.26C12.57 18.22 12 18.62 12 19a2 2 0 0 0 4 0c0-1.29 2-2.84 2-4a1 1 0 0 1 1-1z"/></svg>';
    } else {
        passwordInput.type = "password";
        eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 15.5C13.8 15.5 15.43 14 16.5 12C15.43 10 13.8 8.5 12 8.5S8.57 10 7.5 12C8.57 14 10.2 15.5 12 15.5M12 4C6.5 4 2 8.69 2 12s4.5 8 10 8s10-4.69 10-8s-4.5-8-10-8m-2 6a1 1 0 0 1 1 1c0 1.11 1.34 2.44 2.54 3.74C14.91 13.23 14 12.67 14 12a2 2 0 1 1 4 0c0 2.05-2.55 4.44-4.54 6.26C12.57 18.22 12 18.62 12 19a2 2 0 0 0 4 0c0-1.29 2-2.84 2-4a1 1 0 0 1 1-1z"/></svg>';
    }
}