import accountService from '../services/accountservice.js'
import { ObjectId } from 'mongodb'
import jwt from "jsonwebtoken";
// JWTSecret
const JWTSecret = "apistreamx";
// Função para LOGIN do Usuário
const LoginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        // E-mail válido
        if (email != undefined) {
            const account = await userService.getOne(email)
            // Usuário encontrado
            if (account != undefined){
                // Senha correta
                if (user.password == password){
                    jwt.sign(
                        { id: account._id, email: account.email }, JWTSecret,
                        { expiresIn: "48h"}
                    )
                }
            }
        }
    }
}