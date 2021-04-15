const db = require("../models");

Locatario = db.locatario;

exports.create = (req, res) =>{
    if(!req.body.nome || !req.body.cpf){
        res.status(400).send({
            message: err.message || "Nome e CPF devem estar preenchidos"
        });
        return;
    };

    const locatario = {
        nome : req.body.nome,
        cpf : req.body.cpf,
        ativo: req.body.ativo ? req.body.ativo : false
    };

    Locatario.create(locatario)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro ao criar um novo locatario.`
        });
    });
};

exports.findAll = (req, res) =>{
    Locatario.findAll()
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro interno ao listar todos os locatários.`
        });
    });
};

exports.findAllActive = (req, res) =>{
    Locatario.findAll({where: {ativo: true}})
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro ao buscar locatários ativos`
        });
    });
};

exports.delete = (req, res) =>{
    const id = req.params.id;
    Locatario.destroy({where: {id: id}})
    .then(num =>{
        if(num == 1){
            res.status(200).send({
                message: `locatário deletado com sucesso.`
            });
        };
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro interno ao tentar deletar o usuario de if: ${id}`
        });
    });
};

exports.deleteAll = (req, res) =>{
    Locatario.destroy({
        where: {},
        truncate: false
    })
    .then(nums =>{
        res.status(200).send({
            message: `${nums} locatários deletados com sucesso.`
        });
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || `Erro interno ao tentar deletar todos locatários.`
        });
    });
};