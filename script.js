// JavaScript to upgrade website behavior
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navLinks = document.querySelector('.nav-links');
    const burgerIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');

    if (burgerIcon) {
        burgerIcon.addEventListener('click', () => {
            navLinks.style.right = '0';  // Show navigation menu
        });
    }

    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            navLinks.style.right = '-200px';  // Hide navigation menu
        });
    }

    // Smooth Scrolling for Anchor Links
    const smoothScroll = function (target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Back-to-Top Button Functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.style.display = 'none';
    backToTopButton.style.position = 'fixed'; // Make it fixed to the viewport
    backToTopButton.style.bottom = '20px'; // Position it 20px from the bottom
    backToTopButton.style.right = '20px'; // Position it 20px from the right
    backToTopButton.style.background = '#f44336'; // Background color
    backToTopButton.style.color = '#fff'; // Text color
    backToTopButton.style.border = 'none'; // Remove border
    backToTopButton.style.borderRadius = '50%'; // Round shape
    backToTopButton.style.padding = '10px 15px'; // Padding for aesthetics
    backToTopButton.style.cursor = 'pointer'; // Pointer cursor
    backToTopButton.style.zIndex = '1000'; // Ensure it's on top

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'block'; // Show button
        } else {
            backToTopButton.style.display = 'none'; // Hide button
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic Year Update in Footer
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear; // Set current year
    }
});
