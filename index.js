const express = require("express");
const app = express();

const usersRouter = require('./routes/usersRoute');

app.use('/users', usersRouter);

app.listen(3000, ()=>{
   console.log("el servidor se inicio")
});