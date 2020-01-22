const canvas = document.getElementById("app");
const ctx = canvas.getContext("2d");

//setting the size of the canvas to 80vw
if (window.innerHeight<window.innerWidth){
    canvas.width = 0.8*window.innerHeight;
    canvas.height = 0.8*window.innerHeight;
}else{
    canvas.width = 0.8*window.innerWidth;
    canvas.height = 0.8*window.innerWidth;
}

//centering the canvas on the page
canvas.style.left = `${window.innerWidth/2-(canvas.width/2)}px`;
canvas.style.top = `${window.innerHeight/2-(canvas.height/2)}px`;
canvas.style.position = "absolute";
