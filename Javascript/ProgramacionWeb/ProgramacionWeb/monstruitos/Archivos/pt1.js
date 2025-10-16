function run() {

}

class Monstruo {
    constructor(name, lastName, interpret, color, bornDate) {
        this.name = name;
        this.lastName = lastName; // comprobar el apellido
        this.interpret = interpret;
        this.color = color;
        this.bornDate = bornDate;
    }

    imprimir() {
        if(this.apellido!=null && this.apellido!='')
            return this.nombre + this.apellido
        return this.nombre
    }

    edad(){
        let actualYear = new Date().getFullYear();
        let fechaNacimiento = Monstruo.bornDate.getFullYear();
        let actualAge = 

    }

}
console.log("año nacimiento: " + fechaNacimiento);
let prueba = actualYear - fechaNacimiento;
console.log("edad: " + prueba);


let monstruo1 = new Monstruo("Henry J", "Waternoose III", "James Coburn", "Gris", new Date(1970, 11, 22));
let fechaNacimiento = monstruo1.bornDate.getFullYear();

let monstruo2 = new Monstruo("Fungus", "", "Frank Oz", "Rojo", new Date(1984, 2, 17));
let fechaNacimiento2 = monstruo2.bornDate.getFullYear();

let monstruo3 = new Monstruo("Sulley", "", "John Goodman", "Verde", new Date(1980, 8, 22));
let fechaNacimiento3 = monstruo3.bornDate.getFullYear();

let monstruo4 = new Monstruo("Boo", "","Mary Gibbs", "Rosa", new Date(2001, 7, 14));
let fechaNacimiento4 = monstruo4.bornDate.getFullYear();

let monstruo5 = new Monstruo("Celia", "","Jenifer Tilly", "Morado", new Date(1995, 4, 6));
let fechaNacimiento5 = monstruo5.bornDate.getFullYear();

let listMonstruos = [monstruo1, monstruo2, monstruo3, monstruo4, monstruo5];



/*function orderElements(listMonstruos) {
    return listMonstruos.toSorted();
}

orderElements();
*/
console.log("Lista ordenada" + listMonstruos);









console.log('CLASSES - ANIMALES');

/*
class Animales {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    canta() {
        return `${this.nombre} puede cantar`;
    }

    baila() {
        return this.nombre + ' puede bailar';
    }
}*/

run();
