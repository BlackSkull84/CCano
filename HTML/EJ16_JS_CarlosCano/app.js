//Definiciones
let btnGenerar = document.querySelector("#btngenerar");
let btnBorrar = document.querySelector("#btnborrar");
let numero = document.querySelector("input");

//Subfunciones

function random(number) {
    let num_generado = Math.random() * (number + 1);
    let redondea = Math.floor(num_generado);
    return redondea;
}

function asignarColor(rectangulo) {
    let rojo = random(255);
    let verde = random(255);
    let azul = random(255);

    let color = "rgb(" + rojo + "," + verde + "," + azul + ")";
    rectangulo.style.borderColor = color;
}

function asignarPosicion(rectangulo) {
    let coordenadaPrimer = random(400);
    let coordenadaSegun = random(400);

    //Si no hacia coordenadas diferentes me hacia cuadros que seguían en diagonal, asi me aseguro de que sean totalmente aleatorios
    let lugarPrimer = coordenadaPrimer + "px";
    let lugarSegun = coordenadaSegun + "px";

    rectangulo.style.top = lugarPrimer;
    rectangulo.style.left = lugarSegun;
}

function asignarDimensiones(rectangulo) {
    let pixel1 = random(100);
    let pixel2 = random(100);

    let size1 = pixel1 + "px";
    let size2 = pixel2 + "px";

    rectangulo.style.width = size1;
    rectangulo.style.height = size2;
}

function asignarGrosor(rectangulo) {
    let punto = random(5);

    let grosor = punto + "pt";
    
    rectangulo.style.borderSize = grosor;
}

//Función principal

function numeroDeCuadros() {

}

function crearCuadroRandom() {
    //Definir el contenedor
    let contenedor = document.querySelector("#contenedor");

    // Creamos el Elemento div:
    let rectangulo = document.createElement("div");
    rectangulo.className = "cuadros";

    // Le asignamos al Elemento las propiedades top, left, width, ...
    asignarColor(rectangulo);
    asignarPosicion(rectangulo);
    asignarDimensiones(rectangulo);
    asignarGrosor(rectangulo);
    
    // Añadimos el Elemento al contenedor
    contenedor.appendChild(rectangulo);
}

function generarCantidad() {
    let valorNumero = numero.value;
    //valorNumero = valorNumero.Math.floor();
    console.log(valorNumero);

    //El i < 100 hace que genere solo 100 cuadrados a la vez, si le intentas ponerle un número más grande te genera solo 100 cuadros
    for (let i=0; i < 100; i++) {
        if (i < valorNumero) {
            setTimeout (crearCuadroRandom, i * 100);
        } else {
            input.innerHTML = "Error";
        }
    };
    
}

function borrarCuadros() {
    contenedor.innerHTML="";
}

//La página genera los cuadros
window.addEventListener("load", (event) => {
    console.log("La página cargó");
});

btnGenerar.addEventListener("click", generarCantidad);
btnBorrar.addEventListener("click", borrarCuadros);

//Pistas de Jose María

//window.addEventListener("load", (event) => {
    //console.log("page is fully loaded");
//});

//function dibujaFiguraAleatoria() {
    // Creamos el Elemento div:
    //var rectangulo = document.createElement("div");
    //rectangulo.className = "figura";

    // Le asignamos al Elemento las propiedades top, left, width, ...
    //asignarColor(rectangulo);
    //asignarPosicion(rectangulo);
    //asignarDimensiones(rectangulo);
    //asignarGrosor(rectangulo);
    
    // Añadimos el Elemento al body
    //document.body.appendChild(rectangulo);
//}