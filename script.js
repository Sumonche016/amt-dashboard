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
