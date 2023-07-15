import { validatorForm } from './functions.js';

// DOM Elements
const modalBg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
//const formData = document.querySelectorAll('.formData');
const closeBtn = document.querySelector('.close');
const formRegister = document.querySelector('#form_register');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
closeBtn.addEventListener('click', closeModal);

// launch modal form
const launchModal = () => {
  modalBg.style.display = 'block';
}

// close modal form
const closeModal = () => {
  modalBg.style.display = 'none';
}

// Form Submit
formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  const validator = validatorForm(e.target, 500);

  if(validator) {
    const backgroundConfirm = document.getElementById('submit_background');
    const submitButton = document.createElement('button');

    submitButton.classList.add('btn-submit');
    submitButton.classList.add('button');
    submitButton.classList.add('submit_confirme_button');
    submitButton.textContent = 'Fermer';

    backgroundConfirm.appendChild(submitButton);
    backgroundConfirm.classList.add('view');

    submitButton.addEventListener('click', () => {
      closeModal();
      formRegister.submit();
    })
  }
});
