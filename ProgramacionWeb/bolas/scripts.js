let posicionX, posiciony;
let ball;
let colores = ["yellow", "blue", "green", "red", "grey", "black"]
const container = document.getElementById('container')

// esto lo pongo para añadirlo al dom

function cambiarColor(ball){
    let posicion = Math.floor(Math.random() * colores.length);
    console.log(posicion)
    let colorAletorio = colores[posicion];
    console.log("este es el color:" +  colorAletorio)
    ball.style.backgroundColor = colorAletorio;
}

function velocidad(ball){
    let velocidadx = Math.floor(Math.random() * 11) // el 11 lo pongo por que quiero rango del calculo al 0 y 11
    let velocidady = Math.floor(Math.random() * 11)
    console.log("valores de las velocidas: " + velocidadx + " " + velocidady)
    for(i = 0; i < 10; i++){
        ball.style.left = velocidadx;
        ball.style.right = velocidady;
    }
}

for (i = 0; i < 10; i++){
    ball = document.createElement('div') // Solo acepta el valor del objeto
    ball.classList.add('bola') // aqui le paso los estilos que tengo del css
    container.appendChild(ball)
    ball.style.left = Math.random() * 80 + "%";  // esto se tradude aun left: al azar%
    ball.style.right = Math.random() * 80 + "%";
    ball.style.top = Math.random() * 80 + "%";
    ball.style.bottom = Math.random() * 80 + "%";
    cambiarColor(ball)
}
velocidad(ball)