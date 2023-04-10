const express = require('express')
const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3000

// O app Vue será inserido dentro de 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`node-deploy-teste rodando na porta: ${port}`)
})

