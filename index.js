const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded());

// LISTAR pacientes
app.get('/', async (req, res) => {
  try {
    const pacientes = await prisma.paciente.findMany(); 
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar pacientes' });
  }
});

app.post('/paciente/cadastro', async (req, res) => {
  try {

    console.log(req.body);

    //const pacientes = await prisma.paciente.findMany(); 

    await prisma.paciente.create({
      data: {
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco
      }
      
    }); 
    res.json([]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar pacientes' });
  }
});

app.post('/cliente/cadastro', async (req, res) => {
  try {

    console.log(req.body);

    //const pacientes = await prisma.paciente.findMany(); 

    await prisma.cliente.create({
      data: {
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco
      }
      
    }); 
    res.json([]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar cliente' });
  }
});


// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
