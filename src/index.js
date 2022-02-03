// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: "50mb"}));


// Arrancamos el servidor en el puerto 3000
const serverPort = 3001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: "http://localhost:4000/card/${cardId}",
  };

  const responseError = {
    success: false,
    error: "Error description",
  };
  if (
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.photo !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== ""
  ) {
    res.json(responseSuccess);
  } else {
    res.json(responseError);
  }
});

//ruta para mostrar la tarjeta:
server.get("/card/${cardId}", (req, res) =>{
res.json(response)

})