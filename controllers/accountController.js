import accountService from '../services/accountService.js'
import { ObjectId } from 'mongodb'
import jwt from "jsonwebtoken";
// JWTSecret
const JWTSecret = "apistreamx";

// Cadastrando uma conta
const createAccount = async (req, res) => {
    try { 
        const {email, password} = req.body;
        // HASH DE SENHA
        await accountService.Create(email, password);
        res.sendStatus(201); // Cod. 201 (CREATED)
    } catch (error) {
        console.log(error)
        res.sendStats(500); // Erro interno do servidor
    }
}

// Função para Login da conta
const loginAccount = async (req, res) => {
    try {
        const {email, password} = req.body;
        // E-mail válido
        if (email != undefined) {
            const account = await accountService.getOne(email)
            // Usuário encontrado
            if (account != undefined){
                // Senha correta
                if (user.password == password){
                    // Gerando o token
                    jwt.sign(
                        { id: account._id, email: account.email }, JWTSecret,
                        { expiresIn: "48h"},
                        (error, token) => {
                            if(error) {
                                res.status(400).json({ error: "Erro ao gerar o token"}); //Bad request
                            } else {
                                res.status(200).json({ token: token});
                            }
                        });
                        // Senha incorre
                } else {
                    res.status(401).json({ error: "Credenciais inválidas" }); // Não autorizado (Unauthorized)
                }
            // Usuário não encontrado
            } else {
                res.status(404).json({error: "Usuário não encontrado."}) //Not found
            }
        // E-mail inválido ou vazio
        } else {
            res.status(400).json({error: "O e-mail enviado é inválido."}) // Bad request
        }
    } catch(error){
        console.log(error);
        res.sendStatus(500); //Erro interno do servidor
    }
};
export default {createAccount ,loginAccount}