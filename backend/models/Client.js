// Importa o Schema e o model do mongoose
const { Schema, model } = require('mongoose');

// Criação da estrutura da coleção de Clientes
const clientSchema = new Schema({
    companyName: {
        type: String,
        required: [true, 'O nome da empresa é obrigatório.']
    },
    contactName: {
        type: String,
        required: [true, 'O nome do responsável é obrigatório.']
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório.'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória.']
    },
    phone: {
        type: String,
        required: false
    },
    // CNPJ ou CPF do cliente, útil para faturamento e contratos
    cnpjCompany: {
        type: String,
        required: false,
        unique: true,
        sparse: true // Permite múltiplos documentos com valor nulo, mas único se preenchido
    }
}, {
    // Adiciona automaticamente os campos: createdAt e updatedAt
    timestamps: true,
    versionKey: false
});

// Exportar o modelo de dados para ser usado em outras partes da aplicação
module.exports = model('Clients', clientSchema);