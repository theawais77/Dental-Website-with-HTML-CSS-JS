// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    var navLinks = document.getElementById("navLinks");
    var menuIcon = document.querySelector(".fa-bars");
    var closeIcon = document.querySelector(".fa-times");

    if (menuIcon && closeIcon) {
        menuIcon.addEventListener("click", function () {
            showMenu();
        });

        closeIcon.addEventListener("click", function () {
            hideMenu();
        });
    }

    // Example: Smooth scrolling for anchor links
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Example: Form validation
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }
});

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    // Example: Simple form validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Please fill out all fields in the form.");
    } else {
        alert("Form submitted! We will get back to you soon.");
        // You can also submit the form data to a server using AJAX.
    }
}
