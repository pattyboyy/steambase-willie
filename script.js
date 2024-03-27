// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
    steam.style.left = Math.random() * 100 + '%';
    steam.style.animationDuration = Math.random() * 2 + 3 + 's';
    steam.style.opacity = Math.random();
    steamAnimation.appendChild(steam);

    setTimeout(() => {
        steam.remove();
    }, 5000);
}

setInterval(createSteam, 200);