// Fade-in content on page load
window.onload = function() {
    document.body.style.opacity = 1;
  };
  
  // Smooth scrolling for navigation
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scroll({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  