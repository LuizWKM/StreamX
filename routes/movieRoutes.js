import express from "express";
const movieRoutes = express.Router();
import movieController from "../controllers/movieController.js";

// Endpoint para listar todos os filmes
movieRoutes.get("/movies", movieController.getAllMovies);

// Endpoint para cadastrar um filme
movieRoutes.post("/movies", movieController.createMovie);

// Endpoint para excluir um jogo
movieRoutes.delete("/movies/:id", movieController.deleteMovie);

// Endpoint para alterar um jogo
movieRoutes.put("/movies/:id", movieController.updateMovie);

// Endpoint para listar um único jogo
movieRoutes.get("/movies/:id", movieController.getOneMovie);

export default movieRoutes;