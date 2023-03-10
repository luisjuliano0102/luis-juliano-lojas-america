const mongoose = require("../config/conexao");

const clienteSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  rg: String,
  foto: String,
});

const cliente = mongoose.model("cliente", clienteSchema);

module.exports = cliente;
