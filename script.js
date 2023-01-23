// init canvas height x width
let dimension = 16;

// get canvas element
const elementGrid = document.querySelector('.grid');

function generateCanvas(size) {
  for (let index = 0; index < size; index++) {
    
    // create row element
    let elementRow = document.createElement("div");
    elementRow.classList.add('row');

    // create box inside row
    for (let i = 0; i < size; i++) {
      let elementBox = document.createElement("div");
      elementBox.classList.add('box');
      elementRow.appendChild(elementBox);

      // draw on mouse hover
      elementBox.onmouseover = (e) => e.target.style.backgroundColor = 'black';
    }
    
    // append row to canvas
    elementGrid.appendChild(elementRow);
  }
}

function resizeCanvas() {
  // input new canvas size
  let newDimension = Number(prompt('Size? (Max 100)'));
  while (isNaN(newDimension) || newDimension < 1) {
    newDimension = Number(prompt('Size? (Max 100)'));
  }
  if (newDimension > 100) newDimension = 100;
  
  // replace canvas
  elementGrid.innerHTML = '';
  generateCanvas(newDimension);
}

function clearCanvas() {
  const boxes = elementGrid.querySelectorAll('.box');
  for (const box of boxes) {
    box.style.backgroundColor = 'white';
  }
}

generateCanvas(dimension);