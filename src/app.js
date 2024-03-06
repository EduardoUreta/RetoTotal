import express from "express";
import mysql from "mysql";

import path from "path";
import { __dirname } from "./utils.js"

import { contactoRouter } from "./routes/contacto.routes.js";

const port = process.env.PORT || 3000;
const app = express();

export const conexion = mysql.createConnection({
    host: "localhost",
    database: "retotota_contactform",
    user: "retotota_contactform",
    password: "12345678"
});


// Para Forms
app.use(express.urlencoded({extended:true}));

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurar la carpeta "templates" para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'template')));

// Ruta para renderizar la página principal
app.get("/", (req, res) => {
    // No necesitas renderizar una plantilla aquí si solo quieres servir archivos estáticos
    res.sendFile(path.join(__dirname, 'template', 'index.html'));
});

app.get("/bases-competencia", (req, res) => {
    res.sendFile(path.join(__dirname, 'template/views', 'bases.html'));
});

app.use("/contacto", contactoRouter);




