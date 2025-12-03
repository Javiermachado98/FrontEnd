function validarFechaTostado(){
    let patternDate1= /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/
    let fecha = document.getElementById
    if(fecha === ""){
        console.log("El año no puede estar vacio");
        return false;
    }else if (!patternDate1.test(fecha)) {
        console.log("El año es incorrecto, recuerda usar el formato (aaaa/mm/dd)");
        return false;
    } else {
        console.log("año ok")
        return true;
    }
}

function maestroTostador(){
    let patternMaestro = /^([A-Z]{1})([A-Za-z]{10})$/;
    let maestro = document.getElementById
    if(maestro === ""){
        console.log("El nombre no puede ir vacio");
        return false;
    }else if (!patternMaestro.test(maestro)) {
        console.log("El nombre esta incorrecto");
        return false;
    } else {
        console.log("Nombre ok")
        return true;
    }
}
function origenGrano(){
    let patternGrano = /^([a-z]{2-3})-([A-Z]+).([0-9]{3-4})$/
    let origen = document.getElementById
    if(origen === ""){
        console.log("El grano no puede estar vacio");
        return false;
    }else if (!patternGrano.test(origen)) {
        console.log("El grano es incorrecto");
        return false;
    } else {
        console.log("grano ok")
        return true;
    }
}


function validarFechaTostado(){
    let patterntos= /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/
    let tostado = document.getElementById
    if(tostado === ""){
        console.log("El año no puede estar vacio");
        return false;
    }else if (!patterntos.test(tostado)) {
        console.log("El año es incorrecto, recuerda usar el formato (aaaa/mm/dd)");
        return false;
    } else {
        console.log("año ok")
        return true;
    }
}

function validateheight() {
    let pattern = /^([1-9][0-9]{3}|10000)$/;
    let height = document.getElementById("peso").value;
    if (height === "") {
        console.log("el peso no puede ir vacia");
        return false;
    } else if (!pattern.test(height)) {
        console.log("El peso esta incorrecto");
        return false;
    } else {
        console.log("Peso correcto");
        return true;
    }
}

function validatenotas() {
    let patterncat = /^(\d{3})([A-Z]{2})([1-9]{1})$/;
    let cata = document.getElementById("cata").value;
    if (cata === "") {
        console.log("la descripcion no puede estar vacia");
        return false;
    } else if (!patterncat.test(cata)) {
        console.log("la descripcion esta incorrecto");
        return false;
    } else {
        console.log("descripcion correcto");
        return true;
    }
}

function validateLote() {
    let patternlote = /^([A-Z ]{1-2})-([\d]{7})$/;
    let lote = document.getElementById("lote").value;
    if (lote === "") {
        console.log("la descripcion no puede estar vacia");
        return false;
    } else if (!patternlote.test(lote)) {
        console.log("la descripcion esta incorrecto");
        return false;
    } else {
        console.log("descripcion correcto");
        return true;
    }
}



function validateAll() {
    let banderaValidar = true;

    if (!validarFechaTostado())
        banderaValidar = false
    if (!maestroTostador())
        banderaValidar = false
    if (!origenGrano())
        banderaValidar = false
    if (!validateheight())
        banderaValidar = false

    if (!validatenotas())
        banderaValidar = false

    return banderaValidar;
}