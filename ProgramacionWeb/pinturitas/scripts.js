const nFilas = 20 // importante ya que es el limite
const nCol = 20

let pinturitas = document.getElementsByClassName('pinturitas')[0]
let colores = ["yellow", "blue", "green", "red", "grey", "white"]

let orderStatus = false

function startPrint(){
    orderStatus = !orderStatus
}


function paintColor(){
    if (orderStatus) {
        console.log("pintar colores")
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
        td.addEventListener('click', paintColor)
    }
}


/*td.id = 'f1c1'
td.classList.add('bonito')
td.style.backgroundColor = 'color'*/