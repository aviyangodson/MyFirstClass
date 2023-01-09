const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let a = "hello";
    res.send(a)
})
app.get('/add', (req, res) => {
    let b = 5;
    let a = 10;
    let sum = a+b;
      res.status(200).json(sum)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})