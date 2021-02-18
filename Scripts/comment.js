"use strict"

const commentsList = document.querySelector('.js-list');
const commentsForm = document.querySelector('.js-form');
const commentsInput = commentsForm.querySelectorAll('.js-input');
const commentsName = commentsForm.querySelector('.js-name');
const commentsText = commentsForm.querySelector('.js-comment');

commentsForm.onsubmit = (evt) => {
    evt.preventDefault();

    let newItem = document.createElement('li');
    let newName = document.createElement('p');
    let newText = document.createElement('p');

    newItem.classList.add('comments__item');
    newName.classList.add('item__name');
    newText.classList.add('item__comment');

    newName.textContent = commentsName.value;
    newText.textContent = commentsText.value;

    commentsList.append(newItem);
    newItem.append(newName);
    newItem.append(newText);
}