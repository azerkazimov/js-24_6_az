"use strict";
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
processUnknownData(312);
