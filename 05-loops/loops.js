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


person = { name: "Alice", age: 25, city: "Paris" };

for (let key in person) {
  console.log(key + ":", person[key]);
}
