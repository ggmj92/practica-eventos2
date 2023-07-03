// Variables y arrays 

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
  {
    url: 'assets/images/viajes-2.jpg',
    alt: 'Chica sobre hamaca en la playa',
    titulo: 'Viaje al Caribe',
    pie: 'Viaje cuatro',
  },
  {
    url: 'assets/images/viajes-5.jpg',
    alt: 'Paseo maritimo con tunel natural',
    titulo: 'Viaje por acantilados',
    pie: 'Viaje cinco',
  },
  {
    url: 'assets/images/viajes-7.jpg',
    alt: 'Pueblo rural con castillo en el monte',
    titulo: 'Viaje trekking',
    pie: 'Viaje seis',
  },
  
];

const body = document.querySelector('body');
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');



const fotoGranFragment = document.createDocumentFragment();
const fotoGrande = document.querySelector('#fotoGrande');

// Eventos

// Evento 1

boton1.addEventListener('click', () => {
  boton1.style.display = 'none';
  boton2.style.display = 'block';
  miniaturas.style.display = 'flex';
});

boton2.addEventListener('click', () => {
  boton2.style.display = 'none';
  boton1.style.display = 'block';
  miniaturas.style.display = 'none';
});

// Evento 2








// Evento 3


// Funciones 

const cajasMiniaturas = () => {
  imagenesArray.forEach((item,index) => {
    const cajaMin = document.createElement("DIV");
    cajaMin.classList.add('divImagen');
    cajaMin.classList.add(`divImagen${index}`)
    const imagenes = document.createElement("IMG");
    imagenes.src = item.url, item.alt;
    cajaMin.append(imagenes);
    miniFragmentAnadir.append(cajaMin);
  });
  miniaturas.append(miniFragmentAnadir);
};

const cajaFotosGran = () => {

  imagenesArray.forEach((item,index) => {
    const cajaGran = document.createElement('DIV');
    cajaGran.classList.add('divImagenG');
    cajaGran.classList.add(`divImagenG${index}`);
    const cajaFig = document.createElement('FIGURE');
    cajaFig.innerHTML = item.titulo;
    cajaFig.classList.add('ampliar')
    const imagenesGran = document.createElement('IMG');
    imagenesGran.src = item.url, item.alt;
    const cajaFigCap = document.createElement('FIGCAPTION');
    cajaFigCap.innerHTML = item.pie;
    imagenesGran.append(cajaFigCap);
    cajaFig.append(imagenesGran);
    cajaGran.append(cajaFig);
    fotoGranFragment.append(cajaGran);
  });
  fotoGrande.append(fotoGranFragment);


};



/*
const cajaFotosGran = () => {
  imagenesArray.forEach((item) => {
    const cajaGran = document.createElement('DIV');
    const cajaFig = document.createElement('FIGURE',);
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
*/


cajasMiniaturas();
cajaFotosGran();

divImagen0.addEventListener('click', (ev) => {
  divImagenG.style.display = 'none';
  divImagenG0.style.display = 'block';
  
});

