//import validateR from "./validate.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function drawCanvas(){

    canvas.width=450;
    canvas.height=450;
    context.fillStyle="#adecff";
    context.fillRect(225,50,175,175); //квадрат
    context.beginPath(); //треугольник
    context.moveTo(225,50);
    context.lineTo(50,225);
    context.lineTo(225,225);
    context.fill();
    context.arc(225,225,175,Math.PI/2,Math.PI);
    context.fill();
    context.beginPath();
    context.moveTo(0,225);
    context.lineTo(450,225);
    context.stroke();
    context.beginPath();
    context.moveTo(450,225);
    context.lineTo(445,220);
    context.stroke();
    context.beginPath();
    context.moveTo(450,225);
    context.lineTo(445,230);
    context.stroke();
    context.beginPath();
    context.moveTo(225,0);
    context.lineTo(220,5);
    context.stroke();
    context.beginPath();
    context.moveTo(225,0);
    context.lineTo(230,5);
    context.stroke();
    context.beginPath();
    context.moveTo(225,0);
    context.lineTo(225,450);
    context.stroke();


    //обозначения
    context.strokeText("y",225,0);
    context.strokeText("x",450,225);
    context.strokeText("R",225,50);
    context.beginPath();
    context.moveTo(220,50);
    context.lineTo(230,50);
    context.stroke();
    context.strokeText("R/2",225,137.5);
    context.beginPath();
    context.moveTo(220,137.5);
    context.lineTo(230,137.5);
    context.stroke();
    context.strokeText("-R/2",225,312.5);
    context.beginPath();
    context.moveTo(220,312.5);
    context.lineTo(230,312.5);
    context.stroke();
    context.strokeText("-R",225,400);
    context.beginPath();
    context.moveTo(220,400);
    context.lineTo(230,400);
    context.stroke();

    context.strokeText("-R",50,225);
    context.beginPath();
    context.moveTo(50,220);
    context.lineTo(50,230);
    context.stroke();
    context.strokeText("-R/2",137.5,225);
    context.beginPath();
    context.moveTo(137.5,220);
    context.lineTo(137.5,230);
    context.stroke();
    context.strokeText("R/2",312.5,225);
    context.beginPath();
    context.moveTo(312.5,220);
    context.lineTo(312.5,230);
    context.stroke();
    context.strokeText("R",400,225);
    context.beginPath();
    context.moveTo(400,220);
    context.lineTo(400,230);
    context.stroke();



}

function clickOnGraph(){
    canvas.addEventListener("mousedown",function (e){
        if(validateR()){
            context.beginPath();
            context.fillStyle="#a2a8f3";
            context.arc(e.offsetX,e.offsetY,3,0,Math.PI*2);
            context.fill();
        }
        else{
            alert("Невозможно определить координаты точки");
        }
    });
}