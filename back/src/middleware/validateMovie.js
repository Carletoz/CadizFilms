module.exports = (req, res, next) => {
  const { title, year, duration, director, genre, rate, poster } = req.body;

  if (![title, year, duration, director, genre, rate, poster].every(Boolean))
    return res.status(400).json({ message: "faltan datos" });

  if (isNaN(year) || year < 0 || year.toString().length < 4 || year.toString().length > 4)
    return res.status(400).json({ message: "El año no es valido" });

  if (rate < 1 || rate > 10)
    return res
      .status(400)
      .json({ message: "La puntuacion debe ser entre 0 y 10" });

  next();
};
