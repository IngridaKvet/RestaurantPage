import "./styles.css";

console.log("REstaurant")

const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let index = 0;
const visibleCards = 3;
const totalCards = cards.length;

// Function to move the slider
function updateSliderPosition() {
  slider.style.transform = `translateX(${-index * (100 / visibleCards)}%)`;
}

// Right arrow click event
rightArrow.addEventListener('click', () => {
  if (index < totalCards - visibleCards) {
    index++;
  } else {
    index = 0; // Loop back to the first card
  }
  updateSliderPosition();
});

// Left arrow click event
leftArrow.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = totalCards - visibleCards; // Loop to the last set of visible cards
  }
  updateSliderPosition();
});
