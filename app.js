const connection = require('./db');

// Exemplo de consulta
connection.query('SELECT * FROM usuarios', (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(results);
});

// Fechar a conexão após a consulta
connection.end();

