// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Handle profile picture loading
const profilePic = document.getElementById('profile-pic');
profilePic.addEventListener('load', function() {
    this.classList.add('loaded');
});

// If image doesn't exist, hide the placeholder
profilePic.addEventListener('error', function() {
    this.style.display = 'none';
});

// Smooth scrolling for navigation links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--link-color)';
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
