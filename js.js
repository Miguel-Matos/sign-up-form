// let button = document.querySelector("#submit");
// let password = document.querySelector("#password");
// let password2 = document.querySelector("#password2");

let error = document.querySelector(".error");

error.oninvalid = function(event) {
        event.target.setCustomValidity('Minimum 8 characters, upper and lowercase, number, and symbol');
    }