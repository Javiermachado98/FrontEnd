let ball;
let colores = ["yellow", "blue", "green", "red", "grey", "black"]
const container = document.getElementById('container')
let balls = 4;

for (i = 0; i <= balls; i++) {
    console.log("LA I VALE --- " + i)
    ball = document.createElement('div') // Solo acepta el valor del objeto
    ball.classList.add('bola') // aqui le paso los estilos que tengo del css
    container.appendChild(ball)
    cambiarColor(ball)
}

let bolas = document.getElementsByClassName('bola')

for(let ball of bolas){
    //esta es para saber la posicion 
    let posicionX = Math.floor(Math.random() * 500)
    let posiciony = Math.floor(Math.random() * 500)

    //aqui esta mi posicion inicial
    ball.style.left = posicionX
    ball.style.top = posiciony

    //este para saber la velocidad
    let velocidadx = Math.floor(Math.random() * 500) // el 11 lo pongo por que quiero rango del calculo al 0 y 11
    let velocidady = Math.floor(Math.random() * 11)

    function velocidad() {

        ball.style.left = velocidadx + "px";
        ball.style.top = velocidady + "px";

        posicionX += velocidadx;
        posiciony += velocidady;
        // console.log("vel prueba" + velocidadxprueba)
        // console.log("vel pruba" + posicionprueba)


    }

    time = setInterval(velocidad, 800)
}
// velocidad(ball)


function cambiarColor(ball) {
    let posicion = Math.floor(Math.random() * colores.length);
    let colorAletorio = colores[posicion];
    console.log("este es el color:" + colorAletorio)
    ball.style.backgroundColor = colorAletorio;
    ball.id = colorAletorio;
}



//easteregg en el analisis de proyecto