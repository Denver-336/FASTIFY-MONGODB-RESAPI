const esquemaProducto = require("../models/producto.model");

const getProductos = async (req, reply) => {
  try {
    const productos = await esquemaProducto.find();
    reply.code(200).send(productos);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const getProducto = async (req, reply) => {
  try {
    const producto = await esquemaProducto.findById(req.params.id);
    reply.code(200).send(producto);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const postProducto = async (req, reply) => {
  try {
    const nuevoProducto = new esquemaProducto(req.body);

    await nuevoProducto.save();

    reply.code(201).send(nuevoProducto);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const putProducto = async (req, reply) => {
  try {
    const productoActualizado = await esquemaProducto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    reply.code(203).send(productoActualizado);
  } catch (error) {
    reply.code(500).send(error);
  }
};

const deleteProducto = async (req, reply) => {
  try {
    await esquemaProducto.findByIdAndDelete(req.params.id);
    reply.code(204).send();
  } catch (error) {
    reply.code(500).send(error);
  }
};

module.exports = {
  getProductos,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
};
