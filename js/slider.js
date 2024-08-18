const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let currentIndex = 0;
let lastTapTime = 0; // Time and Tap Count for Double-Tap Detection.
const doubleTapThreshold = 300; // MAX-MS between taps.

function updateSliderPosition() {
  const offset = -currentIndex * slider.offsetWidth;
  slides.style.transform = `translateX(${offset}px)`;
}

// Detect Double Taps
slider.addEventListener('touchend', (e) => {
  const currentTime = new Date().getTime();
  const tapTimeDifference = currentTime - lastTapTime;

  if (tapTimeDifference < doubleTapThreshold && tapTimeDifference > 0) {
    const touchX = e.changedTouches[0].clientX;
    const sliderWidth = slider.offsetWidth;

    if (touchX > sliderWidth / 2) {
      // Right-Side Double Tap
      currentIndex = Math.min(currentIndex + 1, images.length - 1);
    } else {
      // Left-Side Double Tap
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    updateSliderPosition();
  }

  lastTapTime = currentTime;
});

window.addEventListener('resize', updateSliderPosition);