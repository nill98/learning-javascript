// Convert Object to JSON

const person = {
  name: "Maruf",
  age: 27,
  job: "Web Developer",
  student: false,
};

const json = JSON.stringify(person);

console.log(json);

// Convert JSON to Object

const person2 = JSON.parse(json);
console.log(person2);

//---------------------------------------//

// Task:
// Create an object called `book` with title, author, and pages.
// Then convert it into a JSON string and log it.

const book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  pages: 320,
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

//---------------------------------------//

// Task:
// You’re given this JSON string. Convert it into an object and log the values.

const jsonData = '{"name":"Maxwell","score":95,"passed":true}';
const data = JSON.parse(jsonData);

console.log(data.name, data.score, data.passed);

// -------------------------------------//

// Task:
// Make an array of 3 students, each with name and age.
// Convert the array into JSON and log it.

const students = [
  { name: "Maruf", roll: 1, gender: "Male" },
  { name: "Nishat", roll: 2, gender: "Female" },
  { name: "Mustak", roll: 3, gender: "Male" },
];

const studentJson = JSON.stringify(students);
console.log(studentJson);

// Parse the JSON back and loop through it

const parsedStudent = JSON.parse(studentJson);

parsedStudent.forEach((s) => {
  console.log(`Name: ${s.name}`, `Roll: ${s.roll}`, `Gender: ${s.gender}`);
});

parsedStudent.forEach((s) => {
  console.log(`Name: ${s.name}`, `Roll: ${s.roll}`, `Gender: ${s.gender}`);
});
