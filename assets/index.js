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

    for (let i = 0; i < userInput; i++) {
        const containerId = document.querySelector("#container");
        const containerCreate = document.createElement("div");
        containerCreate.id = "containerId" + i;
        containerCreate.classList.add("sub-container" + i);
        containerId.appendChild(containerCreate);
        console.log(containerCreate);
        
    }

    for (let i = 0; i < userInput; i++) {
        let cellId = document.querySelector("#containerId" + i);
        const cellCreate = document.createElement("div")
        cellCreate.classList.add("cell");
        cellId.appendChild(cellCreate);
        
    }
    
}




