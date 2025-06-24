let button = document.getElementById("name-changer");
let bckButton = document.getElementById("bck-changer");
let bodyClass = document.getElementsByClassName("normal-mode");
let name = document.getElementById("name");

console.log(name.textContent);
console.log(bodyClass);

button.addEventListener("click", () => {
  name.textContent !== "Maruf"
    ? (name.textContent = "Maruf")
    : (name.textContent = "Mustak Mia");
});

bckButton.addEventListener("click", () => {
  document.body.classList.toggle("reverse-mode");
});
