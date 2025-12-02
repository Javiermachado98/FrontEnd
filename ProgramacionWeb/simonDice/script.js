// Variables globales
let secuenciaJuego = []
let respuestaJugador = []
let nivel = 0
let juegoActivo = false
let colores = ["red", "green", "blue", "yellow"]

// Iniciar el juego
function iniciarJuego() {
    secuenciaJuego = []
    respuestaJugador = []
    nivel = 0
    juegoActivo = true
    document.getElementById('mensaje').textContent = ''
    empezarJuego()
}

// Empezar el juego
function empezarJuego() {
    respuestaJugador = []
    nivel++
    document.getElementById('nivel').textContent = 'Nivel: ' + nivel
    
    // Añadir color aleatorio a la secuencia
    let colorAleatorio = colores[Math.floor(Math.random() * 4)]
    secuenciaJuego.push(colorAleatorio)
    
    mostrarSecuencia()
}

// Mostrar la secuencia
function mostrarSecuencia() {
    juegoActivo = false
    let i = 0
    
    let intervalo = setInterval(function() {
        if (i < secuenciaJuego.length) {
            flash(secuenciaJuego[i])
            i++
        } else {
            clearInterval(intervalo)
            juegoActivo = true
        }
    }, 1000 - (nivel * 50))
}

// Hacer flash en un color
function flash(color) {
    let elemento = document.getElementById(color)
    elemento.classList.add('activo')
    
    setTimeout(function() {
        elemento.classList.remove('activo')
    }, 400)
}

// Capturar clics del tablero
let tablero = document.getElementById('tablero')
tablero.addEventListener('click', capturarClic)

function capturarClic() {
    if (!juegoActivo) {
        return
    }
    
    let elemento = event.target
    
    if (elemento.classList.contains('item')) {
        let colorClicado = elemento.id
        respuestaJugador.push(colorClicado)
        flash(colorClicado)
        
        comprobarRespuesta()
    }
}

// Comprobar la respuesta del jugador
function comprobarRespuesta() {
    let indice = respuestaJugador.length - 1
    
    if (respuestaJugador[indice] !== secuenciaJuego[indice]) {
        finDelJuego()
        return
    }
    
    if (respuestaJugador.length === secuenciaJuego.length) {
        juegoActivo = false
        setTimeout(function() {
            empezarJuego()
        }, 1000)
    }
}

// Fin del juego
function finDelJuego() {
    juegoActivo = false
    document.getElementById('mensaje').textContent = 'Fin del Juego! Nivel alcanzado: ' + nivel
    document.getElementById('nivel').textContent = 'Nivel: 0'
}