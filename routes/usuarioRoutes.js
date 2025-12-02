const express = require ("express");
const routes = express.Router();

const usuarioController = require("../controllers/usuarioController");

routes.get("/usuario", usuarioController.relatorio);

routes.get("/usuario/cadastrar", usuarioController.cadastrarGet);



routes.get("/usuario/excluir/:email", usuarioController.excluir);

routes.get("/usuario/atualizar/:email", usuarioController.atualizarGet);


routes.post("/usuario", usuarioController.cadastrar);

routes.post("/usuario/atualizar", usuarioController.atualizarPost);

routes.get("/usuario/login", usuarioController.loginGet);

routes.post("/usuario/login", usuarioController.loginPost);


routes.get("/usuario/:email", usuarioController.detalhar);


module.exports = routes;