import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import users from './routes/users'
import auth from './routes/auth'
import workouts from './routes/workouts'
import workout from './routes/workout'
import exercises from './routes/exercises'

let app = express()

app.use(bodyParser.json())

app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/workouts', workouts)
app.use('/api/workout', workout)
app.use('/api/exercises', exercises)

app.listen(8080, () => console.log('Running on localhost:8080'))
