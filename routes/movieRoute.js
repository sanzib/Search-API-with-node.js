import express from "express";
const router = express.Router();
import movieController from "../controller/movieController.js";

// const insertMovies = async () => {
//   try {
//     const docs = await movie.insertMany(movieJson);
//     return Promise.resolve(docs);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
// insertMovies()
//   .then((docs) => console.log(docs))
//   .catch((error) => console.log(error));

router.get("/", movieController.get);

export default router;
