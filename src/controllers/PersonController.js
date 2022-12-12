const Person = require('../models/Person')

class PersonController {
  static async createPerson(req, res) {
    const { name, salary, approved } = req.body

    if (!name) {
      res.status(422).json({ error: 'name is empty' })
      return
    }

    if (!salary) {
      res.status(422).json({ error: 'salary is empty' })
    }
    const person = {
      name,
      salary,
      approved
    }

    try {
      await Person.create(person)
      res.status(201).json({ message: 'Person insert successfully' })
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async getPersons(req, res) {
    try {
      const persons = await Person.find()
      res.status(200).json(persons)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async getPerson(req, res) {
    const { id } = req.params

    try {
      const person = await Person.find({ _id: id })

      if (!person) {
        res.status(204).json({ message: 'Person not found' })
        return
      }

      res.status(200).json(person)
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async editPerson(req, res) {
    const { id } = req.params
    const { name, salary, approved } = req.body
    const person = {
      name,
      salary,
      approved
    }

    if (name == '') {
      res.status(422).json({ error: 'name is empty' })
      return
    }

    try {
      const updatePerson = await Person.updateOne({ _id: id }, person)

      if (updatePerson.matchedCount === 0) {
        res.status(204).json({ message: 'Person not found' })
        return
      }
      res.status(200).json(person)

    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params

    try {
      await Person.deleteOne({ _id: id })
      res.status(200).json({ message: 'Person deleted successfully' })

    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

module.exports = PersonController
