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

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    // Intersection Observer to start animation when visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    }, { threshold: 0.5 });
    observer.observe(counter);
  });

  // Newsletter form (prevent default, show message)
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing!');
      newsletterForm.reset();
    });
  }

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255,255,255,0.98)';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
      navbar.style.background = 'rgba(255,255,255,0.95)';
      navbar.style.boxShadow = 'none';
    }
  });
});
