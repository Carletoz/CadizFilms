const axios = require("axios");

const genres = [
  "Action",
  "Fantasy",
  "Comedy",
  "Drama",
  "Sci-fi",
  "Terror",
  "Adventure",
  "Romance",
];

const btnSubmit = document.getElementById("btnSubmit");
const btnCleaner = document.getElementById("btnCleaner");

const options = document.getElementById("options");
const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

const renderGenres = () => {
  options.innerHTML = "";

  for (const genre of genres) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.id = genre;
    input.name = "genre[]";
    input.value = genre;

    label.htmlFor = genre;
    label.textContent = genre;

    options.appendChild(label);
    options.appendChild(input);
  }
  return options;
};

renderGenres();

const validateCheckboxes = () => {
  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  const genres = [];

  for (const item of checkboxes) {
    if (item.checked) {
      item.classList.add("selected");
      genres.push(item.id);
    }
  }
  return genres;
};

const handlerSubmit = (event) => {
  event.preventDefault();
  const genres = validateCheckboxes();

  if (
    ![
      title.value,
      year.value,
      director.value,
      duration.value,
      rate.value,
      poster.value,
      genres,
    ].every(Boolean)
  )
    return alert("Faltan llenar campos");

  const movie = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    rate: rate.value,
    poster: poster.value,
    genre: genres,
  };

  const {data} = axios.post("http://localhost:3000/movies", movie);

  console.log(data);
  alert("Pelicula enviada");

  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  rate.value = "";
  poster.value = "";

  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  for (const item of checkboxes) {
    item.checked = false;
    item.classList.remove("selected");
  }
};

const clearInputs = () => {
  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  rate.value = "";
  poster.value = "";

  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  for (const item of checkboxes) {
    item.checked = false;
    item.classList.remove("selected");
  }
};

btnSubmit.addEventListener("click", handlerSubmit);
btnCleaner.addEventListener("click", clearInputs);
