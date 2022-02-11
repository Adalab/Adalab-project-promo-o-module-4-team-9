// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const Database = require("better-sqlite3");

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

const staticStylesPath = "./public-styles";
server.use(express.static(staticStylesPath));

// Configuración base de datos
const db = new Database("./src/db/newcards.db", { verbose: console.log });

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 3001;
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
  console.log(newCardData);

  savedCards.push(newCardData);

  const responseSuccess = {
    success: true,
    cardURL: `http://undefined-awesome-cards.herokuapp.com/#/create-preview-card/card/${newCardData.cardId}`,
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
    // Pasar datos a base de datos
    const insertStmt = db.prepare(
      `INSERT INTO cards (uuid, palette, name, email, github, photo, linkedin, phone, job) VALUES (?,?,?,?,?,?,?,?,?)`
    );
    insertStmt.run(
      newCardData.cardId,
      newCardData.palette,
      newCardData.name,
      newCardData.email,
      newCardData.github,
      newCardData.photo,
      newCardData.linkedin,
      newCardData.phone,
      newCardData.job
    );
    res.json(responseSuccess);
  } else {
    res.json(responseError);
  }
});

//ruta para mostrar la tarjeta:
server.get("/card/:cardId", (req, res) => {
  const reqParamsId = req.params.cardId;
  console.log(reqParamsId);

  const query = db.prepare("SELECT * FROM cards WHERE uuid = ?");
  const foundCard = query.get(reqParamsId);
  const cardData = {
    name: foundCard.name,
    job: foundCard.job,
    photo: foundCard.photo,
    email: foundCard.email,
    phone: foundCard.phone,
    linkedin: foundCard.linkedin,
    github: foundCard.github,
    palette: foundCard.palette,
  };
  res.render("created-card", cardData);
});
