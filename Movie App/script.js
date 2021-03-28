const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=251f7e047fb5c1f8313d98a307e6e625&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=251f7e047fb5c1f8313d98a307e6e625&query="'

const main = document.getElementById('main')

const form = document.getElementById('form')

const search = document.getElementById('search')

const more = document.getElementById('more')

getMovies()

let current = 1;

function incrementByOne() {
    let page = current++;
   
        getMovies(page)
    
}

async function getMovies(page) {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=251f7e047fb5c1f8313d98a307e6e625&page=${page}`)
    const data = await res.json()

    showMovies(data.results)
    console.log(data.results)
}

async function searchMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies2(data.results)
    console.log(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movies) => {
        const { title, poster_path, vote_average, overview } = movies

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
               ${overview}
            </div>
        `
        more.innerHTML = '<button id="moreButton">More</button>'
        main.appendChild(movieEl)
    })
}

function showMovies2(movies) {
    main.innerHTML = ''

    movies.forEach((movies) => {
        const { title, poster_path, vote_average, overview } = movies

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
               ${overview}
            </div>
        `
        more.innerHTML = ''
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        searchMovies(SEARCH_API + searchTerm)
  
         

        search.value = ''
    
    } else {
        window.location.reload()
    }
})

more.addEventListener('click', incrementByOne);







