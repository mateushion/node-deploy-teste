module.exports = badabess =>{
    badabess.route('/testeCorpo')
    .get(badabess.api.arquivo.testeCorpo)

    badabess.route('/testeSQL')
    .get(badabess.api.arquivo.testeSQL)
}