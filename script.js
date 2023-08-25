let isMouseDown = false;
const range = document.getElementById("myRange");
const container = document.getElementById("holder");
let divSize=range.value*range.value;
window.onload=addDivs(divSize);


function divNum(){

    holder.style.gridTemplateColumns= `repeat(${range.value}, 1fr)`;
    holder.style.gridTemplateRows= `repeat(${range.value}, 1fr)`;

    clearColor();
    addDivs(divSize);
}




function addDivs(divSize){
    let maxDiv=range.value*range.value;
    for(let x=0;x<maxDiv;x+=1){
    const newDiv= document.createElement("div");
    newDiv.classList.add("Square");
    newDiv.setAttribute('id', "Square");

    newDiv.addEventListener("mousedown",changeColor);
    newDiv.addEventListener("mouseover",changeColor);


    document.getElementById("holder").appendChild(newDiv);
    }

}




        window.addEventListener("mousedown", () => {
            isMouseDown = true;
        });

        window.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        function changeColor(event) {
                event.target.style.backgroundColor = "rgb(51, 51, 51)";
        }

        function clearColor(){
            const squares = document.querySelectorAll(".Square");
            squares.forEach(square => square.removeAttribute("style"));
        }