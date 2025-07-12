console.log("Check the connection");

const btn = document.getElementById("btn");
const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log("clicked");
});

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("open");
});
