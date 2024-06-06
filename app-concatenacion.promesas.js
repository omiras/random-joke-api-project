const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function () {
    let url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(data => console.log(data));

    console.log("PATATA");
});