/**
 * 
 * 
 */

//criação da estrutura da coleção
const projectSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId, 
        ref: 'Clients', 
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    desiredDeadline: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Solicitado', 'Em Análise', 'Aprovado', 'Em Andamento', 'Concluído', 'Cancelado'],
        default: 'Solicitado'
    },
    attachments: [{
        type: String
    }],
    requestDate: {
        type: Date,
        default: Date.now
    }

}, { versionKey: false });

//exportar o modelo de dados para o main
module.exports = model('Projects', projectSchema);