// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close the mobile menu dropdown
        mobileMenuDropdown.style.display = 'none';
    });
});

// Fade-in animation for sections
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Steam animation
const steamAnimation = document.querySelector('.steam-animation');

function createSteam() {
    const steam = document.createElement('div');
    steam.classList.add('steam');
    steam.style.left = Math.random() * (window.innerWidth - 400) + 'px';
    steamAnimation.appendChild(steam);

    setTimeout(() => {
        steam.remove();
    }, 5000);
}

setInterval(createSteam, 200);

// Mobile Menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenuDropdown = document.querySelector('.mobile-menu-dropdown');

mobileMenuIcon.addEventListener('click', () => {
    mobileMenuDropdown.style.display = mobileMenuDropdown.style.display === 'none' ? 'block' : 'none';
});