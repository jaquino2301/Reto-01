
// Obtenemos la informacion de los personajes  y la enviamos a la pagina 2
import {nomPersonajes} from "../script/moduloperosnajes.js";

let nomPersonaje = document.querySelector('#nombre');
// let dscrip = documet.querySelector('#descripcion');
let imgPer = document.querySelector('#imgPer');

let nombrels = JSON.parse(localStorage.getItem('personaje'));

document.querySelector('#nombre').innerHTML= nombrels.nombre
document.querySelector("#descripcion").innerHTML=nombrels.descripcion
imgPer.setAttribute('src',nombrels.imagen)
console.log(nombrels)
