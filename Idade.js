const moment = require('moment');

exports.menorIdade = idadeAtual => {
    return moment(idadeAtual).add(18, 'years').isAfter();
};

// module.exports = {
//     menorIdade
// };