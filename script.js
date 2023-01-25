let dimension = 16;   // canvas height x width
let penMode   = 1;    // default pen mode

// get canvas element
const elementGrid = document.querySelector('.grid');

function randomHex() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
}

function generateCanvas(size) {
  for (let index = 0; index < size; index++) {
    
    // create row element
    let elementRow = document.createElement("div");
    elementRow.classList.add('row');

    // create box inside row
    for (let i = 0; i < size; i++) {
      let elementBox = document.createElement("div");
      elementBox.classList.add('box');
      elementBox.style.backgroundColor = 'rgb(255, 255, 255)';
      elementRow.appendChild(elementBox);

      // draw on mouse hover
      elementBox.onmouseover = (e) => {
        if      (penMode == 1) e.target.style.backgroundColor = 'rgb(0, 0, 0)';
        else if (penMode == 2) e.target.style.backgroundColor = randomHex();
        else if (penMode == 3) {
          let color = e.target.style.backgroundColor;
          let rgb   = color.substring(4, color.length - 1).split(', ');
          let hsl   = RGBToHSL(rgb[0], rgb[1], rgb[2]);
          e.target.style.backgroundColor = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2] - 10}%)`
        }
      }
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
    box.style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function changePen(mode) {
  const elementMode = document.querySelector('.penmode');

  if (mode == 1) elementMode.innerText = 'Black';
  if (mode == 2) elementMode.innerText = 'Random';
  if (mode == 3) elementMode.innerText = 'Darken';
  penMode = mode;
}

generateCanvas(dimension);