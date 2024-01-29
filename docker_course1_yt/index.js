const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Docker! Atualizações! =D <3')
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})