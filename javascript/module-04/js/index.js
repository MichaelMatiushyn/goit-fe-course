'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
};

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.data = [];
  this.dataSell = [];
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.getName = function () {
    console.log(`The name of cashier is ${this.name}.`);
  };

  this.makeDatabase = function (productDatabase) {
    this.reset();
    this.Database = productDatabase;
    const asArr = Object.entries(this.Database);

    for (let elem of asArr) {
      const product = {};
      product.name = elem[0];
      product.price = elem[1];
      this.data.push(product);
    }
    return this.data;
  };

  this.countTotalPrice = function (order) {
    this.order = order;
    this.data = this.makeDatabase(products);
    const asArr = Object.entries(this.order);
    for (let elem of asArr) {
      const productSell = {};
      productSell.name = elem[0];
      productSell.quantity = elem[1];
      this.dataSell.push(productSell);
    }
    for (let elem of this.dataSell) {
      for (let item of this.data) {
        if (elem.name === item.name) {
          elem.price = item.price;
        };
      };
    };
    for (let item of this.dataSell) {
      item.totalPrice = item.price * item.quantity;
      this.totalPrice += item.totalPrice;
    };
    return this.totalPrice;
  };

  this.getCustomerMoney = function () {

    do {
      const userInput = prompt(
        `Сумма заказа составляет ${this.totalPrice} грн. Ваши деньги:`,
      );
      const asNumber = Number(userInput);
      return asNumber;
    } while (userInput === null)
  };

  this.countChange = function () {
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };

  this.reset = function () {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;

    this.dataSell = [];
  };

  this.serve = function (order) {
    this.totalPrice = this.countTotalPrice(order);
    this.customerMoney = this.getCustomerMoney();
    this.changeAmount = this.countChange();
    const asNumber = Number(this.changeAmount);

    if (this.changeAmount >= 0 && !Number.isNaN(asNumber) && this.changeAmount !== null) {
      console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount} грн.`);
      this.reset();

    } else {
      console.log('Очень жаль, что-то пошло не так, приходите еще!');
      this.reset();
    }
  };
};


const mango = new Cashier('Mango', products);

mango.getName();
mango.serve(order);