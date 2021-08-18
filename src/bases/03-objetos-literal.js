

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'Nueva York',
    zip: '8511465',
    lat: '14.58742',
    lng: '34.89745',
  }
};

// console.log(persona);

const persona2 = { ...persona };
persona2.nombre = 'Pedro';

console.log(persona);
console.log(persona2);