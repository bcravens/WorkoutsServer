import express from 'express'
import isEmpty from 'lodash/isEmpty'

import Workouts from '../models/workouts'

let router = express.Router()

router.get('/:user_id/:workout_id', (req, res) => {
  Workouts.query({
    where: { user_id: req.params.user_id.toString() },
    andWhere: { id: req.params.workout_id.toString() }
  }).fetchAll().then( workout => {
    res.json({ workout })
  })
})

export default router
