let isMouseDown = false;
let randomColor=false; 
const randomButton = document.getElementById("random");
const range = document.getElementById("myRange");
const container = document.getElementById("holder");
const caption = document.getElementById("resolution");
let divSize=range.value*range.value;
window.onload=addDivs(divSize);



function divNum(){

    holder.style.gridTemplateColumns= `repeat(${range.value}, 1fr)`;
    holder.style.gridTemplateRows= `repeat(${range.value}, 1fr)`;
    caption.innerHTML = `${range.value} x ${range.value}`;

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

function randomColorToggle(value){
    if(value===1){
        randomColor=true;}
    else{
        randomColor=false;
    }


}
        window.addEventListener("mousedown", () => {
            isMouseDown = true;
        });

        window.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        function changeColor(event) {
            if(randomColor===false){
                event.target.style.backgroundColor = "rgb(51, 51, 51)";
            }
            else{
                var randomNumber = Math.floor(Math.random() * 256);
                var randomNumber2 = Math.floor(Math.random() * 256);
                var randomNumber3 = Math.floor(Math.random() * 256);

                event.target.style.backgroundColor=`rgb(${randomNumber},${randomNumber2},${randomNumber3})`;
            }

        }

        function clearColor(){
            const squares = document.querySelectorAll(".Square");
            squares.forEach(square => square.removeAttribute("style"));
        }