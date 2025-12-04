document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel-items');
  const dotsContainer = document.getElementById('dots');
  
  if (!carousel) return;
  
  const items = carousel.querySelectorAll('.partner');
  const itemCount = items.length;
  let currentIndex = 0;
  
  // Create dots
  for (let i = 0; i < itemCount; i++) {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  
  function showSlide(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateDots(index);
  }
  
  function updateDots(index) {
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % itemCount;
    showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 4000);
  
  // Subscribe form handler
  const subscribeBtn = document.querySelector('.subscribe-btn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      const email = document.getElementById('subscribeEmail')?.value;
      if (email && email.includes('@')) {
        alert('Thank you for subscribing with: ' + email);
        document.getElementById('subscribeEmail').value = '';
      } else {
        alert('Please enter a valid email');
      }
    });
  }
});
