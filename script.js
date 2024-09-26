grid_size = 16;
for (let i=0; i<grid_size; i++){
    var box = document.createElement("div");
    box.style.margin = "5px";
    box.style.border = "2px solid black";
    box.style.background = "red";
    box.innerHTML = "Hello World";
    
    document.getElementById("outer-square").appendChild(box);
}
