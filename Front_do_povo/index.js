        
if(process.env.NODE_ENV =='product'){
        const express = require('express')
        const app = express()
        const port = process.env.PORT ? Number(process.env.PORT) : 3000

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

}
// Fonte: https://dev.to/tqbit/quick-dirty-how-to-deploy-a-fullstack-vue-js-app-with-a-working-node-js-backend-51k4
//======================================================================================


if(process.env.NODE_ENV =='teste'){
 //------ inicialicação do express duplicado
 const anotherEXPRe = require('express')()
 
  
 const door = 3002;

 const bodyParser2 = require('body-parser');
 anotherEXPRe.use(bodyParser2.json())
   
 anotherEXPRe.post('/loradois', function (req, res) {
      const tmp = new Date()
      console.log('***************$$$$$$$$$$$$$$*************')
      console.log('Seu pacote chegou com sucesso no LORA DOIS !')
      console.log(`${tmp.getHours() - 3}:${tmp.getMinutes()}:${tmp.getSeconds()}`)
      console.log((req.body))
      console.log('------------------------------------')
  
      // Fonte: https://attacomsian.com/blog/nodejs-base64-encode-decode
      const msg_decrypt = Buffer.from(req.body.params.payload, 'base64').toString('utf-8')
  
      console.log('O pacote decriptografado no LORA DOIS é:')
      console.log(msg_decrypt)
      console.log('***************$$$$$$$$$$$$$$*************')
  
  
      return res.status(200).send()  // valeu léo
  })     

 anotherEXPRe.listen(door, () => {                         //Carregamos servidor HTTP
     console.log(`HION DEV SERVER --LORA DOIS ---- A EXECUTAR NA PORTA ${door}`);})


 }