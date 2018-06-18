'use strict';

'use strict';


//  ============================     Task 4.1  =======================================

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'javascript';
// delete user.premium;

// for (let keys in user) {
//   console.log(keys, ': ', user[keys]);
// };
// const keys = Object.keys(user);
// console.log(keys);

// for (let key of keys) {
//   console.log(key, ': ', user[key]);
// };

// const anotherKeys = Object.entries(user);
// console.log(anotherKeys);

// for (let anotherKey of anotherKeys) {
//   console.log(anotherKey[0], ': ', anotherKey[1]);
// };
// console.log(user);

// ===============================      Taks 4.2 ====================================

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// const asArr = Object.entries(tasksCompleted);
// const workers = [];
// for (let elem of asArr) {
//   const worker = {};
//   worker.name = elem[0];
//   worker.tasks = elem[1];
//   workers.push(worker);
// };
// let bestWorker = workers[0];
// for (let worker of workers) {
//   if(worker.tasks > bestWorker.tasks) {
//     bestWorker = worker;
//   };
// };
// console.log(bestWorker.name);

//  ==============================================   Task 4.3 =========================================

// const countProps = function (params) {
//   const keys = Object.keys(params);
//   return keys.length;
// };

// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({
//     a: 1,
//     b: 3,
//     c: 'hello'
//   })
// ); // 3


// ================================================== Task 4.4 ========================================

// const isObjectEmpty = function(object) {
//   const keys = Object.keys(object);
//   if (keys.length >0) {
//     return 'false';
//   }
//   return 'true';
// }

// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({
//     a: 1
//   })
// ); // false

// console.log(
//   isObjectEmpty({
//     a: 1,
//     b: 2
//   })
// ); // false

//  =================================================== Task 4.5 ============================================

// const countTotalSalary = function (object) {
//   let totalSalary = 0;
//   for (let elem in object) {
//     let locSalary = Number(object[elem]);
//     totalSalary += locSalary;
//   };
//   return totalSalary;
// };

// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

//  ============================================ Task 4.6 ================================================

// const users = [{
//     name: 'Poly',
//     age: 7,
//     mood: 'happy'
//   },
//   {
//     name: 'Mango',
//     age: 4,
//     mood: 'blissful'
//   },
//   {
//     name: 'Ajax',
//     age: 3,
//     mood: 'tired'
//   },
// ];

// const getAllPropValues = function (arr, prop) {
//   let answer = [];
//   for (let elem of arr) {
//     if (elem[prop] === undefined) {
//       break;
//     };
//     answer.push(elem[prop]);
//   };
//   return answer;
// };

// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []

// ============================================= Task 4.7 =====================================

// function User(name, isActive, age, friends) {


//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;


//   this.getUserInfo = function () {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//   };
// };

// const user1 = new User('Mango', true, 18, 30);
// const user2 = new User('Poly', false, 25, 400);
// const user3 = new User('Ronaldo', true, 35, 1000);

// user1.getUserInfo();
// user2.getUserInfo();
// user3.getUserInfo();

// ===  Task 4.8

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],

//   addManager(manager) {
//     this.managers.push(manager);
//     console.log(this.managers);
//   },

//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
//     return this.products;
//   },
// };

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// ======  Task 4.9

// function Account({
//   login,
//   password,
//   type = "regular"
// }) {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function (newPassword) {
//     this.password = newPassword;
//     return this.password;
//   };

//   this.getAccountInfo = function () {
//     return `
//       Login: ${login}, 
//       Pass: ${password}, 
//       Type: ${type}
//     `;
//   };
// };

// const account = new Account({
//   login: "Mango",
//   password: "qwe123",
//   type: "premium"
// });

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// console.log(account.changePassword("asdzxc")); // 'asdzxc'

// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'