document.addEventListener('DOMContentLoaded', function() {
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelector('.nav-links');

    navMobile.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            navLinks.style.transform = 'translate(0)';
        } else {
            navLinks.style.transform = 'translate(100%)';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navLinks.style.transform = 'translate(0)'; // Reset transform
            navLinks.classList.remove('active'); // Remove active class
        } else {
            navLinks.style.transform = 'translate(100%)'; // Close menu
            navLinks.classList.remove('active'); // Remove active class
        }
    });
});
