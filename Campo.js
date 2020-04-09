const atualizarCampo = (novo, validador, _internal, _external) => {
    const _isValid = validador(novo);

    _internal.campo = (_isValid) ? novo : _internal.campo;
    _internal.lastOpAcceppted = _isValid;

    return _external;
};

module.exports = {
    atualizarCampo
};