//éste seía el microservisios para usuario

const express = require("express");
const router = express.Router(); //recibir peticiones-paquetes de red
const MongoDB = require("../lib/mongo");
const mongo = new MongoDB();


router.get("/", async (req, res, next) => {
    console.log("estamos en el segundo MD");
    const data = (await mongo.getAll("Users"));    //aqui hace el llamado

    const results = [];
    for await (const doc of data){ //es un cursor
        results.push(doc);
    }

    res.status(200).json({
        results
    })
});

// cojo es esto : GET https://localhost:3000/users/3
router.get("/:id", async (req, res, next) => {
    const data = (await mongo.getOne("Users", {email: req.params.id}));
    return res.status(200).json({
        data
    })
});


router.post("/", async (req, res, next) =>{
    const data = (await mongo.createOne("Users", req.body));
    return res.status(200).json({
        data
    })
})


router.delete("/:id", async (req, res, next) =>{
    const data = (await mongo.deleteOne("Users",{email: req.params.id} ));
    return res.status(200).json({
        data
    })
})




module.exports = router;