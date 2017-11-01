function move(event){
    console.log(event);
   

    var x = event.clientX;
    var y = event.clientY;

    document.getElementById("plejer").style.left = x + "px";
    document.getElementById("plejer").style.top = y + "px";
}

document.addEventListener("click", move);