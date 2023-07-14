import { isEmail, isNotEmpty, isTournaments } from './Validator.js';

function setBorderError(htmlElement) {
  htmlElement.style.borderColor = 'red';
}

function unsetBorderError(htmlElement) {
  htmlElement.style.borderColor = '#000';
}

function autoRemoveErrorMessage(htmlElement, timeAutoRemove) {
  setTimeout(() => {
    htmlElement.remove();
  }, timeAutoRemove);
}

function setErrorMessage(htmlElement, message, timeAutoRemove) {
  const span = document.createElement("span");
  span.style.color = "red";
  span.textContent = message;
  htmlElement.parentNode.appendChild(span);
  autoRemoveErrorMessage(span, timeAutoRemove);
}

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
    setErrorMessage(form.first, 'Invalid', timeAutoRemove);
    stateFirst = false;
  } else {
    unsetBorderError(form.first);
    stateFirst = true;
  }

  if (!isNotEmpty(form.last.value)) {
    setBorderError(form.last);
    setErrorMessage(form.last, 'Invalid', timeAutoRemove);
    stateLast = false;
  } else {
    unsetBorderError(form.last);
    stateLast = true;
  }

  if (!isEmail(form.email.value)) {
    setBorderError(form.email);
    setErrorMessage(form.email, 'Invalid', timeAutoRemove);
    stateEmail = false;
  } else {
    unsetBorderError(form.email);
    stateEmail = true;
  }

  if (!isNotEmpty(form.birthdate.value)) {
    setBorderError(form.birthdate);
    setErrorMessage(form.birthdate, 'Invalid', timeAutoRemove);
    stateBirthdate = false;
  } else {
    unsetBorderError(form.birthdate);
    stateBirthdate = true;
  }

  if (!isTournaments(form.quantity.value)) {
    setBorderError(form.quantity);
    setErrorMessage(form.quantity, 'Invalid', timeAutoRemove);
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
    setErrorMessage(document.getElementById('is_location'), 'Invalid', timeAutoRemove);
    stateLocation = false;
  } else {
    unsetBorderError(document.getElementById('is_location'));
    stateLocation = true;
  }

  if (!form.general_condition.checked) {
    setBorderError(document.getElementById('is_general_condition'));
    setErrorMessage(document.getElementById('is_general_condition'), 'Invalid', timeAutoRemove);
    stateGeneralCondition = false;
  } else {
    unsetBorderError(document.getElementById('is_general_condition'));
    stateGeneralCondition = true;
  }

  return stateFirst && stateLast && stateEmail && stateBirthdate && stateTournaments && stateLocation && stateGeneralCondition;
}
