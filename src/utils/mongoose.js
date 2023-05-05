const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://eduatlas:bgojmj336@cluster0.q9xjdbu.mongodb.net/productos?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB conectado..."))
  .catch(() => console.error(error));
