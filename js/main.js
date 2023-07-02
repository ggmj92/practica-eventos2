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
];

const body = document.querySelector('body');
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');

const fotoGranFragment = document.createDocumentFragment();
const fotoGrande = document.querySelector('#fotoGrande');

// Eventos

// Evento 1

/* 
body.addEventListener('click', (ev) => {
  if (ev.target.matches('#boton1')) {
    boton1.classList.add('o-m');
    boton2.classList.remove('o-m');
  } else if (ev.target.matches('#boton2')) {
    boton2.classList.add('o-m');
    boton1.classList.remove('o-m');
  }
}); 
*/

// <<<<<<< HEAD
//         // const agrandarMiniatura = 
//         // accededer al objeto por posición

//     };

//     // Aquí va función
// } 
// );
// =======

/*
body.addEventListener('click', (ev) => {
  while (ev.target.matches('#boton1 m-o')) {
    boton1.classList.remove('m-o');
    item.classList.add('m-o-block');
  } 
});
*/

// const boton = document.getElementById('botones');
// const contenedorImagenes = document.getElementById('minuaturas');

// boton.addEventListener('click', function () {
//   if (contenedorImagenes.style.display === 'none') {
//     contenedorImagenes.style.display = 'block';
//     boton.textContent = 'Ocultar Fotos';
//   } else {
//     contenedorImagenes.style.display = 'none';
//     boton.textContent = 'Mostrar Fotos';
//   }
// });
// >>>>>>> db42997f7419c9b2cf8128c5df6d7d61d511e243

// Evento 2

// Evento 3

body.addEventListener('click', (ev) => {
  for (let url in imagenesArray) {
    ev.target.classList.add('ampliar')
  }
})

// Funciones 

const cajasMiniaturas = () => {
  imagenesArray.forEach((item) => {
    const cajaMin = document.createElement("DIV");
    // cajaMin.classList.add('gridContainer');
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

