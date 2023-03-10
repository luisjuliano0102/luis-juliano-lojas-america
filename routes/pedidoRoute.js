const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const pedidoController = require("../controller/pedidoController");

router.get("/pedido/add", pedidoController.abreadd);
router.post("/pedido/add", upload.single("foto"), pedidoController.add);
router.get("/pedido/lst", pedidoController.list);
router.post("/pedido/lst", pedidoController.filtro);
router.get("/pedido/edt/:id", pedidoController.abreedt);
router.post("/pedido/edt/:id", upload.single("foto"), pedidoController.edt);
router.get("/pedido/del/:id", pedidoController.del);

module.exports = router;
