
import { personajes } from "../data/data.js";
personajes
import { nomPersonajes } from "./moduloperosnajes.js";


// Modulo para obtener los personajes al ir dando al boton

// accedo al boton derecho
let btn1 = document.querySelector('#btnDerecho');
let numero = 0;
btn1.addEventListener('click', () => {
    if (numero<=10){
 numero++; 
 nomPersonajes(personajes[numero])
}else{   
        btn1.style.backgound = 'gray'
        btn1.disabled = true
    }
}
)

// accedo al boton izquierdo
let btn2 = document.querySelector('#btnIzquierdo');
let numero2 = 9;
btn2.addEventListener('click', () => {
    if (numero2>0){
 numero2 = numero2 - 1; 
 nomPersonajes(personajes[numero2])
}else  {
    btn2.style.backgound = 'gray' 
    btn2.disabled = true   
    }
}
)

// var nombre = localStorage.getItem("Nombre");
// var imag = localStorage.getItem("imagen");
// /*Mostrar datos almacenados*/      
// cont.getElementById("nombre").innerHTML = nombre;
// cont.getElementById("imgPer").innerHTML = imag;











