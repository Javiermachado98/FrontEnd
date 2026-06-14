var canvas = null;
var ctx = null;

function dibujar() {
    // recuperamos el lienzo del canvas y su ctxo... 
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    circulos();
    texto();
    rejilla();

}


// La "rejilla" nos sirve para encontrar fácilmente las coordenadas... 
function rejilla() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.beginPath();

    for (var y = 0; y <= canvas.height; y = y + 50) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }

    for (var x = 0; x <= canvas.width; x = x + 50) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    ctx.stroke();
}


function rectanguloContorno() {
    // Definimos el color que utilizaremos
    ctx.strokeStyle = "blue";
    // Y el grueso de la línea
    ctx.lineWidth = 10;
    ctx.strokeRect(25, 25, 50, 50);

    // ctx.strokeRect(x, y, width, height);
    // Donde x e y son las coordenadas del punto de inicio del rectángulo
}


/**
 * beginpath();
 * -especificacion de un nuevo  trazo 
 * 
 * ctx.strokeStyle="green";
 * -especificamos el color 
 * 
 * arc()-->funcion que dibuja un arco(o circulo completo);
 * ctx.arc(x, y, radio, anguloInicio, anguloFinal, sentido);
 * 
 *ctx.stroke();
 * -pinta el contorno del circulo
 * 
 *ctx.closePath();
 -cerrar el trazo  
 *
--------------------------
        3π/2 (вгору)
           |
π (ліво) ---+--- 0 (право)
           |
        π/2 (вниз)
---------------------------

endAngle - startAngle = скільки дуги намалюється

--ctx.arc(X,Y,RADIO,ANGULOINI_ICIO,ANGULO_FINAL,SENTIDO);
    sentido- deibuja en senito antihorario o viceversa
*/


function circulos() {
    //--Rojo
    ctx.beginPath();//empiezo a pintar
    ctx.strokeStyle = "red";//elijo el color
    ctx.lineWidth = 30;//elijo el grosor
    //Dibujo el trazo: (CentroX, CentroY, Radio, AnguloInicio, AnguloFin)
    ctx.arc(400, 385, 250, Math.PI * 1.5, Math.PI * 1.4, false);
    ctx.stroke();//pinto
    ctx.closePath();//cierro

    //--------------------------------------------
    //-Naranja
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 50;
    ctx.arc(400, 385, 210, Math.PI * 1.5, Math.PI * 0.8, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#3c3c3b";
    ctx.lineWidth = 50;
    ctx.arc(400, 385, 210, Math.PI * 0.8, Math.PI * 1.5, false);
    ctx.stroke();
    ctx.closePath();

    //--VERDE
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 65;
    ctx.arc(400, 385, 153, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.closePath();

    //--NEGRO DENTRO 
    ctx.beginPath();
    ctx.strokeStyle = "#2a2a29";
    ctx.lineWidth = 50;
    ctx.arc(400, 385, 120, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}

function texto() {
    ctx.font = "bold 35px sans-serif";
    ctx.fillStyle = "white";

    //hora  en forma de texto 
    ctx.fillText('12:40:57', 340, 385);
    ctx.fillText('AM', 380,425);




}




window.onload = dibujar;
// Llamamos a la función que dibuja el coche una y otra vez...
// setInterval(moverCoche, 20);