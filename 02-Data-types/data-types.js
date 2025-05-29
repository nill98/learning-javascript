// Numbers:

console.log("working");


let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
//const date = new Date("2022-03-25");

// Primitive Types
let str = "Hello, world!";
let num = 42;
let bigIntNum = 123456789012345678901234567890n;
let bool = true;
let undef;
let sym = Symbol("sym");
let nl = null;

// Non-Primitive Types
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3];
let func = function() { return "I am a function"; };
let date = new Date();

// typeof checks
console.log("typeof str:", typeof str);           // "string"
console.log("typeof num:", typeof num);           // "number"
console.log("typeof bigIntNum:", typeof bigIntNum); // "bigint"
console.log("typeof bool:", typeof bool);         // "boolean"
console.log("typeof undef:", typeof undef);       // "undefined"
console.log("typeof sym:", typeof sym);           // "symbol"
console.log("typeof nl:", typeof nl);             // "object" (quirky behavior)

console.log("typeof obj:", typeof obj);           // "object"
console.log("typeof arr:", typeof arr);           // "object"
console.log("typeof func:", typeof func);         // "function"
console.log("typeof date:", typeof date);         // "object"
