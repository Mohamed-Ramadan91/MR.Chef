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
/* =============== Responsive Menu ===============*/
let ul = document.querySelector("header nav ul");
let menu = document.querySelector("header nav i");
let closeMenu = document.createElement("i");
closeMenu.className = "ri-close-line";
menu.onclick = function (event) {
  ul.classList.toggle("open-menu");
  if (ul.classList.contains("open-menu")) {
    ul.prepend(closeMenu);
  } else {
    closeMenu.remove();
  }
};
closeMenu.onclick = function (event) {
  ul.classList.toggle("open-menu");
};
links.forEach(function (li) {
  li.addEventListener("click", function (event) {
    if (window.matchMedia("(max-width: 767px)").matches === true)
      ul.classList.toggle("open-menu");
  });
});

/* =============== ADD Lazy Load Function ===============*/
/*
lozad(".lozad", {
  load: function (el) {
    el.src = el.dataset.src;
    el.onload = function () {
      el.classList.add("fade");
    };
  },
}).observe();
*/
