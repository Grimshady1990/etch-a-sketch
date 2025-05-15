/*const bodyStyle = document.querySelector("body");
bodyStyle.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");



const container16 = document.createElement("div");
container16.setAttribute("style", "display: flex; justify-content: center; width: 160px; height:160px; flex-wrap: wrap;");
document.body.appendChild(container16);

container16.addEventListener("mouseover", changeColor);


function gridCall16() {

    const gridCell16 = document.createElement("div");
    gridCell16.setAttribute("style", "display: flex; flex-shrink: 1; background: green; width: 10px; height: 10px;");
    container16.appendChild(gridCell16);
}

function createGrid16() {
    let squareRoot = 16 ** 2;
    for (i = 1; i <= squareRoot; i++) {
        gridCall16();
    }
}
createGrid16();

function changeColor(event) {
    console.log(event);
    event.target.style.backgroundColor = "orange";
} */
/************************************************************ */

// ADD prompt input to button
document.querySelector("#grid-size").addEventListener("click", gridBuilder);



function gridBuilder() {
    let userInput = prompt("Please choose a size between 1-100")
    if (userInput < 1 || userInput > 100) {
        alert("ERROR! Please choose a size between 1-100");
        return gridBuilder();
    } else {
        alert(`You chose a grid of ${userInput} X ${userInput}`);    
    }

    let userSquared = userInput ** 2
    
    for (let i = 2; i < userSquared; i++) {
        const containerId = document.querySelector("#container");
        const cellCreate = document.createElement("div");
        cellCreate.classList.add("cell");
        containerId.appendChild(cellCreate);
        console.log(cellCreate);
        
    }
    
}




