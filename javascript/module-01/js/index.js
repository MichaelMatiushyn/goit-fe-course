'use strict';

const TOUR_SHARM = `Шарм`;
const TOUR_HURGADA = `Хургада`;
const TOUR_TABA = `Таба`;

let maxPlaces;
let name;
let freePlace;
let reservation;
let add;
let restPlaces;

const wrongInput = `Ошибка ввода!`;
const notEnoughPlaces = 'Извините, мест нет.';
const sorry = `Нам очень жаль, приходите еще!`;

let userPlaces = prompt(
  `Рады Вас видеть в нашем турагенстве. Введите количество путешествующих: `, 2);

let placeSearch = Number(userPlaces) && userPlaces !== null && !Number.isNaN(userPlaces) && userPlaces >= 1;


if (placeSearch) {

  let pass = (Number(userPlaces) <= 25);

  if (pass) {
    let placeSharm = Number(userPlaces) <= 15;
    let placeHurgada = Number(userPlaces) <= 25;
    let placeTaba = Number(userPlaces) <= 6;


    if (placeTaba) {
      freePlace = 6;
      add = confirm(`Есть доступные места в группе ${TOUR_TABA}. Согласны ли Вы быть в этой группе?`);

      if (add) {
        restPlaces = Number(freePlace) - Number(userPlaces);
        alert(`Приятного путешествия в группе ${TOUR_TABA}. Осталось доступно еще ${restPlaces} места!`);
      } else {
        freePlace = 15;
        add = confirm(`Есть доступные места в группе ${TOUR_SHARM}. Согласны ли Вы быть в этой группе?`);

        if (add) {
          restPlaces = Number(freePlace) - Number(userPlaces);
          alert(`Приятного путешествия в группе ${TOUR_SHARM}. Осталось доступно еще ${restPlaces} места!`);
        } else {
          freePlace = 25;
          add = confirm(`Есть доступные места в группе ${TOUR_HURGADA}. Согласны ли Вы быть в этой группе?`);

          if (add) {
            restPlaces = Number(freePlace) - Number(userPlaces);
            alert(`Приятного путешествия в группе ${TOUR_HURGADA}. Осталось доступно еще ${restPlaces} места!`);
          } else {
            alert(notEnoughPlaces);
          }
        }
      }
    } else if (placeSharm) {
      freePlace = 15;
      add = confirm(`Есть доступные места в группе ${TOUR_SHARM}. Согласны ли Вы быть в этой группе?`);

      if (add) {
        restPlaces = Number(freePlace) - Number(userPlaces);
        alert(`Приятного путешествия в группе ${TOUR_SHARM}. Осталось доступно еще ${restPlaces} места!`);
      } else {
        freePlace = 25;
        add = confirm(`Есть доступные места в группе ${TOUR_HURGADA}. Согласны ли Вы быть в этой группе?`);

        if (add) {
          restPlaces = Number(freePlace) - Number(userPlaces);
          alert(`Приятного путешествия в группе ${TOUR_HURGADA}. Осталось доступно еще ${restPlaces} места!`);
        } else {
          alert(notEnoughPlaces);
        }
      }
    } else if (placeHurgada) {
      freePlace = 25;
      add = confirm(`Есть доступные места в группе ${TOUR_HURGADA}. Согласны ли Вы быть в этой группе?`);

      if (add) {
        restPlaces = Number(freePlace) - Number(userPlaces);
        alert(`Приятного путешествия в группе ${TOUR_HURGADA}. Осталось доступно еще ${restPlaces} места!`);
      } else {
        alert(notEnoughPlaces);
      }
    }
  } else {
    alert(notEnoughPlaces);
  }
} else {
  alert(wrongInput);
}