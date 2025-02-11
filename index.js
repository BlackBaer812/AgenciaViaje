import express from "express";
import router from "./routers/index.js";
import db from "./config/db.js";

const app = express();

db.authenticate().then((response)=>{
    console.log("Conectado")
}).catch(err=>{
    console.error(err);
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("escuchando en el puerto " + PORT));

app.set("view engine", "pug");

app.use(express.static("public"));

app.use((req,res,next) => {
    res.locals.year = new Date().getFullYear();
    res.locals.nombre = "Agenda de viajes";
    next();
})

// Middleware para analizar datos de formularios (application/x-www-form-urlencoded)
//el servidor esté configurado para analizar los datos del formulario. En Express,//
app.use(express.urlencoded({ extended: true }));

app.use("/",router)

//"dev": "nodemon index.js"
//"start": "index.js"