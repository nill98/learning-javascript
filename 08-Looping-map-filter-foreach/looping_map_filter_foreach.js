console.log("check if it is working");


let employee = ["Maruf","Mustak","Arif","Redwan","Tamim"];

employee.forEach(function(name,pos){
    console.log(pos+" Emplye " + name);
});


employee.forEach((name) => {
        console.log(name);
});



let arr=[1,2,4,6,5,10,15,20,25,54,23,11];

arr.forEach((val) => {
    console.log(val**2);
});



let nums = [1, 2, 3, 4];
let doubled = nums.map(function(n) {
  return n * 2;
});

console.log(doubled); // [2, 4, 6, 8]

doubled = nums.map((value) => {
    return value+10
});
console.log(doubled);




//-------------------------------------//

let prices = [10, 20, 30];
// Create a new array with 10% tax added

function get_percentage (val){
    return (val*10)/100;
}

let tax_added_money= prices.map((val) => {
    return val+get_percentage(val);
});

console.log(tax_added_money);


//-------------------------------------//

let numbers = [1, 2, 3, 4, 5, 6];

let evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens); // [2, 4, 6]
console.log("check");


// Try to write a filter that: Keeps only scores greater than or equal to 60

let scores = [50, 85, 92, 45, 77];
// let answer = scores.filter((x) => {
//     if (x>60) return x;
// });
let answer = scores.filter(x => x > 60);

console.log (answer);

let names = ["Alice", "Bob", "Eve", "John"];

let longNames = names.filter(name => name.length > 3);
console.log(longNames); // ["Alice", "John"]
