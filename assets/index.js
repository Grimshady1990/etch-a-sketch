const container = document.createElement("div");
document.body.appendChild(container);

const gridCell = document.createElement("div");
container.appendChild(gridCell);

/*  ***TEST ELEMENT***
const test = document.createElement("p");
container.appendChild(test);
test.textContent = "Dom test"; */

function createGrid(root) {
    let squareRoot = root ** 2;
    for (i = 0; i <= squareRoot; i++){
        gridCell = document.createElement("div");
        container.appendChild(gridCell);
        return;
    }
}
createGrid(16);