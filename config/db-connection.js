// Importando o mongoose
import mongoose from "mongoose";

// Importando as chaves secretas
import dotenv from 'dotenv';
dotenv.config();

const connect = () => {
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@streamx.ygunjnm.mongodb.net/streamx?retryWrites=true&w=majority&appName=StreamX`
);
const connection = mongoose.connection;
connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
});
connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
});
}

connect();
export default mongoose;