import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

// Endpoint para listar todos os usuários
userRoutes.get("/users", userController.getAllUsers);

// Endpoint para cadastrar um usuário
userRoutes.post("/users", userController.createUser);

// Endpoint para excluir um usuário
userRoutes.delete("/users/:id", userController.deleteUser);

// Endpoint para alterar um usuário
userRoutes.put("/users/:id", userController.updateUser);

// Endpoint para listar um único usuário
userRoutes.get("/users/:id", userController.getOneUser);

export default userRoutes;