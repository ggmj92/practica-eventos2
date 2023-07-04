// Variables y arrays 

const miniFragmentAnadir = document.createDocumentFragment();
const miniaturas = document.querySelector("#miniaturas");
const imagenesArray = [
  {
    id: 'foto1',
    url: 'assets/images/viajes-1.jpg',
    alt: 'Chica sobre hamaca en la playa',
    titulo: 'Viaje al Caribe',
    pie: 'Viaje uno',
  },
  {
    id: 'foto2',
    url: 'assets/images/viajes-6.jpg',
    alt: 'Paseo maritimo con tunel natural',
    titulo: 'Viaje por acantilados',
    pie: 'Viaje dos',
  },
  {
    id: 'foto3',
    url: 'assets/images/viajes-3.jpg',
    alt: 'Pueblo rural con castillo en el monte',
    titulo: 'Viaje trekking',
    pie: 'Viaje tres',
  },
  {
    id: 'foto4',
    url: 'assets/images/viajes-2.jpg',
    alt: 'Chica sobre hamaca en la playa',
    titulo: 'Viaje al Caribe',
    pie: 'Viaje cuatro',
  },
  {
    id: 'foto5',
    url: 'assets/images/viajes-5.jpg',
    alt: 'Paseo maritimo con tunel natural',
    titulo: 'Viaje por acantilados',
    pie: 'Viaje cinco',
  },
  {
    id: 'foto6',
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
    const imagenes = document.createElement("IMG");
    imagenes.src = item.url, item.alt;
    cajaMin.append(imagenes);
    cajaMin.id = item.id;
    miniFragmentAnadir.append(cajaMin);
  });
  miniaturas.append(miniFragmentAnadir);
};


cajasMiniaturas();

