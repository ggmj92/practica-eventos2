/* Variables y arrays */

const body = document.querySelector("body");

const miniFragmentAnadir = document.createDocumentFragment();
const miniaturas = document.querySelector("#miniaturas");
const imagenesArray = [
  {
    url: 'assets/images/viajes-1.jpg',
    alt: 'Chica sobre hamaca en la playa',
    titulo: 'Viaje al Caribe',
    pie: 'Viaje uno',
  },
  {
    url: 'assets/images/viajes-6.jpg',
    alt: 'Paseo maritimo con tunel natural',
    titulo: 'Viaje por acantilados',
    pie: 'Viaje dos',
  },
  {
    url: 'assets/images/viajes-3.jpg',
    alt: 'Pueblo rural con castillo en el monte',
    titulo: 'Viaje trekking',
    pie: 'Viaje tres',
  },
];

const fotoGranFragment = document.createDocumentFragment();
const fotoGrande = document.querySelector('#fotoGrande');

/* Eventos */

/* Funciones */

const cajasMiniaturas = () => {
  imagenesArray.forEach((item) => {
    const cajaMin = document.createElement("DIV");
    cajaMin.classList.add('gridContainer');
    const imagenes = document.createElement("IMG");
    imagenes.src = item.url, item.alt;
    cajaMin.append(imagenes);
    miniFragmentAnadir.append(cajaMin);
  });
  miniaturas.append(miniFragmentAnadir);
};


const cajaFotosGran = () => {
    imagenesArray.forEach((item) => {
        const cajaGran = document.createElement('DIV');
        const cajaFig = document.createElement('FIGURE');
        cajaFig.innerHTML = item.titulo;
        const cajaFigCap = document.createElement('FIGCAPTION');
        cajaFigCap.innerHTML = item.pie;
        const imagenesGran = document.createElement('IMG');
        imagenesGran.src = item.url, item.alt;
        cajaFigCap.append(imagenesGran);
        cajaFig.append(cajaFigCap);
        cajaGran.append(cajaFig);
        fotoGranFragment.append(cajaGran);
    });
    fotoGrande.append(fotoGranFragment);
};

cajasMiniaturas();
cajaFotosGran();

