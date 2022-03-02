
//Lectura de nodos
const padre = document.querySelector('.padre');

// Crear nodos

const parrafo4 = document.createElement('p');
const parrafo5 = document.createElement('p');
parrafo4.innerHTML = 'Párrafo 4';
// const textoParrafo4 = document.createTextNode('Párrafo 4');
const textoParrafo5 = document.createTextNode('Párrafo 5');

// Agregar nodos
// parrafo4.appendChild(textoParrafo4);
parrafo5.appendChild(textoParrafo5);

parrafo4.setAttribute('class', 'parrafos')
parrafo4.setAttribute('id', 'parrafo4')

padre.append(parrafo4, parrafo5)