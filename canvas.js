function dibujarLineas() {
    tablero.lineWindth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "black"
    tablero.beginPath()
    var ancho = 600 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(485 + (ancho * i), 500)
        tablero.lineTo(445 + (ancho * i), 500)
    }
    tablero.stroke()
    tablero.closePath()
}

function escrribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "black"
    let ancho = 600 / palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 445 + (ancho * index), 490)
    tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth = 6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "red"
    tablero.fillText(letra, 445 + (40 * (10 - errorsLeft)), 560, 990)
}

function dibujarAhorcado(puntaje) {

    if (puntaje === 8) {

        tablero.fillStyle = "black";
        tablero.fillRect(480, 10, 400, 30);
        tablero.fill();
    }
    if (puntaje === 7) { //teto 
        //CUERDA
        tablero.strokeStyle = "black";
        tablero.beginPath();
        tablero.moveTo(680, 40);
        tablero.lineTo(680, 120);
        tablero.lineWidth = 6;
        tablero.stroke();
    }
    if (puntaje === 6) { //corda
        //CABEZA1
        tablero.fillStyle = "black";
        tablero.beginPath();
        tablero.arc(680, 150, 35, 0, 2 * Math.PI);
        tablero.fill();


        //CABEZA2
        tablero.fillStyle = "#EDEDED";
        tablero.beginPath();
        tablero.arc(680, 150, 30, 0, 2 * Math.PI);
        tablero.fill();
    }
    if (puntaje === 5) { //para cara
        //CUERPO
        tablero.strokeStyle = "black";
        tablero.beginPath();
        tablero.moveTo(682, 185);
        tablero.lineTo(682, 280);
        tablero.lineWidth = 4;
        tablero.stroke();
    }
    if (puntaje === 4) { //para corpo
        //MANODERECHA
        tablero.strokeStyle = "black";
        tablero.beginPath();
        tablero.moveTo(682, 195);
        tablero.lineTo(620, 200);
        tablero.lineWidth = 4;
        tablero.stroke();
    }
    if (puntaje === 3) { //para perna izquerda
        //MANOIZQUIERDA
        tablero.strokeStyle = "black";
        tablero.beginPath();
        tablero.moveTo(682, 195);
        tablero.lineTo(744, 200);
        tablero.lineWidth = 4;
        tablero.stroke();
    }
    if (puntaje === 2) { //para perna direita
        //PIEIZQUIERDO
        tablero.strokeStyle = "black";
        tablero.beginPath();
        tablero.moveTo(682, 280);
        tablero.lineTo(714, 340);
        tablero.lineWidth = 4;
        tablero.stroke();
    }
    if (puntaje === 1) { //para mão izquerda
        //PIEDERECHO
        tablero.strokeStyle = "black";
        tablero.beginPath();
        tablero.moveTo(682, 280);
        tablero.lineTo(650, 340);
        tablero.lineWidth = 4;
        tablero.stroke();
    }
    if (puntaje === 0) { //para mão direita
        //OJOS
        tablero.strokeStyle = "black";
        tablero.beginPath();
        //OJODERECHO
        tablero.moveTo(669, 140);
        tablero.lineTo(664, 150);
        tablero.moveTo(664, 140);
        tablero.lineTo(670, 150);
        //OJOIZQUIERDO
        tablero.moveTo(690, 140);
        tablero.lineTo(685, 150);
        tablero.moveTo(685, 140);
        tablero.lineTo(691, 150);

        tablero.lineWidth = 4;
        tablero.stroke();
    }


}

function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "red"
    tablero.fillText("       MALO ", 820, 120)
    tablero.fillText("😭​perdiste😭​ ", 820, 150)
}


function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "black"
    tablero.fillText(" 😎​ Has ganado 😎​ ", 820, 120)
    setTimeout(recargar, 2000)
}



function recargar() {
    location.reload();
}