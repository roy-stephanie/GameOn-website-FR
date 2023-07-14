export const isNotEmpty = (value) => {
  const regex = new RegExp(/[^ ]/g);
  return !!value.match(regex)
}

export const isEmail = (value) => {
  const regex = new RegExp(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/);
  return value.match(regex)
}

export const isTournaments = (value) => {
  const regex = new RegExp(/^(?:[1-9]|[1-9][0-9])$/);
  return value.match(regex)
}
