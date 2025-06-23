console.log("Checkin connection");

// A selector is how you tell JavaScript which element(s) on your HTML page you want to work with.
const heading = document.getElementById("title");

// Selects one element by its ID (must be unique).
console.log(heading);

// Selects all elements with a specific class name (returns an HTMLCollection).
const info = document.getElementsByClassName("info");
console.log(info[0].textContent); // First

// Selects all elements by tag (e.g., div, p, h1, etc.)

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[1].textContent);

// Selects the first matching element using CSS selector syntax.
const para = document.querySelector(".highlight");
console.log(para);

//Selects all matching elements using CSS selector syntax (returns a NodeList).
const allParas = document.querySelectorAll(".highlight");
console.log(allParas[1].textContent);

const title = document.getElementById("mainTitle");
console.log(title.textContent);
const firstInfo = document.querySelector(".info");
console.log(firstInfo);
const allInfos = document.querySelectorAll(".info");
console.log(allInfos);

//============= InnerText =================//

console.log(document.getElementById("para").innerText); // "Hello"
console.log(document.getElementById("para").textContent); // "Hello Hidden"

//Gets or sets the HTML content inside the element.
console.log(document.getElementById("box").innerHTML); // "<strong>Bold</strong> text"
box.innerHTML = "<em>pushing New content</em>";
