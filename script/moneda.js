/* || COMIENZO DE LAS VARIABLES || */
let moneda = true;
const cara = 1;
const cruz = 2;
/* || FIN DE LAS VARIABLES || */



/* || COMIENZO DEL JUEGO DE LA MONEDA || */

//ejecutarMoneda();

function ejecutarMoneda () {

    moneda = Math.floor(Math.random()*2)
    if (moneda===0){
        Swal.fire({
            title: 'Bien Ahí!',
            text: 'La suerte dijo que sea CARA.',
            imageUrl: '../img/cara.png',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Image-Cara.png',
        })
    }
    else {
        Swal.fire({
            title: 'Bien Ahí!',
            text: 'La suerte dijo que sea CRUZ.',
            imageUrl: '../img/cruz.png',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Image-Cruz.png',
        })
    }
    
}

/* || FIN DEL JUEGO DE LA MONEDA || */





