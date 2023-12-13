import 'dotenv/config.js'
import './config/dbConnect.js'

import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

routes(app)

export default app