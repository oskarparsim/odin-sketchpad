const squareContainer = document.querySelector("#squareContainer");
squareContainer.style.height = "800px";
squareContainer.style.width = "800px";

let gridSize = 16;

function drawGrid(gridSize) {
    for (let i = 1; i <= gridSize**2; i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.style.height = `${squareContainer.clientHeight / gridSize}px`
        div.style.width = `${squareContainer.clientWidth / gridSize}px`
        squareContainer.appendChild(div);
    }
}

function deleteGrid() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(element => {
        element.remove();
    });
}

drawGrid(gridSize);

squareContainer.addEventListener('mouseover', (e) => {
    if (e.target.className === 'square') {
        e.target.style.backgroundColor = "black";
    }
})

squareContainer.addEventListener('mouseout', (e) => {
    if (e.target.className === "square") {
        e.target.style.backgroundColor = "";
    }
})

const btn = document.getElementById("gridSizeBtn");
btn.addEventListener('click', (e) => {
    const input = document.getElementById("gridSizeText");
    gridSize = input.value;
    if (gridSize > 100) {
        alert("No more than 100!");
        return;
    };
    deleteGrid();
    drawGrid(gridSize);
})