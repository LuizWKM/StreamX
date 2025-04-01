import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.model("Accounts", userSchema)

export default User;