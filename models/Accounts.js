import mongoose from "mongoose";
import bcrypt from "bcryptjs" // Importando bcryptjs

const accountSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Hook para criptografar a senha antes de salvar
accountSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });
  
  // Método para comparar senhas durante o login
  accountSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const Account = mongoose.model("Account", accountSchema)

export default Account;