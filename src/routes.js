const { Router } = require('express')
const PersonController = require('./Controllers/PersonController')
const routes = Router()

routes.get('/', (req, res) => {
  res.send({ message: 'Server is running' })
})

routes.post('/create-person', (req, res) => PersonController.createPerson(req, res))
routes.get('/persons', (req, res) => PersonController.getPersons(req, res))
routes.get('/person/:id', (req, res) => PersonController.getPerson(req, res))
routes.patch('/person/:id', (req, res) => PersonController.editPerson(req, res))
routes.delete('/person/:id', (req, res) => PersonController.deletePerson(req, res))

module.exports = routes


