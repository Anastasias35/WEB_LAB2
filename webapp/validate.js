miny=-3;
maxy=5;

function validateY(){
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


function validateX(){
    var checkX=[];
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

function validateR(){
    var checkR=[];
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

function validate(){
    return validateX()&&validateY()&&validateR();
}

$('form').on('submit',function(event){
    event.preventDefault();
    if(!validate()) return;
    else{
        var request = new XMLHttpRequest();
    }

});

