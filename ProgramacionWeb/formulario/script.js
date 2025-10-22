function validateName() {
    let patternName = /^[A-Za-z0-9 ]{1,20}$/;
    let nameDisk = document.getElementById("nombre").value.trim();

    if (nameDisk === "") {
        console.log("El nombre no puede estar vacio");
        return false;

    }else if (!patternName.test(nameDisk)) {
        console.log("El nombre es incorrecto!");
        return false;
    }else {
        console.log("nombre ok");
        return true;
    }
}

function validateNameGroup() {
    let patternNameGroup = /^[A-Za-z0-9 ]{1,20}$/;
    let nameGroup = document.getElementById("artista").value.trim();

    if (nameGroup === "") {
        console.log("El grupo o cantante no puede estar vacio");
        return false;

    } else if (!patternNameGroup.test(nameGroup)) {
        console.log("El nombre es incorrecto!");
        return false;
    }
    else {
        console.log("grupo ok");
        return true;
    }
}

function validateYear() {
    let patternYear = /^[0-9]{4}$/
    let year = document.getElementById("anio").value;
    if (year === "") {
        console.log("El año no puede estar vacio");
        return false;
    } else if (!patternYear.test(year)) {
        console.log("El año es incorrecto");
        return false;
    }
    else {
        console.log("año ok");
        return true;
    }

}

function validateLocation(){
    let patternLocation = /^[0-9 ]{1,3}$/;
    let location = document.getElementById("localizacion").value;
    if (location === "") {
        console.log("location vacio, true");
        return true;
    } else if(!patternLocation.test(location)){
        console.log("Error en el la locacion");
        return false;
    }else{
        console.log("locaion ok");
        return true;
    }
}

function validateAll() {
    let banderaValidar = true;

    if (!validateName())
        banderaValidar = false
    if (!validateNameGroup())
        banderaValidar = false
    if (!validateYear())
        banderaValidar = false
    if (!validateLocation())
        banderaValidar = false
    return banderaValidar;
}

function guardarDisco() {
    if(validateAll()){
        console.log("Paso");
    } else{
        alert("error")
    }
}
