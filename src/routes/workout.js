import express from 'express'
import isEmpty from 'lodash/isEmpty'

import Workouts from '../models/workouts'

let router = express.Router()

router.get('/:identifier/:workout', (req, res) => {
  Workouts.query({
    where: { user_id: req.params.identifier.toString() },
    andWhere: { name: req.params.workout }
  }).fetch().then( workout => {
    res.json({ workout })
  })
})

export default router
