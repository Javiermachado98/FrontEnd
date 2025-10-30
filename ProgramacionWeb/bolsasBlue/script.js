function validateDate() {
    let pattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/
    let year = document.getElementById("fecha").value;
    if (year === "") {
        console.log("El año no puede estar vacio");
        return false;
    } else if (!pattern.test(year)) {
        console.log("El año es incorrecto, recuerda usar el formato (dd/mm/aaaa)");
        return false;
    } else {
        console.log("año ok")
        return true;

    }
}

function validateChef() {
    let pattern = /^([A-Z]{2})\W([0-9]{4})$/;
    let chef = document.getElementById("cocinero").value;
    if (chef === "") {
        console.log("El nombre no puede ir vacio");
        return false;
    } else if (!pattern.test(chef)) {
        console.log("El nombre esta incorrecto");
        return false;
    } else {
        console.log("Nombre ok")
        return true;
    }
}

function validateDestiny() {
    let pattern = /^([A-Z]{2,3})\_([a-z])+\:([0-9]{4})$/;
    let addressee = document.getElementById("destinatario").value;
    if (addressee === "") {
        console.log("La direccion no puede ir vacia");
        return false;
    } else if (!pattern.test(addressee)) {
        console.log("El destino esta incorrecto");
        return false;
    } else {
        console.log("Direccion correcta");
        return true;
    }
}

function validateheight() {
    let pattern = /^([1-9][0-9]{2}|[1-4][0-9]{3}|5000)$/;
    let height = document.getElementById("gramos").value;
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

function validateComposition() {
    // let pattern = /^[0-9]+g[a-zA-Z]{1,2}[0-9]{0,1}[a-zA-Z]{1,2}[0-9]{0,1}$/;
    let pattern = /^[0-9]+g([a-zA-Z]{1,2}[0-9]{0,1}){1,2}$/; // puede funcionar 1 o 2 veces y el + es 1 o muchos
    let composition = document.getElementById("composicion").value;
    if (composition === "") {
        console.log("La composicion no puede ir vacia");
        return false;
    } else if (!pattern.test(composition)) {
        console.log("La composicion esta incorrecta");
        return false;
    } else {
        console.log("Composicion correcta");
        return true;
    }
}

function validate_accounts() {

    let accounts = document.getElementById("cuenta").value;
    let uperAccounts = accounts.toUpperCase();
    let charA = cuentaUpper.charAt(0);
    let charB = cuentaUpper.charAt(1);
    
    console.log(charA);
    console.log(charB);
    let resultado = charA + charB;
    console.log (resultado);

    console.log(charA.charAt(0));
    console.log(charA.charCodeAt(0));
    parseInt(charA.charAt(0));

    let pattern = /^[A-Z]$/;
    /*
    if (accounts === "") {
        console.log("La cuenta no puede ir vacia");
        return false;
    } else if (!pattern.test(accounts)) {
        console.log("La cuenta esta incorrecta");
        return false;
    } else {
        console.log("Cuenta correcta");
        return true;
    }*/
    let primera = cuentaUpper.charAtCode(0) - 64;
    let segunda = cuentaUpper.charAtCode(1) - 64;

    const suma = primera + segunda;

    const sum_digitos = parseInt(cuentaUpper.subString(2, 4));







    ////*-------------comprobacion final

    
    if (suma !== sum_digitos||digitros!==ngdf) {
        return false;
    }
    return true;







}




function validateAll() {
    let banderaValidar = true;

    if (!validateDate())
        banderaValidar = false
    if (!validateChef())
        banderaValidar = false
    if (!validateDestiny())
        banderaValidar = false
    if (!validateheight())
        banderaValidar = false
    if (!validateComposition())
        banderaValidar = false
    if (!validate_accounts())
        banderaValidar = false
    return banderaValidar;
}