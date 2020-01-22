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

const halfSize = canvas.width/2;

//main draw loop
const draw = () => {
    //draw the dartboard
    //ctx.fillStyle = "#000000";
    //ctx.strokeStyle = "#FFFFFF";
    //ctx.beginPath();
    //ctx.arc(halfSize, halfSize, halfSize*0.9, 0, 2*Math.PI);
    //ctx.fill();
    
    let numofcells = 5;

    let i = 0;
    for (let angle=0; angle<2*Math.PI; angle += Math.PI/numofcells){
        ctx.beginPath();
        console.log(`loop ${angle}`)
        i+= 1;
        
        if (i % 2 == 0){
            ctx.fillStyle = "#00FF00";
            ctx.strokeStyle = "#00FF00";
        }else{
            ctx.fillStyle = "#FF0000";
            ctx.strokeStyle = "#FF0000";
        }

        ctx.arc(halfSize, halfSize, halfSize*0.8, angle, angle+Math.PI/numofcells);
        ctx.fill();
        ctx.stroke();
    }
}

draw();