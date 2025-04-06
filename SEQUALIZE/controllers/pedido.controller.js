const { Pedido } = require('../models');
exports.obtenerPedidos = async (req, res) => {
const pedidos = await Pedido.findAll();
res.json(pedidos);
};
exports.crearPedido = async (req, res) => {
const pedido = await Pedido.create(req.body);
res.status(201).json(pedido);
};

exports.buscarPedido= async (req,res) =>{
    const pedido=await Pedido.findByPk(req.params.id); // Busca un pedido por su ID
    pedido ? res.json(pedido) : res.status(404).json({ error: "Pedido no encontrado" }); // Devuelve error si no existe
    }
    
exports.actualizarPedido = async (req,res) =>{
    const pedido = await Pedido.findByPk(req.params.id); // Busca el pedido por ID
    if (!pedido) return res.status(404).json({ error: "Pedido no encontrado" }); // Si no existe, envía error
    await pedido.update(req.body); // Actualiza el pedido con los nuevos datos
    res.json(pedido); // Devuelve el pedido actualizado
    }



exports.eliminarPedido = async (req,res) =>{
    const pedido = await Pedido.findByPk(req.params.id); // Busca el pedido por ID
    if (!pedido) return res.status(404).json({ error: "Pedido no encontrado" }); // Si no existe, envía error
    await pedido.destroy(); // Elimina el pedido de la base de datos
    res.json({ mensaje: "Pedido eliminado" }); // Devuelve mensaje de éxito
    }