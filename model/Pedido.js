const mongoose = require("../config/conexao");

const pedidoSchema = new mongoose.Schema({
  data: Date,
  valor: Number,
  nomeCli: {
    type: mongoose.Types.ObjectId,
    ref: "cliente",
  },
  nomeloja: String,
  codigoP: {
    type: mongoose.Types.ObjectId,
    ref: "produto",
  },
  foto: String,
});

const pedido = mongoose.model("pedido", pedidoSchema);

module.exports = pedido;
