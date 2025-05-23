const mongoose = require('mongoose');
const ClienteSchema = new mongoose.Schema({
            nombre: {
                type: String,
                required: true
            },
            correo: {
                type: String,
                required: true,
                unique: true
            },
            telefono: {
                type: String
            }
});
module.exports = mongoose.model('Cliente', ClienteSchema);