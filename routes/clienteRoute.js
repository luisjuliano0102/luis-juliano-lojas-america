const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const clienteController = require("../controller/clienteController");

router.get("/cliente/add", clienteController.abreadd);
router.post("/cliente/add", upload.single("foto"), clienteController.add);
router.get("/cliente/lst", clienteController.list);
router.post("/cliente/lst", clienteController.filtro);
router.get("/cliente/edt/:id", clienteController.abreedt);
router.post("/cliente/edt/:id", upload.single("foto"), clienteController.edt);
router.get("/cliente/del/:id", clienteController.del);

module.exports = router;
