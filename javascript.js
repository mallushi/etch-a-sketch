let gridContainer = document.getElementById('grid-container');

let n = prompt("Type a number between 0-64?");
let squareSize = 500 / n - 2;

for (i=0; i < n; i++){
    let squareRow = document.createElement('div');
    squareRow.className = 'row';

    for(j=0; j < n; j++){
        let squareCol = document.createElement('div');
        squareCol.className = 'col';
        squareCol.style.width = `${squareSize}px`;
        squareCol.style.height = `${squareSize}px`;

        squareCol.addEventListener('mouseover', function() {
            squareCol.style.backgroundColor = 'white';
        })

        squareRow.appendChild(squareCol);
    }
    gridContainer.appendChild(squareRow);
}