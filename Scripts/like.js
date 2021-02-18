"use strict"

const likeLink = document.querySelector('.js-like');
const likeCounter = document.querySelector('.js-counter');
const jsSvg = document.querySelector('.js-svg');

likeLink.onclick = () => {
    if (likeLink.classList.contains('added')) {
        likeCounter.textContent--;
        likeCounter.classList.remove('like');
        jsSvg.classList.remove('like');
    } else {
        likeCounter.textContent++;
        likeCounter.classList.add('like');
        jsSvg.classList.add('like');
    }

    likeLink.classList.toggle('added');
}

