const express = require('express')
const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3000

// ----------------------------------------
const history = require('connect-history-api-fallback')  // importando History API
app.use(history());
// ----------------------------------------

// O app Vue será inserido dentro de 'public'
app.use(express.static('site-deploy'));

app.get('/', function (req, res) {  // rota de fallback do frontend
    res.render(path.join(__dirname + '/site-deploy/index.html'));
});

app.post('/lorahion', function (req, res) {
    const tmp = new Date()
    console.log('====================================')
    console.log('Seu pacote chegou com sucesso!')
    console.log(`${tmp.getHours()}:${tmp.getMinutes()}:${tmp.getSeconds()}`)
    console.log(req.body)
    console.log('=====================================')

    return res.status(200).send()  // valeu léo
})

app.listen(port, () => {
  console.log(`node-deploy-teste rodando na porta: ${port}`)
})
