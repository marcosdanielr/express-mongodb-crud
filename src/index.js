require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Person = require('./models/Person')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(cors())
app.use(routes)

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api-cluster.o48qvbh.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('Mongodb is connected'))
  .catch(err => console.log(err))


app.listen(3010, () => {
  console.log('Server is running on port 3010')
})
