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
