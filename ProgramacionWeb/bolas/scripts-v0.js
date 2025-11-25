let ball;
let colores = ["yellow", "blue", "green", "red", "grey", "black"]
const container = document.getElementById('container')
let balls = 10;

// esto lo pongo para añadirlo al dom
function gameBalls() {
    for (i = 0; i <= balls; i++) {
        ball = document.createElement('div') // Solo acepta el valor del objeto
        ball.classList.add('bola') // aqui le paso los estilos que tengo del css
        container.appendChild(ball)
        ball.style.left = Math.random() * 80 + "%";  // esto se tradude aun left: al azar%
        ball.style.top = Math.random() * 80 + "%";
        cambiarColor(ball)
        time = setInterval(velocidad(ball), 20)
    }
    // velocidad(ball)
    
}

function cambiarColor(ball) {
    let posicion = Math.floor(Math.random() * colores.length);
    let colorAletorio = colores[posicion];
    console.log("este es el color:" + colorAletorio)
    ball.style.backgroundColor = colorAletorio;
    ball.id = colorAletorio;
}

function velocidad(ball) {
    //esta es para saber la posicion 
    let posicionX = Math.floor(Math.random() * 11)
    let posiciony = Math.floor(Math.random() * 11)

    //este para saber la velocidad
    let velocidadx = Math.floor(Math.random() * 11) // el 11 lo pongo por que quiero rango del calculo al 0 y 11
    let velocidady = Math.floor(Math.random() * 11)

    console.log("valores de las velocidas: " + velocidadx + " " + velocidady)

    for (i = 0; i <= balls; i++) {
        let velocidadxprueba = ball.style.left = velocidadx + "px";
        ball.style.top = velocidady + "px";

        let posicionprueba = posicionX += velocidadx;
            posiciony += velocidady;
            console.log("vel prueba" + velocidadxprueba)
            console.log("vel pruba" + posicionprueba)
            
    }

}
gameBalls();

//easteregg en el analisis de proyecto