// sayHi("Veli");

// function sayHi(name) {
//   console.log(`Hello ${name}`);
// }

// ===== ====  ======

// function add(a, b) {
//   return a + b;
// }

// let result = add(6, 5);
// // console.log(result);

// function mul(a, b) {
//   return a * b;
// }

// let res = mul(10, 15);
// console.log(res);

// ==========

// function showName(name) {
//   console.log("Ad:", name); // undefined
// }

// showName();

//  =======

// function showInfo(name, age) {
//   console.log(name, age);
// }

// showInfo("Anna"); // Anna undefined

// function SayHi(first_name, second_name="Cate") {

// 	let greet = "Salam";

// 	if (first_name && second_name) {
// 		return console.log(`${greet} ${first_name} and ${second_name}`);
// 	}

// 	if (first_name) {
// 		return console.log(`${greet} ${first_name}`);
// 	}

// 	console.log("no one to greeting :(");

// }
// SayHi("Anna", "John");

// console.log(changeValue(15)); //

// function changeValue(num) {
//   let number = 5;
//   return (number = num);
// }

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(3, 4);
// console.log(result);

// function sayHi(ele) {
//   return ele;
// }

// console.log(sayHi("Salam!!"));

// ===== function experession ====
// console.log(sayHi()); // ReferenceError: Cannot access 'sayHi' before initialization

// function helloFunc(age, callback) {
//   console.log(age);
//   console.log(callback);
// }

// const sayHi = function (some, diff = "necesen") {
//   return `"Veli", "salam"`;
// };
// helloFunc(18, sayHi()); // => callback

// const factorial = function fact(n) {
//   if (n <= 1) return 1;
//   return n * fact(n - 1); // daxildə adı istifadə edirik
// };

// console.log(factorial(5));

// const ad = (name) => console.log(name);

// ad("Veli");

// const greet = (name) => {
//   console.log("Salam, " + name + "!");
// };

// greet("Anna");

// const square = (n) => n * n;
// console.log(square(10)); // 25

// const sum = (a, b) => a + b;
// console.log(sum(3, 5));

// const getUser = () => ({ name: "İvan", age: 30 });

// console.log(getUser());

// const user = {
//   name: "Anna",
//   sayHi: function () {
//     setTimeout(() => {
//       console.log("Salam, " + this.name); // this gözlənildiyi kimi işləyir
//     }, 3000);
//   },
// };

// user.sayHi();

const user = {
  name: "Anna",
  sayHi() {
    console.log("Salam, " + this.name);
  }
};
user.sayHi();
