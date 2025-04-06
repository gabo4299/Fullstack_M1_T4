const { Cliente } = require('../models');
// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
const clientes = await Cliente.findAll();
res.json(clientes);
};
    // Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
const cliente = await Cliente.create(req.body);
res.status(201).json(cliente);
};
    // Obtener un cliente por ID
exports.buscarCliente= async (req,res) =>{
const cliente=await Cliente.findByPk(req.params.id); // Busca un cliente por su ID
cliente ? res.json(cliente) : res.status(404).json({ error: "Cliente no encontrado" }); // Devuelve error si no existe
}

exports.actualizarCliente = async (req,res) =>{
    const cliente = await Cliente.findByPk(req.params.id); // Busca el cliente por ID
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" }); // Si no existe, envía error
    await cliente.update(req.body); // Actualiza el cliente con los nuevos datos
    res.json(cliente); // Devuelve el cliente actualizado
    }



exports.eliminarCliente = async (req,res) =>{
    const cliente = await Cliente.findByPk(req.params.id); // Busca el cliente por ID
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" }); // Si no existe, envía error
    await cliente.destroy(); // Elimina el cliente de la base de datos
    res.json({ mensaje: "Cliente eliminado" }); // Devuelve mensaje de éxito
    }