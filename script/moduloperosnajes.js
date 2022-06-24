
// Funcion para traer los personajes
export function nomPersonajes(nombre){
    // console.log(nombre)
    localStorage.setItem('personaje', JSON.stringify(nombre));
    let btnNombre = document.querySelector('#personaje');
    let imgPersonaje = document.querySelector('#imagen');
    


    // Seleccionamos los personajes
    const person = localStorage.getItem('personaje', JSON.stringify('nombre'));
    let dPersonajes= (JSON.parse(person));
    let nombre10= document.querySelector('#nameP'); 
    nombre10.textContent = `${dPersonajes.nombre}`
    let dirImagen = dPersonajes.imagen
    imgPersonaje.setAttribute('src', dirImagen);
    let nom =dPersonajes.nombre
    let descrip = dPersonajes.descripcion


}

