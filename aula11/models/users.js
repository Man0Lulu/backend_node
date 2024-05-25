const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
email: String,
senha: String,
salto: String
});

module.exports = mongoose.model("Usuario", userSchema);