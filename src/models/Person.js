const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  name: String,
  salary: Number,
  aprroved: Boolean
})

module.exports = Person
