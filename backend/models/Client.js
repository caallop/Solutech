const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa a conexão

const Client = sequelize.define('Client', {

    companyName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    contactName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cnpjCompany: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
    // Os campos 'createdAt' e 'updatedAt' são adicionados e gerenciados automaticamente
}, {
    tableName: 'clients',
    hooks: {
        // Hooks são funções executadas em certos momentos do ciclo de vida do modelo
        // Este hook simula o 'trim: true' e 'lowercase: true' do Mongoose para o email
        beforeValidate: (client) => {
            if (client.email) {
                client.email = client.email.toLowerCase().trim();
            }
        }
    }
});

module.exports = Client;