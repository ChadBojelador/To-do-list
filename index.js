particlesJS.load('particles-js', 'particles.json'), function() {
  console.log('particles.js loaded - callback');}

  document.body.addEventListener('click', function() {
    const titleElement = document.getElementById('scroll1');
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Smooth scroll to the 'CONTACTS' section when '.content' is clicked
  document.querySelector('.content').addEventListener('click', function() {
    const titleElement = document.getElementById('contt');
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: 'smooth' });
    }
  });

