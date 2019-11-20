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





//the url is our endpoint and contains the data that we want to work with
// let id = [
//     "tt5104604",
//     "tt2278388",
//     "tt0432283",
//     "tt1748122",
//     "tt0838221",
//     "tt0362270",
//     "tt0265666",
//     "tt0128445",
//     "tt0115734"
// ]



let url = "http://www.omdbapi.com/?apikey=59e0530&t=";

let yt = "https://www.youtube.com/watch?v=";

let container = document.getElementById('movies-list');

let moviePage = document.getElementById('moviePage');

for (let i = 0; i < moviesJson.movieList.length; i++) {

    let movieURL = url + moviesJson.movieList[i].title.replace(/( )/g, "+");

    let ytURL = yt + moviesJson.movieList[i].ytID;

    //The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise

    fetch(movieURL)
        //when the promise is resolved we extract the JSON part of the response object
        .then(response => {
            return response.json();

        })


        //then we can work with the JSON data
        .then(data => {
            console.log(data);


            container.innerHTML += `
            <article class="movie-card" >
            <div class="movie-card-header" >
            <div class ="movie-poster">
            <span class="poster-fill">
            <img src="${data.Poster}">
            </span>

            <span class="poster-featured">
            <img src="${data.Poster}">
            </span>
            </div>

            <div class="trailer">
            
            
            <button class="video" id="videoLink"><img src="images/play-button (2).svg"></button>
            
            </div>
            </div>

            <div class="movie-details">
            
            <h1 class="title"> ${data.Title}</h1>
            <p class="year"> ${data.Year}</p>
            
            <p class="plot">${data.Plot} </p>

            <div class="movie-info"> 
            <p><strong>Directed by:</strong> ${data.Director}  </p>
            <p><strong>Starring: </strong>${data.Actors} </p>
            
            </div>
            </div>

            
            
            <div>
              
              
            </div>
          </a>
          </article>`

          document.querySelector('button.video').onclick = () => {

            basicLightbox.create(`
                <iframe width="560" height="315" src="${ytURL}" frameborder="0" allowfullscreen></iframe>
            `).show()
        
        }

            //    var posters = document.getElementsByClassName('poster');
            //    for(i = 0; i < posters.length; i++) {
            //     posters[i].setAttribute('src', data.Poster);
            //        } 

            //    var titles = document.getElementsByClassName('title');
            //    for(i = 0; i < titles.length; i++) {
            //     titles[i].innerHTML = data.Title;
            // } 

        })
        .catch(err => {
            // Do something for an error here
            const errorMessage = document.createElement('span');
            errorMessage.textContent = `Gah, it's not working!`;
            document.body.appendChild(errorMessage);
        })

}


//<iframe class="hide mediabox" src="${ytURL}"></iframe>