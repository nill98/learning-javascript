console.log("check")

// These are treated as false in an if condition:


// false
// 0
// -0
// 0n    // BigInt zero
// ""    // Empty string
// null
// undefined
// NaN


if (0) {
  console.log("Won't run");
}

if ("") {
  console.log("Also won't run");
}


if ("hello") {
  console.log("✅ This will run");
}

if ([]) {
  console.log("✅ Empty array is truthy");
}

if ({}) {
  console.log("✅ Empty object is truthy");
}



let userInput = "";
let name = "Guest" || userInput ;

console.log(name); // "Guest" — because "" is falsy

if ("0") {
  console.log("1. Yes");
}

if ([]) {
  console.log("2. Yes");
}

if (null) {
  console.log("3. No");
}

if (NaN) {
  console.log("4. No");
}

//==================================================//

// Ternary 

let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";

console.log(result); // Adult

let score = 85;

let grade = score >= 90
  ? "A"
  : score >= 80
  ? "B"
  : score >= 70
  ? "C"
  : "F";

console.log(grade); // B

// as string

let username = "";

let displayName = username ? username : "Guest";

console.log(displayName); // Guest

// true false

let isLoggedIn = true;

console.log(isLoggedIn ? "Welcome back!" : "Please log in.");


//--------------------------------//

// Try writing a ternary that returns:

// "Even" if a number is even

// "Odd" if it's odd

let num = 20;
result = num%2 ?"Odd":"Even";

console.log(result);


//-----------------------------//

// Short-Circuit

name = "" || "Guest";
console.log(name); // Guest — because "" is falsy

console.log("Hello" || "Bye"); // Hello — first truthy



age = 0 && "Allowed";
console.log(age); // 0 — because 0 is falsy


let loggedIn = true && "Welcome!";
console.log(loggedIn); // Welcome! — both are truthy


let a = null || 0 || "Hello" || 5;
let b = true && 1 && "JS" && "";

console.log(a); // ?
console.log(b); // ?
