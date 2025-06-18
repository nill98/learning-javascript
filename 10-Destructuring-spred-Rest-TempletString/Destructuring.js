console.log("Check Destructuring")

let numbers = [1, 2, 3];





//Skip elements
let [first, , third] = [10, 20, 30];
console.log(first); // 10
console.log(third); // 30


// Default Values
let [x = 100, y = 200] = [5,60,33];
console.log(x); // 5
console.log(y); // 200 (because 2nd value was missing)




// Object Destructuring
let user = {
  name: "Maruf",
  age: 25,
  city: "Sylhet"
};

let { name, age } = user;

console.log(name); // "Maruf"
console.log(age);  // 25


// Rename variables
let { city: hometown } = user;

console.log(hometown); // "Sylhet"


// Default values

let { email = "Not provided" } = user;

console.log(email); // "Not provided"


// Destructuring in function parameters

function greet({ name, city }) {
  console.log(`Hi ${name} from ${city}`);
}

greet(user); // Hi Maruf from Sylhet



//===============================================//

// You are given the following data:

const student = {
  fullName: "Maruf Hossain",
  scores: [85, 90, 78],
  address: {
    city: "Sylhet",
    zip: 3100
  }
};

// ✅ Task:
// Use object destructuring to extract:

// fullName

// scores

// city from address

let {fullName , scores: [math, English, Science], address: {city} } = student;


console.log (fullName);
console.log (`scores: match:${math} English:${English} Science:${Science}`);
console.log (city);


//==================================================================================//

// Spred


let nums = [1, 2, 3];
let copied = [...nums]; // creates a new array
console.log(copied); // [1, 2, 3]


let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]


let user2 = { name: "Maruf" };
let moreInfo = { age: 25 };
let fullUser = { ...user2, ...moreInfo };
console.log(fullUser); // { name: "Maruf", age: 25 }


//======================================================//


// Rest
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n);
}

console.log(sum(1, 2, 3)); // 6


// Rest in distructuring
let [first1, ...rest] = [10, 20, 30, 40];
console.log(first1); // 10
console.log("rest: " + rest);  // [20, 30, 40]


// Object distructuring 

let { name1, ...otherDetails } = { name1: "Maruf", age: 25, city: "Sylhet" };
console.log(name1);         // Maruf
console.log(otherDetails); // { age: 25, city: "Sylhet" }
console.log(typeof(otherDetails));

//===============================================//

// You're given a user profile object:



const profile = {
  name2: "Mustak",
  age: 25,
  city: "Sylhet",
  profession: "Developer"
};

// Tasks:
// Use object destructuring with the rest operator to:
// Extract name and collect the rest of the properties into a new object called otherInfo.
// Create a new profile object that:
// Has all the original data from profile
// Adds a new field: country: "Bangladesh"
// Use the spread operator for this.

let { name2, ...otherInfo} = profile;

console.log("Profile Name: " + name2);
console.log("Other Information: ", otherInfo);

let newProfile = {...profile};

newProfile.country = "Bangladesh";

console.log("New Profile: ", newProfile);

// "practiced Destructuring,Spread,rest"