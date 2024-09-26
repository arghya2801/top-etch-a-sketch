// grid_size = 25;

function makeGrid(grid_size){
    let grid_container = document.getElementById("outer-square");
    
    function calculateDivWidth() {
        let container_width =  grid_container.offsetWidth;
        return Math.floor(container_width / Math.sqrt(grid_size)) - 10;
    }
    
    box_size = calculateDivWidth() + "px";

    for (let i=0; i<grid_size; i++){
        var box = document.createElement("div");
        box.classList.add("boxes");
        box.innerHTML = "Hello World";
        box.style.width = box_size;
        box.style.height = box_size;
        // box.style.width = "200px";
        
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "#5ebfea";
        });
        
        // box.addEventListener("mouseout", (event) => {
        //     event.target.style.backgroundColor = "";
        // });
        
        document.getElementById("outer-square").appendChild(box);
    }
}


function gridSizeInput() {
    grid_size_input = prompt("Enter grid size: ");
    return grid_size_input;
}

let grid_button = document.getElementById("button1");
grid_button.addEventListener("click", () => {
    document.getElementById("outer-square").textContent = "";
    grid_size = gridSizeInput();
    total_boxes = grid_size * grid_size;
    makeGrid(total_boxes);
})

// function getHumanChoice(){
//     let human_choice = prompt("Enter choice \n1. Rock \n2. Paper \n3. Scissors");
//     return human_choice;