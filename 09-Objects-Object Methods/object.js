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



let user = {
  name: "Maruf",
  hobbies: ["reading", "gaming"],
  greet: function(){
    return "Hi, Thank you for watching my codes";
  },
  address:{
    city: "Sylhet",
    zipcode: 3100,
  }
};

console.log("User name: " +user.name);
console.log("User hobbis: " + user.hobbies);
console.log("User greet: " + user.greet());
console.log("User address: " + user.address);
console.log("User address: " + JSON.stringify(user.address));
console.log("User city: " + user.address.city)
console.log("User zipcode: " + user.address.zipcode);

// accessing the object properties through Loop

console.log("accessing through loop\n \n")
for (let i in user) {
  console.log(`${i}: ${user[i]}`);
}

console.log(Object.keys(user));