
  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    
    toggleBtn.addEventListener('click', function() {
      body.classList.toggle('dark-mode'); 
      if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light Mode';
      } else {
        toggleBtn.textContent = 'Dark Mode';
      }
    });
  });
