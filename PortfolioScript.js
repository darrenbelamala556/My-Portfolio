console.log("PortfolioScript.js is connected!");

const themeBtn = document.getElementById("darkmode-toggle");
const body = document.body;

body.classList.add("light");

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

const aboutText = document.getElementById("about-content");
const editBtn = document.getElementById("edit-about");

editBtn.addEventListener("click", () => {
  if (aboutText.isContentEditable) {
    aboutText.contentEditable = "false";
    editBtn.textContent = "Edit";
  } else {
    aboutText.contentEditable = "true";
    aboutText.focus();
    editBtn.textContent = "Save";
  }
});
