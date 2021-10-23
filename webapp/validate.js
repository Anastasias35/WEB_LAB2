const miny=-3;
const maxy=5;
const valx=[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0];
const valr=[1,2,3,4,5];

function clickOnGraph(){ // отметки точек на графике
    canvas.addEventListener("mousedown",function (e){
        if(validateR()){
            context.beginPath();
            context.fillStyle="#a2a8f3";
            context.arc(e.offsetX,e.offsetY,3,0,Math.PI*2);
            context.fill();

            $('[class="radius"]:checked').each(function ()
            {
                let r=$('[class="radius"]:checked').val();
                let x=(e.offsetX - 225) * r / 175;
                x=x.toFixed(1).replace(".0","");
                let y=(e.offsetY - 225) * r / 175;
                y=y.toFixed(5).replace(".0","");
                if (x>=-2 && x<=2 && (Math.ceil(y) <= miny || Math.floor(y))){
                    alert(true);
                    submitPoints(x,y,r);
                    //добавить валидацию
                }

            });

        }
        else{
            alert("Невозможно определить координаты точки");
        }
    });
}

function validateY(){  // валидация y
    let y=$(".coordinates_y").val();
    y=y.replaceAll(",",".");
    if (y.trim()===""){
        alert("введите значение для координаты y");
        return false;
    }
    else if (isNaN(y)){
        alert("координата y должна быть числом");
        return false;
    }
    else if (Math.ceil(y.substr(0,5)) <= miny || Math.floor(y.substr(0,5))>= maxy) {
        alert("координата y должна быть в диапозоне:(-3;5)");
        return false;
    }
    return true;
}



let checkX=[];
function validateX(){ //валидация x
    checkX=[];
    $('[class="coordinates_x"]:checked').each(function ()
        {
            checkX.push($(this).val());
        }
    );
    if(checkX.length===0){
        alert("Выберите не менее одного значения x");
        return false;
    }
    else{
        return true;
    }
}




let checkR=[];
function validateR(){
    checkR=[];
    $('[class="radius"]:checked').each(function ()
        {
            checkR.push($(this).val());
        }
    );
    if(checkR.length===0){
        alert("Выберите не менее одного значения R");
        return false;
    }
    else{
        return true;
    }
}


function validate(){ //валидация
    return validateX()&&validateY()&&validateR();
}

function submitPoints(x,y,r){
    var request=new XMLHttpRequest();
    let data="Coordinates_X="  + x +"&Coordinates_Y=" +y+ "&radius=" + r;
    console.log(data);
    request.open('GET','/controllerservlet' + '?' + data, true);
    request.send();
    request.onload=function (){
        if (request.status!=200){
            alert(`Ошибка ${request.status}: ${request.statusText}`);
        }
        else{
            console.log(request.responseText);
            let result= request.responseText;
            document.querySelector(".table-result").innerHTML +=result;
        }
    }
}

$('form').on('submit',function(event){
    event.preventDefault();
    if(!validate()) return;
    else{
        var request = new XMLHttpRequest();
        let data=$(this).serialize();
        console.log(data);
        request.open('GET','/controllerservlet' + '?' + data,true);
        request.send();
        request.onload=function (){
            if(request.status != 200){
                console.log(request.responseText);
                alert(`Ошибка ${request.status}: ${request.statusText}`);
            }
            else{
                console.log(request.responseText);
                let result= request.responseText;
                document.querySelector(".table-result").innerHTML+=result;

            }
        }
        $('form').trigger('reset');
    }
});

