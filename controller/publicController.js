const Pedido = require("../model/Pedido");

function abreindex(req, res) {
  Pedido.find({})
    .populate("nomeCli")
    .populate("codigoP")
    .exec(function (err, pedidos) {
      res.render("public/index", { Pedidos: pedidos });
    });
}

module.exports = {
  abreindex,
};
