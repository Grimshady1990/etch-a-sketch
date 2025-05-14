const bodyStyle = document.querySelector("body");
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
}

