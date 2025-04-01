import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    email: String,
    password: Number
})

const Account = mongoose.model("Accounts", accountSchema)

export default Account;