//CREAR NODOS

const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Párrafo 4');
const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Párrafo 5';

//Seleccionar elemento padre

const elementoPadre = document.querySelector('.padre');

//AGREGAR NODOS

// elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
// elementoPadre.appendChild(parrafoCinco);
elementoPadre.append(parrafoCuatro, parrafoCinco);