// for

// for (let i = 2; i <= 5; i++) {
//   console.log(i);
// }

// while

let i = 1;
// while (i < 7) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const user = {
//   name: "Alice",
//   age: 25,
// };

// for (let key in user) {
//   console.log(`${key} - ${user[key]}`);
// }

// const arr = [10, 20, 30, 40, 50];
// for (let value of arr) {
// //   console.log(`${value}: ${arr[value]}`); // in 0: 10, 1: 20, 2: 30
// //   console.log(`${value}: ${arr[value]}`); // of 10: undefined, ...
//   console.log(`${value}`); // 10, 20 ,30
// }

// while (true) {
//   console.log("Bu sonsuz dövrdür");
// }

// while (true) {
//   const input = prompt("Rəqəm daxil edin (və ya çıxmaq üçün 'exit'):");
//   if (input === 'exit') break;
//   console.log("Siz daxil etdiniz:", input);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i); // yalnız tək ədədləri göstərəcək
// }

const names = [
  "Alice",
  "",
  "Bob",
  "",
  "Charlie",
  4561346,
  [12, 12, 34],
  { name: "John", age: 19 },
  "next string",
];

// // console.log(names);

// for (let deyer of names) {
//   if (deyer === "Bob" || deyer === "") continue;
//   console.log(deyer);
// }

// for (let elem of names) {
//   if (elem === "") continue;
//   if (elem === "Charlie") break;
//   console.log(elem);
// }

// 10 => 20

// 10, 12, 14 ... 20 => 10+12+14...

// let sum = 0;
// for (let i = 10; i <= 20; i += 2) {
//   sum += i;
// }
// console.log(sum);

// const numbers = [4, 2, 7, -1, 5, -3];

// for (let val of numbers) {
//   if (val >= 0) {
//     console.log(val);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`\n=> ${i} <= \n\n`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.length);


// === homework ===
// for (let elem of fruits) {
//     console.log(`${elem}`);
// }

const users = [
  { name: "Tom", age: 20 },
  { name: "Anna", age: 23 },
  { name: "Mike", age: 30 }
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name + " " + users[i].age + " yaşındadır.");
}




