const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoUri =
  'mongodb+srv://admin:passwordpassword@cluster0.rgg2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
})
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
