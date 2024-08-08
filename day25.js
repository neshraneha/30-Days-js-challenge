// Task 1: Initialize a new project directory and set up the basic HTML structure for the movie search app.
// Task 2: Add a basic. CSS file to style the movie search app, Including a container for displaying movie search results.
// Task 3: Use the fetch API to get movie data from a public movie API (eg. OMDS API or The Movie Database API), Log the response data to the console.
// Task 4: Parse the movie data and display the movie title, poster, and release year on the web page.
// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.
// Task 6: Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console.
// Task 7: Modify the search results to include a "More Info" button for each movie, When clicked, fetch and display additional details about the movie, such as
// the plot, director, and actors.
// Task 8: Create a modal or a new section on the page to display the detailed movie information.
// Task 9: Add CSS styles to improve the layout and design of the search results and detailed movie information.
// Task 10: Add CSS animations or transitions to make make t the movie search app more interactive and visually appealing.

const apiKey = 'your_api_key';  // Replace with your API key from OMDb or TMDB

// Initial fetch to test the API
fetch(`https://www.omdbapi.com/?s=batman&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetch(https://www.omdbapi.com/?s=${query}&apikey=${apiKey})
        .then(response => response.json())
        .then(data => {
            const movies = data.Search;
            let output = '';
            if (movies) {
                movies.forEach(movie => {
                    output += `
                        <div class="movie">
                            <img src="${movie.Poster}" alt="${movie.Title}">
                            <h3>${movie.Title}</h3>
                            <p>${movie.Year}</p>
                            <button class="more-info-button" data-id="${movie.imdbID}">More Info</button>
                        </div>
                    `;
                });
                document.getElementById('movie-results').innerHTML = output;
            } else {
                document.getElementById('movie-results').innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Event listener for "More Info" buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('more-info-button')) {
        const movieID = e.target.getAttribute('data-id');
        fetch(https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey})
            .then(response => response.json())
            .then(movie => {
                showMovieDetails(movie);
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }
});

// Function to display movie details
function showMovieDetails(movie) {
    const modalContent = `
        <h2>${movie.Title}</h2>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <button id="close-details">Close</button>
    `;
    document.querySelector('.modal-content').innerHTML = modalContent;
    document.getElementById('movie-modal').style.display = 'flex';

    // Close the modal when the "Close" button is clicked
    document.getElementById('close-details').addEventListener('click', () => {
        document.getElementById('movie-modal').style.display = 'none';
    });
}