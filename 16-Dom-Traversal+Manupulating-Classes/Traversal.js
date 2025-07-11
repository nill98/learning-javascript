console.log("Check if the connection is working");

// Parent Node

const child = document.getElementById("child");
console.log(child.parentElement);

// Child Nodes
const menu = document.getElementById("menu");
console.log(menu.children);
console.log(menu.childElementCount);
console.log(menu.childNodes);
console.log(menu.firstElementChild);

// Sibling Nodes
let first = document.getElementById("one");
const second = first.nextElementSibling;
console.log(second.textContent); // Logs "Second"

// All Child Nodes (including text and comments)
const box = document.getElementById("box");
console.log(box.childNodes);
//----------------------------------------------------------------//

const items = document.querySelectorAll("#flavors li");
console.log("Items = ", items);

// 2️⃣ Attach a click listener to each <li>
items.forEach((item) => {
  item.addEventListener("click", function () {
    // 3️⃣ Traverse sideways to collect siblings
    const siblings = [];

    // -- previous siblings
    let prev = this.previousElementSibling;
    while (prev) {
      siblings.push(prev);
      console.log(prev);
      prev = prev.previousElementSibling;
    }

    // -- next siblings
    let next = this.nextElementSibling;
    while (next) {
      siblings.push(next);
      next = next.nextElementSibling;
    }

    // 4️⃣ Apply highlight class
    siblings.forEach((el) => el.classList.add("highlight"));

    // 5️⃣ Remove highlight after 1 s
    setTimeout(() => {
      siblings.forEach((el) => el.classList.remove("highlight"));
    }, 1000);
  });
});
