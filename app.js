// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

const jokeCategories = document.getElementById('joke-categories');

// Function to fetch categories and populate the select element
async function fetchCategories() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const categories = await response.json();
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            jokeCategories.appendChild(option);
        });
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

async function fetchJoke(category) {
    const url = category 
        ? `https://api.chucknorris.io/jokes/random?category=${category}`
        : 'https://api.chucknorris.io/jokes/random';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        jokeDIV.textContent = data.value;
    } catch (error) {
        console.error('Fetch error: ', error);
        jokeDIV.textContent = 'Failed to fetch joke!';
    }

}

// Event listener for the button to fetch a joke
button.addEventListener('click', function() {
    const selectedCategory = jokeCategories.value;
    fetchJoke(selectedCategory);
});


// Fetch categories on page load
fetchCategories();

//check