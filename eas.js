
const gridDiv = document.getElementById('etch-a-sketch-grid');

let gridSize = 16;

const newButton = document.getElementById('new');
newButton.addEventListener('click', () => {
    const newGridSize = prompt("Enter a grid Size", 16);
    gridDiv.style.setProperty("--grid-size", newGridSize);
    newGrid(newGridSize);
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    gridDiv.childNodes.forEach(function (element) {
        element.style.backgroundColor = "black";
    });
});

function randomBgColor(element) {
    let colorHex = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = '#'+colorHex;
}

function newGrid (gridSize) {
    function killAllChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    killAllChildren(gridDiv)
    for (let i = 1; i <= gridSize**2; i++) {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('grid');
        colorDiv.addEventListener('mouseenter', function(event) {
            randomBgColor(colorDiv);
        });       
        gridDiv.appendChild(colorDiv);        
    };
}
newGrid(gridSize);