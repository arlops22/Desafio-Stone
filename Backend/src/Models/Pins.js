const { Model, DataTypes } = require('sequelize');

class Pins extends Model {
    static init(connection) {
        super.init({
            nomeEC: DataTypes.STRING,
            endereco: DataTypes.STRING,
            latitude: DataTypes.FLOAT,
            longitude: DataTypes.FLOAT,
            potencialTPV: DataTypes.INTEGER,
            segmento: DataTypes.STRING, 
            tipo: DataTypes.STRING,  
            proposta: DataTypes.STRING,
            visitaRecente: DataTypes.DATE, 
            ultimaVisita: DataTypes.DATE,
            qtdVisitas: DataTypes.INTEGER             
        },
        {
            sequelize: connection
        })
    }
}

module.exports = Pins;