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

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
