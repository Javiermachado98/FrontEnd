
// ===== VARIABLES GLOBALES =====
// Igual que en pinturitas usabas "orderStatus" y "colorPintador", aquí necesitamos variables globales

// Array que guarda la secuencia que debe seguir el jugador (ejemplo: ["red", "blue", "green"])
let secuenciaJuego = []

// Array que guarda lo que va clickando el jugador (ejemplo: ["red", "blue"])
let respuestaJugador = []

// Número que indica en qué nivel estamos (empieza en 0)
let nivel = 0

// Boolean para saber si el jugador puede clickar o no (como tu "orderStatus")
let juegoActivo = false

// Array con los 4 colores disponibles (como tu array "colores" en pinturitas)
let colores = ["red", "green", "blue", "yellow"]


// ===== FUNCIÓN 1: INICIAR EL JUEGO =====
// Se ejecuta cuando presionas el botón "Iniciar Simon Dice"
function iniciarJuego() {
    // Reiniciamos todo a cero, como empezar de nuevo
    secuenciaJuego = []  // Borramos la secuencia anterior
    respuestaJugador = [] // Borramos lo que había clickado el jugador
    nivel = 0 // Volvemos al nivel 0
    juegoActivo = true // Activamos el juego
    document.getElementById('mensaje').textContent = '' // Borramos mensajes anteriores

    // Llamamos a la función que realmente empieza el juego
    empezarJuego()
}


// ===== FUNCIÓN 2: EMPEZAR/CONTINUAR JUGANDO =====
// Se ejecuta cada vez que pasas de nivel
function empezarJuego() {
    // Limpiamos lo que había clickado el jugador en el nivel anterior
    respuestaJugador = []

    // Subimos un nivel (de 0 a 1, de 1 a 2, etc.)
    nivel++

    // Actualizamos el texto en pantalla que dice "Nivel: X"
    document.getElementById('nivel').textContent = 'Nivel: ' + nivel

    // Elegimos un color aleatorio del array (como Math.random pero para arrays)
    // Math.floor(Math.random() * 4) da un número entre 0 y 3
    // Entonces colores[0] = "red", colores[1] = "green", etc.
    let colorAleatorio = colores[Math.floor(Math.random() * 4)]

    // Añadimos ese color aleatorio a la secuencia
    // Ejemplo: si era ["red"], ahora será ["red", "blue"]
    secuenciaJuego.push(colorAleatorio)

    // Mostramos la secuencia completa al jugador
    mostrarSecuencia()
}


// ===== FUNCIÓN 3: MOSTRAR LA SECUENCIA =====
// Hace que los colores se iluminen uno por uno
function mostrarSecuencia() {
    // Desactivamos los clicks del jugador mientras se muestra la secuencia
    juegoActivo = false

    // Variable contador para ir recorriendo el array (como el "i" en tus for)
    let i = 0

    // setInterval es como un bucle que se repite cada X milisegundos
    // Similar a cómo usabas setTimeout en pinturitas
    let intervalo = setInterval(function () {
        // Si todavía hay colores por mostrar en la secuencia
        if (i < secuenciaJuego.length) {
            // Iluminamos el color que toca (secuenciaJuego[0], luego [1], etc.)
            flash(secuenciaJuego[i])
            // Pasamos al siguiente color
            i++
        } else {
            // Si ya mostramos todos los colores
            clearInterval(intervalo) // Paramos el intervalo
            juegoActivo = true // Permitimos que el jugador pueda clickar
        }
    }, 1000 - (nivel * 50)) // Tiempo entre colores: empieza en 1000ms y baja 50ms por nivel
    // Nivel 1: 950ms, Nivel 2: 900ms, Nivel 3: 850ms, etc. (va más rápido)
}


// ===== FUNCIÓN 4: HACER FLASH (ILUMINAR) UN COLOR =====
// Hace que un botón se ilumine y se apague
function flash(color) {
    // Buscamos el elemento HTML por su id (como hacías con getElementById en pinturitas)
    let elemento = document.getElementById(color)

    // Le añadimos la clase "activo" que hace que brille más (CSS)
    // Es como cuando hacías elemento.style.backgroundColor = colorPintador
    elemento.classList.add('activo')

    // Después de 400 milisegundos (0.4 segundos)
    setTimeout(function () {
        // Le quitamos la clase "activo" para que vuelva a su color oscuro
        elemento.classList.remove('activo')
    }, 400)
}


// ===== FUNCIÓN 5: CAPTURAR CLICKS DEL JUGADOR =====
// Esto es DELEGACIÓN DE EVENTOS (como pedía el ejercicio)
// En lugar de poner un addEventListener en cada botón, lo ponemos en el contenedor
let tablero = document.getElementById('tablero')
tablero.addEventListener('click', capturarClic)

function capturarClic() {
    // Si el juego no está activo (si se está mostrando la secuencia), no hacemos nada
    if (!juegoActivo) {
        return // Salimos de la función
    }

    // event.target es el elemento que se clickó (como en pinturitas)
    let elemento = event.target

    // Verificamos que sea uno de los botones de color (que tenga la clase "item")
    if (elemento.classList.contains('item')) {
        // Guardamos qué color clickó (el id: "red", "green", etc.)
        let colorClicado = elemento.id

        // Lo añadimos al array de respuestas del jugador
        respuestaJugador.push(colorClicado)

        // Hacemos que el botón brille cuando lo clickas (feedback visual)
        flash(colorClicado)

        // Comprobamos si el click fue correcto o incorrecto
        comprobarRespuesta()
    }
}


// ===== FUNCIÓN 6: COMPROBAR SI LA RESPUESTA ES CORRECTA =====
function comprobarRespuesta() {
    // Sacamos el índice del último click (si clickó 1 vez, índice = 0; si 2 veces, índice = 1)
    let indice = respuestaJugador.length - 1

    // Comparamos el último click con lo que debería haber clickado
    // Ejemplo: si respuestaJugador[0] = "red" y secuenciaJuego[0] = "blue" -> ERROR
    if (respuestaJugador[indice] !== secuenciaJuego[indice]) {
        // Si se equivocó, terminamos el juego
        finDelJuego()
        return // Salimos de la función
    }

    // Si llegó hasta aquí, el click fue correcto
    // Ahora comprobamos si ya completó toda la secuencia del nivel
    if (respuestaJugador.length === secuenciaJuego.length) {
        // Si completó la secuencia, desactivamos clicks
        juegoActivo = false

        // Esperamos 1 segundo y pasamos al siguiente nivel
        setTimeout(function () {
            empezarJuego() // Vuelve a llamar esta función para subir de nivel
        }, 1000)
    }
}


// ===== FUNCIÓN 7: FIN DEL JUEGO =====
// Se ejecuta cuando el jugador se equivoca
function finDelJuego() {
    // Desactivamos el juego
    juegoActivo = false

    // Mostramos el mensaje de fin con el nivel alcanzado
    document.getElementById('mensaje').textContent = 'Fin del Juego! Nivel alcanzado: ' + nivel

    // Reseteamos el nivel a 0 en pantalla
    document.getElementById('nivel').textContent = 'Nivel: 0'
}