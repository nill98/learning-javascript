console.log("check the connection")

let arr=[];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);

console.log(arr);

arr.pop();
console.log(arr);

let animals = ["cat", "dog", "rabbit"];
let first = animals.shift();

console.log(first);    // "cat"
console.log(animals);  // ["dog", "rabbit"]

animals.unshift("lion");

console.log(animals); // ["lion", "dog", "rabbit"]

let nums = [1, 2, 3, 4];

console.log(nums.includes(3));  // true
console.log(nums.includes(5));  // false


let colors = ["red", "blue", "green"];

console.log(colors.indexOf("blue"));   // 1
console.log(colors.indexOf("pink"));   // -1 (not found)


let letters = ["a", "b", "c", "d", "e"];
let part = letters.slice(1, 4); // from index 1 to before index 4

console.log(letters);  // ["a", "b", "c", "d", "e"] (unchanged)
console.log(part);     // ["b", "c", "d"]


let words = ["Hello", "world"];
console.log(words.join(" "));  // "Hello world"

let digits = [1, 2, 3];
digits.reverse();

console.log(digits); // [3, 2, 1]



