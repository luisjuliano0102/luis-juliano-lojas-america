const mongoose = require("../config/conexao");

const produtoSchema = new mongoose.Schema({
  nome: String,
  tamanho: Number,
  cor: String,
  codigo: Number,
  foto: String,
});

const produto = mongoose.model("produto", produtoSchema);

module.exports = produto;
