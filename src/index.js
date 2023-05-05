const fastify = require("fastify")({
  logger: true,
});
const rutasProductos = require("./routes/productos.routes");

require("./utils/mongoose");

fastify.get("/", (request, reply) => {
  reply.send({ hola: "mundo" });
});

rutasProductos.forEach((ruta) => {
  fastify.route(ruta);
});

const start = async () => {
  await fastify.listen({ port: 3000 });
  fastify.log.info(
    `Servidor escuchando en el puerto: ${fastify.server.address().port}`
  );
};

start();
