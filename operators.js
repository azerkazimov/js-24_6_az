const name = "John";
const sur = "Doe";

const user = name + " " + sur;
console.log(user);

const salam = "salam";
console.log("Nəticə: " + salam);

let age = 42;
console.log(`Ad: ${name}, Yaş: ${age}`);

console.log("null: null + 5", null + 5); // 5
console.log("null: null - 3", null - 3); // -3
console.log("null: null * 4", null * 4); // 0
console.log("null: null / 2", null / 2); // 0

console.log("Number(null): ", Number(null)); // 0
console.log("Number(undefined): ", Number(undefined));

console.log(undefined + 5);

// let age = 18;
let access = age >= 18 ? "İcazə verilir" :"Qadağandır";
// console.log(access);

if (age >= 25) {
  console.log("İcazeli");
} else if (age >= 18){
  console.log("ola biler");
} else {
    console.log("Qadağandır");
}

(0 && false && 1 && "hi") && ( "salam" || true ||0 || false || undefined)