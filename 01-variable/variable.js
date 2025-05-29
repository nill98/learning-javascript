var x = 5;
var y = 6;
var z = x + y;

console.log(z);


// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
console.log(pi);
console.log(person);
console.log(answer);

// strings will be concatenated:
let s = "John" + " " + "Doe";
console.log(s);

// if the first one is treated as string then the rest of them will also be treated as string
let ss = "5" + 2 + 3;
console.log(ss);

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
x = 2 + 3 + "5";
console.log(x);

// Variables defined with let can not be redeclared.
// let x = "John Doe";

// let x = 0;



// Variables defined with var can be redeclared.

var x = "Maruf vai"
console.log(x);
var x= 0
console.log("value of x has been changed to ", x);


var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

//Redeclaring a variable using the let keyword can solve this problem.

let xx = 10;
// Here x is 10

{
let xx = "Maruf";
console.log(xx)
// Here x is Maruf
}
console.log("let xx= ",xx);
// Here x is 10


//-----------------------------------------//

// var a = 2;   // Allowed
// let a = 3;   // Not allowed

// {
// let a = 2;   // Allowed
// let a = 3;   // Not allowed
// }

// {
// let a = 2;   // Allowed
// var a = 3;   // Not allowed
// }


carName = "Saab";
//let carName = "Volvo"; //Using a let variable before it is declared will result in a ReferenceError

//----------------------------------------------------------------------//

// A variable defined with the const keyword cannot be reassigned:

const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error
console.log(PI);


const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

console.log(cars[0]);

// You can add an element:
cars.push("Audi");


// cars = ["Toyota", "Volvo", "Audi"];    // ERROR you can NOT reassign the array: