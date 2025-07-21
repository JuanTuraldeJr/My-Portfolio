document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.transition = 'background-color 0.3s ease';
        navbar.style.backgroundColor = window.scrollY > 50
            ? 'rgba(10, 10, 10, 0.98)'
            : 'rgba(10, 10, 10, 0.95)';
    }
});