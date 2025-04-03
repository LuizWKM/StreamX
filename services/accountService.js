import Account from "../models/Accounts.js"

class accountService {
    // Função para criar conta
    async Create(email, password){
        try{
            const newAccount = new Account({
                email,
                password
            });
            await newAccount.save();
            return newAccount;
        } catch (error){
            console.log(error);
        }
    }
    // Função para listar conta
    async getOne(email){
        try{
            const account = await Account.findOne({ email: email });
            return account;
        } catch (error) {
            console.log(error);
        }
    }
}
export default new accountService();