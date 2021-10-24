let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.addEventListener("mousedown",event =>clickOnGraph(canvas,event));

function drawCanvas(){

    radius=$('[class="radius"]:checked').val();

    console.log("2");
    canvas.width=450;
    canvas.height=450;
    context.fillStyle="#adecff";

    drawSquare(radius);
    drawRectangle(radius);
    drawCircle(radius);

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
    context.strokeText("y",225,10);
    context.strokeText("x",440,225);



    context.strokeText("1",225,185);
    context.beginPath();
    context.moveTo(220,185);
    context.lineTo(230,185);

    context.strokeText("2",225,145);
    context.beginPath();
    context.moveTo(220,145);
    context.moveTo(230,145);
    context.stroke();

    context.strokeText("3",225,105);
    context.beginPath();
    context.moveTo(220,105);
    context.lineTo(230,105);
    context.stroke();

    context.strokeText("4",225,65);
    context.beginPath();
    context.moveTo(220,65);
    context.lineTo(230,65);
    context.stroke();

    context.strokeText("5",225,25);
    context.beginPath();
    context.moveTo(220,25);
    context.lineTo(230,25);
    context.stroke();

    context.strokeText("0",225,225);

    context.strokeText("-1",225,265);
    context.beginPath();
    context.moveTo(220,265);
    context.lineTo(230,265);
    context.stroke();

    context.strokeText("-2",225,305);
    context.beginPath();
    context.moveTo(220,305);
    context.lineTo(230,305);
    context.stroke();

    context.strokeText("-3",225,345);
    context.beginPath();
    context.moveTo(220,345);
    context.lineTo(230,345);
    context.stroke();

    context.strokeText("-4",225,385);
    context.beginPath();
    context.moveTo(220,385);
    context.lineTo(230,385);
    context.stroke();

    context.strokeText("-5",225,425);
    context.beginPath();
    context.moveTo(220,425);
    context.lineTo(230,425);
    context.stroke();


    context.strokeText("1",265,225);
    context.beginPath();
    context.moveTo(265,220);
    context.lineTo(265,230);
    context.stroke();

    context.strokeText("2",305,225);
    context.beginPath();
    context.moveTo(305,220);
    context.lineTo(305,230);
    context.stroke();

    context.strokeText("3",345,225);
    context.beginPath();
    context.moveTo(345,220);
    context.lineTo(345,230);
    context.stroke();

    context.strokeText("4",385,225);
    context.beginPath();
    context.moveTo(385,220);
    context.lineTo(385,230);
    context.stroke();

    context.strokeText("5",425,225);
    context.beginPath();
    context.moveTo(425,220);
    context.lineTo(425,230);
    context.stroke();

    context.strokeText("-1",185,225);
    context.beginPath();
    context.moveTo(185,220);
    context.lineTo(185,230);
    context.stroke();

    context.strokeText("-2",145,225);
    context.beginPath();
    context.moveTo(145,220);
    context.lineTo(145,230);
    context.stroke();

    context.strokeText("-3",105,225);
    context.beginPath();
    context.moveTo(105,220);
    context.lineTo(105,230);
    context.stroke();

    context.strokeText("-4",65,225);
    context.beginPath();
    context.moveTo(65,220);
    context.lineTo(65,230);
    context.stroke();


    context.strokeText("-5",25,225);
    context.beginPath();
    context.moveTo(25,220);
    context.lineTo(25,230);
    context.stroke();


    //clickOnGraph();

}

function drawSquare(R){
    context.fillRect(225,225 - 40*R,40*R,40*R);

}

function drawRectangle(R){
    context.beginPath();
    context.moveTo(225,225-40*R);
    context.lineTo(225-40*R,225);
    context.lineTo(225,225);
    context.fill();
}

function drawCircle(R){
    context.arc(225,225,40*R,Math.PI/2,Math.PI);
    context.fill();
}

function drawPoints(){

}

function clear(){
    context.save();
    context.clearRect(0,0,canvas.width,canvas.height);
    context.restore();
}

