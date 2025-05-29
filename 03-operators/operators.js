
console.log("Operator file check");

let a = 2;
let x = (100 + 50) * a;


console.log(x);

x=5,y=3;
z= x**y;
console.log(z);

let text1 = "20";
let text2 = "5";
let result = text1 < text2;

console.log (result);

a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1 (remainder)
console.log("Exponent:", a ** b);       // 1000 (10^3)


x = 5;

x += 2;  // x = x + 2
console.log("x after += 2:", x); // 7

x *= 3;  // x = x * 3
console.log("x after *= 3:", x); // 21

a = 5, b = '5';

console.log(a == b);   // true (loose equality)
console.log(a === b);  // false (strict equality)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 3);    // true
console.log(a <= 5);   // true

let age = 18;
let status1 = (age >= 18) ? "Adult" : "Minor";
console.log(status1); // "Adult"


function checkAccess(role) {
  return (role === "admin") ? "Access granted" : "Access denied";
}

console.log(checkAccess("admin")); // Access granted
console.log(checkAccess("guest")); // Access denied
