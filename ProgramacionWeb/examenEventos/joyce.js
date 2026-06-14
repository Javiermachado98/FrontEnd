// =====================================================================
// EXAMEN DWC - EVENTOS JAVASCRIPT
// =====================================================================

// Variables Globales
//Aqui debo declarar los id con los que quiero trabajar
const contenedorLuces = document.getElementById('luces-alfabeto');
const mensajeWill = document.getElementById('mensaje-will');
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const btnBorrar = document.getElementById('btn-borrar');
const btnIntercambiar = document.getElementById('btn-luces-intercambio');

//Colores
const apagado = '#2e2e2e';
const colorHover = '#ff1493'; // Rosa brillante (para el intercambio)
const yellow = '#ffd700'; // Dorado original

function crearBombillas(){
    //1. Debo convertir el string en un arreglo para recorrerlo
    alfabeto.split('').forEach(letra =>{
        //2. Creo un div para cada bombilla
        const bombilla = document.createElement('div');

        //3. Asigno la letra al contenido
        bombilla.textContent = letra;

        //4. le asginamos la clase y el id para identificarlo
        bombilla.className = 'bombilla';
        bombilla.id = `luz-${letra}`;

        //5. Agregamos los eventos para el raton
        bombilla.addEventListener('mouseover', encenderRosa, false);
        bombilla.addEventListener('mouseout', apagarRosa, false);
        bombilla.addEventListener('click', procesarClick, false);

        //6. Agregar el nuevo nodo appenChild
        contenedorLuces.appendChild(bombilla);
    });
}
function encenderRosa(event){
    // Aqui pinto el color de rosado con el evento
    event.target.style.backgroundColor = colorHover;
}

function apagarRosa(event){
    // Solo debemos apagarla si NO está encendida formalmente (es decir, si no tiene la clase 'encendida').
    // Según los apuntes, podemos manipular atributos o clases
    if(event.target.className == 'bombilla'){
        event.target.style.backgroundColor = apagado;
    } else {
        event.target.style.backgroundColor = '';
    }

}
function procesarClick(event) {
    // 1. Extraemos la letra de la bombilla clicada
    let letra = event.target.textContent; 

    // 2. Validamos el estado usando className 
    if (event.target.className == 'bombilla') {
        //Le asignamos una clase para pintar el dorado
        event.target.className = 'bombilla encendida';

        //aqui añado el mensaje al contenedor
        mensajeWill.innerHTML = mensajeWill.innerHTML + letra;
        
    } else {
        event.target.className = 'bombilla';

        mensajeWill.innerHTML = mensajeWill.innerHTML.replace(letra, '');
        
    }
}
function borrarTodo(){
    //Aqui pedimos vaciar
    mensajeWill.innerHTML = '';

    //recorremos todo el arreglo para apagar las bombillas
    alfabeto.split('').forEach(letra => {
        // llamamos el id de las bombillas
        let bombilla = document.getElementById(`luz-${letra}`);
        //volvemos al estado original
        bombilla.className = 'bombilla';
        bombilla.style.backgroundColor = '';
    });
}

// Variable global para saber en qué estado estamos
let lucesDoradas = true;

function intercambiarColores() {
    if (lucesDoradas == true) {
        // Si están doradas, cambiamos la variable CSS a rosa
        document.documentElement.style.setProperty('--light-on', colorHover);
        lucesDoradas = false; // Actualizamos el estado
    } else {
        // Si están rosas, las devolvemos a dorado
        document.documentElement.style.setProperty('--light-on', yellow);
        lucesDoradas = true; // Actualizamos el estado
    }
}

// Le asignamos el evento al botón
btnIntercambiar.addEventListener('click', intercambiarColores, false);

// Le asignamos el evento al botón (usando false para el burbujeo, como dicen tus apuntes)
btnBorrar.addEventListener('click', borrarTodo, false);
crearBombillas();
