const express = require('express')
const app = express()

const converter = require('./converter')

app.get('/rgbToHex', function(req, res) {
  const red = parseInt(req.query.red, 10)
  const green = parseInt(req.query.green, 10)
  const blue = parseInt(req.query.blue, 10)

  const hex = converter.rgbToHex(red, green, blue)

  res.send(hex)
})

app.get('/hexToRgb', function(req, res) {
  const rgb = converter.hexToRgb(req.query.hex)

  res.send(JSON.stringify(rgb))
})

app.listen(3000)