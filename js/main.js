/* Variables y arrays */

const body = document.querySelector('body');

const miniaturas = document.querySelector('#miniaturas');
const miniaturasArray = [
    {
        url: 'assets/images/viajes-1.jpg',
        alt: 'Chica sobre hamaca en la playa',
    },
    {
        url: 'assets/images/viajes-6.jpg',
        alt: 'Paseo marítimo con tunel natural',
    },
    {
        url: 'assets/images/viajes-3.jpg',
        alt: 'Pueblo rural con castillo en el monte',
    }
];
const miniFragmentAnadir = document.createDocumentFragment();

/* Eventos */

/* Funciones */

const cajasMiniaturas = () => {
    const caja = document.createElement('DIV');
    const imagenes = document.createElement('IMG');
    imagenes.src = imagenes.url, imagenes.alt;
    caja.append(imagenes);
};

cajasMiniaturas();
