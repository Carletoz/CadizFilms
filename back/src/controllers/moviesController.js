const { getMoviesService, postMovieService } = require("../services/moviesService");

const moviesController = async (req, res) => {
  const movies = await getMoviesService();
  res.status(200).send(movies);
}

const createMovie = async (req, res)=>{
  const {body} = req;
  try {
    await postMovieService(body)
    res.status(201).json({message:"La pelicula se ha creado exitosamente"})
  } catch (error) {
    res.status(500).json({error: "Error interno del servidor"})
  }
}

module.exports = { 
moviesController,
createMovie
};