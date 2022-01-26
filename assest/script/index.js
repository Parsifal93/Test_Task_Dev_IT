// .JS
// a)Заполнить массив заданной длины различными простыми числами. Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.

function getRandomInt(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }
  
  let values = Array.from({ length: 5 }, () => getRandomInt(1, 10));
  let values1 = Array.from({ length: 7 }, () => getRandomInt(1, 10));
  console.log(values, values1);