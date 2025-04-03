import userService from '../services/userService.js'
import { ObjectId } from "mongodb";

const createUser = async(req, res) => {
    try{
       const name = req.body.name;
       await userService.Create(name);
       res.sendStatus(201); // Cod. 201 (CREATED)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor ao tentar criar o usuário." })
    }
};

const getAllUsers = async (req, res) => {
    try{
        const users = await userService.getAll();
        res.status(200).json({ users: users});
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor ao tentar  listar todos os usuários." })
    }
};

// Função para deletar usuário
const deleteUser = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            userService.Delete(id);
            res.sendStatus(204); // Código 204 (NO CONTENT)
        } else {
            res.sendStatus(400); // Código 400 (BAD REQUEST)
            // Requisição foi mal formada
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor ao tentar deletar o usuário."});
    }
};

// Função para alterar um jogo
const updateUser = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id;
            const name = req.body.name;
            userService.Update(id, name);
            res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
        } else {
            res.sendStatus(400); // Código 400 (Bad Request): Requisição mal formada
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor ao atualizar o usuário."})
    }
};

// Função para buscar um único filme
const getOneUser = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const user = await userService.getOne(id);
            if(!user){
                res.sendStatus(404); //Código 404: NOT FOUND - Não encontrado
            } else {
                res.status(200).json({ user });
            }
        } else {
            res.sendStatus(400); // Código 400: Bad Request
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor ao tentar listar o usuário."});
    }
};

export default {createUser, getAllUsers, deleteUser, updateUser, getOneUser}