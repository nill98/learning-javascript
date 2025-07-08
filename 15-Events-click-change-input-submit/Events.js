console.log("Check the connection");

let btn = document.getElementById("myBtn");
console.log(btn);

//click Event
btn.addEventListener("click", () => {
  alert("button was clicked!");
});

//change Event
let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", () => {
  alert("You have selected: " + colorPicker.value);
});

//input Event
let userName = document.getElementById("userName");
userName.addEventListener("input", () => {
  console.log("Current value: " + userName.value);
});

//submit Event
let form = document.getElementById("loginForm");
// alert("Form submitted with Email: " + form); // Not working
// console.log(form.value); // Not working
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);
  alert(email);
});
