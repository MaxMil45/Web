// JavaScript (script.js)

// Get the ball element
const ball = document.querySelector('.ball');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to handle the click event
function changeColor() {
  ball.style.backgroundColor = getRandomColor();
}

// Add a click event listener to the ball
ball.addEventListener('click', changeColor);
