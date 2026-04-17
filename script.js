// script.js – interactive nav, smooth scroll, parallax effect, form handling
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Navbar background change on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(2,6,23,0.95)';
    } else {
      navbar.style.background = 'rgba(2,6,23,0.8)';
    }
  });

  // Mouse-responsive shape movement (parallax)
  const shape = document.querySelector('.floating-shape');
  if (shape) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      shape.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    });
  }

  // Registration form handler (prevent default, show message)
  const form = document.getElementById('registerForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('🚀 Thank you for your interest! The Doyox team will reach out soon.');
      form.reset();
    });
  }

  // Simple performance-aware animation: reveal elements on scroll (basic)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.glass, .venture-card, .about-card, .roadmap-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Fallback for logo: if image fails, keep text visible.
window.addEventListener('load', () => {
  const logoImg = document.getElementById('logoImg');
  if (logoImg) {
    logoImg.onerror = () => {
      logoImg.style.display = 'none';
    };
  }
});