import { conexion } from "../app.js";

export class ContactoController{
    static contactoPersona =  (req, res) => {

        let name = req.body.name;
        let email=  req.body.email;
        let rut = req.body.rut;
        let phone= req.body.phone;

        let register = "INSERT INTO personas (nombre, correo, rut, telefono) VALUES ('"+name+"','"+email+"','"+rut+"','"+phone+"')";

        conexion.query(register, function(error){
            if(error){
                throw error;
            } else {
                console.log("Datos guardados!");
            }
        });
    };

    static contactoEmpresa = async (req, res) => {

        let nombreEmpresa = req.body.nombreEmpresa;
        let correoEmpresa = req.body.correoEmpresa;
        let telefonoEmpresa = req.body.telefonoEmpresa;
        let mensajeEmpresa = req.body.mensajeEmpresa;

        let register = "INSERT INTO empresas (nombre, correo, telefono, mensaje) VALUES ('"+nombreEmpresa+"','"+correoEmpresa+"','"+telefonoEmpresa+"','"+mensajeEmpresa+"')";

        conexion.query(register, function(error){
            if(error){
                throw error;
            } else {
                console.log("Datos guardados!");
            }
        });

    };

    static registro = async(req, res) => {

        let name = req.body.inputName;
        let email = req.body.inputEmail;
        let city = req.body.inputCity;
        let phone = req.body.inputPhone;
        let pay = req.body.inputPay;

        let register = "INSERT INTO registrados (nombre, correo, ciudad, telefono, pago) VALUES ('"+name+"','"+email+"','"+city+"','"+phone+"','"+pay+"')";

        conexion.query(register, function(error){
            if(error){
                throw error;
            } else {
                console.log("Datos guardados!");
            }
        });
           
    }
};