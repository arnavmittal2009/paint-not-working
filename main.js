canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="aqua";
width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX;
    current_position_of_mouse_y=e.clientY;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position of x and y coordinates= ");
        console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position of x and y coordinates= ");
        console.log("x= "+current_position_of_mouse_x+"y= "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
 
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
    
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
