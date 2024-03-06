import mongoose from "mongoose";

const personaCollection = "persona";

const personaSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    rut: {type: String},
    phone: {type: String}    
});

export const personaModel = mongoose.model(personaCollection, personaSchema);