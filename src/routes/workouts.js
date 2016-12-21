import express from 'express'
import commonValidations from '../shared/validations/workouts'
import isEmpty from 'lodash/isEmpty'

import Workouts from '../models/workouts'

let router = express.Router()

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data)

  return Workouts.query({
    where: { name: data.name }
  }).fetch().then(workout => {
    if (workout) {
      if (workout.get('name') === data.name) {
        errors.name = 'You already have a workout with that name'
      }
    }
    return {
      errors,
      isValid: isEmpty(errors)
    }
  })

}

router.get('/:identifier', (req, res) => {
  Workouts.query({
    where: { user_id: req.params.identifier.toString() }
  }).fetchAll().then( workouts => {
    res.json({ workouts })
  })
})

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { name, user_id } = req.body
      Workouts.forge({
        name, user_id
      }, { hasTimestamps: true }).save()
        .then(user => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }))
    } else {
      res.status(400).json(errors)
    }
  })

})

export default router
