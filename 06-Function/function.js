console.log("check");
function greet(name) {
  console.log("Hi, " + name + "!");
}

greet("Alice");
greet("Bob");


function add(x, y) {
  return x + y;
}

let result = add(5, 3);
console.log("Result:", result);



function vowel_finder(s){
    let counter=0;
    for(let x in s){
        console.log(s[x]);
        if (s[x]==='a' || s[x]==='i' || s[x]==='e' || s[x]==='o' || s[x]==='u')
            counter++;
    }
    return counter;
}

const vowel_finder2=(s)=>{
    let counter=0;
    for(let x in s){
        console.log(s[x]);
        if (s[x]==='a' || s[x]==='i' || s[x]==='e' || s[x]==='o' || s[x]==='u')
            counter++;
    }
    return counter;
}
console.log(vowel_finder2("maruf"));
console.log(vowel_finder("mustak"));


function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(6)); // true
console.log(isEven(7)); // false