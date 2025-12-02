
// Función para inyectar la salida en el terminal HTML
function terminalLog(message) {
    const terminal = document.getElementById('output-terminal');
    // Usamos un simple salto de línea, ya que el <pre> maneja el formato
    terminal.innerHTML += message + '\n';
    // Desplazar al final
    terminal.scrollTop = terminal.scrollHeight;
}

// Ejemplo de uso: 
terminalLog("INICIANDO DIAGNÓSTICO DEL ARCHIVO DE HAWKINS (STRANGER THINGS)");