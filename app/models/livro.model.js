const moment = require('moment');
const {v4: uuidv4, v4} = require("uuid");

module.exports = (sequelize, Sequelize) => {
    
    const Livro = sequelize.define("livro", {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            autoIncrement: false,
            primaryKey: true,
            allowNull: false,
        },
        nome:{
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false,
        },
        autor:{
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false,
        },
        sinopse:{
            type: Sequelize.STRING
        },
        data_lancamento:{
            type: Sequelize.DATEONLY,
            get: function(){
                return moment(this.getDataValue('data_lancamento')).utc().locale('pt-br').format('MM DD YYYY')
            }
        },
        data_aluguel:{
            type: Sequelize.DATEONLY,
            get: function() {
                return moment.utc(this.getDataValue('data_aluguel')).locale('pt-br').format('MM DD YYYY')
            }
        },
        alugado:{
            type: Sequelize.BOOLEAN
        },
    });
    return Livro;
};

