require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

app.use(cors());
app.use(express.json());

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Ruta del formulario
app.post("/enviar", async (req, res) => {

  const datos = req.body;

  const email = {
    to: process.env.EMAIL, // donde recibes
    from: process.env.EMAIL, // debe estar verificado en SendGrid
    subject: `Nuevo mensaje de ${datos.nombre}`,
    text: `
          Nombre: ${datos.nombre}
          Email: ${datos.email}
          Teléfono: ${datos.telefono}
            
          Mensaje:
          ${datos.mensaje}
          `
  };

  try {
    await sgMail.send(email);
    res.send("Correo enviado");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar");
  }
});

// Puerto para Render
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor en " + PORT);
});