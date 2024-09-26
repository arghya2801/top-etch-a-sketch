grid_size = 25;
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
    
    box.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = ""; // Reset to default background color
    });
    
    document.getElementById("outer-square").appendChild(box);
}