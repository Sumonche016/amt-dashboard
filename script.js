document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      navButtons.forEach((button) => {
        button.classList.remove("active-nav-btn");
      });

      button.classList.add("active-nav-btn");
    });
  });

  const dashboardBtn = document.getElementById("dashboardBtn");
  dashboardBtn.classList.add("active-nav-btn");
});

// for toggle mobile menu
const navButtons = document.getElementById("side-nav");
const hamburger = document.getElementById("hamburger-icon");
const closeNav = document.getElementById("close-nav");

hamburger.addEventListener("click", () => {
  navButtons.classList.add("show-sidenav");
});

closeNav.addEventListener("click", () => {
  navButtons.classList.remove("show-sidenav");
});
