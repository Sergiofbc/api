const express = require("express");
const app = express();

const usersRouter = require('./routes/usersRoute');
const authRouter = require('./routes/authRouter');

app.use(express.json())

app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(3000, ()=>{
   console.log("el servidor se inicio")
});


//rutas
//inicarle a express que vamos a reacibir un json





/**
 * todos los json que mandemos deben ser de esta forma:
 * Usuario : email
 *           nombre
 *           contraseña
 *           pais
 */