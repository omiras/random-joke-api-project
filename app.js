// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');
button.addEventListener('click', async function () {

    // 2. Modificar la URL para que ahora tenga en cuenta la category. Tenéis que obtener el valor del <select> que ha seleccionado el usuario. Por ejemplo, si ha seleccionado "food", debes construir la query string category=food
    // https://api.chucknorris.io/jokes/random?category=dev

    // Primero, hay que recoger el .value del <select>
    const categoryJoke = document.querySelector('#category');

    // variable con la URL base. En caso de que el usuario haya escogido una categoría, entonces le concatenamos la query string
    let url = "https://api.chucknorris.io/jokes/random";

    // eso sería lo mismo que if (categoryJoke.value != "")
    if (categoryJoke.value) {
        url += "?category=" + categoryJoke.value;
    }

    // Segundo, añadir la query string al final de la URL del fetch
    const response = await fetch(url);
    console.log("objeto response", response);

    const data = await response.json();
    console.log("objeto data", data);


    jokeDIV.textContent = data.value;

});

async function fillCategories() {
    // 1. A hacer un GET a la URL que nos das las categorías
    const response = await fetch("https://api.chucknorris.io/jokes/categories");

    const categories = await response.json();
    console.log("🚀 ~ file: app.js:38 ~ fillCategories ~ categories:", categories)

    console.log("response", response)

    // 2. Vamos a iterar por el array de categorías
    categories.forEach(c => {
        console.log(c);
        // 3. Vamos a crear tantas categorías con crateElement como elementos hay en el array

        // 1. Crear la categoria con createElement. ('option')
        const option = document.createElement('option');
        // 2. Rellenar sus propiedades adecuadamente
        // 2.1 .value <-- este es el valor que identifica esa opción
        // 2.2 .textContent <-- Lo que mostramos al usuario
        option.value = c;
        option.textContent = c;


        // 3. Poner esta option como hija de #category
        document.querySelector('#category').appendChild(option);

    });

}

fillCategories();

// Errores comunes

// 1. No poner bien la URL de la APIs de la cual quieres recibir la información
//  await fetch("https://api.chucknorris.io/jokes/random");

// 2. No saber interpretar el tipo de dato que os viene de la API
// La forma más fácil de interpertar la estructura de datos que te devuelve la API-->
// 1. console.log(data) --> Mostrar por consola los datos de la API antes de hacer nada
// 2. En la página Web de la API, existe documentación con los campos y estructura de datos que devuelve la API

// 3. No usar el ejercicio de chuck norris como base. Esta bien mirar como se hace el fetch en otros ejercicios. No copiar y pegar, escribirlo todo para que se vaya quedando e interorizando