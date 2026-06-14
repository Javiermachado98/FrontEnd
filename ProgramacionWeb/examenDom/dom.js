window.onload = function () {
    let body = document.getElementsByTagName("body")[0];

    //1. Crear etiqueta let elemento = document.createElement("etiqueta");
    let sectionHero = document.createElement('section'); // aqui se hace el section
    let idHero = document.createAttribute("id");// asigno el id al atributo
    idHero.value = "hero";
    sectionHero.setAttributeNode(idHero);//Aqui cree mi seccion

    //2. vinculamos la clase
    let classHero = document.createAttribute("class");
    classHero.value = "container";
    sectionHero.setAttributeNode(classHero);

    //3. se crea el div interno
    let divHero = document.createElement('div');
    let classDivHero = document.createAttribute("class");
    classDivHero.value = "hero-content";
    divHero.setAttributeNode(classDivHero);

    //6. Creamos los textos y parametros internos
    let h2 = document.createElement("h2");
    let textoH2 = document.createTextNode("El aroma que despierta tu dia.");
    h2.appendChild(textoH2);
    divHero.appendChild(h2);// metemos el h2 en el div

    //7.Creamos el parrafo
    let pHero = document.createElement("p");
    let textPhero = document.createTextNode("Disfruta de granos selectos de las mejores regiones del mundo, tostados a la perfección.")
    pHero.appendChild(textPhero);
    divHero.appendChild(pHero); // metemos el parrafo en el div

    //8.Creamos el enlace
    let aHero = document.createElement("a");
    let hrefA = document.createAttribute("href");
    hrefA.value = "https://www.fallingfalling.com/";
    aHero.setAttributeNode(hrefA);

    let targetA = document.createAttribute("target");
    targetA.value = "_blank";
    aHero.setAttributeNode(targetA);

    let classA = document.createAttribute("class");
    classA.value = "btn";
    aHero.setAttributeNode(classA);

    let textoA = document.createTextNode("Ver Menu Completo");
    aHero.appendChild(textoA);// metemos el enlace al div
    divHero.appendChild(aHero);

    //9.Pintar al final
    sectionHero.appendChild(divHero);//metemos el div en la section
    body.appendChild(sectionHero);


    //Productos y bucless
    //1. crear la seccion de productos
    let sectionProd = document.createElement('section');
    let idProd = document.createAttribute("id");
    idProd.value = "productos";
    sectionProd.setAttributeNode(idProd);

    let classProd = document.createAttribute("class");
    classProd.value = "container";
    sectionProd.setAttributeNode(classProd);

    //2. Aqui creo el h3
    let h3 = document.createElement("h3");
    let textoH3 = document.createTextNode("Nuestros Favoritos");
    h3.appendChild(textoH3);
    sectionProd.appendChild(h3); // lo agrego a la seccion

    //3. creo el div en el contenedor
    let divGrid = document.createElement("div");
    let classGrid = document.createAttribute("class");
    classGrid.value = "productos-grid";
    divGrid.setAttributeNode(classGrid);

    //Arreglo de datos de los textos
    const datosCafe = [
        { nombre: "Espresso Clásico", desc: "La esencia pura del café. Para aguantar las 12 horas de Meritxell.", precio: "$2.50" },
        { nombre: "Latte Cremoso", desc: "Balance perfecto entre café y leche texturizada. Perfecto para los exámenes de Modesto.", precio: "$4.00" },
        { nombre: "Capuccino", desc: "Espuma de leche, chocolate y un toque de clases de Blanca.", precio: "$4.50" },
        { nombre: "Café Americano", desc: "Una deliciosa mezcla de espresso, leche al vapor y sirope de chocolate. Para las clases de M. Carmen", precio: "$4.50" },
        { nombre: "Café Frío", desc: "Nuestro café especial, servido sobre hielo, para compartir con Gonzalo o Abel", precio: "$4.50" }
    ];

    // bucle para crear 
    
    for (let i = 0; i < datosCafe.length; i++){

        //1.Creamos los articles
        let article = document.createElement("article");
        let classArticle = document.createAttribute("class");
        classArticle.value = "producto-card";
        article.setAttributeNode(classArticle);

        //2.Crear el h4
        let h4 = document.createElement("h4");
        let textoH4 = document.createTextNode(datosCafe[i].nombre);
        h4.appendChild(textoH4);
        article.appendChild(h4);

        //3.Crear el parrafo
        let pCafe = document.createElement("p");
        let textoPCafe = document.createTextNode(datosCafe[i].desc);
        pCafe.appendChild(textoPCafe);
        article.appendChild(pCafe);

        //4. crear el precio
        let span = document.createElement("span");
        let classSpan = document.createAttribute("class");
        classSpan.value = "precio";
        span.setAttributeNode(classSpan);
        let textoSpan = document.createTextNode(datosCafe[i].precio);
        span.appendChild(textoSpan);
        article.appendChild(span);

        //5.meter los componentes y pintar
        divGrid.appendChild(article);

    }
    sectionProd.appendChild(divGrid); 
    body.appendChild(sectionProd);   













}


