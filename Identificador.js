const { v4: uuidv4 } = require('uuid');

const novoIdentificador = () => uuidv4();

module.exports = {
    novoIdentificador
};