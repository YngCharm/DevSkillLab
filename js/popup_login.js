const loginButton = document.getElementById('login');
const registrationButton = document.getElementById('registration');

const overlay = document.querySelector('.overlay');

const loginPopup = document.querySelector('.popup_login');
const registrationPopup = document.querySelector('.popup_registration');

function hidePopup(popup) {
    popup.classList.remove('active');
    overlay.classList.remove('active');

}

loginButton.addEventListener('click', function() {
    hidePopup(loginPopup);
});

registrationButton.addEventListener('click', function() {
    hidePopup(registrationPopup);
});

document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".popup_login").classList.add("active");
    document.querySelector(".overlay").classList.add("active"); // Добавляем класс .active к оверлею
});

document.querySelector(".popup_login .close-btn").addEventListener("click", function () {
    document.querySelector(".popup_login").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active"); // Удаляем класс .active из оверлея
});

document.querySelector("#show-registration").addEventListener("click", function () {
    document.querySelector(".popup_registration").classList.add("active");
    document.querySelector(".overlay").classList.add("active"); // Добавляем класс .active к оверлею
});

document.querySelector(".popup_registration .close-btn").addEventListener("click", function () {
    document.querySelector(".popup_registration").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active"); // Удаляем класс .active из оверлея
});
