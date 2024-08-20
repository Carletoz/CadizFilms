const Movie = require("../models/Movie");

module.exports = {
  getMoviesService: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      throw error.message
    }
  },

  postMovieService: async (movie) => {
    try {
      await Movie.create(movie)
    } catch (error) {
      throw error.message
    }
  }
};