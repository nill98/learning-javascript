console.log ("scope / hoisting check");

// Block Scope (let, const)

// {
//   let x = 10;
//   console.log(x); // ✅ works here
// }
// console.log(x); // ❌ Error: x is not defined


// Function Scope (var)

// function test() {
//   var y = 5;
//   console.log(y); // ✅ works here
// }
// console.log(y); // ❌ Error: y is not defined


// Global Scope

let name = "Maruf";

function greet() {
  console.log("Greeting from: ", name); // ✅ can access global
}

greet();



// =================== Hoisting ================ // 

console.log(x);
var x = 20;

{
  let y = 5;
  console.log(y);
}
console.log(y);
