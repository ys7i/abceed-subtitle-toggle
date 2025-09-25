document.addEventListener('keydown', function(event) {
  if (event.key === 's' || event.key === 'S') {
    const subtitleContainer = document.querySelector('.movie-subtitle-component');

    if (subtitleContainer) {
      const subtitleElements = subtitleContainer.querySelectorAll('p');

      subtitleElements.forEach(p => {
        if (p.style.display === 'none') {
          p.style.display = '';
        } else {
          p.style.display = 'none';
        }
      });
    }
  }
});