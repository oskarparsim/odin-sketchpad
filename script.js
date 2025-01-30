const squareContainer = document.querySelector("#squareContainer");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.className = `column`
    row.id = `col${i}`
    squareContainer.appendChild(row);
    for (let j = 1; j <= 16; j++) {
        const div = document.createElement("div");
        let count = ((i-1) * 16) + j;
        div.className = `square`;
        div.id = `sqr${count}`;
        row.appendChild(div);
    }
}

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