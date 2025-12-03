// =====================================================================
// EXAMEN DWC - EVENTOS JAVASCRIPT
// =====================================================================

// Variables Globales
let pintarMoverMouse;
let pintaronClick;
let secuenciaBombillas = []
let orderStatus = false;

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const yellow = '#ffd700'; // Dorado original
const pink = '#ff1493'; // Rosa brillante (para el intercambio)
const apagado = '#2e2e2e';
function crearBombillas() {
    secuenciaBombillas = []
    let contenedorLuces = document.getElementById('luces-alfabeto')
    alfabeto.split('').forEach(letra => {
        const bombilla = document.createElement('div');
        bombilla.textContent = letra;
        bombilla.className = 'bombilla';
        bombilla.id = `luz-${letra}`;

        contenedorLuces.appendChild(bombilla);
        bombilla.addEventListener('mousemove', pintarMover);
        bombilla.addEventListener('click',pintarClick,true);
        bombilla.addEventListener('mouseout', despintarMover);
    });
}


function despintarMover(){
    event.target.style.backgroundColor = apagado;
}
function pintarClick(){
    event.target.style.backgroundColor = yellow;

   /* elemento = document.getElementById("mensaje-will");*/
   let letraClick = document.getElementById("luces-alfabeto").textContent
    secuenciaBombillas.unshift(letraClick)
    console.log(secuenciaBombillas)

}

function pintarMover(){
    event.target.style.backgroundColor = pink;
}

function letras(){
    console.log("letras")
}

crearBombillas();

/*
cuando pase por encima se pone rosa
cuando se clicke se pone amarrillo
quitar la letra*/