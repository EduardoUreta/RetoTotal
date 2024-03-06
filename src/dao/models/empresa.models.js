import mongoose from "mongoose";

const empresaCollection = "empresa";

const empresaSchema = new mongoose.Schema({
    nombreEmpresa: {type: String},
    correoContacto: {type: String},
    telefonoContacto: {type: String},
    mensajeContacto: {type: String}    
});

export const empresaModel = mongoose.model(empresaCollection, empresaSchema);