const productoController = require("../controller/producto.controller");

const rutas = [
  {
    url: "/productos",
    method: "GET",
    handler: productoController.getProductos,
  },
  {
    url: "/productos/:id",
    method: "GET",
    handler: productoController.getProducto,
  },
  {
    url: "/productos",
    method: "POST",
    handler: productoController.postProducto,
  },
  {
    url: "/productos/:id",
    method: "PUT",
    handler: productoController.putProducto,
  },
  {
    url: "/productos/:id",
    method: "DELETE",
    handler: productoController.deleteProducto,
  },
];

module.exports = rutas;
