const $ = window.$;

$("#chart")[0].innerHTML = '<canvas id="canvas" width="500" height="500"></canvas>'

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

let value_r = 5;

function windowToCanvas(canvas, x, y) {
    let bbox = canvas.getBoundingClientRect();
    return { x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    };
}

canvas.onmousedown = function (e) {
        let loc = windowToCanvas(canvas, e.clientX, e.clientY);
        let rly_x = value_r*((loc.x - 250)/200);
        let rly_y = (-1) * value_r*((loc.y - 250)/200);

        if(rly_x > value_r || rly_y > value_r || rly_x < -1 * value_r || rly_y < -1 *value_r){
            alert("Input error!")
        }else {
            let out = document.getElementById("j_idt6:x");
            out.value = rly_x;
            out = document.getElementById("j_idt6:y");
            out.value = rly_y;
            out = document.getElementById("j_idt6:out_button");
            out.click();
        }
    };





function drawPoint(x, y, r, res) {
    let flag = x > r || y > r || x < -1 * r || y < -1 * r;
    if(!flag){
        ctx.beginPath();

        if (res === "True") {
            ctx.fillStyle = "rgba(0, 255, 0, 1)";
        }else{
            ctx.fillStyle = "rgba(255, 0, 0, 1)";
        }

        ctx.arc(250 + 200 * x * 10 / (r*10), 250 - 200 * y*10 / (r*10), 3, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
// Написать на JS функцию, которая на странице заменяет все текстовые поля ввода на кнопки
function changeTextToButtun(){
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() === 'text') {
            inputs[i].type='button';
        }
    }
}

// Написать js функцию, которая запрещает писать числа и буквы лат. алфавита

    document.querySelector('input[type="text"]').onkeypress = function (e) {
        var input = e.key.toLowerCase();
        if (input >= '0' && input <= 'z') {
            alert("can not type latin ")
            e.key = "";
        }
    };

//3) Реализовать функцию на JavaScript, которая будет закрывать текущее окно, если в нем открыт https://www.google.ru
function close_window() {
    if (window.location.href==="https://www.google.ru") {
        window.close();
    }
}
function insertNyancat() {
    document.querySelector('div.nyan').innerHTML = '<img src="http://www.example.com/nyancat.gif">';
}
// Правило css, меняющее цвет фона на желтый, если ссылка посещена и не лежит в классе "news"
//
// a:visited:not([class*="news"]) {
//     background: yellow;
// }




function draw(flag_draw){
        if(flag_draw === 1){
            let input = document.getElementById("j_idt6:r");
            let input2= document.getElementById("j_idt6:input2");
            console.log("r is ->"+input2.value);
            if (input2.value <2 || input2.value >5){
                console.log("i am changing class actualy");
                input2.className="error";
                input2.value=2;
            }else{
                input2.className="normal";
            }
            input.value=input2.value;
            value_r = input2.value;
        }else {
            let cells = Array.prototype.slice.call(document.getElementById("table_out_data").getElementsByTagName("td"));

            if(Number(cells[2].innerHTML) !== 0) {
                value_r = Number(cells[2].innerHTML);
            }else{
                let input = document.getElementById("j_idt6:r");
                value_r = input.value;
            }
        }


    ctx.clearRect(0, 0, 1000, 1000);

    ctx.fillStyle = "rgb(42,87,173)";
    ctx.beginPath();
    ctx.moveTo(250, 250);
    //?????????? ?????? ?????
    ctx.arc(250, 250, 100, Math.PI/2 , Math.PI, false);
    //?????????? ????????????
    ctx.fillRect(250, 250, -200, -100);
    //?????????? ???????????
    ctx.moveTo(250,250);
    ctx.lineTo(350,250);
    ctx.lineTo(250,450);
    ctx.fill();

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.beginPath();
    ctx.moveTo(30,250);
    ctx.lineTo(470,250);

    ctx.lineTo(465,255);
    ctx.moveTo(470,250);
    ctx.lineTo(465,245);
    ctx.font = "20px serif";
    ctx.fillText('X',470,245);

    ctx.moveTo(250,470);
    ctx.lineTo(250,30);

    ctx.lineTo(255,35);
    ctx.moveTo(250,30);
    ctx.lineTo(245,35);

    ctx.fillText('Y',255,35);

    ctx.moveTo(450,260);
    ctx.lineTo(450,240);
    ctx.fillText(value_r ,445,230);

    ctx.moveTo(350,260);
    ctx.lineTo(350,240);
    ctx.fillText(value_r/2 ,345,230);

    ctx.moveTo(50,260);
    ctx.lineTo(50,240);
    ctx.fillText(-value_r ,55,230);

    ctx.moveTo(150,260);
    ctx.lineTo(150,240);
    ctx.fillText(-value_r/2 ,145,230);

    ctx.moveTo(240,50);
    ctx.lineTo(260,50);
    ctx.fillText(value_r ,260,60);

    ctx.moveTo(240,150);
    ctx.lineTo(260,150);
    ctx.fillText(value_r/2 ,260,160);

    ctx.moveTo(240,450);
    ctx.lineTo(260,450);
    ctx.fillText(-value_r ,260,460);

    ctx.moveTo(240,350);
    ctx.lineTo(260,350);
    ctx.fillText(-value_r/2 ,260,360);

    ctx.closePath();
    ctx.stroke();

    checkTableAndDraw()
}


function checkTableAndDraw(){
    let cells = Array.prototype.slice.call(document.getElementById("table_out_data").getElementsByTagName("td"));
    let n = cells.length;

    if(Number(cells[2].innerHTML) !== 0){
        for(let i = 0; i < n; i=i+4){
            console.log(Number(cells[i].innerHTML));
            console.log(Number(cells[i+1].innerHTML));
            console.log(value_r);
            console.log(value_r);
            console.log(cells[i+3].innerText);
            drawPoint(Number(cells[i].innerHTML),
                Number(cells[i+1].innerHTML),
                value_r,cells[i+3].innerText);
        }
    }
}

function eventHandler() {
    draw()
}

function setY(){
    let input = document.getElementById("j_idt6:input1");
    let out = document.getElementById("j_idt6:y");
    if ( input.value >3 || input.value<-3){
        input.value=0;
        input.className="error";
    }else{
        input.className="normal";
    }

    out.value = input.value
}


$(window).on('resize', eventHandler)
$(window).on('load', eventHandler)
