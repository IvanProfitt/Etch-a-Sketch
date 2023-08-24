window.onload=addDivs();
let isMouseDown = false;


function addDivs(){
    for(let x=0;x<256;x+=1){
    const newDiv= document.createElement("div");
    newDiv.classList.add("Square");
    newDiv.setAttribute('id', "Square");

    newDiv.addEventListener("mousedown",changeColor);
    newDiv.addEventListener("mouseover",changeColor);


    document.getElementById("holder").appendChild(newDiv);
    }

}

function divNum(){
    
}


        window.addEventListener("mousedown", () => {
            isMouseDown = true;
        });

        window.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        function changeColor(event) {
            if (isMouseDown) {
                event.target.style.backgroundColor = "rgb(51, 51, 51)";
            }
        }

        function clearColor(){
            const squares = document.querySelectorAll(".Square");
            squares.forEach(square => square.removeAttribute("style"));
        }

