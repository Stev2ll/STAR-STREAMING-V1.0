const apiKey = '1586880cc2f837c3ab71e3fc1ff8adf8';
const baseUrl = 'https://api.themoviedb.org/3';
const moviesContainer = document.getElementById('movies-container');

// Función para obtener las últimas películas
async function getLatestMovies() {
    const response = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=es-ES`);
    const data = await response.json();
    displayMovies(data.results);
}

// Función para mostrar las películas en la página
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.release_date}</p>
        `;

        moviesContainer.appendChild(movieElement);
    });
}

// Llamada a la función para obtener y mostrar las películas
getLatestMovies();
