
// Destructuración
// Asignación Desestructurante

const persona = {
  nombre: 'Goku',
  edad: 57,
  clave: 'SuperHeroe',
  // rango: 'Sayayin',
};

// Asignación Desestructurante
// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const usarContext = ({ clave, nombre, edad, rango = 'Kayosama' }) => {
  // console.log(nombre, edad, rango);

  return {
    nombre: nombre,
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 56.516,
      lng: -14.516,
    }
  }
}

const { nombre, nombreClave, anios, latlng: { lat, lng } } = usarContext(persona);

console.log(nombre);
console.log(nombreClave);
console.log(anios);
console.log(lat, lng);