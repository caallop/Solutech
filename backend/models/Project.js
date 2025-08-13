const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa a conexão com o banco de dados

const Project = sequelize.define('Project', {

    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    projectType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desiredDeadline: {
        type: DataTypes.DATEONLY, // DATEONLY é ideal para salvar apenas a data (sem horário)
        allowNull: true 
    },
    status: {
        type: DataTypes.ENUM('Solicitado', 'Em Análise', 'Aprovado', 'Em Andamento', 'Concluído', 'Cancelado'),
        defaultValue: 'Solicitado' 
    },
    attachments: {
        type: DataTypes.JSON, // A melhor forma de simular um array de strings no MySQL
        allowNull: true
    },
    requestDate: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    }
}, {
    tableName: 'projects'
});

module.exports = Project;