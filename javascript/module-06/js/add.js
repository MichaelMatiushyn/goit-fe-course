'use strict';

// Заданине 6.1

// function Account(login, email, friendsCount) {
//   this._login = login;
//   this._email = email;
//   this._friendsCount = friendsCount;
// };

// Account.prototype.getAccountInfo = function(){
//   console.log('Login: ', this._login);
//   console.log('E-Mail: ', this._email);
//   console.log('Friends Count: ', this._friendsCount);
// };

// const account1 = new Account('mango', 'vasia@gmail.com', 325);

// console.log(account1);
// account1.getAccountInfo();

// const account2 = new Account('poly', 'poly@gmail.com', 12);

// account2.getAccountInfo();

// ================================================
// Задание 6.2

// function StringBuilder(string = "") {
//   this.value = string;
// };

// StringBuilder.prototype.getValue = function () {
//   console.log(`${this.value}`)
// };
// StringBuilder.prototype.append = function (str) {
//   this.value = this.value + str;
// };
// StringBuilder.prototype.prepend = function (str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.pad = function (str) {
//   this.value = str + this.value + str;
// };

// const myString = new StringBuilder('.');
// myString.append('^');
// myString.getValue(); // '.^'

// myString.prepend('^');
// myString.getValue(); // '^.^'

// myString.pad('=');
// myString.getValue(); // '=^.^='

// console.log(myString);

// ===========================
// Задание 6.3 - 6.4

class Car {
  constructor(speed = 0, maxSpeed, running = false, distance = 0, value = 0) {
    this._speed = speed;
    this._maxSpeed = maxSpeed;
    this._running = running;
    this._distance = distance;
    this.value = value;
  }
  get value() {
    console.log(`    ============================
    The cost of the car is ${this._value} $.
    ============================`);
  }
  set value(dol) {
    this._value = dol;
  }
  turnOn() {
    this._running = true;
  }
  turnOff() {
    this._running = false;
    this._speed = 0;
  }
  stop() {
    this._running = true;
    this._speed = 0;
  }
  accelerate(spd) {
    if (spd <= this._maxSpeed) {
      this._speed = spd;
    };
  }
  decelerate(spd) {
    if (spd <= this._maxSpeed && spd >= 0) {
      this._speed = spd;
    };
  }
  drive(hours) {
    if (this._running) {
      this._distance += this._speed * hours;
    };
  }
  showINfo() {
    console.log('----------------  NEW MESSAGE -------------');
    console.log('The speed is: ', this._speed);
    if (!this._running) {
      console.log('The engine is Off!');
    } else {
      console.log('The engine is On!');
    }
    console.log('Covered distance is: ', this._distance);
  }

  static getSpecs(car) {
    console.log('==========  NEW MESSAGE  ===========');
    console.log(`Max speed is : ${car._maxSpeed} km/h.`);
    console.log('Running is: ', car._running);
    console.log(`Covered distance is: ${car._distance} km.`);
  }
};

const audi = new Car(0, 180);

audi.turnOn();
audi.showINfo();
audi.accelerate(140);
audi.drive(5);
audi.showINfo();
audi.decelerate(80);
audi.drive(1);
audi.showINfo();
audi.drive(2);
audi.stop();
audi.showINfo();
audi.turnOff();
audi.showINfo();
// -------------------  static method
Car.getSpecs(audi);
// -----------  value changes
audi.value;
audi.value = 32000;
audi.value;
