// Not Empty Validator
export const isNotEmpty = (value) => {
  const regex = new RegExp(/[^ ]/g);
  return !!value.match(regex)
}

// Email Validator
export const isEmail = (value) => {
  const regex = new RegExp(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/);
  return value.match(regex)
}

// Number Range [0-99] Validator
export const isTournaments = (value) => {
  const regex = new RegExp(/^(?:[1-9]|[1-9][0-9])$/);
  return value.match(regex)
}
