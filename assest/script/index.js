// .JS
// a)Заполнить массив заданной длины различными простыми числами. Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.

function getRandomInt(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }
  
  let values = Array.from({ length: 5 }, () => getRandomInt(1, 10));
  let values1 = Array.from({ length: 7 }, () => getRandomInt(1, 10));
  console.log(values, values1);

  //b)Найти в строке все числа. Учитывать дробные числа.

let array = [
    "У",
    "Пети",
    "было",
    10,
    "яблок",
    2.5,
    "он",
    "отдал",
    "Маше",
    3.5,
    "Васе",
    "и",
    4,
    "оставил",
  ];
  let result = array.filter((e) => typeof e === "number");
  console.log(result);

  //c).Замена подряд идущих букв на их количество.

let str = "assdssddffffrrreeeweggggg";
let str1 = str.replace(/assdssddffffrrreeeweggggg/gi, "as2ds2d2f4r3e3weg5");
console.log(str1);


//d) Реализовать функцию get. Которая по пути ищет значение в объекте или в массиве.

const exampleArr = [
    { a: { b: [{ c: 4 }, { c: 5 }] } },
    [{ a: { b: [{ c: 6 }, { c: 7 }] } }],
  ];
  const exampleObj = { a: { b: { c: 5 } } };
  console.log(_.get(exampleArr, "0.a.b.1.c"));
  console.log(_.get(exampleObj, "a.b"));