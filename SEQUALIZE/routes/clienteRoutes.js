const express = require("express"); // Importa Express para manejar rutas
const { Cliente } = require("../models"); // Importa el modelo Cliente desde la carpeta models
const router = express.Router(); // Crea un router de Express
const { obtenerClientes, crearCliente, eliminarCliente,actualizarCliente,buscarCliente} = require('../controllers/cliente.controller');

// Obtener todos los clientes
router.get("/", obtenerClientes);


    // Obtener un cliente por ID
router.get("/:id", buscarCliente);


    // Crear un nuevo cliente
router.post("/", crearCliente);

// Actualizar un cliente
router.put("/:id",actualizarCliente );

    // Eliminar un cliente
router.delete("/:id",eliminarCliente);

module.exports = router; // Exporta el router para ser usado en index.js