"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript Code Example
let isActive = true;
isActive = false;
let count = 10;
function checStatus(isActive) {
    if (isActive) {
        console.log("The status is active.");
    }
    else {
        console.log("The status is inactive.");
    }
}
checStatus(true);
function isValidNumber(value) {
    if (value > 0) {
        console.log("The number is valid.");
        return true;
    }
    else {
        console.log("The number is invalid.");
        return false;
    }
}
isValidNumber(count);
function formatMessage(name, age) {
    let message = `İstifadəçi ${name}, yaş: ${age} il`;
    console.log(message);
    return message;
}
formatMessage("Elvin", 18);
let dynamicValue = 42; // number`
dynamicValue = "mətn"; // string
dynamicValue = true; // boolean
dynamicValue = { name: "Obyekt" }; // object
function processData(data) {
    const response = data;
    console.log("Giriş məlumatı:", response);
    return response;
}
function processUnknownData(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    if (typeof data === "number") {
        return data.toString();
    }
    if (typeof data === "boolean") {
        return data ? "bəli" : "xeyr";
    }
    return "naməlum tip";
}
processUnknownData("Hello");
function logMessage(message) {
    console.log(message);
}
function executeCallback(callback) {
    callback();
}
let elem;
const val = null;
function processName(name) {
    if (name === null) {
        return "Ad göstərilməyib (null)";
    }
    if (name === undefined) {
        return "Ad göstərilməyib (undefined)";
    }
    return name.toUpperCase();
}
processData("məlumat");
processData(123);
processData(elem);
processData(val);
const user1 = {
    name: "Elvin",
    email: "elvin@gmail.com",
    phone: null,
};
function displayUserInfo(user) {
    console.log(`Ad: ${user.name}`);
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }
    else {
        console.log("Email göstərilməyib");
    }
    if (user.phone) {
        console.log(`Telefon: ${user.phone}`);
    }
    else {
        console.log("Telefon göstərilməyib");
    }
}
displayUserInfo(user1);
let people = [
    { name: "İvan", age: 30 },
    { name: "Mariya", age: 25 },
];
// ============================
let fruits = ["alma", "banan", "albalı"];
// Element əlavə etmə
fruits.push("portağal");
fruits.unshift("armud");
// Element silmə
let lastFruit = fruits.pop();
let firstFruit = fruits.shift();
let user = {
    name: "İvan",
    age: 30,
};
let product = {
    name: "Noutbuk",
    price: 50000,
};
let employee = {
    personal: {
        name: "Mariya",
        age: 28,
    },
    work: {
        position: "Proqramçı",
    },
};
var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
    Theme["Auto"] = "auto";
})(Theme || (Theme = {}));
function setTheme(theme) {
    document.body.className = theme;
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
function formatId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    if (typeof id === "number") {
        return id.toString();
    }
}
formatId("abc123");
formatId(456);
function moveAnimal(animal) {
    switch (animal.type) {
        case "bird":
            console.log(`${animal.flyingSpeed} km/saat sürətlə uçur`);
            break;
        case "horse":
            console.log(`${animal.runningSpeed} km/saat sürətlə qaçır`);
            break;
    }
}
function handleState(state) {
    switch (state.state) {
        case "loading":
            console.log("Yüklənir...");
            break;
        case "success":
            console.log("Məlumat:", state.data);
            break;
        case "error":
            console.log("Xəta:", state.error);
            break;
    }
}
function getStatusMessage(status) {
    switch (status) {
        case "pending":
            return "Müraciət gözlənilir";
        case "fullfilled":
            return "Müraciət təsdiqləndi";
        case "rejected":
            return "Müraciət rədd edildi";
        default:
            return "Naməlum status";
    }
}
// const statusMessage = new Promise<string>((resolve, reject) => {
//   const status: Status = "fullfilled"; // Burada statusu dəyişə bilərsiniz
//   if (status === "fullfilled") {
//     resolve(getStatusMessage(status));
//   } else {
//     reject(getStatusMessage(status));
//   }
// });
// statusMessage
//   .then(message => console.log(message))
//   .catch(error => console.error(error));
function formatUserInfo(info) {
    if (typeof info === "string") {
        return `Istifadeci: ${info.toUpperCase()}`;
    }
    else {
        return `Istifadeci ID: ${info}`;
    }
}
console.log(formatUserInfo("ehmed"));
console.log(formatUserInfo(1024));
function moveAnimale(animal) {
    switch (animal.type) {
        case "dog":
            console.log(`${animal.runSpeed} km/saat qacir`);
            break;
        case "fish":
            console.log(`${animal.swimSpeed} km/saat uzur`);
            break;
    }
}
moveAnimale({ type: "dog", runSpeed: 20 });
moveAnimale({ type: "fish", swimSpeed: 10 });
//1
function formatUserInfos(user) {
    if (typeof user === "string") {
        return `User: ${user.toUpperCase()}`;
    }
    else {
        return `User ID: ${user}`;
    }
}
console.log(formatUserInfos("azer"));
console.log(formatUserInfos(1024));
function moveAnimals(animal) {
    switch (animal.type) {
        case "dog":
            console.log(`suret: ${animal.runSpeed}`);
            break;
        case "fish":
            console.log(`suret: ${animal.swimSpeed}`);
            break;
    }
}
moveAnimals({ type: "dog", runSpeed: 20 });
moveAnimals({ type: "fish", swimSpeed: 10 });
