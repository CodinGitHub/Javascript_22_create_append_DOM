// CREAR NODOS

const parrafoCuatro = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('<h3>Párrafo 4</h3>');
const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = '<h3>Párrafo 5</h3>';

//Seleccionar elemento padre

const elementoPadre = document.querySelector('.padre');

//AGREGAR NODOS

// elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
// elementoPadre.appendChild(parrafoCinco);
elementoPadre.append(parrafoCuatro, parrafoCinco);