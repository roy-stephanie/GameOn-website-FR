import { validatorForm } from './functions.js';

// DOM Elements
const modalBg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const closeBtn = document.querySelector('.close');
const formRegister = document.querySelector('#form_register');

// launch modal form
const launchModal = () => {
  modalBg.style.display = 'block';
}

// close modal form
const closeModal = () => {
  modalBg.style.display = 'none';
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal event
closeBtn.addEventListener('click', closeModal);

// Form Submit
formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  // Form Validator
  const validator = validatorForm(e.target, 500);

  if(validator) {
    // Create Close Button
    const backgroundConfirm = document.getElementById('submit_background');
    const submitButton = document.createElement('button');

    submitButton.classList.add('btn-submit');
    submitButton.classList.add('button');
    submitButton.classList.add('submit_confirme_button');
    submitButton.textContent = 'Fermer';

    // View Button
    backgroundConfirm.appendChild(submitButton);
    backgroundConfirm.classList.add('view');
    // Add Event Listener for Close Modal and Form Submit
    submitButton.addEventListener('click', () => {
      closeModal();
      formRegister.submit();
    })
  }
});
