'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = prompt('Введите логин!');

const checkLoginValidity = function (login) {
  const valid = login.length >= 4 && login.length <= 16;
  if (!valid) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов!');
    return;
  }
  return valid;
};
const checkIfLoginExists = function (logins, login) {
  const hasLogin = logins.includes(login);
  return hasLogin;
};

const addLogin = function (logins, login) {
  if (login === null) {
    return;
  }
  const valid = checkLoginValidity(login);
  if (valid) {
    let hasLogin = checkIfLoginExists(logins, login);
    if (hasLogin) {
      alert('Такой логин уже используется');
      return;
    }
    logins.push(login);
    alert('Логин успешно добавлен!');
  }
};

const userIput = addLogin(logins, login);
console.log(logins);