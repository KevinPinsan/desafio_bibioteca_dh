module.exports = app =>{
    const locatarios = require("../controllers/locatario.controller");

    var router = require ("express").Router();

    //criando novo locatário
    router.post("/", locatarios.create);

    //listando locatários ativos
    router.get("/ativo", locatarios.findAllActive);

    //listando todos os locatários (ativos e inativos)
    router.get("/", locatarios.findAll);

    //deletando locatário por id
    router.delete('/:id', locatarios.delete);

    //deletando todos os locatários
    router.delete('/', locatarios.deleteAll);

    app.use('/api/locatarios', router);
}