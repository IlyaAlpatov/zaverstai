"use strict"

const theme = document.querySelector('.articles__theme-selection');
const articles = document.querySelectorAll('.article');

theme.onchange = function () {
    for (let article of articles) {
        if (article.dataset.category !== theme.value && theme.value !== 'all') {
            article.classList.add('hidden');
        } else {
            article.classList.remove('hidden');
        }

    }
}

