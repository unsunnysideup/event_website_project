document.getElementById("theme-button").addEventListener("click", () => {
   toggleDarkMode();
   buttonChange();
});

function toggleDarkMode() {
   document.body.classList.toggle("dark-mode"); 
}

function buttonChange() {
   let themeButton = document.getElementById("theme-button");
   if (themeButton.textContent=="Toggle Dark Mode") themeButton.textContent = "Toggle Light Mode";
   else themeButton.textContent = "Toggle Dark Mode";

}