import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  rating: {
    rating: Number,
    //required: true,
  },
});

const movie = mongoose.model("movie", movieSchema);
export default movie;
