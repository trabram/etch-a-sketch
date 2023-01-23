// height x width of canvas
let dimension = 8;

// get canvas element
let elementGrid = document.querySelector('.grid');

// generate canvas
for (let index = 0; index < dimension; index++) {
  
  // create row element
  let elementRow = document.createElement("div");
  elementRow.classList.add('row');

  // create box inside row
  for (let i = 0; i < dimension; i++) {
    let elementBox = document.createElement("div");
    elementBox.classList.add('box');
    elementRow.appendChild(elementBox);
  }
  
  // append row to canvas
  elementGrid.appendChild(elementRow);
}