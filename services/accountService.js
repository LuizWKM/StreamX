import Account from "../models/Accounts.js"

class accountService {

    async Create(email, password){
        try{
            const newAccount = new Account({
                email,
                password
            });
            await newAccount.save();
        } catch (error){
            console.log(error);
        }
    }

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