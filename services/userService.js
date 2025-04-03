import User from "../models/Users.js"

class userService {
    // Criar usuário da conta
    async Create(name)
    {
        try {
            const newUser = new User({
                name
            });
            await newUser.save();
        } catch (error) {
            console.log(error)
        }
    }

    //Mostra todos os usuários da conta
    async getAll(){
        try{
            const users = await User.find();
            return users;
        } catch (error){
            console.log(error)
        }
    }

    // Função para deletar usuários.
    async Delete(id) {
        try {
            await User.findByIdAndDelete(id);
            console.log(`Usuário que tem a id: ${id} foi excluido.`);
        } catch (error) {
            console.log(error);
        }
    }

    // Função para alterar usuários
    async Update(id, name){
        try{
            await User.findByIdAndUpdate(id, {
                name
            });
            console.log(`Dados do usuário com a id ${id} alterados com sucesso.`)
        } catch (error) {
            console.log(error);
        }
    }

    // Função para listar um usuário
    async getOne(id){
        try{
            const user = await User.findOne({ _id: id});
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}


export default new userService;