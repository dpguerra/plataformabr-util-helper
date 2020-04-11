const { menorIdade } = require('./Idade');
const { novoIdentificador, identificadorValido } = require('./Identificador');
const { atualizarCampo } = require('./Campo');
const { incluirNoConjunto } = require('./Conjunto');

module.exports = {
    menorIdade,
    novoIdentificador,
    atualizarCampo,
    incluirNoConjunto
};