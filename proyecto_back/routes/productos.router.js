const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller"); // llama  a empleados controller

router.post("/", productosController.create); // Metodo de envio de datos
router.get("/", productosController.find); // Metodo para obtener datos
router.get("/:id", productosController.findOne); // Metodo para buscar un id
router.put("/:id", productosController.update); // Metodo para actualizar dato por id
router.delete("/:id", productosController.remove); // Metodo para remover por id

module.exports = router;