// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animation on Section Visibility
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = 0;
progressBar.style.left = 0;
progressBar.style.height = '5px';
progressBar.style.background = '#ff5c5c';
progressBar.style.zIndex = '9999';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercentage + '%';
});

// Add hover effect on navbar items
const navbarLinks = document.querySelectorAll('.navbar ul li a');
navbarLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ff5c5c';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});