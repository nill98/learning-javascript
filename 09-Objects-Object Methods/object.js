console.log("Check connection");

let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

// Dot Notation (most common):
console.log(person.name);  // "Alice"
console.log(person.age);   // 25

// Bracket Notation:Bracket Notation:
console.log(person["isStudent"]);  // true

// Updating & Adding Properties
person.age = 26;             // update
person.city = "New York";    // add new property

console.log(person);

//  Deleting Properties
delete person.isStudent;

// Looping Over an Object
for (let key in person) {
  console.log(key + ": " + person[key]);
}
