// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'; para exportar con constante
import heroes, { owners } from '../data/heroes'; //para exportar sin constante

console.log(owners)

// Manera larga
// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// Mi manera (el === hace que regrese false o true si no existe o hay que hacer el if)
// const getHeroeById = (id) => {
//   return heroes.find(heroes => heroes.id === id);
// }

// Su manera find()
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(3));

// Su manera filter()
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('Marvel'));