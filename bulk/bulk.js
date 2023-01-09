const obrazek = document.querySelector('.dis');
const tekst = document.querySelector('.element');

obrazek.addEventListener('mouseenter', () => {
  obrazek.style.opacity = 0;
  tekst.style.display = 'block';
});

obrazek.addEventListener('mouseleave', () => {
  obrazek.style.opacity = 1;
  tekst.style.display = 'none';
});