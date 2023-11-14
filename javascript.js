let gridContainer = document.getElementById('grid-container');

let n = prompt("Type a number between 0-64?");
for (i=0; i < n; i++){
    let squareRow = document.createElement('div');
    squareRow.className = 'row';

    for(j=0; j < n; j++){
        let squareCol = document.createElement('div');
        squareCol.className = 'col';
        squareRow.appendChild(squareCol);
    }
    gridContainer.appendChild(squareRow);
}