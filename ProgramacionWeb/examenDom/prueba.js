var h = document.createElement("h1") ; //crea el elemento h1 
var t = document.createTextNode("Hola, mundo"); //crea el nodo de texto 
h.appendChild(t); //añade el texto al elemento h1 

var att = document.createAttribute("class"); //crea el atributo 
att.value = "logo"; // añade el valor del atributo 
h.setAttributeNode(att); //añade el atributo al nodo h1 creado 