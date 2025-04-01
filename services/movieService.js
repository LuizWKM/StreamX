import Movie from "../models/movies.js"

class movieService {
    // Função para listar todos os filmes.
    async getAll() {
        try{
            const movies = await Movie.find();
            return movies
        } catch (error) {
            console.log(error);
        }
    }
    
    // Função para cadastrar filmes.
    async Create(title, year, rate, duration, genre, extraInformation){
        try{
            const newMovie = new Movie({
                title,
                year,
                rate,
                duration,
                genre,
                extraInformation
            });
            await newMovie.save();
        } catch (error) {
            console.log(error);
        }
    }

    // Função para deletar filmes.
    async Delete(id) {
        try {
            await Game.findByIdAndDelete(id);
            console.log(`Filme que tem a id: ${id} foi excluido.`);
        } catch (error) {
            console.log(error);
        }
    }

    // Função para alterar filmes
    async Update(id, title, year, rate, duration, genre, extraInformation){
        try{
            await Movie.findByIdAndUpdate(id, {
                title,
                year,
                rate,
                duration,
                genre,
                extraInformation
            });
            console.log(`Dados do filme com o id ${id} alterados com sucesso.`)
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(id){
        try{
            const movie = await Movie.findOne({ _id: id});
            return movie;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new movieService();