import express from "express"
import Movies from "./models/Movies.js"
import Account from "./models/Accounts.js"
import mongoose from "./config/db-connection.js"
const app = express();

// Importando as rotas (endpoints) de Filmes
import movieRoutes from './routes/movieRoutes.js'
// Importando as rotas (endpoints) de Contas
import accountRoutes from "./routes/accountRoutes.js"
// Importando as rotas (endpoints) de Usuários
import userRoutes from "./routes/userRoutes.js"

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', movieRoutes)
app.use('/', accountRoutes)
app.use('/', userRoutes);

// Iniciando a conexão com o banco de dados do MongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/api-streamX")

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});