// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "50mb" }));

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

const savedCards = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const data = req.body;
  const newCardData = {
    ...data,
    cardId: uuidv4(),
  };

  savedCards.push(newCardData);

  const responseSuccess = {
    success: true,
    cardURL: `http://localhost:3001/card/${newCardData.cardId}`,
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
server.get("/card/:cardId", (req, res) => {
  const reqParamsId = req.params.cardId;
  console.log(reqParamsId);
  const cardData = {};
  res.render("created-card", cardData);
});
