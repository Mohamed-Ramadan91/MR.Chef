//Select The Header
let header = document.querySelector("header");
let links = document.querySelectorAll("header nav ul li");
//Put class "sticky" to header when scroll
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0); // New Rule for me
});
let aboutMe = document.querySelector(".about-me");
let myName = document.querySelector("footer span");
myName.onclick = function (event) {
  aboutMe.classList.toggle("show");
};
/* =============== ADD Lazy Load Function ===============*/
lozad(".lozad", {
  load: function (el) {
    el.src = el.dataset.src;
    el.onload = function () {
      el.classList.add("fade");
    };
  },
}).observe();
