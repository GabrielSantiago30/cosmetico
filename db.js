const mysql = require('mysql2');

// Criação da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',     // Host do banco de dados
  user: 'root',   // Seu usuário do MySQL
  password: 'admin', // Sua senha do MySQL
  database: 'cosmetico'  // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar: ' + err.stack);
    return;
  }
  console.log('Conectado como id ' + connection.threadId);
});

// Exportar a conexão para uso em outros arquivos
module.exports = connection;



