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

processUnknownData(312);
