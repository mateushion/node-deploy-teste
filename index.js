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


console.log(" ===================================== ");
console.log(" ===================================== ");

console.log("           branck master AWS           ");

console.log(" ===================================== ");
console.log(" ===================================== ");


app.get('/', function (req, res) {  // rota de fallback do frontend
    res.cookie('token', '23124515116124afweasd')
    // res.render(path.join(__dirname + '/site-deploy/index.html'));
});

app.post('/lorahion', function (req, res) {
    const tmp = new Date()
    console.log('=====NOVO NOVO ===============================')
    console.log('Seu pacote chegou com sucesso!')
    console.log(`${tmp.getHours() - 3}:${tmp.getMinutes()}:${tmp.getSeconds()}`)
    // console.log((req.body))
    console.log('------------------------------------')

    // Fonte: https://attacomsian.com/blog/nodejs-base64-encode-decode

    if((req.body.params.payload != undefined || req.body.params.payload != null)){
        console.log("req.body");
        console.log(req.body);
               
            const msg_decrypt = Buffer.from(req.body.params.payload, 'base64').toString('utf-8')

            let bytes = [];
            console.log('O pacote decriptografado é:');
            console.log(msg_decrypt);
              
            

            console.log('msg_decrypt[0]');
            console.log(msg_decrypt[0]);

            let statusDecimal =   parseInt(msg_decrypt[0],10);
            let SOCTotal =   parseInt(`${msg_decrypt[2]}${msg_decrypt[3]}`,10);
            let tensaoTotalmvDec =   parseInt(`${msg_decrypt[4]}${msg_decrypt[5]}${msg_decrypt[6]}${msg_decrypt[7]}${msg_decrypt[8]}`,10);
            let CorrenteTotalmvDec =   parseInt(`${msg_decrypt[9]}${msg_decrypt[10]}${msg_decrypt[11]}${msg_decrypt[12]}${msg_decrypt[13]}${msg_decrypt[14]}${msg_decrypt[15]}`,10);
            let SOH_total   =   parseInt(`${msg_decrypt[16]}${msg_decrypt[17]}`,10);
            let tem_amb   =   parseInt(`${msg_decrypt[18]}${msg_decrypt[19]}`,10);
            let autonomiaMediaMinutos =   parseInt(`${msg_decrypt[20]}${msg_decrypt[21]}${msg_decrypt[22]}${msg_decrypt[23]}${msg_decrypt[24]}`,10);
            let autonomiaRestanteMinutos =   parseInt(`${msg_decrypt[25]}${msg_decrypt[26]}${msg_decrypt[27]}${msg_decrypt[28]}${msg_decrypt[29]}`,10);
            let correnteRush =   parseInt(`${msg_decrypt[30]}${msg_decrypt[31]}${msg_decrypt[32]}${msg_decrypt[33]}${msg_decrypt[34]}`,10);
console.log("statusDecimal");
console.log(statusDecimal);

console.log("SOCTotal");
console.log(SOCTotal);

console.log("tensaoTotalmvDec");
console.log(tensaoTotalmvDec);

console.log("CorrenteTotalmvDec");
console.log(CorrenteTotalmvDec);

console.log("SOH_total");
console.log(SOH_total);

console.log("tem_amb");
console.log(tem_amb);

console.log("autonomiaMediaMinutos");
console.log(autonomiaMediaMinutos);

console.log("autonomiaRestanteMinutos");
console.log(autonomiaRestanteMinutos);


console.log("correnteRush");
console.log(correnteRush);


            let tensaoCel1 = parseInt(`${msg_decrypt[35]}${msg_decrypt[36]}${msg_decrypt[37]}${msg_decrypt[38]}`,10);
            let tensaoCel2 = parseInt(`${msg_decrypt[39]}${msg_decrypt[40]}${msg_decrypt[41]}${msg_decrypt[42]}`,10);
            let tensaoCel3 = parseInt(`${msg_decrypt[43]}${msg_decrypt[44]}${msg_decrypt[45]}${msg_decrypt[46]}`,10);
            let tensaoCel4 = parseInt(`${msg_decrypt[47]}${msg_decrypt[48]}${msg_decrypt[49]}${msg_decrypt[50]}`,10);
            let tensaoCel5 = parseInt(`${msg_decrypt[51]}${msg_decrypt[52]}${msg_decrypt[53]}${msg_decrypt[54]}`,10);
            let tensaoCel6 = parseInt(`${msg_decrypt[55]}${msg_decrypt[56]}${msg_decrypt[57]}${msg_decrypt[58]}`,10);
            let tensaoCel7 = parseInt(`${msg_decrypt[59]}${msg_decrypt[60]}${msg_decrypt[61]}${msg_decrypt[62]}`,10);
            let tensaoCel8 = parseInt(`${msg_decrypt[63]}${msg_decrypt[64]}${msg_decrypt[65]}${msg_decrypt[66]}`,10);
            let tensaoCel9 = parseInt(`${msg_decrypt[67]}${msg_decrypt[68]}${msg_decrypt[69]}${msg_decrypt[70]}`,10);
            let tensaoCel10 = parseInt(`${msg_decrypt[71]}${msg_decrypt[72]}${msg_decrypt[73]}${msg_decrypt[74]}`,10);
            let tensaoCel11 = parseInt(`${msg_decrypt[75]}${msg_decrypt[76]}${msg_decrypt[77]}${msg_decrypt[78]}`,10);
            let tensaoCel12 = parseInt(`${msg_decrypt[79]}${msg_decrypt[80]}${msg_decrypt[81]}${msg_decrypt[82]}`,10);
            let tensaoCel13 = parseInt(`${msg_decrypt[83]}${msg_decrypt[84]}${msg_decrypt[85]}${msg_decrypt[86]}`,10);
            let tensaoCel14 = parseInt(`${msg_decrypt[87]}${msg_decrypt[88]}${msg_decrypt[89]}${msg_decrypt[90]}`,10);
            let tensaoCel15 = parseInt(`${msg_decrypt[91]}${msg_decrypt[92]}${msg_decrypt[93]}${msg_decrypt[94]}`,10);
            let tensaoCel16 = parseInt(`${msg_decrypt[95]}${msg_decrypt[96]}${msg_decrypt[97]}${msg_decrypt[98]}`,10);


            
console.log("tensaoCel1 ");console.log(tensaoCel1 );
console.log("tensaoCel2 ");console.log(tensaoCel2 );
console.log("tensaoCel3 ");console.log(tensaoCel3 );
console.log("tensaoCel4 ");console.log(tensaoCel4 );
console.log("tensaoCel5 ");console.log(tensaoCel5 );
console.log("tensaoCel6 ");console.log(tensaoCel6 );
console.log("tensaoCel7 ");console.log(tensaoCel7 );
console.log("tensaoCel8 ");console.log(tensaoCel8 );
console.log("tensaoCel9 ");console.log(tensaoCel9 );
console.log("tensaoCel10");console.log(tensaoCel10);
console.log("tensaoCel11");console.log(tensaoCel11);
console.log("tensaoCel12");console.log(tensaoCel12);
console.log("tensaoCel13");console.log(tensaoCel13);
console.log("tensaoCel14");console.log(tensaoCel14);
console.log("tensaoCel15");console.log(tensaoCel15);
console.log("tensaoCel16");console.log(tensaoCel16);






             
         

        //------------------------------------------------------------
        //------------------------------------------------------------
        //COLOCAR SISTEMA QUE DESCOMPACTA O SISTEMA E CRIA JSON




                
    }


    return res.status(200).send("AQUI VINI! 300")  // valeu léo
})

app.listen(port, () => {
  console.log(`node-deploy-teste rodando na porta: ${port}`)
})


// Fonte: https://dev.to/tqbit/quick-dirty-how-to-deploy-a-fullstack-vue-js-app-with-a-working-node-js-backend-51k4
