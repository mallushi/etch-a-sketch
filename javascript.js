let gridContainer = document.getElementById('grid-container');
let gridSize = document.getElementById('size');
let originalSize = 500;

gridSize.addEventListener('click', function(){
    let n = prompt("Enter a number between 0-100:");
    gridContainer.innerHTML ='';

let squareSize = originalSize / n - 2;

for (i=0; i < n; i++){
    let squareRow = document.createElement('div');
    squareRow.className = 'row';

    for(j=0; j < n; j++){
        let squareCol = document.createElement('div');
        squareCol.className = 'col';
        squareCol.style.width = `${squareSize}px`;
        squareCol.style.height = `${squareSize}px`;

        squareCol.addEventListener('mouseover', function() {
            squareCol.style.backgroundColor = 'red';
        })

        squareRow.appendChild(squareCol);
    }
    gridContainer.appendChild(squareRow);
}
});