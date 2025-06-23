import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

// TypeScript Code Example
let isActive: boolean = true;
isActive = false;

let count: number = 10;

function checStatus(isActive: boolean): void {
  if (isActive) {
    console.log("The status is active.");
  } else {
    console.log("The status is inactive.");
  }
}

checStatus(true);

function isValidNumber(value: number): boolean {
  if (value > 0) {
    console.log("The number is valid.");
    return true;
  } else {
    console.log("The number is invalid.");
    return false;
  }
}

isValidNumber(count);

function formatMessage(name: string, age: number): string {
  let message = `İstifadəçi ${name}, yaş: ${age} il`;
  console.log(message);
  return message;
}

formatMessage("Elvin", 18);

let dynamicValue: any = 42; // number`
dynamicValue = "mətn"; // string
dynamicValue = true; // boolean
dynamicValue = { name: "Obyekt" }; // object

function processData(data: any): any {
  const response = data;
  console.log("Giriş məlumatı:", response);

  return response;
}

function processUnknownData(data: unknown): string {
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

function logMessage(message: string): void {
  console.log(message);
}

function executeCallback(callback: () => void): void {
  callback();
}

let elem;
const val = null;

function processName(name: string | null | undefined): string {
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

interface User {
  name: string;
  email?: string; // string | undefined ilə bərabərdir
  phone: string | null;
}

const user1: User = {
  name: "Elvin",
  email: "elvin@gmail.com",
  phone: null,
};

function displayUserInfo(user: User): void {
  console.log(`Ad: ${user.name}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  } else {
    console.log("Email göstərilməyib");
  }
  if (user.phone) {
    console.log(`Telefon: ${user.phone}`);
  } else {
    console.log("Telefon göstərilməyib");
  }
}

displayUserInfo(user1);

type Person = {
  name: string;
  age: number;
};

let people: Person[] = [
  { name: "İvan", age: 30 },
  { name: "Mariya", age: 25 },
];

// ============================

let fruits: string[] = ["alma", "banan", "albalı"];

// Element əlavə etmə
fruits.push("portağal");
fruits.unshift("armud");

// Element silmə
let lastFruit: string | undefined = fruits.pop();
let firstFruit: string | undefined = fruits.shift();

interface UserInfo {
  name: string;
  age: number;
}

let user: { name: string; age: number } = {
  name: "İvan",
  age: 30,
};

interface Product {
  name: string;
  price: number;
  description?: string; // İstəyə bağlı sahə
}

let product: Product = {
  name: "Noutbuk",
  price: 50000,
};

interface Personal {
  personal: {
    name: string;
    age: number;
  };
  work: {
    position: string;
    salary?: number;
  };
}

let employee: Personal = {
  personal: {
    name: "Mariya",
    age: 28,
  },
  work: {
    position: "Proqramçı",
  },
};

enum Theme {
  Light = "light",
  Dark = "dark",
  Auto = "auto",
}

function setTheme(theme: Theme): void {
  document.body.className = theme;
}

interface Calculator {
  (a: number, b: number): number;
}

const add: Calculator = (x, y) => x + y;
const multiply: Calculator = (x, y) => x * y;

function formatId(id: string | number): string | undefined {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  if (typeof id === "number") {
    return id.toString();
  }
}

formatId("abc123");
formatId(456);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log(`${animal.flyingSpeed} km/saat sürətlə uçur`);
      break;
    case "horse":
      console.log(`${animal.runningSpeed} km/saat sürətlə qaçır`);
      break;
  }
}

interface LoadingState {
  state: "loading";
}

interface SuccessState {
  state: "success";
  data: any;
}

interface ErrorState {
  state: "error";
  error: string;
}

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleState(state: AsyncState) {
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

type Status = "pending" | "fullfilled" | "rejected";

function getStatusMessage(status: Status): string {
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

function formatUserInfo(info: string | number): string {
  if (typeof info === "string") {
    return `Istifadeci: ${info.toUpperCase()}`;
  } else {
    return `Istifadeci ID: ${info}`;
  }
}

console.log(formatUserInfo("ehmed"));
console.log(formatUserInfo(1024));

// 2
interface Dog {
  type: "dog";
  runSpeed: number;
}

interface Fish {
  type: "fish";
  swimSpeed: number;
}

type Animale = Dog | Fish;

function moveAnimale(animal: Animale): void {
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
function formatUserInfos(user: string | number): string {
  if (typeof user === "string") {
    return `User: ${user.toUpperCase()}`;
  } else {
    return `User ID: ${user}`;
  }
}
console.log(formatUserInfos("azer"));
console.log(formatUserInfos(1024));
////////////////////////////////////////////////////////
//2
interface Dog {
  type: "dog";
  runSpeed: number;
}

interface Fish {
  type: "fish";
  swimSpeed: number;
}

type Animals = Dog | Fish;

function moveAnimals(animal: Animals): void {
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
////////////////////////////////////////////////////////
//3
interface Persone {
  name: string;
  age: number;
}

interface Worker {
  employeeId: number;
  position: string;
}
