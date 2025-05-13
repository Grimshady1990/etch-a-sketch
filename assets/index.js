const container = document.createElement("div");
document.body.appendChild(container);



/*  ***TEST ELEMENT***
const test = document.createElement("p");
container.appendChild(test);
test.textContent = "Dom test"; */

function gridCall() {
    const gridCell = document.createElement("div");
    
    gridCell.setAttribute("style", "border: solid; border-width: 0.1px; background: green; width: 10px; height: 10px;");
    
    container.appendChild(gridCell);
    

}

function createGrid(root) {
    let squareRoot = root ** 2;
    for (i = 1; i <= squareRoot; i++){
    gridCall();
   
    }   
}
createGrid(2);