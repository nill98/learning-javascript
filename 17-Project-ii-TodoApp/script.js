const inputText = document.getElementById("input-box");
console.log(inputText);
const list = document.getElementById("list-container");

function addTask() {
  if (inputText.value === "") {
    alert("You must write something...!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    list.appendChild(li);

    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  }
  inputText.value = "";
}
