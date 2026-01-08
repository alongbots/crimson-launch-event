document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.remove('pulse');
    void card.offsetWidth;
    card.classList.add('pulse');
  });
});
