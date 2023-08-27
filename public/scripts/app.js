const navBtn = document.querySelector(".menu-hum");
const navMobile = document.querySelector(".menu-mobile");
let navOpen = false;

navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("menu-hum--open");
    navMobile.classList.remove("menu-mobile--open");
    navOpen = false;
  } else {
    navBtn.classList.add("menu-hum--open");
    navMobile.classList.add("menu-mobile--open");
    navOpen = true;
  }
});
