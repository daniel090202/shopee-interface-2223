const registerButton = document.querySelector(".header__navbar-item-register");
const loginButton = document.querySelector(".header__navbar-item-login");

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");

const authenticationFormButtonsBack = document.querySelectorAll(".authentication-form__control-button-back");

registerButton.addEventListener("click", function() {
    modal.style.display = "flex";
    registerForm.style.display = "block";
});

loginButton.addEventListener("click", function() {
    modal.style.display = "flex";
    loginForm.style.display = "block";
});

modalOverlay.addEventListener("click", function() {
    modal.style.display = "none";
    loginForm.style.display = "none";
    registerForm.style.display = "none";
})

authenticationFormButtonsBack.forEach(button => {
    button.addEventListener("click", function() {
        modal.style.display = "none";
        loginForm.style.display = "none";
        registerForm.style.display = "none";
    })
});

