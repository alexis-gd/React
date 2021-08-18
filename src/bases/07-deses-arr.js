// manera tradicional
// const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes);
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// manera 2021 4k Full Mega
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ['abc', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usarState = (valor) => {
  return [valor, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = usarState('goku');
console.log(nombre)
setNombre();