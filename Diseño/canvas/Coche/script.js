// Variables globales
let canvas, ctx;
let posicionNubes = 0; // Variable para controlar el movimiento de las nubes

window.onload = function() {
    canvas = document.getElementById("lienzo");
    ctx = canvas.getContext("2d");

    // PUNTO 9: El movimiento (1 punto) [cite: 1990]
    // Usamos setInterval para borrar y redibujar la escena 30 veces por segundo
    setInterval(animarEscena, 30); 
};

// --- FUNCIÓN MAESTRA QUE COORDINA TODO ---
function animarEscena() {
    // 1. Borramos el lienzo entero antes de dibujar el siguiente "fotograma"
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Dibujamos en orden (de atrás hacia adelante)
    dibujarFondo();
    
    // PUNTO 3: Las nubes (1,5 puntos) [cite: 1984]
    // Le sumamos la variable 'posicionNubes' para que se muevan 
    dibujarNube(100 + posicionNubes, 100);
    dibujarNube(400 + posicionNubes, 150);
    
    // 3. Dibujamos el coche (estático en el centro)
    dibujarCoche();

    // 4. Actualizamos la posición de las nubes hacia la izquierda
    posicionNubes -= 2;
    // Si la nube se sale por la izquierda, la regresamos por la derecha
    if (posicionNubes < -500) {
        posicionNubes = 600;
    }
}

// --- FUNCIONES AUXILIARES (El 5% de elegancia) ---

function dibujarFondo() {
    // PUNTO 1: El cielo (1 punto) [cite: 1982]
    ctx.fillStyle = "#87CEEB"; // Azul cielo
    ctx.fillRect(0, 0, canvas.width, 350);

    // PUNTO 2: El suelo verde (0,5 puntos) [cite: 1983]
    ctx.fillStyle = "#8CC63F"; // Verde césped
    ctx.fillRect(0, 350, canvas.width, 150);
}

function dibujarNube(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    // Tres círculos solapados para hacer la forma de la nube
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 40, y - 10, 40, 0, Math.PI * 2);
    ctx.arc(x + 80, y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function dibujarCoche() {
    // PUNTO 5: La carcasa del coche (1,5 puntos) [cite: 1986]
    ctx.fillStyle = "#00A8A8"; // Color turquesa de la furgo
    
    // Caja trasera
    ctx.fillRect(100, 280, 150, 70);
    // Cabina principal
    ctx.fillRect(220, 230, 130, 120);
    // Morro del coche
    ctx.fillRect(350, 280, 80, 70);
    
    // Curva del morro (para darle estilo)
    ctx.beginPath();
    ctx.arc(430, 320, 30, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.fill();
    ctx.closePath();

    // PUNTO 6: Las ventanillas (1 punto) [cite: 1987]
    ctx.fillStyle = "#C0C0C0"; // Gris claro
    ctx.fillRect(235, 245, 45, 50); // Ventanilla trasera
    ctx.fillRect(290, 245, 45, 50); // Ventanilla delantera

    // PUNTO 7: Las líneas blancas (1 punto) [cite: 1988]
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(110, 310);
    ctx.lineTo(240, 310); // Línea en la parte trasera
    ctx.stroke();
    ctx.closePath();

    // PUNTO 8: Parachoques y faro (1 punto) [cite: 1989]
    ctx.fillStyle = "#808080"; // Gris oscuro para parachoques
    ctx.fillRect(90, 335, 30, 15); // Trasero
    ctx.fillRect(440, 335, 20, 15); // Delantero

    ctx.fillStyle = "#FFD700"; // Amarillo para el faro
    ctx.beginPath();
    ctx.arc(440, 300, 15, Math.PI * 1.5, Math.PI * 0.5, false);
    ctx.fill();
    ctx.closePath();

    // PUNTO 4: Las ruedas (1,5 puntos) [cite: 1985]
    dibujarRueda(180, 350); // Rueda trasera
    dibujarRueda(380, 350); // Rueda delantera
}

function dibujarRueda(x, y) {
    // Llanta (Rojo oscuro)
    ctx.fillStyle = "#A52A2A"; 
    ctx.beginPath();
    ctx.arc(x, y, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Tapacubos (Gris claro)
    ctx.fillStyle = "#D3D3D3"; 
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Tornillo central (Blanco)
    ctx.fillStyle = "white"; 
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}