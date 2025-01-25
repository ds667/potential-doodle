let password = document.getElementById("password");
let power = document.getElementById("power-point");
let showPassword = document.getElementById("show-password");
let generatePasswordBtn = document.getElementById("generate-password");

password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#4caf50"];

    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};

showPassword.onchange = function () {
    password.type = this.checked ? "text" : "password";
};

generatePasswordBtn.onclick = function () {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}<>?";
    let passwordLength = 12;
    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        generatedPassword += chars[randomIndex];
    }

    password.value = generatedPassword;
    password.dispatchEvent(new Event("input"));
};
