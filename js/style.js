/* Button for Mobile Menu */
// get elements using ID tags
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

// add event listeners to toggle the hidden attribute
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
