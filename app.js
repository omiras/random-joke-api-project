// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');


button.addEventListener('click', async function() {
    // Hacer una petición GET a la API que nos ofrece el chiste de Chuck Norris. Existe un método nativo de JS - fetch, pasar como parametro la URL de la API que queremos consumir. El método fetch devuelve la respuesta de la API

   const response = await fetch("https://api.chucknorris.io/jokes/random");
   console.log(response)

    //Convertir el JSON que nos devuelve la API a un tipo de dato que entienda JS 
    const data = await response.json();
console.log(data)
    // Modificar el DOM para mostrar el chiste al usuario
    jokeDIV.textContent = data.value;

})