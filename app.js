import express from 'express'
import cors from 'cors'

import router from './views/router.js'
import connectToDatabase from './db/connectToDb.js'

// ? TODO: import middleware

import logger from './middleware/logger.js'
import errorHandling from './middleware/errorHandler.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use(logger)

app.use('/api',router)

app.use(errorHandling)

export default app

