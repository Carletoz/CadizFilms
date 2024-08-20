const moviesContainer = document.getElementById('movies-container')

const renderCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.classList.add('movieTitle');
    title.textContent = movie.title;

    const poster = document.createElement('img');
    poster.classList.add('moviePoster');
    poster.src = movie.poster;

    const year = document.createElement('p');
    year.classList.add('movieYear');
    year.textContent = movie.year;

    const duration = document.createElement('p');
    duration.classList.add('movieDuration');
    duration.textContent = movie.duration;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(duration);
    moviesContainer.appendChild(card);
  });
}

module.exports = renderCards;
