document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
  
    card.addEventListener('click', function() {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
      } else {
        card.classList.add('active');
      }
    });
  });
  