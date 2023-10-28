//éste seía el microservisios para usuario

const express = require("express");
const router = express.Router(); //recibir peticiones-paquetes de red
const MongoDB = require("../lib/mongo");
const mongo = new MongoDB();


router.get("/", async (req, res, next) => {
    console.log("estamos en el segundo MD");
    const data = (await mongo.getAll("Users"));
    const results = [];
    for await (const doc of data){ //es un cursor
        results.push(doc);
    }

    res.status(200).json({
        results
    })
});

module.exports = router;