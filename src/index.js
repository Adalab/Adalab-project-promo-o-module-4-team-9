// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: "50mb"}));

// motor de plantillas
server.set("view engine", "ejs"); 


// Configuración servidor estático:

const staticServerPath = "./public-react";
server.use(express.static(staticServerPath));


// Arrancamos el servidor en el puerto 3000
const serverPort = 3001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const data = req.body;
  const responseSuccess = {
    success: true,
    cardURL: "http://localhost:4000/card/${cardId}",
  };

  const responseError = {
    success: false,
    error: "Error description",
  };
  if (
    data.name !== "" &&
    data.job !== "" &&
    data.photo !== "" &&
    data.email !== "" &&
    data.linkedin !== "" &&
    data.github !== ""
  ) {
    res.json(responseSuccess);
  } else {
    res.json(responseError);
  }
});

//ruta para mostrar la tarjeta:
server.get("/card/:cardId", (req, res) =>{

res.render("created-card")

})