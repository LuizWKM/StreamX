import mongoose from "mongoose";

const extraInfoSchema = new mongoose.Schema({
    director: String,
    movie_rating: Number
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rate: String,
    duration: Number,
    genre: String,
    extraInformation: [extraInfoSchema]
})

const Movie = mongoose.model("Movies", movieSchema);

export default Movie;