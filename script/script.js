document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon .icon");
    const navContainer = document.querySelector(".nav-links-container");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navContainer.classList.toggle("show");
        navbar.classList.toggle("menu-open");
        menuIcon.innerHTML = navContainer.classList.contains("show") ? "✖" : "&#9776;"; // Toggle icon
    });
});