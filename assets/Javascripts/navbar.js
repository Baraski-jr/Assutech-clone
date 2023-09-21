// nav bar
const toggle = document.querySelector(".toggle");
const navBar = document.querySelector(".primary-nav");

toggle.addEventListener("click", () => {
  if (navBar.classList.contains("nav-open")) {
    navBar.classList.add("nav-close");
    navBar.classList.remove("nav-open");
  } else {
    navBar.classList.add("nav-open");
    navBar.classList.remove("nav-close");
  }
});

// Team member

const showBtn = document.querySelector(".read-more");
const detail = document.querySelector(".show-detail");
