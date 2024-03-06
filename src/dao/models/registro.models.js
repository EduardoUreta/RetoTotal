import mongoose from "mongoose";

const registroCollection = "registrados";

const registroSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    city: {type: String},
    phone: {type: String},
    pay: {type: Boolean}    
});

export const registroModel = mongoose.model(registroCollection, registroSchema);