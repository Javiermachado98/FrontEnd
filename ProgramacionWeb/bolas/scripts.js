let posicionX; 
let posiciony;


const container = document.getElementById('container')
let ball = document.createElement('div') // Solo acepta el valor del objeto
ball.classList.add('bola') // aqui le paso los estilos que tengo del css

container.appendChild(ball)// esto lo pongo para añadirlo al dom

ball.style.left = Math.random() * 90 + "%"; 
ball.style.right = Math.random() * 90 + "%";
ball.style.top = Math.random() * 90 + "%";
ball.style.bottom = Math.random() * 90 + "%";

