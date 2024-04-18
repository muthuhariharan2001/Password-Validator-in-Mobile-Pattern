// const patternContainer = document.getElementById('pattern-container');
// const passwordInput = document.getElementById('password');
// const patternDots = document.querySelectorAll('.pattern-dot');
// let lineInProgress = false;
// let selectedDots = [];
// const lines = [];

// patternContainer.addEventListener('mousedown', (e) => {
//   const clickedDot = e.target;
//   if (clickedDot.classList.contains('pattern-dot')) {
//     clickedDot.classList.add('active');
//     selectedDots.push(clickedDot);
//     lineInProgress = true;
//   }
// });

// patternContainer.addEventListener('mousemove', (e) => {
//   if (lineInProgress) {
//     const currentDot = findDotAtCoordinates(e.clientX, e.clientY);
//     if (currentDot && !selectedDots.includes(currentDot)) {
//       currentDot.classList.add('active');
//       selectedDots.push(currentDot);
//     }
//     drawLine(selectedDots[selectedDots.length - 2], currentDot);
//   }
// });

// patternContainer.addEventListener('mouseup', () => {
//   if (lineInProgress) {
//     lineInProgress = false;
//     checkPattern();
//     clearLines();
//   }
// });

// function findDotAtCoordinates(x, y) {
//   for (const dot of patternDots) {
//     const rect = dot.getBoundingClientRect();
//     if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
//       return dot;
//     }
//   }
//   return null;
// }

// function drawLine(startDot, endDot) {
//   const line = document.createElement('div');
//   line.classList.add('line');
//   const rectStart = startDot.getBoundingClientRect();
//   const rectEnd = endDot.getBoundingClientRect();
//   const startX = rectStart.left + rectStart.width / 2;
//   const startY = rectStart.top + rectStart.height / 2;
//   const endX = rectEnd.left + rectEnd.width / 2;
//   const endY = rectEnd.top + rectEnd.height / 2;
//   const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
//   const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
//   line.style.width = length + 'px';
//   line.style.transform = `rotate(${angle}deg)`;
//   line.style.top = startY + 'px';
//   line.style.left = startX + 'px';
//   document.body.appendChild(line);
//   lines.push(line);
// }

// function clearLines() {
//   lines.forEach(line => line.remove());
//   lines.length = 0;
// }

// function checkPattern() {
//   let enteredPattern = '';
//   selectedDots.forEach(dot => {
//     const dotIndex = Array.from(patternDots).indexOf(dot);
//     enteredPattern += (dotIndex + 1).toString();
//   });
  
// console.log(enteredPattern);

//   if (enteredPattern === passwordInput.value) {
//     alert('Password Pattern Correct!');
//     selectedDots.forEach(dot => {
//       dot.classList.remove('active');
//     });
//     selectedDots = [];
//   }
// }

const patternContainer = document.getElementById('pattern-container');
const passwordInput = document.getElementById('password');
const patternDots = document.querySelectorAll('.pattern-dot');
const wipeUpMessage = document.getElementById('wipe-up-message');

let lineInProgress = false;
let selectedDots = [];
const lines = [];

patternContainer.addEventListener('mousedown', (e) => {
  const clickedDot = e.target;
  if (clickedDot.classList.contains('pattern-dot')) {
    clickedDot.classList.add('active');
    selectedDots.push(clickedDot);
    lineInProgress = true;
  }
});

patternContainer.addEventListener('mousemove', (e) => {
  if (lineInProgress) {
    const currentDot = findDotAtCoordinates(e.clientX, e.clientY);
    if (currentDot && !selectedDots.includes(currentDot)) {
      currentDot.classList.add('active');
      selectedDots.push(currentDot);
    }
    drawLine(selectedDots[selectedDots.length - 2], currentDot);
  }
});

patternContainer.addEventListener('mouseup', () => {
  if (lineInProgress) {
    lineInProgress = false;
    checkPattern();
    clearLines();
  }
});

function findDotAtCoordinates(x, y) {
  for (const dot of patternDots) {
    const rect = dot.getBoundingClientRect();
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      return dot;
    }
  }
  return null;
}

function drawLine(startDot, endDot) {
  if (startDot && endDot) { // Add a null check for startDot and endDot
    const line = document.createElement('div');
    line.classList.add('line');
    const rectStart = startDot.getBoundingClientRect();
    const rectEnd = endDot.getBoundingClientRect();
    const startX = rectStart.left + rectStart.width / 2;
    const startY = rectStart.top + rectStart.height / 2;
    const endX = rectEnd.left + rectEnd.width / 2;
    const endY = rectEnd.top + rectEnd.height / 2;
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    line.style.width = length + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.top = startY + 'px';
    line.style.left = startX + 'px';
    document.body.appendChild(line);
    lines.push(line);
  }
}


function clearLines() {
  lines.forEach(line => line.remove());
  lines.length = 0;
}

function checkPattern() {
  let enteredPattern = '';
  selectedDots.forEach(dot => {
    const dotIndex = Array.from(patternDots).indexOf(dot);
    enteredPattern += (dotIndex + 1).toString();
  });

  console.log(enteredPattern)
  if (enteredPattern === passwordInput.value) {
    alert('Password Pattern Correct!');
    selectedDots.forEach(dot => {
      dot.classList.remove('active');
    });
    selectedDots = [];
    window.location.href = 'app.html';
  }
}