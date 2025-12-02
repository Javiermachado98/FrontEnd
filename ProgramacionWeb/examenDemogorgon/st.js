class Personaje {
    constructor(nombre, apellido, grupo, actor, fechaDebut) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.grupo = grupo;
        this.actor = actor;
        this.fechaDebut = new Date(fechaDebut);
    }

    mostrarNombre() {
        return `Nombre completo: ${this.nombre} ${this.apellido}`;
    }

    Interprete() {
        return `actor ${this.actor}`;
    }
    tiempo() {
        let fecha_today = new Date();
        let fechaDebuto = this.fechaDebut;
        let debut = fecha_today.getFullYear() - fechaDebuto.getFullYear();
        let mes = fecha_today.getMonth() - fechaDebuto.getMonth();

        if (mes < 0 || (mes === 0 && fecha_today.getDate() < fechaDebuto.getDate())) {
            debut = - debut;
        }
        return debut;
    }

}

class Criatura extends Personaje {
    constructor(nombre, apellido, grupo, actor, fechaDebut, ubicacion) {
        super(nombre, apellido, grupo, actor, fechaDebut); //llamo los atributos el padre
        this.ubicacion = ubicacion; //atributo  nuevo del monstruito
    }

    iam() {
        return "yo soy del " + this.ubicacion;
    }

    nombreCompleto() {
        return super.mostrarNombre() + " " + "Ubicacion: " + this.ubicacion;
    }
}

let personaje1 = new Personaje("Mike", "Wheeler", "The Party", "Finn Wolfhard", "2016-07-15");
let personaje2 = new Personaje("Dustin", "Henderson", "The Party", "Gaten Matarazzo", "2016-07-15");
let personaje3 = new Personaje("Jim", "Hopper", "Adultos", "David Harbour", "2016-07-15");
let personaje4 = new Personaje("Lucas", "Sinclair", "The Party", "Caleb McLaughlin", "2016-07-15");
let personaje5 = new Personaje("Joyce", "Byers", "Adultos", "Winona Ryder", "2016-07-15");


terminalLog("Informacion\n" + personaje1.mostrarNombre() + "\n" + personaje1.Interprete() + "\n" + "debut: " + personaje1.tiempo() + " años\n"
    + "");

let arrayPersonajes = [personaje1, personaje2, personaje3, personaje4, personaje5];


function mostrarArreglo(list){

    for (let index = 0; index < list.length; index++) {
        // en mi funcion imprimir voy a agregar un if para poder diferenciar de las criaturas
        //verifica si un objeto es instancia de una clase.
        let tipo = "";
        if (list[index] instanceof Criatura){
            tipo += "Criatura" + " ";
        }else{
            tipo += "Personaje" + " ";
        }

        let personaje = list[index];
        terminalLog(
            "tipo: " + tipo +
            "Nombre: " + personaje.nombre +
            " Apellido: " + personaje.apellido +
            " Grupo: " + personaje.grupo +
            " Actor: " + personaje.actor +
            " debut: " + personaje.tiempo() // nota, siempre debo imprimir este esmi tostring
        );
    }
}

mostrarArreglo(arrayPersonajes);

let personajesOrdenados = orderApellido();
terminalLog("\n")
terminalLog("Persons ordenados por apellido")
for (let personajes of personajesOrdenados) {// como pa poner un for each
    terminalLog("Nombre: " + personajes.nombre +
        " Apellido: " + personajes.apellido);
}

function orderApellido() {
    return arrayPersonajes.toSorted((a, b) => a.apellido.localeCompare(b.apellido));
    //el sorted me crea un array nuevo, por lo cual debo hacerlo variable
}

let criatura1 = new Criatura("Demogorgon", "", "", "", "1983-11-06","The void");
arrayPersonajes.unshift(criatura1);

terminalLog("Informacion\n" + criatura1.nombreCompleto() + "\n" + criatura1.iam() + " Debut: " + criatura1.tiempo());
terminalLog("\n" + "arreglo con del demogorgon")
mostrarArreglo(arrayPersonajes);



// importante el filter se hace sobre arrays
//Este me devuelve true 
let criaturas  = arrayPersonajes.filter(personaje => personaje instanceof Criatura);

//Este me devuelve true a los no criaturas
arrayPersonajes  = arrayPersonajes.filter(personaje => !(personaje instanceof Criatura));

// Orden descendente
arrayPersonajes = arrayPersonajes.toSorted((a, b) => b.tiempo() - a.tiempo());
criaturas = criaturas.toSorted((a, b) => b.tiempo() - a.tiempo());

terminalLog("\n" + "arreglo solo criaturas")
mostrarArreglo(criaturas);

terminalLog("\n" + "arreglo solo personajes")
mostrarArreglo(arrayPersonajes);