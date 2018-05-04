let userInput;
const numbers = [];
let total = 0;

while (userInput !== null) {
  userInput = prompt('Введите число!');
  const asNumber = Number(userInput);

  if (asNumber) {

    if (userInput !== null) {
      numbers.push(Number(userInput));
    }
  } else {
    alert('Было введено не число, попробуйте еще раз!');
  }
}

for (let i = 0, max = numbers.length; i < max; i += 1) {
  total += numbers[i];
}

alert(`Общая сумма чисел равна ${total}`);