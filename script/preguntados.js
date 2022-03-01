let preguntados = true;

/* || COMIENZO DE LA VARIABLE PARA COMENZAR EL JUEGO || */

const ejecutarPreguntados = () => {

    for( let i = 0; i < arrayPreguntas.length; i++ ){
        hacerPregunta(i);
    }
    
    let verificacion = true
    
    for( let i = 0; i < arrayPreguntas.length; i++){
        if(arrayPreguntas[i].respuestaCorrecta != arrayPreguntas[i].respuesta){
            verificacion = verificacion && false;
        } 
    }
    
    if(!verificacion){

        Swal.fire({
            icon: 'error',
            title: `Lo siento usuario`,
            text: 'Una o más de tus respuestas están mal. GAME OVER!',
            footer: '<a href="./preguntados.html">Volver A Intentar.</a>'
        })

    } else {

        Swal.fire({
            title: `¡FELICITACIONES usuario!`,
            text: 'Respondiste todas las respuestas  de manera correcta! ',
            imageUrl: '../img/ganador.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Imagen-Ganador.png',
        })

    }
}

/* || FIN DE LA VARIABLE PARA COMENZAR EL JUEGO || */



/* || COMIENZO CONSTRUCTOR PARA PREGUNTAS Y RESPUESTAS || */

class Pregunta {

    constructor(id, pregunta, opciones, respuesta, respuestaCorrecta) {
        this.id = id;
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.respuestaCorrecta = respuestaCorrecta;
    }
    
}

/* || FIN CONSTRUCTOR PARA PREGUNTAS Y RESPUESTAS || */



/* || COMIENZO DE LA VARIABLE FUNCTION PARA INICIAR LAS PREGUNTAS || */

const hacerPregunta = (i) => {
    alert(arrayPreguntas[i].pregunta);
    arrayPreguntas[i].respuesta = prompt(arrayPreguntas[i].opciones);
    alert(`Respondiste ${arrayPreguntas[i].respuesta}`);
}

/* || FIN DE LA VARIABLE FUNCTION PARA INICIAR LAS PREGUNTAS || */



/* || COMIENZO DE LAS VARIABLES CON LAS PREGUNTAS + RESPUESTA DEL USUARIO || */

let pregunta1 = new Pregunta(1, "¿Cuál de estos paises clasificó al mundial QATAR2022?", "Bolivia, Chile, Argentina, Paraguay, Venezuela", "", "argentina");
let pregunta2 = new Pregunta(2, "¿En el año de 2021, un equipo de ESports de CS:GO salió campeón de el más importante torneo de la historia de CS:GO. ¿Cuáles de los siguientes equipos fué?", "Gambit, NaVi, Vitality, NIP, Heroic", "", "navi");
let pregunta3 = new Pregunta(3, "¿En qué año el SARS-COV-2 arrazó con la población mundial del planeta tierra?", "2017, 2018, 2019, 2020, 2021", "", "2019");
let pregunta4 = new Pregunta(4, "¿Qué apodo te ponen en un videojuego si no sabes jugarlo?", "Noob, Novato, maleta, carreado, incarreable", "", "noob");
let arrayPreguntas = [];

arrayPreguntas.push(pregunta1);
arrayPreguntas.push(pregunta2);
arrayPreguntas.push(pregunta3);
arrayPreguntas.push(pregunta4);

/* || FIN DE LAS VARIABLES CON PREGUNTAS + RESPUESTA DEL USUARIO || */



/* || COMIENZO DEL BOTON PARA JUGAR || */

const botonJugar = document.querySelector('.botonJugar')
botonJugar.addEventListener('click', () => {
    ejecutarPreguntados();
})
const containerReglas = document.querySelector('.container');

const reglasPreguntados = document.createElement('h2');
reglasPreguntados.classList.add('container')
reglasPreguntados.textContent = ('Las respuestas deberás escribirlas sin caracteres raros ("ó, @, ñ, !, etc..."). Dicho esto... ¡Haz click en el botón para jugar!');

containerReglas.appendChild(reglasPreguntados);
/* || FIN DEL BOTON PARA JUGAR || */



/* || COMIENZO ARREGLO DE RESPUESTAS DEL USUARIO || */

const respuestasDOM = [
    {
        id: 1,
        respuesta: (arrayPreguntas[0].respuesta),
    },
    {
        id: 2,
        respuesta: (arrayPreguntas[1].respuesta),
    },
    {
        id: 3,
        respuesta: (arrayPreguntas[2].respuesta),
    },
    {
        id: 4,
        respuesta: (arrayPreguntas[3].respuesta),
    },
];

/* || FIN ARREGLO DE RESPUESTAS DEL USUARIO || */



/* || COMIENZO AGREGAR DOM, EVENTOS Y FUNCTIONS || */

const contenedorRespuestas = document.querySelector(".containerRespuestas");
const eventoClick = document.querySelector(".click");
const clicks = [];

document.addEventListener('DOMContentLoaded', () => {
    mostrarRespuestas();
})

/* || FIN AGREGAR DOM, EVENTOS Y FUNCTION || */



/* || COMIENZO VER LAS RESPUESTAS EN EL HTML || */

function mostrarRespuestas () {
    for (const item of respuestasDOM) {

        const verRespuesta = document.createElement('h2');
        verRespuesta.classList.add('respuestas');
        verRespuesta.textContent = item.respuesta;
        verRespuesta.onclick = () => {
            cambiarColor(item.id);
        }
        
        contenedorRespuestas.appendChild(verRespuesta);

    }
}

/* || FIN VER LAS RESPUESTAS EN EL HTML || */



/* || COMIENZO FUNCION PARA ENCONTRAR RESPUESTAS || */

function cambiarColor(id) {
    const encontrarRespuestas = respuestasDOM.find( respuesta => respuesta.id === id)
    clicks.push(encontrarRespuestas)
    mostrarClicks(clicks);
}

/* || FIN FUNCION PARA ENCONTRAR RESPUESTAS || */



/* || COMIENZO FUNCION PARA EVENTOS CON CLICK || */

function mostrarClicks(clickEvent) {

    for (const item of clickEvent) {
        renderizarRespuesta(item);
    }
    
}

/* || FIN FUNCION PARA EVENTOS CON CLICK || */



/* || COMIENZO FUNCION PARA MOSTRAR RESPUESTAS DEL USUARIO EN EL HTML AL HACERLES CLICK || */

const renderizarRespuesta = (item) => {

    const verRespuesta = document.createElement('h2');
    verRespuesta.classList.add('respuestas');
    verRespuesta.textContent = item.respuesta;
    let respuesta = document.getElementById(`respuesta${item.id}`);
    respuesta.innerHTML = "";
    respuesta.appendChild(verRespuesta);
    
}

/* || FIN DE LA FUNCION PARA MOSTRAR RESPUESTAS DEL USUARIO EN EL HTML AL HACERLES CLICK || */


