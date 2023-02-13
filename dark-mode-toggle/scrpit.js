const toggle = document.getElementById("toggle");
// const toggle = document.getElementsByTagName("input");

toggle.addEventListener("click", darkMode);
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark");
}
console.log("HI");
