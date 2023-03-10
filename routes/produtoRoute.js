const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const produtoController = require("../controller/produtoController");

router.get("/produto/add", produtoController.abreadd);
router.post("/produto/add", produtoController.add);
router.get("/produto/lst", produtoController.list);
router.post("/produto/lst", produtoController.filtro);
router.get("/produto/edt/:id", produtoController.abreedt);
router.post("/produto/edt/:id", produtoController.edt);
router.get("/produto/del/:id", produtoController.del);

module.exports = router;
