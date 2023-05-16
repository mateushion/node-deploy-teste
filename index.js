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
    console.log((req.body))
    console.log('------------------------------------')

    // Fonte: https://attacomsian.com/blog/nodejs-base64-encode-decode
    const msg_decrypt = Buffer.from(req.body.params.payload, 'base64').toString('utf-8')

    console.log('O pacote decriptografado é:')
    console.log(msg_decrypt)
    console.log('=====================================')



 

let objeto_com_dados  = msg_decrypt;



let the_h = `${objeto_com_dados[11]}${objeto_com_dados[12]}${objeto_com_dados[13]}${objeto_com_dados[14]}`;
console.log("_h:",parseInt(the_h, 16));

console.log(" &&&&&&&&&&&&&&&&&&&&&&&&&&&& ");
console.log(objeto_com_dados);

for(let i=0;i<objeto_com_dados.length;i++){

        console.log("BYTE Nº",i);
        console.log("valor do byte:",objeto_com_dados[i])
        console.log(" - - - -  - - - -  - - - - - -  - ")

}


    return res.status(200).send()  // valeu léo
})

app.listen(port, () => {
  console.log(`node-deploy-teste rodando na porta: ${port}`)
})


// Fonte: https://dev.to/tqbit/quick-dirty-how-to-deploy-a-fullstack-vue-js-app-with-a-working-node-js-backend-51k4
