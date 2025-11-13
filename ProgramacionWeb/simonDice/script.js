let contador = 0;
let colors = ["yellow", "blue", "green", "red"];
function gameCount() {

    let option = document.getElementsByClassName('item');
    console.log(option);
    console.log("presiono un color");

    if (option) {
        contador++;
        console.log(contador)
    }
}

function starGame() {
    console.log("inicia el juego");
    gameCount();
}

starGame();