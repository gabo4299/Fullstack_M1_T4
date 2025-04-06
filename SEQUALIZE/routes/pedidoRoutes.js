const express = require("express"); // Importa Express para manejar rutas
const { Pedido } = require("../models"); // Importa el modelo Cliente desde la carpeta models
const router = express.Router(); // Crea un router de Express
const { obtenerPedidos,buscarPedido,eliminarPedido,crearPedido,actualizarPedido} = require('../controllers/pedido.controller');


    // Obtener todos los clientes
router.get("/", obtenerPedidos);


    // Obtener un cliente por ID
router.get("/:id", buscarPedido);


    // Crear un nuevo cliente
router.post("/", crearPedido);

// Actualizar un cliente
router.put("/:id",actualizarPedido );

    // Eliminar un cliente
router.delete("/:id",eliminarPedido);
    module.exports = router; // Exporta el router para ser usado en index.js