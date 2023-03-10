const Pedido = require("../model/Pedido");
const Cliente = require("../model/Cliente");
const Produto = require("../model/Produto");

function abreadd(req, res) {
  Cliente.find({}, function (err, clientes) {
    Produto.find({}, function (err, produtos) {
      res.render("pedido/add", { Clientes: clientes, Produtos: produtos });
    });
  });
}

function add(req, res) {
  let pedido = new Pedido({
    valor: req.body.valor,
    data: new Date(),
    nomeCli: req.body.nomeCli,
    nomeloja: req.body.nomeloja,
    codigoP: req.body.codigoP,
    foto: req.file.filename,
  });

  pedido.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/pedido/lst");
    }
  });
}

function list(req, res) {
  Pedido.find({})
    .populate("nomeCli")
    .populate("codigoP")
    .exec(function (err, pedidos) {
      res.render("pedido/lst", { Pedidos: pedidos });
    });
}

function filtro(req, res) {
  Pedido.find(
    { titulo: new RegExp(req.body.pesquisar, "i") },
    function (err, pedidos) {
      res.render("pedido/lst", { Pedidos: pedidos });
    }
  );
}

function del(req, res) {
  Pedido.findByIdAndDelete(req.params.id, function (err, pedidos) {
    res.redirect("/admin/pedido/lst");
  });
}

function abreedt(req, res) {
  Pedido.findById(req.params.id, function (err, pedido) {
    Cliente.find({}).exec(function (err, clientes) {
      Produto.find({}).exec(function (err, produtos) {
        res.render("pedido/edt", {
          Pedido: pedido,
          Clientes: clientes,
          Produtos: produtos,
        });
      });
    });
  });
}

function edt(req, res) {
  Pedido.findByIdAndUpdate(
    req.params.id,
    {
      valor: req.body.valor,
      data: new Date(),
      nomeCli: req.body.nomeCli,
      nomeloja: req.body.nomeloja,
      codigoP: req.body.codigoP,
      foto: req.file.filename,
    },
    function (err, pedido) {
      res.redirect("/admin/pedido/lst");
    }
  );
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedt,
  edt,
  del,
};
