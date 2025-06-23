// Select the elements
const heading = document.getElementById("heading");
const button = document.getElementById("modeBtn");
const body = document.body;

// Add event listener to the button
button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Change heading and button text accordingly
  if (body.classList.contains("dark-mode")) {
    heading.innerText = "Dark Mode is On";
    button.innerText = "Switch to Light Mode";
  } else {
    heading.innerText = "Light Mode is On";
    button.innerText = "Switch to Dark Mode";
  }
});
