
  /*
  <section id="hero" class="container">
        <div class="hero-content">
            <h2>El aroma que despierta tu día.</h2>
            <p>Disfruta de granos selectos de las mejores regiones del mundo, tostados a la perfección.</p>
            <a href="https://www.fallingfalling.com/"  target="_blank" class="btn">Ver Menú Completo</a>
        </div>
    </section>

     <section id="productos" class="container">
        <h3>Nuestros Favoritos</h3>
        <div class="productos-grid">
    */


let sectionOne = document.createElement('section');
let sectionClase = document.createAttribute("container");
let sectionId =  document.getElementById("productos");
sectionOne.appendChild(sectionClase);

sectionOne.value = 'container';
sectionOne.setAttributeNode(sectionClase);


let h3 = document.createElement("h3");
let texth3 = document.createTextNode("Nuestros Favoritos");
h3.appendChild(texth3);

let h4 = document.createElement("h3");
let texth4 = document.createTextNode("Nuestros Favoritos");
h3.appendChild(texth4);


let parrafos1 = document.createElement("p");
let parrafos1Texto = document.createTextNode("La esencia pura del café. Para aguantar las 12 horas de Meritxell.")

let span1 = document.createElement("span");
let span1Texto = document.createTextNode("$2.50");
span1.appendChild(span1Texto);

let attSpan = document.createAttribute("class");
attSpan.value = "precio";
span1.setAttributeNode(attSpan);






let sectionbyID = document.getElementById('productos');





let productosCard = document.getElementsByClassName('productos-card');
let articulos = document.createElement('article')


for (i = 0; i < 6; i++) {

}



