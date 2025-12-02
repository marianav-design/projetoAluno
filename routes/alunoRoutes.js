const express = require ("express");
const routes = express.Router();

const alunoController = require("../controllers/alunoController");

routes.get("/alunos", alunoController.relatorio);

routes.get("/alunos/cadastrar", alunoController.cadastrarGet);

routes.get("/alunos/:matricula", alunoController.detalhar);

routes.get("/alunos/excluir/:matricula", alunoController.excluir);

routes.get("/alunos/atualizar/:matricula", alunoController.atualizarGet);


routes.post("/alunos", alunoController.cadastrar);

routes.post("/alunos/atualizar", alunoController.atualizarPost);





module.exports = routes;

