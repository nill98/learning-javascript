console.log("checking");

let 
person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

//console.log(txt);

for (let x in txt){
	console.log(txt[x]);
}


person = {
  name: "Alice",
  age: 30,
  city: "Sylhet"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(`Index ${index} = ${colors[index]}`);
}

let answer = "";

while (answer !== "yes") {
  answer = prompt("Type 'yes' to continue:");
}

console.log("Thanks!");

let i = 2;

while (i <= 10) {
  console.log(i);
  i += 2;
}

let password;

do {
  password = prompt("Enter your password:");
} while (password !== "1234");

console.log("Access granted!");


let num;

do {
  num = Number(prompt("Enter a number greater than 100:"));
} while (num <= 100);

console.log("Thanks! You entered:", num);


// Reverse a String using a Loop

let str = "Maruf Vai Zindabad";
let revrsed="";
let len = str.length;

for (let i=len-1; i>=0; i-- ){
    revrsed+= str[i];
}

console.log(revrsed);
console.log("chekc2");