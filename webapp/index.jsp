<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="image/coffin.png">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body onload="drawCanvas()">

<table class="grid">
    <thead>
    <tr class="information">
        <th width="25%" colspan="2">Сыпачева Анастасия Андреевна</th>
        <th width="25%" colspan="2">Номер ИСУ: 311724</th>
        <th width="25%" colspan="2">Номер варианта: 13211</th>
        <th width="25%" colspan="2"><a href="https://github.com/Anastasias35" target="new"><img src="image/GitHub-Mark-32px.png" alt=""></a>
            <a href="https://vk.com/anastasiykasss" target="new"><img src="image/1486147202-social-media-circled-network10_79475.png" alt=""></a>
            <a href="https://t.me/anastasiykasss" target="new"><img src="image/telegram_icon-icons.com_72055.png" alt=""></a>
        </th>
    </tr>
    </thead>

    <tr>
        <td colspan="4">
            <canvas   id="canvas"></canvas>
        </td>
        <td colspan="4" width="60%" >
            <form action="#" method="GET" class="form" name="form">
                Координата X: <br>
                <div>
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="-2">-2
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="-1.5">-1.5
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="-1">-1
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="-0.5">-0.5
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="0">0
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="0.5">0.5 <br>
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="1">1
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="1.5">1.5
                    <input type="checkbox" name="Coordinates_X"  class="coordinates_x"  value="2">2
                </div>
                Координата Y: <br>
                <div id="button-y">
                    <input type="text" name="Coordinates_Y" class="coordinates_y" autocomplete="off" placeholder="введите число от -3 до 5"> <br>
                </div>
                Радиус R:
                <div>
                    <input type="checkbox" name="radius" class="radius" value="1">1
                    <input type="checkbox" name="radius" class="radius" value="2">2
                    <input type="checkbox" name="radius" class="radius" value="3">3
                    <input type="checkbox" name="radius" class="radius" value="4">4
                    <input type="checkbox" name="radius" class="radius" value="5">5
                </div>
                <div >
                    <button type="submit" class="submit-button">Отправить</button>
                    <button type="reset" class="reset-button">Очистить</button>
                </div>
            </form>
        </td>
    </tr>
    <table class="table-result">
        <tr>
            <td>Coordinate X</td>
            <td>Coordinate Y</td>
            <td>Radius R</td>
            <td>Result</td>
            <td colspan="2">Current time</td>
            <td colspan="2">Spending time</td>
        </tr>
    </table>

</table>
<script src="canvas1.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="validate.js"></script>
</body>
</html>