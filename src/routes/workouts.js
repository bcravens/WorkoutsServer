import express from 'express'
import authenticate from '../middlewares/authenticate'
import Workouts from '../models/workouts'

let router = express.Router()

router.post('/', authenticate, (req, res) => {
  res.status(201).json({ success: true })
})

router.get('/workouts', (req, res) => {
  Workouts.query().then( workouts => {
    res.json({ workouts })
  })
})

export default router
