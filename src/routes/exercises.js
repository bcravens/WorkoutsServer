import express from 'express'
import authenticate from '../middlewares/authenticate'
import Exercises from '../models/exercises'

let router = express.Router()

router.post('/', authenticate, (req, res) => {
  res.status(201).json({ success: true })
})

router.get('/exercises', (req, res) => {
  Exercises.query().then( exercises => {
    res.json({ exercises })
  })
})

export default router
