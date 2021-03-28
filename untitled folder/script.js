const movie_container = document.getElementById('movie-container');
const result = document.getElementById('result');
const form = document.getElementById('form');




// Search for movies
async function searchMovies(movie) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=546a6ce3&s=${movie}`);
    const data = await res.json();

    showMovies(data);

}

// Get Movie Details
function getMovieDetails(title, image, year) {
    result.innerHTML = `
        <div class="movieDetails">
            <h1>${title}</h1>
            <h2>(${year})</h2>
            <img src=${image} class="image"/>
            <button class="prev" onClick="previous()">Prev</button>
        </div>`
}


// Show movies

function showMovies(data) {
    console.log(data)
    result.innerHTML = `
    <ul class="movies">
        ${data.Search.map(data => `
            <div class="movies">
            <li>
                <strong>${data.Title}</strong>
                <button class="btn" data-poster="${data.Poster}" data-title="${data.Title}" data-type="${data.Type}" data-year="${data.Year}">Get Details</button>
            </li>
            <div>`)
        .join('')}
    </ul>`;
}


// Event Listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if(!searchTerm) {
        alert('Please enter in a search term');
    } else {
        searchMovies(searchTerm);
    }
})


result.addEventListener('click', (e) => {
    const clickDetails = e.target;

    if (clickDetails.tagName === "BUTTON") {
        const title = clickDetails.getAttribute('data-title');
        const image = clickDetails.getAttribute('data-poster');
        const year = clickDetails.getAttribute('data-year');

        console.log(title, image, year)
        getMovieDetails(title, image, year)

    }
})

function previous() {
    location.reload()
}


