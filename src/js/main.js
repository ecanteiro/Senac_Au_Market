document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburgerButton.addEventListener("click", function () {
    mobileNav.classList.toggle("is-active");
  });
});
