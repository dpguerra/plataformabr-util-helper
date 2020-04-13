const atualizarCampo = (novo, validador, _internal, _external) => {

    _internal.campo = (_internal.lastOpAcceppted = validador(novo)) ? novo : _internal.campo;
    return _external;
};

module.exports = {
    atualizarCampo
};