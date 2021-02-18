"use strict"

const jsSubmit = document.querySelector('.js-submit');
const jsMessage = document.querySelector('.js-message');

jsMessage.oninput = () => {
    if (jsMessage.value.length > 200 || jsMessage.value.length < 10) {
        jsSubmit.disabled = true;
        jsMessage.classList.add('disabled');
    } else {
        jsSubmit.disabled = false;
        jsMessage.classList.remove('disabled');
    }
}