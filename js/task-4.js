// function createArrayOfNumbers(min, max) {
//   const num = [];
//   for (let i = min; i <= max; i++) {
//     num.push(i);
//   }
//   return num;
// }

// //

// console.log(createArrayOfNumbers(1, 3));

//

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//

// function getEvenNumbers(start, end) {
//   const num = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       num.push(i);
//     }
//   }
//   return num;
// }
// console.log(getEvenNumbers(8, 8));

//

// function checkStorage(storage, item) {
//   const newStorage = storage.map(function (fruits) {
//     return fruits.toLowerCase();
//   });
//     return newStorage;

//   const newItem = item.toLowerCase();
//   if (newStorage.includes(newItem)) {
//     return `${newItem} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

function checkStorage(storage, item) {
  // Перетворюємо обидва рядки до нижнього регістру для порівняння
  const lowerItem = item.toLowerCase();

  for (let i = 0; i < storage.length; i++) {
    if (storage[i].toLowerCase() === lowerItem) {
      return item + ' is available to order!';
    }
  }

  return 'Sorry! We are out of stock!';
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));

// let words = ["Apple", "Banana", "CHERRY"];

// let lowerCaseWords = words.map(function(word) {
//   return word.toLowerCase();
// });

// console.log(lowerCaseWords); // ["apple", "banana", "cherry"]
