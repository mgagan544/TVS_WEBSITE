// Dots Navigation Logic
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Remove 'active' class from all dots
    dots.forEach(d => d.classList.remove('active'));
    // Add 'active' class to the clicked dot
    dot.classList.add('active');
  });
});
