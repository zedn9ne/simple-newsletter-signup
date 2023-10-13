const form = document.getElementById('form');
const input = document.getElementById('input');
const h5 = document.getElementById('h5');
const homePage = document.querySelector('.home-page');
const successMessage = document.querySelector('.success-container');
const Return = document.getElementById('return');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    var span = document.getElementById('span');
    var value = input.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value.match(validRegex)) {
        h5.classList.remove('h5');
        input.classList.remove('not-valid');
        homePage.classList.add('home-off');
        successMessage.classList.add('success-on');
        span.textContent = value;

        return true;
    } else {
        h5.classList.add('h5');
        input.classList.add('not-valid');
        return false;
    }
});
Return.addEventListener('click', function () {
    displayReset();
})
function displayReset() {
    h5.classList.remove('h5');
    input.classList.remove('not-valid');
    homePage.classList.remove('home-off');
    successMessage.classList.remove('success-on');
    if (input.value) {
        input.value = '';
    }
}
