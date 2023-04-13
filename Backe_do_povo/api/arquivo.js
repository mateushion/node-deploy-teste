module.exports = badabess =>{

const testeCorpo = async(req,res)=> {
    
    console.log("Teste corpo, segue o header")
    console.log(req.headers)

    return res.status(200).send("Teste Corpo")


}

const testeSQL = async(req,res)=> {
    let   statusHttp = 0

    console.log("Teste SQL -- , segue o header")
    console.log(req.headers)

    Existe =   await app.db('usuarios')
    .where({id:1})
    .then((data)=>{return data})
    .catch(()=> {vetnull=[1,1,1,1];return vetnull})

    if(Existe.length === 0){

                socio = {
                    id: 1,
                    vivo:'sabiduria' ,
                    beiu: 'unique',
                    criado: '2023-01-01 15:20:00.112137-03',
                    dell: null,
                    aanot: null,
                    patolino: 'asdasdasdasdaasasasdasdasdasdasdasdasdsdasdasdasda'

                }

                statusHttp =   await app.db('usuarios')
                .insert(socio)
                .then(() => {return 200})
                .catch(() => {return 500});

                console.log("RESPOSTA DO STATUSHTTP");
                console.log(statusHttp);
}
   return res.statu(200).send(statusHttp)
}

return{testeCorpo,testeSQL}
}
