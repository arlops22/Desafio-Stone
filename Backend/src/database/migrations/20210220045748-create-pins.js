'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('pins', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nomeEC: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      potencialTPV: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      segmento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "lead"
      },
      proposta: {
        type: Sequelize.STRING,
        allowNull: true
      },
      visitaRecente: {
        type: Sequelize.DATE,
        allowNull: true
      },
      ultimaVisita: {
        type: Sequelize.DATE,
        allowNull: true
      },
      qtdVisitas: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('pins');

  }
};
