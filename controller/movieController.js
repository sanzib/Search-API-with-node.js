import movie from "../models/movie.js";
//import movieJson from "../config/movies.json";

class movieController {
  static get = async (req, res) => {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 5;
      const search = req.query.search || "";
      let sort = req.query.sort || "rating";
      let genre = req.query.genre || "All";
      const genreOption = [
        "Action",
        "Thriller",
        "Romace",
        "Fantasy",
        "Drama",
        "Adventure",
        "Sci-fi",
        "Musical",
        "Family",
      ];
      genre === "All"
        ? (genre = [...genreOption])
        : (genre = req.query.genre.split(","));
      req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
      let sortBy = {};
      if (sort[1]) {
        sortBy[sort[0]] = sort[1];
      } else {
        sortBy[sort[0]] = "asc";
      }

      const movies = await movie
        .find({
          name: new RegExp(search, "i"),
        })
        .where("genre")
        .in([...genre])
        .sort(sortBy)
        .skip(page * limit)
        .limit(limit);
      // console.log(movies);

      const total = await movie.countDocuments({
        genre: { $in: [...genre] },
        name: new RegExp(search, "i"),
      });
      const response = {
        error: false,
        total,
        page: page + 1,
        limit,
        genres: genreOption,
        movies,
      };
      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
export default movieController;
