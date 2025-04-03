import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";

// Função para listar os filmes
const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAll();
        //Requisição feita com sucesso - Código 200 (OK)
        res.status(200).json({ movies: movies });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor ao tentar listar todos os filmes."})
    }
};

// Função para cadastrar filmes
const createMovie = async (req, res) => {
    try{
        // Capturando valores
        const {title, year, rate, duration, genre, extraInformation} = req.body;
        // Cadastrando no banco
        await movieService.Create(title, year, rate, duration, genre, extraInformation);
        res.sendStatus(201); // Código 201 (CREATED)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor ao tentar criar o filme."});
    }
};

// Função para deletar jogos
const deleteMovie = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            movieService.Delete(id);
            res.sendStatus(204); // Código 204 (NO CONTENT)
        } else {
            res.sendStatus(400); // Código 400 (BAD REQUEST)
            // Requisição foi mal formada
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor ao tentar deletar o jogo."});
    }
};

// Função para alterar um jogo
const updateMovie = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id;
            const {title, year, rate, duration, genre, extraInformation} = req.body;
            movieService.Update(id, title, year, rate, duration, genre, extraInformation);
            res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
        } else {
            res.sendStatus(400); // Código 400 (Bad Request): Requisição mal formada
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor ao atualizar o jogo."})
    }
};

// Função para buscar um único filme
const getOneMovie = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const movie = await movieService.getOne(id);
            if(!movie){
                res.sendStatus(404); //Código 404: NOT FOUND - Não encontrado
            } else {
                res.status(200).json({ movie });
            }
        } else {
            res.sendStatus(400); // Código 400: Bad Request
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500); // Erro interno do servidor
    }
};

export default { getAllMovies, createMovie, deleteMovie, updateMovie, getOneMovie };