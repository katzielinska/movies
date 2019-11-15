/*var movies = {
        "movieList": [{
                "title": "Isle of Dogs",
                "id": "dt__kig8PVU&t"
            },
            {
                "title": "Grand Budapest Hotel",
                "id": "1Fg5iWmQjwk"
            },
            {
                "title": "Moonrise Kingdom",
                "id": "n2igjYFojUo"
            },
            {
                "title": "Fantastic Mr Fox",
                "id": "n2igjYFojUo"
            },
            {
                "title": "The Darjeeling Limited",
                "id": "aO1bYukdvLI&t"
            },
            {
                "title": "The Life Aquatic with Steve Zissou",
                "id": "UpU0DZXTGA0"
            },
            {
                "title": "The Royal Tenenbaums",
                "id": "-DNAI9bhBFU"
            },
            {
                "title": "Rushmore",
                "id": "GxCNDpvGyss"
            },
            {
                "title": "Bottle Rocket",
                "id": "JJPQ-NnjZR0"
            }

        ]

    },
    */




//the url is our endpoint and contains the data that we want to work with
let url = 'http://www.omdbapi.com/?i=tt2278388&apikey=59e0530';
//TODO: copy/paste the link into a browser, so that you can see the data you are going to work with
//The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise
fetch(url)
    //when the promise is resolved we extract the JSON part of the response object
    .then(response => {
        return response.json();
        
    })
    
    //then we can work with the JSON data
    .then(data => {
        // We iterate through all the objects
        data.forEach(movie => {
            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            //TODO: set the h1 to contain the title of the movie
            h1.innerHTML = movie.title;
            // Create a p and set the text content to the film's description
            const p = document.createElement('p');
            p.innerHTML = movie.description;
            //TODO: limit the movie description to 300 chars, and then output it to p

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);

            // TODO: Append the cards to the container element
            container.appendChild(card);
        })
    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    })