const express = require('express');
const app = express();
const port = 3000;
const { Descargas } = require('./Patrones/factory');

app.use(express.json()); // Middleware para analizar cuerpos de solicitud JSON

app.post('/status', async (req, res) => {
  const { accion, id } = req.body;
  const statusController = new Descargas();
  try {
    // Realiza las acciones en la base de datos usando la sesión
    const data = await statusController.descargas(accion, id);
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la acción, no existe o no se pudo conectar con la base de datos...');
  }
});

app.get('/', (req, res) => {
  res.json('El serivio esta en ejecucion');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
