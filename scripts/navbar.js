window.onscroll = function () {
  if (window.scrollY > 1) {
    document.querySelector('nav').classList.add('active');
  } else {
    document.querySelector('nav').classList.remove('active');
  }
};

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const subItem = document.querySelectorAll(".subItem");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

// close menu when clicking on a sub-item
subItem.forEach(
  function (subItem) {
    subItem.addEventListener("click", toggleMenu);
  }
)