'use strict';

class Hamburger {

  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if (this._toppings.includes(topping)) {
      console.log('Sorry, you can not add more');
    } else {
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    if (this._toppings.includes(topping)) {
      this._toppings = this._toppings.filter(top => top !== topping)
    }
  }

  getToppings() {
    return this._toppings;
  }

  getSize() {
    return this._size;
  }

  getStuffing() {
    console.log(`The stuffing of hamburger is ${this._stuffing}`);
  }

  calculatePrice() {
    const total = [];
    for (let key in Hamburger.SIZES) {
      if (key === this._size) {
        total.push(Hamburger.SIZES[key].price);
      }
    }

    for (let key in Hamburger.STUFFINGS) {
      if (key === this._stuffing) {
        total.push(Hamburger.STUFFINGS[key].price)
      }
    }

    for (let elem of this._toppings) {
      for (let key in Hamburger.TOPPINGS) {
        if (key === elem) {
          total.push(Hamburger.TOPPINGS[key].price)
        }
      }
    }
    const totalAmount = total.reduce((acc, value) => acc + value, 0)
    return totalAmount;
  }

  calculateCalories() {
    const total = [];
    for (let key in Hamburger.SIZES) {
      if (key === this._size) {
        total.push(Hamburger.SIZES[key].calories);
      }
    }

    for (let key in Hamburger.STUFFINGS) {
      if (key === this._stuffing) {
        total.push(Hamburger.STUFFINGS[key].calories)
      }
    }

    for (let elem of this._toppings) {
      for (let key in Hamburger.TOPPINGS) {
        if (key === elem) {
          total.push(Hamburger.TOPPINGS[key].calories)
        }
      }
    }
    const totalCalories = total.reduce((acc, value) => acc + value, 0)
    return totalCalories;
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  }
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// // // Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// // // Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // // А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// // // Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// // // Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// // // Смотрим сколько добавок
console.log("Hamburger has %d topping(s)", hamburger.getToppings().length); // 1

// /*
//   🔔 Обратите внимание на такие моменты:
//     	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//     		другой код, а класс живет в изоляции от мира
//     	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
// 		чтобы нельзя было создать объект, не указав их
//     	✔️ необязательные (добавка) добавляем через методы
//     	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
// 	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//     	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//     	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//       		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
// 		логично в тот момент, когда это потребуется, а не заранее.
// */