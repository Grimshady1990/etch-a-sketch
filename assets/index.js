const container = document.createElement("div");
document.body.appendChild(container);



/*  ***TEST ELEMENT***
const test = document.createElement("p");
container.appendChild(test);
test.textContent = "Dom test"; */

function gridCall() {
    const gridCell = document.createElement("div");
    gridCell.textContent = "test";
    container.appendChild(gridCell);
    

}

function createGrid(root) {
    let squareRoot = root ** 2;
    for (i = 1; i <= squareRoot; i++){
    gridCall();
   
    }   
}
createGrid(3);