const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Habilita o uso de JSON no corpo das requisições

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco'
});

// Endpoint para receber dados do frontend
app.post('/api/usuarios', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).send('Nome e email são obrigatórios.');
  }

  const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
  db.query(query, [nome, email], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).send('Erro interno do servidor.');
    }
    console.log('Usuário inserido com sucesso:', result.insertId);
    res.status(201).send('Usuário criado com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});