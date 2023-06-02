        
require('dotenv').config()                      //dotenv para definir modo teste ou produção

console.log("ENTROU NO SISTEMA index.js");

 

console.log("INICIANDO NODE ENV");
console.log(process.env.NODE_ENV);

        const express = require('express')
        const app = express()
        const port =   3000

        // ----------------------------------------
        const history = require('connect-history-api-fallback');  // importando History API
        app.use(history());
        // ----------------------------------------

        // O app Vue será inserido dentro de 'public'
        app.use(express.static('site-deploy'));

        // ----------------------------------------
        const bodyParser = require('body-parser');
        app.use(bodyParser.json())
        // ----------------------------------------


        app.get('/', function (req, res) {  // rota de fallback do frontend
            res.render(path.join(__dirname + '/site-deploy/index.html'));
        });

        app.post('/lorahion', function (req, res) {
            const tmp = new Date()
            console.log('====================================')
            console.log('Seu pacote chegou com sucesso!')
            console.log(`${tmp.getHours() - 3}:${tmp.getMinutes()}:${tmp.getSeconds()}`)
            console.log((req.body))
            console.log('------------------------------------')

            // Fonte: https://attacomsian.com/blog/nodejs-base64-encode-decode
            const msg_decrypt = Buffer.from(req.body.params.payload, 'base64').toString('utf-8')

            console.log('O pacote decriptografado é:')
            console.log(msg_decrypt)
            console.log('=====================================')


            return res.status(200).send()  // valeu léo
        })

        app.listen(port, () => {
        console.log(`node-deploy-teste rodando na porta: ${port}`)
        })

 
 