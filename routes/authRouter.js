const express = require("express");
const router = express.Router(); //recibir peticiones-paquetes de red
const MongoDB = require("../lib/mongo");
const {hash} = require("bcrypt");
const mongo = new MongoDB();

//la idea es hacer la ruta para registrar los usuarios
//bcrypt va a encriptar y desencriptar
router.post("/login", async (req, res, next) =>{

})

router.post("/register", async (req, res, next) =>{
    try{
        const userFound = await mongo.getOne("Users", {email: req.body.email}); // si no existe ret null
        if(userFound){
            return res.status(403).json({
                message : "Este usuario ya existe."
            });
        }

        let user = req.body;
        user.password = await hash(user.password, 10);
        let usuario = await mongo.createOne("Users", user)

        return res.status(200).json({
            usuario
        });
    }catch (e){
        console.log(e)
    }
})
module.exports = router;