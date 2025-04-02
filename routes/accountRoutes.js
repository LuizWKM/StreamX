import express from "express";
const accountRoutes = express.Router();
import accountController from "../controllers/accountController.js"

// Endpoint para cadastrar um usuário
accountRoutes.post("/account", accountController.createAccount);

// Endpoint para autenticação (login) da conta
accountRoutes.post("/auth", accountController.loginAccount)

export default accountRoutes;
