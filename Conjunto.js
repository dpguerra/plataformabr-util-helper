const incluirNoConjunto = (novo, validador, _internal, _external) => {
    const _isValid = validador(novo);

    if (_isValid) 
        _internal.conjunto.add(novo);
    _internal.lastOpAcceppted = _isValid;

    return _external;
};

module.exports = {
    incluirNoConjunto
};