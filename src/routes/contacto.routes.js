import { Router } from "express";
import { ContactoController } from "../controller/contacto.controller.js";
import path from "path";
import { __dirname } from "../utils.js"

export const contactoRouter = Router();

// Ruta para obtener datos del formulario
contactoRouter.post("/formularioPersona", ContactoController.contactoPersona);

contactoRouter.post("/formularioEmpresa", ContactoController.contactoEmpresa);

contactoRouter.post("/registro", ContactoController.registro);


contactoRouter.get("/formularioPersona", async (req, res) => {
    res.sendFile(path.join(__dirname, 'template/views', 'formulario.html'));
});

contactoRouter.get("/formularioEmpresa", async (req, res) => {
    res.sendFile(path.join(__dirname, 'template/views', 'formulario.html'));
});

contactoRouter.get("/registro", async (req, res) => {
    res.sendFile(path.join(__dirname, 'template/views', 'registro.html'));
});
