//Creacción base de datos (Esquema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Creación esquema para db

const ProductosSchema = new Schema({
  //Nombre del esquema con sus parametros
  id_producto: { type: String, required: true, max: 60 },
  nombre: { type: String, required: true, max: 60 },
  precio: { type: Number, required: true, max: 300 }, // int es Number
  cantidad: { type: Number, required: true, max: 40 },
  descripcion: { type: String, required: true, max: 150 },
  
});

module.exports = mongoose.model("productos", ProductosSchema);