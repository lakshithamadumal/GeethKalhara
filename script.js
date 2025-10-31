// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = `${width}%`;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  observer.observe(bar);
});

// Form submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const formData = new FormData(contactForm);
  const name = formData.get('name') || document.querySelector('input[type="text"]').value;
  const email = formData.get('email') || document.querySelector('input[type="email"]').value;
  const subject = formData.get('subject') || document.querySelectorAll('input[type="text"]')[1].value;
  const message = formData.get('message') || document.querySelector('textarea').value;
  
  // In a real application, you would send this data to a server
  console.log({ name, email, subject, message });
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'var(--glass-bg)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
});