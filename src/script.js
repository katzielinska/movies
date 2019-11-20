//An array with movie data

var moviesJson = {
    "movieList": [{
            "title": "Isle of Dogs",
            "ytID": "dt__kig8PVU&t",
            "id": "tt5104604"
        },
        {
            "title": "Grand Budapest Hotel",
            "ytID": "1Fg5iWmQjwk",
            "id": "tt5104604",
        },
        {
            "title": "Moonrise Kingdom",
            "ytID": "n2igjYFojUo",
            "id": "tt5104604"
        },
        {
            "title": "Fantastic Mr. Fox",
            "ytID": "n2igjYFojUo",
            "id": "tt5104604"
        },
        {
            "title": "The Darjeeling Limited",
            "ytID": "aO1bYukdvLI&t",
            "id": "tt5104604"
        },
        {
            "title": "The Life Aquatic with Steve Zissou",
            "ytID": "UpU0DZXTGA0",
            "id": "tt5104604"
        },
        {
            "title": "The Royal Tenenbaums",
            "ytID": "-DNAI9bhBFU",
            "id": "tt5104604"
        },
        {
            "title": "Rushmore",
            "ytID": "GxCNDpvGyss",
            "id": "tt5104604"
        },
        {
            "title": "Bottle Rocket",
            "ytID": "JJPQ-NnjZR0",
            "id": "tt5104604"
        }

    ]

}




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

            let date = new Date();
            let year = date.getFullYear();
            let age = year - data.Year;

            //Creating a card for each movie and populating the element with data 
            container.innerHTML += `
            <article class="movie-card" >

            <div class ="movie-poster">
            <span class="poster-fill">
            <img src="${data.Poster}">
            </span>
            <span class="poster-featured">
            <img src="${data.Poster}">
            </span>
            </div>

            <div class="trailer">
            <a href="#video" class="video wiggle"><img src="images/play-button (2).svg"></a>
            <div class="lightbox short-animate" id="video">
            <iframe class="short-animate" src="${ytURL}" allowfulscreen></iframe>
            </div>
            <div id="lightbox-controls" >
             <a id="close-lightbox" href="#!">Close Lightbox</a>
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


            // Creating an iframe that appears when the play button is clicked
            //   document.querySelector('video').onclick = () => {
            //       console.log(ytURL);

            //       basicLightbox.create(`
            //         <iframe width="560" height="315" src="${ytURL}" frameborder="0" allowfullscreen></iframe>
            //     `).show()
            //   }

        })

}










//<iframe class="hide mediabox" src="${ytURL}"></iframe>

//<iframe src="${ytURL}"></iframe>
{
    /* <iframe src="${ytURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }

// <div class="trailer">
// <a href="#video" class="video wiggle"><img src="images/play-button (2).svg"></a>
// <div class="lightbox short-animate" id="video">
// <iframe class="short-animate" src="${ytURL}" allowfulscreen></iframe>
// </div>
// <div id="lightbox-controls" >
//  <a id="close-lightbox" href="#!">Close Lightbox</a>
// </div>
// </div>