/**
 * Lógica para hacer que el botón "Mover" para evitar que el usuario lo clique.
 * Nota: El evento 'onclick="validar()"' ya está en el HTML, pero es mejor
 * adjuntar la lógica de movimiento directamente en el archivo JS.
 */

// Función para obtener un número aleatorio dentro de un rango
function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

// Función que cambia la posición del botón al azar
function moverBoton() {
    // 1. Obtener el elemento del botón
    const boton = document.getElementById('submit');
    const contenedor = document.querySelector('.container'); // Usamos el contenedor para limitar el movimiento

    if (!boton || !contenedor) return; // Salir si los elementos no existen

    // 2. Calcular límites seguros basados en el tamaño del contenedor
    const contenedorAncho = contenedor.offsetWidth;
    const contenedorAlto = contenedor.offsetHeight;
    const botonAncho = boton.offsetWidth;
    const botonAlto = boton.offsetHeight;

    // 3. Generar nuevas coordenadas aleatorias dentro de los límites
    // Restamos el tamaño del botón para que no se salga del contenedor
    const newX = getRandomPosition(50, contenedorAncho - botonAncho - 50); 
    const newY = getRandomPosition(50, contenedorAlto - botonAlto - 50);

    // 4. Aplicar la nueva posición
    // Necesitamos establecer el estilo 'position' a 'absolute' o 'relative' para usar top/left
    boton.style.position = 'absolute'; // Usamos relative para mantenerlo dentro del flujo original al inicio
    boton.style.left = newX + 'px';
    boton.style.top = newY + 'px';
    boton.style.transition = 'none'; // Evitar transiciones lentas
}

// Función para inicializar el script
function initButtonMover() {
    const boton = document.getElementById('submit');
    /*if (boton) {
        // Adjuntamos el evento onmouseover para mover el botón
        boton.onmouseover = moverBoton;
    }*/
}

// Ejecutar la inicialización cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initButtonMover);