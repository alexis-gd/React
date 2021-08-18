
// Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


console.log(saludar('Krillin'));
console.log(saludar2('Bulma'));
console.log(saludar3('Picolo'));
console.log(saludar4('Picolo'));

const getUser = () => ({
  uid: 'ABC123',
  username: 'Usuario2836',
});

const user = getUser();

console.log(user);

//Tarea
// 1. Trasnformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('Alexis');
console.log(usuarioActivo);