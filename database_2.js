const mysql = require('mysql2');
require('dotenv').config();

const db2 = mysql.createConnection(process.env.mysql);

db2.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});

module.exports = db2;
