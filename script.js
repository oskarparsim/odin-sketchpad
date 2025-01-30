const squareContainer = document.querySelector("#squareContainer");

for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.className = `row${i}`
    squareContainer.appendChild(row);
    for (let j = 1; j <= 16; j++) {
        const div = document.createElement("div");
        div.className = "square";
        row.appendChild(div);
    }
}