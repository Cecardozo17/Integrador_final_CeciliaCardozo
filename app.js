const express = require("express");
const path = require("path");
const fileupload = require("express-fileupload");
const hbs = require("hbs");
const PORT = 3005;

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/"

}));

//habilita la lectura de datos en campos del formulario
app.use(express.urlencoded({ extended: false}));
//declaramos la ruta de nuestro contenido estatico 
app.use(express.static(path.join(__dirname, "./public")));
//establecer el motor de plantillas
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
//registra el directorio para los parciales
hbs.registerPartials(path.join(__dirname, "./views/partials"));

const routeIndex = require("./routes/index")
app.use("/", routeIndex);
;

app.listen(PORT, (err) => {
    err? console.log("exploto todo") :
     console.log(`Servidor corre en http://localhost:${PORT}/`);

     
});
