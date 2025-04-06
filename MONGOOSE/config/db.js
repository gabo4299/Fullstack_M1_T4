const mongoose = require('mongoose');
const connectDB = async () => {
try {
await mongoose.connect('mongodb://localhost:27017/ejemplo_maestria', {
useNewUrlParser: true,
useUnifiedTopology: true
});
console.log('MongoDB conectado a la base de datos: ejemplo_maestria');
} catch (error) {
console.error('Error de conexión a MongoDB:', error);
process.exit(1);
}
};
module.exports = connectDB;

