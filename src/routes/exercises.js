import express from 'express'

import Exercises from '../models/exercises'

let router = express.Router()

router.get('/:workout_id', (req, res) => {
  Exercises.query({
    where: { workout_id: req.params.workout_id.toString() }
  }).fetchAll().then( exercises => {
    res.json({ exercises })
  })
})

router.post('/', (req, res) => {
  const { name, sets, reps, weight, workout_id } = req.body
  Exercises.forge({
    name, sets, reps, weight, workout_id
  }, { hasTimestamps: true }).save()
    .then(exercise => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }))
})

export default router
