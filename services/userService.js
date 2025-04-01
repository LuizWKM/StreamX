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
}