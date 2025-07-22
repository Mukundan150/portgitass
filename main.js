// Show thank you message after submit
document.getElementById('contactForm').onsubmit = function(e){
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('thankYou').style.display = 'block';
};

// Animate sections on load
window.onload = () => {
  document.querySelectorAll('.animated').forEach((el, i) => {
    el.style.animationDelay = `${0.22 + i*0.14}s`;
    el.classList.add('fadein-activated');
  });
};
