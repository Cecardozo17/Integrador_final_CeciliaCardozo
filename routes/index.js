"use strict"
const express = require("express");
const res = require("express/lib/response");
const {body, validationResult} = require("express-validator");
const async = require("hbs/lib/async");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
const router = express.Router();
const nodemailer = require("nodemailer")
const productModels = require("../models/productsModels");
// get//
router.get("/",(req, res) => {
    res.render("Index");
});

/*POST*/
router.post(
  "/",

  [
    body("name" , "Debe ingresar su nombre").exists().isLength({min:2}),
    body("lastName" , "Debe ingresar su apellido").exists().isLength({min:2}),
    body("email" , "Debe ingresar un mail valido").exists().isEmail(),
    body("message" , "Su mensaje debe contener entre 10 y 300 caracteres").exists().isLength({min:10, max:300}),
    ],
    
  async (req, res) => {
    
    const errors= validationResult(req);
if(!errors.isEmpty()) {
  const formData = req.body;
  const arrWarnings = errors.array();
  res.render("index", {arrWarnings});
}

//   res.status(400).json({ errors: errors.array()});
//   console.log(errors);
// }
    const emailMsg = {
        to: "atencioncliente@empresa.com",
        from: req.body.email,
        subject: "Mensaje desde formulario de contacto",
        html: `${req.body.name} ${req.body.lastName} enviar el siguiente mensaje: ${req.body.message}`,
      };
      const transport = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });
       
let sendMailStatus = await transport.sendMail(emailMsg);
let statusMessage ="";
if (sendMailStatus.rejected.length) {
  statusMessage = "No pudimos enviar. Intende de nuevo";
} else {
  statusMessage = " Mensaje enviado";
}
      res.render("index", {
       statusMessage,
      });
    });
 

router.get("/form", async (req, res) => {
    const products = await productModels.getProducts();
   const data = products.map((row) => {
       const imageURL = cloudinary.url(row.image, {
           width: 100,
           height: 100,
           crop:"fill",
       })
       return { ... row, imageURL };
   });
    res.render("index", { data }); 
});
router.get("/addItem", (req, res) => {
res.render("addItem");
});


router.post("/addItem", async (req, res) => {
    let imageFile = req.files.imageFile;
const img_id= (await uploader(imageFile.tempFilePath)).public_id;
    
    const { nombre, color, precio} =
    req.body;
    const newProduct = {
        nombre,
        color,
        precio,
        image: img_id,
    };
    await productModels.addProduct(newProduct);
    res.redirect("/form");
});

router.get("/handleEdit/:id", async (req, res) =>{
    const row = await productModels.getProducts(req.params.id);
    const product = {
        id:row[0].id,
        nombre: row[0].nombre,
        color: row[0].color,
        precio: [0].precio,
        imagen: row[0].imagen,
};
res.render("editItem", { product });
});

router.post("/editProduct", async (req, res) => {
let img_id = null;

})
router.get("/deleteProduct/:id", async (req, res) => {
const row = await productModels.getProduct(req.params.id);
await destroy(row[0].image);
await productModels.deleteProduct(req.params.id)
res.redirect("/index")
});
module.exports = router;