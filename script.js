// ===== var =====

// var a;
// a = 8;
// // console.log(a);

// // ===== let =====

// let b = 5;
// b = 3;
// b = "istirting";
// // console.log(b); //

// // ===== const =====
// const c = "hello";
// // c = "5";
// // console.log(c);
// const name = "Firdovsi";
// const user = {
//   name: "Elvin",
//   age: 18,
//   city: "Tovuz",
// };

// user.name = "Sebnem Tovuzlu";
// user.age = 48;

// console.log(name);
// console.log(user);

const users = {};
const Users = [];

const rezervSozDeir = 5;

let name = "Aygün"; // string
let age = 25; // number
let isOnline = true; // boolean
let empty = null; // null
let notSet; // undefined
let id = Symbol("id"); // symbol
let big = 123456789123456789n; // bigint

// console.log(null === 0);

// "==" - tipler(mellumat novleri) muqaise olunmur
// "===" - tipler(mellumat novleri) muqaise olunur

// console.log("0" === null);

let a = 5;

const arr = ["Ali", 23, "mail@gmail.com", 15];
const obj = { name: "Ali", age: 18, mail: "mail@gmail.com" };

console.log(typeof arr);
console.log(Array.isArray(arr));

salamDe(null);

function salamDe(arr) {
  console.log("Salam! " + arr);
}

console.log(typeof salamDe);

const str1 = "salam";
console.log(typeof str1);

const str = new String("salam");
console.log(typeof str);
