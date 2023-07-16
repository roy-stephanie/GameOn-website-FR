import { isEmail, isNotEmpty, isTournaments } from './Validator.js';

const errorsMessage = {
  first: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
  last: 'Veuillez entrer 2 caractères ou plus pour le champ du nom',
  email: 'Veuillez entrer un email valide',
  birthdate: 'Vous devez entrer votre date de naissance.',
  quantity: 'Veuillez entrer un nombre de tournois valide',
  location: 'Veuillez sélectionner une ville',
  general_condition: 'Vous devez accepter nos termes et conditions.',
}

const setBorderError = (htmlElement) => {
  htmlElement.style.borderColor = 'red';
}

const unsetBorderError = (htmlElement) => {
  htmlElement.style.borderColor = '#000';
}

// Auto Remove Alert Message
const autoRemoveErrorMessage = (htmlElement, timeAutoRemove)=> {
  setTimeout(() => {
    htmlElement.remove();
  }, timeAutoRemove);
}

const setErrorMessage = (htmlElement, message, timeAutoRemove)=> {
  const span = document.createElement("span");
  span.style.color = "red";
  span.style.fontSize = "14px";
  span.textContent = message;
  htmlElement.parentNode.appendChild(span);
  autoRemoveErrorMessage(span, timeAutoRemove);
}

export const disableButtonForNotSpamSubmit = () => {
  const button = document.querySelector('.btn-submit');
  button.setAttribute('disabled', 'true');
  button.style.backgroundColor = 'grey';

  setTimeout(() => {
    button.removeAttribute('disabled');
    button.style.backgroundColor = '#fe142f';
  }, 5000);
}

// Full Validator
export const validatorForm = (form, timeAutoRemove= 5000) => {
  let stateFirst = false,
    stateLast = false,
    stateEmail = false,
    stateBirthdate = false,
    stateTournaments = false,
    stateLocation = false,
    stateGeneralCondition = false;

  if (!isNotEmpty(form.first.value)) {
    setBorderError(form.first);
    setErrorMessage(form.first, errorsMessage.first, timeAutoRemove);
    stateFirst = false;
  } else {
    unsetBorderError(form.first);
    stateFirst = true;
  }

  if (!isNotEmpty(form.last.value)) {
    setBorderError(form.last);
    setErrorMessage(form.last, errorsMessage.last, timeAutoRemove);
    stateLast = false;
  } else {
    unsetBorderError(form.last);
    stateLast = true;
  }

  if (!isEmail(form.email.value)) {
    setBorderError(form.email);
    setErrorMessage(form.email, errorsMessage.email, timeAutoRemove);
    stateEmail = false;
  } else {
    unsetBorderError(form.email);
    stateEmail = true;
  }

  if (!isNotEmpty(form.birthdate.value)) {
    setBorderError(form.birthdate);
    setErrorMessage(form.birthdate, errorsMessage.birthdate, timeAutoRemove);
    stateBirthdate = false;
  } else {
    unsetBorderError(form.birthdate);
    stateBirthdate = true;
  }

  if (!isTournaments(form.quantity.value)) {
    setBorderError(form.quantity);
    setErrorMessage(form.quantity, errorsMessage.quantity, timeAutoRemove);
    stateTournaments = false;
  } else {
    unsetBorderError(form.quantity);
    stateTournaments = true;
  }

  let checkRadioIsChecked = false;

  for (let radio of form.location) {
    checkRadioIsChecked = checkRadioIsChecked + radio.checked
  }

  if (!checkRadioIsChecked) {
    setBorderError(document.getElementById('is_location'));
    setErrorMessage(document.getElementById('is_location'), errorsMessage.location, timeAutoRemove);
    stateLocation = false;
  } else {
    unsetBorderError(document.getElementById('is_location'));
    stateLocation = true;
  }

  if (!form.general_condition.checked) {
    setBorderError(document.getElementById('is_general_condition'));
    setErrorMessage(document.getElementById('is_general_condition'), errorsMessage.general_condition, timeAutoRemove);
    stateGeneralCondition = false;
  } else {
    unsetBorderError(document.getElementById('is_general_condition'));
    stateGeneralCondition = true;
  }

  return stateFirst && stateLast && stateEmail && stateBirthdate && stateTournaments && stateLocation && stateGeneralCondition;
}
