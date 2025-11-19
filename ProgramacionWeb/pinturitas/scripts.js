const nFilas = 20 // importante ya que es el limite
const nCol = 20
let orderStatus = false
let colorPintador;

// aqui podemos traer los datos en base a un arreglo de colores
let colores = ["yellow", "blue", "green", "red", "grey", "white"]
for (let i = 0; i < colores.length; i++){
    console.log("color seleccionado:", colores[i])
    let element = document.getElementById(colores[i])
    element.addEventListener('click', selectColor)
}
let pinturitas = document.getElementsByClassName('pinturitas')[0]


/*
//Aqui podemos traer los datos por colores y su clase
let coloresHTML = document.getElementsByClassName('item')
for (let i = 0; i < coloresHTML.length; i++){
    coloresHTML[i].addEventListener('click', selectColor)
}*/

//Lo podemos llamar por id
function selectColor() {
    console.log(event.target.id)
    colorPintador = event.target.id
}
/*
Aqui podemos llamar 
function selectColor() {
    console.log(event.target.classList[1])
}*/
// For sobre el htmlcollection getellñalskdlajsd('item')

function startPrint(){
    orderStatus = !orderStatus
}

function paintColor(){
    if (orderStatus) {
        // event.target me recupera el td que ha llamado al evento
        event.target.style.backgroundColor = colorPintador
        //event.target.classList.add(colorPintador), esta no por que no sobreescribe
    }
}

let tabla = document.createElement('table')
pinturitas.appendChild(tabla)

// let tr = document.createElement('tr')
// tabla.appendChild(tr)


// let tabla = document.createElement('table')
// pinturitas.appendChild(tabla)


for (i = 0; i < nFilas; i++){
    let tr = tabla.insertRow()
    for(j = 0; j < nCol; j++){
        let td = tr.insertCell()
        td.addEventListener('click', startPrint)
        td.addEventListener('mousemove', paintColor)
    }
}


/*td.id = 'f1c1'
td.classList.add('bonito')
td.style.backgroundColor = 'color'*/