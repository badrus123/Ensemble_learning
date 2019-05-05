const express = require('express')
const $ = require('jquery')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.render('index')
})

app.listen(3000, () => {
  console.log("Running on port for esemble-learning: " + 3000)
})