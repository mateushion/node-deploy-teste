// FRONTEND DO POVO
// um povo unido jamais será vencido

const express = require('express')
const app = express()
const port = 3000;

// ----------------------------------------
// const history = require('connect-history-api-fallback');  // importando History API
// app.use(history());
// ----------------------------------------

// O app Vue será inserido dentro de 'public'
app.use(express.static('site-deploy'));

// ----------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.json())
// ----------------------------------------


app.get('/', function (req, res) {  // rota de fallback do frontend
    res.cookie('token', '23124515116124afweasd')
    // res.render(path.join(__dirname + '/site-deploy/index.html'));
});

app.post('/lorahion', function (req, res) {
    const tmp = new Date()
    console.log('====================================')
    console.log('Seu pacote chegou com sucesso!')
    console.log(`${tmp.getHours() - 3}:${tmp.getMinutes()}:${tmp.getSeconds()}`)
    // console.log((req.body))
    console.log('------------------------------------')

    // Fonte: https://attacomsian.com/blog/nodejs-base64-encode-decode

    if((req.body.params.payload != undefined || req.body.params.payload != null)){
        
               
            const msg_decrypt = Buffer.from(req.body.params.payload, 'base64').toString('utf-8')

            let bytes = [];
            console.log('O pacote decriptografado é:');
            console.log(msg_decrypt);
            console.log("tamanho:",msg_decrypt.length);
            console.log('=====================================');
        
            for (let c = 0; c < msg_decrypt.length; c += 2) {
                bytes.push(parseInt(msg_decrypt.substr(c, 2), 16)); // substr -> parte de c e pega 2 casas na string analisada
              }



        ///TESTE//////////////////////////
        
            console.log('   ');
            console.log('O pacote em vetor 8 bits:');
            console.log(bytes);
            console.log('   ');
       
        //////////////////////////
        
                
    }


    return res.status(200).send("AQUI VINI! 300")  // valeu léo
})

app.listen(port, () => {
  console.log(`node-deploy-teste rodando na porta: ${port}`)
})


// Fonte: https://dev.to/tqbit/quick-dirty-how-to-deploy-a-fullstack-vue-js-app-with-a-working-node-js-backend-51k4
