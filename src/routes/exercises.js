import express from 'express'
import commonValidations from '../shared/validations/exercises'
import isEmpty from 'lodash/isEmpty'

import Exercises from '../models/exercises'

let router = express.Router()

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data)

  return Exercises.query({
    where: { name: data.name }
  }).fetch().then(exercise => {
    if (exercise) {
      if (exercise.get('name') === data.name) {
        errors.name = 'You already have a exercise with that name'
      }
    }
    return {
      errors,
      isValid: isEmpty(errors)
    }
  })

}

router.get('/:workout_id', (req, res) => {
  Exercises.query({
    where: { workout_id: req.params.workout_id.toString() }
  }).fetchAll().then( exercises => {
    res.json({ exercises })
  })
})

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { name, sets, reps, weight, workout_id, user_id } = req.body
      Exercise.forge({
        name, sets, reps, weight, workout_id, user_id
      }, { hasTimestamps: true }).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }))
    } else {
      res.status(400).json(errors)
    }
  })

})

export default router
