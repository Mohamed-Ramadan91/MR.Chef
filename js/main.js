//Select The Header
let header = document.querySelector("header");
let links = document.querySelectorAll("header nav ul li");
//Put class "sticky" to header when scroll
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0); // New Rule for me
  console.log(window.scrollY);
});
let aboutMe = document.querySelector(".about-me");
let myName = document.querySelector("footer span");
myName.onclick = function (event) {
  aboutMe.classList.toggle("show");
};
/*
links.forEach(function (li) {
  li.addEventListener("click", function (event) {
    links.forEach(function (element) {
      element.classList.remove("active-link");
    });
    event.currentTarget.classList.toggle("active-link");
  });
});
*/
