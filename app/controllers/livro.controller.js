const db = require("../models");
const Sequelize = require('sequelize');
const Op = db.sequelize.Op;
const {v4: uuidv4} = require("uuid");

Livro = db.livro;

//criando um novo livro
exports.create = (req, res) =>{

    if(!req.body.nome){
        res.status(400).send({
            message: "Nome do livro não pode ser vazio"
        });
        return;
    };

    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        sinopse: req.body.sinopse,
        data_lancamento: req.body.data_lancamento,
        data_aluguel: req.body.data_aluguel,
        alugado: req.body.alugado ? req.body.alugado : false
    };

    Livro.create(livro)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro interno ao criar um novo livro.`
        })
    });
};
//buscando todos os livros cadastrados
exports.findAll = (req, res) => {
    Livro.findAll()
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erro intorno ao buscar todos os livros"
        });
    });
};
//buscando todos os livros por autor
exports.findAllByAuthor = (req, res) =>{

    Livro.findAll({
        where: {
          autor:{
            [Op.like]: `%${req.params.autor}%` 
          }
        }
      })
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro interno ao buscar pelo autor: ${autor}`
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Livro.update(req.body, {
        where: {id:id}
    })
    .then(num =>{
        if(num == 1){
            res.send({
                message: `Livro atualizado com sucesso.`
            });
        }else{
            message: `Não foi possível atualizar o livro com o id: ${id}`
        };
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro interno ao tentar atualizar o livro com o id: ${id}`
        });
    });
};