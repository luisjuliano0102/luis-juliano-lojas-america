const Produto = require("../model/Produto");

function abreadd(req, res) {
  res.render("produto/add");
}

function add(req, res) {
  let produto = new Produto({
    nome: req.body.nome,
    tamanho: req.body.tamanho,
    cor: req.body.cor,
    codigo: req.body.codigo,
  });

  produto.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/produto/lst");
    }
  });
}

function list(req, res) {
  Produto.find({}, function (err, produtos) {
    res.render("produto/lst", { Produtos: produtos });
  });
}

function filtro(req, res) {
  Produto.find(
    { nome: new RegExp(req.body.pesquisar, "i") },
    function (err, produtos) {
      res.render("produto/lst", { Produtos: produtos });
    }
  );
}

function del(req, res) {
  Produto.findByIdAndDelete(req.params.id, function (err, produto) {
    res.redirect("/admin/produto/lst");
  });
}

function abreedt(req, res) {
  Produto.findById(req.params.id, function (err, produto) {
    res.render("produto/edt", { Produto: produto });
  });
}

function edt(req, res) {
  Produto.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      tamanho: req.body.tamanho,
      cor: req.body.cor,
      codigo: req.body.codigo,
    },
    function (err, produto) {
      res.redirect("/admin/produto/lst");
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
