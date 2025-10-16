function Disco() {
    this.name = ''
    this.singer = ''
    this.year = ''
    this.genre = ''
    this.location = 0
    this.borrowed = false

    this.fillDisc = function (name, singer, year, genre, location) {
        this.name = name
        this.singer = singer
        this.year = year
        this.genre = genre
        this.location = location
    }

    this.changeLocation = function (num) {
        this.location = num
    }

    this.changeBorrowed = function () {
        this.borrowed = !this.borrowed
    }

    this.toString = function () {
        return this.name + ' ' + this.singer + ' ' + this.year + ' ' +
            this.genre + ' ' + this.location + ' ' + this.borrowed
    }

}

let discOne = new Disco()
discOne.fillDisc('Azul', 'Funk tribu', '2025', 'rock', 'Web');
let discTwo = new Disco()
discTwo.fillDisc('Amarillo', 'Jbalvin', '2024', 'pop', 'physical');
let discThree = new Disco()
discThree.fillDisc('Rojo', 'Imagine Dragons', '2023', 'punk', 'web');
let discFour = new Disco()
discFour.fillDisc('Blanco', 'Rufus Du sol', '2022', 'indie', 'physical');
let discFive = new Disco()
discFive.fillDisc('Negro', 'Franck', '2021', 'indie', 'Web');

let listDics = [discOne, discTwo, discThree, discFour, discFive];


let option;
do {
    option = prompt("Menu discos!\n1. Show number of Dics\n2. Show list of disc\n3. Show disc in intervals\n4. Add Disc at the list\n5. Delete disc at the list\n6. Search a dics\n10. Exit")
    switch (option) {
        case '1':
            alert("The number of disc are: " + countElements(listDics));
            break
        case '2':
            let option2 = parseInt(prompt("1. Show normal list\n2. Show list in reverse order\n3. Show list in order"))
            if (option2 == 1) 
                alert("Normal list: " + showElements(listDics));
            else if (option2 == 2) 
                alert("Reverse list" + showElementsReverse(listDics));
            else
                alert("Order list: " + orderElements(listDics));
            break
        case '3':
            startInterval = parseInt(prompt("Enter the start interval: "));
            endInterval = parseInt(prompt("Enter the end interval: "));
            alert("The slice of the list of Disc is: " + showIntervals(listDics,startInterval,endInterval));
        case '4':
            let option4 = parseInt(prompt("1. Add disk at start\n2. Add disk at the end"))
            let nameOption4 = prompt("Write the name of disk");
            let singerOption4 = prompt("Write the singer or band name: ");
            let yearOption4 = prompt("Write the year: ");
            let genreOption4 = prompt("Write the genre of disk: ");
            let locationOption4 = prompt("Write the location of the disk: ");
            let newDisc = new Disco()
            newDisc.fillDisc(nameOption4, singerOption4, yearOption4, genreOption4, locationOption4);
            if(option4 == 1)
                addValueParam(listDics,newDisc);
            else
                addLastValueParam(listDics, newDisc);
        case '5':
            let option5 = parseInt(prompt("1. Delete disk at start\n2. Delete disk at the end"))
            if(option5 == 1)
                deleteFirstValue(listDics)
            else
                deleteLastValue(listDics)
        case '6':
            let option6 = parseInt(prompt("1. Check for position\n2. Check for name"))
            if(option6 == 1){

                var positionArray = parseInt(prompt("Enter the position"));
                alert("the disk of position " + positionArray + " is " + showPosition(listDics,positionArray));
            }
            else if (option6 == 2){
                console.log("entro al else if")
                let myName = prompt("Enter the name of disk")
                for(var i = 0; i < listDics.length; i++){
                    if (listDics[i].name === myName)
                        alert("the disk with name has a position " + i)
                }
                console.log("Salio del for")
            }
            
    }
} while (option != 10)



