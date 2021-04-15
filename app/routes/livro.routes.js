module.exports = app =>{

    const livros = require("../controllers/livro.controller")

    var router = require ("express").Router();

    //rota para criar um novo livro
    router.post("/", livros.create);

    //rota para listar livros por autor
    router.get("/:autor", livros.findAllByAuthor);

    //rota para listar todos os livros
    router.get("/", livros.findAll);

    //rota para alterar livros por id
    router.put('/:id', livros.update)

    app.use('/api/livros', router);
}