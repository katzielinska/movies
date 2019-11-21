//An array with movie data

var moviesJson = {
    "movieList": [
    {"title": "Isle of Dogs", "ytID": "dt__kig8PVU&t",},
    {"title": "Grand Budapest Hotel", "ytID": "1Fg5iWmQjwk",},
    {"title": "Moonrise Kingdom","ytID": "_eOI3AamSm8",},
    {"title": "Fantastic Mr. Fox","ytID": "n2igjYFojUo",},
    {"title": "The Darjeeling Limited","ytID": "aO1bYukdvLI&t",},
    {"title": "The Life Aquatic with Steve Zissou","ytID": "UpU0DZXTGA0",},
    {"title": "The Royal Tenenbaums","ytID": "-DNAI9bhBFU",},
    {"title": "Rushmore","ytID": "GxCNDpvGyss",},
    {"title": "Bottle Rocket","ytID": "JJPQ-NnjZR0",}]}

//A variable storing the link that will be fetched
let url = "http://www.omdbapi.com/?apikey=59e0530&t=";

//A base for the YouTube embed link

let yt = "http://www.youtube.com/embed/";

let container = document.getElementById('movies-list');

//Iterating through each movies in movies.JSON to fetch data
for (let i = 0; i < moviesJson.movieList.length; i++) {

    //creating a new link for each movie that consists of the base link and added movie title (spaces are replaced by "+")
    let movieURL = url + moviesJson.movieList[i].title.replace(/( )/g, "+");

    let ytURL = yt + moviesJson.movieList[i].ytID;

    fetch(movieURL)
        //when the promise is resolved we extract the JSON part of the response object
        .then(response => {
            return response.json();
        })
        //then we can work with the JSON data
        .then(data => {

            //Calculating the age of the movie

            let date = new Date();
            let year = date.getFullYear();
            let age = year - data.Year;

            //Creating a card for each movie and populating the element with data 
            container.innerHTML += `
            <article class="movie-card" >
            <div class ="movie-poster">
            <span class="poster-fill">
            <img src="${data.Poster}" alt="${data.Title} Poster">
            </span>
            <span class="poster-featured">
            <img src="${data.Poster}" alt="${data.Title} Poster">
            </span>
            </div>
            <div class="trailer">
            <a href="#${moviesJson.movieList[i].ytID}" class="video"><img alt="play-button" src="images/play-button (2).svg"></a>
            <div class="lightbox short-animate" id="${moviesJson.movieList[i].ytID}">
            <iframe title="Movie trailer" class="short-animate" src="${ytURL}" allowfullscreen></iframe>
            </div>
            <div class="lightbox-controls" >
             <a class="close-lightbox" href="#!">Close Lightbox</a>
            </div>
            </div>
            <div class="movie-details">
            <h1 class="title"> ${data.Title}</h1>
            <ul class="year"><li>IMDB Rating: ${data.imdbRating}</li><li> ${data.Year} (${age} years old)</li></ul>
            <p class="plot">${data.Plot} </p>
            <div class="movie-info"> 
            <p><strong>Directed by:</strong> ${data.Director}  </p>
            <p><strong>Starring: </strong>${data.Actors} </p>
            </div>
            </div>
            </a>
            </article>`
        })
}