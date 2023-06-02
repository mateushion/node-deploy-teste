        
require('dotenv').config()                      //dotenv para definir modo teste ou produção

 //------ inicialicação do express duplicado
 const anotherEXPRe = require('express')()
 
  
  

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

 anotherEXPRe.listen(3030, () => {                         //Carregamos servidor HTTP
     console.log(`HION DEV SERVER --LORA DOIS ---- A EXECUTAR NA PORTA  3030`);})


 
 