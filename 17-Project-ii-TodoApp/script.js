const inputText = document.getElementById("input-box");
console.log(inputText);
const list = document.getElementById("list-container");

function addTask() {
  if (inputText.value.trim() === "") {
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
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

saveData = () => {
  localStorage.setItem("data", list.innerHTML);
};

showData = () => {
  list.innerHTML = localStorage.getItem("data");
};

showData();
