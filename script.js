// Sticky Navbar Shadow
window.addEventListener('scroll', function(){
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 10 ? "0 2px 10px rgba(0,0,0,0.3)" : "none";
});

// Smooth Scroll Offset
document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const offset = target.offsetTop - 70;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

// Hero Slider
window.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  let currentSlide = 0;
  function nextSlide(){
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active');
  }
  setInterval(nextSlide, 5000);
});
